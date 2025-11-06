/**
 * INTERNATIONALIZATION (i18n) SYSTEM
 * Multi-language support for the French Practice App
 */

const TRANSLATIONS = {
    en: {
        // Welcome Screen
        welcome: {
            title: 'French Practice App',
            nameLabel: 'Your Name:',
            namePlaceholder: 'Enter your name',
            startButton: 'Start Learning',
            resumeButton: 'Resume Last Session',
            selectLevel: 'Select Your Level:',
            languageLabel: 'Interface Language:'
        },

        // CEFR Levels
        levels: {
            A1: 'A1 - Beginner',
            A2: 'A2 - Elementary',
            B1: 'B1 - Intermediate',
            B2: 'B2 - Upper Intermediate',
            C1: 'C1 - Advanced',
            C2: 'C2 - Proficiency'
        },

        // Level Descriptions
        levelDescriptions: {
            A1: 'Can understand and use familiar everyday expressions',
            A2: 'Can communicate in simple routine tasks',
            B1: 'Can deal with most situations while traveling',
            B2: 'Can interact with native speakers with fluency',
            C1: 'Can use language flexibly for social and professional purposes',
            C2: 'Can understand virtually everything heard or read'
        },

        // Practice Interface
        practice: {
            userInfo: 'Student',
            correct: 'Correct',
            total: 'Total',
            accuracy: 'Accuracy',
            exerciseType: 'Exercise Type:',
            allTypes: 'All Types',
            vocabulary: 'Vocabulary',
            grammar: 'Grammar',
            conjugation: 'Conjugation',
            answerPlaceholder: 'Type your answer...',
            checkAnswer: 'Check Answer',
            nextQuestion: 'Next Question',
            correctFeedback: 'Correct!',
            incorrectFeedback: 'Incorrect. The correct answer is:',
            saveProgress: 'Save Progress',
            viewReport: 'View Progress Report',
            changeLanguage: 'Change Language',
            changeLevel: 'Change Level',
            levelProgress: 'Level Progress',
            currentLevel: 'Current Level'
        },

        // Progress Overview
        progress: {
            title: 'Progress Overview',
            learning: 'Learning',
            developing: 'Developing',
            mastered: 'Mastered',
            solid: 'Solid',
            itemsCount: 'items',
            levelGoal: 'Level Goal',
            nextLevel: 'Next Level',
            recommendation: 'Recommendation'
        },

        // Mastery Stages
        masteryStages: {
            learning: 'Learning (0-50%)',
            developing: 'Developing (51-70%)',
            mastered: 'Mastered (71-85%)',
            solid: 'Solid (86%+)'
        },

        // Teacher Report
        report: {
            title: 'Student Progress Report',
            studentName: 'Student Name',
            currentLevel: 'Current CEFR Level',
            overallProgress: 'Overall Progress',
            exercisesByLevel: 'Exercises by CEFR Level',
            masteryByLevel: 'Mastery by Level',
            strengthsAndWeaknesses: 'Strengths and Weaknesses',
            strengths: 'Strengths',
            weaknesses: 'Weaknesses',
            recommendations: 'Recommendations for Teacher',
            sessionHistory: 'Session History',
            totalTime: 'Total Practice Time',
            totalAttempts: 'Total Attempts',
            overallAccuracy: 'Overall Accuracy',
            lastSession: 'Last Session',
            exportReport: 'Export Report',
            printReport: 'Print Report',
            closeReport: 'Close Report',
            readyForNextLevel: 'Ready for next level',
            needsMorePractice: 'Needs more practice',
            excellentProgress: 'Excellent progress',
            focusOn: 'Focus on',
            downloadPDF: 'Download PDF Report',
            downloadCSV: 'Download CSV Data'
        },

        // Messages
        messages: {
            progressSaved: 'Progress saved successfully!',
            noProgress: 'No progress data available yet.',
            levelUp: 'Congratulations! You are ready for the next level!',
            keepPracticing: 'Keep practicing to improve your mastery.',
            sessionResumed: 'Session resumed successfully.',
            errorLoading: 'Error loading data. Please try again.'
        },

        // Exercise Type Badges
        badges: {
            vocabulary: 'VOC',
            grammar: 'GRM',
            conjugation: 'CONJ',
            phrase: 'PHR'
        }
    },

    nl: {
        // Welkomstscherm
        welcome: {
            title: 'Frans Oefenapp',
            nameLabel: 'Jouw Naam:',
            namePlaceholder: 'Voer je naam in',
            startButton: 'Begin met Leren',
            resumeButton: 'Hervat Laatste Sessie',
            selectLevel: 'Selecteer Je Niveau:',
            languageLabel: 'Interfacetaal:'
        },

        // CEFR Niveaus
        levels: {
            A1: 'A1 - Beginner',
            A2: 'A2 - Elementair',
            B1: 'B1 - Gemiddeld',
            B2: 'B2 - Gevorderd Gemiddeld',
            C1: 'C1 - Gevorderd',
            C2: 'C2 - Vaardigheid'
        },

        // Niveau Beschrijvingen
        levelDescriptions: {
            A1: 'Kan vertrouwde dagelijkse uitdrukkingen begrijpen en gebruiken',
            A2: 'Kan communiceren in eenvoudige routinetaken',
            B1: 'Kan omgaan met de meeste situaties tijdens het reizen',
            B2: 'Kan met vloeiendheid communiceren met moedertaalsprekers',
            C1: 'Kan taal flexibel gebruiken voor sociale en professionele doeleinden',
            C2: 'Kan vrijwel alles begrijpen wat gehoord of gelezen wordt'
        },

        // Oefeninterface
        practice: {
            userInfo: 'Leerling',
            correct: 'Correct',
            total: 'Totaal',
            accuracy: 'Nauwkeurigheid',
            exerciseType: 'Oefentype:',
            allTypes: 'Alle Types',
            vocabulary: 'Woordenschat',
            grammar: 'Grammatica',
            conjugation: 'Vervoeging',
            answerPlaceholder: 'Typ je antwoord...',
            checkAnswer: 'Controleer Antwoord',
            nextQuestion: 'Volgende Vraag',
            correctFeedback: 'Correct!',
            incorrectFeedback: 'Onjuist. Het juiste antwoord is:',
            saveProgress: 'Voortgang Opslaan',
            viewReport: 'Bekijk Voortgangsrapport',
            changeLanguage: 'Verander Taal',
            changeLevel: 'Verander Niveau',
            levelProgress: 'Niveau Voortgang',
            currentLevel: 'Huidig Niveau'
        },

        // Voortgangsoverzicht
        progress: {
            title: 'Voortgangsoverzicht',
            learning: 'Aan het Leren',
            developing: 'In Ontwikkeling',
            mastered: 'Beheerst',
            solid: 'Solide',
            itemsCount: 'items',
            levelGoal: 'Niveaudoel',
            nextLevel: 'Volgend Niveau',
            recommendation: 'Aanbeveling'
        },

        // Beheersingsfasen
        masteryStages: {
            learning: 'Aan het Leren (0-50%)',
            developing: 'In Ontwikkeling (51-70%)',
            mastered: 'Beheerst (71-85%)',
            solid: 'Solide (86%+)'
        },

        // Docentrapport
        report: {
            title: 'Leerling Voortgangsrapport',
            studentName: 'Leerlingnaam',
            currentLevel: 'Huidig CEFR-niveau',
            overallProgress: 'Totale Voortgang',
            exercisesByLevel: 'Oefeningen per CEFR-niveau',
            masteryByLevel: 'Beheersing per Niveau',
            strengthsAndWeaknesses: 'Sterke en Zwakke Punten',
            strengths: 'Sterke Punten',
            weaknesses: 'Zwakke Punten',
            recommendations: 'Aanbevelingen voor Docent',
            sessionHistory: 'Sessiegeschiedenis',
            totalTime: 'Totale Oefentijd',
            totalAttempts: 'Totaal Pogingen',
            overallAccuracy: 'Totale Nauwkeurigheid',
            lastSession: 'Laatste Sessie',
            exportReport: 'Exporteer Rapport',
            printReport: 'Print Rapport',
            closeReport: 'Sluit Rapport',
            readyForNextLevel: 'Klaar voor volgend niveau',
            needsMorePractice: 'Heeft meer oefening nodig',
            excellentProgress: 'Uitstekende voortgang',
            focusOn: 'Focus op',
            downloadPDF: 'Download PDF Rapport',
            downloadCSV: 'Download CSV Gegevens'
        },

        // Berichten
        messages: {
            progressSaved: 'Voortgang succesvol opgeslagen!',
            noProgress: 'Nog geen voortgangsgegevens beschikbaar.',
            levelUp: 'Gefeliciteerd! Je bent klaar voor het volgende niveau!',
            keepPracticing: 'Blijf oefenen om je beheersing te verbeteren.',
            sessionResumed: 'Sessie succesvol hervat.',
            errorLoading: 'Fout bij laden van gegevens. Probeer het opnieuw.'
        },

        // Oefentype Badges
        badges: {
            vocabulary: 'WDS',
            grammar: 'GRM',
            conjugation: 'VERV',
            phrase: 'ZIN'
        }
    },

    fr: {
        // Écran d'accueil
        welcome: {
            title: 'Application de Pratique du Français',
            nameLabel: 'Votre Nom:',
            namePlaceholder: 'Entrez votre nom',
            startButton: 'Commencer à Apprendre',
            resumeButton: 'Reprendre la Dernière Session',
            selectLevel: 'Sélectionnez Votre Niveau:',
            languageLabel: 'Langue de l\'Interface:'
        },

        // Niveaux CECR
        levels: {
            A1: 'A1 - Débutant',
            A2: 'A2 - Élémentaire',
            B1: 'B1 - Intermédiaire',
            B2: 'B2 - Intermédiaire Supérieur',
            C1: 'C1 - Avancé',
            C2: 'C2 - Maîtrise'
        },

        // Descriptions des niveaux
        levelDescriptions: {
            A1: 'Peut comprendre et utiliser des expressions familières quotidiennes',
            A2: 'Peut communiquer dans des tâches simples et routinières',
            B1: 'Peut faire face à la plupart des situations en voyage',
            B2: 'Peut interagir avec des locuteurs natifs avec aisance',
            C1: 'Peut utiliser la langue de manière flexible pour des objectifs sociaux et professionnels',
            C2: 'Peut comprendre pratiquement tout ce qui est entendu ou lu'
        },

        // Interface de pratique
        practice: {
            userInfo: 'Étudiant',
            correct: 'Correct',
            total: 'Total',
            accuracy: 'Précision',
            exerciseType: 'Type d\'Exercice:',
            allTypes: 'Tous les Types',
            vocabulary: 'Vocabulaire',
            grammar: 'Grammaire',
            conjugation: 'Conjugaison',
            answerPlaceholder: 'Tapez votre réponse...',
            checkAnswer: 'Vérifier la Réponse',
            nextQuestion: 'Question Suivante',
            correctFeedback: 'Correct!',
            incorrectFeedback: 'Incorrect. La bonne réponse est:',
            saveProgress: 'Sauvegarder les Progrès',
            viewReport: 'Voir le Rapport de Progrès',
            changeLanguage: 'Changer la Langue',
            changeLevel: 'Changer de Niveau',
            levelProgress: 'Progrès du Niveau',
            currentLevel: 'Niveau Actuel'
        },

        // Aperçu des progrès
        progress: {
            title: 'Aperçu des Progrès',
            learning: 'Apprentissage',
            developing: 'En Développement',
            mastered: 'Maîtrisé',
            solid: 'Solide',
            itemsCount: 'éléments',
            levelGoal: 'Objectif de Niveau',
            nextLevel: 'Niveau Suivant',
            recommendation: 'Recommandation'
        },

        // Étapes de maîtrise
        masteryStages: {
            learning: 'Apprentissage (0-50%)',
            developing: 'En Développement (51-70%)',
            mastered: 'Maîtrisé (71-85%)',
            solid: 'Solide (86%+)'
        },

        // Rapport de l'enseignant
        report: {
            title: 'Rapport de Progrès de l\'Étudiant',
            studentName: 'Nom de l\'Étudiant',
            currentLevel: 'Niveau CECR Actuel',
            overallProgress: 'Progrès Global',
            exercisesByLevel: 'Exercices par Niveau CECR',
            masteryByLevel: 'Maîtrise par Niveau',
            strengthsAndWeaknesses: 'Forces et Faiblesses',
            strengths: 'Forces',
            weaknesses: 'Faiblesses',
            recommendations: 'Recommandations pour l\'Enseignant',
            sessionHistory: 'Historique des Sessions',
            totalTime: 'Temps Total de Pratique',
            totalAttempts: 'Tentatives Totales',
            overallAccuracy: 'Précision Globale',
            lastSession: 'Dernière Session',
            exportReport: 'Exporter le Rapport',
            printReport: 'Imprimer le Rapport',
            closeReport: 'Fermer le Rapport',
            readyForNextLevel: 'Prêt pour le niveau suivant',
            needsMorePractice: 'A besoin de plus de pratique',
            excellentProgress: 'Excellent progrès',
            focusOn: 'Se concentrer sur',
            downloadPDF: 'Télécharger le Rapport PDF',
            downloadCSV: 'Télécharger les Données CSV'
        },

        // Messages
        messages: {
            progressSaved: 'Progrès sauvegardé avec succès!',
            noProgress: 'Aucune donnée de progrès disponible pour le moment.',
            levelUp: 'Félicitations! Vous êtes prêt pour le niveau suivant!',
            keepPracticing: 'Continuez à pratiquer pour améliorer votre maîtrise.',
            sessionResumed: 'Session reprise avec succès.',
            errorLoading: 'Erreur de chargement des données. Veuillez réessayer.'
        },

        // Badges de type d'exercice
        badges: {
            vocabulary: 'VOC',
            grammar: 'GRM',
            conjugation: 'CONJ',
            phrase: 'PHR'
        }
    },

    de: {
        // Willkommensbildschirm
        welcome: {
            title: 'Französisch Übungsapp',
            nameLabel: 'Dein Name:',
            namePlaceholder: 'Gib deinen Namen ein',
            startButton: 'Lernen Beginnen',
            resumeButton: 'Letzte Sitzung Fortsetzen',
            selectLevel: 'Wähle Dein Niveau:',
            languageLabel: 'Oberflächensprache:'
        },

        // GER Niveaus
        levels: {
            A1: 'A1 - Anfänger',
            A2: 'A2 - Grundlegend',
            B1: 'B1 - Mittelstufe',
            B2: 'B2 - Obere Mittelstufe',
            C1: 'C1 - Fortgeschritten',
            C2: 'C2 - Beherrschung'
        },

        // Niveau-Beschreibungen
        levelDescriptions: {
            A1: 'Kann vertraute alltägliche Ausdrücke verstehen und verwenden',
            A2: 'Kann in einfachen Routineaufgaben kommunizieren',
            B1: 'Kann mit den meisten Situationen auf Reisen umgehen',
            B2: 'Kann fließend mit Muttersprachlern interagieren',
            C1: 'Kann Sprache flexibel für soziale und berufliche Zwecke verwenden',
            C2: 'Kann praktisch alles verstehen, was gehört oder gelesen wird'
        },

        // Übungsoberfläche
        practice: {
            userInfo: 'Schüler',
            correct: 'Richtig',
            total: 'Gesamt',
            accuracy: 'Genauigkeit',
            exerciseType: 'Übungstyp:',
            allTypes: 'Alle Typen',
            vocabulary: 'Wortschatz',
            grammar: 'Grammatik',
            conjugation: 'Konjugation',
            answerPlaceholder: 'Gib deine Antwort ein...',
            checkAnswer: 'Antwort Überprüfen',
            nextQuestion: 'Nächste Frage',
            correctFeedback: 'Richtig!',
            incorrectFeedback: 'Falsch. Die richtige Antwort ist:',
            saveProgress: 'Fortschritt Speichern',
            viewReport: 'Fortschrittsbericht Anzeigen',
            changeLanguage: 'Sprache Ändern',
            changeLevel: 'Niveau Ändern',
            levelProgress: 'Niveaufortschritt',
            currentLevel: 'Aktuelles Niveau'
        },

        // Fortschrittsübersicht
        progress: {
            title: 'Fortschrittsübersicht',
            learning: 'Lernen',
            developing: 'Entwickeln',
            mastered: 'Beherrscht',
            solid: 'Solide',
            itemsCount: 'Artikel',
            levelGoal: 'Niveauziel',
            nextLevel: 'Nächstes Niveau',
            recommendation: 'Empfehlung'
        },

        // Beherrschungsstufen
        masteryStages: {
            learning: 'Lernen (0-50%)',
            developing: 'Entwickeln (51-70%)',
            mastered: 'Beherrscht (71-85%)',
            solid: 'Solide (86%+)'
        },

        // Lehrerbericht
        report: {
            title: 'Schüler Fortschrittsbericht',
            studentName: 'Schülername',
            currentLevel: 'Aktuelles GER-Niveau',
            overallProgress: 'Gesamtfortschritt',
            exercisesByLevel: 'Übungen nach GER-Niveau',
            masteryByLevel: 'Beherrschung nach Niveau',
            strengthsAndWeaknesses: 'Stärken und Schwächen',
            strengths: 'Stärken',
            weaknesses: 'Schwächen',
            recommendations: 'Empfehlungen für Lehrer',
            sessionHistory: 'Sitzungsverlauf',
            totalTime: 'Gesamte Übungszeit',
            totalAttempts: 'Gesamte Versuche',
            overallAccuracy: 'Gesamtgenauigkeit',
            lastSession: 'Letzte Sitzung',
            exportReport: 'Bericht Exportieren',
            printReport: 'Bericht Drucken',
            closeReport: 'Bericht Schließen',
            readyForNextLevel: 'Bereit für das nächste Niveau',
            needsMorePractice: 'Braucht mehr Übung',
            excellentProgress: 'Ausgezeichneter Fortschritt',
            focusOn: 'Konzentrieren auf',
            downloadPDF: 'PDF-Bericht Herunterladen',
            downloadCSV: 'CSV-Daten Herunterladen'
        },

        // Nachrichten
        messages: {
            progressSaved: 'Fortschritt erfolgreich gespeichert!',
            noProgress: 'Noch keine Fortschrittsdaten verfügbar.',
            levelUp: 'Herzlichen Glückwunsch! Du bist bereit für das nächste Niveau!',
            keepPracticing: 'Übe weiter, um deine Beherrschung zu verbessern.',
            sessionResumed: 'Sitzung erfolgreich fortgesetzt.',
            errorLoading: 'Fehler beim Laden der Daten. Bitte versuche es erneut.'
        },

        // Übungstyp-Abzeichen
        badges: {
            vocabulary: 'WRT',
            grammar: 'GRM',
            conjugation: 'KONJ',
            phrase: 'PHR'
        }
    }
};

/**
 * Current language (default: English)
 */
let currentLanguage = 'en';

/**
 * Get translated text
 */
function t(key) {
    const keys = key.split('.');
    let value = TRANSLATIONS[currentLanguage];

    for (const k of keys) {
        if (value && value[k]) {
            value = value[k];
        } else {
            console.warn(`Translation missing: ${key} for language ${currentLanguage}`);
            return key;
        }
    }

    return value;
}

/**
 * Set current language
 */
function setLanguage(lang) {
    if (TRANSLATIONS[lang]) {
        currentLanguage = lang;
        localStorage.setItem('appLanguage', lang);
        return true;
    }
    return false;
}

/**
 * Get current language
 */
function getCurrentLanguage() {
    return currentLanguage;
}

/**
 * Get available languages
 */
function getAvailableLanguages() {
    return [
        { code: 'en', name: 'English' },
        { code: 'nl', name: 'Nederlands' },
        { code: 'fr', name: 'Français' },
        { code: 'de', name: 'Deutsch' }
    ];
}

/**
 * Initialize language from localStorage
 */
function initLanguage() {
    const savedLang = localStorage.getItem('appLanguage');
    if (savedLang && TRANSLATIONS[savedLang]) {
        currentLanguage = savedLang;
    }
}

// Export for browser
if (typeof window !== 'undefined') {
    window.I18n = {
        t,
        setLanguage,
        getCurrentLanguage,
        getAvailableLanguages,
        initLanguage
    };
}

// Export for Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        t,
        setLanguage,
        getCurrentLanguage,
        getAvailableLanguages,
        initLanguage,
        TRANSLATIONS
    };
}
