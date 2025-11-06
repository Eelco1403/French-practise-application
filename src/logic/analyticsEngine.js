/**
 * Analytics Engine
 * Tracks and analyzes user progress, performance metrics, and learning patterns
 * Provides insights for data-driven learning recommendations
 */

class AnalyticsEngine {
    constructor(userData, masteryData) {
        this.userData = userData;
        this.masteryData = masteryData;
    }

    /**
     * Get comprehensive analytics dashboard data
     */
    getDashboardData() {
        return {
            overview: this.getOverview(),
            timeBasedAnalytics: this.getTimeBasedAnalytics(),
            categoryAnalytics: this.getCategoryAnalytics(),
            levelAnalytics: this.getLevelAnalytics(),
            strengthsWeaknesses: this.getStrengthsWeaknesses(),
            progressTrends: this.getProgressTrends(),
            studyHabits: this.getStudyHabits()
        };
    }

    /**
     * Overview Statistics
     */
    getOverview() {
        const totalAttempts = Object.values(this.masteryData).reduce((sum, data) => sum + data.attempts, 0);
        const totalCorrect = Object.values(this.masteryData).reduce((sum, data) => sum + data.correctCount, 0);
        const overallAccuracy = totalAttempts > 0 ? (totalCorrect / totalAttempts) * 100 : 0;
        const totalTimeSpent = this.userData.totalTimeSpent || 0;
        const uniqueItemsPracticed = Object.keys(this.masteryData).length;

        return {
            totalAttempts,
            totalCorrect,
            overallAccuracy: parseFloat(overallAccuracy.toFixed(1)),
            totalTimeSpent,
            uniqueItemsPracticed,
            currentStreak: this.userData.streak || 0,
            currentLevel: this.userData.cefrLevel || 'A1',
            totalDaysActive: this.calculateTotalDaysActive()
        };
    }

    /**
     * Time-Based Analytics
     * Tracks performance over different time periods
     */
    getTimeBasedAnalytics() {
        return {
            today: this.getPerformanceForPeriod(1),
            last7Days: this.getPerformanceForPeriod(7),
            last30Days: this.getPerformanceForPeriod(30),
            allTime: this.getPerformanceForPeriod(Infinity)
        };
    }

    /**
     * Category Analytics
     * Performance breakdown by content category
     */
    getCategoryAnalytics() {
        const categories = {};

        Object.entries(this.masteryData).forEach(([id, data]) => {
            const category = data.category || 'general';
            if (!categories[category]) {
                categories[category] = {
                    attempts: 0,
                    correct: 0,
                    accuracy: 0,
                    avgResponseTime: 0,
                    masteryLevel: 0,
                    totalTime: 0
                };
            }

            categories[category].attempts += data.attempts;
            categories[category].correct += data.correctCount;
        });

        // Calculate derived metrics
        Object.keys(categories).forEach(category => {
            const cat = categories[category];
            cat.accuracy = cat.attempts > 0 ? parseFloat(((cat.correct / cat.attempts) * 100).toFixed(1)) : 0;
        });

        return categories;
    }

    /**
     * Level Analytics
     * Performance breakdown by CEFR level
     */
    getLevelAnalytics() {
        const levels = {
            'A1': { attempts: 0, correct: 0, accuracy: 0, itemsCompleted: 0 },
            'A2': { attempts: 0, correct: 0, accuracy: 0, itemsCompleted: 0 },
            'B1': { attempts: 0, correct: 0, accuracy: 0, itemsCompleted: 0 },
            'B2': { attempts: 0, correct: 0, accuracy: 0, itemsCompleted: 0 },
            'C1': { attempts: 0, correct: 0, accuracy: 0, itemsCompleted: 0 },
            'C2': { attempts: 0, correct: 0, accuracy: 0, itemsCompleted: 0 }
        };

        Object.entries(this.masteryData).forEach(([id, data]) => {
            const level = data.cefrLevel;
            if (level && levels[level]) {
                levels[level].attempts += data.attempts;
                levels[level].correct += data.correctCount;
                if (data.masteryLevel >= 4) {
                    levels[level].itemsCompleted++;
                }
            }
        });

        // Calculate accuracy for each level
        Object.keys(levels).forEach(level => {
            const lvl = levels[level];
            lvl.accuracy = lvl.attempts > 0 ? parseFloat(((lvl.correct / lvl.attempts) * 100).toFixed(1)) : 0;
        });

        return levels;
    }

    /**
     * Strengths and Weaknesses Analysis
     */
    getStrengthsWeaknesses() {
        const categoryPerformance = this.getCategoryAnalytics();

        const sorted = Object.entries(categoryPerformance)
            .filter(([_, data]) => data.attempts >= 5) // Only consider categories with enough data
            .sort((a, b) => b[1].accuracy - a[1].accuracy);

        const strengths = sorted.slice(0, 3).map(([category, data]) => ({
            category,
            accuracy: data.accuracy,
            attempts: data.attempts
        }));

        const weaknesses = sorted.slice(-3).reverse().map(([category, data]) => ({
            category,
            accuracy: data.accuracy,
            attempts: data.attempts
        }));

        return { strengths, weaknesses };
    }

    /**
     * Progress Trends
     * Tracks improvement over time
     */
    getProgressTrends() {
        const dailyStats = this.calculateDailyStats();
        const last30Days = this.getLast30Days();

        const trendData = last30Days.map(date => {
            const dayStats = dailyStats[date] || { attempts: 0, correct: 0, accuracy: 0 };
            return {
                date,
                attempts: dayStats.attempts,
                accuracy: dayStats.accuracy
            };
        });

        return {
            dailyTrends: trendData,
            accuracyTrend: this.calculateTrend(trendData.map(d => d.accuracy)),
            volumeTrend: this.calculateTrend(trendData.map(d => d.attempts))
        };
    }

    /**
     * Study Habits Analysis
     */
    getStudyHabits() {
        const sessionData = this.userData.sessions || [];
        const avgSessionLength = sessionData.length > 0
            ? sessionData.reduce((sum, s) => sum + s.duration, 0) / sessionData.length
            : 0;

        const timeOfDayDistribution = this.calculateTimeOfDayDistribution(sessionData);
        const mostProductiveTime = this.getMostProductiveTime(sessionData);
        const consistencyScore = this.calculateConsistencyScore();

        return {
            avgSessionLength: Math.round(avgSessionLength / 60), // Convert to minutes
            totalSessions: sessionData.length,
            timeOfDayDistribution,
            mostProductiveTime,
            consistencyScore: parseFloat(consistencyScore.toFixed(1))
        };
    }

    // Helper Methods

    getPerformanceForPeriod(days) {
        const cutoffDate = Date.now() - (days * 24 * 60 * 60 * 1000);
        let attempts = 0;
        let correct = 0;

        Object.entries(this.masteryData).forEach(([id, data]) => {
            if (data.lastAttempt && data.lastAttempt >= cutoffDate) {
                attempts += data.attempts;
                correct += data.correctCount;
            }
        });

        return {
            attempts,
            correct,
            accuracy: attempts > 0 ? parseFloat(((correct / attempts) * 100).toFixed(1)) : 0
        };
    }

    calculateTotalDaysActive() {
        const sessions = this.userData.sessions || [];
        if (sessions.length === 0) return 0;

        const uniqueDays = new Set(
            sessions.map(s => new Date(s.timestamp).toDateString())
        );

        return uniqueDays.size;
    }

    calculateDailyStats() {
        const dailyStats = {};

        Object.entries(this.masteryData).forEach(([id, data]) => {
            const history = data.history || [];
            history.forEach(attempt => {
                const date = new Date(attempt.timestamp).toDateString();
                if (!dailyStats[date]) {
                    dailyStats[date] = { attempts: 0, correct: 0 };
                }
                dailyStats[date].attempts++;
                if (attempt.correct) dailyStats[date].correct++;
            });
        });

        // Calculate accuracy for each day
        Object.keys(dailyStats).forEach(date => {
            const stats = dailyStats[date];
            stats.accuracy = stats.attempts > 0
                ? parseFloat(((stats.correct / stats.attempts) * 100).toFixed(1))
                : 0;
        });

        return dailyStats;
    }

    getLast30Days() {
        const days = [];
        for (let i = 29; i >= 0; i--) {
            const date = new Date();
            date.setDate(date.getDate() - i);
            days.push(date.toDateString());
        }
        return days;
    }

    calculateTrend(values) {
        if (values.length < 2) return 'stable';

        const recentValues = values.slice(-7).filter(v => v > 0);
        const olderValues = values.slice(-14, -7).filter(v => v > 0);

        if (recentValues.length === 0 || olderValues.length === 0) return 'insufficient_data';

        const recentAvg = recentValues.reduce((a, b) => a + b, 0) / recentValues.length;
        const olderAvg = olderValues.reduce((a, b) => a + b, 0) / olderValues.length;

        const change = ((recentAvg - olderAvg) / olderAvg) * 100;

        if (change > 10) return 'improving';
        if (change < -10) return 'declining';
        return 'stable';
    }

    calculateTimeOfDayDistribution(sessions) {
        const distribution = {
            morning: 0,   // 6-12
            afternoon: 0, // 12-18
            evening: 0,   // 18-24
            night: 0      // 0-6
        };

        sessions.forEach(session => {
            const hour = new Date(session.timestamp).getHours();
            if (hour >= 6 && hour < 12) distribution.morning++;
            else if (hour >= 12 && hour < 18) distribution.afternoon++;
            else if (hour >= 18 && hour < 24) distribution.evening++;
            else distribution.night++;
        });

        return distribution;
    }

    getMostProductiveTime(sessions) {
        const timePerformance = {
            morning: { correct: 0, total: 0 },
            afternoon: { correct: 0, total: 0 },
            evening: { correct: 0, total: 0 },
            night: { correct: 0, total: 0 }
        };

        sessions.forEach(session => {
            const hour = new Date(session.timestamp).getHours();
            let period;
            if (hour >= 6 && hour < 12) period = 'morning';
            else if (hour >= 12 && hour < 18) period = 'afternoon';
            else if (hour >= 18 && hour < 24) period = 'evening';
            else period = 'night';

            if (session.correct !== undefined) {
                timePerformance[period].total++;
                if (session.correct) timePerformance[period].correct++;
            }
        });

        let bestPeriod = 'morning';
        let bestAccuracy = 0;

        Object.entries(timePerformance).forEach(([period, data]) => {
            if (data.total > 0) {
                const accuracy = (data.correct / data.total) * 100;
                if (accuracy > bestAccuracy) {
                    bestAccuracy = accuracy;
                    bestPeriod = period;
                }
            }
        });

        return bestPeriod;
    }

    calculateConsistencyScore() {
        const last14Days = this.getLast30Days().slice(-14);
        const dailyStats = this.calculateDailyStats();

        const activeDays = last14Days.filter(date => dailyStats[date] && dailyStats[date].attempts > 0);

        return (activeDays.length / 14) * 100;
    }

    /**
     * Export analytics data for reporting
     */
    exportData() {
        return {
            timestamp: Date.now(),
            userData: this.userData,
            analytics: this.getDashboardData()
        };
    }
}

// Export for browser
if (typeof window !== 'undefined') {
    window.AnalyticsEngine = AnalyticsEngine;
}

// Export for Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { AnalyticsEngine };
}
