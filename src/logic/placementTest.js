/**
 * Placement Test Module
 * Adaptive test to determine user's French proficiency level (A1-C2)
 * Starts with A2/B1 level questions and adjusts based on performance
 */

const PLACEMENT_TEST_QUESTIONS = [
    // A1 Level - Beginner (5 questions)
    {
        id: 'pt-1',
        question: 'Je _____ Marie.',
        options: ['m\'appelle', 'appelle', 'suis appelle', 'me appelle'],
        answer: 'm\'appelle',
        cefrLevel: 'A1',
        difficulty: 1,
        type: 'grammar'
    },
    {
        id: 'pt-2',
        question: 'Comment _____ -vous?',
        options: ['allez', 'aller', 'va', 'allons'],
        answer: 'allez',
        cefrLevel: 'A1',
        difficulty: 1,
        type: 'grammar'
    },
    {
        id: 'pt-3',
        question: 'J\'_____ un frère et une soeur.',
        options: ['ai', 'a', 'suis', 'es'],
        answer: 'ai',
        cefrLevel: 'A1',
        difficulty: 1,
        type: 'grammar'
    },
    {
        id: 'pt-4',
        question: 'Translate: "The cat" =',
        options: ['le chat', 'la chat', 'les chat', 'un chat'],
        answer: 'le chat',
        cefrLevel: 'A1',
        difficulty: 1,
        type: 'vocabulary'
    },
    {
        id: 'pt-5',
        question: 'Nous _____ français.',
        options: ['parlons', 'parle', 'parlez', 'parlent'],
        answer: 'parlons',
        cefrLevel: 'A1',
        difficulty: 1,
        type: 'grammar'
    },

    // A2 Level - Elementary (6 questions)
    {
        id: 'pt-6',
        question: 'Hier, je _____ au cinéma.',
        options: ['suis allé', 'ai allé', 'aller', 'vais'],
        answer: 'suis allé',
        cefrLevel: 'A2',
        difficulty: 2,
        type: 'grammar'
    },
    {
        id: 'pt-7',
        question: 'Il fait beau aujourd\'hui, _____ demain il pleuvra.',
        options: ['mais', 'et', 'donc', 'car'],
        answer: 'mais',
        cefrLevel: 'A2',
        difficulty: 2,
        type: 'grammar'
    },
    {
        id: 'pt-8',
        question: 'Quand j\'étais petit, je _____ beaucoup de jeux vidéo.',
        options: ['jouais', 'joue', 'ai joué', 'jouer'],
        answer: 'jouais',
        cefrLevel: 'A2',
        difficulty: 2,
        type: 'grammar'
    },
    {
        id: 'pt-9',
        question: 'C\'est _____ livre que je préfère.',
        options: ['le', 'la', 'un', 'ce'],
        answer: 'le',
        cefrLevel: 'A2',
        difficulty: 2,
        type: 'grammar'
    },
    {
        id: 'pt-10',
        question: 'Elle est _____ que sa soeur.',
        options: ['plus grande', 'grande plus', 'la plus grande', 'très grande'],
        answer: 'plus grande',
        cefrLevel: 'A2',
        difficulty: 2,
        type: 'grammar'
    },
    {
        id: 'pt-11',
        question: 'Nous _____ nos devoirs ce soir.',
        options: ['ferons', 'faisons', 'avons fait', 'faisions'],
        answer: 'ferons',
        cefrLevel: 'A2',
        difficulty: 2,
        type: 'grammar'
    },

    // B1 Level - Intermediate (7 questions)
    {
        id: 'pt-12',
        question: 'Si j\'avais de l\'argent, je _____ une voiture.',
        options: ['achèterais', 'achète', 'achèterai', 'ai acheté'],
        answer: 'achèterais',
        cefrLevel: 'B1',
        difficulty: 3,
        type: 'grammar'
    },
    {
        id: 'pt-13',
        question: 'Il faut que tu _____ à l\'heure.',
        options: ['sois', 'es', 'être', 'sera'],
        answer: 'sois',
        cefrLevel: 'B1',
        difficulty: 3,
        type: 'grammar'
    },
    {
        id: 'pt-14',
        question: 'Le film _____ j\'ai parlé est excellent.',
        options: ['dont', 'que', 'qui', 'où'],
        answer: 'dont',
        cefrLevel: 'B1',
        difficulty: 3,
        type: 'grammar'
    },
    {
        id: 'pt-15',
        question: 'Bien qu\'il _____ malade, il est venu travailler.',
        options: ['soit', 'est', 'était', 'sera'],
        answer: 'soit',
        cefrLevel: 'B1',
        difficulty: 3,
        type: 'grammar'
    },
    {
        id: 'pt-16',
        question: 'Cette décision a été prise _____ le directeur.',
        options: ['par', 'de', 'avec', 'pour'],
        answer: 'par',
        cefrLevel: 'B1',
        difficulty: 3,
        type: 'grammar'
    },
    {
        id: 'pt-17',
        question: 'Je me demande _____ il viendra.',
        options: ['s\'il', 'qu\'il', 'si il', 'que'],
        answer: 's\'il',
        cefrLevel: 'B1',
        difficulty: 3,
        type: 'grammar'
    },
    {
        id: 'pt-18',
        question: 'Il parle français _____ que moi.',
        options: ['mieux', 'meilleur', 'bon', 'bien'],
        answer: 'mieux',
        cefrLevel: 'B1',
        difficulty: 3,
        type: 'grammar'
    },

    // B2 Level - Upper Intermediate (6 questions)
    {
        id: 'pt-19',
        question: 'Ayant fini son travail, il _____ rentrer chez lui.',
        options: ['put', 'a pu', 'pourrait', 'peut'],
        answer: 'put',
        cefrLevel: 'B2',
        difficulty: 4,
        type: 'grammar'
    },
    {
        id: 'pt-20',
        question: 'C\'est une erreur _____ je ne commettrai plus.',
        options: ['que', 'qui', 'dont', 'où'],
        answer: 'que',
        cefrLevel: 'B2',
        difficulty: 4,
        type: 'grammar'
    },
    {
        id: 'pt-21',
        question: 'Pour _____ que le projet réussisse, il faudrait plus de temps.',
        options: ['peu', 'peut', 'peux', 'peux'],
        answer: 'peu',
        cefrLevel: 'B2',
        difficulty: 4,
        type: 'grammar'
    },
    {
        id: 'pt-22',
        question: 'Quoi qu\'il _____, il ne sera jamais satisfait.',
        options: ['fasse', 'fait', 'fera', 'ferait'],
        answer: 'fasse',
        cefrLevel: 'B2',
        difficulty: 4,
        type: 'grammar'
    },
    {
        id: 'pt-23',
        question: 'Le rapport _____ analysé sera présenté demain.',
        options: ['ayant été', 'étant', 'été', 'avoir été'],
        answer: 'ayant été',
        cefrLevel: 'B2',
        difficulty: 4,
        type: 'grammar'
    },
    {
        id: 'pt-24',
        question: 'Sans votre aide, nous n\'_____ pas réussi.',
        options: ['aurions', 'avons', 'aurons', 'avions'],
        answer: 'aurions',
        cefrLevel: 'B2',
        difficulty: 4,
        type: 'grammar'
    },

    // C1 Level - Advanced (4 questions)
    {
        id: 'pt-25',
        question: 'Il serait souhaitable que nous _____ une solution alternative.',
        options: ['envisagions', 'envisageons', 'envisagerons', 'envisagions'],
        answer: 'envisagions',
        cefrLevel: 'C1',
        difficulty: 5,
        type: 'grammar'
    },
    {
        id: 'pt-26',
        question: 'À supposer qu\'il _____, que feriez-vous?',
        options: ['vienne', 'vient', 'viendra', 'viendrait'],
        answer: 'vienne',
        cefrLevel: 'C1',
        difficulty: 5,
        type: 'grammar'
    },
    {
        id: 'pt-27',
        question: 'L\'entreprise, _____ les résultats sont excellents, recrute.',
        options: ['dont', 'que', 'qui', 'laquelle'],
        answer: 'dont',
        cefrLevel: 'C1',
        difficulty: 5,
        type: 'grammar'
    },
    {
        id: 'pt-28',
        question: 'Non qu\'il _____ incompétent, mais il manque d\'expérience.',
        options: ['soit', 'est', 'était', 'sera'],
        answer: 'soit',
        cefrLevel: 'C1',
        difficulty: 5,
        type: 'grammar'
    },

    // C2 Level - Mastery (2 questions)
    {
        id: 'pt-29',
        question: 'Quand bien même _____ -il raison, je ne changerais pas d\'avis.',
        options: ['aurait', 'a', 'aura', 'avait'],
        answer: 'aurait',
        cefrLevel: 'C2',
        difficulty: 6,
        type: 'grammar'
    },
    {
        id: 'pt-30',
        question: 'Il n\'est pas jusqu\'à son attitude qui ne _____ problématique.',
        options: ['soit', 'est', 'sera', 'serait'],
        answer: 'soit',
        cefrLevel: 'C2',
        difficulty: 6,
        type: 'grammar'
    }
];

/**
 * Adaptive Placement Test Engine
 * Determines user level based on performance
 */
class PlacementTestEngine {
    constructor() {
        this.questions = PLACEMENT_TEST_QUESTIONS;
        this.currentIndex = 0;
        this.responses = [];
        this.adaptiveMode = true;
    }

    /**
     * Start the placement test
     * Returns the first question (starts at A2 level)
     */
    start() {
        this.currentIndex = 5; // Start with A2 questions (index 5)
        this.responses = [];
        return this.getCurrentQuestion();
    }

    /**
     * Get current question
     */
    getCurrentQuestion() {
        if (this.currentIndex >= this.questions.length) {
            return null;
        }
        return this.questions[this.currentIndex];
    }

    /**
     * Submit answer and get next question
     * Uses adaptive algorithm to adjust difficulty
     */
    submitAnswer(questionId, userAnswer) {
        const question = this.questions.find(q => q.id === questionId);
        if (!question) return null;

        const isCorrect = userAnswer === question.answer;
        this.responses.push({
            questionId,
            cefrLevel: question.cefrLevel,
            difficulty: question.difficulty,
            isCorrect
        });

        // Adaptive logic: adjust next question based on performance
        if (this.adaptiveMode && this.responses.length < 15) {
            if (isCorrect) {
                // Move to harder questions
                this.currentIndex = this.findNextHarderQuestion(question.cefrLevel);
            } else {
                // Move to easier questions
                this.currentIndex = this.findNextEasierQuestion(question.cefrLevel);
            }
        } else {
            // Linear progression after 15 questions or if not adaptive
            this.currentIndex++;
        }

        return this.getCurrentQuestion();
    }

    /**
     * Find next harder question
     */
    findNextHarderQuestion(currentLevel) {
        const levelOrder = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
        const currentLevelIndex = levelOrder.indexOf(currentLevel);
        const nextLevel = levelOrder[Math.min(currentLevelIndex + 1, levelOrder.length - 1)];

        const nextQuestion = this.questions.findIndex((q, idx) =>
            idx > this.currentIndex && q.cefrLevel === nextLevel
        );

        return nextQuestion !== -1 ? nextQuestion : this.currentIndex + 1;
    }

    /**
     * Find next easier question
     */
    findNextEasierQuestion(currentLevel) {
        const levelOrder = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
        const currentLevelIndex = levelOrder.indexOf(currentLevel);
        const prevLevel = levelOrder[Math.max(currentLevelIndex - 1, 0)];

        const prevQuestion = this.questions.findIndex((q, idx) =>
            idx > this.currentIndex && q.cefrLevel === prevLevel
        );

        return prevQuestion !== -1 ? prevQuestion : this.currentIndex + 1;
    }

    /**
     * Calculate final level based on responses
     * Returns CEFR level (A1-C2)
     */
    calculateLevel() {
        if (this.responses.length === 0) return 'A1';

        // Count correct answers by level
        const levelScores = {
            'A1': { correct: 0, total: 0 },
            'A2': { correct: 0, total: 0 },
            'B1': { correct: 0, total: 0 },
            'B2': { correct: 0, total: 0 },
            'C1': { correct: 0, total: 0 },
            'C2': { correct: 0, total: 0 }
        };

        this.responses.forEach(response => {
            levelScores[response.cefrLevel].total++;
            if (response.isCorrect) {
                levelScores[response.cefrLevel].correct++;
            }
        });

        // Calculate overall accuracy and find highest mastered level
        const totalCorrect = this.responses.filter(r => r.isCorrect).length;
        const totalQuestions = this.responses.length;
        const overallAccuracy = (totalCorrect / totalQuestions) * 100;

        // Determine level based on overall performance
        // Need at least 2 questions per level AND 70% accuracy to qualify
        const levelOrder = ['C2', 'C1', 'B2', 'B1', 'A2', 'A1'];

        for (const level of levelOrder) {
            const score = levelScores[level];
            // Require minimum 2 questions attempted at this level
            if (score.total >= 2) {
                const percentage = (score.correct / score.total) * 100;
                if (percentage >= 70) {
                    return level;
                }
            }
        }

        // Fallback: use overall accuracy to estimate level
        if (overallAccuracy >= 90) return 'B2';
        if (overallAccuracy >= 75) return 'B1';
        if (overallAccuracy >= 60) return 'A2';
        if (overallAccuracy >= 40) return 'A1';

        // Very low score
        return 'A1';
    }

    /**
     * Get detailed results
     */
    getResults() {
        const level = this.calculateLevel();
        const totalQuestions = this.responses.length;
        const correctAnswers = this.responses.filter(r => r.isCorrect).length;
        const accuracy = totalQuestions > 0 ? (correctAnswers / totalQuestions * 100).toFixed(1) : 0;

        return {
            level,
            totalQuestions,
            correctAnswers,
            accuracy: parseFloat(accuracy),
            responses: this.responses
        };
    }

    /**
     * Reset test
     */
    reset() {
        this.currentIndex = 0;
        this.responses = [];
    }
}

// Export for browser
if (typeof window !== 'undefined') {
    window.PlacementTestEngine = PlacementTestEngine;
    window.PLACEMENT_TEST_QUESTIONS = PLACEMENT_TEST_QUESTIONS;
}

// Export for Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        PlacementTestEngine,
        PLACEMENT_TEST_QUESTIONS
    };
}
