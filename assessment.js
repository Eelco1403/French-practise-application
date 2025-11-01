/**
 * LAYER 1: ASSESSMENT SYSTEM
 * Core functions for placement test & mastery tracking
 * 
 * This module provides the foundational logic for:
 * - Recording student attempts
 * - Calculating mastery stages
 * - Detecting knowledge decay
 * - Evaluating readiness for next level
 */

/**
 * recordAttempt()
 * Records a student's attempt and updates mastery data
 * 
 * @param {Object} masteryData - Current mastery object for item
 * @param {string} itemKey - Unique identifier for the item
 * @param {boolean} isCorrect - Whether the answer was correct
 * @returns {Object} Updated mastery object
 * 
 * Example:
 *   const updated = recordAttempt(masteryData, "v-1", true);
 *   // Returns: { timesAttempted: 4, timesCorrect: 3, masteryPercentage: 75, stage: "mastered" }
 */
function recordAttempt(masteryData, itemKey, isCorrect) {
  // Initialize if first attempt
  if (!masteryData || Object.keys(masteryData).length === 0) {
    masteryData = {};
  }
  
  if (!masteryData[itemKey]) {
    masteryData[itemKey] = {
      timesAttempted: 0,
      timesCorrect: 0,
      masteryPercentage: 0,
      stage: 'learning',
      lastAttempts: [], // Track last 3 attempts for decay detection
      firstAttemptDate: new Date().toISOString(),
      lastAttemptDate: null
    };
  }
  
  // Increment attempt counter
  masteryData[itemKey].timesAttempted += 1;
  
  // Increment correct counter if applicable
  if (isCorrect) {
    masteryData[itemKey].timesCorrect += 1;
  }
  
  // Track last 3 attempts (for decay detection)
  masteryData[itemKey].lastAttempts.push(isCorrect);
  if (masteryData[itemKey].lastAttempts.length > 3) {
    masteryData[itemKey].lastAttempts.shift(); // Keep only last 3
  }
  
  // Calculate mastery percentage
  masteryData[itemKey].masteryPercentage = 
    (masteryData[itemKey].timesCorrect / masteryData[itemKey].timesAttempted) * 100;
  
  // Update last attempt date
  masteryData[itemKey].lastAttemptDate = new Date().toISOString();
  
  // Calculate mastery stage based on percentage
  masteryData[itemKey].stage = calculateMasteryStage(masteryData[itemKey].masteryPercentage);
  
  return masteryData;
}

/**
 * calculateMasteryStage()
 * Maps a mastery percentage to a stage name
 * 
 * @param {number} percentage - Mastery percentage (0-100)
 * @returns {string} Stage name: 'learning', 'developing', 'mastered', or 'solid'
 * 
 * Mapping:
 * - 0-50%: 'learning' (beginner, needs practice)
 * - 51-70%: 'developing' (making progress, still errors)
 * - 71-85%: 'mastered' (confident, occasional errors)
 * - 86%+: 'solid' (very reliable)
 */
function calculateMasteryStage(percentage) {
  if (percentage <= 50) {
    return 'learning';
  } else if (percentage <= 70) {
    return 'developing';
  } else if (percentage <= 85) {
    return 'mastered';
  } else {
    return 'solid';
  }
}

/**
 * checkDecay()
 * Detects if knowledge is decaying (performance declining)
 * 
 * @param {Array<boolean>} lastAttempts - Last 3 attempts (true = correct, false = incorrect)
 * @param {number} allTimeAccuracy - Overall accuracy percentage
 * @returns {boolean} True if decay detected (performance declining)
 * 
 * Logic:
 * - Calculate recent accuracy from last 3 attempts
 * - If (allTimeAccuracy - recentAccuracy) > 15%, decay is happening
 * - Only detect decay if user WAS previously good (70%+)
 * - This means item should be reviewed/practiced more
 * 
 * Example:
 *   checkDecay([true, false, false], 80) 
 *   // Recent accuracy: 33%, All-time: 80%, Gap: 47% > 15% = TRUE (decay detected)
 */
function checkDecay(lastAttempts, allTimeAccuracy) {
  // Safety check: need at least 1 attempt
  if (!lastAttempts || lastAttempts.length === 0) {
    return false;
  }
  
  // Only consider decay if user was previously at least 70% accurate
  // (no point detecting "decay" from a state of being "learning")
  if (allTimeAccuracy < 70) {
    return false;
  }
  
  // Calculate recent accuracy from last attempts
  const correctInRecent = lastAttempts.filter(attempt => attempt === true).length;
  const recentAccuracy = (correctInRecent / lastAttempts.length) * 100;
  
  // Decay threshold: 15% gap between all-time and recent
  const decayThreshold = 15;
  const accuracyGap = allTimeAccuracy - recentAccuracy;
  
  // Return true if performance has declined significantly
  return accuracyGap > decayThreshold;
}

/**
 * evaluateReadinessForNextLevel()
 * Determines if user is ready to progress to next level
 * 
 * @param {Object} masteryData - User's complete mastery data (all items)
 * @returns {Object} { ready: boolean, reason: string }
 * 
 * Criteria:
 * - Must have attempted at least 30 items
 * - At least 70% of those items must be 'mastered' or 'solid'
 * 
 * Example:
 *   evaluateReadinessForNextLevel(masteryData)
 *   // Returns: { ready: true, reason: "Completed 35 items with 75% mastered/solid" }
 */
function evaluateReadinessForNextLevel(masteryData) {
  // Count total items and items at mastered/solid level
  const items = Object.values(masteryData);
  const totalItems = items.length;
  const masteredSolidItems = items.filter(item => 
    item.stage === 'mastered' || item.stage === 'solid'
  ).length;
  
  // Minimum items threshold
  const minimumItems = 30;
  if (totalItems < minimumItems) {
    return {
      ready: false,
      reason: `Need ${minimumItems} item attempts. Current: ${totalItems}`
    };
  }
  
  // Minimum mastery threshold
  const masteryThreshold = 0.70; // 70%
  const masteredPercentage = masteredSolidItems / totalItems;
  
  if (masteredPercentage >= masteryThreshold) {
    return {
      ready: true,
      reason: `Completed ${totalItems} items with ${(masteredPercentage * 100).toFixed(0)}% mastered/solid`
    };
  } else {
    return {
      ready: false,
      reason: `${(masteredPercentage * 100).toFixed(0)}% mastered. Need 70%. (${masteredSolidItems}/${totalItems} items)`
    };
  }
}

/**
 * saveProgress()
 * Saves user progress to localStorage
 * 
 * @param {string} userId - Unique user identifier
 * @param {Object} masteryData - User's mastery data
 * @returns {boolean} True if save successful
 */
function saveProgress(userId, masteryData) {
  try {
    const progressKey = `progress_${userId}`;
    localStorage.setItem(progressKey, JSON.stringify(masteryData));
    return true;
  } catch (e) {
    console.error('Error saving progress:', e);
    return false;
  }
}

/**
 * loadProgress()
 * Loads user progress from localStorage
 * 
 * @param {string} userId - Unique user identifier
 * @returns {Object} User's mastery data, or empty object if not found
 */
function loadProgress(userId) {
  try {
    const progressKey = `progress_${userId}`;
    const saved = localStorage.getItem(progressKey);
    return saved ? JSON.parse(saved) : {};
  } catch (e) {
    console.error('Error loading progress:', e);
    return {};
  }
}

/**
 * generateUUID()
 * Generates a simple UUID for user identification
 * 
 * @returns {string} UUID-like string
 */
function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

// ============================================
// EXPORTS (for use in other modules)
// ============================================

// Node.js exports (for backend use)
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    recordAttempt,
    calculateMasteryStage,
    checkDecay,
    evaluateReadinessForNextLevel,
    saveProgress,
    loadProgress,
    generateUUID
  };
}

// Browser global exports
if (typeof window !== 'undefined') {
  window.AssessmentSystem = {
    recordAttempt,
    calculateMasteryStage,
    checkDecay,
    evaluateReadinessForNextLevel,
    saveProgress,
    loadProgress,
    generateUUID
  };
}
