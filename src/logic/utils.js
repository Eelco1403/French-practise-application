/**
 * LAYER 1: UTILITY FUNCTIONS
 * Helper functions for input normalization and answer validation
 */

/**
 * normalizeInput()
 * Converts input string to lowercase and removes accents
 * 
 * @param {string} input - Raw user input
 * @returns {string} Normalized string (lowercase, no accents, trimmed)
 * 
 * Examples:
 *   normalizeInput("Café") => "cafe"
 *   normalizeInput("  ÊTRE  ") => "etre"
 *   normalizeInput("naïve") => "naive"
 *   normalizeInput("résumé") => "resume"
 */
function normalizeInput(input) {
  if (!input || typeof input !== 'string') {
    return '';
  }
  
  // Step 1: Trim whitespace
  let normalized = input.trim();
  
  // Step 2: Convert to lowercase
  normalized = normalized.toLowerCase();
  
  // Step 3: Remove accents using Unicode normalization
  // NFD = decompose accented characters into base + accent marks
  // Then remove the accent marks (diacritics)
  normalized = normalized.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  
  return normalized;
}

/**
 * validateAnswer()
 * Checks if user's answer matches the correct answer
 * Handles accents, case, and whitespace variations
 * 
 * @param {string} userAnswer - User's input
 * @param {string} correctAnswer - Correct answer from content database
 * @returns {boolean} True if answers match (after normalization)
 * 
 * Examples:
 *   validateAnswer("Café", "cafe") => true
 *   validateAnswer("ETRE", "être") => true
 *   validateAnswer("  hello  ", "Hello") => true
 *   validateAnswer("naive", "naïve") => true
 *   validateAnswer("cat", "dog") => false
 */
function validateAnswer(userAnswer, correctAnswer) {
  if (!userAnswer || !correctAnswer) {
    return false;
  }
  
  // Normalize both strings
  const normalizedUser = normalizeInput(userAnswer);
  const normalizedCorrect = normalizeInput(correctAnswer);
  
  // Compare normalized versions
  return normalizedUser === normalizedCorrect;
}

/**
 * removeAccents()
 * Removes diacritical marks from a string
 * Useful for display or searching
 * 
 * @param {string} text - Text with accents
 * @returns {string} Text without accents
 * 
 * Examples:
 *   removeAccents("Café") => "Cafe"
 *   removeAccents("naïve") => "naive"
 *   removeAccents("résumé") => "resume"
 */
function removeAccents(text) {
  if (!text || typeof text !== 'string') {
    return '';
  }
  
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

/**
 * capitalizeFirst()
 * Capitalizes the first letter of a string
 * 
 * @param {string} text - Input text
 * @returns {string} Text with first letter capitalized
 * 
 * Examples:
 *   capitalizeFirst("hello") => "Hello"
 *   capitalizeFirst("café") => "Café"
 */
function capitalizeFirst(text) {
  if (!text || typeof text !== 'string' || text.length === 0) {
    return text;
  }
  
  return text.charAt(0).toUpperCase() + text.slice(1);
}

/**
 * getRandomItem()
 * Selects a random item from an array
 * 
 * @param {Array} array - Input array
 * @returns {*} Random item from array, or null if empty
 * 
 * Examples:
 *   getRandomItem([1, 2, 3]) => 1 (or 2 or 3)
 *   getRandomItem([]) => null
 */
function getRandomItem(array) {
  if (!array || array.length === 0) {
    return null;
  }
  
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

/**
 * shuffleArray()
 * Returns a shuffled copy of an array (Fisher-Yates shuffle)
 * 
 * @param {Array} array - Input array
 * @returns {Array} Shuffled copy (original unchanged)
 * 
 * Examples:
 *   shuffleArray([1, 2, 3, 4, 5]) => [3, 1, 5, 2, 4]
 */
function shuffleArray(array) {
  if (!array || !Array.isArray(array)) {
    return [];
  }
  
  // Create a copy to avoid modifying original
  const copy = [...array];
  
  // Fisher-Yates shuffle algorithm
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]]; // Swap
  }
  
  return copy;
}

/**
 * getScoreColor()
 * Returns a color for UI display based on mastery percentage
 * 
 * @param {number} percentage - Mastery percentage (0-100)
 * @returns {string} Color name (for Tailwind CSS)
 * 
 * Mapping:
 * - 0-50%: 'red' (learning)
 * - 51-70%: 'yellow' (developing)
 * - 71-85%: 'green' (mastered)
 * - 86%+: 'emerald' (solid)
 */
function getScoreColor(percentage) {
  if (percentage <= 50) {
    return 'red';
  } else if (percentage <= 70) {
    return 'yellow';
  } else if (percentage <= 85) {
    return 'green';
  } else {
    return 'emerald';
  }
}

/**
 * getStageBadge()
 * Returns display text for a mastery stage
 * 
 * @param {string} stage - Stage name ('learning', 'developing', 'mastered', 'solid')
 * @returns {Object} { text: string, color: string, icon: string }
 */
function getStageBadge(stage) {
  const badges = {
    'learning': {
      text: 'Learning',
      color: 'bg-red-100 text-red-800',
      icon: '📚'
    },
    'developing': {
      text: 'Developing',
      color: 'bg-yellow-100 text-yellow-800',
      icon: '📈'
    },
    'mastered': {
      text: 'Mastered',
      color: 'bg-green-100 text-green-800',
      icon: '✓'
    },
    'solid': {
      text: 'Solid',
      color: 'bg-emerald-100 text-emerald-800',
      icon: '⭐'
    }
  };
  
  return badges[stage] || badges['learning'];
}

/**
 * formatPercentage()
 * Formats a number as a percentage string
 * 
 * @param {number} value - Decimal value (0-1) or percentage (0-100)
 * @param {boolean} isDecimal - True if value is 0-1 format
 * @returns {string} Formatted percentage with % sign
 * 
 * Examples:
 *   formatPercentage(0.75, true) => "75%"
 *   formatPercentage(75, false) => "75%"
 */
function formatPercentage(value, isDecimal = false) {
  const percentage = isDecimal ? value * 100 : value;
  return `${Math.round(percentage)}%`;
}

/**
 * formatDate()
 * Formats an ISO date string for display
 * 
 * @param {string} isoDate - ISO format date string
 * @returns {string} Human-readable date
 * 
 * Examples:
 *   formatDate("2025-11-01T10:30:00Z") => "Nov 1, 2025"
 */
function formatDate(isoDate) {
  if (!isoDate) {
    return '';
  }
  
  const date = new Date(isoDate);
  return date.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  });
}

/**
 * calculateDaysSince()
 * Calculates days between two dates
 * 
 * @param {string} isoDate - ISO format date string
 * @param {string} referenceDate - ISO format reference date (default: now)
 * @returns {number} Number of days
 * 
 * Examples:
 *   calculateDaysSince("2025-10-25T00:00:00Z") => 7 (if today is Nov 1)
 */
function calculateDaysSince(isoDate, referenceDate = null) {
  const date1 = new Date(isoDate);
  const date2 = referenceDate ? new Date(referenceDate) : new Date();
  
  const diffTime = Math.abs(date2 - date1);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  return diffDays;
}

// ============================================
// EXPORTS (for use in other modules)
// ============================================

// Node.js exports
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    normalizeInput,
    validateAnswer,
    removeAccents,
    capitalizeFirst,
    getRandomItem,
    shuffleArray,
    getScoreColor,
    getStageBadge,
    formatPercentage,
    formatDate,
    calculateDaysSince
  };
}

// Browser global exports
if (typeof window !== 'undefined') {
  window.UtilityFunctions = {
    normalizeInput,
    validateAnswer,
    removeAccents,
    capitalizeFirst,
    getRandomItem,
    shuffleArray,
    getScoreColor,
    getStageBadge,
    formatPercentage,
    formatDate,
    calculateDaysSince
  };
}
