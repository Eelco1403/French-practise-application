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
    ],

    // Grammar Exercises
    grammar: [
        // Articles - Definite
        { id: 'g-1', question: 'the house (la maison)', answer: 'la maison', explanation: 'la = the (feminine singular)', category: 'articles', difficulty: 1, type: 'article' },
        { id: 'g-2', question: 'the boy (le garçon)', answer: 'le garçon', explanation: 'le = the (masculine singular)', category: 'articles', difficulty: 1, type: 'article' },
        { id: 'g-3', question: 'the girls (les filles)', answer: 'les filles', explanation: 'les = the (plural)', category: 'articles', difficulty: 1, type: 'article' },
        { id: 'g-4', question: 'the water (l\'eau)', answer: 'l\'eau', explanation: 'l\' = the (before vowel)', category: 'articles', difficulty: 1, type: 'article' },

        // Articles - Indefinite
        { id: 'g-5', question: 'a house (une maison)', answer: 'une maison', explanation: 'une = a (feminine)', category: 'articles', difficulty: 1, type: 'article' },
        { id: 'g-6', question: 'a boy (un garçon)', answer: 'un garçon', explanation: 'un = a (masculine)', category: 'articles', difficulty: 1, type: 'article' },
        { id: 'g-7', question: 'some books (des livres)', answer: 'des livres', explanation: 'des = some (plural)', category: 'articles', difficulty: 1, type: 'article' },

        // Gender Agreement - Adjectives
        { id: 'g-8', question: 'a big house (un___ grand___ maison)', answer: 'une grande maison', explanation: 'grande = big (feminine), une = a (feminine)', category: 'agreement', difficulty: 2, type: 'agreement' },
        { id: 'g-9', question: 'a small boy (un petit garçon)', answer: 'un petit garçon', explanation: 'petit = small (masculine), un = a (masculine)', category: 'agreement', difficulty: 2, type: 'agreement' },
        { id: 'g-10', question: 'the red car (l___ voiture rouge)', answer: 'la voiture rouge', explanation: 'voiture is feminine, so we use la', category: 'agreement', difficulty: 2, type: 'agreement' },

        // Pluralization
        { id: 'g-11', question: 'the houses (plural of la maison)', answer: 'les maisons', explanation: 'Add -s for plural, article becomes les', category: 'pluralization', difficulty: 1, type: 'plural' },
        { id: 'g-12', question: 'the animals (plural of l\'animal)', answer: 'les animaux', explanation: 'Words ending in -al become -aux in plural', category: 'pluralization', difficulty: 2, type: 'plural' },
        { id: 'g-13', question: 'the beautiful (plural of beau)', answer: 'beaux', explanation: 'Words ending in -eau become -eaux in plural', category: 'pluralization', difficulty: 2, type: 'plural' },

        // Prepositions
        { id: 'g-14', question: 'in France (__ France)', answer: 'en France', explanation: 'Use en before feminine countries', category: 'prepositions', difficulty: 2, type: 'preposition' },
        { id: 'g-15', question: 'to the school (__ l\'école)', answer: 'à l\'école', explanation: 'à = to/at', category: 'prepositions', difficulty: 2, type: 'preposition' },
        { id: 'g-16', question: 'from Paris (__ Paris)', answer: 'de Paris', explanation: 'de = from/of', category: 'prepositions', difficulty: 2, type: 'preposition' },

        // Negation
        { id: 'g-17', question: 'I do not speak (Je __ parle __)', answer: 'Je ne parle pas', explanation: 'Negation: ne...pas around the verb', category: 'negation', difficulty: 2, type: 'negation' },
        { id: 'g-18', question: 'She does not eat (Elle __ mange __)', answer: 'Elle ne mange pas', explanation: 'Negation: ne...pas around the verb', category: 'negation', difficulty: 2, type: 'negation' },

        // Possessives
        { id: 'g-19', question: 'my book (mon/ma/mes livre)', answer: 'mon livre', explanation: 'mon = my (masculine singular)', category: 'possessive', difficulty: 2, type: 'possessive' },
        { id: 'g-20', question: 'my house (mon/ma/mes maison)', answer: 'ma maison', explanation: 'ma = my (feminine singular)', category: 'possessive', difficulty: 2, type: 'possessive' },
        { id: 'g-21', question: 'my friends (mon/ma/mes amis)', answer: 'mes amis', explanation: 'mes = my (plural)', category: 'possessive', difficulty: 2, type: 'possessive' },
    ],

    // Conjugation Exercises
    conjugation: [
        // être (to be) - Present tense
        { id: 'c-1', verb: 'être', english: 'to be', subject: 'je', tense: 'present', answer: 'suis', question: 'je (être)', difficulty: 1, category: 'irregular' },
        { id: 'c-2', verb: 'être', english: 'to be', subject: 'tu', tense: 'present', answer: 'es', question: 'tu (être)', difficulty: 1, category: 'irregular' },
        { id: 'c-3', verb: 'être', english: 'to be', subject: 'il/elle', tense: 'present', answer: 'est', question: 'il/elle (être)', difficulty: 1, category: 'irregular' },
        { id: 'c-4', verb: 'être', english: 'to be', subject: 'nous', tense: 'present', answer: 'sommes', question: 'nous (être)', difficulty: 1, category: 'irregular' },
        { id: 'c-5', verb: 'être', english: 'to be', subject: 'vous', tense: 'present', answer: 'êtes', question: 'vous (être)', difficulty: 1, category: 'irregular' },
        { id: 'c-6', verb: 'être', english: 'to be', subject: 'ils/elles', tense: 'present', answer: 'sont', question: 'ils/elles (être)', difficulty: 1, category: 'irregular' },

        // avoir (to have) - Present tense
        { id: 'c-7', verb: 'avoir', english: 'to have', subject: 'je', tense: 'present', answer: 'ai', question: 'je (avoir)', difficulty: 1, category: 'irregular' },
        { id: 'c-8', verb: 'avoir', english: 'to have', subject: 'tu', tense: 'present', answer: 'as', question: 'tu (avoir)', difficulty: 1, category: 'irregular' },
        { id: 'c-9', verb: 'avoir', english: 'to have', subject: 'il/elle', tense: 'present', answer: 'a', question: 'il/elle (avoir)', difficulty: 1, category: 'irregular' },
        { id: 'c-10', verb: 'avoir', english: 'to have', subject: 'nous', tense: 'present', answer: 'avons', question: 'nous (avoir)', difficulty: 1, category: 'irregular' },
        { id: 'c-11', verb: 'avoir', english: 'to have', subject: 'vous', tense: 'present', answer: 'avez', question: 'vous (avoir)', difficulty: 1, category: 'irregular' },
        { id: 'c-12', verb: 'avoir', english: 'to have', subject: 'ils/elles', tense: 'present', answer: 'ont', question: 'ils/elles (avoir)', difficulty: 1, category: 'irregular' },

        // aller (to go) - Present tense
        { id: 'c-13', verb: 'aller', english: 'to go', subject: 'je', tense: 'present', answer: 'vais', question: 'je (aller)', difficulty: 1, category: 'irregular' },
        { id: 'c-14', verb: 'aller', english: 'to go', subject: 'tu', tense: 'present', answer: 'vas', question: 'tu (aller)', difficulty: 1, category: 'irregular' },
        { id: 'c-15', verb: 'aller', english: 'to go', subject: 'il/elle', tense: 'present', answer: 'va', question: 'il/elle (aller)', difficulty: 1, category: 'irregular' },
        { id: 'c-16', verb: 'aller', english: 'to go', subject: 'nous', tense: 'present', answer: 'allons', question: 'nous (aller)', difficulty: 1, category: 'irregular' },
        { id: 'c-17', verb: 'aller', english: 'to go', subject: 'vous', tense: 'present', answer: 'allez', question: 'vous (aller)', difficulty: 1, category: 'irregular' },
        { id: 'c-18', verb: 'aller', english: 'to go', subject: 'ils/elles', tense: 'present', answer: 'vont', question: 'ils/elles (aller)', difficulty: 1, category: 'irregular' },

        // -er verbs: parler (to speak)
        { id: 'c-19', verb: 'parler', english: 'to speak', subject: 'je', tense: 'present', answer: 'parle', question: 'je (parler)', difficulty: 1, category: 'er-verb' },
        { id: 'c-20', verb: 'parler', english: 'to speak', subject: 'tu', tense: 'present', answer: 'parles', question: 'tu (parler)', difficulty: 1, category: 'er-verb' },
        { id: 'c-21', verb: 'parler', english: 'to speak', subject: 'il/elle', tense: 'present', answer: 'parle', question: 'il/elle (parler)', difficulty: 1, category: 'er-verb' },
        { id: 'c-22', verb: 'parler', english: 'to speak', subject: 'nous', tense: 'present', answer: 'parlons', question: 'nous (parler)', difficulty: 1, category: 'er-verb' },
        { id: 'c-23', verb: 'parler', english: 'to speak', subject: 'vous', tense: 'present', answer: 'parlez', question: 'vous (parler)', difficulty: 1, category: 'er-verb' },
        { id: 'c-24', verb: 'parler', english: 'to speak', subject: 'ils/elles', tense: 'present', answer: 'parlent', question: 'ils/elles (parler)', difficulty: 1, category: 'er-verb' },

        // -er verbs: manger (to eat)
        { id: 'c-25', verb: 'manger', english: 'to eat', subject: 'je', tense: 'present', answer: 'mange', question: 'je (manger)', difficulty: 1, category: 'er-verb' },
        { id: 'c-26', verb: 'manger', english: 'to eat', subject: 'tu', tense: 'present', answer: 'manges', question: 'tu (manger)', difficulty: 1, category: 'er-verb' },
        { id: 'c-27', verb: 'manger', english: 'to eat', subject: 'il/elle', tense: 'present', answer: 'mange', question: 'il/elle (manger)', difficulty: 1, category: 'er-verb' },
        { id: 'c-28', verb: 'manger', english: 'to eat', subject: 'nous', tense: 'present', answer: 'mangeons', question: 'nous (manger)', difficulty: 1, category: 'er-verb' },
        { id: 'c-29', verb: 'manger', english: 'to eat', subject: 'vous', tense: 'present', answer: 'mangez', question: 'vous (manger)', difficulty: 1, category: 'er-verb' },
        { id: 'c-30', verb: 'manger', english: 'to eat', subject: 'ils/elles', tense: 'present', answer: 'mangent', question: 'ils/elles (manger)', difficulty: 1, category: 'er-verb' },

        // -ir verbs: finir (to finish)
        { id: 'c-31', verb: 'finir', english: 'to finish', subject: 'je', tense: 'present', answer: 'finis', question: 'je (finir)', difficulty: 2, category: 'ir-verb' },
        { id: 'c-32', verb: 'finir', english: 'to finish', subject: 'tu', tense: 'present', answer: 'finis', question: 'tu (finir)', difficulty: 2, category: 'ir-verb' },
        { id: 'c-33', verb: 'finir', english: 'to finish', subject: 'il/elle', tense: 'present', answer: 'finit', question: 'il/elle (finir)', difficulty: 2, category: 'ir-verb' },
        { id: 'c-34', verb: 'finir', english: 'to finish', subject: 'nous', tense: 'present', answer: 'finissons', question: 'nous (finir)', difficulty: 2, category: 'ir-verb' },
        { id: 'c-35', verb: 'finir', english: 'to finish', subject: 'vous', tense: 'present', answer: 'finissez', question: 'vous (finir)', difficulty: 2, category: 'ir-verb' },
        { id: 'c-36', verb: 'finir', english: 'to finish', subject: 'ils/elles', tense: 'present', answer: 'finissent', question: 'ils/elles (finir)', difficulty: 2, category: 'ir-verb' },

        // -re verbs: vendre (to sell)
        { id: 'c-37', verb: 'vendre', english: 'to sell', subject: 'je', tense: 'present', answer: 'vends', question: 'je (vendre)', difficulty: 2, category: 're-verb' },
        { id: 'c-38', verb: 'vendre', english: 'to sell', subject: 'tu', tense: 'present', answer: 'vends', question: 'tu (vendre)', difficulty: 2, category: 're-verb' },
        { id: 'c-39', verb: 'vendre', english: 'to sell', subject: 'il/elle', tense: 'present', answer: 'vend', question: 'il/elle (vendre)', difficulty: 2, category: 're-verb' },
        { id: 'c-40', verb: 'vendre', english: 'to sell', subject: 'nous', tense: 'present', answer: 'vendons', question: 'nous (vendre)', difficulty: 2, category: 're-verb' },
        { id: 'c-41', verb: 'vendre', english: 'to sell', subject: 'vous', tense: 'present', answer: 'vendez', question: 'vous (vendre)', difficulty: 2, category: 're-verb' },
        { id: 'c-42', verb: 'vendre', english: 'to sell', subject: 'ils/elles', tense: 'present', answer: 'vendent', question: 'ils/elles (vendre)', difficulty: 2, category: 're-verb' },

        // faire (to do/make) - Present tense
        { id: 'c-43', verb: 'faire', english: 'to do/make', subject: 'je', tense: 'present', answer: 'fais', question: 'je (faire)', difficulty: 1, category: 'irregular' },
        { id: 'c-44', verb: 'faire', english: 'to do/make', subject: 'tu', tense: 'present', answer: 'fais', question: 'tu (faire)', difficulty: 1, category: 'irregular' },
        { id: 'c-45', verb: 'faire', english: 'to do/make', subject: 'il/elle', tense: 'present', answer: 'fait', question: 'il/elle (faire)', difficulty: 1, category: 'irregular' },
        { id: 'c-46', verb: 'faire', english: 'to do/make', subject: 'nous', tense: 'present', answer: 'faisons', question: 'nous (faire)', difficulty: 1, category: 'irregular' },
        { id: 'c-47', verb: 'faire', english: 'to do/make', subject: 'vous', tense: 'present', answer: 'faites', question: 'vous (faire)', difficulty: 1, category: 'irregular' },
        { id: 'c-48', verb: 'faire', english: 'to do/make', subject: 'ils/elles', tense: 'present', answer: 'font', question: 'ils/elles (faire)', difficulty: 1, category: 'irregular' },
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
 * Get all available content (all levels + phrases + grammar + conjugation)
 */
function getAllContent() {
    const allItems = [
        ...FRENCH_CONTENT.level1.vocabulary,
        ...FRENCH_CONTENT.level2.vocabulary,
        ...FRENCH_CONTENT.phrases,
        ...FRENCH_CONTENT.grammar,
        ...FRENCH_CONTENT.conjugation
    ];
    return allItems;
}

/**
 * Get content by exercise type
 */
function getContentByType(exerciseType) {
    switch(exerciseType) {
        case 'vocabulary':
            return [
                ...FRENCH_CONTENT.level1.vocabulary,
                ...FRENCH_CONTENT.level2.vocabulary,
                ...FRENCH_CONTENT.phrases
            ];
        case 'grammar':
            return FRENCH_CONTENT.grammar;
        case 'conjugation':
            return FRENCH_CONTENT.conjugation;
        case 'all':
        default:
            return getAllContent();
    }
}

/**
 * Get a random item from the content database
 */
function getRandomQuestion(exerciseType = 'all') {
    const allItems = getContentByType(exerciseType);
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
        getContentByType,
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
        getContentByType,
        getRandomQuestion,
        getQuestionById,
        getItemsByCategory,
        getItemsByDifficulty
    };
}
