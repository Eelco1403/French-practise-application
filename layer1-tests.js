/**
 * LAYER 1: TEST SUITE
 * Comprehensive tests for assessment.js and utils.js
 * 
 * Run tests with: node layer1-tests.js
 */

// Load modules (works in Node.js)
const Assessment = require('./assessment.js');
const Utils = require('./utils.js');

// Test counter
let testsPassed = 0;
let testsFailed = 0;

/**
 * Test helper function
 */
function assert(condition, testName) {
  if (condition) {
    console.log(`✓ PASS: ${testName}`);
    testsPassed++;
  } else {
    console.log(`✗ FAIL: ${testName}`);
    testsFailed++;
  }
}

/**
 * Test helper for equality
 */
function assertEqual(actual, expected, testName) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log(`✓ PASS: ${testName}`);
    testsPassed++;
  } else {
    console.log(`✗ FAIL: ${testName}`);
    console.log(`  Expected: ${JSON.stringify(expected)}`);
    console.log(`  Actual: ${JSON.stringify(actual)}`);
    testsFailed++;
  }
}

// ============================================
// UTILS.JS TESTS
// ============================================

console.log('\n=== TESTING UTILS.JS ===\n');

// normalizeInput tests
console.log('Testing normalizeInput():');
assertEqual(Utils.normalizeInput('Café'), 'cafe', 'normalizeInput with accent');
assertEqual(Utils.normalizeInput('  ÊTRE  '), 'etre', 'normalizeInput with uppercase and whitespace');
assertEqual(Utils.normalizeInput('naïve'), 'naive', 'normalizeInput with diaeresis');
assertEqual(Utils.normalizeInput('Résumé'), 'resume', 'normalizeInput with multiple accents');
assertEqual(Utils.normalizeInput(''), '', 'normalizeInput with empty string');

// validateAnswer tests
console.log('\nTesting validateAnswer():');
assert(Utils.validateAnswer('Café', 'cafe'), 'validateAnswer: Café vs cafe');
assert(Utils.validateAnswer('ETRE', 'être'), 'validateAnswer: ETRE vs être');
assert(Utils.validateAnswer('  hello  ', 'Hello'), 'validateAnswer: whitespace variation');
assert(Utils.validateAnswer('naive', 'naïve'), 'validateAnswer: accent variation');
assert(!Utils.validateAnswer('cat', 'dog'), 'validateAnswer: completely different words');
assert(!Utils.validateAnswer('', 'test'), 'validateAnswer: empty user answer');

// removeAccents tests
console.log('\nTesting removeAccents():');
assertEqual(Utils.removeAccents('Café'), 'Cafe', 'removeAccents preserves case');
assertEqual(Utils.removeAccents('naïve'), 'naive', 'removeAccents with diaeresis');

// capitalizeFirst tests
console.log('\nTesting capitalizeFirst():');
assertEqual(Utils.capitalizeFirst('hello'), 'Hello', 'capitalizeFirst lowercase');
assertEqual(Utils.capitalizeFirst('café'), 'Café', 'capitalizeFirst with accent');
assertEqual(Utils.capitalizeFirst(''), '', 'capitalizeFirst empty string');

// getRandomItem tests
console.log('\nTesting getRandomItem():');
const item = Utils.getRandomItem([1, 2, 3, 4, 5]);
assert([1, 2, 3, 4, 5].includes(item), 'getRandomItem returns item from array');
assert(Utils.getRandomItem([]) === null, 'getRandomItem returns null for empty array');

// shuffleArray tests
console.log('\nTesting shuffleArray():');
const shuffled = Utils.shuffleArray([1, 2, 3, 4, 5]);
assert(Array.isArray(shuffled), 'shuffleArray returns array');
assert(shuffled.length === 5, 'shuffleArray preserves length');
assert(shuffled.every(item => [1, 2, 3, 4, 5].includes(item)), 'shuffleArray contains all original items');

// getScoreColor tests
console.log('\nTesting getScoreColor():');
assertEqual(Utils.getScoreColor(25), 'red', 'getScoreColor for 25% (learning)');
assertEqual(Utils.getScoreColor(60), 'yellow', 'getScoreColor for 60% (developing)');
assertEqual(Utils.getScoreColor(75), 'green', 'getScoreColor for 75% (mastered)');
assertEqual(Utils.getScoreColor(90), 'emerald', 'getScoreColor for 90% (solid)');

// formatPercentage tests
console.log('\nTesting formatPercentage():');
assertEqual(Utils.formatPercentage(0.75, true), '75%', 'formatPercentage from decimal');
assertEqual(Utils.formatPercentage(75, false), '75%', 'formatPercentage from whole number');

// ============================================
// ASSESSMENT.JS TESTS
// ============================================

console.log('\n=== TESTING ASSESSMENT.JS ===\n');

// recordAttempt tests
console.log('Testing recordAttempt():');
let mastery = {};
mastery = Assessment.recordAttempt(mastery, 'v-1', true);
assert(mastery['v-1'].timesAttempted === 1, 'recordAttempt: first attempt recorded');
assert(mastery['v-1'].timesCorrect === 1, 'recordAttempt: correct answer recorded');

mastery = Assessment.recordAttempt(mastery, 'v-1', false);
assert(mastery['v-1'].timesAttempted === 2, 'recordAttempt: second attempt recorded');
assert(mastery['v-1'].timesCorrect === 1, 'recordAttempt: incorrect answer doesn\'t increment correct count');
assert(mastery['v-1'].masteryPercentage === 50, 'recordAttempt: mastery % calculated (50%)');

mastery = Assessment.recordAttempt(mastery, 'v-1', true);
assert(mastery['v-1'].timesAttempted === 3, 'recordAttempt: third attempt recorded');
assert(mastery['v-1'].masteryPercentage === (2/3)*100, 'recordAttempt: mastery % updated (66%)');

// calculateMasteryStage tests
console.log('\nTesting calculateMasteryStage():');
assertEqual(Assessment.calculateMasteryStage(25), 'learning', 'calculateMasteryStage: 25% = learning');
assertEqual(Assessment.calculateMasteryStage(50), 'learning', 'calculateMasteryStage: 50% = learning');
assertEqual(Assessment.calculateMasteryStage(60), 'developing', 'calculateMasteryStage: 60% = developing');
assertEqual(Assessment.calculateMasteryStage(70), 'developing', 'calculateMasteryStage: 70% = developing');
assertEqual(Assessment.calculateMasteryStage(75), 'mastered', 'calculateMasteryStage: 75% = mastered');
assertEqual(Assessment.calculateMasteryStage(85), 'mastered', 'calculateMasteryStage: 85% = mastered');
assertEqual(Assessment.calculateMasteryStage(90), 'solid', 'calculateMasteryStage: 90% = solid');
assertEqual(Assessment.calculateMasteryStage(100), 'solid', 'calculateMasteryStage: 100% = solid');

// checkDecay tests
console.log('\nTesting checkDecay():');
assert(!Assessment.checkDecay([true, true, true], 80), 'checkDecay: no decay with consistent performance');
assert(Assessment.checkDecay([true, false, false], 80), 'checkDecay: decay detected (80% all-time, 33% recent)');
assert(!Assessment.checkDecay([false, false, false], 20), 'checkDecay: no decay when both consistently low');
assert(!Assessment.checkDecay([true, true, false], 75), 'checkDecay: no decay (67% recent vs 75% all-time, gap < 15%)');
assert(!Assessment.checkDecay([], 50), 'checkDecay: handles empty array');

// evaluateReadinessForNextLevel tests
console.log('\nTesting evaluateReadinessForNextLevel():');

let testMastery = {};
for (let i = 0; i < 35; i++) {
  const isCorrect = i < 26; // First 26 items correct (74% mastery for those)
  testMastery = Assessment.recordAttempt(testMastery, `v-${i}`, isCorrect);
  // Get to ~74% mastery on each
  if (isCorrect) {
    testMastery = Assessment.recordAttempt(testMastery, `v-${i}`, true);
  }
}

let readiness = Assessment.evaluateReadinessForNextLevel(testMastery);
assert(readiness.ready === true, 'evaluateReadinessForNextLevel: ready when criteria met');
assert(readiness.reason.includes('35'), 'evaluateReadinessForNextLevel: reason includes item count');

let insufficientMastery = {};
for (let i = 0; i < 35; i++) {
  insufficientMastery = Assessment.recordAttempt(insufficientMastery, `v-${i}`, false);
}
readiness = Assessment.evaluateReadinessForNextLevel(insufficientMastery);
assert(readiness.ready === false, 'evaluateReadinessForNextLevel: not ready with low mastery');

let tooFewItems = {};
for (let i = 0; i < 20; i++) {
  tooFewItems = Assessment.recordAttempt(tooFewItems, `v-${i}`, true);
}
readiness = Assessment.evaluateReadinessForNextLevel(tooFewItems);
assert(readiness.ready === false, 'evaluateReadinessForNextLevel: not ready with too few items');

// saveProgress & loadProgress tests
console.log('\nTesting saveProgress() & loadProgress():');

// Note: These tests require localStorage to be available
if (typeof localStorage !== 'undefined') {
  const testUserId = 'test-user-123';
  const testData = { 'v-1': { masteryPercentage: 75, stage: 'mastered' } };
  
  const saved = Assessment.saveProgress(testUserId, testData);
  assert(saved === true, 'saveProgress: returns true on success');
  
  const loaded = Assessment.loadProgress(testUserId);
  assertEqual(loaded, testData, 'loadProgress: retrieves saved data correctly');
  
  const notFound = Assessment.loadProgress('nonexistent-user');
  assertEqual(notFound, {}, 'loadProgress: returns empty object for nonexistent user');
} else {
  console.log('⊘ SKIPPED: saveProgress/loadProgress tests (localStorage not available in this environment)');
}

// generateUUID test
console.log('\nTesting generateUUID():');
const uuid1 = Assessment.generateUUID();
const uuid2 = Assessment.generateUUID();
assert(uuid1.includes('-'), 'generateUUID: returns UUID format');
assert(uuid1 !== uuid2, 'generateUUID: generates unique IDs');

// ============================================
// TEST SUMMARY
// ============================================

console.log('\n' + '='.repeat(50));
console.log(`TESTS COMPLETED`);
console.log('='.repeat(50));
console.log(`✓ Passed: ${testsPassed}`);
console.log(`✗ Failed: ${testsFailed}`);
console.log(`Total: ${testsPassed + testsFailed}`);

if (testsFailed === 0) {
  console.log('\n🎉 ALL TESTS PASSED!');
  process.exit(0);
} else {
  console.log('\n⚠️ SOME TESTS FAILED');
  process.exit(1);
}
