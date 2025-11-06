/**
 * Hint System
 * Provides 3-level progressive hints to help learners without giving away answers
 * Helps users learn through guided discovery
 */

class HintSystem {
    /**
     * Get hint for a question
     * @param {Object} question - The question object
     * @param {number} hintLevel - Current hint level (1, 2, or 3)
     * @returns {Object} Hint object with text and next level info
     */
    static getHint(question, hintLevel = 1) {
        if (!question) {
            return { text: 'No question provided', hasNext: false };
        }

        // Check if question has custom hints
        if (question.hints && question.hints[`level${hintLevel}`]) {
            return {
                text: question.hints[`level${hintLevel}`],
                hasNext: hintLevel < 3,
                level: hintLevel
            };
        }

        // Generate automatic hints based on question type and ID
        return this.generateAutoHint(question, hintLevel);
    }

    /**
     * Generate automatic hints based on question properties
     */
    static generateAutoHint(question, hintLevel) {
        const questionType = this.getQuestionType(question.id);

        switch (questionType) {
            case 'vocabulary':
                return this.getVocabularyHint(question, hintLevel);
            case 'grammar':
                return this.getGrammarHint(question, hintLevel);
            case 'conjugation':
                return this.getConjugationHint(question, hintLevel);
            case 'phrase':
                return this.getPhraseHint(question, hintLevel);
            default:
                return this.getGenericHint(question, hintLevel);
        }
    }

    /**
     * Get vocabulary hint
     */
    static getVocabularyHint(question, level) {
        const hints = {
            1: `Think about the category: ${question.category || 'general'}. The word relates to this topic.`,
            2: `The answer starts with the letter "${question.answer.charAt(0).toUpperCase()}".`,
            3: `The answer has ${question.answer.length} letters. Try to recall similar words.`
        };

        return {
            text: hints[level] || hints[3],
            hasNext: level < 3,
            level
        };
    }

    /**
     * Get grammar hint
     */
    static getGrammarHint(question, level) {
        const hints = {
            1: `Consider the grammar rule: ${question.category || 'sentence structure'}. What pattern fits?`,
            2: `Look at the context of the sentence. Which form would be grammatically correct here?`,
            3: `Pay attention to agreement (gender, number, tense). The answer follows standard French grammar rules.`
        };

        return {
            text: hints[level] || hints[3],
            hasNext: level < 3,
            level
        };
    }

    /**
     * Get conjugation hint
     */
    static getConjugationHint(question, level) {
        const hints = {
            1: `You're conjugating "${question.verb}" (${question.english}) in ${question.tense} tense for subject "${question.subject}".`,
            2: `For ${question.category || 'this verb type'}, remember the conjugation pattern. Is it regular or irregular?`,
            3: `The conjugated form starts with "${question.answer.charAt(0)}". Think about the verb ending.`
        };

        return {
            text: hints[level] || hints[3],
            hasNext: level < 3,
            level
        };
    }

    /**
     * Get phrase/expression hint
     */
    static getPhraseHint(question, level) {
        const hints = {
            1: `This is a common ${question.category || 'French'} expression. Think about how it's used in context.`,
            2: `The expression is typically used in ${question.category || 'everyday'} situations.`,
            3: `The first word is "${question.answer.split(' ')[0]}".`
        };

        return {
            text: hints[level] || hints[3],
            hasNext: level < 3,
            level
        };
    }

    /**
     * Get generic hint for any question type
     */
    static getGenericHint(question, level) {
        const hints = {
            1: `Think about what you know about ${question.category || 'this topic'}. What makes sense here?`,
            2: `Consider the level (${question.cefrLevel || 'intermediate'}). The answer matches this difficulty.`,
            3: `The answer begins with "${question.answer.charAt(0).toUpperCase()}". You're close!`
        };

        return {
            text: hints[level] || hints[3],
            hasNext: level < 3,
            level
        };
    }

    /**
     * Determine question type from ID
     */
    static getQuestionType(id) {
        if (!id) return 'unknown';

        if (id.startsWith('v-')) return 'vocabulary';
        if (id.startsWith('g-')) return 'grammar';
        if (id.startsWith('c-')) return 'conjugation';
        if (id.startsWith('p-')) return 'phrase';
        if (id.startsWith('r-')) return 'reading';
        if (id.startsWith('w-')) return 'writing';
        if (id.startsWith('d-')) return 'dialogue';

        return 'unknown';
    }

    /**
     * Get all three hints at once (for preview/debugging)
     */
    static getAllHints(question) {
        return {
            level1: this.getHint(question, 1),
            level2: this.getHint(question, 2),
            level3: this.getHint(question, 3)
        };
    }

    /**
     * Check if hint usage should incur penalty
     * Returns penalty factor (0.0 to 1.0) to apply to mastery gain
     */
    static getHintPenalty(hintsUsed) {
        switch (hintsUsed) {
            case 0: return 0;      // No penalty
            case 1: return 0.1;    // 10% penalty
            case 2: return 0.25;   // 25% penalty
            case 3: return 0.5;    // 50% penalty
            default: return 0.5;   // Max 50% penalty
        }
    }

    /**
     * Generate contextual hints for reading comprehension
     */
    static getReadingHint(passage, question, level) {
        const hints = {
            1: `Read the passage carefully. The answer can be found in the text.`,
            2: `Focus on the section about "${question.question.split(' ')[0]}". What does it say?`,
            3: `Look for keywords related to the question. The answer is explicitly stated or can be inferred.`
        };

        return {
            text: hints[level] || hints[3],
            hasNext: level < 3,
            level
        };
    }

    /**
     * Generate hints for writing exercises
     */
    static getWritingHint(exercise, level) {
        const hints = {
            1: `Start by planning your answer. Consider the main points you want to address.`,
            2: `Think about the structure: introduction, main points, conclusion. Use appropriate vocabulary for ${exercise.cefrLevel || 'your'} level.`,
            3: `Check your grammar, spelling, and that you've addressed all parts of the prompt.`
        };

        return {
            text: hints[level] || hints[3],
            hasNext: level < 3,
            level
        };
    }
}

// Export for browser
if (typeof window !== 'undefined') {
    window.HintSystem = HintSystem;
}

// Export for Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { HintSystem };
}
