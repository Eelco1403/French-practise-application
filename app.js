/**
 * FRENCH PRACTICE APP - MAIN APPLICATION
 * Connects UI with assessment logic and content database
 */

// Application State
let currentUser = {
    userId: null,
    name: '',
    masteryData: {},
    sessionStats: {
        correct: 0,
        total: 0
    }
};

let currentQuestion = null;

// DOM Elements
const userSetupScreen = document.getElementById('userSetup');
const practiceScreen = document.getElementById('practiceScreen');
const userNameInput = document.getElementById('userName');
const startBtn = document.getElementById('startBtn');
const displayName = document.getElementById('displayName');
const correctCount = document.getElementById('correctCount');
const totalCount = document.getElementById('totalCount');
const accuracy = document.getElementById('accuracy');
const questionText = document.getElementById('questionText');
const answerInput = document.getElementById('answerInput');
const submitBtn = document.getElementById('submitBtn');
const feedback = document.getElementById('feedback');
const feedbackIcon = document.getElementById('feedbackIcon');
const feedbackMessage = document.getElementById('feedbackMessage');
const correctAnswer = document.getElementById('correctAnswer');
const nextBtn = document.getElementById('nextBtn');
const learningCount = document.getElementById('learningCount');
const developingCount = document.getElementById('developingCount');
const masteredCount = document.getElementById('masteredCount');
const solidCount = document.getElementById('solidCount');
const progressBar = document.getElementById('progressBar');
const progressText = document.getElementById('progressText');

/**
 * Initialize the application
 */
function init() {
    // Add event listeners
    startBtn.addEventListener('click', startPractice);
    submitBtn.addEventListener('click', checkAnswer);
    nextBtn.addEventListener('click', loadNextQuestion);
    answerInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            checkAnswer();
        }
    });

    // Try to load existing user from localStorage
    const savedUserId = localStorage.getItem('currentUserId');
    if (savedUserId) {
        const savedName = localStorage.getItem('currentUserName');
        if (savedName) {
            userNameInput.value = savedName;
        }
    }
}

/**
 * Start practice session
 */
function startPractice() {
    const name = userNameInput.value.trim();

    if (!name) {
        alert('Please enter your name');
        return;
    }

    // Check if user exists, otherwise create new
    let userId = localStorage.getItem('currentUserId');
    if (!userId) {
        userId = window.AssessmentSystem.generateUUID();
        localStorage.setItem('currentUserId', userId);
    }

    localStorage.setItem('currentUserName', name);

    // Load user progress
    currentUser.userId = userId;
    currentUser.name = name;
    currentUser.masteryData = window.AssessmentSystem.loadProgress(userId);

    // Update UI
    displayName.textContent = name;

    // Switch screens
    userSetupScreen.classList.remove('active');
    practiceScreen.classList.add('active');

    // Load first question
    loadNextQuestion();

    // Update progress display
    updateProgressDisplay();
}

/**
 * Load next question
 */
function loadNextQuestion() {
    // Get random question from content
    currentQuestion = window.FrenchContent.getRandomQuestion();

    // Update UI
    questionText.textContent = currentQuestion.english;
    answerInput.value = '';
    answerInput.focus();

    // Hide feedback
    feedback.classList.add('hidden');
    feedback.classList.remove('correct', 'incorrect');

    // Enable input and submit button
    answerInput.disabled = false;
    submitBtn.disabled = false;
}

/**
 * Check user's answer
 */
function checkAnswer() {
    const userAnswer = answerInput.value.trim();

    if (!userAnswer) {
        alert('Please enter an answer');
        return;
    }

    // Validate answer using utility function
    const isCorrect = window.UtilityFunctions.validateAnswer(userAnswer, currentQuestion.french);

    // Record attempt in mastery system
    currentUser.masteryData = window.AssessmentSystem.recordAttempt(
        currentUser.masteryData,
        currentQuestion.id,
        isCorrect
    );

    // Save progress
    window.AssessmentSystem.saveProgress(currentUser.userId, currentUser.masteryData);

    // Update session stats
    currentUser.sessionStats.total++;
    if (isCorrect) {
        currentUser.sessionStats.correct++;
    }

    // Update stats display
    updateStatsDisplay();

    // Show feedback
    showFeedback(isCorrect);

    // Disable input and submit button
    answerInput.disabled = true;
    submitBtn.disabled = true;

    // Update progress display
    updateProgressDisplay();
}

/**
 * Show feedback to user
 */
function showFeedback(isCorrect) {
    feedback.classList.remove('hidden');

    if (isCorrect) {
        feedback.classList.add('correct');
        feedback.classList.remove('incorrect');
        feedbackIcon.textContent = '✓';
        feedbackMessage.textContent = 'Correct! Well done!';
        correctAnswer.textContent = '';
    } else {
        feedback.classList.add('incorrect');
        feedback.classList.remove('correct');
        feedbackIcon.textContent = '✗';
        feedbackMessage.textContent = 'Not quite right.';
        correctAnswer.textContent = `The correct answer is: ${currentQuestion.french}`;
    }
}

/**
 * Update session statistics display
 */
function updateStatsDisplay() {
    correctCount.textContent = currentUser.sessionStats.correct;
    totalCount.textContent = currentUser.sessionStats.total;

    const accuracyPercent = currentUser.sessionStats.total > 0
        ? Math.round((currentUser.sessionStats.correct / currentUser.sessionStats.total) * 100)
        : 0;

    accuracy.textContent = `${accuracyPercent}%`;
}

/**
 * Update progress display (mastery stages)
 */
function updateProgressDisplay() {
    // Count items by stage
    const stages = {
        learning: 0,
        developing: 0,
        mastered: 0,
        solid: 0
    };

    Object.values(currentUser.masteryData).forEach(item => {
        if (stages.hasOwnProperty(item.stage)) {
            stages[item.stage]++;
        }
    });

    // Update counts
    learningCount.textContent = stages.learning;
    developingCount.textContent = stages.developing;
    masteredCount.textContent = stages.mastered;
    solidCount.textContent = stages.solid;

    // Update level progress
    updateLevelProgress();
}

/**
 * Update level progress bar
 */
function updateLevelProgress() {
    const readiness = window.AssessmentSystem.evaluateReadinessForNextLevel(currentUser.masteryData);

    const totalItems = Object.keys(currentUser.masteryData).length;
    const progressPercent = Math.min((totalItems / 30) * 100, 100);

    progressBar.style.width = `${progressPercent}%`;
    progressText.textContent = `${totalItems}/30 items attempted`;

    // Show readiness status
    const levelStatus = document.getElementById('levelStatus');
    const statusMessage = levelStatus.querySelector('p');

    if (readiness.ready) {
        statusMessage.textContent = `🎉 ${readiness.reason} - You're ready for the next level!`;
        statusMessage.style.color = '#10b981';
        statusMessage.style.fontWeight = 'bold';
    } else {
        statusMessage.textContent = readiness.reason;
        statusMessage.style.color = '#6b7280';
        statusMessage.style.fontWeight = 'normal';
    }
}

/**
 * Reset session (for testing purposes)
 */
function resetSession() {
    if (confirm('Are you sure you want to reset your progress? This cannot be undone.')) {
        localStorage.removeItem(`progress_${currentUser.userId}`);
        localStorage.removeItem('currentUserId');
        localStorage.removeItem('currentUserName');
        location.reload();
    }
}

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Make resetSession available globally (for debugging)
window.resetSession = resetSession;
