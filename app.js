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
        total: 0,
        mistakes: 0 // Track total mistakes across all attempts
    }
};

let currentQuestion = null;
let currentExerciseType = 'vocabulary'; // 'vocabulary', 'grammar', 'conjugation', or 'all'
let currentReport = null; // Stores generated report for export
let isCreatingNewUser = false; // Flag to track if we're creating a new user vs returning user

// Retry Logic Configuration
const MAX_ATTEMPTS = 3; // Maximum attempts before showing answer and moving on
let currentAttempts = 0; // Track attempts for current question
let questionAnsweredCorrectly = false; // Track if current question was answered correctly

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
    console.log('[INIT] Setting up exercise button listeners');
    const exerciseTypeBtns = document.querySelectorAll('.exercise-type-btn');
    console.log('[INIT] Found exercise buttons:', exerciseTypeBtns.length);

    exerciseTypeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const exerciseType = this.dataset.type;
            console.log('[exerciseTypeBtn] Clicked:', exerciseType);

            // Remove active class from all buttons
            document.querySelectorAll('.exercise-type-btn').forEach(b => {
                b.classList.remove('active');
            });

            // Add active class to clicked button
            this.classList.add('active');

            // Navigate to exercise page and start exercise
            switchExerciseType(exerciseType);
        });
    });

    console.log('[INIT] Exercise button listeners attached');

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

    // Accent Helper event listeners
    initializeAccentHelper();

    // User Management event listeners
    initializeUserManagement();

    // Skills Grid event listeners
    initializeSkillsGrid();

    // Page Navigation event listeners
    console.log('[INIT] Setting up back button listener');
    const backToHomeBtn = document.getElementById('backToHomeBtn');
    if (backToHomeBtn) {
        backToHomeBtn.addEventListener('click', () => {
            console.log('[backToHomeBtn] Clicked - Returning to home page');
            showHomePage();
        });
        console.log('[INIT] Back button listener attached');
    } else {
        console.warn('[INIT] Back to Home button not found in DOM');
    }

    // Settings button - open settings modal
    const settingsBtn = document.getElementById('settingsBtn');
    const settingsModal = document.getElementById('settingsModal');
    const closeSettingsBtn = document.getElementById('closeSettingsBtn');
    const backToPracticeBtn = document.getElementById('backToPracticeBtn');

    if (settingsBtn) {
        settingsBtn.addEventListener('click', () => {
            console.log('[settingsBtn] Opening settings modal');
            settingsModal.style.display = 'flex';
        });
    }

    if (closeSettingsBtn) {
        closeSettingsBtn.addEventListener('click', () => {
            console.log('[closeSettingsBtn] Closing settings modal');
            settingsModal.style.display = 'none';
        });
    }

    if (backToPracticeBtn) {
        backToPracticeBtn.addEventListener('click', () => {
            console.log('[backToPracticeBtn] Closing settings modal');
            settingsModal.style.display = 'none';
        });
    }

    // Close modal when clicking outside
    if (settingsModal) {
        settingsModal.addEventListener('click', (e) => {
            if (e.target === settingsModal) {
                settingsModal.style.display = 'none';
            }
        });
    }

    // Settings menu items
    const manageUsersBtn = document.getElementById('manageUsersBtn');
    const viewAnalyticsBtnSettings = document.getElementById('viewAnalyticsBtnSettings');
    const changeLevelBtnSettings = document.getElementById('changeLevelBtnSettings');
    const resetDataBtnSettings = document.getElementById('resetDataBtnSettings');
    const languageSettingsBtn = document.getElementById('languageSettingsBtn');

    if (manageUsersBtn) {
        manageUsersBtn.addEventListener('click', () => {
            console.log('[manageUsersBtn] Opening user management page');
            showUserManagementPage();
        });
    }

    if (viewAnalyticsBtnSettings) {
        viewAnalyticsBtnSettings.addEventListener('click', () => {
            console.log('[viewAnalyticsBtnSettings] Opening analytics from settings');
            settingsModal.style.display = 'none';
            showAnalyticsDashboard();
        });
    }

    if (changeLevelBtnSettings) {
        changeLevelBtnSettings.addEventListener('click', () => {
            console.log('[changeLevelBtnSettings] Opening level change dialog');
            settingsModal.style.display = 'none';
            showLevelChangeDialog();
        });
    }

    if (resetDataBtnSettings) {
        resetDataBtnSettings.addEventListener('click', () => {
            console.log('[resetDataBtnSettings] Opening reset confirmation');
            settingsModal.style.display = 'none';
            if (confirm(window.I18n.t('messages.confirmReset') || 'Are you sure you want to reset all progress data for this user? This cannot be undone.')) {
                resetCurrentUserData();
            }
        });
    }

    if (languageSettingsBtn) {
        languageSettingsBtn.addEventListener('click', () => {
            console.log('[languageSettingsBtn] Opening language selector');
            // This can trigger the existing language selector modal
            const langModal = document.getElementById('languageSelectorModal');
            if (langModal) {
                settingsModal.style.display = 'none';
                langModal.style.display = 'flex';
            }
        });
    }

    // User Management Page event listeners
    const backFromUserMgmtBtn = document.getElementById('backFromUserMgmtBtn');
    const addNewUserBtnUserMgmt = document.getElementById('addNewUserBtnUserMgmt');
    const cancelDeleteBtn = document.getElementById('cancelDeleteBtn');
    const confirmDeleteBtn = document.getElementById('confirmDeleteBtn');

    if (backFromUserMgmtBtn) {
        backFromUserMgmtBtn.addEventListener('click', () => {
            console.log('[backFromUserMgmtBtn] Going back to practice');
            const userManagementPage = document.getElementById('userManagementPage');
            const practiceScreen = document.getElementById('practiceScreen');

            if (userManagementPage) userManagementPage.style.display = 'none';
            if (practiceScreen) practiceScreen.classList.add('active');
        });
    }

    if (addNewUserBtnUserMgmt) {
        addNewUserBtnUserMgmt.addEventListener('click', () => {
            console.log('[addNewUserBtnUserMgmt] Adding new user from management page');
            const userManagementPage = document.getElementById('userManagementPage');
            if (userManagementPage) userManagementPage.style.display = 'none';
            showAddNewUserDialog();
        });
    }

    if (cancelDeleteBtn) {
        cancelDeleteBtn.addEventListener('click', () => {
            console.log('[cancelDeleteBtn] Canceling delete');
            const deleteModal = document.getElementById('deleteUserModal');
            if (deleteModal) deleteModal.style.display = 'none';
            userToDelete = null;
        });
    }

    if (confirmDeleteBtn) {
        confirmDeleteBtn.addEventListener('click', () => {
            console.log('[confirmDeleteBtn] Confirming delete');
            if (userToDelete) {
                deleteUser(userToDelete);
                userToDelete = null;
            }
        });
    }

    // Close delete modal when clicking outside
    const deleteModal = document.getElementById('deleteUserModal');
    if (deleteModal) {
        deleteModal.addEventListener('click', (e) => {
            if (e.target === deleteModal) {
                deleteModal.style.display = 'none';
                userToDelete = null;
            }
        });
    }

    // Language selector modal handlers
    const closeLangModalBtn = document.getElementById('closeLangModalBtn');
    const langModal = document.getElementById('languageSelectorModal');

    if (closeLangModalBtn) {
        closeLangModalBtn.addEventListener('click', () => {
            console.log('[closeLangModalBtn] Closing language selector');
            if (langModal) langModal.style.display = 'none';
        });
    }

    // Language option buttons
    document.querySelectorAll('.lang-option-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const lang = e.target.dataset.lang || e.currentTarget.dataset.lang;
            console.log('[lang-option-btn] Changing language to:', lang);

            // Change language
            if (window.I18n) {
                window.I18n.setLanguage(lang);
                updateUILanguage();
            }

            // Update interface language selector
            const interfaceLanguageSelect = document.getElementById('interfaceLanguage');
            if (interfaceLanguageSelect) {
                interfaceLanguageSelect.value = lang;
            }

            // Close modal
            if (langModal) langModal.style.display = 'none';

            // Show confirmation
            const langNames = { 'en': 'English', 'nl': 'Nederlands', 'fr': 'Français', 'de': 'Deutsch' };
            alert(`Language changed to ${langNames[lang]}!`);
        });
    });

    // Close language modal when clicking outside
    if (langModal) {
        langModal.addEventListener('click', (e) => {
            if (e.target === langModal) {
                langModal.style.display = 'none';
            }
        });
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
 * Show the Add New User dialog
 * Returns to user setup screen so new user can be created
 */
function showAddNewUserDialog() {
    console.log('[showAddNewUserDialog] Opening add new user dialog');
    isCreatingNewUser = true; // Set flag to indicate we're creating a new user

    try {
        // Hide practice screen
        if (practiceScreen) {
            practiceScreen.classList.remove('active');
            console.log('[showAddNewUserDialog] Practice screen hidden');
        }

        // Show user setup screen
        if (userSetupScreen) {
            userSetupScreen.classList.add('active');
            console.log('[showAddNewUserDialog] User setup screen shown');
        }

        // Clear input field and focus
        if (userNameInput) {
            userNameInput.value = '';
            userNameInput.focus();
            console.log('[showAddNewUserDialog] Name input cleared and focused');
        }

        // Reset level selector to default (A1)
        const cefrLevelSelect = document.getElementById('cefrLevel');
        if (cefrLevelSelect) {
            cefrLevelSelect.value = 'A1';
            console.log('[showAddNewUserDialog] Level reset to A1');
        }

        // Make sure to close user management page if it's open
        const userManagementPage = document.getElementById('userManagementPage');
        if (userManagementPage) {
            userManagementPage.style.display = 'none';
            console.log('[showAddNewUserDialog] User management page closed');
        }

        console.log('[showAddNewUserDialog] Add new user dialog ready');
    } catch (error) {
        console.error('[showAddNewUserDialog] Error:', error);
        alert('Error opening add new user dialog. Please refresh and try again.');
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
    let userId;

    if (isCreatingNewUser) {
        // Creating a new user - always generate a fresh UUID
        console.log('[startPractice] Creating NEW user - generating fresh UUID');
        userId = window.AssessmentSystem.generateUUID();
        isCreatingNewUser = false; // Reset flag
    } else {
        // Returning user or first-time user - check localStorage
        userId = localStorage.getItem('currentUserId');
        if (!userId) {
            console.log('[startPractice] No existing user - generating UUID for first user');
            userId = window.AssessmentSystem.generateUUID();
        } else {
            console.log('[startPractice] Returning user - using existing userId:', userId);
        }
    }

    localStorage.setItem('currentUserId', userId);

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

    // Save user name and level for user dropdown
    localStorage.setItem(`userName_${userId}`, name);
    localStorage.setItem(`userLevel_${userId}`, currentUser.cefrLevel);
    localStorage.setItem(`lastSession_${userId}`, new Date().toISOString());

    // Save user to the frenchAppUsers array for the user list
    let frenchAppUsers = JSON.parse(localStorage.getItem('frenchAppUsers') || '[]');

    // Check if user already exists in array
    const userExists = frenchAppUsers.some(u => u.userId === userId);

    if (!userExists) {
        // Add new user to array
        frenchAppUsers.push({
            userId: userId,
            name: name,
            cefrLevel: currentUser.cefrLevel,
            createdDate: new Date().toISOString(),
            lastSession: new Date().toISOString()
        });
        console.log('[startPractice] Added new user to frenchAppUsers array');
    } else {
        // Update existing user's level and lastSession
        const userIndex = frenchAppUsers.findIndex(u => u.userId === userId);
        if (userIndex !== -1) {
            frenchAppUsers[userIndex].cefrLevel = currentUser.cefrLevel;
            frenchAppUsers[userIndex].lastSession = new Date().toISOString();
            console.log('[startPractice] Updated existing user in frenchAppUsers array');
        }
    }

    // Save updated array back to localStorage
    localStorage.setItem('frenchAppUsers', JSON.stringify(frenchAppUsers));
    console.log('[startPractice] Saved frenchAppUsers array:', frenchAppUsers);

    // Update UI
    displayName.textContent = name;
    const displayLevel = document.getElementById('displayLevel');
    if (displayLevel) {
        displayLevel.textContent = `(${currentUser.cefrLevel})`;
    }

    const currentLevelValue = document.getElementById('currentLevelValue');
    if (currentLevelValue) {
        currentLevelValue.textContent = currentUser.cefrLevel;
    }

    // Switch screens
    userSetupScreen.classList.remove('active');
    practiceScreen.classList.add('active');

    // Populate the other users list
    populateOtherUsersList();

    // Load first question
    loadNextQuestion();

    // Update progress display
    updateProgressDisplay();
}

/**
 * Advance to next item (handles multi-question reading passages)
 */
function advanceToNext() {
    // Handle verb practice mode
    if (currentVerbConjugations && currentVerbConjugations.length > 0 &&
        document.getElementById('verbPracticeView').style.display !== 'none') {
        nextVerbQuestion();
        return;
    }

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
    console.log('[loadNextQuestion] Starting with exerciseType:', currentExerciseType, 'cefrLevel:', currentUser.cefrLevel);

    // Reset retry logic for new question
    currentAttempts = 0;
    questionAnsweredCorrectly = false;

    // Reset attempt display
    const attemptDisplay = document.getElementById('attemptDisplay');
    if (attemptDisplay) {
        attemptDisplay.textContent = '0';
    }

    // Hide feedback from previous question
    feedback.classList.add('hidden');

    // Re-enable input and submit button
    answerInput.disabled = false;
    submitBtn.disabled = false;
    answerInput.value = '';
    answerInput.focus();

    // Hide Next button from previous question
    nextBtn.style.display = 'none';
    console.log('[loadNextQuestion] Next button hidden for new question');

    // Get all questions for current exercise type and level
    let availableQuestions = [];

    try {
        if (currentExerciseType === 'all') {
            console.log('[loadNextQuestion] Loading mixed exercises');
            availableQuestions = window.FrenchContent.getItemsUpToCefrLevel(currentUser.cefrLevel);
        } else {
            console.log('[loadNextQuestion] Loading exercises for type:', currentExerciseType);
            availableQuestions = window.FrenchContent.getContentByType(currentExerciseType);
            console.log('[loadNextQuestion] Found', availableQuestions ? availableQuestions.length : 0, 'total exercises');

            // Filter by CEFR level
            const levelOrder = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
            const maxLevelIndex = levelOrder.indexOf(currentUser.cefrLevel);
            if (maxLevelIndex !== -1) {
                const beforeFilter = availableQuestions.length;
                availableQuestions = availableQuestions.filter(q => {
                    const qLevelIndex = levelOrder.indexOf(q.cefrLevel);
                    return qLevelIndex !== -1 && qLevelIndex <= maxLevelIndex;
                });
                console.log('[loadNextQuestion] After level filtering:', beforeFilter, '→', availableQuestions.length);
            }
        }
    } catch (error) {
        console.error('[loadNextQuestion] Error loading content:', error);
        questionText.innerHTML = `<div style="color: red; padding: 20px;">Error loading exercises: ${error.message}</div>`;
        return;
    }

    // Apply category filter for vocabulary if categories are selected
    if (currentExerciseType === 'vocabulary' && selectedCategories.length > 0) {
        availableQuestions = availableQuestions.filter(q =>
            q.category && selectedCategories.includes(q.category)
        );
    }

    // Fallback if no questions available
    if (!availableQuestions || availableQuestions.length === 0) {
        // Try to get any question without level filtering as last resort
        const allQuestionsForType = window.FrenchContent.getContentByType(currentExerciseType);

        if (!allQuestionsForType || allQuestionsForType.length === 0) {
            // No content available for this exercise type at all
            questionText.innerHTML = `
                <div style="padding: 20px; background: #fef2f2; border: 1px solid #fecaca; border-radius: 8px; color: #991b1b;">
                    <h3 style="margin-top: 0;">⚠️ No Content Available</h3>
                    <p>Sorry, there are no ${currentExerciseType} exercises available yet.</p>
                    <p>Please try a different exercise type or contact support.</p>
                </div>
            `;
            answerInput.style.display = 'none';
            submitBtn.style.display = 'none';
            return;
        } else {
            // Content exists but not for user's level - show message and use random question
            console.warn(`No ${currentExerciseType} exercises found for level ${currentUser.cefrLevel}. Using questions from other levels.`);
            currentQuestion = allQuestionsForType[Math.floor(Math.random() * allQuestionsForType.length)];
        }
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

    // Ensure regular answer inputs are visible by default (will be hidden for special types like conjugation tables)
    answerInput.style.display = '';
    submitBtn.style.display = '';

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
    else if (currentQuestion.turns && Array.isArray(currentQuestion.turns)) {
        questionLabel.textContent = 'Dialogue Practice:';
        questionTypeDisplay.textContent = '💬 Dialogue';
        questionTypeDisplay.className = 'badge badge-teal';

        const dialogueHTML = currentQuestion.turns.map((turn, idx) =>
            `<div style="margin:10px 0;">
                <strong>Speaker ${turn.speaker || 'Unknown'}:</strong> ${turn.text || ''}<br>
                <em style="color:#666;">(${turn.translation || ''})</em>
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
                if (currentQuestion.forms && currentQuestion.forms.length > 0) {
                    const lastInput = document.getElementById(`conj-input-${currentQuestion.forms.length - 1}`);
                    if (lastInput) {
                        lastInput.addEventListener('keypress', (e) => {
                            if (e.key === 'Enter') {
                                checkConjugationTable();
                            }
                        });
                    }
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
    console.log('[checkAnswer] Validating answer for question:', currentQuestion ? currentQuestion.id : 'none');

    // Handle verb practice mode
    if (currentVerbConjugations && currentVerbConjugations.length > 0 &&
        document.getElementById('verbPracticeView').style.display !== 'none') {
        handleVerbPracticeSubmit();
        return;
    }

    // Handle topic practice mode
    if (topicPracticeMode) {
        handleTopicPracticeSubmit();
        return;
    }

    if (!currentQuestion) {
        console.error('[checkAnswer] No current question!');
        showFeedbackModal('⚠️', 'No question loaded', 'Please select an exercise type first');
        return;
    }

    const userAnswer = answerInput.value.trim();

    if (!userAnswer) {
        showFeedbackModal('⚠️', 'Please enter an answer', '');
        return;
    }

    console.log('[checkAnswer] User answer:', userAnswer);

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

    // Increment attempt counter
    currentAttempts++;
    console.log('[checkAnswer] Attempt', currentAttempts, 'of', MAX_ATTEMPTS, '- Result:', isCorrect ? 'CORRECT' : 'INCORRECT');

    // Update attempt display
    const attemptDisplay = document.getElementById('attemptDisplay');
    if (attemptDisplay) {
        attemptDisplay.textContent = currentAttempts;
    }

    // Handle correct answer
    if (isCorrect) {
        questionAnsweredCorrectly = true;
        console.log('[checkAnswer] Answer is CORRECT!');

        // Record attempt in mastery system (only record once when correct)
        currentUser.masteryData = window.AssessmentSystem.recordAttempt(
            currentUser.masteryData,
            currentQuestion.id,
            true
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
                true,
                responseTime
            );

        // Save progress (including SR data)
        window.AssessmentSystem.saveProgress(currentUser.userId, currentUser.masteryData);
        window.SpacedRepetitionEngine.saveSpacedRepetitionData(currentUser.userId, currentUser.masteryData);

        // Update session stats (only count as 1 total regardless of attempts)
        if (currentAttempts === 1) {
            currentUser.sessionStats.total++;
        }
        currentUser.sessionStats.correct++;

        // Update stats display
        updateStatsDisplay();

        // Show feedback
        showFeedback(isCorrect, correctAnswer, currentAttempts, MAX_ATTEMPTS);

        // Disable input and submit button
        answerInput.disabled = true;
        submitBtn.disabled = true;

        // Update progress display
        updateProgressDisplay();

        // Show Next button to advance
        nextBtn.style.display = 'inline-block';
    }
    // Handle incorrect answer
    else {
        // Track mistake
        currentUser.sessionStats.mistakes++;
        console.log('[checkAnswer] Incorrect answer. Total mistakes:', currentUser.sessionStats.mistakes);

        // Check if max attempts reached
        if (currentAttempts >= MAX_ATTEMPTS) {
            console.log('[checkAnswer] MAX ATTEMPTS REACHED - showing answer and Next button');

            // Max attempts reached - record as incorrect and move on
            currentUser.masteryData = window.AssessmentSystem.recordAttempt(
                currentUser.masteryData,
                currentQuestion.id,
                false
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
                    false,
                    responseTime
                );

            // Save progress
            window.AssessmentSystem.saveProgress(currentUser.userId, currentUser.masteryData);
            window.SpacedRepetitionEngine.saveSpacedRepetitionData(currentUser.userId, currentUser.masteryData);

            // Update session stats (count as total only on first attempt)
            if (currentAttempts === MAX_ATTEMPTS) {
                currentUser.sessionStats.total++;
            }

            // Update stats display
            updateStatsDisplay();

            // Show final feedback with correct answer
            showFeedback(isCorrect, correctAnswer, currentAttempts, MAX_ATTEMPTS, true);

            // Disable input and submit button
            answerInput.disabled = true;
            submitBtn.disabled = true;

            // Update progress display
            updateProgressDisplay();

            // Show Next button to advance after max attempts
            nextBtn.style.display = 'inline-block';
        } else {
            // Still have attempts left - allow retry
            const remainingAttempts = MAX_ATTEMPTS - currentAttempts;
            console.log('[checkAnswer] Incorrect, but', remainingAttempts, 'attempts remaining');

            showFeedback(isCorrect, correctAnswer, currentAttempts, MAX_ATTEMPTS, false);

            // Clear input to encourage fresh attempt
            answerInput.value = '';
            answerInput.focus();

            // Don't disable input - allow retry
            // Don't show next button yet
        }
    }
}

/**
 * Show feedback to user with retry attempt tracking
 * Uses modal to prevent scrolling issues
 */
function showFeedback(isCorrect, answerText, attempts = 1, maxAttempts = 3, isFinalAttempt = false) {
    // Use modal for final feedback (correct answer or max attempts)
    if (isCorrect || isFinalAttempt) {
        showFeedbackModal(isCorrect, answerText, attempts, maxAttempts, isFinalAttempt);
        return;
    }

    // For retry attempts, use regular feedback (no modal needed)
    feedback.classList.remove('hidden');
    feedback.classList.add('incorrect');
    feedback.classList.remove('correct');
    feedbackIcon.textContent = '✗';

    const remainingAttempts = maxAttempts - attempts;
    const triesText = remainingAttempts === 1 ? window.I18n.t('messages.tryText') : window.I18n.t('messages.triesText');
    feedbackMessage.textContent = window.I18n.t('messages.attemptCounter', {current: attempts, max: maxAttempts, remaining: remainingAttempts, triesText: triesText});
    correctAnswer.textContent = window.I18n.t('messages.tryAgain');
    correctAnswer.style.color = '#f59e0b'; // Orange color for retry
}

/**
 * Show feedback in modal (prevents scrolling issues)
 */
function showFeedbackModal(isCorrect, answerText, attempts = 1, maxAttempts = 3, isFinalAttempt = false) {
    const modal = document.getElementById('feedbackModal');
    const icon = document.getElementById('feedbackModalIcon');
    const message = document.getElementById('feedbackModalMessage');
    const answer = document.getElementById('feedbackModalAnswer');
    const closeBtn = document.getElementById('feedbackModalClose');

    if (!modal) return;

    if (isCorrect) {
        icon.textContent = '✅';
        icon.style.color = '#10b981';

        // Show attempt info if it took multiple tries
        if (attempts > 1) {
            message.textContent = window.I18n.t('messages.correctOnAttempt', {attempt: attempts, max: maxAttempts});
        } else {
            message.textContent = window.I18n.t('messages.correctWellDone');
        }

        // Show explanation for grammar exercises
        if (currentQuestion.explanation) {
            answer.textContent = currentQuestion.explanation;
            answer.style.color = '#10b981';
            answer.style.display = 'block';
        }
        // Show info for reading comprehension
        else if (currentQuestion.passage && currentQuestion.questions) {
            const remaining = currentQuestion.questions.length - currentQuestion.currentQuestionIndex - 1;
            if (remaining > 0) {
                answer.textContent = window.I18n.t('messages.remainingQuestions', {count: remaining});
                answer.style.color = '#10b981';
                answer.style.display = 'block';
            } else {
                answer.textContent = window.I18n.t('messages.completedPassage');
                answer.style.color = '#10b981';
                answer.style.display = 'block';
            }
        }
        else {
            answer.style.display = 'none';
        }
    } else if (isFinalAttempt) {
        icon.textContent = '❌';
        icon.style.color = '#ef4444';
        message.textContent = window.I18n.t('messages.maxAttemptsReached', {current: attempts, max: maxAttempts});

        // Show correct answer and explanation
        let feedbackText = window.I18n.t('messages.correctAnswerIs', {answer: answerText});
        if (currentQuestion.explanation) {
            feedbackText += `\n\n${currentQuestion.explanation}`;
        }
        answer.textContent = feedbackText;
        answer.style.color = '#ef4444';
        answer.style.display = 'block';
    }

    // Show modal
    modal.style.display = 'flex';
    console.log('[showFeedbackModal] Modal displayed -', isCorrect ? 'CORRECT' : 'MAX ATTEMPTS');

    // Close button handler
    closeBtn.onclick = function() {
        console.log('[showFeedbackModal] Close button clicked');
        modal.style.display = 'none';
        // If correct or final attempt, advance automatically
        if (isCorrect || isFinalAttempt) {
            console.log('[showFeedbackModal] Advancing to next question');
            advanceToNext();
        }
    };

    // Allow Enter key to close (but with slight delay to prevent immediate triggering)
    // Remove any existing enter handler first
    if (modal.dataset.enterHandlerActive) {
        console.log('[showFeedbackModal] Removing previous Enter handler');
        document.removeEventListener('keydown', modal.currentEnterHandler);
    }

    const enterHandler = function(e) {
        if (e.key === 'Enter' && modal.style.display === 'flex') {
            console.log('[showFeedbackModal] Enter key pressed - closing modal');
            e.preventDefault(); // Prevent any other actions
            modal.style.display = 'none';
            document.removeEventListener('keydown', enterHandler);
            modal.dataset.enterHandlerActive = '';
            if (isCorrect || isFinalAttempt) {
                console.log('[showFeedbackModal] Advancing to next question');
                advanceToNext();
            }
        }
    };

    // Add handler after a short delay to prevent immediate triggering from submission Enter
    setTimeout(() => {
        modal.currentEnterHandler = enterHandler;
        modal.dataset.enterHandlerActive = 'true';
        document.addEventListener('keydown', enterHandler);
        console.log('[showFeedbackModal] Enter handler activated');
    }, 100);
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
                        currentUser.masteryData = window.AssessmentSystem.recordAttempt(
                            currentUser.masteryData,
                            currentQuestion.id,
                            allCorrect
                        );
                        window.AssessmentSystem.saveProgress(currentUser.userId, currentUser.masteryData);
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

    // Also update the top progress bar and exercise page stats
    updateTopProgressBar();
    updateExercisePageStats();
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
    console.log('[switchExerciseType] Switching to type:', type);

    // Navigate to exercise page
    showExercisePage(type);

    // Store original type before transformation
    const originalType = type;

    // Use conjugation tables instead of individual conjugations
    if (type === 'conjugation') {
        currentExerciseType = 'conjugation-table';
    } else {
        currentExerciseType = type;
    }

    // Update button states
    const exerciseTypeBtns = document.querySelectorAll('.exercise-type-btn');
    exerciseTypeBtns.forEach(btn => {
        if (btn.dataset.type === originalType) {
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
    const verbPracticeSelector = document.getElementById('verbPracticeSelector');

    // Hide all special selectors by default
    if (categoryFilter) categoryFilter.style.display = 'none';
    if (grammarTopicSelector) grammarTopicSelector.style.display = 'none';
    if (verbPracticeSelector) verbPracticeSelector.style.display = 'none';

    // Show appropriate selector based on type
    if (originalType === 'vocabulary' && categoryFilter) {
        categoryFilter.style.display = 'block';
        initializeCategoryFilter();
        if (questionCard) questionCard.style.display = 'block';
        if (progressSection) progressSection.style.display = 'block';

        // Load vocabulary question immediately
        console.log('[switchExerciseType] Loading vocabulary question');
        loadNextQuestion();

    } else if (originalType === 'grammar' && grammarTopicSelector) {
        // Show grammar topic selector
        grammarTopicSelector.style.display = 'block';
        initializeGrammarTopicSelector();

        // Show topics grid view by default
        const topicsGridView = document.getElementById('topicsGridView');
        const lessonView = document.getElementById('lessonView');
        const practiceView = document.getElementById('practiceView');
        const backToTopicsBtn = document.getElementById('backToTopicsBtn');

        if (topicsGridView) topicsGridView.style.display = 'block';
        if (lessonView) lessonView.style.display = 'none';
        if (practiceView) practiceView.style.display = 'none';
        if (backToTopicsBtn) backToTopicsBtn.style.display = 'none';

        if (questionCard) questionCard.style.display = 'block';
        if (progressSection) progressSection.style.display = 'block';

    } else if (originalType === 'conjugation' && verbPracticeSelector) {
        // Show verb practice selector for conjugation
        verbPracticeSelector.style.display = 'block';
        initializeVerbPracticeSelector();

        // Show verb list view by default
        const verbListView = document.getElementById('verbListView');
        const verbDetailView = document.getElementById('verbDetailView');
        const verbPracticeView = document.getElementById('verbPracticeView');
        const backToVerbsBtn = document.getElementById('backToVerbsBtn');

        if (verbListView) verbListView.style.display = 'block';
        if (verbDetailView) verbDetailView.style.display = 'none';
        if (verbPracticeView) verbPracticeView.style.display = 'none';
        if (backToVerbsBtn) backToVerbsBtn.style.display = 'none';

        if (questionCard) questionCard.style.display = 'block';
        if (progressSection) progressSection.style.display = 'block';

    } else {
        // For reading, dialogue, and all types - load question immediately
        if (questionCard) questionCard.style.display = 'block';
        if (progressSection) progressSection.style.display = 'block';

        console.log('[switchExerciseType] Loading question for type:', originalType);
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

    // Practice screen labels (with null checks to prevent crashes)
    const vocabLabel = document.getElementById('vocabLabel');
    const grammarLabel = document.getElementById('grammarLabel');
    const conjugationLabel = document.getElementById('conjugationLabel');
    const readingLabel = document.getElementById('readingLabel');
    const dialogueLabel = document.getElementById('dialogueLabel');
    const allTypesLabel = document.getElementById('allTypesLabel');
    const saveProgressLabel = document.getElementById('saveProgressLabel');
    const viewReportLabel = document.getElementById('viewReportLabel');
    const changeLevelLabel = document.getElementById('changeLevelLabel');

    if (vocabLabel) vocabLabel.textContent = t('practice.vocabulary');
    if (grammarLabel) grammarLabel.textContent = t('practice.grammar');
    if (conjugationLabel) conjugationLabel.textContent = t('practice.conjugation');
    if (readingLabel) readingLabel.textContent = t('practice.reading');
    if (dialogueLabel) dialogueLabel.textContent = t('practice.dialogue');
    if (allTypesLabel) allTypesLabel.textContent = t('practice.allTypes');
    if (saveProgressLabel) saveProgressLabel.textContent = t('practice.saveProgress');
    if (viewReportLabel) viewReportLabel.textContent = t('practice.viewReport');
    if (changeLevelLabel) changeLevelLabel.textContent = t('practice.changeLevel');

    // Progress labels (with null check)
    const levelProgressTitle = document.getElementById('levelProgressTitle');
    if (levelProgressTitle) levelProgressTitle.textContent = t('progress.levelGoal');

    // Report modal (with null checks)
    const reportTitle = document.getElementById('reportTitle');
    const exportJSONLabel = document.getElementById('exportJSONLabel');
    const exportCSVLabel = document.getElementById('exportCSVLabel');
    const printLabel = document.getElementById('printLabel');

    if (reportTitle) reportTitle.textContent = t('report.title');
    if (exportJSONLabel) exportJSONLabel.textContent = t('report.downloadPDF');
    if (exportCSVLabel) exportCSVLabel.textContent = t('report.downloadCSV');
    if (printLabel) printLabel.textContent = t('report.printReport');

    // Accent Helper
    const accentHelperLabel = document.getElementById('accentHelperLabel');
    if (accentHelperLabel) accentHelperLabel.textContent = t('messages.accentHelperLabel');

    // User Management
    const userDropdownHeader = document.getElementById('userDropdownHeader');
    if (userDropdownHeader) userDropdownHeader.textContent = t('messages.switchUser');

    const addNewUserLabel = document.getElementById('addNewUserLabel');
    if (addNewUserLabel) addNewUserLabel.textContent = t('messages.addNewUser');

    const resetUserDataLabel = document.getElementById('resetUserDataLabel');
    if (resetUserDataLabel) resetUserDataLabel.textContent = t('messages.resetUserData');
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
    console.log('[initializeCategoryFilter] Starting category filter initialization');
    const categoryContainer = document.querySelector('.category-checkboxes');
    if (!categoryContainer) {
        console.error('[initializeCategoryFilter] Category container not found!');
        return;
    }

    // Get all unique categories from vocabulary content using the API
    const allVocab = window.FrenchContent.getContentByType('vocabulary') || [];
    console.log('[initializeCategoryFilter] Found', allVocab.length, 'vocabulary items');

    const categories = [...new Set(allVocab.map(item => item.category).filter(Boolean))].sort();
    console.log('[initializeCategoryFilter] Found', categories.length, 'unique categories:', categories);

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
    console.log('[initializeGrammarTopicSelector] Starting grammar topic initialization');
    const grammarTopics = window.FrenchContent.grammarTopics || [];
    console.log('[initializeGrammarTopicSelector] Found', grammarTopics.length, 'topics');
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
    const allGrammar = window.FrenchContent.getContentByType('grammar') || [];
    console.log('[startTopicPractice] Found', allGrammar.length, 'grammar exercises');
    currentTopicExercises = allGrammar.filter(ex =>
        currentTopic.exerciseIds.includes(ex.id)
    );
    console.log('[startTopicPractice] Filtered to', currentTopicExercises.length, 'exercises for this topic');

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

    // Hide Next button from previous question
    const nextBtn = document.getElementById('nextBtn');
    if (nextBtn) {
        nextBtn.style.display = 'none';
        console.log('[loadNextTopicQuestion] Next button hidden for new grammar question');
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

/**
 * ============================================================
 * VERB PRACTICE SELECTOR FUNCTIONS
 * ============================================================
 */

// Global variables for verb practice
let currentSelectedVerb = null;
let currentVerbConjugations = [];
let currentVerbPracticeIndex = 0;

/**
 * Initialize the verb practice selector
 */
function initializeVerbPracticeSelector() {
    console.log('[initializeVerbPracticeSelector] Starting verb practice initialization');
    const verbsContainer = document.getElementById('verbsContainer');
    if (!verbsContainer) {
        console.error('[initializeVerbPracticeSelector] verbsContainer not found in HTML!');
        return;
    }

    // Get all conjugation tables and group by verb
    const allConjugations = window.FrenchContent.getContentByType('conjugation-table') || [];
    console.log('[initializeVerbPracticeSelector] Found', allConjugations.length, 'conjugation tables');
    const verbGroups = {};

    // Group conjugations by verb
    allConjugations.forEach(conj => {
        const verbName = conj.verb;
        if (!verbGroups[verbName]) {
            verbGroups[verbName] = {
                verb: verbName,
                english: conj.english,
                cefrLevel: conj.cefrLevel,
                conjugations: []
            };
        }
        verbGroups[verbName].conjugations.push(conj);
    });

    // Convert to array and group by CEFR level
    const verbsArray = Object.values(verbGroups);
    const levelGroups = {
        'A1': [], 'A2': [], 'B1': [], 'B2': [], 'C1': [], 'C2': []
    };

    verbsArray.forEach(verb => {
        // Use the lowest CEFR level from all conjugations
        const level = verb.cefrLevel || 'A1';
        if (levelGroups[level]) {
            levelGroups[level].push(verb);
        }
    });

    // Clear container
    verbsContainer.innerHTML = '';

    // Create sections for each CEFR level
    Object.keys(levelGroups).forEach(level => {
        const verbs = levelGroups[level];
        if (verbs.length === 0) return;

        // Create level group
        const levelGroup = document.createElement('div');
        levelGroup.className = 'verb-level-group';

        const levelTitle = document.createElement('h4');
        levelTitle.className = 'verb-level-group-title';
        levelTitle.textContent = `${level} Level (${verbs.length} verbs)`;
        levelGroup.appendChild(levelTitle);

        const verbGrid = document.createElement('div');
        verbGrid.className = 'verbs-grid';

        verbs.forEach(verb => {
            const card = createVerbCard(verb);
            verbGrid.appendChild(card);
        });

        levelGroup.appendChild(verbGrid);
        verbsContainer.appendChild(levelGroup);
    });

    // Setup event listeners
    setupVerbPracticeEventListeners();
}

/**
 * Create a verb card element
 */
function createVerbCard(verb) {
    const card = document.createElement('div');
    card.className = 'verb-card';

    const header = document.createElement('div');
    header.className = 'verb-card-header';

    const title = document.createElement('h4');
    title.className = 'verb-card-title';
    title.textContent = verb.verb;
    header.appendChild(title);

    const levelBadge = document.createElement('span');
    levelBadge.className = 'badge badge-blue';
    levelBadge.textContent = verb.cefrLevel;
    header.appendChild(levelBadge);

    card.appendChild(header);

    const english = document.createElement('p');
    english.className = 'verb-card-english';
    english.textContent = verb.english;
    card.appendChild(english);

    const info = document.createElement('div');
    info.className = 'verb-card-info';

    const tenseCount = document.createElement('span');
    tenseCount.className = 'verb-tense-count';
    tenseCount.textContent = `${verb.conjugations.length} tenses`;
    info.appendChild(tenseCount);

    // Calculate overall mastery for this verb
    const verbMastery = calculateVerbMastery(verb);
    if (verbMastery.attempted > 0) {
        const masterySpan = document.createElement('span');
        masterySpan.className = 'verb-mastery';
        masterySpan.textContent = `${verbMastery.percentage}% mastered`;
        masterySpan.style.color = verbMastery.percentage >= 75 ? '#10b981' : verbMastery.percentage >= 50 ? '#f59e0b' : '#ef4444';
        masterySpan.style.fontWeight = '600';
        info.appendChild(masterySpan);
    }

    card.appendChild(info);

    // Click handler to show verb details
    card.addEventListener('click', () => showVerbDetails(verb));

    return card;
}

/**
 * Calculate overall mastery for a verb across all tenses
 */
function calculateVerbMastery(verb) {
    if (!currentUser || !currentUser.masteryData) {
        return { percentage: 0, attempted: 0, mastered: 0 };
    }

    let totalAttempted = 0;
    let totalMastered = 0;
    let totalPercentage = 0;

    verb.conjugations.forEach(conj => {
        const mastery = currentUser.masteryData[conj.id];
        if (mastery && mastery.timesAttempted > 0) {
            totalAttempted++;
            totalPercentage += mastery.masteryPercentage;
            if (mastery.stage === 'mastered' || mastery.stage === 'solid') {
                totalMastered++;
            }
        }
    });

    const percentage = totalAttempted > 0 ? Math.round(totalPercentage / totalAttempted) : 0;

    return {
        percentage,
        attempted: totalAttempted,
        mastered: totalMastered,
        total: verb.conjugations.length
    };
}

/**
 * Show verb details with all available tenses and mastery by tense
 */
function showVerbDetails(verb) {
    currentSelectedVerb = verb;
    currentVerbConjugations = verb.conjugations;

    // Hide verb list, show verb detail
    document.getElementById('verbListView').style.display = 'none';
    document.getElementById('verbDetailView').style.display = 'block';
    document.getElementById('verbPracticeView').style.display = 'none';
    document.getElementById('backToVerbsBtn').style.display = 'block';

    // Set verb info
    document.getElementById('verbName').textContent = verb.verb;
    document.getElementById('verbLevel').textContent = verb.cefrLevel;
    document.getElementById('verbEnglish').textContent = verb.english;

    // Display available tenses with mastery information
    const tensesList = document.getElementById('verbTensesList');
    tensesList.innerHTML = '';

    verb.conjugations.forEach(conj => {
        const tenseItem = document.createElement('div');
        tenseItem.className = 'verb-tense-item';
        tenseItem.style.cssText = 'display: flex; justify-content: space-between; align-items: center; padding: 12px; margin: 8px 0; background: #f9fafb; border-radius: 8px; cursor: pointer; transition: background 0.2s;';

        // Add hover effect
        tenseItem.onmouseover = () => tenseItem.style.background = '#e5e7eb';
        tenseItem.onmouseout = () => tenseItem.style.background = '#f9fafb';

        const leftSide = document.createElement('div');
        leftSide.style.display = 'flex';
        leftSide.style.alignItems = 'center';
        leftSide.style.gap = '10px';

        const icon = document.createElement('span');
        icon.className = 'verb-tense-icon';
        icon.textContent = '🔄';
        icon.style.fontSize = '1.2em';
        leftSide.appendChild(icon);

        const name = document.createElement('span');
        name.className = 'verb-tense-name';
        name.textContent = conj.tenseFr || conj.tense;
        name.style.fontWeight = '600';
        name.style.color = '#374151';
        leftSide.appendChild(name);

        tenseItem.appendChild(leftSide);

        // Add mastery information
        const mastery = currentUser.masteryData?.[conj.id];
        if (mastery && mastery.timesAttempted > 0) {
            const masteryInfo = document.createElement('div');
            masteryInfo.style.display = 'flex';
            masteryInfo.style.alignItems = 'center';
            masteryInfo.style.gap = '12px';

            // Progress bar
            const progressContainer = document.createElement('div');
            progressContainer.style.cssText = 'width: 100px; height: 8px; background: #e5e7eb; border-radius: 4px; overflow: hidden;';

            const progressBar = document.createElement('div');
            const percentage = Math.round(mastery.masteryPercentage);
            progressBar.style.cssText = `width: ${percentage}%; height: 100%; background: ${percentage >= 75 ? '#10b981' : percentage >= 50 ? '#f59e0b' : '#ef4444'}; transition: width 0.3s;`;
            progressContainer.appendChild(progressBar);
            masteryInfo.appendChild(progressContainer);

            // Percentage label
            const percentageLabel = document.createElement('span');
            percentageLabel.textContent = `${percentage}%`;
            percentageLabel.style.cssText = `font-weight: 600; font-size: 0.9em; color: ${percentage >= 75 ? '#10b981' : percentage >= 50 ? '#f59e0b' : '#ef4444'};`;
            masteryInfo.appendChild(percentageLabel);

            // Stage badge
            const stageBadge = document.createElement('span');
            stageBadge.textContent = mastery.stage;
            stageBadge.style.cssText = 'padding: 4px 8px; border-radius: 6px; font-size: 0.75em; font-weight: 600; text-transform: uppercase;';

            const stageColors = {
                learning: { bg: '#fef2f2', text: '#991b1b' },
                developing: { bg: '#fef3c7', text: '#92400e' },
                mastered: { bg: '#d1fae5', text: '#065f46' },
                solid: { bg: '#dbeafe', text: '#1e3a8a' }
            };
            const colors = stageColors[mastery.stage] || stageColors.learning;
            stageBadge.style.background = colors.bg;
            stageBadge.style.color = colors.text;
            masteryInfo.appendChild(stageBadge);

            tenseItem.appendChild(masteryInfo);
        } else {
            const notPracticed = document.createElement('span');
            notPracticed.textContent = 'Not practiced yet';
            notPracticed.style.color = '#9ca3af';
            notPracticed.style.fontSize = '0.9em';
            tenseItem.appendChild(notPracticed);
        }

        tensesList.appendChild(tenseItem);
    });
}

/**
 * Show verb list
 */
function showVerbList() {
    document.getElementById('verbListView').style.display = 'block';
    document.getElementById('verbDetailView').style.display = 'none';
    document.getElementById('verbPracticeView').style.display = 'none';
    document.getElementById('backToVerbsBtn').style.display = 'none';
    document.querySelector('.question-card').style.display = 'block';
}

/**
 * Start verb practice mode
 */
function startVerbPractice() {
    if (!currentSelectedVerb || currentVerbConjugations.length === 0) return;

    currentVerbPracticeIndex = 0;
    currentExerciseType = 'conjugation-table';

    // Hide detail view, show practice view
    document.getElementById('verbDetailView').style.display = 'none';
    document.getElementById('verbPracticeView').style.display = 'block';
    document.querySelector('.question-card').style.display = 'block';

    // Update practice header
    document.getElementById('verbPracticeTitle').textContent =
        `Practicing: ${currentSelectedVerb.verb} (${currentSelectedVerb.english})`;
    document.getElementById('verbPracticeProgress').textContent =
        `Tense 1 of ${currentVerbConjugations.length}`;

    // Load first question
    loadNextVerbQuestion();
}

/**
 * Load next question for verb practice
 */
function loadNextVerbQuestion() {
    if (currentVerbPracticeIndex >= currentVerbConjugations.length) {
        // Completed all tenses for this verb
        alert(`Congratulations! You've practiced all ${currentVerbConjugations.length} tenses of "${currentSelectedVerb.verb}".`);
        showVerbDetails(currentSelectedVerb);
        return;
    }

    const conjugation = currentVerbConjugations[currentVerbPracticeIndex];

    // Pick a random form from this conjugation
    const forms = conjugation.forms || [];
    const randomForm = forms[Math.floor(Math.random() * forms.length)];

    // Create a question
    currentQuestion = {
        id: `${conjugation.id}-${randomForm.subject}`,
        type: 'conjugation-table',
        verb: conjugation.verb,
        tense: conjugation.tenseFr || conjugation.tense,
        subject: randomForm.subject,
        answer: randomForm.answer,
        alternatives: [],
        explanation: `${conjugation.verb} conjugated with ${randomForm.subject} in ${conjugation.tenseFr || conjugation.tense}`
    };

    displayVerbQuestion(currentQuestion);
    updateVerbPracticeProgress();
}

/**
 * Display verb practice question
 */
function displayVerbQuestion(question) {
    document.getElementById('questionType').textContent = 'Conjugation';
    document.querySelector('.question-label').textContent =
        `Conjugate "${question.verb}" (${question.tense}):`;
    document.getElementById('questionText').textContent = question.subject;

    const answerInput = document.getElementById('answerInput');
    answerInput.value = '';
    answerInput.disabled = false;
    answerInput.focus();

    document.getElementById('submitBtn').style.display = 'inline-block';
    document.getElementById('nextBtn').style.display = 'none';
    document.getElementById('feedback').classList.add('hidden');
}

/**
 * Update verb practice progress
 */
function updateVerbPracticeProgress() {
    const currentTense = currentVerbPracticeIndex + 1;
    const totalTenses = currentVerbConjugations.length;
    document.getElementById('verbPracticeProgress').textContent =
        `Tense ${currentTense} of ${totalTenses}`;
}

/**
 * Handle verb practice answer submission
 */
function handleVerbPracticeSubmit() {
    const answerInput = document.getElementById('answerInput');
    const userAnswer = answerInput.value.trim();

    // Validate answer
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
 * Move to next verb practice question
 */
function nextVerbQuestion() {
    currentVerbPracticeIndex++;
    loadNextVerbQuestion();
}

/**
 * Setup event listeners for verb practice
 */
function setupVerbPracticeEventListeners() {
    const backToVerbsBtn = document.getElementById('backToVerbsBtn');
    const startVerbPracticeBtn = document.getElementById('startVerbPracticeBtn');

    if (backToVerbsBtn) {
        backToVerbsBtn.removeEventListener('click', showVerbList);
        backToVerbsBtn.addEventListener('click', showVerbList);
    }

    if (startVerbPracticeBtn) {
        startVerbPracticeBtn.removeEventListener('click', startVerbPractice);
        startVerbPracticeBtn.addEventListener('click', startVerbPractice);
    }
}

/**
 * Initialize User Management functionality
 * Handles user dropdown, switching, and reset functionality
 */
function initializeUserManagement() {
    console.log('[initializeUserManagement] Setting up user dropdown functionality');

    const userDropdownBtn = document.getElementById('userDropdownBtn');
    const userDropdownMenu = document.getElementById('userDropdownMenu');
    const addNewUserBtn = document.getElementById('addNewUserBtn');
    const resetUserDataBtn = document.getElementById('resetUserDataBtn');

    if (!userDropdownBtn || !userDropdownMenu) {
        console.error('[initializeUserManagement] User dropdown elements not found!');
        return;
    }

    console.log('[initializeUserManagement] Attaching dropdown button click handler');

    // Toggle dropdown on button click
    userDropdownBtn.addEventListener('click', (e) => {
        console.log('[userDropdownBtn] Click detected');
        e.stopPropagation();
        const isOpen = userDropdownMenu.style.display === 'block';
        userDropdownMenu.style.display = isOpen ? 'none' : 'block';
        console.log('[userDropdownBtn] Dropdown now', isOpen ? 'closed' : 'open');

        if (!isOpen) {
            populateUserList();
        }
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!userDropdownMenu.contains(e.target) && !userDropdownBtn.contains(e.target)) {
            userDropdownMenu.style.display = 'none';
        }
    });

    // Add new user button
    if (addNewUserBtn) {
        addNewUserBtn.addEventListener('click', () => {
            userDropdownMenu.style.display = 'none';

            // Switch back to user setup screen
            practiceScreen.classList.remove('active');
            userSetupScreen.classList.add('active');
            userNameInput.value = '';
            userNameInput.focus();
        });
    }

    // Reset user data button
    if (resetUserDataBtn) {
        resetUserDataBtn.addEventListener('click', () => {
            const confirmed = confirm(
                `Are you sure you want to reset all progress for ${currentUser.name}?\n\n` +
                `This will:\n` +
                `- Clear all exercise history\n` +
                `- Reset all mastery levels to 0%\n` +
                `- Delete all statistics\n\n` +
                `This action cannot be undone!`
            );

            if (confirmed) {
                resetCurrentUserData();
                userDropdownMenu.style.display = 'none';
                alert(`All progress for ${currentUser.name} has been reset.`);
            }
        });
    }
}

/**
 * Populate user list in dropdown
 */
function populateUserList() {
    const userList = document.getElementById('userList');
    if (!userList) return;

    // Get all users from localStorage
    const allUsers = getAllUsers();

    if (allUsers.length === 0) {
        userList.innerHTML = '<div style="padding: 16px; text-align: center; color: #9ca3af;">No users found</div>';
        return;
    }

    // Build user list HTML
    let html = '';
    allUsers.forEach(user => {
        const isActive = user.userId === currentUser.userId;
        const activeClass = isActive ? 'background: #eff6ff; border-left: 3px solid #3b82f6;' : '';

        html += `
            <div class="user-list-item" data-user-id="${user.userId}" style="padding: 12px 16px; cursor: pointer; border-bottom: 1px solid #f3f4f6; ${activeClass}" onmouseover="this.style.background='#f9fafb'" onmouseout="this.style.background='${isActive ? '#eff6ff' : 'white'}'">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div>
                        <div style="font-weight: 600; color: #111827;">
                            ${user.name} ${isActive ? '✓' : ''}
                        </div>
                        <div style="font-size: 0.85em; color: #6b7280;">
                            Level: ${user.level} | Exercises: ${user.totalExercises}
                        </div>
                        ${user.lastSession ? `<div style="font-size: 0.8em; color: #9ca3af;">Last: ${user.lastSession}</div>` : ''}
                    </div>
                    ${!isActive ? `<button class="switch-user-btn" data-user-id="${user.userId}" style="padding: 4px 12px; background: #3b82f6; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 0.85em;">Switch</button>` : ''}
                </div>
            </div>
        `;
    });

    userList.innerHTML = html;

    // Add click event listeners to switch buttons
    const switchBtns = userList.querySelectorAll('.switch-user-btn');
    switchBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const userId = btn.getAttribute('data-user-id');
            switchToUser(userId);
        });
    });
}

/**
 * Get all users from localStorage
 */
function getAllUsers() {
    const users = [];
    const keys = Object.keys(localStorage);

    keys.forEach(key => {
        if (key.startsWith('progress_')) {
            const userId = key.replace('progress_', '');
            const userName = localStorage.getItem(`userName_${userId}`);
            const userLevel = localStorage.getItem(`userLevel_${userId}`) || 'A1';

            if (userName) {
                const masteryData = window.AssessmentSystem.loadProgress(userId);
                const totalExercises = Object.keys(masteryData).length;
                const lastSession = localStorage.getItem(`lastSession_${userId}`);

                users.push({
                    userId,
                    name: userName,
                    level: userLevel,
                    totalExercises,
                    lastSession: lastSession ? new Date(lastSession).toLocaleDateString() : null
                });
            }
        }
    });

    // Sort by last session (most recent first)
    users.sort((a, b) => {
        if (!a.lastSession) return 1;
        if (!b.lastSession) return -1;
        return new Date(b.lastSession) - new Date(a.lastSession);
    });

    return users;
}

/**
 * Switch to a different user
 */
function switchToUser(userId) {
    console.log('[switchToUser] Switching to user:', userId);

    const userName = localStorage.getItem(`userName_${userId}`);
    const userLevel = localStorage.getItem(`userLevel_${userId}`) || 'A1';

    if (!userName) {
        console.error('[switchToUser] User not found!');
        alert('User not found!');
        return;
    }

    // Save current session before switching
    if (currentUser.userId) {
        console.log('[switchToUser] Saving session for current user:', currentUser.userId);
        window.AssessmentSystem.saveSession(currentUser.userId, {
            exerciseType: currentExerciseType,
            cefrLevel: currentUser.cefrLevel,
            sessionStats: currentUser.sessionStats
        });
    }

    // Load new user data
    currentUser.userId = userId;
    currentUser.name = userName;
    currentUser.cefrLevel = userLevel;
    currentUser.masteryData = window.AssessmentSystem.loadProgress(userId);
    currentUser.sessionStats = {
        correct: 0,
        total: 0,
        mistakes: 0
    };

    // Update localStorage
    localStorage.setItem('currentUserId', userId);
    localStorage.setItem('currentUserName', userName);
    localStorage.setItem(`lastSession_${userId}`, new Date().toISOString());

    console.log('[switchToUser] Updating all UI elements for', userName);

    // Update user display
    document.getElementById('displayName').textContent = userName;
    document.getElementById('displayLevel').textContent = `(${userLevel})`;

    const currentLevelValue = document.getElementById('currentLevelValue');
    if (currentLevelValue) {
        currentLevelValue.textContent = userLevel;
    }

    // Reset question state for new user
    currentAttempts = 0;
    questionAnsweredCorrectly = false;

    // Reset attempt display
    const attemptDisplay = document.getElementById('attemptDisplay');
    if (attemptDisplay) {
        attemptDisplay.textContent = '0';
    }

    // Update all stats and progress displays
    updateStatsDisplay();
    updateProgressDisplay();

    // Refresh skills grid if it's visible
    const skillsGrid = document.getElementById('skillsGrid');
    if (skillsGrid && skillsGrid.style.display !== 'none') {
        populateSkillsGrid();
    }

    // Load question for new user's level
    loadNextQuestion();

    // Update the other users list
    populateOtherUsersList();

    // Close dropdown
    const dropdownMenu = document.getElementById('userDropdownMenu');
    if (dropdownMenu) {
        dropdownMenu.style.display = 'none';
    }

    // Show success message
    console.log('[switchToUser] Successfully switched to', userName, 'at level', userLevel);
}

/**
 * Reset current user's data
 */
function resetCurrentUserData() {
    console.log('[resetCurrentUserData] Resetting all data for user:', currentUser.userId);

    if (!currentUser.userId) return;

    // Clear all mastery data
    currentUser.masteryData = {};
    window.AssessmentSystem.saveProgress(currentUser.userId, {});

    // Clear spaced repetition data
    localStorage.removeItem(`spacedRepetition_${currentUser.userId}`);

    // Clear session data
    window.AssessmentSystem.clearSession(currentUser.userId);

    // Reset session stats
    currentUser.sessionStats = {
        correct: 0,
        total: 0,
        mistakes: 0
    };

    // Reset question state
    currentAttempts = 0;
    questionAnsweredCorrectly = false;

    // Reset attempt display
    const attemptDisplay = document.getElementById('attemptDisplay');
    if (attemptDisplay) {
        attemptDisplay.textContent = '0';
    }

    console.log('[resetCurrentUserData] Refreshing all UI displays');

    // Update all stats and progress displays
    updateStatsDisplay();
    updateProgressDisplay();

    // Force refresh skills grid if visible
    const skillsGrid = document.getElementById('skillsGrid');
    if (skillsGrid && skillsGrid.style.display !== 'none') {
        console.log('[resetCurrentUserData] Refreshing skills grid');
        populateSkillsGrid();
    }

    // Refresh summary view by updating progress display again
    // (this ensures the summary cards show 0)
    setTimeout(() => {
        updateProgressDisplay();
    }, 100);

    // Load next question
    loadNextQuestion();

    console.log('[resetCurrentUserData] Reset complete - all views refreshed');
}

/**
 * Initialize Skills Grid functionality
 * Handles toggling between summary and detailed views, and filtering skills
 */
function initializeSkillsGrid() {
    const showSummaryBtn = document.getElementById('showSummaryBtn');
    const showDetailedBtn = document.getElementById('showDetailedBtn');
    const progressSummary = document.getElementById('progressSummary');
    const skillsGrid = document.getElementById('skillsGrid');

    if (!showSummaryBtn || !showDetailedBtn) return;

    // Toggle to summary view
    showSummaryBtn.addEventListener('click', () => {
        progressSummary.style.display = 'grid';
        skillsGrid.style.display = 'none';
        showSummaryBtn.classList.add('active');
        showDetailedBtn.classList.remove('active');
    });

    // Toggle to detailed view
    showDetailedBtn.addEventListener('click', () => {
        progressSummary.style.display = 'none';
        skillsGrid.style.display = 'block';
        showSummaryBtn.classList.remove('active');
        showDetailedBtn.classList.add('active');

        // Populate skills grid
        populateSkillsGrid();
    });

    // Filter buttons
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active state
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Filter skills
            const filter = btn.getAttribute('data-filter');
            filterSkills(filter);
        });
    });
}

/**
 * Populate skills grid with mastery cards
 */
function populateSkillsGrid(filter = 'all') {
    const container = document.getElementById('skillsCardsContainer');
    const noSkillsMessage = document.getElementById('noSkillsMessage');

    if (!container) return;

    // Get all items with mastery data
    const masteryData = currentUser.masteryData || {};
    const allContent = window.FrenchContent.getAllContent();

    // Build skills array with mastery info
    const skills = [];
    Object.keys(masteryData).forEach(itemId => {
        const item = allContent.find(c => c.id === itemId);
        if (item && masteryData[itemId]) {
            const mastery = masteryData[itemId];
            skills.push({
                id: itemId,
                item: item,
                mastery: mastery
            });
        }
    });

    // Sort by mastery percentage (lowest first to prioritize practice)
    skills.sort((a, b) => a.mastery.masteryPercentage - b.mastery.masteryPercentage);

    // Filter if needed
    let filteredSkills = skills;
    if (filter !== 'all') {
        filteredSkills = skills.filter(s => s.mastery.stage === filter);
    }

    // Show/hide no skills message
    if (filteredSkills.length === 0) {
        container.style.display = 'none';
        noSkillsMessage.style.display = 'block';
        return;
    } else {
        container.style.display = 'grid';
        noSkillsMessage.style.display = 'none';
    }

    // Build HTML for skills
    container.innerHTML = filteredSkills.map(skill => createSkillCard(skill)).join('');

    // Add click handlers to skill cards
    const skillCards = container.querySelectorAll('.skill-card');
    skillCards.forEach(card => {
        card.addEventListener('click', () => {
            const skillId = card.getAttribute('data-skill-id');
            showSkillDetails(skillId);
        });
    });
}

/**
 * Create HTML for a skill card
 */
function createSkillCard(skill) {
    const { item, mastery } = skill;
    const percentage = Math.round(mastery.masteryPercentage);
    const stage = mastery.stage;

    // Color coding by mastery level
    const colorMap = {
        learning: { bg: '#fef2f2', border: '#fca5a5', text: '#991b1b', icon: '📚' },
        developing: { bg: '#fef3c7', border: '#fbbf24', text: '#92400e', icon: '📈' },
        mastered: { bg: '#d1fae5', border: '#6ee7b7', text: '#065f46', icon: '✓' },
        solid: { bg: '#dbeafe', border: '#60a5fa', text: '#1e3a8a', icon: '⭐' }
    };

    const colors = colorMap[stage] || colorMap.learning;

    // Get word/skill name and translation
    let skillName = item.french || item.verb || item.title || 'Unknown';
    let translation = item.english || item.question || '';

    // Determine type badge
    let typeBadge = '';
    if (item.verb) typeBadge = '🔄 Conjugation';
    else if (item.passage) typeBadge = '📖 Reading';
    else if (item.turns) typeBadge = '💬 Dialogue';
    else if (item.explanation) typeBadge = '📝 Grammar';
    else typeBadge = '📚 Vocabulary';

    return `
        <div class="skill-card" data-skill-id="${skill.id}" style="
            background: ${colors.bg};
            border: 2px solid ${colors.border};
            border-radius: 12px;
            padding: 16px;
            cursor: pointer;
            transition: all 0.2s;
            position: relative;
        " onmouseover="this.style.transform='translateY(-4px)'; this.style.boxShadow='0 6px 12px rgba(0,0,0,0.15)';"
           onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none';">

            <!-- Header with icon and stage -->
            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 12px;">
                <div style="font-size: 2em;">${colors.icon}</div>
                <div style="
                    background: ${colors.border};
                    color: white;
                    padding: 4px 10px;
                    border-radius: 12px;
                    font-size: 0.75em;
                    font-weight: 600;
                    text-transform: uppercase;
                ">${stage}</div>
            </div>

            <!-- Skill name and translation -->
            <div style="margin-bottom: 12px;">
                <div style="font-size: 1.2em; font-weight: 700; color: ${colors.text}; margin-bottom: 4px;">
                    ${skillName}
                </div>
                <div style="font-size: 0.9em; color: #6b7280;">
                    ${translation}
                </div>
            </div>

            <!-- Type badge -->
            <div style="font-size: 0.8em; color: #6b7280; margin-bottom: 12px;">
                ${typeBadge}
            </div>

            <!-- Progress bar -->
            <div style="margin-bottom: 8px;">
                <div style="background: #e5e7eb; height: 8px; border-radius: 4px; overflow: hidden;">
                    <div style="
                        background: ${colors.border};
                        height: 100%;
                        width: ${percentage}%;
                        transition: width 0.3s;
                    "></div>
                </div>
            </div>

            <!-- Stats -->
            <div style="display: flex; justify-content: space-between; font-size: 0.85em; color: #6b7280;">
                <span><strong>${percentage}%</strong> mastery</span>
                <span>${mastery.timesCorrect}/${mastery.timesAttempted} correct</span>
            </div>
        </div>
    `;
}

/**
 * Filter skills by mastery level
 */
function filterSkills(filter) {
    populateSkillsGrid(filter);
}

/**
 * Show detailed information about a skill
 */
function showSkillDetails(skillId) {
    const mastery = currentUser.masteryData[skillId];
    const allContent = window.FrenchContent.getAllContent();
    const item = allContent.find(c => c.id === skillId);

    if (!item || !mastery) return;

    const percentage = Math.round(mastery.masteryPercentage);
    const stage = mastery.stage;

    let skillName = item.french || item.verb || item.title || 'Unknown';
    let translation = item.english || item.question || '';

    const details = `
        <strong>Skill:</strong> ${skillName}<br>
        <strong>Translation:</strong> ${translation}<br>
        <strong>Mastery:</strong> ${percentage}% (${stage})<br>
        <strong>Attempts:</strong> ${mastery.timesAttempted}<br>
        <strong>Correct:</strong> ${mastery.timesCorrect}<br>
        <strong>First practiced:</strong> ${new Date(mastery.firstAttemptDate).toLocaleDateString()}<br>
        ${mastery.lastAttemptDate ? `<strong>Last practiced:</strong> ${new Date(mastery.lastAttemptDate).toLocaleDateString()}` : ''}
    `;

    alert(details);
}

/**
 * Initialize Accent Helper functionality
 * Adds click handlers to accent buttons to insert characters into answer input
 */
function initializeAccentHelper() {
    const accentButtons = document.querySelectorAll('.accent-btn');
    const answerInput = document.getElementById('answerInput');

    accentButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent form submission
            const char = btn.getAttribute('data-char');

            if (answerInput && char) {
                // Insert character at cursor position
                const start = answerInput.selectionStart;
                const end = answerInput.selectionEnd;
                const text = answerInput.value;

                answerInput.value = text.substring(0, start) + char + text.substring(end);

                // Move cursor after inserted character
                answerInput.selectionStart = answerInput.selectionEnd = start + 1;

                // Focus back on input
                answerInput.focus();
            }
        });

        // Add hover effect
        btn.addEventListener('mouseenter', () => {
            btn.style.background = '#e5e7eb';
        });

        btn.addEventListener('mouseleave', () => {
            btn.style.background = 'white';
        });
    });
}

/**
 * Check if accents are required based on user's CEFR level
 * A1-A2: Accents optional (lenient mode)
 * B1+: Accents required (strict mode)
 */
function areAccentsRequired() {
    const level = currentUser.cefrLevel;
    const strictLevels = ['B1', 'B2', 'C1', 'C2'];
    return strictLevels.includes(level);
}

/**
 * Enhanced answer validation with accent checking
 * Returns: { correct: boolean, message: string }
 */
function validateAnswerWithAccents(userAnswer, correctAnswer) {
    // First check if answer is correct with accents
    const isExactMatch = window.UtilityFunctions.validateAnswer(userAnswer, correctAnswer);

    if (isExactMatch) {
        return { correct: true, message: '' };
    }

    // If accents are required (B1+), answer must match exactly
    if (areAccentsRequired()) {
        // Check if answer would be correct without accents
        const normalizedUser = window.UtilityFunctions.normalizeText(userAnswer);
        const normalizedCorrect = window.UtilityFunctions.normalizeText(correctAnswer);

        if (normalizedUser === normalizedCorrect) {
            return {
                correct: false,
                message: `Close! At level ${currentUser.cefrLevel}, accent marks are required. Correct answer: ${correctAnswer}`
            };
        }

        return { correct: false, message: '' };
    }

    // A1-A2 levels: Check if answer is correct when ignoring accents
    const isCorrectWithoutAccents = window.UtilityFunctions.validateAnswer(userAnswer, correctAnswer);
    return { correct: isCorrectWithoutAccents, message: '' };
}

// ============================================================================
// PAGE NAVIGATION FUNCTIONS
// ============================================================================

/**
 * Show the home page and hide the exercise page
 */
function showHomePage() {
    console.log('[showHomePage] Navigating to home page');

    try {
        const homePage = document.getElementById('homePage');
        const exercisePage = document.getElementById('exercisePage');

        if (!homePage) {
            console.error('[showHomePage] ERROR: homePage element not found!');
            return;
        }
        if (!exercisePage) {
            console.error('[showHomePage] ERROR: exercisePage element not found!');
            return;
        }

        // Hide exercise page
        exercisePage.style.display = 'none';
        console.log('[showHomePage] Exercise page hidden');

        // Show home page
        homePage.style.display = 'block';
        console.log('[showHomePage] Home page shown');

        // Update the other users list when returning home
        populateOtherUsersList();

        // Scroll to top
        window.scrollTo(0, 0);
        console.log('[showHomePage] Scrolled to top');

        console.log('[showHomePage] Navigation complete');
    } catch (error) {
        console.error('[showHomePage] Error during navigation:', error);
    }
}

/**
 * Show the exercise page and hide the home page
 * @param {string} exerciseType - The type of exercise (vocabulary, grammar, etc.)
 */
function showExercisePage(exerciseType) {
    console.log('[showExercisePage] Navigating to exercise page for type:', exerciseType);

    try {
        // Validate exercise type
        const validTypes = ['vocabulary', 'grammar', 'conjugation', 'reading', 'dialogue', 'all'];
        if (!validTypes.includes(exerciseType)) {
            console.error('[showExercisePage] ERROR: Invalid exercise type:', exerciseType);
            return;
        }

        const homePage = document.getElementById('homePage');
        const exercisePage = document.getElementById('exercisePage');

        if (!homePage) {
            console.error('[showExercisePage] ERROR: homePage element not found!');
            return;
        }
        if (!exercisePage) {
            console.error('[showExercisePage] ERROR: exercisePage element not found!');
            return;
        }

        // Hide home page
        homePage.style.display = 'none';
        console.log('[showExercisePage] Home page hidden');

        // Show exercise page
        exercisePage.style.display = 'block';
        console.log('[showExercisePage] Exercise page shown');

        // Update the exercise page header
        updateExercisePageHeader(exerciseType);

        // Scroll to top
        window.scrollTo(0, 0);
        console.log('[showExercisePage] Scrolled to top');

        console.log('[showExercisePage] Navigation complete');
    } catch (error) {
        console.error('[showExercisePage] Error during navigation:', error);
    }
}

/**
 * Update the exercise page header with current user info and stats
 * @param {string} exerciseType - The type of exercise
 */
function updateExercisePageHeader(exerciseType) {
    console.log('[updateExercisePageHeader] Updating header for exercise type:', exerciseType);

    try {
        // Update user info
        const exercisePageUserName = document.getElementById('exercisePageUserName');
        const exercisePageUserLevel = document.getElementById('exercisePageUserLevel');
        const exercisePageExerciseType = document.getElementById('exercisePageExerciseType');

        if (exercisePageUserName) {
            exercisePageUserName.textContent = currentUser.name || 'User';
            console.log('[updateExercisePageHeader] Updated user name:', currentUser.name);
        } else {
            console.warn('[updateExercisePageHeader] exercisePageUserName element not found');
        }

        if (exercisePageUserLevel) {
            exercisePageUserLevel.textContent = currentUser.cefrLevel || 'A1';
            console.log('[updateExercisePageHeader] Updated user level:', currentUser.cefrLevel);
        } else {
            console.warn('[updateExercisePageHeader] exercisePageUserLevel element not found');
        }

        // Update exercise type display
        if (exercisePageExerciseType) {
            const typeNames = {
                'vocabulary': 'Vocabulary',
                'grammar': 'Grammar',
                'conjugation': 'Conjugation',
                'reading': 'Reading',
                'dialogue': 'Dialogue',
                'all': 'Mixed'
            };
            const displayName = typeNames[exerciseType] || exerciseType;
            exercisePageExerciseType.textContent = displayName;
            console.log('[updateExercisePageHeader] Updated exercise type:', displayName);
        } else {
            console.warn('[updateExercisePageHeader] exercisePageExerciseType element not found');
        }

        // Update stats
        updateExercisePageStats();

        console.log('[updateExercisePageHeader] Header update complete');
    } catch (error) {
        console.error('[updateExercisePageHeader] Error updating header:', error);
    }
}

/**
 * Update the stats display on the exercise page header
 */
function updateExercisePageStats() {
    const exercisePageAccuracy = document.getElementById('exercisePageAccuracy');
    const exercisePageStats = document.getElementById('exercisePageStats');

    if (!currentUser.sessionStats) return;

    const correct = currentUser.sessionStats.correct || 0;
    const total = currentUser.sessionStats.total || 0;
    const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;

    if (exercisePageAccuracy) {
        exercisePageAccuracy.textContent = `${accuracy}%`;
    }
    if (exercisePageStats) {
        exercisePageStats.textContent = `${correct}/${total} correct`;
    }
}

/**
 * Populate the "Other Users" list in the home page
 */
function populateOtherUsersList() {
    console.log('[populateOtherUsersList] Populating other users list');

    const otherUsersList = document.getElementById('otherUsersList');
    if (!otherUsersList) {
        console.error('[populateOtherUsersList] otherUsersList element not found');
        return;
    }

    // Get all users from localStorage
    const allUsers = JSON.parse(localStorage.getItem('frenchAppUsers') || '[]');
    console.log('[populateOtherUsersList] Found', allUsers.length, 'total users');

    // Filter out current user
    const otherUsers = allUsers.filter(user => user.userId !== currentUser.userId);
    console.log('[populateOtherUsersList] Found', otherUsers.length, 'other users');

    // Clear existing list
    otherUsersList.innerHTML = '';

    // Add each other user as a button
    if (otherUsers.length === 0) {
        otherUsersList.innerHTML = '<div style="text-align: center; padding: 20px; color: #9ca3af; font-size: 0.9em;">No other users yet.<br>Click "Add New User" to create one!</div>';
    } else {
        otherUsers.forEach(user => {
            const userButton = document.createElement('button');
            userButton.className = 'btn';
            userButton.style.cssText = 'background: white; border: 2px solid #e5e7eb; color: #374151; padding: 12px 16px; text-align: left; border-radius: 8px; transition: all 0.2s; width: 100%;';
            userButton.innerHTML = `
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <div>
                        <div style="font-weight: bold; font-size: 1em;">${user.name}</div>
                        <div style="font-size: 0.85em; color: #6b7280; margin-top: 2px;">Level: ${user.cefrLevel}</div>
                    </div>
                    <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 6px 12px; border-radius: 6px; font-size: 0.85em; font-weight: bold;">
                        Switch
                    </div>
                </div>
            `;

            // Add hover effect
            userButton.addEventListener('mouseenter', () => {
                userButton.style.borderColor = '#667eea';
                userButton.style.boxShadow = '0 2px 8px rgba(102,126,234,0.2)';
            });
            userButton.addEventListener('mouseleave', () => {
                userButton.style.borderColor = '#e5e7eb';
                userButton.style.boxShadow = 'none';
            });

            // Add click handler to switch user
            userButton.addEventListener('click', () => {
                console.log('[populateOtherUsersList] Switching to user:', user.userId);
                switchToUser(user.userId);
            });

            otherUsersList.appendChild(userButton);
        });
    }
}

/**
 * Update the session progress bar and text
 */
function updateTopProgressBar() {
    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');

    if (!progressBar || !progressText || !currentUser.sessionStats) return;

    const total = currentUser.sessionStats.total || 0;
    const targetAttempts = 20; // Match the target from Level Progress
    const percentage = Math.min((total / targetAttempts) * 100, 100);

    progressBar.style.width = `${percentage}%`;
    progressText.textContent = `${total}/${targetAttempts} questions`;
}

/**
 * USER MANAGEMENT FUNCTIONS
 */

// Track user to delete
let userToDelete = null;

/**
 * Show User Management Page
 */
function showUserManagementPage() {
    console.log('[showUserManagementPage] Opening user management page');

    const userManagementPage = document.getElementById('userManagementPage');
    const practiceScreen = document.getElementById('practiceScreen');
    const settingsModal = document.getElementById('settingsModal');

    // Hide practice screen and settings modal
    if (practiceScreen) practiceScreen.classList.remove('active');
    if (settingsModal) settingsModal.style.display = 'none';

    // Show user management page
    if (userManagementPage) {
        userManagementPage.style.display = 'block';
        populateUserManagementPage();
    }
}

/**
 * Populate User Management Page with current and other users
 */
function populateUserManagementPage() {
    console.log('[populateUserManagementPage] Populating user management page');

    // Get all users
    const allUsers = JSON.parse(localStorage.getItem('frenchAppUsers') || '[]');
    const otherUsers = allUsers.filter(user => user.userId !== currentUser.userId);

    // Populate Current User Card
    const currentUserCard = document.getElementById('currentUserCard');
    if (currentUserCard) {
        const lastSession = localStorage.getItem(`lastSession_${currentUser.userId}`);
        const lastSessionText = lastSession ? 'Now' : 'Unknown';

        currentUserCard.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
                <div>
                    <div style="font-size: 1.5em; font-weight: bold;">✅ ${currentUser.name}</div>
                    <div style="font-size: 1em; opacity: 0.9;">Level: ${currentUser.cefrLevel}</div>
                </div>
                <div style="background: rgba(255,255,255,0.2); padding: 8px 15px; border-radius: 8px; font-size: 0.9em;">
                    CURRENT
                </div>
            </div>
            <div style="display: flex; gap: 20px; font-size: 0.9em; opacity: 0.9;">
                <div>Last session: ${lastSessionText}</div>
            </div>
            <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid rgba(255,255,255,0.3); color: rgba(255,255,255,0.8); font-size: 0.9em;">
                ℹ️ You cannot delete the current user. Switch to another user first to delete this one.
            </div>
        `;
    }

    // Populate Other Users Cards
    const otherUsersCards = document.getElementById('otherUsersCards');
    const otherUsersCount = document.getElementById('otherUsersCount');

    if (otherUsersCount) {
        otherUsersCount.textContent = `(${otherUsers.length})`;
    }

    if (otherUsersCards) {
        if (otherUsers.length === 0) {
            otherUsersCards.innerHTML = `
                <div style="text-align: center; padding: 40px; background: #f9fafb; border-radius: 12px; color: #6b7280;">
                    <div style="font-size: 3em; margin-bottom: 10px;">👤</div>
                    <div style="font-size: 1.1em;">No other users yet</div>
                    <div style="font-size: 0.9em; margin-top: 5px;">Click "Add New User" below to create one</div>
                </div>
            `;
        } else {
            otherUsersCards.innerHTML = '';
            otherUsers.forEach(user => {
                const lastSession = localStorage.getItem(`lastSession_${user.userId}`);
                const lastSessionDate = lastSession ? new Date(lastSession) : null;
                const lastSessionText = lastSessionDate ? getTimeAgo(lastSessionDate) : 'Never';

                const userCard = document.createElement('div');
                userCard.style.cssText = 'background: white; border: 2px solid #e5e7eb; padding: 20px; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); transition: all 0.3s;';

                userCard.innerHTML = `
                    <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 15px;">
                        <div style="flex: 1;">
                            <div style="font-size: 1.3em; font-weight: bold; color: #374151; margin-bottom: 5px;">${user.name}</div>
                            <div style="color: #6b7280; font-size: 0.95em;">Level: ${user.cefrLevel}</div>
                            <div style="color: #9ca3af; font-size: 0.85em; margin-top: 5px;">Last activity: ${lastSessionText}</div>
                        </div>
                    </div>
                    <div style="display: flex; gap: 10px;">
                        <button class="switch-user-btn" data-userid="${user.userId}" style="flex: 1; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none; padding: 10px; border-radius: 8px; font-weight: bold; cursor: pointer;">
                            Switch to ${user.name}
                        </button>
                        <button class="delete-user-btn" data-userid="${user.userId}" data-username="${user.name}" style="background: #ef4444; color: white; border: none; padding: 10px 15px; border-radius: 8px; font-weight: bold; cursor: pointer;">
                            🗑️
                        </button>
                    </div>
                `;

                otherUsersCards.appendChild(userCard);
            });

            // Add event listeners for switch buttons
            document.querySelectorAll('.switch-user-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const userId = e.target.dataset.userid;
                    console.log('[switch-user-btn] Switching to user:', userId);
                    switchToUserFromManagement(userId);
                });
            });

            // Add event listeners for delete buttons
            document.querySelectorAll('.delete-user-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const userId = e.target.dataset.userid;
                    const userName = e.target.dataset.username;
                    console.log('[delete-user-btn] Requesting delete for user:', userId);
                    showDeleteUserConfirmation(userId, userName);
                });
            });
        }
    }
}

/**
 * Helper function to get "time ago" text
 */
function getTimeAgo(date) {
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins} min${diffMins > 1 ? 's' : ''} ago`;
    if (diffHours < 24) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
    if (diffDays < 7) return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} week${Math.floor(diffDays / 7) > 1 ? 's' : ''} ago`;
    return `${Math.floor(diffDays / 30)} month${Math.floor(diffDays / 30) > 1 ? 's' : ''} ago`;
}

/**
 * Switch to user from management page
 */
function switchToUserFromManagement(userId) {
    console.log('[switchToUserFromManagement] Switching to user:', userId);

    // Use existing switchToUser function
    switchToUser(userId);

    // CRITICAL: Refresh the User Management page so it shows the new current user
    populateUserManagementPage();

    // Small delay to let the user see the update, then close
    setTimeout(() => {
        const userManagementPage = document.getElementById('userManagementPage');
        const practiceScreen = document.getElementById('practiceScreen');

        if (userManagementPage) userManagementPage.style.display = 'none';
        if (practiceScreen) practiceScreen.classList.add('active');
    }, 300); // 300ms delay - user sees card update before closing
}

/**
 * Show delete user confirmation dialog
 */
function showDeleteUserConfirmation(userId, userName) {
    console.log('[showDeleteUserConfirmation] Showing confirmation for:', userId, userName);

    userToDelete = userId;

    const deleteModal = document.getElementById('deleteUserModal');
    const deleteUserNameSpan = document.getElementById('deleteUserName');

    if (deleteUserNameSpan) {
        deleteUserNameSpan.textContent = userName;
    }

    if (deleteModal) {
        deleteModal.style.display = 'flex';
    }
}

/**
 * Delete user permanently
 */
function deleteUser(userId) {
    console.log('[deleteUser] Deleting user:', userId);

    // Cannot delete current user
    if (userId === currentUser.userId) {
        alert('Cannot delete the current user! Please switch to another user first.');
        return;
    }

    // Get all users
    let allUsers = JSON.parse(localStorage.getItem('frenchAppUsers') || '[]');

    // Remove user from array
    allUsers = allUsers.filter(user => user.userId !== userId);

    // Save updated array
    localStorage.setItem('frenchAppUsers', JSON.stringify(allUsers));

    // Remove user-specific data from localStorage
    localStorage.removeItem(`userName_${userId}`);
    localStorage.removeItem(`userLevel_${userId}`);
    localStorage.removeItem(`lastSession_${userId}`);
    localStorage.removeItem(`progress_${userId}`);
    localStorage.removeItem(`masteryData_${userId}`);
    localStorage.removeItem(`session_${userId}`);

    console.log('[deleteUser] User deleted successfully');

    // Close delete modal
    const deleteModal = document.getElementById('deleteUserModal');
    if (deleteModal) {
        deleteModal.style.display = 'none';
    }

    // Refresh user management page
    populateUserManagementPage();

    // Show success message
    alert('User deleted successfully!');
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
