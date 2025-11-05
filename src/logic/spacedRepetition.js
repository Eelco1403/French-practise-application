/**
 * SPACED REPETITION ENGINE
 * Implements Leitner Box System with SM-2 Algorithm
 *
 * This module provides intelligent question scheduling based on:
 * - Leitner Box System: 5 boxes with increasing review intervals
 * - SM-2 Algorithm: Adaptive intervals based on performance quality
 * - Due date tracking: Items due for review are prioritized
 *
 * Integration with Assessment System:
 * - Works alongside existing mastery tracking
 * - Adds scheduling metadata to mastery data
 * - Prioritizes due items in question selection
 */

/**
 * LEITNER BOX CONFIGURATION
 * 5 boxes with increasing review intervals
 *
 * Box 1: New/failed items - review every session (0 days)
 * Box 2: Learning items - review every day (1 day)
 * Box 3: Developing items - review every 3 days
 * Box 4: Mastered items - review every 7 days
 * Box 5: Solid items - review every 14 days
 */
const LEITNER_BOXES = {
  1: { interval: 0, name: 'new' },           // Review immediately
  2: { interval: 1, name: 'learning' },      // Review after 1 day
  3: { interval: 3, name: 'developing' },    // Review after 3 days
  4: { interval: 7, name: 'mastered' },      // Review after 7 days
  5: { interval: 14, name: 'solid' }         // Review after 14 days
};

/**
 * SM-2 ALGORITHM DEFAULTS
 * Used for calculating adaptive intervals
 *
 * easinessFactor: How easy the item is (1.3 = hard, 2.5 = easy)
 * interval: Days until next review
 * repetitions: Consecutive correct answers
 */
const SM2_DEFAULTS = {
  easinessFactor: 2.5,  // Default difficulty
  interval: 1,          // Start with 1 day
  repetitions: 0        // No successful repetitions yet
};

/**
 * initializeSpacedRepetition()
 * Initializes spaced repetition data for an item
 *
 * @param {string} itemKey - Unique identifier for the item
 * @returns {Object} Initial spaced repetition metadata
 */
function initializeSpacedRepetition(itemKey) {
  return {
    itemKey: itemKey,
    box: 1,                                  // Start in Box 1 (new items)
    dueDate: new Date().toISOString(),       // Due immediately
    lastReview: null,                        // Never reviewed yet
    easinessFactor: SM2_DEFAULTS.easinessFactor,
    interval: SM2_DEFAULTS.interval,
    repetitions: SM2_DEFAULTS.repetitions,
    createdDate: new Date().toISOString()
  };
}

/**
 * calculateSM2()
 * Implements the SM-2 (SuperMemo 2) algorithm for spaced repetition
 *
 * @param {Object} srData - Current spaced repetition data
 * @param {number} quality - Response quality (0-5)
 *   0: Complete blackout, didn't remember
 *   1: Incorrect, but recognized upon seeing answer
 *   2: Incorrect, but seemed easy to recall
 *   3: Correct, but with serious difficulty
 *   4: Correct, with some hesitation
 *   5: Perfect response, immediate recall
 * @returns {Object} Updated spaced repetition data
 *
 * Algorithm:
 * 1. Update easiness factor based on quality
 * 2. Reset repetitions if quality < 3 (incorrect/difficult)
 * 3. Calculate next interval based on repetitions
 * 4. Set next due date
 */
function calculateSM2(srData, quality) {
  // Ensure quality is in valid range (0-5)
  quality = Math.max(0, Math.min(5, quality));

  // Deep copy to avoid mutation
  const updated = { ...srData };

  // Update easiness factor: EF' = EF + (0.1 - (5 - q) * (0.08 + (5 - q) * 0.02))
  // Minimum EF is 1.3
  updated.easinessFactor = Math.max(
    1.3,
    updated.easinessFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02))
  );

  // If quality < 3, reset repetitions (incorrect or too difficult)
  if (quality < 3) {
    updated.repetitions = 0;
    updated.interval = 1; // Back to 1 day
  } else {
    // Increment repetitions for correct answers
    updated.repetitions += 1;

    // Calculate interval based on repetitions
    if (updated.repetitions === 1) {
      updated.interval = 1; // First correct: 1 day
    } else if (updated.repetitions === 2) {
      updated.interval = 6; // Second correct: 6 days
    } else {
      // Subsequent: multiply previous interval by easiness factor
      updated.interval = Math.round(updated.interval * updated.easinessFactor);
    }
  }

  // Update last review date
  updated.lastReview = new Date().toISOString();

  // Calculate next due date
  const nextDue = new Date();
  nextDue.setDate(nextDue.getDate() + updated.interval);
  updated.dueDate = nextDue.toISOString();

  return updated;
}

/**
 * moveLeitnerBox()
 * Moves an item between Leitner boxes based on performance
 *
 * @param {Object} srData - Current spaced repetition data
 * @param {boolean} isCorrect - Whether answer was correct
 * @returns {Object} Updated spaced repetition data with new box
 *
 * Logic:
 * - Correct answer: move up one box (max box 5)
 * - Incorrect answer: move back to box 1
 * - Update interval based on new box
 */
function moveLeitnerBox(srData, isCorrect) {
  const updated = { ...srData };

  if (isCorrect) {
    // Move up one box (max 5)
    updated.box = Math.min(5, updated.box + 1);
  } else {
    // Failed: back to box 1
    updated.box = 1;
  }

  // Update interval based on new box
  updated.interval = LEITNER_BOXES[updated.box].interval;

  // Update last review
  updated.lastReview = new Date().toISOString();

  // Calculate due date
  const nextDue = new Date();
  nextDue.setDate(nextDue.getDate() + updated.interval);
  updated.dueDate = nextDue.toISOString();

  return updated;
}

/**
 * updateSpacedRepetition()
 * Main function to update spaced repetition data after an attempt
 * Combines Leitner box movement with SM-2 algorithm
 *
 * @param {Object} srData - Current spaced repetition data
 * @param {boolean} isCorrect - Whether answer was correct
 * @param {number} responseTime - Time taken to answer (ms) - optional
 * @returns {Object} Updated spaced repetition data
 *
 * Quality calculation:
 * - Correct + fast (< 5s): quality = 5
 * - Correct + medium (5-10s): quality = 4
 * - Correct + slow (> 10s): quality = 3
 * - Incorrect: quality = 0-2 based on proximity
 */
function updateSpacedRepetition(srData, isCorrect, responseTime = null) {
  // Initialize if not present
  if (!srData || !srData.box) {
    srData = initializeSpacedRepetition(srData?.itemKey || 'unknown');
  }

  // Calculate quality score for SM-2
  let quality;
  if (isCorrect) {
    // Determine quality based on response time (if available)
    if (responseTime !== null) {
      if (responseTime < 5000) {
        quality = 5; // Perfect, fast recall
      } else if (responseTime < 10000) {
        quality = 4; // Correct with slight hesitation
      } else {
        quality = 3; // Correct but slow
      }
    } else {
      // No timing data - default to good quality
      quality = 4;
    }
  } else {
    // Incorrect answer - low quality
    quality = 1; // Recognized but couldn't recall
  }

  // Apply SM-2 algorithm
  let updated = calculateSM2(srData, quality);

  // Also apply Leitner box movement
  updated = moveLeitnerBox(updated, isCorrect);

  return updated;
}

/**
 * isDue()
 * Check if an item is due for review
 *
 * @param {Object} srData - Spaced repetition data for item
 * @returns {boolean} True if item is due or overdue
 */
function isDue(srData) {
  if (!srData || !srData.dueDate) {
    return true; // New items are always due
  }

  const now = new Date();
  const due = new Date(srData.dueDate);

  return now >= due;
}

/**
 * getDueItems()
 * Get all items that are currently due for review
 *
 * @param {Object} masteryData - Complete mastery data with SR metadata
 * @returns {Array<string>} Array of item keys that are due
 */
function getDueItems(masteryData) {
  const dueItems = [];

  for (const [itemKey, data] of Object.entries(masteryData)) {
    if (data.spacedRepetition && isDue(data.spacedRepetition)) {
      dueItems.push(itemKey);
    } else if (!data.spacedRepetition) {
      // Items without SR data are considered due (new items)
      dueItems.push(itemKey);
    }
  }

  return dueItems;
}

/**
 * getItemsByBox()
 * Get all items in a specific Leitner box
 *
 * @param {Object} masteryData - Complete mastery data
 * @param {number} boxNumber - Box number (1-5)
 * @returns {Array<string>} Array of item keys in that box
 */
function getItemsByBox(masteryData, boxNumber) {
  const items = [];

  for (const [itemKey, data] of Object.entries(masteryData)) {
    if (data.spacedRepetition && data.spacedRepetition.box === boxNumber) {
      items.push(itemKey);
    } else if (!data.spacedRepetition && boxNumber === 1) {
      // Items without SR data are in box 1
      items.push(itemKey);
    }
  }

  return items;
}

/**
 * getSpacedRepetitionStats()
 * Get statistics about spaced repetition progress
 *
 * @param {Object} masteryData - Complete mastery data
 * @returns {Object} Statistics object with counts per box and due items
 */
function getSpacedRepetitionStats(masteryData) {
  const stats = {
    box1: 0,  // New/failed items
    box2: 0,  // Learning
    box3: 0,  // Developing
    box4: 0,  // Mastered
    box5: 0,  // Solid
    totalDue: 0,
    totalItems: 0,
    averageInterval: 0
  };

  let totalInterval = 0;

  for (const [itemKey, data] of Object.entries(masteryData)) {
    stats.totalItems++;

    if (data.spacedRepetition) {
      const box = data.spacedRepetition.box;
      stats[`box${box}`]++;

      if (isDue(data.spacedRepetition)) {
        stats.totalDue++;
      }

      totalInterval += data.spacedRepetition.interval;
    } else {
      // Items without SR are in box 1 and due
      stats.box1++;
      stats.totalDue++;
    }
  }

  // Calculate average interval
  if (stats.totalItems > 0) {
    stats.averageInterval = Math.round(totalInterval / stats.totalItems);
  }

  return stats;
}

/**
 * prioritizeQuestions()
 * Prioritize questions for intelligent selection
 * Combines due date, box level, and mastery stage
 *
 * @param {Array<Object>} questions - Array of question objects
 * @param {Object} masteryData - User's mastery data
 * @returns {Array<Object>} Sorted questions (highest priority first)
 *
 * Priority order:
 * 1. Due items in lower boxes (most urgent)
 * 2. Due items in higher boxes (scheduled review)
 * 3. New items (never attempted)
 * 4. Not due items (least urgent)
 */
function prioritizeQuestions(questions, masteryData) {
  return questions.sort((a, b) => {
    const aData = masteryData[a.id];
    const bData = masteryData[b.id];

    const aSR = aData?.spacedRepetition;
    const bSR = bData?.spacedRepetition;

    // Calculate priority scores
    const aScore = calculatePriority(aSR);
    const bScore = calculatePriority(bSR);

    // Higher score = higher priority
    return bScore - aScore;
  });
}

/**
 * calculatePriority()
 * Calculate priority score for an item
 *
 * @param {Object} srData - Spaced repetition data
 * @returns {number} Priority score (higher = more urgent)
 */
function calculatePriority(srData) {
  if (!srData) {
    return 100; // New items: high priority
  }

  // Check if due
  const due = isDue(srData);

  if (due) {
    // Due items: priority based on box (lower box = higher priority)
    // Box 1 (new/failed): 90-95
    // Box 2 (learning): 80-85
    // Box 3 (developing): 70-75
    // Box 4 (mastered): 60-65
    // Box 5 (solid): 50-55
    return 100 - (srData.box * 10) + Math.floor(Math.random() * 5);
  } else {
    // Not due yet: low priority (0-10)
    return Math.floor(Math.random() * 10);
  }
}

/**
 * saveSpacedRepetitionData()
 * Save spaced repetition data to localStorage
 *
 * @param {string} userId - User identifier
 * @param {Object} masteryData - Mastery data with SR metadata
 * @returns {boolean} Success status
 */
function saveSpacedRepetitionData(userId, masteryData) {
  try {
    const key = `sr_${userId}`;
    localStorage.setItem(key, JSON.stringify(masteryData));
    return true;
  } catch (e) {
    console.error('Error saving spaced repetition data:', e);
    return false;
  }
}

/**
 * loadSpacedRepetitionData()
 * Load spaced repetition data from localStorage
 *
 * @param {string} userId - User identifier
 * @returns {Object} Mastery data with SR metadata
 */
function loadSpacedRepetitionData(userId) {
  try {
    const key = `sr_${userId}`;
    const saved = localStorage.getItem(key);
    return saved ? JSON.parse(saved) : {};
  } catch (e) {
    console.error('Error loading spaced repetition data:', e);
    return {};
  }
}

// ============================================
// EXPORTS
// ============================================

// Node.js exports
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    LEITNER_BOXES,
    SM2_DEFAULTS,
    initializeSpacedRepetition,
    calculateSM2,
    moveLeitnerBox,
    updateSpacedRepetition,
    isDue,
    getDueItems,
    getItemsByBox,
    getSpacedRepetitionStats,
    prioritizeQuestions,
    calculatePriority,
    saveSpacedRepetitionData,
    loadSpacedRepetitionData
  };
}

// Browser global exports
if (typeof window !== 'undefined') {
  window.SpacedRepetitionEngine = {
    LEITNER_BOXES,
    SM2_DEFAULTS,
    initializeSpacedRepetition,
    calculateSM2,
    moveLeitnerBox,
    updateSpacedRepetition,
    isDue,
    getDueItems,
    getItemsByBox,
    getSpacedRepetitionStats,
    prioritizeQuestions,
    calculatePriority,
    saveSpacedRepetitionData,
    loadSpacedRepetitionData
  };
}
