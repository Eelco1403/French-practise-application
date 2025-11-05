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
let currentExerciseType = 'vocabulary'; // 'vocabulary', 'grammar', 'conjugation', or 'all'

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

    // Exercise type selector event listeners
    const exerciseTypeBtns = document.querySelectorAll('.exercise-type-btn');
    exerciseTypeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            switchExerciseType(btn.dataset.type);
        });
    });

    // Session control event listeners
    const saveSessionBtn = document.getElementById('saveSessionBtn');
    const resumeSessionBtn = document.getElementById('resumeSessionBtn');

    if (saveSessionBtn) {
        saveSessionBtn.addEventListener('click', saveCurrentSession);
    }

    // Try to load existing user from localStorage
    const savedUserId = localStorage.getItem('currentUserId');
    if (savedUserId) {
        const savedName = localStorage.getItem('currentUserName');
        if (savedName) {
            userNameInput.value = savedName;
        }

        // Check if there's a saved session
        const savedSession = window.AssessmentSystem.loadSession(savedUserId);
        if (savedSession && resumeSessionBtn) {
            resumeSessionBtn.style.display = 'inline-block';
            resumeSessionBtn.addEventListener('click', () => resumeSession(savedUserId));
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
    // Get random question from content based on exercise type
    currentQuestion = window.FrenchContent.getRandomQuestion(currentExerciseType);

    // Update UI based on question type
    const questionLabel = document.querySelector('.question-label');
    const questionTypeDisplay = document.getElementById('questionType');

    if (currentQuestion.verb) {
        // Conjugation exercise
        questionLabel.textContent = 'Conjugate the verb:';
        questionText.textContent = currentQuestion.question;
        questionTypeDisplay.textContent = 'Conjugation';
        questionTypeDisplay.className = 'badge badge-purple';
    } else if (currentQuestion.explanation) {
        // Grammar exercise
        questionLabel.textContent = 'Complete the grammar exercise:';
        questionText.textContent = currentQuestion.question;
        questionTypeDisplay.textContent = 'Grammar';
        questionTypeDisplay.className = 'badge badge-green';
    } else {
        // Vocabulary exercise
        questionLabel.textContent = 'Translate to French:';
        questionText.textContent = currentQuestion.english;
        questionTypeDisplay.textContent = 'Vocabulary';
        questionTypeDisplay.className = 'badge badge-blue';
    }

    answerInput.value = '';
    answerInput.focus();

    // Hide feedback
    feedback.classList.add('hidden');
    feedback.classList.remove('correct', 'incorrect');

    // Enable input and submit button
    answerInput.disabled = false;
    submitBtn.disabled = false;

    // Save session state
    saveCurrentSession();
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

    // Get the correct answer based on question type
    let correctAnswer;
    if (currentQuestion.verb) {
        // Conjugation exercise
        correctAnswer = currentQuestion.answer;
    } else if (currentQuestion.explanation) {
        // Grammar exercise
        correctAnswer = currentQuestion.answer;
    } else {
        // Vocabulary exercise
        correctAnswer = currentQuestion.french;
    }

    // Validate answer using utility function
    const isCorrect = window.UtilityFunctions.validateAnswer(userAnswer, correctAnswer);

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
    showFeedback(isCorrect, correctAnswer);

    // Disable input and submit button
    answerInput.disabled = true;
    submitBtn.disabled = true;

    // Update progress display
    updateProgressDisplay();
}

/**
 * Show feedback to user
 */
function showFeedback(isCorrect, answerText) {
    feedback.classList.remove('hidden');

    if (isCorrect) {
        feedback.classList.add('correct');
        feedback.classList.remove('incorrect');
        feedbackIcon.textContent = '✓';
        feedbackMessage.textContent = 'Correct! Well done!';

        // Show explanation for grammar exercises
        if (currentQuestion.explanation) {
            correctAnswer.textContent = currentQuestion.explanation;
            correctAnswer.style.color = '#10b981';
        } else {
            correctAnswer.textContent = '';
        }
    } else {
        feedback.classList.add('incorrect');
        feedback.classList.remove('correct');
        feedbackIcon.textContent = '✗';
        feedbackMessage.textContent = 'Not quite right.';

        // Show correct answer and explanation
        let feedbackText = `The correct answer is: ${answerText}`;
        if (currentQuestion.explanation) {
            feedbackText += `\n${currentQuestion.explanation}`;
        }
        correctAnswer.textContent = feedbackText;
        correctAnswer.style.color = '#ef4444';
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
 * Switch exercise type
 */
function switchExerciseType(type) {
    currentExerciseType = type;

    // Update button states
    const exerciseTypeBtns = document.querySelectorAll('.exercise-type-btn');
    exerciseTypeBtns.forEach(btn => {
        if (btn.dataset.type === type) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Load new question of selected type
    loadNextQuestion();
}

/**
 * Save current session
 */
function saveCurrentSession() {
    if (!currentUser.userId) return;

    const sessionState = {
        exerciseType: currentExerciseType,
        sessionStats: currentUser.sessionStats,
        currentQuestionId: currentQuestion ? currentQuestion.id : null
    };

    window.AssessmentSystem.saveSession(currentUser.userId, sessionState);
}

/**
 * Resume saved session
 */
function resumeSession(userId) {
    const savedSession = window.AssessmentSystem.loadSession(userId);

    if (savedSession) {
        // Restore session state
        currentExerciseType = savedSession.exerciseType || 'vocabulary';
        currentUser.sessionStats = savedSession.sessionStats || { correct: 0, total: 0 };

        // Update UI button states
        const exerciseTypeBtns = document.querySelectorAll('.exercise-type-btn');
        exerciseTypeBtns.forEach(btn => {
            if (btn.dataset.type === currentExerciseType) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // Update stats display
        updateStatsDisplay();

        alert(`Session resumed! You were working on ${currentExerciseType} exercises.`);
    }
}

/**
 * Reset session (for testing purposes)
 */
function resetSession() {
    if (confirm('Are you sure you want to reset your progress? This cannot be undone.')) {
        if (currentUser.userId) {
            window.AssessmentSystem.clearSession(currentUser.userId);
        }
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
