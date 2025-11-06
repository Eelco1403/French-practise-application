/**
 * Recommendation Engine
 * Provides personalized learning recommendations based on user performance
 * 8 types of recommendations for comprehensive learning guidance
 */

class RecommendationEngine {
    constructor(userData, masteryData) {
        this.userData = userData;
        this.masteryData = masteryData;
    }

    /**
     * Get all recommendations for the user
     * Returns array of recommendation objects
     */
    getAllRecommendations() {
        return [
            ...this.getWeakCategoryRecommendations(),
            ...this.getSpacedRepetitionRecommendations(),
            ...this.getLevelProgressionRecommendations(),
            ...this.getStreakRecommendations(),
            ...this.getDiversificationRecommendations(),
            ...this.getChallengeRecommendations(),
            ...this.getReviewRecommendations(),
            ...this.getMilestoneRecommendations()
        ].sort((a, b) => b.priority - a.priority);
    }

    /**
     * 1. Weak Category Recommendations
     * Identifies categories with low performance and suggests practice
     */
    getWeakCategoryRecommendations() {
        const recommendations = [];
        const categoryPerformance = this.calculateCategoryPerformance();

        Object.entries(categoryPerformance).forEach(([category, performance]) => {
            if (performance.accuracy < 60 && performance.attempts >= 5) {
                recommendations.push({
                    type: 'weak_category',
                    priority: 9,
                    category,
                    title: `Improve your ${category} skills`,
                    description: `Your accuracy in ${category} is ${performance.accuracy.toFixed(1)}%. Practice more to strengthen this area.`,
                    actionText: `Practice ${category}`,
                    actionData: { category, exerciseType: 'all' }
                });
            }
        });

        return recommendations;
    }

    /**
     * 2. Spaced Repetition Recommendations
     * Suggests items due for review based on SR algorithm
     */
    getSpacedRepetitionRecommendations() {
        const recommendations = [];
        const dueItems = [];
        const now = Date.now();

        Object.entries(this.masteryData).forEach(([id, data]) => {
            if (data.spacedRepetition && data.spacedRepetition.nextReview <= now) {
                dueItems.push({ id, ...data });
            }
        });

        if (dueItems.length > 0) {
            recommendations.push({
                type: 'spaced_repetition',
                priority: 10,
                title: `${dueItems.length} items ready for review`,
                description: 'Keep your knowledge fresh by reviewing these items now.',
                actionText: 'Start Review Session',
                actionData: { itemIds: dueItems.map(item => item.id) }
            });
        }

        return recommendations;
    }

    /**
     * 3. Level Progression Recommendations
     * Suggests when to move to next CEFR level
     */
    getLevelProgressionRecommendations() {
        const recommendations = [];
        const currentLevel = this.userData.cefrLevel || 'A1';
        const levelPerformance = this.calculateLevelPerformance(currentLevel);

        if (levelPerformance.accuracy >= 80 && levelPerformance.attempts >= 20) {
            const nextLevel = this.getNextLevel(currentLevel);
            if (nextLevel) {
                recommendations.push({
                    type: 'level_progression',
                    priority: 8,
                    currentLevel,
                    nextLevel,
                    title: `Ready for ${nextLevel}?`,
                    description: `You've mastered ${currentLevel} with ${levelPerformance.accuracy.toFixed(1)}% accuracy. Consider moving to ${nextLevel}.`,
                    actionText: `Start ${nextLevel} content`,
                    actionData: { level: nextLevel }
                });
            }
        }

        return recommendations;
    }

    /**
     * 4. Streak Recommendations
     * Encourages maintaining daily practice streak
     */
    getStreakRecommendations() {
        const recommendations = [];
        const lastPractice = this.userData.lastPracticeDate || 0;
        const daysSinceLastPractice = Math.floor((Date.now() - lastPractice) / (1000 * 60 * 60 * 24));

        if (daysSinceLastPractice === 0 && this.userData.streak >= 7) {
            recommendations.push({
                type: 'streak',
                priority: 6,
                title: `${this.userData.streak}-day streak!`,
                description: 'Amazing consistency! Keep your streak alive.',
                actionText: 'Continue practicing',
                actionData: {}
            });
        } else if (daysSinceLastPractice === 1) {
            recommendations.push({
                type: 'streak',
                priority: 9,
                title: 'Don\'t break your streak!',
                description: `You have a ${this.userData.streak}-day streak. Practice today to keep it going.`,
                actionText: 'Practice now',
                actionData: {}
            });
        }

        return recommendations;
    }

    /**
     * 5. Diversification Recommendations
     * Suggests trying different exercise types
     */
    getDiversificationRecommendations() {
        const recommendations = [];
        const exerciseTypes = this.calculateExerciseTypeCoverage();

        // Find underutilized exercise types
        Object.entries(exerciseTypes).forEach(([type, count]) => {
            if (count === 0 && type !== 'listening' && type !== 'pronunciation') {
                const typeNames = {
                    vocabulary: 'vocabulary',
                    grammar: 'grammar',
                    conjugation: 'conjugation',
                    reading: 'reading comprehension',
                    writing: 'writing practice',
                    dialogue: 'dialogue practice'
                };

                recommendations.push({
                    type: 'diversification',
                    priority: 5,
                    exerciseType: type,
                    title: `Try ${typeNames[type]}`,
                    description: `Expand your skills by exploring ${typeNames[type]} exercises.`,
                    actionText: `Start ${typeNames[type]}`,
                    actionData: { exerciseType: type }
                });
            }
        });

        return recommendations;
    }

    /**
     * 6. Challenge Recommendations
     * Suggests challenging exercises based on recent success
     */
    getChallengeRecommendations() {
        const recommendations = [];
        const recentPerformance = this.calculateRecentPerformance(10);

        if (recentPerformance.accuracy >= 85 && recentPerformance.attempts >= 10) {
            recommendations.push({
                type: 'challenge',
                priority: 7,
                title: 'Ready for a challenge?',
                description: `You're doing great! Try harder questions to push your limits.`,
                actionText: 'Accept challenge',
                actionData: { difficulty: 'hard' }
            });
        }

        return recommendations;
    }

    /**
     * 7. Review Recommendations
     * Suggests reviewing items with declining performance
     */
    getReviewRecommendations() {
        const recommendations = [];
        const decliningItems = [];

        Object.entries(this.masteryData).forEach(([id, data]) => {
            if (data.attempts >= 3 && this.isPerformanceDeclining(data.history || [])) {
                decliningItems.push(id);
            }
        });

        if (decliningItems.length >= 5) {
            recommendations.push({
                type: 'review',
                priority: 8,
                title: 'Some items need attention',
                description: `${decliningItems.length} items show declining performance. Review them to prevent forgetting.`,
                actionText: 'Start review',
                actionData: { itemIds: decliningItems }
            });
        }

        return recommendations;
    }

    /**
     * 8. Milestone Recommendations
     * Celebrates achievements and suggests next milestones
     */
    getMilestoneRecommendations() {
        const recommendations = [];
        const totalAttempts = Object.values(this.masteryData).reduce((sum, data) => sum + data.attempts, 0);
        const milestones = [50, 100, 250, 500, 1000, 2000];

        milestones.forEach(milestone => {
            if (totalAttempts >= milestone && totalAttempts < milestone + 10) {
                recommendations.push({
                    type: 'milestone',
                    priority: 6,
                    milestone,
                    title: `${milestone} exercises completed!`,
                    description: 'Congratulations on reaching this milestone. Keep up the excellent work!',
                    actionText: 'Continue learning',
                    actionData: {}
                });
            }
        });

        return recommendations;
    }

    // Helper methods

    calculateCategoryPerformance() {
        const categories = {};

        Object.entries(this.masteryData).forEach(([id, data]) => {
            const category = data.category || 'general';
            if (!categories[category]) {
                categories[category] = { correct: 0, total: 0 };
            }
            categories[category].total += data.attempts;
            categories[category].correct += data.correctCount;
        });

        const performance = {};
        Object.entries(categories).forEach(([category, stats]) => {
            performance[category] = {
                accuracy: stats.total > 0 ? (stats.correct / stats.total) * 100 : 0,
                attempts: stats.total
            };
        });

        return performance;
    }

    calculateLevelPerformance(level) {
        let correct = 0;
        let total = 0;

        Object.entries(this.masteryData).forEach(([id, data]) => {
            if (data.cefrLevel === level) {
                total += data.attempts;
                correct += data.correctCount;
            }
        });

        return {
            accuracy: total > 0 ? (correct / total) * 100 : 0,
            attempts: total
        };
    }

    calculateExerciseTypeCoverage() {
        const types = {
            vocabulary: 0,
            grammar: 0,
            conjugation: 0,
            reading: 0,
            writing: 0,
            dialogue: 0
        };

        Object.entries(this.masteryData).forEach(([id, data]) => {
            if (id.startsWith('v-') || id.startsWith('p-')) types.vocabulary++;
            else if (id.startsWith('g-')) types.grammar++;
            else if (id.startsWith('c-')) types.conjugation++;
            else if (id.startsWith('r-')) types.reading++;
            else if (id.startsWith('w-')) types.writing++;
            else if (id.startsWith('d-')) types.dialogue++;
        });

        return types;
    }

    calculateRecentPerformance(n = 10) {
        const recentAttempts = [];

        Object.entries(this.masteryData).forEach(([id, data]) => {
            if (data.lastAttempt) {
                recentAttempts.push({
                    id,
                    timestamp: data.lastAttempt,
                    correct: data.lastCorrect || false
                });
            }
        });

        recentAttempts.sort((a, b) => b.timestamp - a.timestamp);
        const recent = recentAttempts.slice(0, n);
        const correct = recent.filter(a => a.correct).length;

        return {
            accuracy: recent.length > 0 ? (correct / recent.length) * 100 : 0,
            attempts: recent.length
        };
    }

    isPerformanceDeclining(history) {
        if (history.length < 3) return false;

        const recent = history.slice(-5);
        const older = history.slice(-10, -5);

        if (older.length === 0) return false;

        const recentAccuracy = recent.filter(h => h.correct).length / recent.length;
        const olderAccuracy = older.filter(h => h.correct).length / older.length;

        return recentAccuracy < olderAccuracy - 0.2; // 20% decline
    }

    getNextLevel(currentLevel) {
        const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
        const currentIndex = levels.indexOf(currentLevel);
        return currentIndex < levels.length - 1 ? levels[currentIndex + 1] : null;
    }
}

// Export for browser
if (typeof window !== 'undefined') {
    window.RecommendationEngine = RecommendationEngine;
}

// Export for Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { RecommendationEngine };
}
