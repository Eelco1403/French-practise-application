/**
 * REPORTING AND LEVEL TRACKING SYSTEM
 * Tracks student progress across CEFR levels and generates teacher reports
 */

/**
 * CEFR Level definitions and requirements
 */
const CEFR_LEVELS = {
    A1: {
        name: 'Beginner',
        description: 'Can understand and use familiar everyday expressions',
        requiredMastery: 0.70, // 70% mastery to progress
        minItemsAttempted: 20
    },
    A2: {
        name: 'Elementary',
        description: 'Can communicate in simple routine tasks',
        requiredMastery: 0.70,
        minItemsAttempted: 20
    },
    B1: {
        name: 'Intermediate',
        description: 'Can deal with most situations while traveling',
        requiredMastery: 0.75,
        minItemsAttempted: 15
    },
    B2: {
        name: 'Upper Intermediate',
        description: 'Can interact with native speakers with fluency',
        requiredMastery: 0.75,
        minItemsAttempted: 10
    },
    C1: {
        name: 'Advanced',
        description: 'Can use language flexibly for social and professional purposes',
        requiredMastery: 0.80,
        minItemsAttempted: 5
    },
    C2: {
        name: 'Proficiency',
        description: 'Can understand virtually everything heard or read',
        requiredMastery: 0.85,
        minItemsAttempted: 5
    }
};

/**
 * Calculate mastery statistics for a specific CEFR level
 */
function calculateLevelMastery(masteryData, cefrLevel) {
    const levelItems = window.FrenchContent.getItemsByCefrLevel(cefrLevel);

    if (levelItems.length === 0) {
        return {
            totalItems: 0,
            attemptedItems: 0,
            masteredItems: 0,
            solidItems: 0,
            averageAccuracy: 0,
            overallMastery: 0,
            ready: false
        };
    }

    let attemptedItems = 0;
    let masteredItems = 0;
    let solidItems = 0;
    let totalAccuracy = 0;
    let accuracyCount = 0;

    levelItems.forEach(item => {
        const itemMastery = masteryData[item.id];
        if (itemMastery && itemMastery.timesAttempted > 0) {
            attemptedItems++;
            const accuracy = itemMastery.masteryPercentage / 100;
            totalAccuracy += accuracy;
            accuracyCount++;

            if (itemMastery.stage === 'mastered' || itemMastery.stage === 'solid') {
                masteredItems++;
            }
            if (itemMastery.stage === 'solid') {
                solidItems++;
            }
        }
    });

    const averageAccuracy = accuracyCount > 0 ? totalAccuracy / accuracyCount : 0;
    const overallMastery = attemptedItems / levelItems.length;

    const levelConfig = CEFR_LEVELS[cefrLevel];
    const ready = attemptedItems >= levelConfig.minItemsAttempted &&
                  averageAccuracy >= levelConfig.requiredMastery;

    return {
        totalItems: levelItems.length,
        attemptedItems,
        masteredItems,
        solidItems,
        averageAccuracy,
        overallMastery,
        ready
    };
}

/**
 * Determine current CEFR level based on mastery
 */
function determineCurrentLevel(masteryData) {
    const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];

    let currentLevel = 'A1';

    for (const level of levels) {
        const mastery = calculateLevelMastery(masteryData, level);
        if (mastery.ready) {
            const nextLevelIndex = levels.indexOf(level) + 1;
            if (nextLevelIndex < levels.length) {
                currentLevel = levels[nextLevelIndex];
            } else {
                currentLevel = 'C2'; // Max level
            }
        } else {
            break;
        }
    }

    return currentLevel;
}

/**
 * Get progress for all CEFR levels
 */
function getAllLevelProgress(masteryData) {
    const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
    const progress = {};

    levels.forEach(level => {
        progress[level] = calculateLevelMastery(masteryData, level);
    });

    return progress;
}

/**
 * Identify strengths and weaknesses
 */
function analyzeStrengthsWeaknesses(masteryData) {
    const categories = {};

    // Group items by category
    const allItems = window.FrenchContent.getAllContent();
    allItems.forEach(item => {
        if (!categories[item.category]) {
            categories[item.category] = {
                total: 0,
                attempted: 0,
                correct: 0,
                totalAttempts: 0
            };
        }

        categories[item.category].total++;

        const itemMastery = masteryData[item.id];
        if (itemMastery && itemMastery.timesAttempted > 0) {
            categories[item.category].attempted++;
            categories[item.category].correct += itemMastery.timesCorrect;
            categories[item.category].totalAttempts += itemMastery.timesAttempted;
        }
    });

    // Calculate accuracy per category
    const categoryStats = [];
    for (const [category, stats] of Object.entries(categories)) {
        if (stats.totalAttempts > 0) {
            const accuracy = stats.correct / stats.totalAttempts;
            categoryStats.push({
                category,
                accuracy,
                attempted: stats.attempted,
                total: stats.total
            });
        }
    }

    // Sort by accuracy
    categoryStats.sort((a, b) => b.accuracy - a.accuracy);

    return {
        strengths: categoryStats.slice(0, 3).filter(c => c.accuracy >= 0.7),
        weaknesses: categoryStats.slice(-3).filter(c => c.accuracy < 0.7)
    };
}

/**
 * Generate comprehensive progress report
 */
function generateProgressReport(userId, userName, masteryData) {
    const currentLevel = determineCurrentLevel(masteryData);
    const allLevelProgress = getAllLevelProgress(masteryData);
    const strengthsWeaknesses = analyzeStrengthsWeaknesses(masteryData);

    // Calculate overall statistics
    let totalAttempts = 0;
    let totalCorrect = 0;
    let totalItems = 0;
    let attemptedItems = 0;

    for (const [itemId, data] of Object.entries(masteryData)) {
        if (data.timesAttempted > 0) {
            totalAttempts += data.timesAttempted;
            totalCorrect += data.timesCorrect;
            attemptedItems++;
        }
        totalItems++;
    }

    const overallAccuracy = totalAttempts > 0 ? (totalCorrect / totalAttempts) : 0;

    // Generate recommendations
    const recommendations = generateRecommendations(
        currentLevel,
        allLevelProgress,
        strengthsWeaknesses
    );

    return {
        userId,
        userName,
        generatedAt: new Date().toISOString(),
        currentLevel,
        levelProgress: allLevelProgress,
        overallStats: {
            totalItems: window.FrenchContent.getAllContent().length,
            attemptedItems,
            totalAttempts,
            totalCorrect,
            overallAccuracy
        },
        strengthsWeaknesses,
        recommendations
    };
}

/**
 * Generate recommendations for teacher
 */
function generateRecommendations(currentLevel, levelProgress, strengthsWeaknesses) {
    const recommendations = [];

    // Level-based recommendations
    const currentLevelMastery = levelProgress[currentLevel];
    if (currentLevelMastery.ready) {
        recommendations.push({
            type: 'level',
            priority: 'high',
            message: `Student is ready to advance to the next level. Consider more challenging exercises.`
        });
    } else if (currentLevelMastery.averageAccuracy < 0.5) {
        recommendations.push({
            type: 'level',
            priority: 'high',
            message: `Student is struggling with ${currentLevel} level content. Consider reviewing fundamentals or providing additional support.`
        });
    }

    // Category-based recommendations
    if (strengthsWeaknesses.weaknesses.length > 0) {
        strengthsWeaknesses.weaknesses.forEach(weakness => {
            recommendations.push({
                type: 'category',
                priority: 'medium',
                message: `Focus on ${weakness.category} exercises (current accuracy: ${(weakness.accuracy * 100).toFixed(1)}%).`
            });
        });
    }

    // Practice volume recommendations
    if (currentLevelMastery.attemptedItems < CEFR_LEVELS[currentLevel].minItemsAttempted) {
        recommendations.push({
            type: 'practice',
            priority: 'medium',
            message: `Encourage more practice at ${currentLevel} level (${currentLevelMastery.attemptedItems}/${CEFR_LEVELS[currentLevel].minItemsAttempted} minimum items attempted).`
        });
    }

    // Encourage strengths
    if (strengthsWeaknesses.strengths.length > 0) {
        const topStrength = strengthsWeaknesses.strengths[0];
        recommendations.push({
            type: 'strength',
            priority: 'low',
            message: `Student excels in ${topStrength.category} (${(topStrength.accuracy * 100).toFixed(1)}% accuracy). Build on this confidence.`
        });
    }

    return recommendations;
}

/**
 * Export report to JSON
 */
function exportReportJSON(report) {
    const dataStr = JSON.stringify(report, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `french-practice-report-${report.userName}-${Date.now()}.json`;
    link.click();
    URL.revokeObjectURL(url);
}

/**
 * Export report to CSV
 */
function exportReportCSV(report) {
    const lines = [];

    // Header
    lines.push('French Practice App - Progress Report');
    lines.push(`Student Name,${report.userName}`);
    lines.push(`Current Level,${report.currentLevel}`);
    lines.push(`Generated At,${new Date(report.generatedAt).toLocaleString()}`);
    lines.push('');

    // Overall Stats
    lines.push('Overall Statistics');
    lines.push(`Total Items,${report.overallStats.totalItems}`);
    lines.push(`Attempted Items,${report.overallStats.attemptedItems}`);
    lines.push(`Total Attempts,${report.overallStats.totalAttempts}`);
    lines.push(`Overall Accuracy,${(report.overallStats.overallAccuracy * 100).toFixed(1)}%`);
    lines.push('');

    // Level Progress
    lines.push('Level Progress');
    lines.push('CEFR Level,Total Items,Attempted,Mastered,Solid,Average Accuracy,Ready for Next');
    for (const [level, progress] of Object.entries(report.levelProgress)) {
        lines.push([
            level,
            progress.totalItems,
            progress.attemptedItems,
            progress.masteredItems,
            progress.solidItems,
            `${(progress.averageAccuracy * 100).toFixed(1)}%`,
            progress.ready ? 'Yes' : 'No'
        ].join(','));
    }
    lines.push('');

    // Strengths
    if (report.strengthsWeaknesses.strengths.length > 0) {
        lines.push('Strengths');
        lines.push('Category,Accuracy,Progress');
        report.strengthsWeaknesses.strengths.forEach(s => {
            lines.push(`${s.category},${(s.accuracy * 100).toFixed(1)}%,${s.attempted}/${s.total}`);
        });
        lines.push('');
    }

    // Weaknesses
    if (report.strengthsWeaknesses.weaknesses.length > 0) {
        lines.push('Weaknesses');
        lines.push('Category,Accuracy,Progress');
        report.strengthsWeaknesses.weaknesses.forEach(w => {
            lines.push(`${w.category},${(w.accuracy * 100).toFixed(1)}%,${w.attempted}/${w.total}`);
        });
        lines.push('');
    }

    // Recommendations
    lines.push('Recommendations');
    lines.push('Priority,Type,Message');
    report.recommendations.forEach(r => {
        lines.push(`${r.priority},${r.type},"${r.message}"`);
    });

    const csvContent = lines.join('\n');
    const dataBlob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `french-practice-report-${report.userName}-${Date.now()}.csv`;
    link.click();
    URL.revokeObjectURL(url);
}

/**
 * Save user's CEFR level preference
 */
function saveUserLevel(userId, cefrLevel) {
    localStorage.setItem(`userLevel_${userId}`, cefrLevel);
}

/**
 * Load user's CEFR level preference
 */
function loadUserLevel(userId) {
    return localStorage.getItem(`userLevel_${userId}`) || 'A1';
}

// Export for browser
if (typeof window !== 'undefined') {
    window.ReportingSystem = {
        CEFR_LEVELS,
        calculateLevelMastery,
        determineCurrentLevel,
        getAllLevelProgress,
        analyzeStrengthsWeaknesses,
        generateProgressReport,
        generateRecommendations,
        exportReportJSON,
        exportReportCSV,
        saveUserLevel,
        loadUserLevel
    };
}

// Export for Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        CEFR_LEVELS,
        calculateLevelMastery,
        determineCurrentLevel,
        getAllLevelProgress,
        analyzeStrengthsWeaknesses,
        generateProgressReport,
        generateRecommendations,
        exportReportJSON,
        exportReportCSV,
        saveUserLevel,
        loadUserLevel
    };
}
