/**
 * FRENCH PRACTICE APP - CONTENT DATABASE
 * Vocabulary and phrases for practice exercises
 */

const FRENCH_CONTENT = {
    // Level 1: Basic Vocabulary
    level1: {
        vocabulary: [
            // Greetings
            { id: 'v-1', english: 'hello', french: 'bonjour', category: 'greetings', difficulty: 1 },
            { id: 'v-2', english: 'goodbye', french: 'au revoir', category: 'greetings', difficulty: 1 },
            { id: 'v-3', english: 'thank you', french: 'merci', category: 'greetings', difficulty: 1 },
            { id: 'v-4', english: 'please', french: 's\'il vous plaît', category: 'greetings', difficulty: 1 },
            { id: 'v-5', english: 'excuse me', french: 'excusez-moi', category: 'greetings', difficulty: 1 },
            { id: 'v-6', english: 'yes', french: 'oui', category: 'greetings', difficulty: 1 },
            { id: 'v-7', english: 'no', french: 'non', category: 'greetings', difficulty: 1 },

            // Common Nouns
            { id: 'v-8', english: 'water', french: 'eau', category: 'food', difficulty: 1 },
            { id: 'v-9', english: 'bread', french: 'pain', category: 'food', difficulty: 1 },
            { id: 'v-10', english: 'wine', french: 'vin', category: 'food', difficulty: 1 },
            { id: 'v-11', english: 'coffee', french: 'café', category: 'food', difficulty: 1 },
            { id: 'v-12', english: 'tea', french: 'thé', category: 'food', difficulty: 1 },
            { id: 'v-13', english: 'milk', french: 'lait', category: 'food', difficulty: 1 },
            { id: 'v-14', english: 'cheese', french: 'fromage', category: 'food', difficulty: 1 },
            { id: 'v-15', english: 'meat', french: 'viande', category: 'food', difficulty: 1 },

            // Family
            { id: 'v-16', english: 'mother', french: 'mère', category: 'family', difficulty: 1 },
            { id: 'v-17', english: 'father', french: 'père', category: 'family', difficulty: 1 },
            { id: 'v-18', english: 'sister', french: 'sœur', category: 'family', difficulty: 1 },
            { id: 'v-19', english: 'brother', french: 'frère', category: 'family', difficulty: 1 },
            { id: 'v-20', english: 'child', french: 'enfant', category: 'family', difficulty: 1 },

            // Numbers
            { id: 'v-21', english: 'one', french: 'un', category: 'numbers', difficulty: 1 },
            { id: 'v-22', english: 'two', french: 'deux', category: 'numbers', difficulty: 1 },
            { id: 'v-23', english: 'three', french: 'trois', category: 'numbers', difficulty: 1 },
            { id: 'v-24', english: 'four', french: 'quatre', category: 'numbers', difficulty: 1 },
            { id: 'v-25', english: 'five', french: 'cinq', category: 'numbers', difficulty: 1 },
            { id: 'v-26', english: 'six', french: 'six', category: 'numbers', difficulty: 1 },
            { id: 'v-27', english: 'seven', french: 'sept', category: 'numbers', difficulty: 1 },
            { id: 'v-28', english: 'eight', french: 'huit', category: 'numbers', difficulty: 1 },
            { id: 'v-29', english: 'nine', french: 'neuf', category: 'numbers', difficulty: 1 },
            { id: 'v-30', english: 'ten', french: 'dix', category: 'numbers', difficulty: 1 },

            // Colors
            { id: 'v-31', english: 'red', french: 'rouge', category: 'colors', difficulty: 1 },
            { id: 'v-32', english: 'blue', french: 'bleu', category: 'colors', difficulty: 1 },
            { id: 'v-33', english: 'green', french: 'vert', category: 'colors', difficulty: 1 },
            { id: 'v-34', english: 'yellow', french: 'jaune', category: 'colors', difficulty: 1 },
            { id: 'v-35', english: 'black', french: 'noir', category: 'colors', difficulty: 1 },
            { id: 'v-36', english: 'white', french: 'blanc', category: 'colors', difficulty: 1 },

            // Common Verbs
            { id: 'v-37', english: 'to be', french: 'être', category: 'verbs', difficulty: 1 },
            { id: 'v-38', english: 'to have', french: 'avoir', category: 'verbs', difficulty: 1 },
            { id: 'v-39', english: 'to do', french: 'faire', category: 'verbs', difficulty: 1 },
            { id: 'v-40', english: 'to go', french: 'aller', category: 'verbs', difficulty: 1 },
            { id: 'v-41', english: 'to eat', french: 'manger', category: 'verbs', difficulty: 1 },
            { id: 'v-42', english: 'to drink', french: 'boire', category: 'verbs', difficulty: 1 },
            { id: 'v-43', english: 'to sleep', french: 'dormir', category: 'verbs', difficulty: 1 },
            { id: 'v-44', english: 'to speak', french: 'parler', category: 'verbs', difficulty: 1 },
            { id: 'v-45', english: 'to listen', french: 'écouter', category: 'verbs', difficulty: 1 },
            { id: 'v-46', english: 'to read', french: 'lire', category: 'verbs', difficulty: 1 },
            { id: 'v-47', english: 'to write', french: 'écrire', category: 'verbs', difficulty: 1 },
            { id: 'v-48', english: 'to see', french: 'voir', category: 'verbs', difficulty: 1 },
            { id: 'v-49', english: 'to understand', french: 'comprendre', category: 'verbs', difficulty: 1 },
            { id: 'v-50', english: 'to know', french: 'savoir', category: 'verbs', difficulty: 1 },
        ]
    },

    // Level 2: Intermediate Vocabulary
    level2: {
        vocabulary: [
            // Places
            { id: 'v-51', english: 'house', french: 'maison', category: 'places', difficulty: 2 },
            { id: 'v-52', english: 'school', french: 'école', category: 'places', difficulty: 2 },
            { id: 'v-53', english: 'restaurant', french: 'restaurant', category: 'places', difficulty: 2 },
            { id: 'v-54', english: 'hotel', french: 'hôtel', category: 'places', difficulty: 2 },
            { id: 'v-55', english: 'hospital', french: 'hôpital', category: 'places', difficulty: 2 },
            { id: 'v-56', english: 'airport', french: 'aéroport', category: 'places', difficulty: 2 },
            { id: 'v-57', english: 'train station', french: 'gare', category: 'places', difficulty: 2 },
            { id: 'v-58', english: 'market', french: 'marché', category: 'places', difficulty: 2 },

            // Time & Days
            { id: 'v-59', english: 'today', french: 'aujourd\'hui', category: 'time', difficulty: 2 },
            { id: 'v-60', english: 'tomorrow', french: 'demain', category: 'time', difficulty: 2 },
            { id: 'v-61', english: 'yesterday', french: 'hier', category: 'time', difficulty: 2 },
            { id: 'v-62', english: 'morning', french: 'matin', category: 'time', difficulty: 2 },
            { id: 'v-63', english: 'evening', french: 'soir', category: 'time', difficulty: 2 },
            { id: 'v-64', english: 'night', french: 'nuit', category: 'time', difficulty: 2 },

            // Common Adjectives
            { id: 'v-65', english: 'big', french: 'grand', category: 'adjectives', difficulty: 2 },
            { id: 'v-66', english: 'small', french: 'petit', category: 'adjectives', difficulty: 2 },
            { id: 'v-67', english: 'good', french: 'bon', category: 'adjectives', difficulty: 2 },
            { id: 'v-68', english: 'bad', french: 'mauvais', category: 'adjectives', difficulty: 2 },
            { id: 'v-69', english: 'beautiful', french: 'beau', category: 'adjectives', difficulty: 2 },
            { id: 'v-70', english: 'ugly', french: 'laid', category: 'adjectives', difficulty: 2 },
        ]
    },

    // Common Phrases
    phrases: [
        { id: 'p-1', english: 'How are you?', french: 'Comment allez-vous?', difficulty: 2 },
        { id: 'p-2', english: 'What is your name?', french: 'Comment vous appelez-vous?', difficulty: 2 },
        { id: 'p-3', english: 'I am fine', french: 'Je vais bien', difficulty: 2 },
        { id: 'p-4', english: 'I don\'t understand', french: 'Je ne comprends pas', difficulty: 2 },
        { id: 'p-5', english: 'Do you speak English?', french: 'Parlez-vous anglais?', difficulty: 2 },
        { id: 'p-6', english: 'Where is the bathroom?', french: 'Où sont les toilettes?', difficulty: 2 },
        { id: 'p-7', english: 'How much does it cost?', french: 'Combien ça coûte?', difficulty: 2 },
        { id: 'p-8', english: 'I would like', french: 'Je voudrais', difficulty: 2 },
    ]
};

/**
 * Get all vocabulary items for a specific level
 */
function getVocabularyByLevel(level) {
    if (level === 1) {
        return FRENCH_CONTENT.level1.vocabulary;
    } else if (level === 2) {
        return FRENCH_CONTENT.level2.vocabulary;
    }
    return [];
}

/**
 * Get all available content (all levels + phrases)
 */
function getAllContent() {
    const allItems = [
        ...FRENCH_CONTENT.level1.vocabulary,
        ...FRENCH_CONTENT.level2.vocabulary,
        ...FRENCH_CONTENT.phrases
    ];
    return allItems;
}

/**
 * Get a random item from the content database
 */
function getRandomQuestion() {
    const allItems = getAllContent();
    const randomIndex = Math.floor(Math.random() * allItems.length);
    return allItems[randomIndex];
}

/**
 * Get a question by ID
 */
function getQuestionById(id) {
    const allItems = getAllContent();
    return allItems.find(item => item.id === id);
}

/**
 * Get items by category
 */
function getItemsByCategory(category) {
    const allItems = getAllContent();
    return allItems.filter(item => item.category === category);
}

/**
 * Get items by difficulty
 */
function getItemsByDifficulty(difficulty) {
    const allItems = getAllContent();
    return allItems.filter(item => item.difficulty === difficulty);
}

// Export for browser
if (typeof window !== 'undefined') {
    window.FrenchContent = {
        getAllContent,
        getVocabularyByLevel,
        getRandomQuestion,
        getQuestionById,
        getItemsByCategory,
        getItemsByDifficulty
    };
}

// Export for Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        FRENCH_CONTENT,
        getAllContent,
        getVocabularyByLevel,
        getRandomQuestion,
        getQuestionById,
        getItemsByCategory,
        getItemsByDifficulty
    };
}
