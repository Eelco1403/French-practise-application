/**
 * FRENCH PRACTICE APP - MAIN APPLICATION
 * Connects UI with assessment logic and content database
 */

// Application State
let currentUser = {
    userId: null,
    name: '',
    cefrLevel: 'A1', // Current CEFR level
    masteryData: {},
    sessionStats: {
        correct: 0,
        total: 0
    }
};

let currentQuestion = null;
let currentExerciseType = 'vocabulary'; // 'vocabulary', 'grammar', 'conjugation', or 'all'
let currentReport = null; // Stores generated report for export

/**
 * Get source word in appropriate language based on UI language
 * Falls back to English if translation not available
 */
function getSourceWord(vocabItem) {
    const lang = window.I18n ? window.I18n.getCurrentLanguage() : 'en';

    // Map UI language codes to vocabulary field names
    const languageMap = {
        'en': 'english',
        'nl': 'dutch',
        'de': 'german',
        'fr': 'english' // If UI is in French, show English->French
    };

    const fieldName = languageMap[lang] || 'english';

    // Return the word in requested language, fallback to English if not available
    return vocabItem[fieldName] || vocabItem.english || vocabItem.french;
}

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
    // Initialize i18n system
    window.I18n.initLanguage();
    updateUILanguage();

    // Add event listeners
    startBtn.addEventListener('click', startPractice);
    submitBtn.addEventListener('click', checkAnswer);
    nextBtn.addEventListener('click', advanceToNext);
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

    // New feature event listeners
    const interfaceLanguage = document.getElementById('interfaceLanguage');
    const cefrLevelSelect = document.getElementById('cefrLevel');
    const viewReportBtn = document.getElementById('viewReportBtn');
    const changeLevelBtn = document.getElementById('changeLevelBtn');
    const closeReportBtn = document.getElementById('closeReportBtn');
    const exportJSONBtn = document.getElementById('exportJSONBtn');
    const exportCSVBtn = document.getElementById('exportCSVBtn');
    const printReportBtn = document.getElementById('printReportBtn');

    if (interfaceLanguage) {
        interfaceLanguage.addEventListener('change', handleLanguageChange);
    }

    if (cefrLevelSelect) {
        cefrLevelSelect.addEventListener('change', handleLevelDescriptionUpdate);
    }

    if (viewReportBtn) {
        viewReportBtn.addEventListener('click', showProgressReport);
    }

    // Analytics Dashboard
    const viewAnalyticsBtn = document.getElementById('viewAnalyticsBtn');
    const closeAnalyticsBtn = document.getElementById('closeAnalyticsBtn');

    if (viewAnalyticsBtn) {
        viewAnalyticsBtn.addEventListener('click', showAnalyticsDashboard);
    }

    if (closeAnalyticsBtn) {
        closeAnalyticsBtn.addEventListener('click', closeAnalyticsDashboard);
    }

    if (changeLevelBtn) {
        changeLevelBtn.addEventListener('click', showLevelChangeDialog);
    }

    if (closeReportBtn) {
        closeReportBtn.addEventListener('click', closeReportModal);
    }

    if (exportJSONBtn) {
        exportJSONBtn.addEventListener('click', () => {
            if (currentReport) {
                window.ReportingSystem.exportReportJSON(currentReport);
            }
        });
    }

    if (exportCSVBtn) {
        exportCSVBtn.addEventListener('click', () => {
            if (currentReport) {
                window.ReportingSystem.exportReportCSV(currentReport);
            }
        });
    }

    if (printReportBtn) {
        printReportBtn.addEventListener('click', () => {
            window.print();
        });
    }

    // Placement Test event listener
    const placementTestBtn = document.getElementById('placementTestBtn');
    if (placementTestBtn) {
        placementTestBtn.addEventListener('click', startPlacementTest);
    }

    // Try to load existing user from localStorage
    const savedUserId = localStorage.getItem('currentUserId');
    if (savedUserId) {
        const savedName = localStorage.getItem('currentUserName');
        if (savedName) {
            userNameInput.value = savedName;
        }

        // Load saved CEFR level
        const savedLevel = window.ReportingSystem.loadUserLevel(savedUserId);
        if (savedLevel && cefrLevelSelect) {
            cefrLevelSelect.value = savedLevel;
            handleLevelDescriptionUpdate();
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
        alert(window.I18n.t('messages.errorLoading'));
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

    // Get selected CEFR level
    const cefrLevelSelect = document.getElementById('cefrLevel');
    if (cefrLevelSelect) {
        currentUser.cefrLevel = cefrLevelSelect.value;
        window.ReportingSystem.saveUserLevel(userId, currentUser.cefrLevel);
    }

    // Update UI
    displayName.textContent = name;
    const currentLevelValue = document.getElementById('currentLevelValue');
    if (currentLevelValue) {
        currentLevelValue.textContent = currentUser.cefrLevel;
    }

    // Switch screens
    userSetupScreen.classList.remove('active');
    practiceScreen.classList.add('active');

    // Load first question
    loadNextQuestion();

    // Update progress display
    updateProgressDisplay();
}

/**
 * Advance to next item (handles multi-question reading passages)
 */
function advanceToNext() {
    // Handle topic practice mode
    if (topicPracticeMode) {
        nextTopicExercise();
        return;
    }

    // Check if current question is a reading passage with more questions
    if (currentQuestion && currentQuestion.passage && currentQuestion.questions) {
        currentQuestion.currentQuestionIndex++;

        // If there are more questions, display the next one
        if (currentQuestion.currentQuestionIndex < currentQuestion.questions.length) {
            const currentQ = currentQuestion.questions[currentQuestion.currentQuestionIndex];
            const questionLabel = document.querySelector('.question-label');
            const questionText = document.getElementById('questionText');

            questionText.innerHTML = `<div style="background:#f5f5f5;padding:15px;border-radius:8px;margin-bottom:15px;">
                <strong>${currentQuestion.title}</strong><br><br>
                ${currentQuestion.passage}
            </div>
            <div style="margin-top:20px;">
                <strong>Question ${currentQuestion.currentQuestionIndex + 1}/${currentQuestion.questions.length}:</strong><br>
                ${currentQ.question}
            </div>`;

            answerInput.value = '';
            answerInput.focus();

            // Hide feedback
            feedback.classList.add('hidden');
            feedback.classList.remove('correct', 'incorrect');

            // Enable input and submit button
            answerInput.disabled = false;
            submitBtn.disabled = false;

            // Track question start time
            currentUser.questionStartTime = Date.now();

            return; // Don't load a new question
        }
    }

    // Check if current question is a dialogue with more questions
    if (currentQuestion && currentQuestion.turns && currentQuestion.questions && currentQuestion.questions.length > 0) {
        currentQuestion.currentQuestionIndex++;

        // If there are more questions, display the next one
        if (currentQuestion.currentQuestionIndex < currentQuestion.questions.length) {
            const currentQ = currentQuestion.questions[currentQuestion.currentQuestionIndex];
            const questionText = document.getElementById('questionText');

            const dialogueHTML = currentQuestion.turns.map((turn, idx) =>
                `<div style="margin:10px 0;">
                    <strong>Speaker ${turn.speaker}:</strong> ${turn.text}<br>
                    <em style="color:#666;">(${turn.translation})</em>
                </div>`
            ).join('');

            questionText.innerHTML = `<div style="background:#f5f5f5;padding:15px;border-radius:8px;margin-bottom:15px;">
                <strong>${currentQuestion.title}</strong><br><br>
                ${dialogueHTML}
            </div>
            <div style="margin-top:20px;">
                <strong>Question ${currentQuestion.currentQuestionIndex + 1}/${currentQuestion.questions.length}:</strong><br>
                ${currentQ.question}
            </div>`;

            answerInput.value = '';
            answerInput.focus();

            // Hide feedback
            feedback.classList.add('hidden');
            feedback.classList.remove('correct', 'incorrect');

            // Enable input and submit button
            answerInput.disabled = false;
            submitBtn.disabled = false;

            // Track question start time
            currentUser.questionStartTime = Date.now();

            return; // Don't load a new question
        }
    }

    // Otherwise, load a completely new question
    loadNextQuestion();
}

/**
 * Load next question
 */
function loadNextQuestion() {
    // Get all questions for current exercise type and level
    let availableQuestions = [];

    if (currentExerciseType === 'all') {
        availableQuestions = window.FrenchContent.getItemsUpToCefrLevel(currentUser.cefrLevel);
    } else {
        availableQuestions = window.FrenchContent.getContentByType(currentExerciseType);
        // Filter by CEFR level
        const levelOrder = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
        const maxLevelIndex = levelOrder.indexOf(currentUser.cefrLevel);
        if (maxLevelIndex !== -1) {
            availableQuestions = availableQuestions.filter(q => {
                const qLevelIndex = levelOrder.indexOf(q.cefrLevel);
                return qLevelIndex !== -1 && qLevelIndex <= maxLevelIndex;
            });
        }
    }

    // Apply category filter for vocabulary if categories are selected
    if (currentExerciseType === 'vocabulary' && selectedCategories.length > 0) {
        availableQuestions = availableQuestions.filter(q =>
            q.category && selectedCategories.includes(q.category)
        );
    }

    // Fallback if no questions available
    if (!availableQuestions || availableQuestions.length === 0) {
        currentQuestion = window.FrenchContent.getRandomQuestion(currentExerciseType);
    } else {
        // Use spaced repetition to prioritize questions
        const prioritizedQuestions = window.SpacedRepetitionEngine.prioritizeQuestions(
            availableQuestions,
            currentUser.masteryData
        );

        // Get due items first
        const dueItems = window.SpacedRepetitionEngine.getDueItems(currentUser.masteryData);

        // If there are due items, prioritize them; otherwise pick from prioritized list
        if (dueItems.length > 0) {
            // Filter prioritized questions to only include due items
            const dueQuestions = prioritizedQuestions.filter(q => dueItems.includes(q.id));
            if (dueQuestions.length > 0) {
                // Pick from top 5 due questions for some variety
                const topDueQuestions = dueQuestions.slice(0, Math.min(5, dueQuestions.length));
                const randomIndex = Math.floor(Math.random() * topDueQuestions.length);
                currentQuestion = topDueQuestions[randomIndex];
            } else {
                // Fallback to first prioritized question
                currentQuestion = prioritizedQuestions[0];
            }
        } else {
            // No due items, pick from top prioritized questions
            const topQuestions = prioritizedQuestions.slice(0, Math.min(10, prioritizedQuestions.length));
            const randomIndex = Math.floor(Math.random() * topQuestions.length);
            currentQuestion = topQuestions[randomIndex];
        }
    }

    // Update UI based on question type
    const questionLabel = document.querySelector('.question-label');
    const questionTypeDisplay = document.getElementById('questionType');

    // Handle reading comprehension passages
    if (currentQuestion.passage && currentQuestion.questions) {
        questionLabel.textContent = 'Reading Comprehension:';
        questionTypeDisplay.textContent = '📖 Reading';
        questionTypeDisplay.className = 'badge badge-orange';

        // Display passage and first question
        if (!currentQuestion.currentQuestionIndex) {
            currentQuestion.currentQuestionIndex = 0;
        }

        const currentQ = currentQuestion.questions[currentQuestion.currentQuestionIndex];
        questionText.innerHTML = `<div style="background:#f5f5f5;padding:15px;border-radius:8px;margin-bottom:15px;">
            <strong>${currentQuestion.title}</strong><br><br>
            ${currentQuestion.passage}
        </div>
        <div style="margin-top:20px;">
            <strong>Question ${currentQuestion.currentQuestionIndex + 1}/${currentQuestion.questions.length}:</strong><br>
            ${currentQ.question}
        </div>`;
    }
    // Handle dialogue practice
    else if (currentQuestion.turns) {
        questionLabel.textContent = 'Dialogue Practice:';
        questionTypeDisplay.textContent = '💬 Dialogue';
        questionTypeDisplay.className = 'badge badge-teal';

        const dialogueHTML = currentQuestion.turns.map((turn, idx) =>
            `<div style="margin:10px 0;">
                <strong>Speaker ${turn.speaker}:</strong> ${turn.text}<br>
                <em style="color:#666;">(${turn.translation})</em>
            </div>`
        ).join('');

        // If dialogue has comprehension questions, show them
        if (currentQuestion.questions && currentQuestion.questions.length > 0) {
            if (!currentQuestion.currentQuestionIndex) {
                currentQuestion.currentQuestionIndex = 0;
            }

            const currentQ = currentQuestion.questions[currentQuestion.currentQuestionIndex];
            questionText.innerHTML = `<div style="background:#f5f5f5;padding:15px;border-radius:8px;margin-bottom:15px;">
                <strong>${currentQuestion.title}</strong><br><br>
                ${dialogueHTML}
            </div>
            <div style="margin-top:20px;">
                <strong>Question ${currentQuestion.currentQuestionIndex + 1}/${currentQuestion.questions.length}:</strong><br>
                ${currentQ.question}
            </div>`;
            answerInput.placeholder = 'Type your answer...';
        } else {
            // For dialogues without questions, just mark as viewed
            questionText.innerHTML = `<div style="background:#f5f5f5;padding:15px;border-radius:8px;">
                <strong>${currentQuestion.title}</strong><br><br>
                ${dialogueHTML}
            </div>`;
            answerInput.placeholder = 'Type "done" when you\'ve reviewed this dialogue';
        }
    }
    // Handle conjugation table (full 6-form table)
    else if (currentQuestion.forms && Array.isArray(currentQuestion.forms)) {
        questionLabel.textContent = 'Complete the conjugation table:';
        questionTypeDisplay.textContent = '🔄 Conjugation Table';
        questionTypeDisplay.className = 'badge badge-purple';

        // Hide regular answer input, we'll use custom inputs
        answerInput.style.display = 'none';
        submitBtn.style.display = 'none';

        // Create conjugation table HTML
        const tableHTML = `
            <div style="background:#f5f5f5;padding:20px;border-radius:8px;">
                <h3 style="margin-top:0;">${currentQuestion.verb} (${currentQuestion.english})</h3>
                <p><strong>Tense:</strong> ${currentQuestion.tenseFr || currentQuestion.tense}</p>
                <div style="display:grid;grid-template-columns:1fr 2fr;gap:15px;margin-top:20px;">
                    ${currentQuestion.forms.map((form, idx) => `
                        <div style="display:contents;">
                            <label style="font-weight:bold;align-self:center;">${form.subject}</label>
                            <input
                                type="text"
                                id="conj-input-${idx}"
                                class="conj-table-input input-field"
                                placeholder="Enter conjugation..."
                                autocomplete="off"
                                style="width:100%;"
                            >
                        </div>
                    `).join('')}
                </div>
                <button id="submitTableBtn" class="btn btn-primary btn-large" style="margin-top:20px;width:100%;">
                    Check All Answers
                </button>
            </div>
        `;

        questionText.innerHTML = tableHTML;

        // Add event listener to submit button
        setTimeout(() => {
            const submitTableBtn = document.getElementById('submitTableBtn');
            if (submitTableBtn) {
                submitTableBtn.addEventListener('click', checkConjugationTable);

                // Also allow Enter key on last input to submit
                const lastInput = document.getElementById(`conj-input-${currentQuestion.forms.length - 1}`);
                if (lastInput) {
                    lastInput.addEventListener('keypress', (e) => {
                        if (e.key === 'Enter') {
                            checkConjugationTable();
                        }
                    });
                }
            }
        }, 10);
    }
    // Handle conjugation (single form)
    else if (currentQuestion.verb) {
        questionLabel.textContent = 'Conjugate the verb:';
        questionText.textContent = currentQuestion.question;
        questionTypeDisplay.textContent = window.I18n.t('badges.conjugation');
        questionTypeDisplay.className = 'badge badge-purple';

        // Ensure regular inputs are visible
        answerInput.style.display = '';
        submitBtn.style.display = '';
    }
    // Handle grammar
    else if (currentQuestion.explanation) {
        questionLabel.textContent = 'Complete the grammar exercise:';
        // Remove answer from question if it's in parentheses (e.g., "some books (des livres)" → "some books")
        const cleanQuestion = currentQuestion.question.replace(/\s*\([^)]*\)/g, '');
        questionText.textContent = cleanQuestion;
        questionTypeDisplay.textContent = window.I18n.t('badges.grammar');
        questionTypeDisplay.className = 'badge badge-green';
    }
    // Handle vocabulary
    else {
        questionLabel.textContent = 'Translate to French:';
        questionText.textContent = getSourceWord(currentQuestion);
        questionTypeDisplay.textContent = window.I18n.t('badges.vocabulary');
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

    // Track question start time for spaced repetition response time calculation
    currentUser.questionStartTime = Date.now();

    // Save session state
    saveCurrentSession();
}

/**
 * Check user's answer
 */
function checkAnswer() {
    // Handle topic practice mode
    if (topicPracticeMode) {
        handleTopicPracticeSubmit();
        return;
    }

    const userAnswer = answerInput.value.trim();

    if (!userAnswer) {
        alert('Please enter an answer');
        return;
    }

    // Get the correct answer based on question type
    let correctAnswer;
    let isCorrect;

    // Handle reading comprehension
    if (currentQuestion.passage && currentQuestion.questions) {
        const currentQ = currentQuestion.questions[currentQuestion.currentQuestionIndex];
        correctAnswer = currentQ.answer;

        // Check if answer is correct
        isCorrect = window.UtilityFunctions.validateAnswer(userAnswer, correctAnswer);

        // If there are alternatives, check those too
        if (!isCorrect && currentQ.alternatives) {
            for (const alt of currentQ.alternatives) {
                if (window.UtilityFunctions.validateAnswer(userAnswer, alt)) {
                    isCorrect = true;
                    break;
                }
            }
        }
    }
    // Handle dialogue practice
    else if (currentQuestion.turns) {
        // If dialogue has comprehension questions
        if (currentQuestion.questions && currentQuestion.questions.length > 0) {
            const currentQ = currentQuestion.questions[currentQuestion.currentQuestionIndex];
            correctAnswer = currentQ.answer;

            isCorrect = window.UtilityFunctions.validateAnswer(userAnswer, correctAnswer);

            // Check alternatives
            if (!isCorrect && currentQ.alternatives) {
                for (const alt of currentQ.alternatives) {
                    if (window.UtilityFunctions.validateAnswer(userAnswer, alt)) {
                        isCorrect = true;
                        break;
                    }
                }
            }
        } else {
            // For dialogues without questions, just check for "done"
            correctAnswer = 'done';
            isCorrect = userAnswer.toLowerCase() === 'done';
        }
    }
    // Handle conjugation
    else if (currentQuestion.verb) {
        correctAnswer = currentQuestion.answer;
        isCorrect = window.UtilityFunctions.validateAnswer(userAnswer, correctAnswer);
    }
    // Handle grammar
    else if (currentQuestion.explanation) {
        correctAnswer = currentQuestion.answer;
        isCorrect = window.UtilityFunctions.validateAnswer(userAnswer, correctAnswer);
    }
    // Handle vocabulary
    else {
        correctAnswer = currentQuestion.french;
        isCorrect = window.UtilityFunctions.validateAnswer(userAnswer, correctAnswer);
    }

    // Record attempt in mastery system
    currentUser.masteryData = window.AssessmentSystem.recordAttempt(
        currentUser.masteryData,
        currentQuestion.id,
        isCorrect
    );

    // Update spaced repetition metadata
    if (!currentUser.masteryData[currentQuestion.id].spacedRepetition) {
        currentUser.masteryData[currentQuestion.id].spacedRepetition =
            window.SpacedRepetitionEngine.initializeSpacedRepetition(currentQuestion.id);
    }

    // Calculate response time (if available)
    const responseTime = currentUser.questionStartTime ?
        Date.now() - currentUser.questionStartTime : null;

    // Update SR data based on performance
    currentUser.masteryData[currentQuestion.id].spacedRepetition =
        window.SpacedRepetitionEngine.updateSpacedRepetition(
            currentUser.masteryData[currentQuestion.id].spacedRepetition,
            isCorrect,
            responseTime
        );

    // Save progress (including SR data)
    window.AssessmentSystem.saveProgress(currentUser.userId, currentUser.masteryData);
    window.SpacedRepetitionEngine.saveSpacedRepetitionData(currentUser.userId, currentUser.masteryData);

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
        }
        // Show info for reading comprehension
        else if (currentQuestion.passage && currentQuestion.questions) {
            const remaining = currentQuestion.questions.length - currentQuestion.currentQuestionIndex - 1;
            if (remaining > 0) {
                correctAnswer.textContent = `Great! ${remaining} more question(s) about this passage.`;
                correctAnswer.style.color = '#10b981';
            } else {
                correctAnswer.textContent = 'Perfect! You\'ve completed all questions for this passage.';
                correctAnswer.style.color = '#10b981';
            }
        }
        else {
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
 * Check conjugation table answers (all 6 forms)
 */
function checkConjugationTable() {
    if (!currentQuestion || !currentQuestion.forms) return;

    const submitTableBtn = document.getElementById('submitTableBtn');
    if (submitTableBtn) {
        submitTableBtn.disabled = true;
    }

    // Collect all user answers
    const userAnswers = currentQuestion.forms.map((form, idx) => {
        const input = document.getElementById(`conj-input-${idx}`);
        return input ? input.value.trim() : '';
    });

    // Check each answer
    const results = currentQuestion.forms.map((form, idx) => {
        const userAnswer = userAnswers[idx];
        const isCorrect = window.UtilityFunctions.validateAnswer(userAnswer, form.answer);
        return { subject: form.subject, userAnswer, correctAnswer: form.answer, isCorrect };
    });

    const allCorrect = results.every(r => r.isCorrect);
    const correctCount = results.filter(r => r.isCorrect).length;

    // Visual feedback for each input
    results.forEach((result, idx) => {
        const input = document.getElementById(`conj-input-${idx}`);
        if (input) {
            input.style.borderColor = result.isCorrect ? '#10b981' : '#ef4444';
            input.style.borderWidth = '2px';
            input.disabled = true;
        }
    });

    // Show overall feedback
    const feedbackHTML = `
        <div style="margin-top:20px;padding:15px;background:${allCorrect ? '#d1fae5' : '#fee2e2'};border-radius:8px;">
            <p style="font-size:18px;font-weight:bold;margin:0 0 10px 0;">
                ${allCorrect ? '✓ Perfect! All correct!' : `${correctCount}/6 correct`}
            </p>
            ${!allCorrect ? `
                <div style="margin-top:10px;">
                    <strong>Corrections:</strong>
                    ${results.filter(r => !r.isCorrect).map(r =>
                        `<div style="margin:5px 0;">
                            <strong>${r.subject}:</strong> You wrote "${r.userAnswer}" → Correct: <strong>${r.correctAnswer}</strong>
                        </div>`
                    ).join('')}
                </div>
            ` : ''}
            <button id="nextTableBtn" class="btn btn-secondary" style="margin-top:15px;width:100%;">
                Next Table
            </button>
        </div>
    `;

    const tableContainer = questionText.querySelector('div');
    if (tableContainer) {
        const feedbackDiv = document.createElement('div');
        feedbackDiv.innerHTML = feedbackHTML;
        tableContainer.appendChild(feedbackDiv);

        // Add next button event listener
        setTimeout(() => {
            const nextTableBtn = document.getElementById('nextTableBtn');
            if (nextTableBtn) {
                nextTableBtn.addEventListener('click', () => {
                    // Update stats
                    if (allCorrect) {
                        currentUser.sessionStats.correct++;
                    }
                    currentUser.sessionStats.total++;
                    updateStatsDisplay();

                    // Track mastery for the verb/tense
                    if (currentUser.userId && window.AssessmentSystem) {
                        window.AssessmentSystem.updateMastery(
                            currentUser.userId,
                            currentQuestion.id,
                            allCorrect,
                            currentUser.masteryData
                        );
                        updateProgressDisplay();
                    }

                    // Reset inputs and load next question
                    answerInput.style.display = '';
                    submitBtn.style.display = '';
                    loadNextQuestion();
                });
            }
        }, 10);
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
    // Calculate progress for current CEFR level
    const levelMastery = window.ReportingSystem.calculateLevelMastery(
        currentUser.masteryData,
        currentUser.cefrLevel
    );

    const levelConfig = window.ReportingSystem.CEFR_LEVELS[currentUser.cefrLevel];
    const minItems = levelConfig.minItemsAttempted;

    // Calculate progress percentage
    const itemProgress = Math.min((levelMastery.attemptedItems / minItems) * 100, 100);
    const accuracyProgress = levelMastery.averageAccuracy * 100;
    const overallProgress = (itemProgress + accuracyProgress) / 2;

    progressBar.style.width = `${overallProgress}%`;
    progressText.textContent = `${levelMastery.attemptedItems}/${minItems} items attempted | ${Math.round(levelMastery.averageAccuracy * 100)}% accuracy`;

    // Show readiness status
    const levelProgressDesc = document.getElementById('levelProgressDesc');

    if (levelMastery.ready) {
        levelProgressDesc.textContent = `🎉 ${window.I18n.t('messages.levelUp')}`;
        levelProgressDesc.style.color = '#10b981';
        levelProgressDesc.style.fontWeight = 'bold';
    } else {
        levelProgressDesc.textContent = window.I18n.t('messages.keepPracticing');
        levelProgressDesc.style.color = '#6b7280';
        levelProgressDesc.style.fontWeight = 'normal';
    }
}

/**
 * Switch exercise type
 */
function switchExerciseType(type) {
    // Use conjugation tables instead of individual conjugations
    if (type === 'conjugation') {
        currentExerciseType = 'conjugation-table';
    } else {
        currentExerciseType = type;
    }

    // Update button states
    const exerciseTypeBtns = document.querySelectorAll('.exercise-type-btn');
    exerciseTypeBtns.forEach(btn => {
        if (btn.dataset.type === type) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Show/hide category filter for vocabulary
    const categoryFilter = document.getElementById('categoryFilter');
    const grammarTopicSelector = document.getElementById('grammarTopicSelector');
    const questionCard = document.querySelector('.question-card');
    const progressSection = document.querySelector('.progress-section');

    if (type === 'vocabulary' && categoryFilter) {
        categoryFilter.style.display = 'block';
        initializeCategoryFilter();
        if (grammarTopicSelector) grammarTopicSelector.style.display = 'none';
        if (questionCard) questionCard.style.display = 'block';
        if (progressSection) progressSection.style.display = 'block';
    } else if (type === 'grammar' && grammarTopicSelector) {
        // Show grammar topic selector
        if (categoryFilter) categoryFilter.style.display = 'none';
        grammarTopicSelector.style.display = 'block';
        initializeGrammarTopicSelector();

        // Show topics grid view by default
        document.getElementById('topicsGridView').style.display = 'block';
        document.getElementById('lessonView').style.display = 'none';
        document.getElementById('practiceView').style.display = 'none';
        document.getElementById('backToTopicsBtn').style.display = 'none';

        if (questionCard) questionCard.style.display = 'block';
        if (progressSection) progressSection.style.display = 'block';
    } else {
        if (categoryFilter) categoryFilter.style.display = 'none';
        if (grammarTopicSelector) grammarTopicSelector.style.display = 'none';
        if (questionCard) questionCard.style.display = 'block';
        if (progressSection) progressSection.style.display = 'block';
    }

    // Load new question of selected type (unless grammar topic mode)
    if (type !== 'grammar') {
        loadNextQuestion();
    }
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

/**
 * Handle language change
 */
function handleLanguageChange(event) {
    const selectedLanguage = event.target.value;
    window.I18n.setLanguage(selectedLanguage);
    updateUILanguage();
}

/**
 * Update UI language
 */
function updateUILanguage() {
    const t = window.I18n.t;

    // Sync language dropdown with current language
    const interfaceLanguageSelect = document.getElementById('interfaceLanguage');
    if (interfaceLanguageSelect) {
        interfaceLanguageSelect.value = window.I18n.getCurrentLanguage();
    }

    // Welcome screen
    const welcomeTitle = document.getElementById('welcomeTitle');
    const welcomeSubtitle = document.getElementById('welcomeSubtitle');
    const languageLabel = document.getElementById('languageLabel');
    const nameLabel = document.getElementById('nameLabel');
    const levelLabel = document.getElementById('levelLabel');
    const levelDescription = document.getElementById('levelDescription');

    if (welcomeTitle) welcomeTitle.textContent = t('welcome.title');
    if (welcomeSubtitle) welcomeSubtitle.textContent = t('welcome.title');
    if (languageLabel) languageLabel.textContent = t('welcome.languageLabel');
    if (nameLabel) nameLabel.textContent = t('welcome.nameLabel');
    if (levelLabel) levelLabel.textContent = t('welcome.selectLevel');

    // Update level description
    const cefrLevelSelect = document.getElementById('cefrLevel');
    if (cefrLevelSelect && levelDescription) {
        const selectedLevel = cefrLevelSelect.value;
        levelDescription.textContent = t(`levelDescriptions.${selectedLevel}`);
    }

    // Update buttons
    if (startBtn) startBtn.textContent = t('welcome.startButton');
    const resumeSessionBtn = document.getElementById('resumeSessionBtn');
    if (resumeSessionBtn) resumeSessionBtn.textContent = t('welcome.resumeButton');

    // Practice screen labels
    document.getElementById('vocabLabel').textContent = t('practice.vocabulary');
    document.getElementById('grammarLabel').textContent = t('practice.grammar');
    document.getElementById('conjugationLabel').textContent = t('practice.conjugation');
    document.getElementById('allTypesLabel').textContent = t('practice.allTypes');
    document.getElementById('saveProgressLabel').textContent = t('practice.saveProgress');
    document.getElementById('viewReportLabel').textContent = t('practice.viewReport');
    document.getElementById('changeLevelLabel').textContent = t('practice.changeLevel');

    // Progress labels
    document.getElementById('levelProgressTitle').textContent = t('progress.levelGoal');

    // Report modal
    document.getElementById('reportTitle').textContent = t('report.title');
    document.getElementById('exportJSONLabel').textContent = t('report.downloadPDF');
    document.getElementById('exportCSVLabel').textContent = t('report.downloadCSV');
    document.getElementById('printLabel').textContent = t('report.printReport');
}

/**
 * Handle level description update
 */
function handleLevelDescriptionUpdate() {
    const cefrLevelSelect = document.getElementById('cefrLevel');
    const levelDescription = document.getElementById('levelDescription');

    if (cefrLevelSelect && levelDescription) {
        const selectedLevel = cefrLevelSelect.value;
        levelDescription.textContent = window.I18n.t(`levelDescriptions.${selectedLevel}`);
    }
}

/**
 * Show Analytics Dashboard
 */
function showAnalyticsDashboard() {
    if (!currentUser.userId || !window.AnalyticsEngine) {
        alert('Analytics not available yet. Please start practicing first!');
        return;
    }

    const analyticsEngine = new window.AnalyticsEngine(currentUser, currentUser.masteryData);
    const dashboardData = analyticsEngine.getDashboardData();

    const analyticsContent = document.getElementById('analyticsContent');
    const analyticsModal = document.getElementById('analyticsModal');

    if (!analyticsContent || !analyticsModal) return;

    // Build HTML for analytics dashboard
    let html = `
        <div style="padding: 20px;">
            <!-- Overview Section -->
            <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 12px; margin-bottom: 20px;">
                <h3 style="margin-top: 0; color: white;">📈 Overview</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px;">
                    <div>
                        <div style="font-size: 32px; font-weight: bold;">${dashboardData.overview.totalAttempts}</div>
                        <div style="opacity: 0.9;">Total Attempts</div>
                    </div>
                    <div>
                        <div style="font-size: 32px; font-weight: bold;">${dashboardData.overview.overallAccuracy}%</div>
                        <div style="opacity: 0.9;">Overall Accuracy</div>
                    </div>
                    <div>
                        <div style="font-size: 32px; font-weight: bold;">${dashboardData.overview.currentStreak}</div>
                        <div style="opacity: 0.9;">Day Streak</div>
                    </div>
                    <div>
                        <div style="font-size: 32px; font-weight: bold;">${dashboardData.overview.uniqueItemsPracticed}</div>
                        <div style="opacity: 0.9;">Items Practiced</div>
                    </div>
                </div>
            </div>

            <!-- Strengths & Weaknesses -->
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
                <div style="background: #f0fdf4; padding: 15px; border-radius: 8px; border: 2px solid #86efac;">
                    <h4 style="color: #15803d; margin-top: 0;">💪 Your Strengths</h4>
                    ${dashboardData.strengthsWeaknesses.strengths.length > 0 ?
                        dashboardData.strengthsWeaknesses.strengths.map(s =>
                            `<div style="margin: 10px 0;">
                                <strong>${s.category}</strong><br>
                                <span style="color: #16a34a;">${s.accuracy.toFixed(1)}% accuracy</span>
                                <span style="color: #666;"> (${s.attempts} attempts)</span>
                            </div>`
                        ).join('')
                        : '<p style="color: #666;">Keep practicing to discover your strengths!</p>'}
                </div>
                <div style="background: #fef2f2; padding: 15px; border-radius: 8px; border: 2px solid #fca5a5;">
                    <h4 style="color: #991b1b; margin-top: 0;">🎯 Areas to Improve</h4>
                    ${dashboardData.strengthsWeaknesses.weaknesses.length > 0 ?
                        dashboardData.strengthsWeaknesses.weaknesses.map(w =>
                            `<div style="margin: 10px 0;">
                                <strong>${w.category}</strong><br>
                                <span style="color: #dc2626;">${w.accuracy.toFixed(1)}% accuracy</span>
                                <span style="color: #666;"> (${w.attempts} attempts)</span>
                            </div>`
                        ).join('')
                        : '<p style="color: #666;">No weak areas yet - great job!</p>'}
                </div>
            </div>

            <!-- Level Analytics -->
            <div style="background: white; padding: 15px; border-radius: 8px; border: 1px solid #e5e7eb; margin-bottom: 20px;">
                <h4 style="margin-top: 0;">📚 Performance by Level</h4>
                ${Object.entries(dashboardData.levelAnalytics).map(([level, data]) => {
                    if (data.attempts === 0) return '';
                    const width = (data.accuracy / 100) * 100;
                    const color = data.accuracy >= 80 ? '#10b981' : data.accuracy >= 60 ? '#f59e0b' : '#ef4444';
                    return `
                        <div style="margin: 15px 0;">
                            <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                                <strong>${level}</strong>
                                <span>${data.accuracy.toFixed(1)}% (${data.correct}/${data.attempts})</span>
                            </div>
                            <div style="background: #e5e7eb; height: 8px; border-radius: 4px; overflow: hidden;">
                                <div style="background: ${color}; height: 100%; width: ${width}%; transition: width 0.3s;"></div>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>

            <!-- Category Performance -->
            <div style="background: white; padding: 15px; border-radius: 8px; border: 1px solid #e5e7eb; margin-bottom: 20px;">
                <h4 style="margin-top: 0;">📊 Category Performance</h4>
                <div style="max-height: 300px; overflow-y: auto;">
                ${Object.entries(dashboardData.categoryAnalytics)
                    .sort((a, b) => b[1].accuracy - a[1].accuracy)
                    .slice(0, 10)
                    .map(([category, data]) => {
                        const width = (data.accuracy / 100) * 100;
                        const color = data.accuracy >= 70 ? '#10b981' : data.accuracy >= 50 ? '#f59e0b' : '#ef4444';
                        return `
                            <div style="margin: 12px 0;">
                                <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                                    <span style="font-weight: 500;">${category}</span>
                                    <span>${data.accuracy.toFixed(1)}%</span>
                                </div>
                                <div style="background: #e5e7eb; height: 6px; border-radius: 3px; overflow: hidden;">
                                    <div style="background: ${color}; height: 100%; width: ${width}%; transition: width 0.3s;"></div>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>

            <!-- Study Habits -->
            <div style="background: white; padding: 15px; border-radius: 8px; border: 1px solid #e5e7eb;">
                <h4 style="margin-top: 0;">⏰ Study Habits</h4>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px;">
                    <div>
                        <div style="font-size: 24px; font-weight: bold; color: #6366f1;">${dashboardData.studyHabits.avgSessionLength}</div>
                        <div style="color: #666; font-size: 14px;">Avg. Session (min)</div>
                    </div>
                    <div>
                        <div style="font-size: 24px; font-weight: bold; color: #6366f1;">${dashboardData.studyHabits.totalSessions}</div>
                        <div style="color: #666; font-size: 14px;">Total Sessions</div>
                    </div>
                    <div>
                        <div style="font-size: 24px; font-weight: bold; color: #6366f1;">${dashboardData.studyHabits.mostProductiveTime}</div>
                        <div style="color: #666; font-size: 14px;">Best Time</div>
                    </div>
                    <div>
                        <div style="font-size: 24px; font-weight: bold; color: #6366f1;">${dashboardData.studyHabits.consistencyScore.toFixed(1)}%</div>
                        <div style="color: #666; font-size: 14px;">Consistency</div>
                    </div>
                </div>
            </div>
        </div>
    `;

    analyticsContent.innerHTML = html;
    analyticsModal.style.display = 'block';
}

function closeAnalyticsDashboard() {
    const analyticsModal = document.getElementById('analyticsModal');
    if (analyticsModal) {
        analyticsModal.style.display = 'none';
    }
}

/**
 * Show progress report
 */
function showProgressReport() {
    if (!currentUser.userId) return;

    // Generate report
    currentReport = window.ReportingSystem.generateProgressReport(
        currentUser.userId,
        currentUser.name,
        currentUser.masteryData
    );

    // Display report in modal
    displayReport(currentReport);

    // Show modal
    const reportModal = document.getElementById('reportModal');
    reportModal.classList.add('active');
}

/**
 * Display report content
 */
function displayReport(report) {
    const reportContent = document.getElementById('reportContent');

    let html = `
        <div class="report-section">
            <h3>${window.I18n.t('report.overallProgress')}</h3>
            <div class="report-grid">
                <div class="report-card">
                    <div class="report-card-label">${window.I18n.t('report.currentLevel')}</div>
                    <div class="report-card-value level-badge">${report.currentLevel}</div>
                </div>
                <div class="report-card">
                    <div class="report-card-label">${window.I18n.t('report.totalAttempts')}</div>
                    <div class="report-card-value">${report.overallStats.totalAttempts}</div>
                </div>
                <div class="report-card">
                    <div class="report-card-label">${window.I18n.t('report.overallAccuracy')}</div>
                    <div class="report-card-value">${(report.overallStats.overallAccuracy * 100).toFixed(1)}%</div>
                </div>
                <div class="report-card">
                    <div class="report-card-label">${window.I18n.t('progress.itemsCount')}</div>
                    <div class="report-card-value">${report.overallStats.attemptedItems}/${report.overallStats.totalItems}</div>
                </div>
            </div>
        </div>

        <div class="report-section">
            <h3>${window.I18n.t('report.exercisesByLevel')}</h3>
            <table class="report-table">
                <thead>
                    <tr>
                        <th>CEFR Level</th>
                        <th>${window.I18n.t('progress.itemsCount')}</th>
                        <th>${window.I18n.t('report.overallAccuracy')}</th>
                        <th>${window.I18n.t('report.readyForNextLevel')}</th>
                    </tr>
                </thead>
                <tbody>
    `;

    for (const [level, progress] of Object.entries(report.levelProgress)) {
        html += `
            <tr>
                <td><strong>${level}</strong></td>
                <td>${progress.attemptedItems}/${progress.totalItems}</td>
                <td>${(progress.averageAccuracy * 100).toFixed(1)}%</td>
                <td>${progress.ready ? '✓' : '—'}</td>
            </tr>
        `;
    }

    html += `
                </tbody>
            </table>
        </div>
    `;

    // Strengths and Weaknesses
    if (report.strengthsWeaknesses.strengths.length > 0 || report.strengthsWeaknesses.weaknesses.length > 0) {
        html += `<div class="report-section">
            <h3>${window.I18n.t('report.strengthsAndWeaknesses')}</h3>`;

        if (report.strengthsWeaknesses.strengths.length > 0) {
            html += `<h4>${window.I18n.t('report.strengths')}</h4>
                <ul class="category-list">`;
            report.strengthsWeaknesses.strengths.forEach(s => {
                html += `
                    <li>
                        <span class="category-name">${s.category}</span>
                        <span class="category-accuracy good">${(s.accuracy * 100).toFixed(1)}%</span>
                    </li>
                `;
            });
            html += `</ul>`;
        }

        if (report.strengthsWeaknesses.weaknesses.length > 0) {
            html += `<h4>${window.I18n.t('report.weaknesses')}</h4>
                <ul class="category-list">`;
            report.strengthsWeaknesses.weaknesses.forEach(w => {
                html += `
                    <li>
                        <span class="category-name">${w.category}</span>
                        <span class="category-accuracy poor">${(w.accuracy * 100).toFixed(1)}%</span>
                    </li>
                `;
            });
            html += `</ul>`;
        }

        html += `</div>`;
    }

    // Recommendations
    if (report.recommendations.length > 0) {
        html += `
            <div class="report-section">
                <h3>${window.I18n.t('report.recommendations')}</h3>
        `;

        report.recommendations.forEach(rec => {
            html += `
                <div class="recommendation-item priority-${rec.priority}">
                    <strong>${rec.priority} priority:</strong> ${rec.message}
                </div>
            `;
        });

        html += `</div>`;
    }

    reportContent.innerHTML = html;
}

/**
 * Close report modal
 */
function closeReportModal() {
    const reportModal = document.getElementById('reportModal');
    reportModal.classList.remove('active');
}

/**
 * Show level change dialog
 */
function showLevelChangeDialog() {
    const cefrLevel = prompt(
        `${window.I18n.t('practice.currentLevel')}: ${currentUser.cefrLevel}\n\n` +
        `${window.I18n.t('welcome.selectLevel')} (A1, A2, B1, B2, C1, C2):`,
        currentUser.cefrLevel
    );

    if (cefrLevel && ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'].includes(cefrLevel.toUpperCase())) {
        currentUser.cefrLevel = cefrLevel.toUpperCase();
        window.ReportingSystem.saveUserLevel(currentUser.userId, currentUser.cefrLevel);

        // Update UI
        const currentLevelValue = document.getElementById('currentLevelValue');
        if (currentLevelValue) {
            currentLevelValue.textContent = currentUser.cefrLevel;
        }

        // Update progress display
        updateProgressDisplay();

        alert(`${window.I18n.t('practice.currentLevel')}: ${currentUser.cefrLevel}`);
    }
}

/**
 * Category Filter for Vocabulary
 */
let selectedCategories = []; // Track selected categories

function initializeCategoryFilter() {
    const categoryContainer = document.querySelector('.category-checkboxes');
    if (!categoryContainer) return;

    // Get all unique categories from vocabulary content
    const allVocab = [
        ...FRENCH_CONTENT.level1.vocabulary,
        ...FRENCH_CONTENT.level2.vocabulary,
        ...(FRENCH_CONTENT.level3?.vocabulary || []),
        ...(FRENCH_CONTENT.level4?.vocabulary || []),
        ...(FRENCH_CONTENT.level5?.vocabulary || []),
        ...(FRENCH_CONTENT.level6?.vocabulary || []),
        ...FRENCH_CONTENT.phrases
    ];

    const categories = [...new Set(allVocab.map(item => item.category).filter(Boolean))].sort();

    // Clear existing checkboxes
    categoryContainer.innerHTML = '';

    // Create checkbox for each category
    categories.forEach(category => {
        const label = document.createElement('label');
        label.style.display = 'flex';
        label.style.alignItems = 'center';
        label.style.cursor = 'pointer';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = category;
        checkbox.style.marginRight = '5px';
        checkbox.checked = selectedCategories.includes(category);

        const text = document.createTextNode(category);

        label.appendChild(checkbox);
        label.appendChild(text);
        categoryContainer.appendChild(label);
    });

    // Add event listeners to filter buttons
    const applyBtn = document.getElementById('applyFilterBtn');
    const clearBtn = document.getElementById('clearFilterBtn');

    if (applyBtn) {
        applyBtn.onclick = applyCategoryFilter;
    }
    if (clearBtn) {
        clearBtn.onclick = clearCategoryFilter;
    }
}

function applyCategoryFilter() {
    const checkboxes = document.querySelectorAll('.category-checkboxes input[type="checkbox"]');
    selectedCategories = Array.from(checkboxes)
        .filter(cb => cb.checked)
        .map(cb => cb.value);

    // Load new question with filter applied
    loadNextQuestion();
}

function clearCategoryFilter() {
    selectedCategories = [];
    const checkboxes = document.querySelectorAll('.category-checkboxes input[type="checkbox"]');
    checkboxes.forEach(cb => cb.checked = false);

    // Load new question without filter
    loadNextQuestion();
}

/**
 * Start Placement Test
 */
function startPlacementTest() {
    if (!window.PlacementTestEngine) {
        alert('Placement test module not loaded');
        return;
    }

    const confirmStart = confirm('Take a placement test to determine your French level?\n\nThis will take about 10-15 minutes and test your knowledge across all CEFR levels.');

    if (!confirmStart) return;

    const testEngine = new window.PlacementTestEngine();
    const firstQuestion = testEngine.start();

    if (!firstQuestion) {
        alert('Error starting placement test');
        return;
    }

    // Simple placement test implementation
    let testCompleted = false;
    let questionsAnswered = 0;
    const maxQuestions = 15; // Limit test to 15 questions

    function askNextQuestion() {
        const question = testEngine.getCurrentQuestion();

        if (!question || questionsAnswered >= maxQuestions) {
            // Test complete
            const results = testEngine.getResults();
            const message = `Placement Test Complete!\n\n` +
                `Level: ${results.level}\n` +
                `Questions: ${results.totalQuestions}\n` +
                `Correct: ${results.correctAnswers}\n` +
                `Accuracy: ${results.accuracy}%\n\n` +
                `Your recommended starting level is ${results.level}.`;

            alert(message);

            // Update user level
            currentUser.cefrLevel = results.level;
            document.getElementById('cefrLevel').value = results.level;
            document.getElementById('currentLevelValue').textContent = results.level;

            // Save the new level
            if (currentUser.userId) {
                window.ReportingSystem.saveUserLevel(currentUser.userId, results.level);
            }

            return;
        }

        const userAnswer = prompt(
            `Placement Test (${questionsAnswered + 1}/${maxQuestions})\n\n` +
            `${question.question}\n\n` +
            `Options:\n` +
            question.options.map((opt, idx) => `${idx + 1}. ${opt}`).join('\n') +
            `\n\nEnter the number of your answer (1-${question.options.length}):`
        );

        if (userAnswer === null) {
            // User cancelled
            alert('Placement test cancelled');
            return;
        }

        const answerIndex = parseInt(userAnswer) - 1;
        if (answerIndex >= 0 && answerIndex < question.options.length) {
            const selectedAnswer = question.options[answerIndex];
            testEngine.submitAnswer(question.id, selectedAnswer);
            questionsAnswered++;
            askNextQuestion();
        } else {
            alert('Invalid answer. Please try again.');
            askNextQuestion();
        }
    }

    askNextQuestion();
}

/**
 * Grammar Topic Selector Functionality
 */

let currentTopic = null;
let currentTopicExercises = [];
let currentTopicExerciseIndex = 0;
let topicPracticeMode = false;

/**
 * Initialize Grammar Topic Selector
 */
function initializeGrammarTopicSelector() {
    const grammarTopics = FRENCH_CONTENT.grammarTopics || [];
    const container = document.getElementById('grammarTopicsContainer');

    if (!container) return;

    container.innerHTML = '';

    // Create a card for each topic
    grammarTopics.forEach(topic => {
        const card = createTopicCard(topic);
        container.appendChild(card);
    });

    // Add event listeners
    const backBtn = document.getElementById('backToTopicsBtn');
    const startPracticeBtn = document.getElementById('startPracticeBtn');

    if (backBtn) {
        backBtn.onclick = showTopicsGrid;
    }

    if (startPracticeBtn) {
        startPracticeBtn.onclick = startTopicPractice;
    }
}

/**
 * Create a topic card element
 */
function createTopicCard(topic) {
    const card = document.createElement('div');
    card.className = 'grammar-topic-card';

    // Calculate progress for this topic
    const progress = calculateTopicProgress(topic);

    // Add status class
    if (progress.percentage === 100) {
        card.classList.add('completed');
    } else if (progress.percentage > 0) {
        card.classList.add('in-progress');
    }

    // Create card HTML
    card.innerHTML = `
        <div class="topic-card-header">
            <h3 class="topic-card-title">${topic.title}</h3>
            <span class="topic-card-level badge badge-blue">${topic.cefrLevel}</span>
        </div>
        <p class="topic-card-description">${topic.description}</p>
        <div class="topic-card-footer">
            <span class="topic-card-exercises">${topic.exerciseIds.length} exercises</span>
            <span class="topic-card-progress ${progress.statusClass}">
                ${progress.label}
            </span>
        </div>
    `;

    // Add click handler
    card.addEventListener('click', () => showLesson(topic));

    return card;
}

/**
 * Calculate progress for a topic
 */
function calculateTopicProgress(topic) {
    if (!currentUser || !currentUser.masteryData) {
        return { percentage: 0, label: 'Not Started', statusClass: 'not-started' };
    }

    const exerciseIds = topic.exerciseIds || [];
    if (exerciseIds.length === 0) {
        return { percentage: 0, label: 'No Exercises', statusClass: 'not-started' };
    }

    let masteredCount = 0;
    let attemptedCount = 0;

    exerciseIds.forEach(id => {
        const mastery = currentUser.masteryData[id];
        if (mastery) {
            attemptedCount++;
            if (mastery.stage === 'mastered' || mastery.stage === 'solid') {
                masteredCount++;
            }
        }
    });

    const percentage = Math.round((masteredCount / exerciseIds.length) * 100);

    let label, statusClass;
    if (percentage === 100) {
        label = '✓ Mastered';
        statusClass = 'mastered';
    } else if (percentage > 0) {
        label = `${percentage}% Complete`;
        statusClass = 'in-progress';
    } else if (attemptedCount > 0) {
        label = 'In Progress';
        statusClass = 'in-progress';
    } else {
        label = 'Not Started';
        statusClass = 'not-started';
    }

    return { percentage, label, statusClass };
}

/**
 * Show lesson view for a topic
 */
function showLesson(topic) {
    currentTopic = topic;

    // Hide topics grid, show lesson view
    document.getElementById('topicsGridView').style.display = 'none';
    document.getElementById('lessonView').style.display = 'block';
    document.getElementById('backToTopicsBtn').style.display = 'block';

    // Hide question card in lesson view
    document.querySelector('.question-card').style.display = 'none';
    document.querySelector('.progress-section').style.display = 'none';

    // Populate lesson content
    document.getElementById('lessonTitle').textContent = topic.title;
    document.getElementById('lessonLevel').textContent = topic.cefrLevel;
    document.getElementById('lessonDescription').textContent = topic.description;
    document.getElementById('theoryContent').innerHTML = topic.theory;

    // Populate examples
    const examplesList = document.getElementById('examplesList');
    examplesList.innerHTML = '';
    topic.examples.forEach(example => {
        const li = document.createElement('li');
        li.textContent = example;
        examplesList.appendChild(li);
    });

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Show topics grid (back from lesson)
 */
function showTopicsGrid() {
    // Reset topic practice mode
    topicPracticeMode = false;
    currentTopic = null;
    currentTopicExercises = [];
    currentTopicExerciseIndex = 0;

    // Show topics grid, hide lesson and practice views
    document.getElementById('topicsGridView').style.display = 'block';
    document.getElementById('lessonView').style.display = 'none';
    document.getElementById('practiceView').style.display = 'none';
    document.getElementById('backToTopicsBtn').style.display = 'none';

    // Show question card and progress section
    document.querySelector('.question-card').style.display = 'block';
    document.querySelector('.progress-section').style.display = 'block';

    // Reload regular grammar exercises
    loadNextQuestion();

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Start practice exercises for the current topic
 */
function startTopicPractice() {
    if (!currentTopic) return;

    topicPracticeMode = true;
    currentTopicExerciseIndex = 0;

    // Get all exercises for this topic from the grammar array
    const allGrammar = FRENCH_CONTENT.grammar || [];
    currentTopicExercises = allGrammar.filter(ex =>
        currentTopic.exerciseIds.includes(ex.id)
    );

    if (currentTopicExercises.length === 0) {
        alert('No exercises available for this topic.');
        return;
    }

    // Hide lesson view, show practice view and question card
    document.getElementById('lessonView').style.display = 'none';
    document.getElementById('practiceView').style.display = 'block';
    document.querySelector('.question-card').style.display = 'block';
    document.querySelector('.progress-section').style.display = 'block';

    // Update practice header
    updateTopicPracticeHeader();

    // Load first question
    loadNextTopicQuestion();

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Update topic practice header
 */
function updateTopicPracticeHeader() {
    const titleEl = document.getElementById('practiceTopicTitle');
    const progressEl = document.getElementById('practiceProgress');

    if (titleEl && currentTopic) {
        titleEl.textContent = `Practice: ${currentTopic.title}`;
    }

    if (progressEl) {
        const completed = currentTopicExerciseIndex;
        const total = currentTopicExercises.length;
        progressEl.textContent = `Question ${completed + 1} of ${total}`;
    }
}

/**
 * Load next question in topic practice mode
 */
function loadNextTopicQuestion() {
    if (!topicPracticeMode || currentTopicExerciseIndex >= currentTopicExercises.length) {
        // Finished all exercises in this topic
        const confirmContinue = confirm(`You've completed all exercises for "${currentTopic.title}"!\n\nWould you like to return to the topics menu?`);
        if (confirmContinue) {
            showTopicsGrid();
        }
        return;
    }

    // Get the next exercise
    const exercise = currentTopicExercises[currentTopicExerciseIndex];
    currentQuestion = exercise;

    // Display the question
    displayGrammarQuestion(exercise);

    // Update practice header
    updateTopicPracticeHeader();

    // Reset feedback
    const feedback = document.getElementById('feedback');
    const answerInput = document.getElementById('answerInput');

    if (feedback) feedback.classList.add('hidden');
    if (answerInput) {
        answerInput.value = '';
        answerInput.disabled = false;
    }

    const submitBtn = document.getElementById('submitBtn');
    if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.style.display = 'block';
    }
}

/**
 * Display a grammar question
 */
function displayGrammarQuestion(question) {
    const questionLabel = document.querySelector('.question-label');
    const questionText = document.getElementById('questionText');
    const questionTypeDisplay = document.getElementById('questionType');

    if (questionLabel) {
        questionLabel.textContent = 'Complete the grammar exercise:';
    }

    if (questionText) {
        // Remove parenthetical hints for cleaner display
        const cleanQuestion = question.question.replace(/\s*\([^)]*\)/g, '');
        questionText.textContent = cleanQuestion;
    }

    if (questionTypeDisplay) {
        questionTypeDisplay.textContent = window.I18n.t('badges.grammar');
        questionTypeDisplay.className = 'badge badge-green';
    }
}

/**
 * Handle topic practice answer submission
 */
function handleTopicPracticeSubmit() {
    // Use the existing answer validation logic
    const answerInput = document.getElementById('answerInput');
    const userAnswer = answerInput.value.trim();

    // Validate answer using existing utility
    const isCorrect = window.Utils.validateAnswer(userAnswer, currentQuestion.answer, currentQuestion.alternatives);

    // Update mastery data
    if (currentUser && currentUser.masteryData) {
        window.AssessmentSystem.recordAnswer(
            currentUser.masteryData,
            currentQuestion.id,
            isCorrect
        );
    }

    // Show feedback
    showFeedback(isCorrect, currentQuestion.answer, currentQuestion.explanation);

    // Disable input
    answerInput.disabled = true;
    document.getElementById('submitBtn').style.display = 'none';
}

/**
 * Move to next topic exercise
 */
function nextTopicExercise() {
    currentTopicExerciseIndex++;
    loadNextTopicQuestion();
}

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Make functions available globally (for debugging)
window.resetSession = resetSession;
window.showProgressReport = showProgressReport;
