/**
 * FRENCH PRACTICE APP - CONTENT DATABASE
 * Vocabulary and phrases for practice exercises
 */

const FRENCH_CONTENT = {
    // Level 1: Basic Vocabulary
    level1: {
        vocabulary: [
            // Greetings
            { id: 'v-1', english: 'hello', dutch: 'hallo', german: 'hallo', french: 'bonjour', category: 'greetings', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-2', english: 'goodbye', dutch: 'tot ziens', german: 'auf Wiedersehen', french: 'au revoir', category: 'greetings', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-3', english: 'thank you', dutch: 'dank je', german: 'danke', french: 'merci', category: 'greetings', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-4', english: 'please', dutch: 'alstublieft', german: 'bitte', french: 's\'il vous plaît', category: 'greetings', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-5', english: 'excuse me', dutch: 'pardon', german: 'entschuldigung', french: 'excusez-moi', category: 'greetings', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-6', english: 'yes', dutch: 'ja', german: 'ja', french: 'oui', category: 'greetings', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-7', english: 'no', dutch: 'nee', german: 'nein', french: 'non', category: 'greetings', difficulty: 1, cefrLevel: 'A1' },

            // Common Nouns - Food
            { id: 'v-8', english: 'water', dutch: 'water', german: 'Wasser', french: 'eau', category: 'food', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-9', english: 'bread', dutch: 'brood', german: 'Brot', french: 'pain', category: 'food', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-10', english: 'wine', dutch: 'wijn', german: 'Wein', french: 'vin', category: 'food', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-11', english: 'coffee', dutch: 'koffie', german: 'Kaffee', french: 'café', category: 'food', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-12', english: 'tea', dutch: 'thee', german: 'Tee', french: 'thé', category: 'food', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-13', english: 'milk', dutch: 'melk', german: 'Milch', french: 'lait', category: 'food', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-14', english: 'cheese', dutch: 'kaas', german: 'Käse', french: 'fromage', category: 'food', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-15', english: 'meat', dutch: 'vlees', german: 'Fleisch', french: 'viande', category: 'food', difficulty: 1, cefrLevel: 'A1' },

            // Family
            { id: 'v-16', english: 'mother', dutch: 'moeder', german: 'Mutter', french: 'mère', category: 'family', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-17', english: 'father', dutch: 'vader', german: 'Vater', french: 'père', category: 'family', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-18', english: 'sister', dutch: 'zus', german: 'Schwester', french: 'sœur', category: 'family', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-19', english: 'brother', dutch: 'broer', german: 'Bruder', french: 'frère', category: 'family', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-20', english: 'child', dutch: 'kind', german: 'Kind', french: 'enfant', category: 'family', difficulty: 1, cefrLevel: 'A1' },

            // Numbers
            { id: 'v-21', english: 'one', dutch: 'een', german: 'eins', french: 'un', category: 'numbers', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-22', english: 'two', dutch: 'twee', german: 'zwei', french: 'deux', category: 'numbers', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-23', english: 'three', dutch: 'drie', german: 'drei', french: 'trois', category: 'numbers', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-24', english: 'four', dutch: 'vier', german: 'vier', french: 'quatre', category: 'numbers', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-25', english: 'five', dutch: 'vijf', german: 'fünf', french: 'cinq', category: 'numbers', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-26', english: 'six', dutch: 'zes', german: 'sechs', french: 'six', category: 'numbers', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-27', english: 'seven', dutch: 'zeven', german: 'sieben', french: 'sept', category: 'numbers', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-28', english: 'eight', dutch: 'acht', german: 'acht', french: 'huit', category: 'numbers', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-29', english: 'nine', dutch: 'negen', german: 'neun', french: 'neuf', category: 'numbers', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-30', english: 'ten', dutch: 'tien', german: 'zehn', french: 'dix', category: 'numbers', difficulty: 1, cefrLevel: 'A1' },

            // Colors
            { id: 'v-31', english: 'red', dutch: 'rood', german: 'rot', french: 'rouge', category: 'colors', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-32', english: 'blue', dutch: 'blauw', german: 'blau', french: 'bleu', category: 'colors', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-33', english: 'green', dutch: 'groen', german: 'grün', french: 'vert', category: 'colors', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-34', english: 'yellow', dutch: 'geel', german: 'gelb', french: 'jaune', category: 'colors', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-35', english: 'black', dutch: 'zwart', german: 'schwarz', french: 'noir', category: 'colors', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-36', english: 'white', dutch: 'wit', german: 'weiß', french: 'blanc', category: 'colors', difficulty: 1, cefrLevel: 'A1' },

            // Common Verbs
            { id: 'v-37', english: 'to be', dutch: 'zijn', german: 'sein', french: 'être', category: 'verbs', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-38', english: 'to have', dutch: 'hebben', german: 'haben', french: 'avoir', category: 'verbs', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-39', english: 'to do', dutch: 'doen', german: 'machen', french: 'faire', category: 'verbs', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-40', english: 'to go', dutch: 'gaan', german: 'gehen', french: 'aller', category: 'verbs', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-41', english: 'to eat', dutch: 'eten', german: 'essen', french: 'manger', category: 'verbs', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-42', english: 'to drink', dutch: 'drinken', german: 'trinken', french: 'boire', category: 'verbs', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-43', english: 'to sleep', dutch: 'slapen', german: 'schlafen', french: 'dormir', category: 'verbs', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-44', english: 'to speak', dutch: 'spreken', german: 'sprechen', french: 'parler', category: 'verbs', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-45', english: 'to listen', dutch: 'luisteren', german: 'zuhören', french: 'écouter', category: 'verbs', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-46', english: 'to read', dutch: 'lezen', german: 'lesen', french: 'lire', category: 'verbs', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-47', english: 'to write', dutch: 'schrijven', german: 'schreiben', french: 'écrire', category: 'verbs', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-48', english: 'to see', dutch: 'zien', german: 'sehen', french: 'voir', category: 'verbs', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-49', english: 'to understand', dutch: 'begrijpen', german: 'verstehen', french: 'comprendre', category: 'verbs', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-50', english: 'to know', dutch: 'weten', german: 'wissen', french: 'savoir', category: 'verbs', difficulty: 1, cefrLevel: 'A1' },

            // Extended Numbers (11-100)
            { id: 'v-71', english: 'eleven', dutch: 'elf', german: 'elf', french: 'onze', category: 'numbers', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-72', english: 'twelve', dutch: 'twaalf', german: 'zwölf', french: 'douze', category: 'numbers', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-73', english: 'thirteen', dutch: 'dertien', german: 'dreizehn', french: 'treize', category: 'numbers', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-74', english: 'fourteen', dutch: 'veertien', german: 'vierzehn', french: 'quatorze', category: 'numbers', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-75', english: 'fifteen', dutch: 'vijftien', german: 'fünfzehn', french: 'quinze', category: 'numbers', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-76', english: 'sixteen', dutch: 'zestien', german: 'sechzehn', french: 'seize', category: 'numbers', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-77', english: 'seventeen', dutch: 'zeventien', german: 'siebzehn', french: 'dix-sept', category: 'numbers', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-78', english: 'eighteen', dutch: 'achttien', german: 'achtzehn', french: 'dix-huit', category: 'numbers', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-79', english: 'nineteen', dutch: 'negentien', german: 'neunzehn', french: 'dix-neuf', category: 'numbers', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-80', english: 'twenty', dutch: 'twintig', german: 'zwanzig', french: 'vingt', category: 'numbers', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-81', english: 'thirty', dutch: 'dertig', german: 'dreißig', french: 'trente', category: 'numbers', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-82', english: 'forty', dutch: 'veertig', german: 'vierzig', french: 'quarante', category: 'numbers', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-83', english: 'fifty', dutch: 'vijftig', german: 'fünfzig', french: 'cinquante', category: 'numbers', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-84', english: 'sixty', dutch: 'zestig', german: 'sechzig', french: 'soixante', category: 'numbers', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-85', english: 'seventy', dutch: 'zeventig', german: 'siebzig', french: 'soixante-dix', category: 'numbers', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-86', english: 'eighty', dutch: 'tachtig', german: 'achtzig', french: 'quatre-vingts', category: 'numbers', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-87', english: 'ninety', dutch: 'negentig', german: 'neunzig', french: 'quatre-vingt-dix', category: 'numbers', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-88', english: 'one hundred', dutch: 'honderd', german: 'hundert', french: 'cent', category: 'numbers', difficulty: 1, cefrLevel: 'A1' },

            // Days of the Week
            { id: 'v-89', english: 'Monday', dutch: 'maandag', german: 'Montag', french: 'lundi', category: 'time', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-90', english: 'Tuesday', dutch: 'dinsdag', german: 'Dienstag', french: 'mardi', category: 'time', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-91', english: 'Wednesday', dutch: 'woensdag', german: 'Mittwoch', french: 'mercredi', category: 'time', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-92', english: 'Thursday', dutch: 'donderdag', german: 'Donnerstag', french: 'jeudi', category: 'time', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-93', english: 'Friday', dutch: 'vrijdag', german: 'Freitag', french: 'vendredi', category: 'time', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-94', english: 'Saturday', dutch: 'zaterdag', german: 'Samstag', french: 'samedi', category: 'time', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-95', english: 'Sunday', dutch: 'zondag', german: 'Sonntag', french: 'dimanche', category: 'time', difficulty: 1, cefrLevel: 'A1' },

            // Months
            { id: 'v-96', english: 'January', dutch: 'januari', german: 'Januar', french: 'janvier', category: 'time', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-97', english: 'February', dutch: 'februari', german: 'Februar', french: 'février', category: 'time', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-98', english: 'March', dutch: 'maart', german: 'März', french: 'mars', category: 'time', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-99', english: 'April', dutch: 'april', german: 'April', french: 'avril', category: 'time', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-100', english: 'May', dutch: 'mei', german: 'Mai', french: 'mai', category: 'time', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-101', english: 'June', dutch: 'juni', german: 'Juni', french: 'juin', category: 'time', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-102', english: 'July', dutch: 'juli', german: 'Juli', french: 'juillet', category: 'time', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-103', english: 'August', dutch: 'augustus', german: 'August', french: 'août', category: 'time', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-104', english: 'September', dutch: 'september', german: 'September', french: 'septembre', category: 'time', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-105', english: 'October', dutch: 'oktober', german: 'Oktober', french: 'octobre', category: 'time', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-106', english: 'November', dutch: 'november', german: 'November', french: 'novembre', category: 'time', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-107', english: 'December', dutch: 'december', german: 'Dezember', french: 'décembre', category: 'time', difficulty: 1, cefrLevel: 'A1' },

            // Seasons
            { id: 'v-108', english: 'spring', dutch: 'lente', german: 'Frühling', french: 'printemps', category: 'time', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-109', english: 'summer', dutch: 'zomer', german: 'Sommer', french: 'été', category: 'time', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-110', english: 'autumn/fall', dutch: 'herfst', german: 'Herbst', french: 'automne', category: 'time', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-111', english: 'winter', dutch: 'winter', german: 'Winter', french: 'hiver', category: 'time', difficulty: 1, cefrLevel: 'A1' },

            // Time Expressions
            { id: 'v-112', english: 'hour', dutch: 'uur', german: 'Stunde', french: 'heure', category: 'time', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-113', english: 'minute', dutch: 'minuut', german: 'Minute', french: 'minute', category: 'time', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-114', english: 'second', dutch: 'seconde', german: 'Sekunde', french: 'seconde', category: 'time', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-115', english: 'day', dutch: 'dag', german: 'Tag', french: 'jour', category: 'time', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-116', english: 'week', dutch: 'week', german: 'Woche', french: 'semaine', category: 'time', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-117', english: 'month', dutch: 'maand', german: 'Monat', french: 'mois', category: 'time', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-118', english: 'year', dutch: 'jaar', german: 'Jahr', french: 'année', category: 'time', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-119', english: 'noon', dutch: 'middag', german: 'Mittag', french: 'midi', category: 'time', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-120', english: 'midnight', dutch: 'middernacht', german: 'Mitternacht', french: 'minuit', category: 'time', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-121', english: 'afternoon', dutch: 'namiddag', german: 'Nachmittag', french: 'après-midi', category: 'time', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-122', english: 'now', dutch: 'nu', german: 'jetzt', french: 'maintenant', category: 'time', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-123', english: 'always', dutch: 'altijd', german: 'immer', french: 'toujours', category: 'time', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-124', english: 'never', dutch: 'nooit', german: 'nie', french: 'jamais', category: 'time', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-125', english: 'often', dutch: 'vaak', german: 'oft', french: 'souvent', category: 'time', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-126', english: 'sometimes', dutch: 'soms', german: 'manchmal', french: 'quelquefois', category: 'time', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-127', english: 'early', dutch: 'vroeg', german: 'früh', french: 'tôt', category: 'time', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-128', english: 'late', dutch: 'laat', german: 'spät', french: 'tard', category: 'time', difficulty: 1, cefrLevel: 'A1' },

            // Extended Food Vocabulary
            { id: 'v-129', english: 'apple', dutch: 'appel', german: 'Apfel', french: 'pomme', category: 'food', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-130', english: 'orange', dutch: 'sinaasappel', german: 'Orange', french: 'orange', category: 'food', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-131', english: 'banana', dutch: 'banaan', german: 'Banane', french: 'banane', category: 'food', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-132', english: 'strawberry', dutch: 'aardbei', german: 'Erdbeere', french: 'fraise', category: 'food', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-133', english: 'grape', dutch: 'druif', german: 'Traube', french: 'raisin', category: 'food', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-134', english: 'pear', dutch: 'peer', german: 'Birne', french: 'poire', category: 'food', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-135', english: 'tomato', dutch: 'tomaat', german: 'Tomate', french: 'tomate', category: 'food', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-136', english: 'potato', dutch: 'aardappel', german: 'Kartoffel', french: 'pomme de terre', category: 'food', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-137', english: 'carrot', dutch: 'wortel', german: 'Karotte', french: 'carotte', category: 'food', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-138', english: 'lettuce', dutch: 'sla', german: 'Salat', french: 'laitue', category: 'food', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-139', english: 'onion', dutch: 'ui', german: 'Zwiebel', french: 'oignon', category: 'food', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-140', english: 'chicken', dutch: 'kip', german: 'Huhn', french: 'poulet', category: 'food', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-141', english: 'fish', dutch: 'vis', german: 'Fisch', french: 'poisson', category: 'food', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-142', english: 'egg', dutch: 'ei', german: 'Ei', french: 'œuf', category: 'food', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-143', english: 'rice', dutch: 'rijst', german: 'Reis', french: 'riz', category: 'food', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-144', english: 'pasta', dutch: 'pasta', german: 'Nudeln', french: 'pâtes', category: 'food', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-145', english: 'soup', dutch: 'soep', german: 'Suppe', french: 'soupe', category: 'food', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-146', english: 'salad', dutch: 'salade', german: 'Salat', french: 'salade', category: 'food', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-147', english: 'butter', dutch: 'boter', german: 'Butter', french: 'beurre', category: 'food', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-148', english: 'sugar', dutch: 'suiker', german: 'Zucker', french: 'sucre', category: 'food', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-149', english: 'salt', dutch: 'zout', german: 'Salz', french: 'sel', category: 'food', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-150', english: 'pepper', dutch: 'peper', german: 'Pfeffer', french: 'poivre', category: 'food', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-151', english: 'juice', dutch: 'sap', german: 'Saft', french: 'jus', category: 'food', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-152', english: 'beer', dutch: 'bier', german: 'Bier', french: 'bière', category: 'food', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-153', english: 'breakfast', dutch: 'ontbijt', german: 'Frühstück', french: 'petit-déjeuner', category: 'food', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-154', english: 'lunch', dutch: 'lunch', german: 'Mittagessen', french: 'déjeuner', category: 'food', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-155', english: 'dinner', dutch: 'avondeten', german: 'Abendessen', french: 'dîner', category: 'food', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-156', english: 'snack', dutch: 'tussendoortje', german: 'Snack', french: 'goûter', category: 'food', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-157', english: 'chocolate', dutch: 'chocolade', german: 'Schokolade', french: 'chocolat', category: 'food', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-158', english: 'cake', dutch: 'taart', german: 'Kuchen', french: 'gâteau', category: 'food', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-159', english: 'cookie', dutch: 'koekje', german: 'Keks', french: 'biscuit', category: 'food', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-160', english: 'ice cream', dutch: 'ijs', german: 'Eis', french: 'glace', category: 'food', difficulty: 1, cefrLevel: 'A1' },

            // House & Rooms
            { id: 'v-161', english: 'room', dutch: 'kamer', german: 'Zimmer', french: 'pièce', category: 'house', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-162', english: 'kitchen', dutch: 'keuken', german: 'Küche', french: 'cuisine', category: 'house', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-163', english: 'bedroom', dutch: 'slaapkamer', german: 'Schlafzimmer', french: 'chambre', category: 'house', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-164', english: 'bathroom', dutch: 'badkamer', german: 'Badezimmer', french: 'salle de bain', category: 'house', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-165', english: 'living room', dutch: 'woonkamer', german: 'Wohnzimmer', french: 'salon', category: 'house', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-166', english: 'dining room', dutch: 'eetkamer', german: 'Esszimmer', french: 'salle à manger', category: 'house', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-167', english: 'garden', dutch: 'tuin', german: 'Garten', french: 'jardin', category: 'house', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-168', english: 'door', dutch: 'deur', german: 'Tür', french: 'porte', category: 'house', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-169', english: 'window', dutch: 'raam', german: 'Fenster', french: 'fenêtre', category: 'house', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-170', english: 'table', dutch: 'tafel', german: 'Tisch', french: 'table', category: 'house', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-171', english: 'chair', dutch: 'stoel', german: 'Stuhl', french: 'chaise', category: 'house', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-172', english: 'bed', dutch: 'bed', german: 'Bett', french: 'lit', category: 'house', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-173', english: 'sofa', dutch: 'bank', german: 'Sofa', french: 'canapé', category: 'house', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-174', english: 'lamp', dutch: 'lamp', german: 'Lampe', french: 'lampe', category: 'house', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-175', english: 'television', dutch: 'televisie', german: 'Fernseher', french: 'télévision', category: 'house', difficulty: 1, cefrLevel: 'A1' },

            // Clothing
            { id: 'v-176', english: 'shirt', dutch: 'hemd', german: 'Hemd', french: 'chemise', category: 'clothing', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-177', english: 'pants', dutch: 'broek', german: 'Hose', french: 'pantalon', category: 'clothing', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-178', english: 'dress', dutch: 'jurk', german: 'Kleid', french: 'robe', category: 'clothing', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-179', english: 'skirt', dutch: 'rok', german: 'Rock', french: 'jupe', category: 'clothing', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-180', english: 'jacket', dutch: 'jas', german: 'Jacke', french: 'veste', category: 'clothing', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-181', english: 'coat', dutch: 'jas', german: 'Mantel', french: 'manteau', category: 'clothing', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-182', english: 'shoes', dutch: 'schoenen', german: 'Schuhe', french: 'chaussures', category: 'clothing', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-183', english: 'socks', dutch: 'sokken', german: 'Socken', french: 'chaussettes', category: 'clothing', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-184', english: 'hat', dutch: 'hoed', german: 'Hut', french: 'chapeau', category: 'clothing', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-185', english: 'scarf', dutch: 'sjaal', german: 'Schal', french: 'écharpe', category: 'clothing', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-186', english: 'gloves', dutch: 'handschoenen', german: 'Handschuhe', french: 'gants', category: 'clothing', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-187', english: 'sweater', dutch: 'trui', german: 'Pullover', french: 'pull', category: 'clothing', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-188', english: 't-shirt', dutch: 't-shirt', german: 'T-Shirt', french: 'tee-shirt', category: 'clothing', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-189', english: 'jeans', dutch: 'spijkerbroek', german: 'Jeans', french: 'jean', category: 'clothing', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-190', english: 'shorts', dutch: 'korte broek', german: 'Shorts', french: 'short', category: 'clothing', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-191', english: 'tie', dutch: 'das', german: 'Krawatte', french: 'cravate', category: 'clothing', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-192', english: 'belt', dutch: 'riem', german: 'Gürtel', french: 'ceinture', category: 'clothing', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-193', english: 'boots', dutch: 'laarzen', german: 'Stiefel', french: 'bottes', category: 'clothing', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-194', english: 'sandals', dutch: 'sandalen', german: 'Sandalen', french: 'sandales', category: 'clothing', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-195', english: 'glasses', dutch: 'bril', german: 'Brille', french: 'lunettes', category: 'clothing', difficulty: 1, cefrLevel: 'A1' },

            // Body Parts
            { id: 'v-196', english: 'head', dutch: 'hoofd', german: 'Kopf', french: 'tête', category: 'body', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-197', english: 'face', dutch: 'gezicht', german: 'Gesicht', french: 'visage', category: 'body', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-198', english: 'eye', dutch: 'oog', german: 'Auge', french: 'œil', category: 'body', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-199', english: 'nose', dutch: 'neus', german: 'Nase', french: 'nez', category: 'body', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-200', english: 'mouth', dutch: 'mond', german: 'Mund', french: 'bouche', category: 'body', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-201', english: 'ear', dutch: 'oor', german: 'Ohr', french: 'oreille', category: 'body', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-202', english: 'hair', dutch: 'haar', german: 'Haar', french: 'cheveux', category: 'body', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-203', english: 'hand', dutch: 'hand', german: 'Hand', french: 'main', category: 'body', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-204', english: 'finger', dutch: 'vinger', german: 'Finger', french: 'doigt', category: 'body', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-205', english: 'arm', dutch: 'arm', german: 'Arm', french: 'bras', category: 'body', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-206', english: 'leg', dutch: 'been', german: 'Bein', french: 'jambe', category: 'body', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-207', english: 'foot', dutch: 'voet', german: 'Fuß', french: 'pied', category: 'body', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-208', english: 'back', dutch: 'rug', german: 'Rücken', french: 'dos', category: 'body', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-209', english: 'stomach', dutch: 'buik', german: 'Bauch', french: 'ventre', category: 'body', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-210', english: 'heart', dutch: 'hart', german: 'Herz', french: 'cœur', category: 'body', difficulty: 1, cefrLevel: 'A1' },

            // Common Adjectives
            { id: 'v-211', english: 'happy', dutch: 'gelukkig', german: 'glücklich', french: 'heureux', category: 'adjectives', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-212', english: 'sad', dutch: 'verdrietig', german: 'traurig', french: 'triste', category: 'adjectives', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-213', english: 'tired', dutch: 'moe', german: 'müde', french: 'fatigué', category: 'adjectives', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-214', english: 'hungry', dutch: 'hongerig', german: 'hungrig', french: 'faim', category: 'adjectives', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-215', english: 'thirsty', dutch: 'dorstig', german: 'durstig', french: 'soif', category: 'adjectives', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-216', english: 'hot', dutch: 'heet', german: 'heiß', french: 'chaud', category: 'adjectives', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-217', english: 'cold', dutch: 'koud', german: 'kalt', french: 'froid', category: 'adjectives', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-218', english: 'old', dutch: 'oud', german: 'alt', french: 'vieux', category: 'adjectives', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-219', english: 'young', dutch: 'jong', german: 'jung', french: 'jeune', category: 'adjectives', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-220', english: 'new', dutch: 'nieuw', german: 'neu', french: 'nouveau', category: 'adjectives', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-221', english: 'old (things)', dutch: 'oud', german: 'alt', french: 'ancien', category: 'adjectives', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-222', english: 'fast', dutch: 'snel', german: 'schnell', french: 'rapide', category: 'adjectives', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-223', english: 'slow', dutch: 'langzaam', german: 'langsam', french: 'lent', category: 'adjectives', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-224', english: 'long', dutch: 'lang', german: 'lang', french: 'long', category: 'adjectives', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-225', english: 'short', dutch: 'kort', german: 'kurz', french: 'court', category: 'adjectives', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-226', english: 'tall', dutch: 'lang', german: 'groß', french: 'grand', category: 'adjectives', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-227', english: 'short (height)', dutch: 'klein', german: 'klein', french: 'petit', category: 'adjectives', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-228', english: 'strong', dutch: 'sterk', german: 'stark', french: 'fort', category: 'adjectives', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-229', english: 'weak', dutch: 'zwak', german: 'schwach', french: 'faible', category: 'adjectives', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-230', english: 'easy', dutch: 'makkelijk', german: 'leicht', french: 'facile', category: 'adjectives', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-231', english: 'difficult', dutch: 'moeilijk', german: 'schwierig', french: 'difficile', category: 'adjectives', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-232', english: 'clean', dutch: 'schoon', german: 'sauber', french: 'propre', category: 'adjectives', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-233', english: 'dirty', dutch: 'vuil', german: 'schmutzig', french: 'sale', category: 'adjectives', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-234', english: 'expensive', dutch: 'duur', german: 'teuer', french: 'cher', category: 'adjectives', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-235', english: 'cheap', dutch: 'goedkoop', german: 'billig', french: 'bon marché', category: 'adjectives', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-236', english: 'full', dutch: 'vol', german: 'voll', french: 'plein', category: 'adjectives', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-237', english: 'empty', dutch: 'leeg', german: 'leer', french: 'vide', category: 'adjectives', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-238', english: 'open', dutch: 'open', german: 'offen', french: 'ouvert', category: 'adjectives', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-239', english: 'closed', dutch: 'gesloten', german: 'geschlossen', french: 'fermé', category: 'adjectives', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-240', english: 'right (correct)', dutch: 'juist', german: 'richtig', french: 'correct', category: 'adjectives', difficulty: 1, cefrLevel: 'A1' },

            // School & Education
            { id: 'v-241', english: 'student', dutch: 'student', german: 'Student', french: 'étudiant', category: 'school', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-242', english: 'teacher', dutch: 'leraar', german: 'Lehrer', french: 'professeur', category: 'school', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-243', english: 'book', dutch: 'boek', german: 'Buch', french: 'livre', category: 'school', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-244', english: 'notebook', dutch: 'schrift', german: 'Heft', french: 'cahier', category: 'school', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-245', english: 'pen', dutch: 'pen', german: 'Stift', french: 'stylo', category: 'school', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-246', english: 'pencil', dutch: 'potlood', german: 'Bleistift', french: 'crayon', category: 'school', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-247', english: 'paper', dutch: 'papier', german: 'Papier', french: 'papier', category: 'school', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-248', english: 'desk', dutch: 'bureau', german: 'Schreibtisch', french: 'bureau', category: 'school', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-249', english: 'class', dutch: 'klas', german: 'Klasse', french: 'classe', category: 'school', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-250', english: 'lesson', dutch: 'les', german: 'Unterricht', french: 'leçon', category: 'school', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-251', english: 'homework', dutch: 'huiswerk', german: 'Hausaufgaben', french: 'devoirs', category: 'school', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-252', english: 'exam', dutch: 'examen', german: 'Prüfung', french: 'examen', category: 'school', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-253', english: 'question', dutch: 'vraag', german: 'Frage', french: 'question', category: 'school', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-254', english: 'answer', dutch: 'antwoord', german: 'Antwort', french: 'réponse', category: 'school', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-255', english: 'word', dutch: 'woord', german: 'Wort', french: 'mot', category: 'school', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-256', english: 'language', dutch: 'taal', german: 'Sprache', french: 'langue', category: 'school', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-257', english: 'number', dutch: 'getal', german: 'Zahl', french: 'nombre', category: 'school', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-258', english: 'letter', dutch: 'brief', german: 'Buchstabe', french: 'lettre', category: 'school', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-259', english: 'dictionary', dutch: 'woordenboek', german: 'Wörterbuch', french: 'dictionnaire', category: 'school', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-260', english: 'computer', dutch: 'computer', german: 'Computer', french: 'ordinateur', category: 'school', difficulty: 1, cefrLevel: 'A1' },

            // Weather
            { id: 'v-261', english: 'weather', dutch: 'weer', german: 'Wetter', french: 'temps', category: 'weather', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-262', english: 'sun', dutch: 'zon', german: 'Sonne', french: 'soleil', category: 'weather', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-263', english: 'rain', dutch: 'regen', german: 'Regen', french: 'pluie', category: 'weather', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-264', english: 'snow', dutch: 'sneeuw', german: 'Schnee', french: 'neige', category: 'weather', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-265', english: 'wind', dutch: 'wind', german: 'Wind', french: 'vent', category: 'weather', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-266', english: 'cloud', dutch: 'wolk', german: 'Wolke', french: 'nuage', category: 'weather', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-267', english: 'storm', dutch: 'storm', german: 'Sturm', french: 'orage', category: 'weather', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-268', english: 'temperature', dutch: 'temperatuur', german: 'Temperatur', french: 'température', category: 'weather', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-269', english: 'it\'s hot', french: 'il fait chaud', category: 'weather', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-270', english: 'it\'s cold', french: 'il fait froid', category: 'weather', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-271', english: 'it\'s raining', french: 'il pleut', category: 'weather', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-272', english: 'it\'s snowing', french: 'il neige', category: 'weather', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-273', english: 'it\'s sunny', french: 'il fait beau', category: 'weather', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-274', english: 'it\'s windy', french: 'il y a du vent', category: 'weather', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-275', english: 'it\'s cloudy', french: 'il y a des nuages', category: 'weather', difficulty: 1, cefrLevel: 'A1' },

            // Occupations
            { id: 'v-276', english: 'doctor', dutch: 'dokter', german: 'Arzt', french: 'médecin', category: 'occupations', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-277', english: 'nurse', dutch: 'verple egkundige', german: 'Krankenschwester', french: 'infirmier', category: 'occupations', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-278', english: 'police officer', dutch: 'politieagent', german: 'Polizist', french: 'policier', category: 'occupations', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-279', english: 'firefighter', dutch: 'brandweerman', german: 'Feuerwehrmann', french: 'pompier', category: 'occupations', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-280', english: 'lawyer', dutch: 'advocaat', german: 'Anwalt', french: 'avocat', category: 'occupations', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-281', english: 'engineer', dutch: 'ingenieur', german: 'Ingenieur', french: 'ingénieur', category: 'occupations', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-282', english: 'waiter', dutch: 'ober', german: 'Kellner', french: 'serveur', category: 'occupations', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-283', english: 'cook/chef', dutch: 'kok', german: 'Koch', french: 'cuisinier', category: 'occupations', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-284', english: 'driver', dutch: 'chauffeur', german: 'Fahrer', french: 'chauffeur', category: 'occupations', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-285', english: 'farmer', dutch: 'boer', german: 'Bauer', french: 'fermier', category: 'occupations', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-286', english: 'artist', dutch: 'kunstenaar', german: 'Künstler', french: 'artiste', category: 'occupations', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-287', english: 'musician', dutch: 'muzikant', german: 'Musiker', french: 'musicien', category: 'occupations', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-288', english: 'actor', dutch: 'acteur', german: 'Schauspieler', french: 'acteur', category: 'occupations', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-289', english: 'dentist', dutch: 'tandarts', german: 'Zahnarzt', french: 'dentiste', category: 'occupations', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-290', english: 'pharmacist', dutch: 'apotheker', german: 'Apotheker', french: 'pharmacien', category: 'occupations', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-291', english: 'banker', dutch: 'bankier', german: 'Banker', french: 'banquier', category: 'occupations', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-292', english: 'salesperson', dutch: 'verkoper', german: 'Verkäufer', french: 'vendeur', category: 'occupations', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-293', english: 'secretary', dutch: 'secretaresse', german: 'Sekretär', french: 'secrétaire', category: 'occupations', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-294', english: 'journalist', dutch: 'journalist', german: 'Journalist', french: 'journaliste', category: 'occupations', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-295', english: 'photographer', dutch: 'fotograaf', german: 'Fotograf', french: 'photographe', category: 'occupations', difficulty: 1, cefrLevel: 'A1' },
        ]
    },

    // Level 2: Intermediate Vocabulary
    level2: {
        vocabulary: [
            // Places
            { id: 'v-51', english: 'house', dutch: 'huis', german: 'Haus', french: 'maison', category: 'places', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-52', english: 'school', dutch: 'school', german: 'Schule', french: 'école', category: 'places', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-53', english: 'restaurant', dutch: 'restaurant', german: 'Restaurant', french: 'restaurant', category: 'places', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-54', english: 'hotel', dutch: 'hotel', german: 'Hotel', french: 'hôtel', category: 'places', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-55', english: 'hospital', dutch: 'ziekenhuis', german: 'Krankenhaus', french: 'hôpital', category: 'places', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-56', english: 'airport', dutch: 'luchthaven', german: 'Flughafen', french: 'aéroport', category: 'places', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-57', english: 'train station', dutch: 'treinstation', german: 'Bahnhof', french: 'gare', category: 'places', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-58', english: 'market', dutch: 'markt', german: 'Markt', french: 'marché', category: 'places', difficulty: 2, cefrLevel: 'A2' },

            // Time & Days
            { id: 'v-59', english: 'today', dutch: 'vandaag', german: 'heute', french: 'aujourd\'hui', category: 'time', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-60', english: 'tomorrow', dutch: 'morgen', german: 'morgen', french: 'demain', category: 'time', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-61', english: 'yesterday', dutch: 'gisteren', german: 'gestern', french: 'hier', category: 'time', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-62', english: 'morning', dutch: 'ochtend', german: 'Morgen', french: 'matin', category: 'time', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-63', english: 'evening', dutch: 'avond', german: 'Abend', french: 'soir', category: 'time', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-64', english: 'night', dutch: 'nacht', german: 'Nacht', french: 'nuit', category: 'time', difficulty: 2, cefrLevel: 'A2' },

            // Common Adjectives
            { id: 'v-65', english: 'big', dutch: 'groot', german: 'groß', french: 'grand', category: 'adjectives', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-66', english: 'small', dutch: 'klein', german: 'klein', french: 'petit', category: 'adjectives', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-67', english: 'good', dutch: 'goed', german: 'gut', french: 'bon', category: 'adjectives', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-68', english: 'bad', dutch: 'slecht', german: 'schlecht', french: 'mauvais', category: 'adjectives', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-69', english: 'beautiful', dutch: 'mooi', german: 'schön', french: 'beau', category: 'adjectives', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-70', english: 'ugly', dutch: 'lelijk', german: 'hässlich', french: 'laid', category: 'adjectives', difficulty: 2, cefrLevel: 'A2' },

            // Transportation
            { id: 'v-296', english: 'car', dutch: 'auto', german: 'Auto', french: 'voiture', category: 'transportation', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-297', english: 'bus', dutch: 'bus', german: 'Bus', french: 'bus', category: 'transportation', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-298', english: 'train', dutch: 'trein', german: 'Zug', french: 'train', category: 'transportation', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-299', english: 'plane', dutch: 'vliegtuig', german: 'Flugzeug', french: 'avion', category: 'transportation', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-300', english: 'bicycle', dutch: 'fiets', german: 'Fahrrad', french: 'vélo', category: 'transportation', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-301', english: 'motorcycle', dutch: 'motorfiets', german: 'Motorrad', french: 'moto', category: 'transportation', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-302', english: 'boat', dutch: 'boot', german: 'Boot', french: 'bateau', category: 'transportation', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-303', english: 'taxi', dutch: 'taxi', german: 'Taxi', french: 'taxi', category: 'transportation', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-304', english: 'metro/subway', dutch: 'metro', german: 'U-Bahn', french: 'métro', category: 'transportation', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-305', english: 'ticket', dutch: 'kaartje', german: 'Ticket', french: 'billet', category: 'transportation', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-306', english: 'station', dutch: 'station', german: 'Station', french: 'station', category: 'transportation', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-307', english: 'stop', dutch: 'halte', german: 'Halt', french: 'arrêt', category: 'transportation', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-308', english: 'driver', dutch: 'chauffeur', german: 'Fahrer', french: 'conducteur', category: 'transportation', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-309', english: 'passenger', dutch: 'passagier', german: 'Passagier', french: 'passager', category: 'transportation', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-310', english: 'departure', dutch: 'vertrek', german: 'Abfahrt', french: 'départ', category: 'transportation', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-311', english: 'arrival', dutch: 'aankomst', german: 'Ankunft', french: 'arrivée', category: 'transportation', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-312', english: 'delay', dutch: 'vertraging', german: 'Verspätung', french: 'retard', category: 'transportation', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-313', english: 'traffic', dutch: 'verkeer', german: 'Verkehr', french: 'circulation', category: 'transportation', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-314', english: 'parking', dutch: 'parkeren', german: 'Parken', french: 'parking', category: 'transportation', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-315', english: 'road', dutch: 'weg', german: 'Straße', french: 'route', category: 'transportation', difficulty: 2, cefrLevel: 'A2' },

            // Travel & Vacation
            { id: 'v-316', english: 'vacation', dutch: 'vakantie', german: 'Urlaub', french: 'vacances', category: 'travel', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-317', english: 'trip', dutch: 'reis', german: 'Reise', french: 'voyage', category: 'travel', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-318', english: 'tourist', dutch: 'toerist', german: 'Tourist', french: 'touriste', category: 'travel', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-319', english: 'passport', dutch: 'paspoort', german: 'Pass', french: 'passeport', category: 'travel', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-320', english: 'luggage', dutch: 'bagage', german: 'Gepäck', french: 'bagages', category: 'travel', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-321', english: 'suitcase', dutch: 'koffer', german: 'Koffer', french: 'valise', category: 'travel', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-322', english: 'map', dutch: 'kaart', german: 'Karte', french: 'carte', category: 'travel', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-323', english: 'guide', dutch: 'gids', german: 'Führer', french: 'guide', category: 'travel', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-324', english: 'museum', dutch: 'museum', german: 'Museum', french: 'musée', category: 'travel', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-325', english: 'monument', dutch: 'monument', german: 'Denkmal', french: 'monument', category: 'travel', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-326', english: 'beach', dutch: 'strand', german: 'Strand', french: 'plage', category: 'travel', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-327', english: 'mountain', dutch: 'berg', german: 'Berg', french: 'montagne', category: 'travel', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-328', english: 'lake', dutch: 'meer', german: 'See', french: 'lac', category: 'travel', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-329', english: 'river', dutch: 'rivier', german: 'Fluss', french: 'rivière', category: 'travel', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-330', english: 'sea', dutch: 'zee', german: 'Meer', french: 'mer', category: 'travel', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-331', english: 'country', dutch: 'land', german: 'Land', french: 'pays', category: 'travel', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-332', english: 'city', dutch: 'stad', german: 'Stadt', french: 'ville', category: 'travel', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-333', english: 'village', dutch: 'dorp', german: 'Dorf', french: 'village', category: 'travel', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-334', english: 'reservation', dutch: 'reservering', german: 'Reservierung', french: 'réservation', category: 'travel', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-335', english: 'camping', dutch: 'kamperen', german: 'Camping', french: 'camping', category: 'travel', difficulty: 2, cefrLevel: 'A2' },

            // Shopping & Money
            { id: 'v-336', english: 'shop/store', dutch: 'winkel', german: 'Laden', french: 'magasin', category: 'shopping', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-337', english: 'price', dutch: 'prijs', german: 'Preis', french: 'prix', category: 'shopping', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-338', english: 'money', dutch: 'geld', german: 'Geld', french: 'argent', category: 'shopping', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-339', english: 'euro', french: 'euro', category: 'shopping', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-340', english: 'cent', french: 'centime', category: 'shopping', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-341', english: 'cash', dutch: 'contant', german: 'Bargeld', french: 'espèces', category: 'shopping', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-342', english: 'credit card', dutch: 'creditcard', german: 'Kreditkarte', french: 'carte de crédit', category: 'shopping', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-343', english: 'receipt', dutch: 'bon', german: 'Quittung', french: 'reçu', category: 'shopping', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-344', english: 'discount', dutch: 'korting', german: 'Rabatt', french: 'réduction', category: 'shopping', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-345', english: 'sale', dutch: 'uitverkoop', german: 'Verkauf', french: 'soldes', category: 'shopping', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-346', english: 'customer', dutch: 'klant', german: 'Kunde', french: 'client', category: 'shopping', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-347', english: 'cashier', french: 'caissier', category: 'shopping', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-348', english: 'bag', french: 'sac', category: 'shopping', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-349', english: 'size', dutch: 'maat', german: 'Größe', french: 'taille', category: 'shopping', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-350', english: 'color', dutch: 'kleur', german: 'Farbe', french: 'couleur', category: 'shopping', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-351', english: 'quality', dutch: 'kwaliteit', german: 'Qualität', french: 'qualité', category: 'shopping', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-352', english: 'to buy', french: 'acheter', category: 'shopping', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-353', english: 'to sell', french: 'vendre', category: 'shopping', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-354', english: 'to cost', french: 'coûter', category: 'shopping', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-355', english: 'to pay', french: 'payer', category: 'shopping', difficulty: 2, cefrLevel: 'A2' },

            // Hobbies & Sports
            { id: 'v-356', english: 'hobby', french: 'passe-temps', category: 'hobbies', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-357', english: 'sport', dutch: 'sport', german: 'Sport', french: 'sport', category: 'hobbies', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-358', english: 'football/soccer', dutch: 'voetbal', german: 'Fußball', french: 'football', category: 'hobbies', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-359', english: 'basketball', dutch: 'basketbal', german: 'Basketball', french: 'basket-ball', category: 'hobbies', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-360', english: 'tennis', dutch: 'tennis', german: 'Tennis', french: 'tennis', category: 'hobbies', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-361', english: 'swimming', dutch: 'zwemmen', german: 'Schwimmen', french: 'natation', category: 'hobbies', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-362', english: 'running', dutch: 'hardlopen', german: 'Laufen', french: 'course', category: 'hobbies', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-363', english: 'cycling', dutch: 'fietsen', german: 'Radfahren', french: 'cyclisme', category: 'hobbies', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-364', english: 'skiing', dutch: 'skiën', german: 'Skifahren', french: 'ski', category: 'hobbies', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-365', english: 'dancing', dutch: 'dansen', german: 'Tanzen', french: 'danse', category: 'hobbies', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-366', english: 'music', dutch: 'muziek', german: 'Musik', french: 'musique', category: 'hobbies', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-367', english: 'guitar', dutch: 'gitaar', german: 'Gitarre', french: 'guitare', category: 'hobbies', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-368', english: 'piano', dutch: 'piano', german: 'Klavier', french: 'piano', category: 'hobbies', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-369', english: 'painting', dutch: 'schilderen', german: 'Malerei', french: 'peinture', category: 'hobbies', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-370', english: 'drawing', dutch: 'tekenen', german: 'Zeichnen', french: 'dessin', category: 'hobbies', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-371', english: 'photography', dutch: 'fotografie', german: 'Fotografie', french: 'photographie', category: 'hobbies', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-372', english: 'reading', dutch: 'lezen', german: 'Lesen', french: 'lecture', category: 'hobbies', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-373', english: 'writing', dutch: 'schrijven', german: 'Schreiben', french: 'écriture', category: 'hobbies', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-374', english: 'cooking', dutch: 'koken', german: 'Kochen', french: 'cuisine', category: 'hobbies', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-375', english: 'gardening', dutch: 'tuinieren', german: 'Gärtnern', french: 'jardinage', category: 'hobbies', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-376', english: 'game', dutch: 'spel', german: 'Spiel', french: 'jeu', category: 'hobbies', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-377', english: 'team', dutch: 'team', german: 'Team', french: 'équipe', category: 'hobbies', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-378', english: 'player', dutch: 'speler', german: 'Spieler', french: 'joueur', category: 'hobbies', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-379', english: 'match', dutch: 'wedstrijd', german: 'Spiel', french: 'match', category: 'hobbies', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-380', english: 'ball', dutch: 'bal', german: 'Ball', french: 'ballon', category: 'hobbies', difficulty: 2, cefrLevel: 'A2' },

            // Technology
            { id: 'v-381', english: 'phone', dutch: 'telefoon', german: 'Telefon', french: 'téléphone', category: 'technology', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-382', english: 'mobile phone', dutch: 'mobiele telefoon', german: 'Handy', french: 'portable', category: 'technology', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-383', english: 'internet', french: 'internet', category: 'technology', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-384', english: 'email', french: 'courriel', category: 'technology', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-385', english: 'website', french: 'site web', category: 'technology', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-386', english: 'message', dutch: 'bericht', german: 'Nachricht', french: 'message', category: 'technology', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-387', english: 'photo', dutch: 'foto', german: 'Foto', french: 'photo', category: 'technology', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-388', english: 'video', dutch: 'video', german: 'Video', french: 'vidéo', category: 'technology', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-389', english: 'screen', dutch: 'scherm', german: 'Bildschirm', french: 'écran', category: 'technology', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-390', english: 'keyboard', dutch: 'toetsenbord', german: 'Tastatur', french: 'clavier', category: 'technology', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-391', english: 'mouse', dutch: 'muis', german: 'Maus', french: 'souris', category: 'technology', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-392', english: 'printer', french: 'imprimante', category: 'technology', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-393', english: 'password', french: 'mot de passe', category: 'technology', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-394', english: 'to download', french: 'télécharger', category: 'technology', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-395', english: 'to send', french: 'envoyer', category: 'technology', difficulty: 2, cefrLevel: 'A2' },

            // Health & Medical
            { id: 'v-396', english: 'health', french: 'santé', category: 'health', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-397', english: 'sick', french: 'malade', category: 'health', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-398', english: 'pain', french: 'douleur', category: 'health', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-399', english: 'headache', french: 'mal de tête', category: 'health', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-400', english: 'fever', french: 'fièvre', category: 'health', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-401', english: 'cold (illness)', french: 'rhume', category: 'health', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-402', english: 'cough', french: 'toux', category: 'health', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-403', english: 'medicine', french: 'médicament', category: 'health', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-404', english: 'pill/tablet', french: 'comprimé', category: 'health', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-405', english: 'pharmacy', french: 'pharmacie', category: 'health', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-406', english: 'appointment', french: 'rendez-vous', category: 'health', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-407', english: 'patient', french: 'patient', category: 'health', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-408', english: 'treatment', french: 'traitement', category: 'health', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-409', english: 'injury', french: 'blessure', category: 'health', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-410', english: 'allergy', french: 'allergie', category: 'health', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-411', english: 'emergency', french: 'urgence', category: 'health', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-412', english: 'ambulance', french: 'ambulance', category: 'health', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-413', english: 'to hurt', french: 'faire mal', category: 'health', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-414', english: 'to feel', french: 'se sentir', category: 'health', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-415', english: 'to rest', french: 'se reposer', category: 'health', difficulty: 2, cefrLevel: 'A2' },

            // Animals
            { id: 'v-416', english: 'animal', french: 'animal', category: 'animals', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-417', english: 'dog', french: 'chien', category: 'animals', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-418', english: 'cat', french: 'chat', category: 'animals', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-419', english: 'bird', french: 'oiseau', category: 'animals', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-420', english: 'horse', french: 'cheval', category: 'animals', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-421', english: 'cow', french: 'vache', category: 'animals', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-422', english: 'pig', french: 'cochon', category: 'animals', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-423', english: 'sheep', french: 'mouton', category: 'animals', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-424', english: 'rabbit', french: 'lapin', category: 'animals', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-425', english: 'mouse', dutch: 'muis', german: 'Maus', french: 'souris', category: 'animals', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-426', english: 'lion', french: 'lion', category: 'animals', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-427', english: 'elephant', french: 'éléphant', category: 'animals', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-428', english: 'monkey', french: 'singe', category: 'animals', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-429', english: 'bear', french: 'ours', category: 'animals', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-430', english: 'wolf', french: 'loup', category: 'animals', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-431', english: 'fox', french: 'renard', category: 'animals', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-432', english: 'deer', french: 'cerf', category: 'animals', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-433', english: 'snake', french: 'serpent', category: 'animals', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-434', english: 'frog', french: 'grenouille', category: 'animals', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-435', english: 'butterfly', french: 'papillon', category: 'animals', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-436', english: 'bee', french: 'abeille', category: 'animals', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-437', english: 'spider', french: 'araignée', category: 'animals', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-438', english: 'pet', french: 'animal de compagnie', category: 'animals', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-439', english: 'zoo', french: 'zoo', category: 'animals', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-440', english: 'wild', french: 'sauvage', category: 'animals', difficulty: 2, cefrLevel: 'A2' },

            // Directions & Locations
            { id: 'v-441', english: 'direction', french: 'direction', category: 'directions', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-442', english: 'left', french: 'gauche', category: 'directions', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-443', english: 'right', french: 'droite', category: 'directions', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-444', english: 'straight', french: 'tout droit', category: 'directions', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-445', english: 'north', french: 'nord', category: 'directions', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-446', english: 'south', french: 'sud', category: 'directions', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-447', english: 'east', french: 'est', category: 'directions', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-448', english: 'west', french: 'ouest', category: 'directions', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-449', english: 'near', french: 'près', category: 'directions', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-450', english: 'far', french: 'loin', category: 'directions', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-451', english: 'here', french: 'ici', category: 'directions', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-452', english: 'there', french: 'là', category: 'directions', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-453', english: 'in front of', french: 'devant', category: 'directions', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-454', english: 'behind', french: 'derrière', category: 'directions', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-455', english: 'next to', french: 'à côté de', category: 'directions', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-456', english: 'between', french: 'entre', category: 'directions', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-457', english: 'above', french: 'au-dessus', category: 'directions', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-458', english: 'below', french: 'en dessous', category: 'directions', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-459', english: 'inside', french: 'à l\'intérieur', category: 'directions', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-460', english: 'outside', french: 'à l\'extérieur', category: 'directions', difficulty: 2, cefrLevel: 'A2' },

            // Emotions
            { id: 'v-461', english: 'emotion', french: 'émotion', category: 'emotions', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-462', english: 'love', french: 'amour', category: 'emotions', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-463', english: 'hate', french: 'haine', category: 'emotions', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-464', english: 'joy', french: 'joie', category: 'emotions', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-465', english: 'fear', french: 'peur', category: 'emotions', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-466', english: 'anger', french: 'colère', category: 'emotions', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-467', english: 'surprise', french: 'surprise', category: 'emotions', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-468', english: 'worry', french: 'inquiétude', category: 'emotions', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-469', english: 'excited', french: 'excité', category: 'emotions', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-470', english: 'bored', french: 'ennuyé', category: 'emotions', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-471', english: 'nervous', french: 'nerveux', category: 'emotions', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-472', english: 'calm', french: 'calme', category: 'emotions', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-473', english: 'angry', french: 'en colère', category: 'emotions', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-474', english: 'worried', french: 'inquiet', category: 'emotions', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-475', english: 'scared', french: 'effrayé', category: 'emotions', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-476', english: 'proud', french: 'fier', category: 'emotions', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-477', english: 'jealous', french: 'jaloux', category: 'emotions', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-478', english: 'ashamed', french: 'honteux', category: 'emotions', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-479', english: 'grateful', french: 'reconnaissant', category: 'emotions', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-480', english: 'disappointed', french: 'déçu', category: 'emotions', difficulty: 2, cefrLevel: 'A2' },

            // Personality Traits
            { id: 'v-481', english: 'nice/kind', french: 'gentil', category: 'personality', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-482', english: 'mean', french: 'méchant', category: 'personality', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-483', english: 'friendly', french: 'amical', category: 'personality', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-484', english: 'shy', french: 'timide', category: 'personality', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-485', english: 'brave', french: 'courageux', category: 'personality', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-486', english: 'smart/intelligent', french: 'intelligent', category: 'personality', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-487', english: 'funny', french: 'drôle', category: 'personality', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-488', english: 'serious', french: 'sérieux', category: 'personality', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-489', english: 'lazy', french: 'paresseux', category: 'personality', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-490', english: 'hardworking', french: 'travailleur', category: 'personality', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-491', english: 'honest', french: 'honnête', category: 'personality', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-492', english: 'generous', french: 'généreux', category: 'personality', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-493', english: 'selfish', french: 'égoïste', category: 'personality', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-494', english: 'polite', french: 'poli', category: 'personality', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-495', english: 'rude', french: 'impoli', category: 'personality', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-496', english: 'patient', french: 'patient', category: 'personality', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-497', english: 'impatient', french: 'impatient', category: 'personality', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-498', english: 'optimistic', french: 'optimiste', category: 'personality', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-499', english: 'pessimistic', french: 'pessimiste', category: 'personality', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-500', english: 'confident', french: 'confiant', category: 'personality', difficulty: 2, cefrLevel: 'A2' },
        ]
    },

    // Level 3: B1 Upper Intermediate Vocabulary
    level3: {
        vocabulary: [
            // Abstract Concepts
            { id: 'v-501', english: 'idea', dutch: 'idee', german: 'Idee', french: 'idée', category: 'abstract', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-502', english: 'opinion', dutch: 'mening', german: 'Meinung', french: 'opinion', category: 'abstract', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-503', english: 'theory', dutch: 'theorie', german: 'Theorie', french: 'théorie', category: 'abstract', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-504', english: 'concept', dutch: 'concept', german: 'Konzept', french: 'concept', category: 'abstract', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-505', english: 'reality', dutch: 'realiteit', german: 'Realität', french: 'réalité', category: 'abstract', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-506', english: 'truth', dutch: 'waarheid', german: 'Wahrheit', french: 'vérité', category: 'abstract', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-507', english: 'freedom', dutch: 'vrijheid', german: 'Freiheit', french: 'liberté', category: 'abstract', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-508', english: 'justice', dutch: 'gerechtigheid', german: 'Gerechtigkeit', french: 'justice', category: 'abstract', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-509', english: 'equality', dutch: 'gelijkheid', german: 'Gleichheit', french: 'égalité', category: 'abstract', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-510', english: 'democracy', dutch: 'democratie', german: 'Demokratie', french: 'démocratie', category: 'abstract', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-511', english: 'responsibility', dutch: 'verantwoordelijkheid', german: 'Verantwortung', french: 'responsabilité', category: 'abstract', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-512', english: 'experience', dutch: 'ervaring', german: 'Erfahrung', french: 'expérience', category: 'abstract', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-513', english: 'knowledge', dutch: 'kennis', german: 'Wissen', french: 'connaissance', category: 'abstract', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-514', english: 'wisdom', dutch: 'wijsheid', german: 'Weisheit', french: 'sagesse', category: 'abstract', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-515', english: 'imagination', dutch: 'verbeelding', german: 'Fantasie', french: 'imagination', category: 'abstract', difficulty: 3, cefrLevel: 'B1' },

            // Business & Work
            { id: 'v-516', english: 'company', dutch: 'bedrijf', german: 'Firma', french: 'entreprise', category: 'business', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-517', english: 'employee', dutch: 'werknemer', german: 'Angestellter', french: 'employé', category: 'business', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-518', english: 'employer', dutch: 'werkgever', german: 'Arbeitgeber', french: 'employeur', category: 'business', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-519', english: 'manager', dutch: 'manager', german: 'Manager', french: 'directeur', category: 'business', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-520', english: 'boss', dutch: 'baas', german: 'Chef', french: 'patron', category: 'business', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-521', english: 'colleague', dutch: 'collega', german: 'Kollege', french: 'collègue', category: 'business', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-522', english: 'meeting', dutch: 'vergadering', german: 'Besprechung', french: 'réunion', category: 'business', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-523', english: 'project', dutch: 'project', german: 'Projekt', french: 'projet', category: 'business', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-524', english: 'deadline', dutch: 'deadline', german: 'Frist', french: 'date limite', category: 'business', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-525', english: 'contract', dutch: 'contract', german: 'Vertrag', french: 'contrat', category: 'business', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-526', english: 'salary', dutch: 'salaris', german: 'Gehalt', french: 'salaire', category: 'business', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-527', english: 'budget', dutch: 'budget', german: 'Budget', french: 'budget', category: 'business', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-528', english: 'profit', dutch: 'winst', german: 'Gewinn', french: 'bénéfice', category: 'business', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-529', english: 'loss', dutch: 'verlies', german: 'Verlust', french: 'perte', category: 'business', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-530', english: 'market', dutch: 'markt', german: 'Markt', french: 'marché', category: 'business', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-531', english: 'competition', dutch: 'concurrentie', german: 'Wettbewerb', french: 'concurrence', category: 'business', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-532', english: 'strategy', dutch: 'strategie', german: 'Strategie', french: 'stratégie', category: 'business', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-533', english: 'goal', dutch: 'doel', german: 'Ziel', french: 'objectif', category: 'business', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-534', english: 'achievement', dutch: 'prestatie', german: 'Leistung', french: 'réalisation', category: 'business', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-535', english: 'challenge', dutch: 'uitdaging', german: 'Herausforderung', french: 'défi', category: 'business', difficulty: 3, cefrLevel: 'B1' },

            // Politics & Society
            { id: 'v-536', english: 'government', dutch: 'regering', german: 'Regierung', french: 'gouvernement', category: 'politics', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-537', english: 'president', dutch: 'president', german: 'Präsident', french: 'président', category: 'politics', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-538', english: 'minister', dutch: 'minister', german: 'Minister', french: 'ministre', category: 'politics', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-539', english: 'citizen', dutch: 'burger', german: 'Bürger', french: 'citoyen', category: 'politics', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-540', english: 'vote', dutch: 'stem', german: 'Stimme', french: 'vote', category: 'politics', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-541', english: 'election', dutch: 'verkiezing', german: 'Wahl', french: 'élection', category: 'politics', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-542', english: 'law', dutch: 'wet', german: 'Gesetz', french: 'loi', category: 'politics', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-543', english: 'parliament', dutch: 'parlement', german: 'Parlament', french: 'parlement', category: 'politics', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-544', english: 'party (political)', dutch: 'partij', german: 'Partei', french: 'parti', category: 'politics', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-545', english: 'policy', dutch: 'beleid', german: 'Politik', french: 'politique', category: 'politics', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-546', english: 'society', dutch: 'maatschappij', german: 'Gesellschaft', french: 'société', category: 'politics', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-547', english: 'community', dutch: 'gemeenschap', german: 'Gemeinschaft', french: 'communauté', category: 'politics', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-548', english: 'public', dutch: 'publiek', german: 'öffentlich', french: 'public', category: 'politics', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-549', english: 'private', dutch: 'privé', german: 'privat', french: 'privé', category: 'politics', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-550', english: 'rights', dutch: 'rechten', german: 'Rechte', french: 'droits', category: 'politics', difficulty: 3, cefrLevel: 'B1' },

            // Environment
            { id: 'v-551', english: 'environment', dutch: 'milieu', german: 'Umwelt', french: 'environnement', category: 'environment', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-552', english: 'nature', dutch: 'natuur', german: 'Natur', french: 'nature', category: 'environment', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-553', english: 'climate', dutch: 'klimaat', german: 'Klima', french: 'climat', category: 'environment', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-554', english: 'pollution', dutch: 'vervuiling', german: 'Verschmutzung', french: 'pollution', category: 'environment', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-555', english: 'recycling', dutch: 'recycling', german: 'Recycling', french: 'recyclage', category: 'environment', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-556', english: 'waste', dutch: 'afval', german: 'Abfall', french: 'déchets', category: 'environment', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-557', english: 'energy', dutch: 'energie', german: 'Energie', french: 'énergie', category: 'environment', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-558', english: 'renewable', dutch: 'hernieuwbaar', german: 'erneuerbar', french: 'renouvelable', category: 'environment', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-559', english: 'sustainable', dutch: 'duurzaam', german: 'nachhaltig', french: 'durable', category: 'environment', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-560', english: 'global warming', dutch: 'opwarming van de aarde', german: 'globale Erwärmung', french: 'réchauffement climatique', category: 'environment', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-561', english: 'endangered species', dutch: 'bedreigde soort', german: 'gefährdete Art', french: 'espèce en danger', category: 'environment', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-562', english: 'conservation', dutch: 'bescherming', german: 'Erhaltung', french: 'conservation', category: 'environment', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-563', english: 'forest', dutch: 'bos', german: 'Wald', french: 'forêt', category: 'environment', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-564', english: 'planet', dutch: 'planeet', german: 'Planet', french: 'planète', category: 'environment', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-565', english: 'earth', dutch: 'aarde', german: 'Erde', french: 'terre', category: 'environment', difficulty: 3, cefrLevel: 'B1' },

            // Media & Entertainment
            { id: 'v-566', english: 'film/movie', dutch: 'film', german: 'Film', french: 'film', category: 'media', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-567', english: 'actor/actress', dutch: 'acteur/actrice', german: 'Schauspieler', french: 'acteur/actrice', category: 'media', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-568', english: 'director', dutch: 'regisseur', german: 'Regisseur', french: 'réalisateur', category: 'media', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-569', english: 'novel', dutch: 'roman', german: 'Roman', french: 'roman', category: 'media', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-570', english: 'author/writer', dutch: 'auteur/schrijver', german: 'Autor', french: 'auteur/écrivain', category: 'media', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-571', english: 'newspaper', dutch: 'krant', german: 'Zeitung', french: 'journal', category: 'media', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-572', english: 'article', dutch: 'artikel', german: 'Artikel', french: 'article', category: 'media', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-573', english: 'news', dutch: 'nieuws', german: 'Nachrichten', french: 'nouvelles', category: 'media', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-574', english: 'channel', dutch: 'kanaal', german: 'Kanal', french: 'chaîne', category: 'media', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-575', english: 'program', dutch: 'programma', german: 'Programm', french: 'programme', category: 'media', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-576', english: 'concert', dutch: 'concert', german: 'Konzert', french: 'concert', category: 'media', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-577', english: 'theater', dutch: 'theater', german: 'Theater', french: 'théâtre', category: 'media', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-578', english: 'play', dutch: 'toneelstuk', german: 'Theaterstück', french: 'pièce', category: 'media', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-579', english: 'exhibition', dutch: 'tentoonstelling', german: 'Ausstellung', french: 'exposition', category: 'media', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-580', english: 'performance', dutch: 'voorstelling', german: 'Aufführung', french: 'représentation', category: 'media', difficulty: 3, cefrLevel: 'B1' },

            // Education & Learning
            { id: 'v-581', english: 'education', dutch: 'onderwijs', german: 'Bildung', french: 'éducation', category: 'education', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-582', english: 'university', dutch: 'universiteit', german: 'Universität', french: 'université', category: 'education', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-583', english: 'degree', dutch: 'diploma', german: 'Abschluss', french: 'diplôme', category: 'education', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-584', english: 'course', dutch: 'cursus', german: 'Kurs', french: 'cours', category: 'education', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-585', english: 'subject', dutch: 'vak', german: 'Fach', french: 'matière', category: 'education', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-586', english: 'research', dutch: 'onderzoek', german: 'Forschung', french: 'recherche', category: 'education', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-587', english: 'professor', dutch: 'professor', german: 'Professor', french: 'professeur', category: 'education', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-588', english: 'scholarship', dutch: 'beurs', german: 'Stipendium', french: 'bourse', category: 'education', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-589', english: 'grade', dutch: 'cijfer', german: 'Note', french: 'note', category: 'education', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-590', english: 'certificate', dutch: 'certificaat', german: 'Zertifikat', french: 'certificat', category: 'education', difficulty: 3, cefrLevel: 'B1' },

            // Advanced Adjectives
            { id: 'v-591', english: 'necessary', dutch: 'noodzakelijk', german: 'notwendig', french: 'nécessaire', category: 'adjectives', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-592', english: 'impossible', dutch: 'onmogelijk', german: 'unmöglich', french: 'impossible', category: 'adjectives', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-593', english: 'possible', dutch: 'mogelijk', german: 'möglich', french: 'possible', category: 'adjectives', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-594', english: 'important', dutch: 'belangrijk', german: 'wichtig', french: 'important', category: 'adjectives', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-595', english: 'effective', dutch: 'effectief', german: 'wirksam', french: 'efficace', category: 'adjectives', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-596', english: 'useful', dutch: 'nuttig', german: 'nützlich', french: 'utile', category: 'adjectives', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-597', english: 'useless', dutch: 'nutteloos', german: 'nutzlos', french: 'inutile', category: 'adjectives', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-598', english: 'careful', dutch: 'voorzichtig', german: 'vorsichtig', french: 'prudent', category: 'adjectives', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-599', english: 'reasonable', dutch: 'redelijk', german: 'vernünftig', french: 'raisonnable', category: 'adjectives', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-600', english: 'available', dutch: 'beschikbaar', german: 'verfügbar', french: 'disponible', category: 'adjectives', difficulty: 3, cefrLevel: 'B1' },

            // Cooking & Kitchen
            { id: 'v-2001', english: 'recipe', dutch: 'recept', german: 'Rezept', french: 'recette', category: 'cooking', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-2002', english: 'ingredient', dutch: 'ingrediënt', german: 'Zutat', french: 'ingrédient', category: 'cooking', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-2003', english: 'oven', dutch: 'oven', german: 'Ofen', french: 'four', category: 'cooking', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-2004', english: 'pan', dutch: 'pan', german: 'Pfanne', french: 'poêle', category: 'cooking', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-2005', english: 'pot', dutch: 'pot', german: 'Topf', french: 'casserole', category: 'cooking', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-2006', english: 'knife', dutch: 'mes', german: 'Messer', french: 'couteau', category: 'cooking', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-2007', english: 'spoon', dutch: 'lepel', german: 'Löffel', french: 'cuillère', category: 'cooking', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-2008', english: 'fork', dutch: 'vork', german: 'Gabel', french: 'fourchette', category: 'cooking', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-2009', english: 'plate', dutch: 'bord', german: 'Teller', french: 'assiette', category: 'cooking', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-2010', english: 'bowl', dutch: 'kom', german: 'Schüssel', french: 'bol', category: 'cooking', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-2011', english: 'to cook', dutch: 'koken', german: 'kochen', french: 'cuisiner', category: 'cooking', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-2012', english: 'to bake', dutch: 'bakken', german: 'backen', french: 'cuire au four', category: 'cooking', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-2013', english: 'to fry', dutch: 'bakken', german: 'braten', french: 'frire', category: 'cooking', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-2014', english: 'to boil', dutch: 'koken', german: 'kochen', french: 'bouillir', category: 'cooking', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-2015', english: 'to cut', dutch: 'snijden', german: 'schneiden', french: 'couper', category: 'cooking', difficulty: 3, cefrLevel: 'B1' },

            // Household Items
            { id: 'v-2016', english: 'furniture', dutch: 'meubels', german: 'Möbel', french: 'meubles', category: 'household', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-2017', english: 'sofa', dutch: 'bank', german: 'Sofa', french: 'canapé', category: 'household', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-2018', english: 'armchair', dutch: 'fauteuil', german: 'Sessel', french: 'fauteuil', category: 'household', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-2019', english: 'shelf', dutch: 'plank', german: 'Regal', french: 'étagère', category: 'household', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-2020', english: 'drawer', dutch: 'lade', german: 'Schublade', french: 'tiroir', category: 'household', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-2021', english: 'curtain', dutch: 'gordijn', german: 'Vorhang', french: 'rideau', category: 'household', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-2022', english: 'lamp', dutch: 'lamp', german: 'Lampe', french: 'lampe', category: 'household', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-2023', english: 'mirror', dutch: 'spiegel', german: 'Spiegel', french: 'miroir', category: 'household', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-2024', english: 'rug', dutch: 'tapijt', german: 'Teppich', french: 'tapis', category: 'household', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-2025', english: 'pillow', dutch: 'kussen', german: 'Kissen', french: 'oreiller', category: 'household', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-2026', english: 'blanket', dutch: 'deken', german: 'Decke', french: 'couverture', category: 'household', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-2027', english: 'towel', dutch: 'handdoek', german: 'Handtuch', french: 'serviette', category: 'household', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-2028', english: 'vacuum cleaner', dutch: 'stofzuiger', german: 'Staubsauger', french: 'aspirateur', category: 'household', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-2029', english: 'iron', dutch: 'strijkijzer', german: 'Bügeleisen', french: 'fer à repasser', category: 'household', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-2030', english: 'washing machine', dutch: 'wasmachine', german: 'Waschmaschine', french: 'lave-linge', category: 'household', difficulty: 3, cefrLevel: 'B1' },

            // Technology
            { id: 'v-2031', english: 'computer', dutch: 'computer', german: 'Computer', french: 'ordinateur', category: 'technology', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-2032', english: 'laptop', dutch: 'laptop', german: 'Laptop', french: 'ordinateur portable', category: 'technology', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-2033', english: 'screen', dutch: 'scherm', german: 'Bildschirm', french: 'écran', category: 'technology', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-2034', english: 'keyboard', dutch: 'toetsenbord', german: 'Tastatur', french: 'clavier', category: 'technology', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-2035', english: 'mouse', dutch: 'muis', german: 'Maus', french: 'souris', category: 'technology', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-2036', english: 'printer', dutch: 'printer', german: 'Drucker', french: 'imprimante', category: 'technology', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-2037', english: 'internet', dutch: 'internet', german: 'Internet', french: 'internet', category: 'technology', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-2038', english: 'website', dutch: 'website', german: 'Website', french: 'site web', category: 'technology', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-2039', english: 'email', dutch: 'e-mail', german: 'E-Mail', french: 'courriel', category: 'technology', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-2040', english: 'password', dutch: 'wachtwoord', german: 'Passwort', french: 'mot de passe', category: 'technology', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-2041', english: 'software', dutch: 'software', german: 'Software', french: 'logiciel', category: 'technology', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-2042', english: 'application', dutch: 'applicatie', german: 'Anwendung', french: 'application', category: 'technology', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-2043', english: 'to download', dutch: 'downloaden', german: 'herunterladen', french: 'télécharger', category: 'technology', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-2044', english: 'to upload', dutch: 'uploaden', german: 'hochladen', french: 'téléverser', category: 'technology', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-2045', english: 'to connect', dutch: 'verbinden', german: 'verbinden', french: 'connecter', category: 'technology', difficulty: 3, cefrLevel: 'B1' },

            // Daily Activities
            { id: 'v-2046', english: 'routine', dutch: 'routine', german: 'Routine', french: 'routine', category: 'daily', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-2047', english: 'to wake up', dutch: 'wakker worden', german: 'aufwachen', french: 'se réveiller', category: 'daily', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-2048', english: 'to get dressed', dutch: 'zich aankleden', german: 'sich anziehen', french: 's\'habiller', category: 'daily', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-2049', english: 'to brush teeth', dutch: 'tanden poetsen', german: 'Zähne putzen', french: 'se brosser les dents', category: 'daily', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-2050', english: 'to shower', dutch: 'douchen', german: 'duschen', french: 'se doucher', category: 'daily', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-2051', english: 'to have breakfast', dutch: 'ontbijten', german: 'frühstücken', french: 'prendre le petit-déjeuner', category: 'daily', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-2052', english: 'to commute', dutch: 'pendelen', german: 'pendeln', french: 'faire la navette', category: 'daily', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-2053', english: 'to relax', dutch: 'ontspannen', german: 'entspannen', french: 'se détendre', category: 'daily', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-2054', english: 'to exercise', dutch: 'sporten', german: 'trainieren', french: 'faire de l\'exercice', category: 'daily', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-2055', english: 'to clean', dutch: 'schoonmaken', german: 'putzen', french: 'nettoyer', category: 'daily', difficulty: 3, cefrLevel: 'B1' },

            // Health & Body
            { id: 'v-2056', english: 'health', dutch: 'gezondheid', german: 'Gesundheit', french: 'santé', category: 'health', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-2057', english: 'illness', dutch: 'ziekte', german: 'Krankheit', french: 'maladie', category: 'health', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-2058', english: 'pain', dutch: 'pijn', german: 'Schmerz', french: 'douleur', category: 'health', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-2059', english: 'headache', dutch: 'hoofdpijn', german: 'Kopfschmerzen', french: 'mal de tête', category: 'health', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-2060', english: 'fever', dutch: 'koorts', german: 'Fieber', french: 'fièvre', category: 'health', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-2061', english: 'cough', dutch: 'hoest', german: 'Husten', french: 'toux', category: 'health', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-2062', english: 'medicine', dutch: 'medicijn', german: 'Medizin', french: 'médicament', category: 'health', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-2063', english: 'doctor', dutch: 'dokter', german: 'Arzt', french: 'médecin', category: 'health', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-2064', english: 'hospital', dutch: 'ziekenhuis', german: 'Krankenhaus', french: 'hôpital', category: 'health', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-2065', english: 'appointment', dutch: 'afspraak', german: 'Termin', french: 'rendez-vous', category: 'health', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-2066', english: 'shoulder', dutch: 'schouder', german: 'Schulter', french: 'épaule', category: 'body', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-2067', english: 'elbow', dutch: 'elleboog', german: 'Ellbogen', french: 'coude', category: 'body', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-2068', english: 'wrist', dutch: 'pols', german: 'Handgelenk', french: 'poignet', category: 'body', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-2069', english: 'knee', dutch: 'knie', german: 'Knie', french: 'genou', category: 'body', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-2070', english: 'ankle', dutch: 'enkel', german: 'Knöchel', french: 'cheville', category: 'body', difficulty: 3, cefrLevel: 'B1' },
        ]
    },

    // Level 4: B2 Advanced Vocabulary
    level4: {
        vocabulary: [
            // Professional Terminology
            { id: 'v-601', english: 'sector', dutch: 'sector', german: 'Sektor', french: 'secteur', category: 'professional', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-602', english: 'revenue', dutch: 'inkomsten', german: 'Einnahmen', french: 'revenu', category: 'professional', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-603', english: 'stakeholder', dutch: 'belanghebbende', german: 'Interessenvertreter', french: 'partie prenante', category: 'professional', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-604', english: 'implementation', dutch: 'implementatie', german: 'Umsetzung', french: 'mise en œuvre', category: 'professional', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-605', english: 'framework', dutch: 'kader', german: 'Rahmen', french: 'cadre', category: 'professional', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-606', english: 'infrastructure', dutch: 'infrastructuur', german: 'Infrastruktur', french: 'infrastructure', category: 'professional', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-607', english: 'investment', dutch: 'investering', german: 'Investition', french: 'investissement', category: 'professional', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-608', english: 'entrepreneur', dutch: 'ondernemer', german: 'Unternehmer', french: 'entrepreneur', category: 'professional', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-609', english: 'innovation', dutch: 'innovatie', german: 'Innovation', french: 'innovation', category: 'professional', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-610', english: 'efficiency', dutch: 'efficiëntie', german: 'Effizienz', french: 'efficacité', category: 'professional', difficulty: 4, cefrLevel: 'B2' },

            // Legal & Formal
            { id: 'v-611', english: 'legislation', dutch: 'wetgeving', german: 'Gesetzgebung', french: 'législation', category: 'legal', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-612', english: 'clause', dutch: 'clausule', german: 'Klausel', french: 'clause', category: 'legal', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-613', english: 'jurisdiction', dutch: 'rechtsgebied', german: 'Gerichtsbarkeit', french: 'juridiction', category: 'legal', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-614', english: 'attorney', dutch: 'advocaat', german: 'Anwalt', french: 'avocat', category: 'legal', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-615', english: 'plaintiff', dutch: 'eiser', german: 'Kläger', french: 'plaignant', category: 'legal', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-616', english: 'defendant', dutch: 'verdediging', german: 'Angeklagter', french: 'défendeur', category: 'legal', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-617', english: 'testimony', dutch: 'getuigenis', german: 'Zeugnis', french: 'témoignage', category: 'legal', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-618', english: 'verdict', dutch: 'vonnis', german: 'Urteil', french: 'verdict', category: 'legal', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-619', english: 'litigation', dutch: 'rechtszaak', german: 'Rechtsstreit', french: 'litige', category: 'legal', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-620', english: 'amendment', dutch: 'amendement', german: 'Änderung', french: 'amendement', category: 'legal', difficulty: 4, cefrLevel: 'B2' },

            // Scientific & Technical
            { id: 'v-621', english: 'hypothesis', dutch: 'hypothese', german: 'Hypothese', french: 'hypothèse', category: 'scientific', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-622', english: 'methodology', dutch: 'methodologie', german: 'Methodik', french: 'méthodologie', category: 'scientific', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-623', english: 'analysis', dutch: 'analyse', german: 'Analyse', french: 'analyse', category: 'scientific', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-624', english: 'synthesis', dutch: 'synthese', german: 'Synthese', french: 'synthèse', category: 'scientific', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-625', english: 'experiment', dutch: 'experiment', german: 'Experiment', french: 'expérience', category: 'scientific', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-626', english: 'evidence', dutch: 'bewijs', german: 'Beweis', french: 'preuve', category: 'scientific', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-627', english: 'phenomenon', dutch: 'fenomeen', german: 'Phänomen', french: 'phénomène', category: 'scientific', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-628', english: 'variable', dutch: 'variabele', german: 'Variable', french: 'variable', category: 'scientific', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-629', english: 'observation', dutch: 'observatie', german: 'Beobachtung', french: 'observation', category: 'scientific', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-630', english: 'conclusion', dutch: 'conclusie', german: 'Schlussfolgerung', french: 'conclusion', category: 'scientific', difficulty: 4, cefrLevel: 'B2' },

            // Economic & Financial
            { id: 'v-631', english: 'inflation', dutch: 'inflatie', german: 'Inflation', french: 'inflation', category: 'economic', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-632', english: 'recession', dutch: 'recessie', german: 'Rezession', french: 'récession', category: 'economic', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-633', english: 'stock market', dutch: 'aandelenmarkt', german: 'Börse', french: 'bourse', category: 'economic', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-634', english: 'capital', dutch: 'kapitaal', german: 'Kapital', french: 'capital', category: 'economic', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-635', english: 'debt', dutch: 'schuld', german: 'Schuld', french: 'dette', category: 'economic', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-636', english: 'asset', dutch: 'activum', german: 'Vermögenswert', french: 'actif', category: 'economic', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-637', english: 'liability', dutch: 'verplichting', german: 'Verbindlichkeit', french: 'passif', category: 'economic', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-638', english: 'dividend', dutch: 'dividend', german: 'Dividende', french: 'dividende', category: 'economic', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-639', english: 'shareholder', dutch: 'aandeelhouder', german: 'Aktionär', french: 'actionnaire', category: 'economic', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-640', english: 'bankruptcy', dutch: 'faillissement', german: 'Insolvenz', french: 'faillite', category: 'economic', difficulty: 4, cefrLevel: 'B2' },

            // Advanced Social Topics
            { id: 'v-641', english: 'discrimination', dutch: 'discriminatie', german: 'Diskriminierung', french: 'discrimination', category: 'social', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-642', english: 'prejudice', dutch: 'vooroordeel', german: 'Vorurteil', french: 'préjugé', category: 'social', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-643', english: 'stereotype', dutch: 'stereotyp', german: 'Stereotyp', french: 'stéréotype', category: 'social', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-644', english: 'diversity', dutch: 'diversiteit', german: 'Vielfalt', french: 'diversité', category: 'social', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-645', english: 'integration', dutch: 'integratie', german: 'Integration', french: 'intégration', category: 'social', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-646', english: 'immigration', dutch: 'immigratie', german: 'Einwanderung', french: 'immigration', category: 'social', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-647', english: 'welfare', dutch: 'welzijn', german: 'Wohlfahrt', french: 'bien-être social', category: 'social', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-648', english: 'poverty', dutch: 'armoede', german: 'Armut', french: 'pauvreté', category: 'social', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-649', english: 'inequality', dutch: 'ongelijkheid', german: 'Ungleichheit', french: 'inégalité', category: 'social', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-650', english: 'activism', dutch: 'activisme', german: 'Aktivismus', french: 'activisme', category: 'social', difficulty: 4, cefrLevel: 'B2' },

            // Nuanced Adjectives
            { id: 'v-651', english: 'subtle', dutch: 'subtiel', german: 'subtil', french: 'subtil', category: 'adjectives', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-652', english: 'peculiar', dutch: 'eigenaardig', german: 'eigentümlich', french: 'particulier', category: 'adjectives', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-653', english: 'remarkable', dutch: 'opmerkelijk', german: 'bemerkenswert', french: 'remarquable', category: 'adjectives', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-654', english: 'ambiguous', dutch: 'dubbelzinnig', german: 'mehrdeutig', french: 'ambigu', category: 'adjectives', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-655', english: 'comprehensive', dutch: 'uitgebreid', german: 'umfassend', french: 'complet', category: 'adjectives', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-656', english: 'inevitable', dutch: 'onvermijdelijk', german: 'unvermeidlich', french: 'inévitable', category: 'adjectives', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-657', english: 'controversial', dutch: 'controversieel', german: 'kontrovers', french: 'controversé', category: 'adjectives', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-658', english: 'sophisticated', dutch: 'verfijnd', german: 'anspruchsvoll', french: 'sophistiqué', category: 'adjectives', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-659', english: 'spontaneous', dutch: 'spontaan', german: 'spontan', french: 'spontané', category: 'adjectives', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-660', english: 'substantial', dutch: 'aanzienlijk', german: 'wesentlich', french: 'substantiel', category: 'adjectives', difficulty: 4, cefrLevel: 'B2' },

            // Academic & Research
            { id: 'v-2071', english: 'dissertation', dutch: 'dissertatie', german: 'Dissertation', french: 'thèse', category: 'academic', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-2072', english: 'bibliography', dutch: 'bibliografie', german: 'Bibliografie', french: 'bibliographie', category: 'academic', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-2073', english: 'citation', dutch: 'citaat', german: 'Zitat', french: 'citation', category: 'academic', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-2074', english: 'peer review', dutch: 'collegiale toetsing', german: 'Begutachtung', french: 'évaluation par les pairs', category: 'academic', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-2075', english: 'abstract', dutch: 'abstract', german: 'Zusammenfassung', french: 'résumé', category: 'academic', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-2076', english: 'thesis', dutch: 'these', german: 'These', french: 'thèse', category: 'academic', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-2077', english: 'postgraduate', dutch: 'postdoctoraal', german: 'Postgraduierten', french: 'postuniversitaire', category: 'academic', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-2078', english: 'seminar', dutch: 'seminar', german: 'Seminar', french: 'séminaire', category: 'academic', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-2079', english: 'lecture', dutch: 'lezing', german: 'Vorlesung', french: 'conférence', category: 'academic', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-2080', english: 'curriculum', dutch: 'curriculum', german: 'Lehrplan', french: 'programme', category: 'academic', difficulty: 4, cefrLevel: 'B2' },

            // Arts & Culture
            { id: 'v-2081', english: 'masterpiece', dutch: 'meesterwerk', german: 'Meisterwerk', french: 'chef-d\'œuvre', category: 'arts', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-2082', english: 'sculpture', dutch: 'sculptuur', german: 'Skulptur', french: 'sculpture', category: 'arts', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-2083', english: 'portrait', dutch: 'portret', german: 'Porträt', french: 'portrait', category: 'arts', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-2084', english: 'landscape', dutch: 'landschap', german: 'Landschaft', french: 'paysage', category: 'arts', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-2085', english: 'canvas', dutch: 'doek', german: 'Leinwand', french: 'toile', category: 'arts', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-2086', english: 'gallery', dutch: 'galerie', german: 'Galerie', french: 'galerie', category: 'arts', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-2087', english: 'curator', dutch: 'curator', german: 'Kurator', french: 'conservateur', category: 'arts', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-2088', english: 'restoration', dutch: 'restauratie', german: 'Restaurierung', french: 'restauration', category: 'arts', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-2089', english: 'aesthetic', dutch: 'esthetisch', german: 'ästhetisch', french: 'esthétique', category: 'arts', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-2090', english: 'contemporary', dutch: 'hedendaags', german: 'zeitgenössisch', french: 'contemporain', category: 'arts', difficulty: 4, cefrLevel: 'B2' },

            // Psychology & Emotions
            { id: 'v-2091', english: 'anxiety', dutch: 'angst', german: 'Angst', french: 'anxiété', category: 'psychology', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-2092', english: 'depression', dutch: 'depressie', german: 'Depression', french: 'dépression', category: 'psychology', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-2093', english: 'consciousness', dutch: 'bewustzijn', german: 'Bewusstsein', french: 'conscience', category: 'psychology', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-2094', english: 'perception', dutch: 'perceptie', german: 'Wahrnehmung', french: 'perception', category: 'psychology', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-2095', english: 'motivation', dutch: 'motivatie', german: 'Motivation', french: 'motivation', category: 'psychology', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-2096', english: 'behavior', dutch: 'gedrag', german: 'Verhalten', french: 'comportement', category: 'psychology', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-2097', english: 'therapy', dutch: 'therapie', german: 'Therapie', french: 'thérapie', category: 'psychology', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-2098', english: 'resilience', dutch: 'veerkracht', german: 'Resilienz', french: 'résilience', category: 'psychology', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-2099', english: 'empathy', dutch: 'empathie', german: 'Empathie', french: 'empathie', category: 'psychology', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-2100', english: 'trauma', dutch: 'trauma', german: 'Trauma', french: 'traumatisme', category: 'psychology', difficulty: 4, cefrLevel: 'B2' },

            // Environment & Climate
            { id: 'v-2101', english: 'biodiversity', dutch: 'biodiversiteit', german: 'Biodiversität', french: 'biodiversité', category: 'environment', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-2102', english: 'ecosystem', dutch: 'ecosysteem', german: 'Ökosystem', french: 'écosystème', category: 'environment', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-2103', english: 'deforestation', dutch: 'ontbossing', german: 'Entwaldung', french: 'déforestation', category: 'environment', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-2104', english: 'greenhouse gas', dutch: 'broeikasgas', german: 'Treibhausgas', french: 'gaz à effet de serre', category: 'environment', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-2105', english: 'carbon footprint', dutch: 'CO2-voetafdruk', german: 'CO2-Fußabdruck', french: 'empreinte carbone', category: 'environment', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-2106', english: 'renewable energy', dutch: 'hernieuwbare energie', german: 'erneuerbare Energie', french: 'énergie renouvelable', category: 'environment', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-2107', english: 'sustainability', dutch: 'duurzaamheid', german: 'Nachhaltigkeit', french: 'durabilité', category: 'environment', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-2108', english: 'extinction', dutch: 'uitsterven', german: 'Aussterben', french: 'extinction', category: 'environment', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-2109', english: 'habitat', dutch: 'leefgebied', german: 'Lebensraum', french: 'habitat', category: 'environment', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-2110', english: 'drought', dutch: 'droogte', german: 'Dürre', french: 'sécheresse', category: 'environment', difficulty: 4, cefrLevel: 'B2' },

            // Technology & Digital
            { id: 'v-2111', english: 'algorithm', dutch: 'algoritme', german: 'Algorithmus', french: 'algorithme', category: 'technology', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-2112', english: 'encryption', dutch: 'versleuteling', german: 'Verschlüsselung', french: 'chiffrement', category: 'technology', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-2113', english: 'database', dutch: 'database', german: 'Datenbank', french: 'base de données', category: 'technology', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-2114', english: 'interface', dutch: 'interface', german: 'Schnittstelle', french: 'interface', category: 'technology', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-2115', english: 'cybersecurity', dutch: 'cyberbeveiliging', german: 'Cybersicherheit', french: 'cybersécurité', category: 'technology', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-2116', english: 'cloud computing', dutch: 'cloud computing', german: 'Cloud-Computing', french: 'informatique en nuage', category: 'technology', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-2117', english: 'artificial intelligence', dutch: 'kunstmatige intelligentie', german: 'künstliche Intelligenz', french: 'intelligence artificielle', category: 'technology', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-2118', english: 'virtual reality', dutch: 'virtuele realiteit', german: 'virtuelle Realität', french: 'réalité virtuelle', category: 'technology', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-2119', english: 'network', dutch: 'netwerk', german: 'Netzwerk', french: 'réseau', category: 'technology', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-2120', english: 'bandwidth', dutch: 'bandbreedte', german: 'Bandbreite', french: 'bande passante', category: 'technology', difficulty: 4, cefrLevel: 'B2' },

            // Complex Verbs
            { id: 'v-2121', english: 'to implement', dutch: 'implementeren', german: 'umsetzen', french: 'mettre en œuvre', category: 'verbs', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-2122', english: 'to facilitate', dutch: 'vergemakkelijken', german: 'erleichtern', french: 'faciliter', category: 'verbs', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-2123', english: 'to consolidate', dutch: 'consolideren', german: 'konsolidieren', french: 'consolider', category: 'verbs', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-2124', english: 'to contemplate', dutch: 'overwegen', german: 'erwägen', french: 'contempler', category: 'verbs', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-2125', english: 'to differentiate', dutch: 'onderscheiden', german: 'unterscheiden', french: 'différencier', category: 'verbs', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-2126', english: 'to enhance', dutch: 'verbeteren', german: 'verbessern', french: 'améliorer', category: 'verbs', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-2127', english: 'to emphasize', dutch: 'benadrukken', german: 'betonen', french: 'souligner', category: 'verbs', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-2128', english: 'to clarify', dutch: 'verduidelijken', german: 'klären', french: 'clarifier', category: 'verbs', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-2129', english: 'to collaborate', dutch: 'samenwerken', german: 'zusammenarbeiten', french: 'collaborer', category: 'verbs', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-2130', english: 'to negotiate', dutch: 'onderhandelen', german: 'verhandeln', french: 'négocier', category: 'verbs', difficulty: 4, cefrLevel: 'B2' },
        ]
    },

    // Level 5: C1 Proficiency Vocabulary
    level5: {
        vocabulary: [
            // Specialized Professional
            { id: 'v-661', english: 'paradigm', dutch: 'paradigma', german: 'Paradigma', french: 'paradigme', category: 'professional', difficulty: 5, cefrLevel: 'C1' },
            { id: 'v-662', english: 'leverage', dutch: 'hefboomwerking', german: 'Hebelwirkung', french: 'effet de levier', category: 'professional', difficulty: 5, cefrLevel: 'C1' },
            { id: 'v-663', english: 'consortium', dutch: 'consortium', german: 'Konsortium', french: 'consortium', category: 'professional', difficulty: 5, cefrLevel: 'C1' },
            { id: 'v-664', english: 'synergy', dutch: 'synergie', german: 'Synergie', french: 'synergie', category: 'professional', difficulty: 5, cefrLevel: 'C1' },
            { id: 'v-665', english: 'incumbent', dutch: 'zittend', german: 'amtierend', french: 'titulaire', category: 'professional', difficulty: 5, cefrLevel: 'C1' },
            { id: 'v-666', english: 'precedent', dutch: 'precedent', german: 'Präzedenzfall', french: 'précédent', category: 'professional', difficulty: 5, cefrLevel: 'C1' },
            { id: 'v-667', english: 'delegation', dutch: 'delegatie', german: 'Delegation', french: 'délégation', category: 'professional', difficulty: 5, cefrLevel: 'C1' },
            { id: 'v-668', english: 'arbitration', dutch: 'arbitrage', german: 'Schlichtung', french: 'arbitrage', category: 'professional', difficulty: 5, cefrLevel: 'C1' },
            { id: 'v-669', english: 'subsidiary', dutch: 'dochteronderneming', german: 'Tochtergesellschaft', french: 'filiale', category: 'professional', difficulty: 5, cefrLevel: 'C1' },
            { id: 'v-670', english: 'protocol', dutch: 'protocol', german: 'Protokoll', french: 'protocole', category: 'professional', difficulty: 5, cefrLevel: 'C1' },

            // Philosophical & Abstract
            { id: 'v-671', english: 'existentialism', dutch: 'existentialisme', german: 'Existentialismus', french: 'existentialisme', category: 'philosophy', difficulty: 5, cefrLevel: 'C1' },
            { id: 'v-672', english: 'metaphor', dutch: 'metafoor', german: 'Metapher', french: 'métaphore', category: 'philosophy', difficulty: 5, cefrLevel: 'C1' },
            { id: 'v-673', english: 'irony', dutch: 'ironie', german: 'Ironie', french: 'ironie', category: 'philosophy', difficulty: 5, cefrLevel: 'C1' },
            { id: 'v-674', english: 'paradox', dutch: 'paradox', german: 'Paradox', french: 'paradoxe', category: 'philosophy', difficulty: 5, cefrLevel: 'C1' },
            { id: 'v-675', english: 'ambivalence', dutch: 'ambivalentie', german: 'Ambivalenz', french: 'ambivalence', category: 'philosophy', difficulty: 5, cefrLevel: 'C1' },
            { id: 'v-676', english: 'dichotomy', dutch: 'dichotomie', german: 'Dichotomie', french: 'dichotomie', category: 'philosophy', difficulty: 5, cefrLevel: 'C1' },
            { id: 'v-677', english: 'ideology', dutch: 'ideologie', german: 'Ideologie', french: 'idéologie', category: 'philosophy', difficulty: 5, cefrLevel: 'C1' },
            { id: 'v-678', english: 'rhetoric', dutch: 'retoriek', german: 'Rhetorik', french: 'rhétorique', category: 'philosophy', difficulty: 5, cefrLevel: 'C1' },
            { id: 'v-679', english: 'epistemology', dutch: 'epistemologie', german: 'Erkenntnistheorie', french: 'épistémologie', category: 'philosophy', difficulty: 5, cefrLevel: 'C1' },
            { id: 'v-680', english: 'ontology', dutch: 'ontologie', german: 'Ontologie', french: 'ontologie', category: 'philosophy', difficulty: 5, cefrLevel: 'C1' },

            // Sophisticated Adjectives
            { id: 'v-681', english: 'meticulous', dutch: 'nauwgezet', german: 'sorgfältig', french: 'méticuleux', category: 'adjectives', difficulty: 5, cefrLevel: 'C1' },
            { id: 'v-682', english: 'ubiquitous', dutch: 'alomtegenwoordig', german: 'allgegenwärtig', french: 'omniprésent', category: 'adjectives', difficulty: 5, cefrLevel: 'C1' },
            { id: 'v-683', english: 'intrinsic', dutch: 'intrinsiek', german: 'intrinsisch', french: 'intrinsèque', category: 'adjectives', difficulty: 5, cefrLevel: 'C1' },
            { id: 'v-684', english: 'inherent', dutch: 'inherent', german: 'inhärent', french: 'inhérent', category: 'adjectives', difficulty: 5, cefrLevel: 'C1' },
            { id: 'v-685', english: 'pivotal', dutch: 'cruciaal', german: 'entscheidend', french: 'crucial', category: 'adjectives', difficulty: 5, cefrLevel: 'C1' },
            { id: 'v-686', english: 'tangible', dutch: 'tastbaar', german: 'greifbar', french: 'tangible', category: 'adjectives', difficulty: 5, cefrLevel: 'C1' },
            { id: 'v-687', english: 'ephemeral', dutch: 'vergankelijk', german: 'flüchtig', french: 'éphémère', category: 'adjectives', difficulty: 5, cefrLevel: 'C1' },
            { id: 'v-688', english: 'arbitrary', dutch: 'willekeurig', german: 'willkürlich', french: 'arbitraire', category: 'adjectives', difficulty: 5, cefrLevel: 'C1' },
            { id: 'v-689', english: 'clandestine', dutch: 'clandestien', german: 'heimlich', french: 'clandestin', category: 'adjectives', difficulty: 5, cefrLevel: 'C1' },
            { id: 'v-690', english: 'pragmatic', dutch: 'pragmatisch', german: 'pragmatisch', french: 'pragmatique', category: 'adjectives', difficulty: 5, cefrLevel: 'C1' },

            // Advanced Academic
            { id: 'v-2131', english: 'empirical', dutch: 'empirisch', german: 'empirisch', french: 'empirique', category: 'academic', difficulty: 5, cefrLevel: 'C1' },
            { id: 'v-2132', english: 'postulate', dutch: 'postulaat', german: 'Postulat', french: 'postulat', category: 'academic', difficulty: 5, cefrLevel: 'C1' },
            { id: 'v-2133', english: 'inference', dutch: 'afleiding', german: 'Folgerung', french: 'inférence', category: 'academic', difficulty: 5, cefrLevel: 'C1' },
            { id: 'v-2134', english: 'hypothesis', dutch: 'hypothese', german: 'Hypothese', french: 'hypothèse', category: 'academic', difficulty: 5, cefrLevel: 'C1' },
            { id: 'v-2135', english: 'deduction', dutch: 'deductie', german: 'Deduktion', french: 'déduction', category: 'academic', difficulty: 5, cefrLevel: 'C1' },
            { id: 'v-2136', english: 'induction', dutch: 'inductie', german: 'Induktion', french: 'induction', category: 'academic', difficulty: 5, cefrLevel: 'C1' },
            { id: 'v-2137', english: 'correlation', dutch: 'correlatie', german: 'Korrelation', french: 'corrélation', category: 'academic', difficulty: 5, cefrLevel: 'C1' },
            { id: 'v-2138', english: 'causation', dutch: 'causaliteit', german: 'Kausalität', french: 'causalité', category: 'academic', difficulty: 5, cefrLevel: 'C1' },
            { id: 'v-2139', english: 'quantitative', dutch: 'kwantitatief', german: 'quantitativ', french: 'quantitatif', category: 'academic', difficulty: 5, cefrLevel: 'C1' },
            { id: 'v-2140', english: 'qualitative', dutch: 'kwalitatief', german: 'qualitativ', french: 'qualitatif', category: 'academic', difficulty: 5, cefrLevel: 'C1' },

            // Literary & Linguistic
            { id: 'v-2141', english: 'discourse', dutch: 'discours', german: 'Diskurs', french: 'discours', category: 'literary', difficulty: 5, cefrLevel: 'C1' },
            { id: 'v-2142', english: 'narrative', dutch: 'narratief', german: 'Narrativ', french: 'récit', category: 'literary', difficulty: 5, cefrLevel: 'C1' },
            { id: 'v-2143', english: 'syntax', dutch: 'syntaxis', german: 'Syntax', french: 'syntaxe', category: 'literary', difficulty: 5, cefrLevel: 'C1' },
            { id: 'v-2144', english: 'semantics', dutch: 'semantiek', german: 'Semantik', french: 'sémantique', category: 'literary', difficulty: 5, cefrLevel: 'C1' },
            { id: 'v-2145', english: 'prose', dutch: 'proza', german: 'Prosa', french: 'prose', category: 'literary', difficulty: 5, cefrLevel: 'C1' },
            { id: 'v-2146', english: 'verse', dutch: 'vers', german: 'Vers', french: 'vers', category: 'literary', difficulty: 5, cefrLevel: 'C1' },
            { id: 'v-2147', english: 'alliteration', dutch: 'alliteratie', german: 'Alliteration', french: 'allitération', category: 'literary', difficulty: 5, cefrLevel: 'C1' },
            { id: 'v-2148', english: 'motif', dutch: 'motief', german: 'Motiv', french: 'motif', category: 'literary', difficulty: 5, cefrLevel: 'C1' },
            { id: 'v-2149', english: 'symbolism', dutch: 'symbolisme', german: 'Symbolismus', french: 'symbolisme', category: 'literary', difficulty: 5, cefrLevel: 'C1' },
            { id: 'v-2150', english: 'protagonist', dutch: 'protagonist', german: 'Protagonist', french: 'protagoniste', category: 'literary', difficulty: 5, cefrLevel: 'C1' },

            // Political & Diplomatic
            { id: 'v-2151', english: 'sovereignty', dutch: 'soevereiniteit', german: 'Souveränität', french: 'souveraineté', category: 'political', difficulty: 5, cefrLevel: 'C1' },
            { id: 'v-2152', english: 'diplomacy', dutch: 'diplomatie', german: 'Diplomatie', french: 'diplomatie', category: 'political', difficulty: 5, cefrLevel: 'C1' },
            { id: 'v-2153', english: 'treaty', dutch: 'verdrag', german: 'Vertrag', french: 'traité', category: 'political', difficulty: 5, cefrLevel: 'C1' },
            { id: 'v-2154', english: 'coalition', dutch: 'coalitie', german: 'Koalition', french: 'coalition', category: 'political', difficulty: 5, cefrLevel: 'C1' },
            { id: 'v-2155', english: 'referendum', dutch: 'referendum', german: 'Referendum', french: 'référendum', category: 'political', difficulty: 5, cefrLevel: 'C1' },
            { id: 'v-2156', english: 'bureaucracy', dutch: 'bureaucratie', german: 'Bürokratie', french: 'bureaucratie', category: 'political', difficulty: 5, cefrLevel: 'C1' },
            { id: 'v-2157', english: 'autonomy', dutch: 'autonomie', german: 'Autonomie', french: 'autonomie', category: 'political', difficulty: 5, cefrLevel: 'C1' },
            { id: 'v-2158', english: 'mandate', dutch: 'mandaat', german: 'Mandat', french: 'mandat', category: 'political', difficulty: 5, cefrLevel: 'C1' },
            { id: 'v-2159', english: 'sanction', dutch: 'sanctie', german: 'Sanktion', french: 'sanction', category: 'political', difficulty: 5, cefrLevel: 'C1' },
            { id: 'v-2160', english: 'embargo', dutch: 'embargo', german: 'Embargo', french: 'embargo', category: 'political', difficulty: 5, cefrLevel: 'C1' },

            // Advanced Verbs & Abstract Concepts
            { id: 'v-2161', english: 'to synthesize', dutch: 'synthetiseren', german: 'synthetisieren', french: 'synthétiser', category: 'verbs', difficulty: 5, cefrLevel: 'C1' },
            { id: 'v-2162', english: 'to extrapolate', dutch: 'extrapoleren', german: 'extrapolieren', french: 'extrapoler', category: 'verbs', difficulty: 5, cefrLevel: 'C1' },
            { id: 'v-2163', english: 'to corroborate', dutch: 'bevestigen', german: 'bestätigen', french: 'corroborer', category: 'verbs', difficulty: 5, cefrLevel: 'C1' },
            { id: 'v-2164', english: 'to refute', dutch: 'weerleggen', german: 'widerlegen', french: 'réfuter', category: 'verbs', difficulty: 5, cefrLevel: 'C1' },
            { id: 'v-2165', english: 'to scrutinize', dutch: 'onderzoeken', german: 'prüfen', french: 'scruter', category: 'verbs', difficulty: 5, cefrLevel: 'C1' },
            { id: 'v-2166', english: 'to perpetuate', dutch: 'perpetueren', german: 'verewigen', french: 'perpétuer', category: 'verbs', difficulty: 5, cefrLevel: 'C1' },
            { id: 'v-2167', english: 'to undermine', dutch: 'ondermijnen', german: 'untergraben', french: 'saper', category: 'verbs', difficulty: 5, cefrLevel: 'C1' },
            { id: 'v-2168', english: 'to reconcile', dutch: 'verzoenen', german: 'versöhnen', french: 'réconcilier', category: 'verbs', difficulty: 5, cefrLevel: 'C1' },
            { id: 'v-2169', english: 'to mitigate', dutch: 'verzachten', german: 'mildern', french: 'atténuer', category: 'verbs', difficulty: 5, cefrLevel: 'C1' },
            { id: 'v-2170', english: 'to substantiate', dutch: 'onderbouwen', german: 'untermauern', french: 'étayer', category: 'verbs', difficulty: 5, cefrLevel: 'C1' },
        ]
    },

    // Level 6: C2 Mastery Vocabulary
    level6: {
        vocabulary: [
            // Mastery-level Professional
            { id: 'v-691', english: 'hegemony', dutch: 'hegemonie', german: 'Hegemonie', french: 'hégémonie', category: 'professional', difficulty: 6, cefrLevel: 'C2' },
            { id: 'v-692', english: 'auspices', dutch: 'auspiciën', german: 'Schirmherrschaft', french: 'auspices', category: 'professional', difficulty: 6, cefrLevel: 'C2' },
            { id: 'v-693', english: 'nomenclature', dutch: 'nomenclatuur', german: 'Nomenklatur', french: 'nomenclature', category: 'professional', difficulty: 6, cefrLevel: 'C2' },
            { id: 'v-694', english: 'caveat', dutch: 'voorbehoud', german: 'Vorbehalt', french: 'mise en garde', category: 'professional', difficulty: 6, cefrLevel: 'C2' },
            { id: 'v-695', english: 'juxtaposition', dutch: 'juxtapositie', german: 'Gegenüberstellung', french: 'juxtaposition', category: 'professional', difficulty: 6, cefrLevel: 'C2' },

            // Literary & Poetic
            { id: 'v-696', english: 'verisimilitude', dutch: 'waarschijnlijkheid', german: 'Lebensechtheit', french: 'vraisemblance', category: 'literary', difficulty: 6, cefrLevel: 'C2' },
            { id: 'v-697', english: 'allegory', dutch: 'allegorie', german: 'Allegorie', french: 'allégorie', category: 'literary', difficulty: 6, cefrLevel: 'C2' },
            { id: 'v-698', english: 'anthology', dutch: 'bloemlezing', german: 'Anthologie', french: 'anthologie', category: 'literary', difficulty: 6, cefrLevel: 'C2' },
            { id: 'v-699', english: 'prosaic', dutch: 'prozaïsch', german: 'prosaisch', french: 'prosaïque', category: 'literary', difficulty: 6, cefrLevel: 'C2' },
            { id: 'v-700', english: 'euphemism', dutch: 'eufemisme', german: 'Euphemismus', french: 'euphémisme', category: 'literary', difficulty: 6, cefrLevel: 'C2' },

            // Rare & Sophisticated
            { id: 'v-701', english: 'quintessential', dutch: 'wezenlijk', german: 'quintessenziell', french: 'quintessentiel', category: 'adjectives', difficulty: 6, cefrLevel: 'C2' },
            { id: 'v-702', english: 'pervasive', dutch: 'alomvattend', german: 'durchdringend', french: 'omniprésent', category: 'adjectives', difficulty: 6, cefrLevel: 'C2' },
            { id: 'v-703', english: 'infinitesimal', dutch: 'infinitesimaal', german: 'infinitesimal', french: 'infinitésimal', category: 'adjectives', difficulty: 6, cefrLevel: 'C2' },
            { id: 'v-704', english: 'magnanimous', dutch: 'grootmoedig', german: 'großmütig', french: 'magnanime', category: 'adjectives', difficulty: 6, cefrLevel: 'C2' },
            { id: 'v-705', english: 'pernicious', dutch: 'verderfelijk', german: 'verderblich', french: 'pernicieux', category: 'adjectives', difficulty: 6, cefrLevel: 'C2' },

            // Rare & Sophisticated Vocabulary
            { id: 'v-2171', english: 'anachronism', dutch: 'anachronisme', german: 'Anachronismus', french: 'anachronisme', category: 'literary', difficulty: 6, cefrLevel: 'C2' },
            { id: 'v-2172', english: 'antithesis', dutch: 'antithese', german: 'Antithese', french: 'antithèse', category: 'literary', difficulty: 6, cefrLevel: 'C2' },
            { id: 'v-2173', english: 'aphorism', dutch: 'aforisme', german: 'Aphorismus', french: 'aphorisme', category: 'literary', difficulty: 6, cefrLevel: 'C2' },
            { id: 'v-2174', english: 'epistle', dutch: 'epistel', german: 'Epistel', french: 'épître', category: 'literary', difficulty: 6, cefrLevel: 'C2' },
            { id: 'v-2175', english: 'hyperbole', dutch: 'hyperbool', german: 'Hyperbel', french: 'hyperbole', category: 'literary', difficulty: 6, cefrLevel: 'C2' },
            { id: 'v-2176', english: 'oxymoron', dutch: 'oxymoron', german: 'Oxymoron', french: 'oxymore', category: 'literary', difficulty: 6, cefrLevel: 'C2' },
            { id: 'v-2177', english: 'synecdoche', dutch: 'synecdoche', german: 'Synekdoche', french: 'synecdoque', category: 'literary', difficulty: 6, cefrLevel: 'C2' },
            { id: 'v-2178', english: 'metonymy', dutch: 'metonymie', german: 'Metonymie', french: 'métonymie', category: 'literary', difficulty: 6, cefrLevel: 'C2' },
            { id: 'v-2179', english: 'soliloquy', dutch: 'monoloog', german: 'Monolog', french: 'soliloque', category: 'literary', difficulty: 6, cefrLevel: 'C2' },
            { id: 'v-2180', english: 'denouement', dutch: 'ontknoping', german: 'Auflösung', french: 'dénouement', category: 'literary', difficulty: 6, cefrLevel: 'C2' },

            // Philosophical & Abstract
            { id: 'v-2181', english: 'determinism', dutch: 'determinisme', german: 'Determinismus', french: 'déterminisme', category: 'philosophy', difficulty: 6, cefrLevel: 'C2' },
            { id: 'v-2182', english: 'nihilism', dutch: 'nihilisme', german: 'Nihilismus', french: 'nihilisme', category: 'philosophy', difficulty: 6, cefrLevel: 'C2' },
            { id: 'v-2183', english: 'solipsism', dutch: 'solipsisme', german: 'Solipsismus', french: 'solipsisme', category: 'philosophy', difficulty: 6, cefrLevel: 'C2' },
            { id: 'v-2184', english: 'phenomenology', dutch: 'fenomenologie', german: 'Phänomenologie', french: 'phénoménologie', category: 'philosophy', difficulty: 6, cefrLevel: 'C2' },
            { id: 'v-2185', english: 'pragmatism', dutch: 'pragmatisme', german: 'Pragmatismus', french: 'pragmatisme', category: 'philosophy', difficulty: 6, cefrLevel: 'C2' },
            { id: 'v-2186', english: 'empiricism', dutch: 'empirisme', german: 'Empirismus', french: 'empirisme', category: 'philosophy', difficulty: 6, cefrLevel: 'C2' },
            { id: 'v-2187', english: 'rationalism', dutch: 'rationalisme', german: 'Rationalismus', french: 'rationalisme', category: 'philosophy', difficulty: 6, cefrLevel: 'C2' },
            { id: 'v-2188', english: 'dialectic', dutch: 'dialectiek', german: 'Dialektik', french: 'dialectique', category: 'philosophy', difficulty: 6, cefrLevel: 'C2' },
            { id: 'v-2189', english: 'dogma', dutch: 'dogma', german: 'Dogma', french: 'dogme', category: 'philosophy', difficulty: 6, cefrLevel: 'C2' },
            { id: 'v-2190', english: 'axiom', dutch: 'axioma', german: 'Axiom', french: 'axiome', category: 'philosophy', difficulty: 6, cefrLevel: 'C2' },

            // Highly Sophisticated Adjectives
            { id: 'v-2191', english: 'obsequious', dutch: 'kruiperig', german: 'unterwürfig', french: 'obséquieux', category: 'adjectives', difficulty: 6, cefrLevel: 'C2' },
            { id: 'v-2192', english: 'inscrutable', dutch: 'ondoorgrondelijk', german: 'unergründlich', french: 'impénétrable', category: 'adjectives', difficulty: 6, cefrLevel: 'C2' },
            { id: 'v-2193', english: 'ineffable', dutch: 'onuitsprekelijk', german: 'unaussprechlich', french: 'ineffable', category: 'adjectives', difficulty: 6, cefrLevel: 'C2' },
            { id: 'v-2194', english: 'prodigious', dutch: 'verbazingwekkend', german: 'erstaunlich', french: 'prodigieux', category: 'adjectives', difficulty: 6, cefrLevel: 'C2' },
            { id: 'v-2195', english: 'recalcitrant', dutch: 'weerspannig', german: 'widerspenstig', french: 'récalcitrant', category: 'adjectives', difficulty: 6, cefrLevel: 'C2' },
            { id: 'v-2196', english: 'perfunctory', dutch: 'oppervlakkig', german: 'oberflächlich', french: 'négligent', category: 'adjectives', difficulty: 6, cefrLevel: 'C2' },
            { id: 'v-2197', english: 'superfluous', dutch: 'overbodig', german: 'überflüssig', french: 'superflu', category: 'adjectives', difficulty: 6, cefrLevel: 'C2' },
            { id: 'v-2198', english: 'vicarious', dutch: 'plaatsvervangend', german: 'stellvertretend', french: 'par procuration', category: 'adjectives', difficulty: 6, cefrLevel: 'C2' },
            { id: 'v-2199', english: 'tenuous', dutch: 'zwak', german: 'schwach', french: 'ténu', category: 'adjectives', difficulty: 6, cefrLevel: 'C2' },
            { id: 'v-2200', english: 'inveterate', dutch: 'verstokt', german: 'unverbesserlich', french: 'invétéré', category: 'adjectives', difficulty: 6, cefrLevel: 'C2' },
        ]
    },

    // Common Phrases
    phrases: [
        // A1 - Basic Survival Phrases
        { id: 'p-1', english: 'Hello', french: 'Bonjour', difficulty: 1, cefrLevel: 'A1', category: 'greetings' },
        { id: 'p-2', english: 'Good evening', french: 'Bonsoir', difficulty: 1, cefrLevel: 'A1', category: 'greetings' },
        { id: 'p-3', english: 'Good night', french: 'Bonne nuit', difficulty: 1, cefrLevel: 'A1', category: 'greetings' },
        { id: 'p-4', english: 'See you soon', french: 'À bientôt', difficulty: 1, cefrLevel: 'A1', category: 'greetings' },
        { id: 'p-5', english: 'See you tomorrow', french: 'À demain', difficulty: 1, cefrLevel: 'A1', category: 'greetings' },
        { id: 'p-6', english: 'I am...', french: 'Je suis...', difficulty: 1, cefrLevel: 'A1', category: 'introduction' },
        { id: 'p-7', english: 'My name is...', french: 'Je m\'appelle...', difficulty: 1, cefrLevel: 'A1', category: 'introduction' },
        { id: 'p-8', english: 'Nice to meet you', french: 'Enchanté(e)', difficulty: 1, cefrLevel: 'A1', category: 'introduction' },
        { id: 'p-9', english: 'Yes, please', french: 'Oui, s\'il vous plaît', difficulty: 1, cefrLevel: 'A1', category: 'politeness' },
        { id: 'p-10', english: 'No, thank you', french: 'Non, merci', difficulty: 1, cefrLevel: 'A1', category: 'politeness' },
        { id: 'p-11', english: 'You\'re welcome', french: 'De rien', difficulty: 1, cefrLevel: 'A1', category: 'politeness' },
        { id: 'p-12', english: 'I\'m sorry', french: 'Je suis désolé(e)', difficulty: 1, cefrLevel: 'A1', category: 'politeness' },
        { id: 'p-13', english: 'How much?', french: 'Combien?', difficulty: 1, cefrLevel: 'A1', category: 'shopping' },
        { id: 'p-14', english: 'Where is...?', french: 'Où est...?', difficulty: 1, cefrLevel: 'A1', category: 'directions' },
        { id: 'p-15', english: 'I don\'t know', french: 'Je ne sais pas', difficulty: 1, cefrLevel: 'A1', category: 'basic' },

        // A2 - Everyday Conversation
        { id: 'p-16', english: 'How are you?', french: 'Comment allez-vous?', difficulty: 2, cefrLevel: 'A2', category: 'conversation' },
        { id: 'p-17', english: 'What is your name?', french: 'Comment vous appelez-vous?', difficulty: 2, cefrLevel: 'A2', category: 'conversation' },
        { id: 'p-18', english: 'I am fine', french: 'Je vais bien', difficulty: 2, cefrLevel: 'A2', category: 'conversation' },
        { id: 'p-19', english: 'I don\'t understand', french: 'Je ne comprends pas', difficulty: 2, cefrLevel: 'A2', category: 'conversation' },
        { id: 'p-20', english: 'Do you speak English?', french: 'Parlez-vous anglais?', difficulty: 2, cefrLevel: 'A2', category: 'conversation' },
        { id: 'p-21', english: 'Where is the bathroom?', french: 'Où sont les toilettes?', difficulty: 2, cefrLevel: 'A2', category: 'practical' },
        { id: 'p-22', english: 'How much does it cost?', french: 'Combien ça coûte?', difficulty: 2, cefrLevel: 'A2', category: 'shopping' },
        { id: 'p-23', english: 'I would like', french: 'Je voudrais', difficulty: 2, cefrLevel: 'A2', category: 'practical' },
        { id: 'p-24', english: 'Can you help me?', french: 'Pouvez-vous m\'aider?', difficulty: 2, cefrLevel: 'A2', category: 'help' },
        { id: 'p-25', english: 'What time is it?', french: 'Quelle heure est-il?', difficulty: 2, cefrLevel: 'A2', category: 'time' },
        { id: 'p-26', english: 'I\'m looking for...', french: 'Je cherche...', difficulty: 2, cefrLevel: 'A2', category: 'practical' },
        { id: 'p-27', english: 'Can I have the bill?', french: 'L\'addition, s\'il vous plaît', difficulty: 2, cefrLevel: 'A2', category: 'restaurant' },
        { id: 'p-28', english: 'Could you repeat?', french: 'Pouvez-vous répéter?', difficulty: 2, cefrLevel: 'A2', category: 'conversation' },
        { id: 'p-29', english: 'Where do you live?', french: 'Où habitez-vous?', difficulty: 2, cefrLevel: 'A2', category: 'conversation' },
        { id: 'p-30', english: 'I come from...', french: 'Je viens de...', difficulty: 2, cefrLevel: 'A2', category: 'introduction' },
        { id: 'p-31', english: 'What do you do?', french: 'Qu\'est-ce que vous faites?', difficulty: 2, cefrLevel: 'A2', category: 'conversation' },
        { id: 'p-32', english: 'I work in...', french: 'Je travaille dans...', difficulty: 2, cefrLevel: 'A2', category: 'work' },
        { id: 'p-33', english: 'Have a good day', french: 'Bonne journée', difficulty: 2, cefrLevel: 'A2', category: 'greetings' },
        { id: 'p-34', english: 'It\'s very kind of you', french: 'C\'est très gentil de votre part', difficulty: 2, cefrLevel: 'A2', category: 'politeness' },
        { id: 'p-35', english: 'I\'m hungry', french: 'J\'ai faim', difficulty: 2, cefrLevel: 'A2', category: 'needs' },

        // B1 - Intermediate Expressions & Idioms
        { id: 'p-36', english: 'It\'s been a long time', french: 'Ça fait longtemps', difficulty: 3, cefrLevel: 'B1', category: 'conversation' },
        { id: 'p-37', english: 'What do you think about it?', french: 'Qu\'en pensez-vous?', difficulty: 3, cefrLevel: 'B1', category: 'opinion' },
        { id: 'p-38', english: 'I agree with you', french: 'Je suis d\'accord avec vous', difficulty: 3, cefrLevel: 'B1', category: 'opinion' },
        { id: 'p-39', english: 'I disagree', french: 'Je ne suis pas d\'accord', difficulty: 3, cefrLevel: 'B1', category: 'opinion' },
        { id: 'p-40', english: 'In my opinion', french: 'À mon avis', difficulty: 3, cefrLevel: 'B1', category: 'opinion' },
        { id: 'p-41', english: 'It doesn\'t matter', french: 'Ça ne fait rien', difficulty: 3, cefrLevel: 'B1', category: 'idioms' },
        { id: 'p-42', english: 'It\'s worth it', french: 'Ça vaut la peine', difficulty: 3, cefrLevel: 'B1', category: 'idioms' },
        { id: 'p-43', english: 'I can\'t help it', french: 'Je n\'y peux rien', difficulty: 3, cefrLevel: 'B1', category: 'idioms' },
        { id: 'p-44', english: 'That reminds me of...', french: 'Ça me rappelle...', difficulty: 3, cefrLevel: 'B1', category: 'conversation' },
        { id: 'p-45', english: 'I\'m fed up', french: 'J\'en ai marre', difficulty: 3, cefrLevel: 'B1', category: 'emotions' },
        { id: 'p-46', english: 'That\'s incredible!', french: 'C\'est incroyable!', difficulty: 3, cefrLevel: 'B1', category: 'reactions' },
        { id: 'p-47', english: 'I\'m in a hurry', french: 'Je suis pressé(e)', difficulty: 3, cefrLevel: 'B1', category: 'practical' },
        { id: 'p-48', english: 'Take your time', french: 'Prenez votre temps', difficulty: 3, cefrLevel: 'B1', category: 'practical' },
        { id: 'p-49', english: 'It\'s not a big deal', french: 'Ce n\'est pas grave', difficulty: 3, cefrLevel: 'B1', category: 'reassurance' },
        { id: 'p-50', english: 'I have no idea', french: 'Je n\'en ai aucune idée', difficulty: 3, cefrLevel: 'B1', category: 'conversation' },
        { id: 'p-51', english: 'Let me think about it', french: 'Laissez-moi y réfléchir', difficulty: 3, cefrLevel: 'B1', category: 'decision' },
        { id: 'p-52', english: 'It depends', french: 'Ça dépend', difficulty: 3, cefrLevel: 'B1', category: 'decision' },
        { id: 'p-53', english: 'As soon as possible', french: 'Dès que possible', difficulty: 3, cefrLevel: 'B1', category: 'time' },
        { id: 'p-54', english: 'From time to time', french: 'De temps en temps', difficulty: 3, cefrLevel: 'B1', category: 'time' },
        { id: 'p-55', english: 'By the way', french: 'Au fait', difficulty: 3, cefrLevel: 'B1', category: 'conversation' },
        { id: 'p-56', english: 'On the other hand', french: 'Par contre', difficulty: 3, cefrLevel: 'B1', category: 'contrast' },
        { id: 'p-57', english: 'Nevertheless', french: 'Néanmoins', difficulty: 3, cefrLevel: 'B1', category: 'contrast' },
        { id: 'p-58', english: 'It goes without saying', french: 'Cela va de soi', difficulty: 3, cefrLevel: 'B1', category: 'idioms' },
        { id: 'p-59', english: 'Keep in touch', french: 'Restons en contact', difficulty: 3, cefrLevel: 'B1', category: 'farewell' },
        { id: 'p-60', english: 'Good luck!', french: 'Bonne chance!', difficulty: 3, cefrLevel: 'B1', category: 'encouragement' },
        { id: 'p-61', english: 'Don\'t worry', french: 'Ne vous inquiétez pas', difficulty: 3, cefrLevel: 'B1', category: 'reassurance' },
        { id: 'p-62', english: 'I\'m looking forward to...', french: 'J\'ai hâte de...', difficulty: 3, cefrLevel: 'B1', category: 'anticipation' },
        { id: 'p-63', english: 'Could you do me a favor?', french: 'Pourriez-vous me rendre un service?', difficulty: 3, cefrLevel: 'B1', category: 'request' },
        { id: 'p-64', english: 'Make yourself at home', french: 'Faites comme chez vous', difficulty: 3, cefrLevel: 'B1', category: 'hospitality' },
        { id: 'p-65', english: 'Mind your own business', french: 'Occupe-toi de tes affaires', difficulty: 3, cefrLevel: 'B1', category: 'idioms' },

        // B2 - Formal & Business Phrases
        { id: 'p-66', english: 'I would be grateful if...', french: 'Je vous serais reconnaissant si...', difficulty: 4, cefrLevel: 'B2', category: 'formal' },
        { id: 'p-67', english: 'I am writing to inform you that...', french: 'Je vous écris pour vous informer que...', difficulty: 4, cefrLevel: 'B2', category: 'business' },
        { id: 'p-68', english: 'Please find attached...', french: 'Veuillez trouver ci-joint...', difficulty: 4, cefrLevel: 'B2', category: 'business' },
        { id: 'p-69', english: 'I look forward to hearing from you', french: 'Dans l\'attente de votre réponse', difficulty: 4, cefrLevel: 'B2', category: 'business' },
        { id: 'p-70', english: 'Regarding your request', french: 'Concernant votre demande', difficulty: 4, cefrLevel: 'B2', category: 'business' },
        { id: 'p-71', english: 'To whom it may concern', french: 'À qui de droit', difficulty: 4, cefrLevel: 'B2', category: 'formal' },
        { id: 'p-72', english: 'Further to our conversation', french: 'Suite à notre conversation', difficulty: 4, cefrLevel: 'B2', category: 'business' },
        { id: 'p-73', english: 'I would like to draw your attention to...', french: 'Je voudrais attirer votre attention sur...', difficulty: 4, cefrLevel: 'B2', category: 'formal' },
        { id: 'p-74', english: 'Taking into account', french: 'Compte tenu de', difficulty: 4, cefrLevel: 'B2', category: 'formal' },
        { id: 'p-75', english: 'As far as I\'m concerned', french: 'En ce qui me concerne', difficulty: 4, cefrLevel: 'B2', category: 'opinion' },
        { id: 'p-76', english: 'There is no doubt that...', french: 'Il ne fait aucun doute que...', difficulty: 4, cefrLevel: 'B2', category: 'opinion' },
        { id: 'p-77', english: 'It is likely that...', french: 'Il est probable que...', difficulty: 4, cefrLevel: 'B2', category: 'speculation' },
        { id: 'p-78', english: 'Under no circumstances', french: 'En aucun cas', difficulty: 4, cefrLevel: 'B2', category: 'emphasis' },
        { id: 'p-79', english: 'On behalf of', french: 'Au nom de', difficulty: 4, cefrLevel: 'B2', category: 'formal' },
        { id: 'p-80', english: 'It is imperative that...', french: 'Il est impératif que...', difficulty: 4, cefrLevel: 'B2', category: 'emphasis' },
        { id: 'p-81', english: 'According to', french: 'Selon', difficulty: 4, cefrLevel: 'B2', category: 'reference' },
        { id: 'p-82', english: 'In the long run', french: 'À long terme', difficulty: 4, cefrLevel: 'B2', category: 'time' },
        { id: 'p-83', english: 'At first glance', french: 'Au premier abord', difficulty: 4, cefrLevel: 'B2', category: 'observation' },
        { id: 'p-84', english: 'Without a doubt', french: 'Sans aucun doute', difficulty: 4, cefrLevel: 'B2', category: 'certainty' },
        { id: 'p-85', english: 'In other words', french: 'Autrement dit', difficulty: 4, cefrLevel: 'B2', category: 'clarification' },

        // C1 - Sophisticated & Nuanced Expressions
        { id: 'p-86', english: 'All things considered', french: 'Tout bien considéré', difficulty: 5, cefrLevel: 'C1', category: 'reflection' },
        { id: 'p-87', english: 'Be that as it may', french: 'Quoi qu\'il en soit', difficulty: 5, cefrLevel: 'C1', category: 'concession' },
        { id: 'p-88', english: 'It stands to reason that...', french: 'Il va de soi que...', difficulty: 5, cefrLevel: 'C1', category: 'logic' },
        { id: 'p-89', english: 'For what it\'s worth', french: 'Pour ce que ça vaut', difficulty: 5, cefrLevel: 'C1', category: 'opinion' },
        { id: 'p-90', english: 'As a matter of fact', french: 'En fait', difficulty: 5, cefrLevel: 'C1', category: 'emphasis' },
        { id: 'p-91', english: 'Notwithstanding the above', french: 'Nonobstant ce qui précède', difficulty: 5, cefrLevel: 'C1', category: 'legal' },
        { id: 'p-92', english: 'It would be remiss of me not to...', french: 'Il serait négligent de ma part de ne pas...', difficulty: 5, cefrLevel: 'C1', category: 'formal' },
        { id: 'p-93', english: 'In the light of recent events', french: 'À la lumière des événements récents', difficulty: 5, cefrLevel: 'C1', category: 'analysis' },
        { id: 'p-94', english: 'To cut a long story short', french: 'Pour faire court', difficulty: 5, cefrLevel: 'C1', category: 'summary' },
        { id: 'p-95', english: 'It leaves much to be desired', french: 'Cela laisse à désirer', difficulty: 5, cefrLevel: 'C1', category: 'criticism' },
        { id: 'p-96', english: 'That\'s beside the point', french: 'Cela n\'a rien à voir', difficulty: 5, cefrLevel: 'C1', category: 'relevance' },
        { id: 'p-97', english: 'To the best of my knowledge', french: 'À ma connaissance', difficulty: 5, cefrLevel: 'C1', category: 'qualification' },
        { id: 'p-98', english: 'Against all odds', french: 'Contre toute attente', difficulty: 5, cefrLevel: 'C1', category: 'surprise' },
        { id: 'p-99', english: 'Time will tell', french: 'L\'avenir nous le dira', difficulty: 5, cefrLevel: 'C1', category: 'wisdom' },
        { id: 'p-100', english: 'Actions speak louder than words', french: 'Les actes sont plus éloquents que les paroles', difficulty: 5, cefrLevel: 'C1', category: 'proverb' },

        // C2 - Mastery-Level Idiomatic Expressions
        { id: 'p-101', english: 'To put it in a nutshell', french: 'En résumé', difficulty: 6, cefrLevel: 'C2', category: 'summary' },
        { id: 'p-102', english: 'The die is cast', french: 'Les dés sont jetés', difficulty: 6, cefrLevel: 'C2', category: 'literary' },
        { id: 'p-103', english: 'It\'s a double-edged sword', french: 'C\'est une arme à double tranchant', difficulty: 6, cefrLevel: 'C2', category: 'metaphor' },
        { id: 'p-104', english: 'To add insult to injury', french: 'Pour couronner le tout', difficulty: 6, cefrLevel: 'C2', category: 'idioms' },
        { id: 'p-105', english: 'To beat around the bush', french: 'Tourner autour du pot', difficulty: 6, cefrLevel: 'C2', category: 'idioms' },
        { id: 'p-106', english: 'The proof is in the pudding', french: 'C\'est en forgeant qu\'on devient forgeron', difficulty: 6, cefrLevel: 'C2', category: 'proverb' },
        { id: 'p-107', english: 'To pull someone\'s leg', french: 'Faire marcher quelqu\'un', difficulty: 6, cefrLevel: 'C2', category: 'idioms' },
        { id: 'p-108', english: 'Once in a blue moon', french: 'Tous les trente-six du mois', difficulty: 6, cefrLevel: 'C2', category: 'idioms' },
        { id: 'p-109', english: 'To be on cloud nine', french: 'Être aux anges', difficulty: 6, cefrLevel: 'C2', category: 'idioms' },
        { id: 'p-110', english: 'To spill the beans', french: 'Vendre la mèche', difficulty: 6, cefrLevel: 'C2', category: 'idioms' },
    ],

    // Grammar Exercises
    grammar: [
        // Articles - Definite
        { id: 'g-1', question: 'the house (la maison)', answer: 'la maison', explanation: 'la = the (feminine singular)', category: 'articles', difficulty: 1, type: 'article', cefrLevel: 'A1' },
        { id: 'g-2', question: 'the boy (le garçon)', answer: 'le garçon', explanation: 'le = the (masculine singular)', category: 'articles', difficulty: 1, type: 'article', cefrLevel: 'A1' },
        { id: 'g-3', question: 'the girls (les filles)', answer: 'les filles', explanation: 'les = the (plural)', category: 'articles', difficulty: 1, type: 'article', cefrLevel: 'A1' },
        { id: 'g-4', question: 'the water (l\'eau)', answer: 'l\'eau', explanation: 'l\' = the (before vowel)', category: 'articles', difficulty: 1, type: 'article', cefrLevel: 'A1' },

        // Articles - Indefinite
        { id: 'g-5', question: 'a house (une maison)', answer: 'une maison', explanation: 'une = a (feminine)', category: 'articles', difficulty: 1, type: 'article', cefrLevel: 'A1' },
        { id: 'g-6', question: 'a boy (un garçon)', answer: 'un garçon', explanation: 'un = a (masculine)', category: 'articles', difficulty: 1, type: 'article', cefrLevel: 'A1' },
        { id: 'g-7', question: 'some books (des livres)', answer: 'des livres', explanation: 'des = some (plural)', category: 'articles', difficulty: 1, type: 'article', cefrLevel: 'A1' },

        // Gender Agreement - Adjectives
        { id: 'g-8', question: 'a big house (un___ grand___ maison)', answer: 'une grande maison', explanation: 'grande = big (feminine), une = a (feminine)', category: 'agreement', difficulty: 2, type: 'agreement', cefrLevel: 'A2' },
        { id: 'g-9', question: 'a small boy (un petit garçon)', answer: 'un petit garçon', explanation: 'petit = small (masculine), un = a (masculine)', category: 'agreement', difficulty: 2, type: 'agreement', cefrLevel: 'A2' },
        { id: 'g-10', question: 'the red car (l___ voiture rouge)', answer: 'la voiture rouge', explanation: 'voiture is feminine, so we use la', category: 'agreement', difficulty: 2, type: 'agreement', cefrLevel: 'A2' },

        // Pluralization
        { id: 'g-11', question: 'the houses (plural of la maison)', answer: 'les maisons', explanation: 'Add -s for plural, article becomes les', category: 'pluralization', difficulty: 1, type: 'plural', cefrLevel: 'A1' },
        { id: 'g-12', question: 'the animals (plural of l\'animal)', answer: 'les animaux', explanation: 'Words ending in -al become -aux in plural', category: 'pluralization', difficulty: 2, type: 'plural', cefrLevel: 'B1' },
        { id: 'g-13', question: 'the beautiful (plural of beau)', answer: 'beaux', explanation: 'Words ending in -eau become -eaux in plural', category: 'pluralization', difficulty: 2, type: 'plural', cefrLevel: 'B1' },

        // Prepositions
        { id: 'g-14', question: 'in France (__ France)', answer: 'en France', explanation: 'Use en before feminine countries', category: 'prepositions', difficulty: 2, type: 'preposition', cefrLevel: 'A2' },
        { id: 'g-15', question: 'to the school (__ l\'école)', answer: 'à l\'école', explanation: 'à = to/at', category: 'prepositions', difficulty: 2, type: 'preposition', cefrLevel: 'A2' },
        { id: 'g-16', question: 'from Paris (__ Paris)', answer: 'de Paris', explanation: 'de = from/of', category: 'prepositions', difficulty: 2, type: 'preposition', cefrLevel: 'A2' },

        // Negation
        { id: 'g-17', question: 'I do not speak (Je __ parle __)', answer: 'Je ne parle pas', explanation: 'Negation: ne...pas around the verb', category: 'negation', difficulty: 2, type: 'negation', cefrLevel: 'A2' },
        { id: 'g-18', question: 'She does not eat (Elle __ mange __)', answer: 'Elle ne mange pas', explanation: 'Negation: ne...pas around the verb', category: 'negation', difficulty: 2, type: 'negation', cefrLevel: 'A2' },

        // Possessives
        { id: 'g-19', question: 'my book (mon/ma/mes livre)', answer: 'mon livre', explanation: 'mon = my (masculine singular)', category: 'possessive', difficulty: 2, type: 'possessive', cefrLevel: 'A2' },
        { id: 'g-20', question: 'my house (mon/ma/mes maison)', answer: 'ma maison', explanation: 'ma = my (feminine singular)', category: 'possessive', difficulty: 2, type: 'possessive', cefrLevel: 'A2' },
        { id: 'g-21', question: 'my friends (mon/ma/mes amis)', answer: 'mes amis', explanation: 'mes = my (plural)', category: 'possessive', difficulty: 2, type: 'possessive', cefrLevel: 'A2' },

        // A1-A2: Additional Articles
        { id: 'g-22', question: 'the friend (l\'ami)', answer: 'l\'ami', explanation: 'l\' before vowel sounds', category: 'articles', difficulty: 1, type: 'article', cefrLevel: 'A1' },
        { id: 'g-23', question: 'the trees (les arbres)', answer: 'les arbres', explanation: 'les = the (plural)', category: 'articles', difficulty: 1, type: 'article', cefrLevel: 'A1' },
        { id: 'g-24', question: 'a apple (une pomme)', answer: 'une pomme', explanation: 'une = a/an (feminine)', category: 'articles', difficulty: 1, type: 'article', cefrLevel: 'A1' },

        // A1-A2: Additional Agreement Exercises
        { id: 'g-25', question: 'the happy girl (la fille heureux/heureuse)', answer: 'la fille heureuse', explanation: 'heureuse is feminine form of happy', category: 'agreement', difficulty: 2, type: 'agreement', cefrLevel: 'A2' },
        { id: 'g-26', question: 'the white house (la maison blanc/blanche)', answer: 'la maison blanche', explanation: 'blanche is feminine form of white', category: 'agreement', difficulty: 2, type: 'agreement', cefrLevel: 'A2' },
        { id: 'g-27', question: 'a good boy (un bon/bonne garçon)', answer: 'un bon garçon', explanation: 'bon is masculine form', category: 'agreement', difficulty: 2, type: 'agreement', cefrLevel: 'A2' },
        { id: 'g-28', question: 'the tall woman (la femme grand/grande)', answer: 'la femme grande', explanation: 'grande is feminine form', category: 'agreement', difficulty: 2, type: 'agreement', cefrLevel: 'A2' },
        { id: 'g-29', question: 'my new car (ma voiture nouveau/nouvelle)', answer: 'ma nouvelle voiture', explanation: 'nouvelle is feminine, placed before noun', category: 'agreement', difficulty: 2, type: 'agreement', cefrLevel: 'A2' },
        { id: 'g-30', question: 'the old man (le vieil/vieux homme)', answer: 'le vieil homme', explanation: 'vieil before vowel sound', category: 'agreement', difficulty: 2, type: 'agreement', cefrLevel: 'A2' },
        { id: 'g-31', question: 'the green apples (les pommes vert/vertes)', answer: 'les pommes vertes', explanation: 'vertes is feminine plural', category: 'agreement', difficulty: 2, type: 'agreement', cefrLevel: 'A2' },
        { id: 'g-32', question: 'the small cats (les petits/petites chats)', answer: 'les petits chats', explanation: 'petits is masculine plural', category: 'agreement', difficulty: 2, type: 'agreement', cefrLevel: 'A2' },
        { id: 'g-33', question: 'a beautiful day (un beau/belle jour)', answer: 'un beau jour', explanation: 'beau is masculine form', category: 'agreement', difficulty: 2, type: 'agreement', cefrLevel: 'A2' },
        { id: 'g-34', question: 'the sad girls (les filles triste/tristes)', answer: 'les filles tristes', explanation: 'tristes is plural form', category: 'agreement', difficulty: 2, type: 'agreement', cefrLevel: 'A2' },
        { id: 'g-35', question: 'my favorite book (mon livre favori/favorite)', answer: 'mon livre favori', explanation: 'favori is masculine form', category: 'agreement', difficulty: 2, type: 'agreement', cefrLevel: 'A2' },
        { id: 'g-36', question: 'the young teachers (les professeurs jeune/jeunes)', answer: 'les professeurs jeunes', explanation: 'jeunes is plural form', category: 'agreement', difficulty: 2, type: 'agreement', cefrLevel: 'A2' },

        // A1-A2: Additional Pluralization
        { id: 'g-37', question: 'the books (plural of le livre)', answer: 'les livres', explanation: 'Add -s for regular plural', category: 'pluralization', difficulty: 1, type: 'plural', cefrLevel: 'A1' },
        { id: 'g-38', question: 'the eyes (plural of l\'œil)', answer: 'les yeux', explanation: 'Irregular plural form', category: 'pluralization', difficulty: 2, type: 'plural', cefrLevel: 'A2' },
        { id: 'g-39', question: 'the games (plural of le jeu)', answer: 'les jeux', explanation: 'Words ending in -eu become -eux', category: 'pluralization', difficulty: 2, type: 'plural', cefrLevel: 'A2' },
        { id: 'g-40', question: 'the horses (plural of le cheval)', answer: 'les chevaux', explanation: 'Words ending in -al become -aux', category: 'pluralization', difficulty: 2, type: 'plural', cefrLevel: 'A2' },
        { id: 'g-41', question: 'the children (plural of l\'enfant)', answer: 'les enfants', explanation: 'Regular plural with -s', category: 'pluralization', difficulty: 1, type: 'plural', cefrLevel: 'A1' },
        { id: 'g-42', question: 'the newspapers (plural of le journal)', answer: 'les journaux', explanation: 'Words ending in -al become -aux', category: 'pluralization', difficulty: 2, type: 'plural', cefrLevel: 'A2' },
        { id: 'g-43', question: 'the voices (plural of la voix)', answer: 'les voix', explanation: 'Words ending in -x stay the same', category: 'pluralization', difficulty: 2, type: 'plural', cefrLevel: 'A2' },

        // A1-A2: Additional Prepositions
        { id: 'g-44', question: 'at the restaurant (__ restaurant)', answer: 'au restaurant', explanation: 'au = à + le (at/to the)', category: 'prepositions', difficulty: 2, type: 'preposition', cefrLevel: 'A2' },
        { id: 'g-45', question: 'of the students (__ étudiants)', answer: 'des étudiants', explanation: 'des = de + les (of the)', category: 'prepositions', difficulty: 2, type: 'preposition', cefrLevel: 'A2' },
        { id: 'g-46', question: 'with my friend (__ mon ami)', answer: 'avec mon ami', explanation: 'avec = with', category: 'prepositions', difficulty: 2, type: 'preposition', cefrLevel: 'A2' },
        { id: 'g-47', question: 'for you (__ toi)', answer: 'pour toi', explanation: 'pour = for', category: 'prepositions', difficulty: 2, type: 'preposition', cefrLevel: 'A2' },
        { id: 'g-48', question: 'without money (__ argent)', answer: 'sans argent', explanation: 'sans = without', category: 'prepositions', difficulty: 2, type: 'preposition', cefrLevel: 'A2' },
        { id: 'g-49', question: 'in the United States (__ États-Unis)', answer: 'aux États-Unis', explanation: 'aux = à + les (in/to the)', category: 'prepositions', difficulty: 2, type: 'preposition', cefrLevel: 'A2' },
        { id: 'g-50', question: 'near the school (__ de l\'école)', answer: 'près de l\'école', explanation: 'près de = near', category: 'prepositions', difficulty: 2, type: 'preposition', cefrLevel: 'A2' },
        { id: 'g-51', question: 'in front of the house (__ la maison)', answer: 'devant la maison', explanation: 'devant = in front of', category: 'prepositions', difficulty: 2, type: 'preposition', cefrLevel: 'A2' },
        { id: 'g-52', question: 'behind the door (__ la porte)', answer: 'derrière la porte', explanation: 'derrière = behind', category: 'prepositions', difficulty: 2, type: 'preposition', cefrLevel: 'A2' },
        { id: 'g-53', question: 'between Paris and Lyon (__ Paris et Lyon)', answer: 'entre Paris et Lyon', explanation: 'entre = between', category: 'prepositions', difficulty: 2, type: 'preposition', cefrLevel: 'A2' },
        { id: 'g-54', question: 'on the table (__ la table)', answer: 'sur la table', explanation: 'sur = on', category: 'prepositions', difficulty: 2, type: 'preposition', cefrLevel: 'A2' },
        { id: 'g-55', question: 'under the bed (__ le lit)', answer: 'sous le lit', explanation: 'sous = under', category: 'prepositions', difficulty: 2, type: 'preposition', cefrLevel: 'A2' },

        // A1-A2: Additional Negation
        { id: 'g-56', question: 'I never eat (Je __ mange __)', answer: 'Je ne mange jamais', explanation: 'ne...jamais = never', category: 'negation', difficulty: 2, type: 'negation', cefrLevel: 'A2' },
        { id: 'g-57', question: 'He has nothing (Il __ a __)', answer: 'Il n\'a rien', explanation: 'ne...rien = nothing', category: 'negation', difficulty: 2, type: 'negation', cefrLevel: 'A2' },
        { id: 'g-58', question: 'We don\'t see anyone (Nous __ voyons __)', answer: 'Nous ne voyons personne', explanation: 'ne...personne = no one', category: 'negation', difficulty: 2, type: 'negation', cefrLevel: 'A2' },
        { id: 'g-59', question: 'They no longer live here (Ils __ habitent __ ici)', answer: 'Ils n\'habitent plus ici', explanation: 'ne...plus = no longer', category: 'negation', difficulty: 2, type: 'negation', cefrLevel: 'A2' },
        { id: 'g-60', question: 'I only have five euros (Je __ ai __ cinq euros)', answer: 'Je n\'ai que cinq euros', explanation: 'ne...que = only', category: 'negation', difficulty: 2, type: 'negation', cefrLevel: 'A2' },
        { id: 'g-61', question: 'She doesn\'t know anyone (Elle __ connaît __)', answer: 'Elle ne connaît personne', explanation: 'ne...personne = no one', category: 'negation', difficulty: 2, type: 'negation', cefrLevel: 'A2' },
        { id: 'g-62', question: 'I have neither time nor money (Je __ ai __ temps __ argent)', answer: 'Je n\'ai ni temps ni argent', explanation: 'ne...ni...ni = neither...nor', category: 'negation', difficulty: 2, type: 'negation', cefrLevel: 'A2' },
        { id: 'g-63', question: 'You never study (Tu __ études __)', answer: 'Tu n\'étudies jamais', explanation: 'ne...jamais = never', category: 'negation', difficulty: 2, type: 'negation', cefrLevel: 'A2' },

        // A1-A2: Additional Possessives
        { id: 'g-64', question: 'his car (sa/son voiture)', answer: 'sa voiture', explanation: 'sa = his/her (feminine object)', category: 'possessive', difficulty: 2, type: 'possessive', cefrLevel: 'A2' },
        { id: 'g-65', question: 'their house (leur/leurs maison)', answer: 'leur maison', explanation: 'leur = their (singular object)', category: 'possessive', difficulty: 2, type: 'possessive', cefrLevel: 'A2' },
        { id: 'g-66', question: 'our children (notre/nos enfants)', answer: 'nos enfants', explanation: 'nos = our (plural)', category: 'possessive', difficulty: 2, type: 'possessive', cefrLevel: 'A2' },
        { id: 'g-67', question: 'your book (ton/ta/tes livre)', answer: 'ton livre', explanation: 'ton = your (familiar, masculine)', category: 'possessive', difficulty: 2, type: 'possessive', cefrLevel: 'A2' },
        { id: 'g-68', question: 'her brothers (ses frères)', answer: 'ses frères', explanation: 'ses = her/his (plural)', category: 'possessive', difficulty: 2, type: 'possessive', cefrLevel: 'A2' },
        { id: 'g-69', question: 'your keys (votre/vos clés)', answer: 'vos clés', explanation: 'vos = your (formal/plural)', category: 'possessive', difficulty: 2, type: 'possessive', cefrLevel: 'A2' },
        { id: 'g-70', question: 'my idea (mon/ma idée)', answer: 'mon idée', explanation: 'mon before feminine word starting with vowel', category: 'possessive', difficulty: 2, type: 'possessive', cefrLevel: 'A2' },

        // B1: Pronouns
        { id: 'g-71', question: 'I see him (Je __ vois)', answer: 'Je le vois', explanation: 'le = him/it (masculine direct object)', category: 'pronouns', difficulty: 3, type: 'pronoun', cefrLevel: 'B1' },
        { id: 'g-72', question: 'She gives it to me (Elle __ __ donne)', answer: 'Elle me le donne', explanation: 'me = to me, le = it (indirect + direct)', category: 'pronouns', difficulty: 3, type: 'pronoun', cefrLevel: 'B1' },
        { id: 'g-73', question: 'We talk to them (Nous __ parlons)', answer: 'Nous leur parlons', explanation: 'leur = to them (indirect object)', category: 'pronouns', difficulty: 3, type: 'pronoun', cefrLevel: 'B1' },
        { id: 'g-74', question: 'They think about it (Ils __ pensent)', answer: 'Ils y pensent', explanation: 'y replaces à + thing', category: 'pronouns', difficulty: 3, type: 'pronoun', cefrLevel: 'B1' },
        { id: 'g-75', question: 'I have some (J\'__ ai)', answer: 'J\'en ai', explanation: 'en replaces de + noun', category: 'pronouns', difficulty: 3, type: 'pronoun', cefrLevel: 'B1' },
        { id: 'g-76', question: 'Tell it to me! (Dites-__-__!)', answer: 'Dites-le-moi!', explanation: 'Imperative order: direct + indirect', category: 'pronouns', difficulty: 3, type: 'pronoun', cefrLevel: 'B1' },
        { id: 'g-77', question: 'He helps himself (Il __ aide)', answer: 'Il s\'aide', explanation: 'se/s\' = himself (reflexive)', category: 'pronouns', difficulty: 3, type: 'pronoun', cefrLevel: 'B1' },
        { id: 'g-78', question: 'Which one? This one or that one? (__ ou __?)', answer: 'Celui-ci ou celui-là?', explanation: 'celui-ci/celui-là = demonstrative pronouns', category: 'pronouns', difficulty: 3, type: 'pronoun', cefrLevel: 'B1' },
        { id: 'g-79', question: 'It\'s mine (C\'est __ moi)', answer: 'C\'est à moi', explanation: 'à + stressed pronoun shows possession', category: 'pronouns', difficulty: 3, type: 'pronoun', cefrLevel: 'B1' },
        { id: 'g-80', question: 'Don\'t give it to them! (Ne __ __ donnez pas!)', answer: 'Ne le leur donnez pas!', explanation: 'Negative: direct before indirect', category: 'pronouns', difficulty: 3, type: 'pronoun', cefrLevel: 'B1' },

        // B1: Passé Composé
        { id: 'g-81', question: 'I ate (manger - je)', answer: 'J\'ai mangé', explanation: 'Passé composé with avoir', category: 'past_tense', difficulty: 3, type: 'past', cefrLevel: 'B1' },
        { id: 'g-82', question: 'She went (aller - elle)', answer: 'Elle est allée', explanation: 'Passé composé with être (add -e for feminine)', category: 'past_tense', difficulty: 3, type: 'past', cefrLevel: 'B1' },
        { id: 'g-83', question: 'We finished (finir - nous)', answer: 'Nous avons fini', explanation: 'Passé composé: avoir + past participle', category: 'past_tense', difficulty: 3, type: 'past', cefrLevel: 'B1' },
        { id: 'g-84', question: 'They arrived (arriver - ils)', answer: 'Ils sont arrivés', explanation: 'Movement verbs use être, add -s for plural', category: 'past_tense', difficulty: 3, type: 'past', cefrLevel: 'B1' },
        { id: 'g-85', question: 'You took (prendre - tu)', answer: 'Tu as pris', explanation: 'Irregular past participle: pris', category: 'past_tense', difficulty: 3, type: 'past', cefrLevel: 'B1' },
        { id: 'g-86', question: 'I was born (naître - je)', answer: 'Je suis né(e)', explanation: 'être verb, agreement with subject', category: 'past_tense', difficulty: 3, type: 'past', cefrLevel: 'B1' },
        { id: 'g-87', question: 'We saw (voir - nous)', answer: 'Nous avons vu', explanation: 'Irregular past participle: vu', category: 'past_tense', difficulty: 3, type: 'past', cefrLevel: 'B1' },
        { id: 'g-88', question: 'She became (devenir - elle)', answer: 'Elle est devenue', explanation: 'Compound of venir, uses être', category: 'past_tense', difficulty: 3, type: 'past', cefrLevel: 'B1' },

        // B1: Imparfait
        { id: 'g-89', question: 'I was eating (manger - je)', answer: 'Je mangeais', explanation: 'Imparfait: ongoing past action', category: 'past_tense', difficulty: 3, type: 'imperfect', cefrLevel: 'B1' },
        { id: 'g-90', question: 'We were going (aller - nous)', answer: 'Nous allions', explanation: 'Imparfait ending: -ions', category: 'past_tense', difficulty: 3, type: 'imperfect', cefrLevel: 'B1' },
        { id: 'g-91', question: 'They used to play (jouer - ils)', answer: 'Ils jouaient', explanation: 'Imparfait for habitual past', category: 'past_tense', difficulty: 3, type: 'imperfect', cefrLevel: 'B1' },
        { id: 'g-92', question: 'You were (être - tu)', answer: 'Tu étais', explanation: 'Irregular imparfait of être', category: 'past_tense', difficulty: 3, type: 'imperfect', cefrLevel: 'B1' },
        { id: 'g-93', question: 'She was finishing (finir - elle)', answer: 'Elle finissait', explanation: 'Imparfait: -issait for -ir verbs', category: 'past_tense', difficulty: 3, type: 'imperfect', cefrLevel: 'B1' },
        { id: 'g-94', question: 'I was having (avoir - je)', answer: 'J\'avais', explanation: 'Irregular imparfait stem: av-', category: 'past_tense', difficulty: 3, type: 'imperfect', cefrLevel: 'B1' },
        { id: 'g-95', question: 'We were doing (faire - nous)', answer: 'Nous faisions', explanation: 'Irregular stem: fais-', category: 'past_tense', difficulty: 3, type: 'imperfect', cefrLevel: 'B1' },
        { id: 'g-96', question: 'It was raining (pleuvoir)', answer: 'Il pleuvait', explanation: 'Imparfait for weather descriptions', category: 'past_tense', difficulty: 3, type: 'imperfect', cefrLevel: 'B1' },

        // B1: Conditional
        { id: 'g-97', question: 'I would like (aimer - je)', answer: 'J\'aimerais', explanation: 'Conditional: future stem + imparfait endings', category: 'conditional', difficulty: 3, type: 'conditional', cefrLevel: 'B1' },
        { id: 'g-98', question: 'We could (pouvoir - nous)', answer: 'Nous pourrions', explanation: 'Irregular conditional stem: pourr-', category: 'conditional', difficulty: 3, type: 'conditional', cefrLevel: 'B1' },
        { id: 'g-99', question: 'They would go (aller - ils)', answer: 'Ils iraient', explanation: 'Irregular stem: ir-', category: 'conditional', difficulty: 3, type: 'conditional', cefrLevel: 'B1' },
        { id: 'g-100', question: 'You should (devoir - tu)', answer: 'Tu devrais', explanation: 'Irregular stem: devr-', category: 'conditional', difficulty: 3, type: 'conditional', cefrLevel: 'B1' },
        { id: 'g-101', question: 'She would have (avoir - elle)', answer: 'Elle aurait', explanation: 'Irregular stem: aur-', category: 'conditional', difficulty: 3, type: 'conditional', cefrLevel: 'B1' },

        // B1: Introduction to Subjunctive
        { id: 'g-102', question: 'I want you to come (Je veux que tu __)', answer: 'Je veux que tu viennes', explanation: 'Subjunctive after expressions of desire', category: 'subjunctive', difficulty: 3, type: 'subjunctive', cefrLevel: 'B1' },
        { id: 'g-103', question: 'It\'s important that he knows (Il est important qu\'il __)', answer: 'Il est important qu\'il sache', explanation: 'Subjunctive after impersonal expressions', category: 'subjunctive', difficulty: 3, type: 'subjunctive', cefrLevel: 'B1' },
        { id: 'g-104', question: 'I doubt that she has (Je doute qu\'elle __)', answer: 'Je doute qu\'elle ait', explanation: 'Subjunctive after expressions of doubt', category: 'subjunctive', difficulty: 3, type: 'subjunctive', cefrLevel: 'B1' },
        { id: 'g-105', question: 'I\'m afraid that they are (J\'ai peur qu\'ils __)', answer: 'J\'ai peur qu\'ils soient', explanation: 'Subjunctive after expressions of emotion', category: 'subjunctive', difficulty: 3, type: 'subjunctive', cefrLevel: 'B1' },

        // B2: Comprehensive Subjunctive
        { id: 'g-106', question: 'Before he leaves (Avant qu\'il __)', answer: 'Avant qu\'il parte', explanation: 'Subjunctive after avant que', category: 'subjunctive', difficulty: 4, type: 'subjunctive', cefrLevel: 'B2' },
        { id: 'g-107', question: 'Although she is (Bien qu\'elle __)', answer: 'Bien qu\'elle soit', explanation: 'Subjunctive after bien que', category: 'subjunctive', difficulty: 4, type: 'subjunctive', cefrLevel: 'B2' },
        { id: 'g-108', question: 'Until they arrive (Jusqu\'à ce qu\'ils __)', answer: 'Jusqu\'à ce qu\'ils arrivent', explanation: 'Subjunctive after jusqu\'à ce que', category: 'subjunctive', difficulty: 4, type: 'subjunctive', cefrLevel: 'B2' },
        { id: 'g-109', question: 'Provided that you come (Pourvu que tu __)', answer: 'Pourvu que tu viennes', explanation: 'Subjunctive after pourvu que', category: 'subjunctive', difficulty: 4, type: 'subjunctive', cefrLevel: 'B2' },
        { id: 'g-110', question: 'Without my knowing (Sans que je le __)', answer: 'Sans que je le sache', explanation: 'Subjunctive after sans que', category: 'subjunctive', difficulty: 4, type: 'subjunctive', cefrLevel: 'B2' },
        { id: 'g-111', question: 'In case he forgets (Au cas où il __ - subj or cond?)', answer: 'Au cas où il oublierait', explanation: 'Exception: au cas où takes conditional', category: 'subjunctive', difficulty: 4, type: 'subjunctive', cefrLevel: 'B2' },
        { id: 'g-112', question: 'The best that I know (Le meilleur que je __)', answer: 'Le meilleur que je connaisse', explanation: 'Subjunctive after superlative', category: 'subjunctive', difficulty: 4, type: 'subjunctive', cefrLevel: 'B2' },
        { id: 'g-113', question: 'I\'m looking for someone who speaks French (Je cherche quelqu\'un qui __ français)', answer: 'Je cherche quelqu\'un qui parle français', explanation: 'Indicative when referring to specific person', category: 'subjunctive', difficulty: 4, type: 'subjunctive', cefrLevel: 'B2' },
        { id: 'g-114', question: 'Whatever he does (Quoi qu\'il __)', answer: 'Quoi qu\'il fasse', explanation: 'Subjunctive after indefinite relative', category: 'subjunctive', difficulty: 4, type: 'subjunctive', cefrLevel: 'B2' },
        { id: 'g-115', question: 'It\'s the only one that works (C\'est le seul qui __)', answer: 'C\'est le seul qui fonctionne', explanation: 'Subjunctive after restrictive expression', category: 'subjunctive', difficulty: 4, type: 'subjunctive', cefrLevel: 'B2' },

        // B2: Conditional Perfect
        { id: 'g-116', question: 'I would have done (faire - je)', answer: 'J\'aurais fait', explanation: 'Conditional perfect: would have + past participle', category: 'conditional', difficulty: 4, type: 'conditional_perfect', cefrLevel: 'B2' },
        { id: 'g-117', question: 'She would have gone (aller - elle)', answer: 'Elle serait allée', explanation: 'Conditional perfect with être', category: 'conditional', difficulty: 4, type: 'conditional_perfect', cefrLevel: 'B2' },
        { id: 'g-118', question: 'If I had known... (Si j\'__ su...)', answer: 'Si j\'avais su...', explanation: 'Pluperfect in si-clause', category: 'conditional', difficulty: 4, type: 'conditional_perfect', cefrLevel: 'B2' },
        { id: 'g-119', question: 'They would have come (venir - ils)', answer: 'Ils seraient venus', explanation: 'Conditional perfect with être, agreement', category: 'conditional', difficulty: 4, type: 'conditional_perfect', cefrLevel: 'B2' },
        { id: 'g-120', question: 'We could have (pouvoir - nous)', answer: 'Nous aurions pu', explanation: 'Irregular past participle: pu', category: 'conditional', difficulty: 4, type: 'conditional_perfect', cefrLevel: 'B2' },

        // B2: Gerunds & Infinitives
        { id: 'g-121', question: 'While eating (En __ [manger])', answer: 'En mangeant', explanation: 'Gerund: en + present participle', category: 'gerund', difficulty: 4, type: 'gerund', cefrLevel: 'B2' },
        { id: 'g-122', question: 'After having eaten (Après __ mangé)', answer: 'Après avoir mangé', explanation: 'Past infinitive: après + avoir/être + pp', category: 'infinitive', difficulty: 4, type: 'infinitive', cefrLevel: 'B2' },
        { id: 'g-123', question: 'Before leaving (Avant de __)', answer: 'Avant de partir', explanation: 'Infinitive after avant de', category: 'infinitive', difficulty: 4, type: 'infinitive', cefrLevel: 'B2' },
        { id: 'g-124', question: 'Without saying (Sans __)', answer: 'Sans dire', explanation: 'Infinitive after sans', category: 'infinitive', difficulty: 4, type: 'infinitive', cefrLevel: 'B2' },
        { id: 'g-125', question: 'By working hard (En __ dur)', answer: 'En travaillant dur', explanation: 'Gerund shows manner', category: 'gerund', difficulty: 4, type: 'gerund', cefrLevel: 'B2' },

        // B2: Relative Clauses
        { id: 'g-126', question: 'The book that I read (Le livre __ je lis)', answer: 'Le livre que je lis', explanation: 'que = direct object relative pronoun', category: 'relative', difficulty: 4, type: 'relative', cefrLevel: 'B2' },
        { id: 'g-127', question: 'The man who speaks (L\'homme __ parle)', answer: 'L\'homme qui parle', explanation: 'qui = subject relative pronoun', category: 'relative', difficulty: 4, type: 'relative', cefrLevel: 'B2' },
        { id: 'g-128', question: 'The city where I live (La ville __ j\'habite)', answer: 'La ville où j\'habite', explanation: 'où = where', category: 'relative', difficulty: 4, type: 'relative', cefrLevel: 'B2' },
        { id: 'g-129', question: 'The friend whose car (L\'ami __ voiture)', answer: 'L\'ami dont la voiture', explanation: 'dont = whose/of which', category: 'relative', difficulty: 4, type: 'relative', cefrLevel: 'B2' },
        { id: 'g-130', question: 'What interests me (Ce __ m\'intéresse)', answer: 'Ce qui m\'intéresse', explanation: 'ce qui = what (subject)', category: 'relative', difficulty: 4, type: 'relative', cefrLevel: 'B2' },

        // B2: Indirect Speech
        { id: 'g-131', question: 'He said that he was tired (Il a dit qu\'il __ fatigué)', answer: 'Il a dit qu\'il était fatigué', explanation: 'Tense agreement in indirect speech', category: 'indirect_speech', difficulty: 4, type: 'indirect', cefrLevel: 'B2' },
        { id: 'g-132', question: 'She asked me if I would come (Elle m\'a demandé si je __)', answer: 'Elle m\'a demandé si je viendrais', explanation: 'Future becomes conditional', category: 'indirect_speech', difficulty: 4, type: 'indirect', cefrLevel: 'B2' },
        { id: 'g-133', question: 'I told her I had finished (Je lui ai dit que j\'__ fini)', answer: 'Je lui ai dit que j\'avais fini', explanation: 'Passé composé becomes pluperfect', category: 'indirect_speech', difficulty: 4, type: 'indirect', cefrLevel: 'B2' },
        { id: 'g-134', question: 'He said he was leaving tomorrow (Il a dit qu\'il partait __)', answer: 'Il a dit qu\'il partait le lendemain', explanation: 'demain becomes le lendemain', category: 'indirect_speech', difficulty: 4, type: 'indirect', cefrLevel: 'B2' },
        { id: 'g-135', question: 'She asked me where I lived (Elle m\'a demandé où j\'__)', answer: 'Elle m\'a demandé où j\'habitais', explanation: 'Present becomes imperfect', category: 'indirect_speech', difficulty: 4, type: 'indirect', cefrLevel: 'B2' },

        // C1: Advanced Subjunctive
        { id: 'g-136', question: 'Not that I know of (Non pas que je __ [savoir])', answer: 'Non pas que je sache', explanation: 'Subjunctive after restrictive expression', category: 'subjunctive', difficulty: 5, type: 'subjunctive', cefrLevel: 'C1' },
        { id: 'g-137', question: 'Far from being finished (Loin d\'être __)', answer: 'Loin d\'être fini', explanation: 'Past participle after loin de', category: 'subjunctive', difficulty: 5, type: 'subjunctive', cefrLevel: 'C1' },
        { id: 'g-138', question: 'However it may be (Quoi qu\'il en __)', answer: 'Quoi qu\'il en soit', explanation: 'Fixed subjunctive expression', category: 'subjunctive', difficulty: 5, type: 'subjunctive', cefrLevel: 'C1' },
        { id: 'g-139', question: 'That I know of (Que je __ [savoir])', answer: 'Que je sache', explanation: 'Subjunctive in relative clause', category: 'subjunctive', difficulty: 5, type: 'subjunctive', cefrLevel: 'C1' },

        // C1: Passive Voice Complexity
        { id: 'g-140', question: 'The book was written by her (Le livre __ écrit par elle)', answer: 'Le livre a été écrit par elle', explanation: 'Passive: être + past participle', category: 'passive', difficulty: 5, type: 'passive', cefrLevel: 'C1' },
        { id: 'g-141', question: 'French is spoken here (On __ français ici)', answer: 'On parle français ici', explanation: 'Alternative to passive: on + active', category: 'passive', difficulty: 5, type: 'passive', cefrLevel: 'C1' },
        { id: 'g-142', question: 'She was given a gift (On __ a offert un cadeau)', answer: 'On lui a offert un cadeau', explanation: 'Avoid passive with indirect object', category: 'passive', difficulty: 5, type: 'passive', cefrLevel: 'C1' },

        // C1: Concessive Clauses
        { id: 'g-143', question: 'Even though he is rich (Même s\'il __ riche)', answer: 'Même s\'il est riche', explanation: 'Même si + indicative', category: 'concessive', difficulty: 5, type: 'concessive', cefrLevel: 'C1' },
        { id: 'g-144', question: 'Despite being tired (Bien qu\'__ fatigué)', answer: 'Bien qu\'il soit fatigué', explanation: 'Bien que + subjunctive', category: 'concessive', difficulty: 5, type: 'concessive', cefrLevel: 'C1' },
        { id: 'g-145', question: 'No matter what happens (Quoi qu\'il __)', answer: 'Quoi qu\'il arrive', explanation: 'Quoi que + subjunctive', category: 'concessive', difficulty: 5, type: 'concessive', cefrLevel: 'C1' },

        // C1: Hypothetical Structures
        { id: 'g-146', question: 'Had I known (Si j\'__ su)', answer: 'Si j\'avais su', explanation: 'Past perfect in si-clause', category: 'hypothetical', difficulty: 5, type: 'hypothetical', cefrLevel: 'C1' },
        { id: 'g-147', question: 'Were he to come (S\'il __ venir)', answer: 'S\'il devait venir', explanation: 'Hypothetical future', category: 'hypothetical', difficulty: 5, type: 'hypothetical', cefrLevel: 'C1' },
        { id: 'g-148', question: 'Should you need help (__ vous besoin d\'aide)', answer: 'Si vous aviez besoin d\'aide', explanation: 'Conditional help offer', category: 'hypothetical', difficulty: 5, type: 'hypothetical', cefrLevel: 'C1' },

        // C1: Stylistic Transformations
        { id: 'g-149', question: 'Transform: Il mange (literary past)', answer: 'Il mangea', explanation: 'Passé simple (literary past)', category: 'style', difficulty: 5, type: 'style', cefrLevel: 'C1' },
        { id: 'g-150', question: 'Formal: Tu as raison (vouvoyer)', answer: 'Vous avez raison', explanation: 'Register shift: tu → vous', category: 'style', difficulty: 5, type: 'style', cefrLevel: 'C1' },

        // C2: Rare/Archaic Tenses
        { id: 'g-151', question: 'Literary past: être - il', answer: 'il fut', explanation: 'Passé simple of être', category: 'archaic', difficulty: 6, type: 'archaic', cefrLevel: 'C2' },
        { id: 'g-152', question: 'Subjunctive imperfect: avoir - je', answer: 'que j\'eusse', explanation: 'Imparfait du subjonctif (literary)', category: 'archaic', difficulty: 6, type: 'archaic', cefrLevel: 'C2' },
        { id: 'g-153', question: 'Past anterior: finir - nous', answer: 'nous eûmes fini', explanation: 'Passé antérieur (rare)', category: 'archaic', difficulty: 6, type: 'archaic', cefrLevel: 'C2' },

        // C2: Complex Modal Expressions
        { id: 'g-154', question: 'He should have done it (Il __ le faire)', answer: 'Il aurait dû le faire', explanation: 'Complex modal + infinitive', category: 'modal', difficulty: 6, type: 'modal', cefrLevel: 'C2' },
        { id: 'g-155', question: 'They might have been (Ils __ été)', answer: 'Ils auraient pu être', explanation: 'Layered modality', category: 'modal', difficulty: 6, type: 'modal', cefrLevel: 'C2' },

        // C2: Literary/Poetic Constructions
        { id: 'g-156', question: 'Were it not for you (N\'__ -ce vous)', answer: 'N\'était-ce vous', explanation: 'Archaic conditional construction', category: 'literary', difficulty: 6, type: 'literary', cefrLevel: 'C2' },
        { id: 'g-157', question: 'Would that I could (Plût au ciel que je __)', answer: 'Plût au ciel que je puisse', explanation: 'Literary wish construction', category: 'literary', difficulty: 6, type: 'literary', cefrLevel: 'C2' },
        { id: 'g-158', question: 'Barely had he arrived (À peine __-il arrivé)', answer: 'À peine était-il arrivé', explanation: 'Inversion after à peine', category: 'literary', difficulty: 6, type: 'literary', cefrLevel: 'C2' },

        // C2: Sophisticated Register Shifting
        { id: 'g-159', question: 'Formal written: Il faut qu\'on parte', answer: 'Il convient que nous partions', explanation: 'Elevated register transformation', category: 'register', difficulty: 6, type: 'register', cefrLevel: 'C2' },
        { id: 'g-160', question: 'Academic: Je pense que c\'est vrai', answer: 'Il semble que cela soit avéré', explanation: 'Academic register shift', category: 'register', difficulty: 6, type: 'register', cefrLevel: 'C2' },
    ],

    // Conjugation Exercises
    conjugation: [
        // être (to be) - Present tense
        { id: 'c-1', verb: 'être', english: 'to be', subject: 'je', tense: 'present', answer: 'suis', question: 'je (être)', difficulty: 1, category: 'irregular', cefrLevel: 'A1' },
        { id: 'c-2', verb: 'être', english: 'to be', subject: 'tu', tense: 'present', answer: 'es', question: 'tu (être)', difficulty: 1, category: 'irregular', cefrLevel: 'A1' },
        { id: 'c-3', verb: 'être', english: 'to be', subject: 'il/elle', tense: 'present', answer: 'est', question: 'il/elle (être)', difficulty: 1, category: 'irregular', cefrLevel: 'A1' },
        { id: 'c-4', verb: 'être', english: 'to be', subject: 'nous', tense: 'present', answer: 'sommes', question: 'nous (être)', difficulty: 1, category: 'irregular', cefrLevel: 'A1' },
        { id: 'c-5', verb: 'être', english: 'to be', subject: 'vous', tense: 'present', answer: 'êtes', question: 'vous (être)', difficulty: 1, category: 'irregular', cefrLevel: 'A1' },
        { id: 'c-6', verb: 'être', english: 'to be', subject: 'ils/elles', tense: 'present', answer: 'sont', question: 'ils/elles (être)', difficulty: 1, category: 'irregular', cefrLevel: 'A1' },

        // avoir (to have) - Present tense
        { id: 'c-7', verb: 'avoir', english: 'to have', subject: 'je', tense: 'present', answer: 'ai', question: 'je (avoir)', difficulty: 1, category: 'irregular', cefrLevel: 'A1' },
        { id: 'c-8', verb: 'avoir', english: 'to have', subject: 'tu', tense: 'present', answer: 'as', question: 'tu (avoir)', difficulty: 1, category: 'irregular', cefrLevel: 'A1' },
        { id: 'c-9', verb: 'avoir', english: 'to have', subject: 'il/elle', tense: 'present', answer: 'a', question: 'il/elle (avoir)', difficulty: 1, category: 'irregular', cefrLevel: 'A1' },
        { id: 'c-10', verb: 'avoir', english: 'to have', subject: 'nous', tense: 'present', answer: 'avons', question: 'nous (avoir)', difficulty: 1, category: 'irregular', cefrLevel: 'A1' },
        { id: 'c-11', verb: 'avoir', english: 'to have', subject: 'vous', tense: 'present', answer: 'avez', question: 'vous (avoir)', difficulty: 1, category: 'irregular', cefrLevel: 'A1' },
        { id: 'c-12', verb: 'avoir', english: 'to have', subject: 'ils/elles', tense: 'present', answer: 'ont', question: 'ils/elles (avoir)', difficulty: 1, category: 'irregular', cefrLevel: 'A1' },

        // aller (to go) - Present tense
        { id: 'c-13', verb: 'aller', english: 'to go', subject: 'je', tense: 'present', answer: 'vais', question: 'je (aller)', difficulty: 1, category: 'irregular', cefrLevel: 'A1' },
        { id: 'c-14', verb: 'aller', english: 'to go', subject: 'tu', tense: 'present', answer: 'vas', question: 'tu (aller)', difficulty: 1, category: 'irregular', cefrLevel: 'A1' },
        { id: 'c-15', verb: 'aller', english: 'to go', subject: 'il/elle', tense: 'present', answer: 'va', question: 'il/elle (aller)', difficulty: 1, category: 'irregular', cefrLevel: 'A1' },
        { id: 'c-16', verb: 'aller', english: 'to go', subject: 'nous', tense: 'present', answer: 'allons', question: 'nous (aller)', difficulty: 1, category: 'irregular', cefrLevel: 'A1' },
        { id: 'c-17', verb: 'aller', english: 'to go', subject: 'vous', tense: 'present', answer: 'allez', question: 'vous (aller)', difficulty: 1, category: 'irregular', cefrLevel: 'A1' },
        { id: 'c-18', verb: 'aller', english: 'to go', subject: 'ils/elles', tense: 'present', answer: 'vont', question: 'ils/elles (aller)', difficulty: 1, category: 'irregular', cefrLevel: 'A1' },

        // -er verbs: parler (to speak)
        { id: 'c-19', verb: 'parler', english: 'to speak', subject: 'je', tense: 'present', answer: 'parle', question: 'je (parler)', difficulty: 1, category: 'er-verb', cefrLevel: 'A1' },
        { id: 'c-20', verb: 'parler', english: 'to speak', subject: 'tu', tense: 'present', answer: 'parles', question: 'tu (parler)', difficulty: 1, category: 'er-verb', cefrLevel: 'A1' },
        { id: 'c-21', verb: 'parler', english: 'to speak', subject: 'il/elle', tense: 'present', answer: 'parle', question: 'il/elle (parler)', difficulty: 1, category: 'er-verb', cefrLevel: 'A1' },
        { id: 'c-22', verb: 'parler', english: 'to speak', subject: 'nous', tense: 'present', answer: 'parlons', question: 'nous (parler)', difficulty: 1, category: 'er-verb', cefrLevel: 'A1' },
        { id: 'c-23', verb: 'parler', english: 'to speak', subject: 'vous', tense: 'present', answer: 'parlez', question: 'vous (parler)', difficulty: 1, category: 'er-verb', cefrLevel: 'A1' },
        { id: 'c-24', verb: 'parler', english: 'to speak', subject: 'ils/elles', tense: 'present', answer: 'parlent', question: 'ils/elles (parler)', difficulty: 1, category: 'er-verb', cefrLevel: 'A1' },

        // -er verbs: manger (to eat)
        { id: 'c-25', verb: 'manger', english: 'to eat', subject: 'je', tense: 'present', answer: 'mange', question: 'je (manger)', difficulty: 1, category: 'er-verb', cefrLevel: 'A1' },
        { id: 'c-26', verb: 'manger', english: 'to eat', subject: 'tu', tense: 'present', answer: 'manges', question: 'tu (manger)', difficulty: 1, category: 'er-verb', cefrLevel: 'A1' },
        { id: 'c-27', verb: 'manger', english: 'to eat', subject: 'il/elle', tense: 'present', answer: 'mange', question: 'il/elle (manger)', difficulty: 1, category: 'er-verb', cefrLevel: 'A1' },
        { id: 'c-28', verb: 'manger', english: 'to eat', subject: 'nous', tense: 'present', answer: 'mangeons', question: 'nous (manger)', difficulty: 1, category: 'er-verb', cefrLevel: 'A1' },
        { id: 'c-29', verb: 'manger', english: 'to eat', subject: 'vous', tense: 'present', answer: 'mangez', question: 'vous (manger)', difficulty: 1, category: 'er-verb', cefrLevel: 'A1' },
        { id: 'c-30', verb: 'manger', english: 'to eat', subject: 'ils/elles', tense: 'present', answer: 'mangent', question: 'ils/elles (manger)', difficulty: 1, category: 'er-verb', cefrLevel: 'A1' },

        // -ir verbs: finir (to finish)
        { id: 'c-31', verb: 'finir', english: 'to finish', subject: 'je', tense: 'present', answer: 'finis', question: 'je (finir)', difficulty: 2, category: 'ir-verb', cefrLevel: 'A2' },
        { id: 'c-32', verb: 'finir', english: 'to finish', subject: 'tu', tense: 'present', answer: 'finis', question: 'tu (finir)', difficulty: 2, category: 'ir-verb', cefrLevel: 'A2' },
        { id: 'c-33', verb: 'finir', english: 'to finish', subject: 'il/elle', tense: 'present', answer: 'finit', question: 'il/elle (finir)', difficulty: 2, category: 'ir-verb', cefrLevel: 'A2' },
        { id: 'c-34', verb: 'finir', english: 'to finish', subject: 'nous', tense: 'present', answer: 'finissons', question: 'nous (finir)', difficulty: 2, category: 'ir-verb', cefrLevel: 'A2' },
        { id: 'c-35', verb: 'finir', english: 'to finish', subject: 'vous', tense: 'present', answer: 'finissez', question: 'vous (finir)', difficulty: 2, category: 'ir-verb', cefrLevel: 'A2' },
        { id: 'c-36', verb: 'finir', english: 'to finish', subject: 'ils/elles', tense: 'present', answer: 'finissent', question: 'ils/elles (finir)', difficulty: 2, category: 'ir-verb', cefrLevel: 'A2' },

        // -re verbs: vendre (to sell)
        { id: 'c-37', verb: 'vendre', english: 'to sell', subject: 'je', tense: 'present', answer: 'vends', question: 'je (vendre)', difficulty: 2, category: 're-verb', cefrLevel: 'A2' },
        { id: 'c-38', verb: 'vendre', english: 'to sell', subject: 'tu', tense: 'present', answer: 'vends', question: 'tu (vendre)', difficulty: 2, category: 're-verb', cefrLevel: 'A2' },
        { id: 'c-39', verb: 'vendre', english: 'to sell', subject: 'il/elle', tense: 'present', answer: 'vend', question: 'il/elle (vendre)', difficulty: 2, category: 're-verb', cefrLevel: 'A2' },
        { id: 'c-40', verb: 'vendre', english: 'to sell', subject: 'nous', tense: 'present', answer: 'vendons', question: 'nous (vendre)', difficulty: 2, category: 're-verb', cefrLevel: 'A2' },
        { id: 'c-41', verb: 'vendre', english: 'to sell', subject: 'vous', tense: 'present', answer: 'vendez', question: 'vous (vendre)', difficulty: 2, category: 're-verb', cefrLevel: 'A2' },
        { id: 'c-42', verb: 'vendre', english: 'to sell', subject: 'ils/elles', tense: 'present', answer: 'vendent', question: 'ils/elles (vendre)', difficulty: 2, category: 're-verb', cefrLevel: 'A2' },

        // faire (to do/make) - Present tense
        { id: 'c-43', verb: 'faire', english: 'to do/make', subject: 'je', tense: 'present', answer: 'fais', question: 'je (faire)', difficulty: 1, category: 'irregular', cefrLevel: 'A1' },
        { id: 'c-44', verb: 'faire', english: 'to do/make', subject: 'tu', tense: 'present', answer: 'fais', question: 'tu (faire)', difficulty: 1, category: 'irregular', cefrLevel: 'A1' },
        { id: 'c-45', verb: 'faire', english: 'to do/make', subject: 'il/elle', tense: 'present', answer: 'fait', question: 'il/elle (faire)', difficulty: 1, category: 'irregular', cefrLevel: 'A1' },
        { id: 'c-46', verb: 'faire', english: 'to do/make', subject: 'nous', tense: 'present', answer: 'faisons', question: 'nous (faire)', difficulty: 1, category: 'irregular', cefrLevel: 'A1' },
        { id: 'c-47', verb: 'faire', english: 'to do/make', subject: 'vous', tense: 'present', answer: 'faites', question: 'vous (faire)', difficulty: 1, category: 'irregular', cefrLevel: 'A1' },
        { id: 'c-48', verb: 'faire', english: 'to do/make', subject: 'ils/elles', tense: 'present', answer: 'font', question: 'ils/elles (faire)', difficulty: 1, category: 'irregular', cefrLevel: 'A1' },

        // Passé Composé (Past Composite) - 12 exercises
        { id: 'c-49', verb: 'être', english: 'to be', subject: 'j\'', tense: 'passé composé', answer: 'ai été', question: 'j\' (être - passé composé)', difficulty: 2, category: 'irregular', cefrLevel: 'A2' },
        { id: 'c-50', verb: 'avoir', english: 'to have', subject: 'j\'', tense: 'passé composé', answer: 'ai eu', question: 'j\' (avoir - passé composé)', difficulty: 2, category: 'irregular', cefrLevel: 'A2' },
        { id: 'c-51', verb: 'aller', english: 'to go', subject: 'je', tense: 'passé composé', answer: 'suis allé(e)', question: 'je (aller - passé composé)', difficulty: 2, category: 'irregular', cefrLevel: 'A2' },
        { id: 'c-52', verb: 'faire', english: 'to do/make', subject: 'j\'', tense: 'passé composé', answer: 'ai fait', question: 'j\' (faire - passé composé)', difficulty: 2, category: 'irregular', cefrLevel: 'A2' },
        { id: 'c-53', verb: 'manger', english: 'to eat', subject: 'j\'', tense: 'passé composé', answer: 'ai mangé', question: 'j\' (manger - passé composé)', difficulty: 2, category: 'er-verb', cefrLevel: 'A2' },
        { id: 'c-54', verb: 'parler', english: 'to speak', subject: 'tu', tense: 'passé composé', answer: 'as parlé', question: 'tu (parler - passé composé)', difficulty: 2, category: 'er-verb', cefrLevel: 'A2' },
        { id: 'c-55', verb: 'finir', english: 'to finish', subject: 'il/elle', tense: 'passé composé', answer: 'a fini', question: 'il/elle (finir - passé composé)', difficulty: 2, category: 'ir-verb', cefrLevel: 'A2' },
        { id: 'c-56', verb: 'venir', english: 'to come', subject: 'je', tense: 'passé composé', answer: 'suis venu(e)', question: 'je (venir - passé composé)', difficulty: 3, category: 'irregular', cefrLevel: 'B1' },
        { id: 'c-57', verb: 'prendre', english: 'to take', subject: 'nous', tense: 'passé composé', answer: 'avons pris', question: 'nous (prendre - passé composé)', difficulty: 3, category: 'irregular', cefrLevel: 'B1' },
        { id: 'c-58', verb: 'voir', english: 'to see', subject: 'vous', tense: 'passé composé', answer: 'avez vu', question: 'vous (voir - passé composé)', difficulty: 3, category: 'irregular', cefrLevel: 'B1' },
        { id: 'c-59', verb: 'pouvoir', english: 'can/to be able', subject: 'ils/elles', tense: 'passé composé', answer: 'ont pu', question: 'ils/elles (pouvoir - passé composé)', difficulty: 3, category: 'irregular', cefrLevel: 'B1' },
        { id: 'c-60', verb: 'vouloir', english: 'to want', subject: 'j\'', tense: 'passé composé', answer: 'ai voulu', question: 'j\' (vouloir - passé composé)', difficulty: 3, category: 'irregular', cefrLevel: 'B1' },

        // Imparfait (Imperfect) - 12 exercises
        { id: 'c-61', verb: 'être', english: 'to be', subject: 'j\'', tense: 'imparfait', answer: 'étais', question: 'j\' (être - imparfait)', difficulty: 2, category: 'irregular', cefrLevel: 'A2' },
        { id: 'c-62', verb: 'avoir', english: 'to have', subject: 'tu', tense: 'imparfait', answer: 'avais', question: 'tu (avoir - imparfait)', difficulty: 2, category: 'irregular', cefrLevel: 'A2' },
        { id: 'c-63', verb: 'aller', english: 'to go', subject: 'il/elle', tense: 'imparfait', answer: 'allait', question: 'il/elle (aller - imparfait)', difficulty: 2, category: 'irregular', cefrLevel: 'A2' },
        { id: 'c-64', verb: 'faire', english: 'to do/make', subject: 'nous', tense: 'imparfait', answer: 'faisions', question: 'nous (faire - imparfait)', difficulty: 2, category: 'irregular', cefrLevel: 'A2' },
        { id: 'c-65', verb: 'manger', english: 'to eat', subject: 'je', tense: 'imparfait', answer: 'mangeais', question: 'je (manger - imparfait)', difficulty: 2, category: 'er-verb', cefrLevel: 'A2' },
        { id: 'c-66', verb: 'parler', english: 'to speak', subject: 'vous', tense: 'imparfait', answer: 'parliez', question: 'vous (parler - imparfait)', difficulty: 2, category: 'er-verb', cefrLevel: 'A2' },
        { id: 'c-67', verb: 'finir', english: 'to finish', subject: 'ils/elles', tense: 'imparfait', answer: 'finissaient', question: 'ils/elles (finir - imparfait)', difficulty: 2, category: 'ir-verb', cefrLevel: 'A2' },
        { id: 'c-68', verb: 'venir', english: 'to come', subject: 'je', tense: 'imparfait', answer: 'venais', question: 'je (venir - imparfait)', difficulty: 3, category: 'irregular', cefrLevel: 'B1' },
        { id: 'c-69', verb: 'prendre', english: 'to take', subject: 'tu', tense: 'imparfait', answer: 'prenais', question: 'tu (prendre - imparfait)', difficulty: 3, category: 'irregular', cefrLevel: 'B1' },
        { id: 'c-70', verb: 'voir', english: 'to see', subject: 'il/elle', tense: 'imparfait', answer: 'voyait', question: 'il/elle (voir - imparfait)', difficulty: 3, category: 'irregular', cefrLevel: 'B1' },
        { id: 'c-71', verb: 'pouvoir', english: 'can/to be able', subject: 'nous', tense: 'imparfait', answer: 'pouvions', question: 'nous (pouvoir - imparfait)', difficulty: 3, category: 'irregular', cefrLevel: 'B1' },
        { id: 'c-72', verb: 'vouloir', english: 'to want', subject: 'vous', tense: 'imparfait', answer: 'vouliez', question: 'vous (vouloir - imparfait)', difficulty: 3, category: 'irregular', cefrLevel: 'B1' },

        // Futur Simple (Future) - 12 exercises
        { id: 'c-73', verb: 'être', english: 'to be', subject: 'je', tense: 'futur', answer: 'serai', question: 'je (être - futur)', difficulty: 2, category: 'irregular', cefrLevel: 'A2' },
        { id: 'c-74', verb: 'avoir', english: 'to have', subject: 'tu', tense: 'futur', answer: 'auras', question: 'tu (avoir - futur)', difficulty: 2, category: 'irregular', cefrLevel: 'A2' },
        { id: 'c-75', verb: 'aller', english: 'to go', subject: 'il/elle', tense: 'futur', answer: 'ira', question: 'il/elle (aller - futur)', difficulty: 2, category: 'irregular', cefrLevel: 'A2' },
        { id: 'c-76', verb: 'faire', english: 'to do/make', subject: 'nous', tense: 'futur', answer: 'ferons', question: 'nous (faire - futur)', difficulty: 2, category: 'irregular', cefrLevel: 'A2' },
        { id: 'c-77', verb: 'manger', english: 'to eat', subject: 'je', tense: 'futur', answer: 'mangerai', question: 'je (manger - futur)', difficulty: 2, category: 'er-verb', cefrLevel: 'A2' },
        { id: 'c-78', verb: 'parler', english: 'to speak', subject: 'vous', tense: 'futur', answer: 'parlerez', question: 'vous (parler - futur)', difficulty: 2, category: 'er-verb', cefrLevel: 'A2' },
        { id: 'c-79', verb: 'finir', english: 'to finish', subject: 'ils/elles', tense: 'futur', answer: 'finiront', question: 'ils/elles (finir - futur)', difficulty: 2, category: 'ir-verb', cefrLevel: 'A2' },
        { id: 'c-80', verb: 'venir', english: 'to come', subject: 'je', tense: 'futur', answer: 'viendrai', question: 'je (venir - futur)', difficulty: 3, category: 'irregular', cefrLevel: 'B1' },
        { id: 'c-81', verb: 'prendre', english: 'to take', subject: 'tu', tense: 'futur', answer: 'prendras', question: 'tu (prendre - futur)', difficulty: 3, category: 'irregular', cefrLevel: 'B1' },
        { id: 'c-82', verb: 'voir', english: 'to see', subject: 'il/elle', tense: 'futur', answer: 'verra', question: 'il/elle (voir - futur)', difficulty: 3, category: 'irregular', cefrLevel: 'B1' },
        { id: 'c-83', verb: 'pouvoir', english: 'can/to be able', subject: 'nous', tense: 'futur', answer: 'pourrons', question: 'nous (pouvoir - futur)', difficulty: 3, category: 'irregular', cefrLevel: 'B1' },
        { id: 'c-84', verb: 'vouloir', english: 'to want', subject: 'vous', tense: 'futur', answer: 'voudrez', question: 'vous (vouloir - futur)', difficulty: 3, category: 'irregular', cefrLevel: 'B1' },

        // Conditionnel (Conditional) - 12 exercises
        { id: 'c-85', verb: 'être', english: 'to be', subject: 'je', tense: 'conditionnel', answer: 'serais', question: 'je (être - conditionnel)', difficulty: 3, category: 'irregular', cefrLevel: 'B1' },
        { id: 'c-86', verb: 'avoir', english: 'to have', subject: 'tu', tense: 'conditionnel', answer: 'aurais', question: 'tu (avoir - conditionnel)', difficulty: 3, category: 'irregular', cefrLevel: 'B1' },
        { id: 'c-87', verb: 'aller', english: 'to go', subject: 'il/elle', tense: 'conditionnel', answer: 'irait', question: 'il/elle (aller - conditionnel)', difficulty: 3, category: 'irregular', cefrLevel: 'B1' },
        { id: 'c-88', verb: 'faire', english: 'to do/make', subject: 'nous', tense: 'conditionnel', answer: 'ferions', question: 'nous (faire - conditionnel)', difficulty: 3, category: 'irregular', cefrLevel: 'B1' },
        { id: 'c-89', verb: 'manger', english: 'to eat', subject: 'je', tense: 'conditionnel', answer: 'mangerais', question: 'je (manger - conditionnel)', difficulty: 3, category: 'er-verb', cefrLevel: 'B1' },
        { id: 'c-90', verb: 'parler', english: 'to speak', subject: 'vous', tense: 'conditionnel', answer: 'parleriez', question: 'vous (parler - conditionnel)', difficulty: 3, category: 'er-verb', cefrLevel: 'B1' },
        { id: 'c-91', verb: 'finir', english: 'to finish', subject: 'ils/elles', tense: 'conditionnel', answer: 'finiraient', question: 'ils/elles (finir - conditionnel)', difficulty: 3, category: 'ir-verb', cefrLevel: 'B1' },
        { id: 'c-92', verb: 'venir', english: 'to come', subject: 'je', tense: 'conditionnel', answer: 'viendrais', question: 'je (venir - conditionnel)', difficulty: 4, category: 'irregular', cefrLevel: 'B2' },
        { id: 'c-93', verb: 'prendre', english: 'to take', subject: 'tu', tense: 'conditionnel', answer: 'prendrais', question: 'tu (prendre - conditionnel)', difficulty: 4, category: 'irregular', cefrLevel: 'B2' },
        { id: 'c-94', verb: 'voir', english: 'to see', subject: 'il/elle', tense: 'conditionnel', answer: 'verrait', question: 'il/elle (voir - conditionnel)', difficulty: 4, category: 'irregular', cefrLevel: 'B2' },
        { id: 'c-95', verb: 'pouvoir', english: 'can/to be able', subject: 'nous', tense: 'conditionnel', answer: 'pourrions', question: 'nous (pouvoir - conditionnel)', difficulty: 4, category: 'irregular', cefrLevel: 'B2' },
        { id: 'c-96', verb: 'vouloir', english: 'to want', subject: 'vous', tense: 'conditionnel', answer: 'voudriez', question: 'vous (vouloir - conditionnel)', difficulty: 4, category: 'irregular', cefrLevel: 'B2' },
    ],

    // Reading Comprehension Passages
    reading: [
        // A1 Level - Simple texts (10 passages, 2 questions each = 20 total questions)
        {
            id: 'r-1',
            title: 'Ma famille',
            passage: 'Je m\'appelle Marie. J\'ai une famille. Mon père s\'appelle Jean. Ma mère s\'appelle Claire. J\'ai un frère, Thomas. Il a dix ans.',
            cefrLevel: 'A1',
            difficulty: 1,
            category: 'family',
            questions: [
                { question: 'Comment s\'appelle le père?', answer: 'Jean', type: 'factual' },
                { question: 'Quel âge a Thomas?', answer: 'dix ans', type: 'factual', alternatives: ['10 ans'] }
            ]
        },
        {
            id: 'r-2',
            title: 'À l\'école',
            passage: 'Je vais à l\'école le lundi. J\'aime l\'école. Ma professeure s\'appelle Madame Dubois. Elle est gentille. J\'ai des amis à l\'école.',
            cefrLevel: 'A1',
            difficulty: 1,
            category: 'school',
            questions: [
                { question: 'Quand va-t-il/elle à l\'école?', answer: 'le lundi', type: 'factual' },
                { question: 'Comment est la professeure?', answer: 'gentille', type: 'descriptive' }
            ]
        },
        {
            id: 'r-3',
            title: 'Au café',
            passage: 'Je suis au café. Je bois un café. Mon ami boit un thé. Nous mangeons des croissants. C\'est délicieux.',
            cefrLevel: 'A1',
            difficulty: 1,
            category: 'food',
            questions: [
                { question: 'Que boit l\'ami?', answer: 'un thé', type: 'factual', alternatives: ['thé'] },
                { question: 'Que mangent-ils?', answer: 'des croissants', type: 'factual', alternatives: ['croissants'] }
            ]
        },
        {
            id: 'r-4',
            title: 'Ma maison',
            passage: 'J\'habite dans une maison. Ma maison est grande. Il y a trois chambres. Il y a un jardin. J\'aime ma maison.',
            cefrLevel: 'A1',
            difficulty: 1,
            category: 'home',
            questions: [
                { question: 'Comment est la maison?', answer: 'grande', type: 'descriptive' },
                { question: 'Combien de chambres y a-t-il?', answer: 'trois', type: 'factual', alternatives: ['3'] }
            ]
        },
        {
            id: 'r-5',
            title: 'Les animaux',
            passage: 'J\'ai un chien. Mon chien s\'appelle Max. Il est noir. Max aime jouer. Il est très gentil.',
            cefrLevel: 'A1',
            difficulty: 1,
            category: 'animals',
            questions: [
                { question: 'Comment s\'appelle le chien?', answer: 'Max', type: 'factual' },
                { question: 'De quelle couleur est Max?', answer: 'noir', type: 'descriptive' }
            ]
        },
        {
            id: 'r-6',
            title: 'Le weekend',
            passage: 'Le samedi, je joue au football. Le dimanche, je vais au parc. J\'aime le weekend. Je suis content.',
            cefrLevel: 'A1',
            difficulty: 1,
            category: 'activities',
            questions: [
                { question: 'Quand joue-t-il au football?', answer: 'le samedi', type: 'factual' },
                { question: 'Où va-t-il le dimanche?', answer: 'au parc', type: 'factual' }
            ]
        },
        {
            id: 'r-7',
            title: 'Les courses',
            passage: 'Je vais au supermarché. J\'achète du pain. J\'achète aussi du lait et des œufs. Je paie à la caisse.',
            cefrLevel: 'A1',
            difficulty: 1,
            category: 'shopping',
            questions: [
                { question: 'Où va-t-il?', answer: 'au supermarché', type: 'factual' },
                { question: 'Qu\'achète-t-il avec le pain?', answer: 'du lait et des œufs', type: 'factual', alternatives: ['lait et œufs'] }
            ]
        },
        {
            id: 'r-8',
            title: 'La météo',
            passage: 'Aujourd\'hui, il fait beau. Le soleil brille. Il ne pleut pas. Je vais à la plage.',
            cefrLevel: 'A1',
            difficulty: 1,
            category: 'weather',
            questions: [
                { question: 'Quel temps fait-il?', answer: 'beau', type: 'descriptive', alternatives: ['il fait beau'] },
                { question: 'Où va-t-il?', answer: 'à la plage', type: 'factual' }
            ]
        },
        {
            id: 'r-9',
            title: 'Mon ami',
            passage: 'J\'ai un ami. Il s\'appelle Paul. Paul est grand. Il a les cheveux blonds. Nous jouons ensemble.',
            cefrLevel: 'A1',
            difficulty: 1,
            category: 'friends',
            questions: [
                { question: 'Comment s\'appelle l\'ami?', answer: 'Paul', type: 'factual' },
                { question: 'Comment est Paul?', answer: 'grand', type: 'descriptive' }
            ]
        },
        {
            id: 'r-10',
            title: 'Les couleurs',
            passage: 'J\'aime les couleurs. Mon couleur préférée est le bleu. Le ciel est bleu. La mer est bleue aussi.',
            cefrLevel: 'A1',
            difficulty: 1,
            category: 'description',
            questions: [
                { question: 'Quelle est sa couleur préférée?', answer: 'bleu', type: 'factual', alternatives: ['le bleu'] },
                { question: 'De quelle couleur est le ciel?', answer: 'bleu', type: 'factual' }
            ]
        },

        // A2 Level - Simple connected texts (15 passages, 2-3 questions each = 35 total questions)
        {
            id: 'r-11',
            title: 'Mes vacances',
            passage: 'L\'été dernier, je suis allé à Paris. J\'ai visité la Tour Eiffel. C\'était magnifique! J\'ai aussi visité le Louvre. J\'ai pris beaucoup de photos. Je veux retourner à Paris l\'année prochaine.',
            cefrLevel: 'A2',
            difficulty: 2,
            category: 'travel',
            questions: [
                { question: 'Où est-il allé l\'été dernier?', answer: 'Paris', type: 'factual', alternatives: ['à Paris'] },
                { question: 'Qu\'a-t-il visité?', answer: 'la Tour Eiffel et le Louvre', type: 'factual', alternatives: ['Tour Eiffel et Louvre'] },
                { question: 'Quand veut-il retourner?', answer: 'l\'année prochaine', type: 'factual' }
            ]
        },
        {
            id: 'r-12',
            title: 'Mon travail',
            passage: 'Je travaille dans un restaurant. Je commence à 10 heures du matin. Je finis à 18 heures. J\'aime mon travail parce que mes collègues sont sympathiques. Le restaurant est près de ma maison.',
            cefrLevel: 'A2',
            difficulty: 2,
            category: 'work',
            questions: [
                { question: 'Où travaille-t-il?', answer: 'dans un restaurant', type: 'factual', alternatives: ['restaurant'] },
                { question: 'Pourquoi aime-t-il son travail?', answer: 'ses collègues sont sympathiques', type: 'inference', alternatives: ['collègues sympathiques'] }
            ]
        },
        {
            id: 'r-13',
            title: 'Le marché',
            passage: 'Tous les samedis, je vais au marché. J\'achète des fruits et des légumes frais. Le vendeur est très gentil. Les tomates sont délicieuses. Les pommes sont moins chères qu\'au supermarché.',
            cefrLevel: 'A2',
            difficulty: 2,
            category: 'shopping',
            questions: [
                { question: 'Quand va-t-il au marché?', answer: 'tous les samedis', type: 'factual', alternatives: ['le samedi'] },
                { question: 'Que sont moins chères?', answer: 'les pommes', type: 'factual' }
            ]
        },
        {
            id: 'r-14',
            title: 'La fête d\'anniversaire',
            passage: 'Hier, c\'était l\'anniversaire de ma sœur. Elle a eu 25 ans. Nous avons organisé une fête. Beaucoup d\'amis sont venus. Nous avons mangé un gâteau au chocolat. Ma sœur était très contente.',
            cefrLevel: 'A2',
            difficulty: 2,
            category: 'celebration',
            questions: [
                { question: 'Quel âge a la sœur maintenant?', answer: '25 ans', type: 'factual', alternatives: ['vingt-cinq ans'] },
                { question: 'Qu\'ont-ils mangé?', answer: 'un gâteau au chocolat', type: 'factual', alternatives: ['gâteau au chocolat'] },
                { question: 'Comment était la sœur?', answer: 'contente', type: 'descriptive', alternatives: ['très contente'] }
            ]
        },
        {
            id: 'r-15',
            title: 'Mon quartier',
            passage: 'J\'habite dans un quartier calme. Il y a un parc à côté de ma maison. Les enfants jouent souvent dans le parc. Il y a aussi une boulangerie où j\'achète du pain tous les matins. Les voisins sont gentils.',
            cefrLevel: 'A2',
            difficulty: 2,
            category: 'neighborhood',
            questions: [
                { question: 'Comment est le quartier?', answer: 'calme', type: 'descriptive' },
                { question: 'Qu\'y a-t-il à côté de la maison?', answer: 'un parc', type: 'factual' }
            ]
        },
        {
            id: 'r-16',
            title: 'Le cinéma',
            passage: 'J\'aime aller au cinéma. Le weekend dernier, j\'ai vu un film français. C\'était une comédie. J\'ai ri beaucoup. Le film parlait d\'une famille parisienne. Je recommande ce film à mes amis.',
            cefrLevel: 'A2',
            difficulty: 2,
            category: 'entertainment',
            questions: [
                { question: 'Quel type de film a-t-il vu?', answer: 'une comédie', type: 'factual', alternatives: ['comédie'] },
                { question: 'De quoi parlait le film?', answer: 'd\'une famille parisienne', type: 'factual', alternatives: ['famille parisienne'] }
            ]
        },
        {
            id: 'r-17',
            title: 'La routine quotidienne',
            passage: 'Chaque matin, je me réveille à 7 heures. Je prends une douche et je prends mon petit déjeuner. Ensuite, je vais au travail en métro. Le trajet dure 30 minutes. Je rentre chez moi vers 19 heures.',
            cefrLevel: 'A2',
            difficulty: 2,
            category: 'daily-life',
            questions: [
                { question: 'À quelle heure se réveille-t-il?', answer: '7 heures', type: 'factual', alternatives: ['sept heures'] },
                { question: 'Combien de temps dure le trajet?', answer: '30 minutes', type: 'factual', alternatives: ['trente minutes'] }
            ]
        },
        {
            id: 'r-18',
            title: 'Le sport',
            passage: 'Je fais du sport trois fois par semaine. Le lundi et le mercredi, je vais à la salle de sport. Le vendredi, je joue au tennis avec mes amis. Le sport est important pour la santé.',
            cefrLevel: 'A2',
            difficulty: 2,
            category: 'sports',
            questions: [
                { question: 'Combien de fois fait-il du sport?', answer: 'trois fois par semaine', type: 'factual', alternatives: ['3 fois'] },
                { question: 'Quel sport pratique-t-il le vendredi?', answer: 'tennis', type: 'factual', alternatives: ['le tennis'] }
            ]
        },
        {
            id: 'r-19',
            title: 'La météo changeante',
            passage: 'Ce matin, il faisait beau mais maintenant il pleut. J\'ai oublié mon parapluie à la maison. Je dois attendre que la pluie s\'arrête. Demain, la météo annonce du soleil.',
            cefrLevel: 'A2',
            difficulty: 2,
            category: 'weather',
            questions: [
                { question: 'Quel temps fait-il maintenant?', answer: 'il pleut', type: 'factual', alternatives: ['pluie'] },
                { question: 'Qu\'a-t-il oublié?', answer: 'son parapluie', type: 'factual', alternatives: ['parapluie'] },
                { question: 'Quel temps est annoncé pour demain?', answer: 'soleil', type: 'factual', alternatives: ['du soleil'] }
            ]
        },
        {
            id: 'r-20',
            title: 'Le restaurant',
            passage: 'Hier soir, je suis allé au restaurant avec ma famille. Nous avons commandé des plats traditionnels français. J\'ai pris du bœuf bourguignon. C\'était délicieux. Le service était excellent.',
            cefrLevel: 'A2',
            difficulty: 2,
            category: 'dining',
            questions: [
                { question: 'Avec qui est-il allé au restaurant?', answer: 'sa famille', type: 'factual', alternatives: ['famille'] },
                { question: 'Qu\'a-t-il commandé?', answer: 'du bœuf bourguignon', type: 'factual', alternatives: ['bœuf bourguignon'] }
            ]
        },
        {
            id: 'r-21',
            title: 'Les études',
            passage: 'Ma fille étudie à l\'université. Elle fait des études de médecine. C\'est difficile mais elle travaille beaucoup. Elle veut devenir médecin. Ses professeurs disent qu\'elle est très talentueuse.',
            cefrLevel: 'A2',
            difficulty: 2,
            category: 'education',
            questions: [
                { question: 'Qu\'étudie la fille?', answer: 'médecine', type: 'factual', alternatives: ['la médecine'] },
                { question: 'Que veut-elle devenir?', answer: 'médecin', type: 'factual' }
            ]
        },
        {
            id: 'r-22',
            title: 'La bibliothèque',
            passage: 'J\'adore la bibliothèque de mon quartier. Elle est grande et calme. On peut emprunter des livres gratuitement. J\'y vais souvent le weekend pour lire et étudier. Il y a aussi des ordinateurs disponibles.',
            cefrLevel: 'A2',
            difficulty: 2,
            category: 'facilities',
            questions: [
                { question: 'Comment est la bibliothèque?', answer: 'grande et calme', type: 'descriptive' },
                { question: 'Quand y va-t-il?', answer: 'le weekend', type: 'factual' }
            ]
        },
        {
            id: 'r-23',
            title: 'Les transports',
            passage: 'Pour aller au travail, je peux prendre le bus ou le métro. Le métro est plus rapide mais le bus est plus confortable. Parfois, je prends mon vélo quand il fait beau. C\'est bon pour l\'environnement.',
            cefrLevel: 'A2',
            difficulty: 2,
            category: 'transportation',
            questions: [
                { question: 'Quel transport est plus rapide?', answer: 'le métro', type: 'factual', alternatives: ['métro'] },
                { question: 'Quand prend-il son vélo?', answer: 'quand il fait beau', type: 'factual' }
            ]
        },
        {
            id: 'r-24',
            title: 'Le jardin',
            passage: 'Mon grand-père a un grand jardin. Il cultive des tomates, des salades et des carottes. Il passe beaucoup de temps dans son jardin. En été, il nous donne des légumes frais. C\'est un bon jardinier.',
            cefrLevel: 'A2',
            difficulty: 2,
            category: 'hobbies',
            questions: [
                { question: 'Que cultive le grand-père?', answer: 'tomates, salades et carottes', type: 'factual', alternatives: ['légumes'] },
                { question: 'Quand donne-t-il des légumes?', answer: 'en été', type: 'factual' }
            ]
        },
        {
            id: 'r-25',
            title: 'La musique',
            passage: 'J\'apprends à jouer de la guitare depuis six mois. C\'est difficile au début mais maintenant je progresse. Je prends des cours tous les mardis soir. Mon professeur est patient et encourageant.',
            cefrLevel: 'A2',
            difficulty: 2,
            category: 'hobbies',
            questions: [
                { question: 'Depuis combien de temps apprend-il?', answer: 'six mois', type: 'factual', alternatives: ['6 mois'] },
                { question: 'Quand prend-il des cours?', answer: 'tous les mardis soir', type: 'factual', alternatives: ['mardis soir'] },
                { question: 'Comment est le professeur?', answer: 'patient et encourageant', type: 'descriptive' }
            ]
        },

        // B1 Level - Coherent texts on familiar topics (12 passages, 3 questions each = 36 questions)
        {
            id: 'r-26',
            title: 'Le télétravail',
            passage: 'Depuis la pandémie, beaucoup de personnes travaillent depuis chez elles. Le télétravail présente des avantages comme l\'économie de temps de transport et plus de flexibilité. Cependant, certains trouvent difficile de séparer vie professionnelle et vie personnelle. L\'isolement social peut aussi être un problème.',
            cefrLevel: 'B1',
            difficulty: 3,
            category: 'work',
            questions: [
                { question: 'Quels sont les avantages du télétravail mentionnés?', answer: 'économie de temps et flexibilité', type: 'factual', alternatives: ['temps et flexibilité'] },
                { question: 'Quel est un problème du télétravail?', answer: 'isolement social', type: 'factual', alternatives: ['séparation vie pro/perso', 'l\'isolement'] },
                { question: 'Depuis quand le télétravail s\'est-il développé?', answer: 'depuis la pandémie', type: 'inference' }
            ]
        },
        {
            id: 'r-27',
            title: 'L\'environnement',
            passage: 'La protection de l\'environnement est devenue une priorité mondiale. De plus en plus de personnes adoptent des gestes écologiques au quotidien: recyclage, réduction de la consommation d\'eau, utilisation des transports en commun. Les gouvernements mettent également en place des politiques pour réduire les émissions de CO2.',
            cefrLevel: 'B1',
            difficulty: 3,
            category: 'environment',
            questions: [
                { question: 'Donnez deux exemples de gestes écologiques mentionnés.', answer: 'recyclage et réduction d\'eau', type: 'factual', alternatives: ['recyclage et transports en commun'] },
                { question: 'Que font les gouvernements?', answer: 'réduire les émissions de CO2', type: 'factual', alternatives: ['politiques environnementales'] },
                { question: 'Quelle est l\'idée principale du texte?', answer: 'protection de l\'environnement', type: 'inference' }
            ]
        },
        {
            id: 'r-28',
            title: 'Les réseaux sociaux',
            passage: 'Les réseaux sociaux ont transformé notre façon de communiquer. Ils permettent de rester en contact avec des amis éloignés et de partager des moments de vie. Toutefois, l\'utilisation excessive peut avoir des effets négatifs sur la santé mentale, notamment chez les jeunes. Il est important de trouver un équilibre.',
            cefrLevel: 'B1',
            difficulty: 3,
            category: 'technology',
            questions: [
                { question: 'Quel est l\'avantage des réseaux sociaux?', answer: 'rester en contact', type: 'factual', alternatives: ['communication', 'contact avec amis'] },
                { question: 'Quel est le risque mentionné?', answer: 'effets négatifs sur santé mentale', type: 'factual', alternatives: ['santé mentale des jeunes'] },
                { question: 'Que recommande le texte?', answer: 'trouver un équilibre', type: 'inference' }
            ]
        },
        {
            id: 'r-29',
            title: 'La cuisine française',
            passage: 'La gastronomie française est reconnue mondialement. Chaque région a ses spécialités: la bouillabaisse à Marseille, le cassoulet dans le Sud-Ouest, la choucroute en Alsace. Les Français accordent beaucoup d\'importance aux repas, qui sont des moments de convivialité. Le repas français a même été inscrit au patrimoine culturel de l\'UNESCO.',
            cefrLevel: 'B1',
            difficulty: 3,
            category: 'culture',
            questions: [
                { question: 'Citez une spécialité et sa région.', answer: 'bouillabaisse à Marseille', type: 'factual', alternatives: ['cassoulet Sud-Ouest', 'choucroute Alsace'] },
                { question: 'Pourquoi les repas sont-ils importants en France?', answer: 'moments de convivialité', type: 'inference' },
                { question: 'Quelle reconnaissance internationale est mentionnée?', answer: 'patrimoine UNESCO', type: 'factual', alternatives: ['UNESCO'] }
            ]
        },
        {
            id: 'r-30',
            title: 'Le système éducatif',
            passage: 'En France, l\'école est obligatoire de 3 à 16 ans. Le système éducatif comprend l\'école maternelle, l\'école élémentaire, le collège et le lycée. Après le baccalauréat, les étudiants peuvent poursuivre des études supérieures à l\'université ou dans des grandes écoles. L\'éducation publique est gratuite et laïque.',
            cefrLevel: 'B1',
            difficulty: 3,
            category: 'education',
            questions: [
                { question: 'De quel âge à quel âge l\'école est-elle obligatoire?', answer: 'de 3 à 16 ans', type: 'factual', alternatives: ['3-16 ans'] },
                { question: 'Que peut-on faire après le baccalauréat?', answer: 'études supérieures', type: 'factual', alternatives: ['université ou grandes écoles'] },
                { question: 'Quelles sont les caractéristiques de l\'éducation publique?', answer: 'gratuite et laïque', type: 'factual' }
            ]
        },
        {
            id: 'r-31',
            title: 'Le tourisme durable',
            passage: 'Le tourisme de masse a des impacts négatifs sur l\'environnement et les communautés locales. C\'est pourquoi le concept de tourisme durable gagne en popularité. Il s\'agit de voyager de manière responsable, en respectant l\'environnement et les cultures locales. Les voyageurs choisissent des hébergements écologiques et privilégient les activités qui bénéficient aux populations locales.',
            cefrLevel: 'B1',
            difficulty: 3,
            category: 'travel',
            questions: [
                { question: 'Quels sont les impacts du tourisme de masse?', answer: 'négatifs sur environnement et communautés', type: 'factual' },
                { question: 'Qu\'est-ce que le tourisme durable?', answer: 'voyager de manière responsable', type: 'inference', alternatives: ['respecter environnement et cultures'] },
                { question: 'Que font les voyageurs responsables?', answer: 'hébergements écologiques et activités locales', type: 'factual' }
            ]
        },
        {
            id: 'r-32',
            title: 'La lecture numérique',
            passage: 'Avec l\'arrivée des liseuses et des tablettes, les habitudes de lecture ont changé. Certains préfèrent les livres numériques pour leur praticité: on peut emporter des centaines de livres en voyage. D\'autres restent attachés aux livres papier pour le plaisir du toucher et de l\'odeur. Les bibliothèques proposent maintenant les deux formats.',
            cefrLevel: 'B1',
            difficulty: 3,
            category: 'technology',
            questions: [
                { question: 'Quel est l\'avantage des livres numériques?', answer: 'praticité', type: 'factual', alternatives: ['emporter beaucoup de livres'] },
                { question: 'Pourquoi certains préfèrent les livres papier?', answer: 'plaisir du toucher et de l\'odeur', type: 'factual' },
                { question: 'Comment les bibliothèques se sont-elles adaptées?', answer: 'proposent les deux formats', type: 'inference' }
            ]
        },
        {
            id: 'r-33',
            title: 'Le volontariat',
            passage: 'De nombreux jeunes choisissent de faire du volontariat avant d\'entrer dans la vie active. Cette expérience permet de découvrir de nouveaux pays, d\'aider les communautés dans le besoin et de développer des compétences personnelles. Les organisations internationales offrent diverses missions dans les domaines de l\'éducation, de la santé et de l\'environnement.',
            cefrLevel: 'B1',
            difficulty: 3,
            category: 'social',
            questions: [
                { question: 'Pourquoi les jeunes font-ils du volontariat?', answer: 'découvrir pays et aider communautés', type: 'factual', alternatives: ['expérience et compétences'] },
                { question: 'Dans quels domaines trouve-t-on des missions?', answer: 'éducation, santé et environnement', type: 'factual' },
                { question: 'Quand font-ils généralement du volontariat?', answer: 'avant la vie active', type: 'inference' }
            ]
        },
        {
            id: 'r-34',
            title: 'L\'économie circulaire',
            passage: 'L\'économie circulaire vise à réduire le gaspillage en réutilisant les ressources existantes. Contrairement au modèle linéaire traditionnel (produire, consommer, jeter), elle encourage la réparation, le recyclage et le partage. De plus en plus d\'entreprises adoptent ce modèle pour minimiser leur impact environnemental et créer de la valeur durable.',
            cefrLevel: 'B1',
            difficulty: 3,
            category: 'economics',
            questions: [
                { question: 'Quel est l\'objectif de l\'économie circulaire?', answer: 'réduire le gaspillage', type: 'factual', alternatives: ['réutiliser ressources'] },
                { question: 'Qu\'encourage-t-elle?', answer: 'réparation, recyclage et partage', type: 'factual' },
                { question: 'En quoi diffère-t-elle du modèle traditionnel?', answer: 'réutilise au lieu de jeter', type: 'inference' }
            ]
        },
        {
            id: 'r-35',
            title: 'La santé mentale',
            passage: 'La société moderne prend de plus en plus conscience de l\'importance de la santé mentale. Le stress chronique et l\'anxiété affectent de nombreuses personnes. Il est essentiel de parler de ces problèmes et de chercher de l\'aide quand nécessaire. La méditation, l\'exercice physique et le maintien de liens sociaux sont des moyens efficaces de préserver son bien-être mental.',
            cefrLevel: 'B1',
            difficulty: 3,
            category: 'health',
            questions: [
                { question: 'Quels problèmes sont mentionnés?', answer: 'stress et anxiété', type: 'factual', alternatives: ['stress chronique et anxiété'] },
                { question: 'Que recommande le texte?', answer: 'parler et chercher de l\'aide', type: 'factual' },
                { question: 'Citez deux moyens de préserver la santé mentale.', answer: 'méditation et exercice', type: 'factual', alternatives: ['exercice et liens sociaux'] }
            ]
        },
        {
            id: 'r-36',
            title: 'Les villes intelligentes',
            passage: 'Les villes intelligentes utilisent la technologie pour améliorer la qualité de vie des habitants. Des capteurs collectent des données sur le trafic, la pollution et la consommation d\'énergie. Ces informations permettent d\'optimiser les services publics et de réduire l\'impact environnemental. Cependant, la protection des données personnelles reste une préoccupation majeure.',
            cefrLevel: 'B1',
            difficulty: 3,
            category: 'technology',
            questions: [
                { question: 'Que collectent les capteurs?', answer: 'données sur trafic, pollution et énergie', type: 'factual' },
                { question: 'À quoi servent ces informations?', answer: 'optimiser services et réduire impact', type: 'factual' },
                { question: 'Quelle préoccupation est mentionnée?', answer: 'protection données personnelles', type: 'factual' }
            ]
        },
        {
            id: 'r-37',
            title: 'L\'apprentissage des langues',
            passage: 'Apprendre une langue étrangère offre de nombreux avantages. Cela améliore les capacités cognitives, facilite les voyages et ouvre des opportunités professionnelles. Les méthodes d\'apprentissage ont évolué: applications mobiles, échanges linguistiques en ligne, séries en version originale. L\'important est de pratiquer régulièrement et de ne pas avoir peur de faire des erreurs.',
            cefrLevel: 'B1',
            difficulty: 3,
            category: 'education',
            questions: [
                { question: 'Quels sont les avantages d\'apprendre une langue?', answer: 'capacités cognitives, voyages, opportunités pro', type: 'factual' },
                { question: 'Citez deux méthodes modernes mentionnées.', answer: 'applications et échanges en ligne', type: 'factual', alternatives: ['applications et séries'] },
                { question: 'Quelle est la clé du succès?', answer: 'pratiquer régulièrement', type: 'inference', alternatives: ['ne pas avoir peur des erreurs'] }
            ]
        },

        // B2 Level - Detailed texts on abstract topics (15 passages, 3 questions each = 45 questions)
        {
            id: 'r-38',
            title: 'L\'intelligence artificielle',
            passage: 'L\'intelligence artificielle transforme progressivement notre société. Des algorithmes sophistiqués sont désormais capables d\'analyser des données massives, de reconnaître des images et même de générer du contenu créatif. Si ces avancées offrent des opportunités considérables dans des domaines comme la médecine ou l\'éducation, elles soulèvent également des questions éthiques importantes concernant la vie privée, l\'emploi et la prise de décision automatisée.',
            cefrLevel: 'B2',
            difficulty: 4,
            category: 'technology',
            questions: [
                { question: 'Que peuvent faire les algorithmes d\'IA?', answer: 'analyser données, reconnaître images, générer contenu', type: 'factual' },
                { question: 'Dans quels domaines l\'IA offre-t-elle des opportunités?', answer: 'médecine et éducation', type: 'factual' },
                { question: 'Quelles préoccupations éthiques sont mentionnées?', answer: 'vie privée, emploi, décision automatisée', type: 'factual' }
            ]
        },
        {
            id: 'r-39',
            title: 'Le changement climatique',
            passage: 'Les scientifiques s\'accordent sur l\'urgence d\'agir face au changement climatique. Les émissions de gaz à effet de serre ont entraîné une augmentation de la température mondiale, provoquant des phénomènes météorologiques extrêmes. La transition énergétique vers les sources renouvelables apparaît comme une solution incontournable, bien que sa mise en œuvre nécessite des investissements massifs et une volonté politique forte.',
            cefrLevel: 'B2',
            difficulty: 4,
            category: 'environment',
            questions: [
                { question: 'Quelle est la cause de l\'augmentation de température?', answer: 'émissions de gaz à effet de serre', type: 'factual' },
                { question: 'Quelle solution est proposée?', answer: 'transition énergétique vers renouvelables', type: 'factual' },
                { question: 'Qu\'est-ce qui est nécessaire pour cette transition?', answer: 'investissements massifs et volonté politique', type: 'factual' }
            ]
        },
        {
            id: 'r-40',
            title: 'La mondialisation culturelle',
            passage: 'La mondialisation a facilité les échanges culturels à une échelle sans précédent. Si elle permet une diffusion plus large des arts et des idées, certains craignent une homogénéisation culturelle au détriment des traditions locales. Le défi consiste à trouver un équilibre entre ouverture au monde et préservation de la diversité culturelle, patrimoine inestimable de l\'humanité.',
            cefrLevel: 'B2',
            difficulty: 4,
            category: 'culture',
            questions: [
                { question: 'Quel est l\'avantage de la mondialisation culturelle?', answer: 'diffusion des arts et des idées', type: 'factual' },
                { question: 'Quelle crainte est exprimée?', answer: 'homogénéisation culturelle', type: 'factual' },
                { question: 'Quel équilibre faut-il trouver?', answer: 'ouverture et préservation diversité', type: 'inference' }
            ]
        },
        {
            id: 'r-41',
            title: 'L\'éthique médicale',
            passage: 'Les progrès de la médecine soulèvent des dilemmes éthiques complexes. Les technologies comme l\'édition génétique CRISPR ouvrent des possibilités thérapeutiques révolutionnaires, mais posent la question des limites de l\'intervention humaine sur le vivant. Le consentement éclairé des patients et le respect de leur autonomie demeurent des principes fondamentaux, même face aux prouesses technologiques.',
            cefrLevel: 'B2',
            difficulty: 4,
            category: 'health',
            questions: [
                { question: 'Quelle technologie est mentionnée?', answer: 'CRISPR', type: 'factual', alternatives: ['édition génétique'] },
                { question: 'Quelle question éthique est soulevée?', answer: 'limites de l\'intervention sur le vivant', type: 'factual' },
                { question: 'Quels principes restent fondamentaux?', answer: 'consentement éclairé et autonomie', type: 'factual' }
            ]
        },
        {
            id: 'r-42',
            title: 'L\'économie collaborative',
            passage: 'L\'économie collaborative bouleverse les modèles traditionnels de consommation. Des plateformes numériques facilitent le partage de biens et de services entre particuliers, réduisant ainsi le gaspillage. Toutefois, ce modèle soulève des questions sur la protection sociale des travailleurs indépendants et la régulation de ces nouvelles activités économiques.',
            cefrLevel: 'B2',
            difficulty: 4,
            category: 'economics',
            questions: [
                { question: 'Que facilitent les plateformes numériques?', answer: 'partage de biens et services', type: 'factual' },
                { question: 'Quel bénéfice est mentionné?', answer: 'réduction du gaspillage', type: 'factual' },
                { question: 'Quelles préoccupations sont soulevées?', answer: 'protection sociale et régulation', type: 'factual' }
            ]
        },
        {
            id: 'r-43',
            title: 'L\'urbanisation durable',
            passage: 'Face à l\'urbanisation croissante, les villes doivent repenser leur développement. Le concept de ville durable intègre espaces verts, transports écologiques et bâtiments à faible consommation énergétique. Cette transformation nécessite une planification urbaine innovante et la participation active des citoyens aux décisions qui façonnent leur environnement quotidien.',
            cefrLevel: 'B2',
            difficulty: 4,
            category: 'urban-planning',
            questions: [
                { question: 'Qu\'intègre le concept de ville durable?', answer: 'espaces verts, transports écologiques, bâtiments économes', type: 'factual' },
                { question: 'Que nécessite cette transformation?', answer: 'planification innovante et participation citoyenne', type: 'factual' },
                { question: 'Pourquoi les villes doivent-elles se transformer?', answer: 'urbanisation croissante', type: 'inference' }
            ]
        },
        {
            id: 'r-44',
            title: 'La démocratie participative',
            passage: 'La démocratie représentative traditionnelle fait face à une crise de confiance. De nombreux citoyens aspirent à une participation plus directe aux décisions politiques. Les budgets participatifs, les consultations publiques et les plateformes de débat en ligne constituent des outils pour revitaliser l\'engagement démocratique, bien que leur efficacité dépende de la volonté des élus de tenir compte des avis exprimés.',
            cefrLevel: 'B2',
            difficulty: 4,
            category: 'politics',
            questions: [
                { question: 'À quel problème fait face la démocratie représentative?', answer: 'crise de confiance', type: 'factual' },
                { question: 'Citez deux outils de participation mentionnés.', answer: 'budgets participatifs et consultations publiques', type: 'factual', alternatives: ['consultations et plateformes en ligne'] },
                { question: 'De quoi dépend l\'efficacité de ces outils?', answer: 'volonté des élus', type: 'inference' }
            ]
        },
        {
            id: 'r-45',
            title: 'L\'éducation numérique',
            passage: 'L\'intégration du numérique dans l\'éducation transforme les méthodes pédagogiques. Les ressources en ligne offrent un accès sans précédent au savoir, tandis que les outils collaboratifs favorisent l\'apprentissage actif. Néanmoins, cette révolution numérique accentue les inégalités entre élèves selon leur équipement et leur maîtrise des outils technologiques, nécessitant des politiques d\'inclusion numérique.',
            cefrLevel: 'B2',
            difficulty: 4,
            category: 'education',
            questions: [
                { question: 'Quels avantages offre le numérique en éducation?', answer: 'accès au savoir et apprentissage actif', type: 'factual' },
                { question: 'Quel problème est soulevé?', answer: 'accentuation des inégalités', type: 'factual' },
                { question: 'Que faut-il pour résoudre ce problème?', answer: 'politiques d\'inclusion numérique', type: 'inference' }
            ]
        },
        {
            id: 'r-46',
            title: 'Le patrimoine immatériel',
            passage: 'Au-delà des monuments et des œuvres d\'art, le patrimoine culturel comprend des traditions, des savoir-faire et des expressions orales. L\'UNESCO reconnaît l\'importance de ce patrimoine immatériel en l\'inscrivant sur des listes protectrices. Sa transmission aux jeunes générations constitue un enjeu majeur dans un monde en mutation rapide où ces pratiques risquent de disparaître.',
            cefrLevel: 'B2',
            difficulty: 4,
            category: 'culture',
            questions: [
                { question: 'Que comprend le patrimoine immatériel?', answer: 'traditions, savoir-faire, expressions orales', type: 'factual' },
                { question: 'Comment l\'UNESCO protège-t-elle ce patrimoine?', answer: 'inscription sur listes protectrices', type: 'factual' },
                { question: 'Quel est l\'enjeu majeur mentionné?', answer: 'transmission aux jeunes générations', type: 'factual' }
            ]
        },
        {
            id: 'r-47',
            title: 'La sécurité alimentaire',
            passage: 'Nourrir une population mondiale croissante tout en préservant l\'environnement représente un défi considérable. L\'agriculture intensive a permis d\'augmenter les rendements, mais au prix d\'une dégradation des sols et de la biodiversité. Les approches agroécologiques proposent une alternative durable, combinant productivité et respect de l\'écosystème, bien que leur généralisation nécessite un changement profond des pratiques agricoles.',
            cefrLevel: 'B2',
            difficulty: 4,
            category: 'agriculture',
            questions: [
                { question: 'Quel est le défi mentionné?', answer: 'nourrir population en préservant environnement', type: 'factual' },
                { question: 'Quels problèmes cause l\'agriculture intensive?', answer: 'dégradation sols et biodiversité', type: 'factual' },
                { question: 'Que proposent les approches agroécologiques?', answer: 'productivité et respect écosystème', type: 'factual' }
            ]
        },
        {
            id: 'r-48',
            title: 'La migration internationale',
            passage: 'Les flux migratoires contemporains résultent de facteurs multiples: conflits armés, changements climatiques, recherche de meilleures opportunités économiques. L\'intégration des migrants pose des défis aux sociétés d\'accueil en termes d\'emploi, de logement et de cohésion sociale. Une approche équilibrée doit concilier l\'accueil humanitaire et la gestion des capacités d\'intégration.',
            cefrLevel: 'B2',
            difficulty: 4,
            category: 'social',
            questions: [
                { question: 'Quelles sont les causes des migrations?', answer: 'conflits, climat, opportunités économiques', type: 'factual' },
                { question: 'Quels défis d\'intégration sont mentionnés?', answer: 'emploi, logement, cohésion sociale', type: 'factual' },
                { question: 'Que doit concilier une approche équilibrée?', answer: 'accueil humanitaire et capacités d\'intégration', type: 'inference' }
            ]
        },
        {
            id: 'r-49',
            title: 'L\'obsolescence programmée',
            passage: 'L\'obsolescence programmée désigne la stratégie consistant à réduire délibérément la durée de vie d\'un produit pour stimuler la consommation. Cette pratique, critiquée pour son impact environnemental, génère des quantités massives de déchets électroniques. Face à ce constat, des initiatives législatives émergent pour garantir le droit à la réparation et encourager une économie plus durable.',
            cefrLevel: 'B2',
            difficulty: 4,
            category: 'economics',
            questions: [
                { question: 'Qu\'est-ce que l\'obsolescence programmée?', answer: 'réduire durée de vie pour stimuler consommation', type: 'factual' },
                { question: 'Quel est son impact?', answer: 'déchets électroniques massifs', type: 'factual', alternatives: ['impact environnemental'] },
                { question: 'Quelles initiatives émergent?', answer: 'droit à la réparation', type: 'factual', alternatives: ['législation pour économie durable'] }
            ]
        },
        {
            id: 'r-50',
            title: 'La recherche scientifique',
            passage: 'Le financement de la recherche fondamentale suscite des débats. Contrairement à la recherche appliquée qui vise des applications concrètes, la recherche fondamentale explore des questions théoriques sans retombées immédiates. Pourtant, l\'histoire montre que les découvertes fondamentales d\'aujourd\'hui constituent souvent les innovations de demain, justifiant ainsi l\'investissement public dans ce domaine.',
            cefrLevel: 'B2',
            difficulty: 4,
            category: 'science',
            questions: [
                { question: 'Quelle est la différence entre recherche fondamentale et appliquée?', answer: 'fondamentale explore théorie, appliquée vise applications', type: 'factual' },
                { question: 'Pourquoi faut-il financer la recherche fondamentale?', answer: 'découvertes deviennent innovations futures', type: 'inference' },
                { question: 'Qui devrait investir dans ce domaine?', answer: 'investissement public', type: 'factual' }
            ]
        },
        {
            id: 'r-51',
            title: 'Le bien-être au travail',
            passage: 'Les entreprises prennent progressivement conscience de l\'importance du bien-être des employés. La qualité de vie au travail influence non seulement la satisfaction personnelle mais aussi la productivité. Des aménagements comme le télétravail flexible, les espaces de détente et les programmes de formation contribuent à créer un environnement professionnel plus épanouissant, bénéfique tant pour les individus que pour les organisations.',
            cefrLevel: 'B2',
            difficulty: 4,
            category: 'work',
            questions: [
                { question: 'Qu\'influence la qualité de vie au travail?', answer: 'satisfaction et productivité', type: 'factual' },
                { question: 'Citez deux aménagements mentionnés.', answer: 'télétravail flexible et espaces de détente', type: 'factual', alternatives: ['espaces détente et programmes formation'] },
                { question: 'À qui profite un bon environnement professionnel?', answer: 'individus et organisations', type: 'factual' }
            ]
        },
        {
            id: 'r-52',
            title: 'La bioéthique',
            passage: 'Les avancées biotechnologiques posent des questions bioéthiques inédites. Le clonage thérapeutique, la gestation pour autrui ou l\'eugénisme génétique divisent les opinions. Les comités d\'éthique jouent un rôle crucial en établissant des cadres réglementaires qui tentent de concilier progrès scientifique et respect des valeurs humanistes fondamentales.',
            cefrLevel: 'B2',
            difficulty: 4,
            category: 'ethics',
            questions: [
                { question: 'Citez deux questions bioéthiques mentionnées.', answer: 'clonage thérapeutique et gestation pour autrui', type: 'factual', alternatives: ['GPA et eugénisme'] },
                { question: 'Quel est le rôle des comités d\'éthique?', answer: 'établir cadres réglementaires', type: 'factual' },
                { question: 'Que doivent concilier ces cadres?', answer: 'progrès scientifique et valeurs humanistes', type: 'factual' }
            ]
        },

        // C1 Level - Complex argumentative texts (10 passages, 3-4 questions = 35 questions)
        {
            id: 'r-53',
            title: 'La post-vérité',
            passage: 'Le concept de post-vérité caractérise une ère où les faits objectifs exercent moins d\'influence sur l\'opinion publique que les appels à l\'émotion et aux croyances personnelles. Les réseaux sociaux amplifient ce phénomène en créant des bulles informationnelles où chacun ne consomme que des contenus confirmant ses opinions préexistantes. Cette fragmentation du débat public menace les fondements démocratiques en rendant impossible l\'établissement d\'un socle factuel commun, préalable indispensable à toute délibération collective.',
            cefrLevel: 'C1',
            difficulty: 5,
            category: 'society',
            questions: [
                { question: 'Comment se définit la post-vérité?', answer: 'émotion et croyances priment sur faits objectifs', type: 'factual' },
                { question: 'Quel rôle jouent les réseaux sociaux?', answer: 'créent bulles informationnelles', type: 'factual' },
                { question: 'Pourquoi ce phénomène menace-t-il la démocratie?', answer: 'impossible d\'établir socle factuel commun', type: 'inference' },
                { question: 'Quel préalable est nécessaire à la délibération?', answer: 'socle factuel commun', type: 'factual' }
            ]
        },
        {
            id: 'r-54',
            title: 'L\'anthropocène',
            passage: 'Les géologues débattent de la pertinence de définir une nouvelle ère géologique: l\'anthropocène, marquée par l\'impact prépondérant de l\'activité humaine sur les écosystèmes terrestres. Cette conceptualisation, au-delà de son intérêt scientifique, revêt une dimension philosophique en interrogeant la responsabilité de l\'espèce humaine face aux bouleversements qu\'elle engendre. Elle soulève la question cruciale de savoir si nous saurons développer une conscience écologique à la hauteur de notre puissance technologique.',
            cefrLevel: 'C1',
            difficulty: 5,
            category: 'environment',
            questions: [
                { question: 'Qu\'est-ce qui caractérise l\'anthropocène?', answer: 'impact humain prépondérant sur écosystèmes', type: 'factual' },
                { question: 'Quelle dimension dépasse l\'intérêt scientifique?', answer: 'dimension philosophique', type: 'factual' },
                { question: 'Quelle responsabilité est interrogée?', answer: 'responsabilité face aux bouleversements', type: 'factual' },
                { question: 'Quelle question cruciale est soulevée?', answer: 'conscience écologique vs puissance technologique', type: 'inference' }
            ]
        },
        {
            id: 'r-55',
            title: 'Le relativisme culturel',
            passage: 'Le relativisme culturel postule qu\'aucune culture ne peut être jugée selon les critères d\'une autre, chaque système de valeurs étant légitime dans son contexte propre. Si cette approche favorise la tolérance et combat l\'ethnocentrisme, elle soulève néanmoins une interrogation fondamentale: existe-t-il des valeurs universelles transcendant les particularismes culturels? Le débat oppose ceux qui défendent l\'universalité des droits humains et ceux qui y voient une forme d\'impérialisme culturel occidental.',
            cefrLevel: 'C1',
            difficulty: 5,
            category: 'philosophy',
            questions: [
                { question: 'Que postule le relativisme culturel?', answer: 'aucune culture ne peut juger une autre', type: 'factual' },
                { question: 'Quels sont les avantages de cette approche?', answer: 'tolérance et combat contre ethnocentrisme', type: 'factual' },
                { question: 'Quelle interrogation fondamentale est soulevée?', answer: 'existence de valeurs universelles', type: 'factual' }
            ]
        },
        {
            id: 'r-56',
            title: 'La disruption technologique',
            passage: 'La notion de disruption désigne les innovations qui bouleversent radicalement des secteurs économiques établis. Si ces ruptures génèrent de la croissance et des opportunités, elles provoquent également des destructions d\'emplois et des déséquilibres sociaux. La capacité d\'une société à gérer ces transitions détermine sa résilience: formation continue, filets de sécurité sociale et dialogue social apparaissent comme des leviers essentiels pour que le progrès technologique profite au plus grand nombre plutôt qu\'à une élite.',
            cefrLevel: 'C1',
            difficulty: 5,
            category: 'economics',
            questions: [
                { question: 'Que désigne la disruption?', answer: 'innovations bouleversant secteurs établis', type: 'factual' },
                { question: 'Quels effets négatifs provoque-t-elle?', answer: 'destruction emplois et déséquilibres sociaux', type: 'factual' },
                { question: 'Citez deux leviers pour gérer ces transitions.', answer: 'formation continue et sécurité sociale', type: 'factual', alternatives: ['sécurité sociale et dialogue social'] },
                { question: 'Quel objectif doivent servir ces leviers?', answer: 'progrès profite au plus grand nombre', type: 'inference' }
            ]
        },
        {
            id: 'r-57',
            title: 'L\'art contemporain',
            passage: 'L\'art contemporain déconcerte souvent le public en remettant en question les critères esthétiques traditionnels. En privilégiant le concept sur la technique, les artistes contemporains interrogent la nature même de l\'œuvre d\'art et le rôle de l\'artiste dans la société. Cette démarche intellectuelle, bien que déroutante, invite à une réflexion critique sur les conventions artistiques et élargit considérablement le champ des possibles créatifs, même si elle entretient parfois un élitisme qui éloigne le grand public.',
            cefrLevel: 'C1',
            difficulty: 5,
            category: 'art',
            questions: [
                { question: 'Que remet en question l\'art contemporain?', answer: 'critères esthétiques traditionnels', type: 'factual' },
                { question: 'Que privilégient les artistes contemporains?', answer: 'concept sur technique', type: 'factual' },
                { question: 'Qu\'interrogent-ils?', answer: 'nature de l\'œuvre et rôle de l\'artiste', type: 'factual' },
                { question: 'Quel problème potentiel est mentionné?', answer: 'élitisme qui éloigne le public', type: 'factual' }
            ]
        },
        {
            id: 'r-58',
            title: 'La géopolitique de l\'eau',
            passage: 'L\'eau douce, ressource vitale inégalement répartie, devient un enjeu géopolitique majeur. Les bassins fluviaux transfrontaliers génèrent des tensions entre États riverains, chacun cherchant à sécuriser ses approvisionnements. Le changement climatique exacerbe ces conflits potentiels en modifiant les régimes hydrologiques. La gouvernance internationale de l\'eau nécessite des mécanismes de coopération innovants, capables de concilier souveraineté nationale et gestion collective d\'un bien commun essentiel à la survie humaine.',
            cefrLevel: 'C1',
            difficulty: 5,
            category: 'politics',
            questions: [
                { question: 'Pourquoi l\'eau devient-elle un enjeu géopolitique?', answer: 'ressource vitale inégalement répartie', type: 'factual' },
                { question: 'Que génèrent les bassins transfrontaliers?', answer: 'tensions entre États riverains', type: 'factual' },
                { question: 'Comment le climat aggrave-t-il la situation?', answer: 'modifie régimes hydrologiques', type: 'factual' },
                { question: 'Que doit concilier la gouvernance internationale?', answer: 'souveraineté et gestion collective', type: 'factual' }
            ]
        },
        {
            id: 'r-59',
            title: 'La médecine personnalisée',
            passage: 'La médecine personnalisée, rendue possible par le séquençage génomique, promet des traitements adaptés au profil génétique de chaque patient. Cette approche pourrait révolutionner la prise en charge de maladies complexes comme le cancer. Toutefois, elle soulève des préoccupations majeures concernant la confidentialité des données génétiques et le risque de discrimination par les assureurs ou les employeurs. L\'encadrement juridique de ces technologies doit évoluer pour protéger les individus sans entraver l\'innovation médicale.',
            cefrLevel: 'C1',
            difficulty: 5,
            category: 'medicine',
            questions: [
                { question: 'Qu\'est-ce que la médecine personnalisée?', answer: 'traitements adaptés au profil génétique', type: 'factual' },
                { question: 'Quelles préoccupations soulève-t-elle?', answer: 'confidentialité et discrimination', type: 'factual' },
                { question: 'Qui pourrait discriminer selon les données génétiques?', answer: 'assureurs et employeurs', type: 'factual' },
                { question: 'Que doit faire l\'encadrement juridique?', answer: 'protéger sans entraver innovation', type: 'inference' }
            ]
        },
        {
            id: 'r-60',
            title: 'L\'effondrement de la biodiversité',
            passage: 'Les scientifiques parlent désormais de sixième extinction de masse, provoquée non par un cataclysme naturel mais par l\'activité humaine. La disparition accélérée d\'espèces déstabilise les écosystèmes dont dépend notre propre survie. Au-delà des arguments écologiques, la préservation de la biodiversité répond à un impératif éthique: quelle légitimité avons-nous à condamner à l\'extinction des espèces ayant évolué pendant des millions d\'années? Cette question interpelle notre responsabilité envers les générations futures et les autres formes de vie.',
            cefrLevel: 'C1',
            difficulty: 5,
            category: 'environment',
            questions: [
                { question: 'Qu\'est-ce qui caractérise la sixième extinction?', answer: 'provoquée par activité humaine', type: 'factual' },
                { question: 'Pourquoi la biodiversité est-elle importante pour nous?', answer: 'écosystèmes dont dépend notre survie', type: 'factual' },
                { question: 'Quelle question éthique est posée?', answer: 'légitimité de condamner espèces à extinction', type: 'factual' },
                { question: 'Envers qui avons-nous une responsabilité?', answer: 'générations futures et autres formes de vie', type: 'factual' }
            ]
        },
        {
            id: 'r-61',
            title: 'Le transhumanisme',
            passage: 'Le transhumanisme envisage l\'amélioration des capacités humaines par la technologie, jusqu\'à transcender les limites biologiques. Prothèses augmentées, interfaces cerveau-machine, modification génétique: ces perspectives fascinent autant qu\'elles inquiètent. Les critiques dénoncent une fuite en avant technologique négligeant les questions fondamentales sur ce qui définit l\'humain. Le risque d\'une société à deux vitesses, entre "augmentés" et "naturels", pose un défi majeur d\'équité sociale que les tenants du transhumanisme peinent à résoudre.',
            cefrLevel: 'C1',
            difficulty: 5,
            category: 'technology',
            questions: [
                { question: 'Qu\'envisage le transhumanisme?', answer: 'amélioration capacités humaines par technologie', type: 'factual' },
                { question: 'Citez deux technologies mentionnées.', answer: 'prothèses augmentées et interfaces cerveau-machine', type: 'factual' },
                { question: 'Que néglige cette approche selon les critiques?', answer: 'questions sur ce qui définit l\'humain', type: 'factual' },
                { question: 'Quel risque social est soulevé?', answer: 'société à deux vitesses augmentés/naturels', type: 'factual' }
            ]
        },
        {
            id: 'r-62',
            title: 'La justice restaurative',
            passage: 'Contrairement au système pénal traditionnel axé sur la punition, la justice restaurative privilégie la réparation du préjudice et la réconciliation entre victimes et auteurs d\'infractions. Cette approche, inspirée de pratiques ancestrales, reconnaît que le crime affecte d\'abord les personnes et les communautés avant d\'être une violation de la loi. Les rencontres entre parties, dans un cadre sécurisé, peuvent favoriser la responsabilisation des délinquants et aider les victimes à surmonter leur traumatisme, bien que cette méthode ne convienne pas à toutes les situations.',
            cefrLevel: 'C1',
            difficulty: 5,
            category: 'law',
            questions: [
                { question: 'Que privilégie la justice restaurative?', answer: 'réparation et réconciliation', type: 'factual' },
                { question: 'Que reconnaît cette approche?', answer: 'crime affecte personnes avant d\'être violation loi', type: 'factual' },
                { question: 'Quels bénéfices peuvent avoir les rencontres?', answer: 'responsabilisation et surmonter traumatisme', type: 'factual' },
                { question: 'Quelle limite est mentionnée?', answer: 'ne convient pas à toutes situations', type: 'factual' }
            ]
        },

        // C2 Level - Highly sophisticated texts (5 passages, 4 questions = 20 questions)
        {
            id: 'r-63',
            title: 'L\'herméneutique philosophique',
            passage: 'L\'herméneutique, initialement cantonnée à l\'interprétation des textes sacrés, s\'est muée en philosophie générale de la compréhension humaine. Hans-Georg Gadamer a révolutionné ce champ en montrant que toute compréhension s\'inscrit dans une tradition interprétative préexistante: nous ne pouvons accéder au sens qu\'à travers nos préjugés, non au sens péjoratif mais comme structures anticipatrices de sens. Cette circularité herméneutique invalide l\'idéal positiviste d\'une objectivité désincarnée, substituant au paradigme de l\'explication celui de la compréhension dialogique où l\'interprète et l\'objet interprété se transforment mutuellement.',
            cefrLevel: 'C2',
            difficulty: 6,
            category: 'philosophy',
            questions: [
                { question: 'Comment l\'herméneutique a-t-elle évolué?', answer: 'de l\'interprétation des textes à philosophie de la compréhension', type: 'factual' },
                { question: 'Que sont les préjugés selon Gadamer?', answer: 'structures anticipatrices de sens', type: 'factual' },
                { question: 'Quel idéal la circularité herméneutique invalide-t-elle?', answer: 'objectivité désincarnée positiviste', type: 'factual' },
                { question: 'Par quoi est remplacé le paradigme de l\'explication?', answer: 'compréhension dialogique', type: 'factual' }
            ]
        },
        {
            id: 'r-64',
            title: 'La phénoménologie de la perception',
            passage: 'Maurice Merleau-Ponty a fondamentalement contesté la dichotomie cartésienne opposant le corps-objet à l\'esprit pensant. Pour lui, la perception n\'est pas un processus passif d\'enregistrement sensoriel mais une expérience incarnée où le corps-sujet investit activement le monde. Cette corporéité primordiale précède toute élaboration intellectuelle: nous habitons notre corps avant de le penser. Cette phénoménologie du corps vécu récuse tant l\'empirisme réducteur que l\'intellectualisme abstrait, révélant une dimension pré-réflexive de l\'existence où se dissolvent les dualismes traditionnels de la métaphysique occidentale.',
            cefrLevel: 'C2',
            difficulty: 6,
            category: 'philosophy',
            questions: [
                { question: 'Quelle dichotomie Merleau-Ponty conteste-t-il?', answer: 'corps-objet opposé à esprit pensant', type: 'factual' },
                { question: 'Comment définit-il la perception?', answer: 'expérience incarnée active', type: 'factual' },
                { question: 'Que précède la corporéité?', answer: 'élaboration intellectuelle', type: 'factual' },
                { question: 'Quels courants philosophiques sont récusés?', answer: 'empirisme réducteur et intellectualisme abstrait', type: 'factual' }
            ]
        },
        {
            id: 'r-65',
            title: 'La théorie quantique des champs',
            passage: 'La théorie quantique des champs constitue le cadre conceptuel unificateur de la physique des particules. Elle transcende les limites de la mécanique quantique en traitant les particules comme des excitations de champs sous-jacents imprégnant l\'espace-temps. Cette approche a permis des prédictions d\'une précision inouïe, comme le moment magnétique anomal de l\'électron vérifié à onze décimales. Pourtant, l\'intégration de la gravitation reste un défi insurmontable: la renormalisation, technique permettant d\'extraire des résultats finis de calculs divergents, échoue pour la relativité générale, suggérant qu\'une révolution conceptuelle demeure nécessaire.',
            cefrLevel: 'C2',
            difficulty: 6,
            category: 'science',
            questions: [
                { question: 'Que sont les particules selon cette théorie?', answer: 'excitations de champs sous-jacents', type: 'factual' },
                { question: 'Quelle prédiction illustre sa précision?', answer: 'moment magnétique anomal de l\'électron', type: 'factual' },
                { question: 'Quel problème reste non résolu?', answer: 'intégration de la gravitation', type: 'factual' },
                { question: 'Pourquoi la renormalisation échoue-t-elle pour la gravité?', answer: 'divergences non maîtrisables', type: 'inference' }
            ]
        },
        {
            id: 'r-66',
            title: 'La déconstruction derridienne',
            passage: 'Jacques Derrida a élaboré une stratégie de lecture déconstructive visant à révéler les apories inhérentes aux systèmes philosophiques. En montrant comment tout texte contient les germes de sa propre subversion, il conteste la métaphysique de la présence qui privilégie la parole sur l\'écriture, le signifié sur le signifiant. Le concept de différance (avec un "a") désigne ce jeu de différenciation et de temporalisation qui constitue la condition de possibilité du sens tout en en différant perpétuellement la plénitude. Cette pensée, souvent accusée de nihilisme, s\'apparente plutôt à une hyperbolique vigilance critique qui refuse toute clôture dogmatique.',
            cefrLevel: 'C2',
            difficulty: 6,
            category: 'philosophy',
            questions: [
                { question: 'Que vise la déconstruction?', answer: 'révéler apories des systèmes philosophiques', type: 'factual' },
                { question: 'Quelle métaphysique Derrida conteste-t-il?', answer: 'métaphysique de la présence', type: 'factual' },
                { question: 'Que désigne la différance?', answer: 'différenciation et temporalisation conditionnant le sens', type: 'factual' },
                { question: 'Comment caractériser cette pensée plutôt que nihiliste?', answer: 'hyperbolique vigilance critique', type: 'factual' }
            ]
        },
        {
            id: 'r-67',
            title: 'L\'épistémologie des sciences sociales',
            passage: 'Le débat épistémologique entre explication et compréhension structure la réflexion sur les sciences sociales depuis Dilthey. Tandis que les tenants du naturalisme méthodologique prônent l\'importation des méthodes des sciences naturelles, l\'herméneutique insiste sur la spécificité d\'un objet - l\'action humaine - intrinsèquement porteur de significations. Max Weber tenta une synthèse avec sa sociologie compréhensive, conjuguant interprétation des motivations subjectives et explication causale. Cette tension épistémologique persiste, certains y voyant une richesse heuristique, d\'autres un obstacle à la scientificité des sciences humaines.',
            cefrLevel: 'C2',
            difficulty: 6,
            category: 'epistemology',
            questions: [
                { question: 'Quel débat structure l\'épistémologie des sciences sociales?', answer: 'explication versus compréhension', type: 'factual' },
                { question: 'Que prônent les naturalistes méthodologiques?', answer: 'importation méthodes sciences naturelles', type: 'factual' },
                { question: 'Quelle synthèse Weber a-t-il proposée?', answer: 'interprétation motivations et explication causale', type: 'factual' },
                { question: 'Comment cette tension est-elle perçue différemment?', answer: 'richesse heuristique ou obstacle à scientificité', type: 'factual' }
            ]
        }
    ],

    // Writing Practice Exercises (110 total: A1=20, A2=25, B1=25, B2=25, C1=10, C2=5)
    writing: [
        // A1 Level - Simple sentence completion (20 exercises)
        { id: 'w-1', prompt: 'Complete: Je _____ Marie. (I am Marie)', type: 'completion', cefrLevel: 'A1', difficulty: 1, category: 'introduction', sampleAnswer: 'Je m\'appelle Marie.' },
        { id: 'w-2', prompt: 'Complete: J\'_____ 10 ans. (I am 10 years old)', type: 'completion', cefrLevel: 'A1', difficulty: 1, category: 'personal-info', sampleAnswer: 'J\'ai 10 ans.' },
        { id: 'w-3', prompt: 'Complete: Mon père _____ grand. (My father is tall)', type: 'completion', cefrLevel: 'A1', difficulty: 1, category: 'description', sampleAnswer: 'Mon père est grand.' },
        { id: 'w-4', prompt: 'Complete: Je _____ à l\'école. (I go to school)', type: 'completion', cefrLevel: 'A1', difficulty: 1, category: 'daily-life', sampleAnswer: 'Je vais à l\'école.' },
        { id: 'w-5', prompt: 'Complete: J\'aime _____ football. (I like playing football)', type: 'completion', cefrLevel: 'A1', difficulty: 1, category: 'hobbies', sampleAnswer: 'J\'aime jouer au football.' },
        { id: 'w-6', prompt: 'Write: What is your name?', type: 'short-answer', cefrLevel: 'A1', difficulty: 1, category: 'introduction', sampleAnswer: 'Je m\'appelle [nom].' },
        { id: 'w-7', prompt: 'Write: How old are you?', type: 'short-answer', cefrLevel: 'A1', difficulty: 1, category: 'personal-info', sampleAnswer: 'J\'ai [âge] ans.' },
        { id: 'w-8', prompt: 'Write: What do you like to eat?', type: 'short-answer', cefrLevel: 'A1', difficulty: 1, category: 'food', sampleAnswer: 'J\'aime manger [nourriture].' },
        { id: 'w-9', prompt: 'Write: Describe your family (2-3 sentences)', type: 'short-answer', cefrLevel: 'A1', difficulty: 1, category: 'family', sampleAnswer: 'J\'ai une famille. Mon père s\'appelle Jean. Ma mère s\'appelle Claire.' },
        { id: 'w-10', prompt: 'Write: What is your favorite color?', type: 'short-answer', cefrLevel: 'A1', difficulty: 1, category: 'preferences', sampleAnswer: 'Ma couleur préférée est le bleu.' },
        { id: 'w-11', prompt: 'Complete: Il _____ beau aujourd\'hui. (It is nice today)', type: 'completion', cefrLevel: 'A1', difficulty: 1, category: 'weather', sampleAnswer: 'Il fait beau aujourd\'hui.' },
        { id: 'w-12', prompt: 'Complete: J\'habite _____ Paris. (I live in Paris)', type: 'completion', cefrLevel: 'A1', difficulty: 1, category: 'location', sampleAnswer: 'J\'habite à Paris.' },
        { id: 'w-13', prompt: 'Write: What do you do on weekends?', type: 'short-answer', cefrLevel: 'A1', difficulty: 1, category: 'activities', sampleAnswer: 'Le weekend, je joue au parc.' },
        { id: 'w-14', prompt: 'Write: Describe your house (2 sentences)', type: 'short-answer', cefrLevel: 'A1', difficulty: 1, category: 'home', sampleAnswer: 'Ma maison est grande. Il y a trois chambres.' },
        { id: 'w-15', prompt: 'Complete: Je veux _____ un chien. (I want to have a dog)', type: 'completion', cefrLevel: 'A1', difficulty: 1, category: 'desires', sampleAnswer: 'Je veux avoir un chien.' },
        { id: 'w-16', prompt: 'Write: What time do you wake up?', type: 'short-answer', cefrLevel: 'A1', difficulty: 1, category: 'routine', sampleAnswer: 'Je me réveille à sept heures.' },
        { id: 'w-17', prompt: 'Complete: Mon chat _____ noir. (My cat is black)', type: 'completion', cefrLevel: 'A1', difficulty: 1, category: 'animals', sampleAnswer: 'Mon chat est noir.' },
        { id: 'w-18', prompt: 'Write: What is your favorite food?', type: 'short-answer', cefrLevel: 'A1', difficulty: 1, category: 'food', sampleAnswer: 'Mon plat préféré est les pâtes.' },
        { id: 'w-19', prompt: 'Complete: Nous _____ des amis. (We are friends)', type: 'completion', cefrLevel: 'A1', difficulty: 1, category: 'relationships', sampleAnswer: 'Nous sommes des amis.' },
        { id: 'w-20', prompt: 'Write: Describe your best friend (3 sentences)', type: 'short-answer', cefrLevel: 'A1', difficulty: 1, category: 'friends', sampleAnswer: 'Mon meilleur ami s\'appelle Paul. Il est gentil. Nous jouons ensemble.' },

        // A2 Level - Connected sentences (25 exercises)
        { id: 'w-21', prompt: 'Write: Describe your daily routine (4-5 sentences)', type: 'paragraph', cefrLevel: 'A2', difficulty: 2, category: 'routine', sampleAnswer: 'Je me réveille à 7 heures. Je prends mon petit déjeuner. Ensuite, je vais au travail. Je rentre à 18 heures. Le soir, je regarde la télévision.' },
        { id: 'w-22', prompt: 'Write: What did you do last weekend? (4-5 sentences)', type: 'paragraph', cefrLevel: 'A2', difficulty: 2, category: 'past-events', sampleAnswer: 'Le weekend dernier, je suis allé au cinéma. J\'ai vu un film intéressant. Dimanche, j\'ai visité mes grands-parents. Nous avons mangé ensemble. C\'était très agréable.' },
        { id: 'w-23', prompt: 'Write: Describe your favorite place (4-5 sentences)', type: 'paragraph', cefrLevel: 'A2', difficulty: 2, category: 'places', sampleAnswer: 'Mon endroit préféré est la plage. Il y a du sable blanc et la mer bleue. J\'aime nager et jouer. Le soleil brille toujours. C\'est très relaxant.' },
        { id: 'w-24', prompt: 'Complete: Si j\'avais le temps, je _____ (If I had time, I would...)', type: 'completion', cefrLevel: 'A2', difficulty: 2, category: 'conditional', sampleAnswer: 'Si j\'avais le temps, je voyagerais plus.' },
        { id: 'w-25', prompt: 'Write: What are your hobbies? (4-5 sentences)', type: 'paragraph', cefrLevel: 'A2', difficulty: 2, category: 'hobbies', sampleAnswer: 'J\'aime lire des livres. C\'est intéressant et relaxant. Je lis avant de dormir. Je préfère les romans. La lecture enrichit mon vocabulaire.' },
        { id: 'w-26', prompt: 'Write: Plan a weekend trip (4-5 sentences)', type: 'paragraph', cefrLevel: 'A2', difficulty: 2, category: 'travel', sampleAnswer: 'Ce weekend, je vais visiter Lyon. Je vais prendre le train samedi. Je vais voir la vieille ville. Je vais manger dans un restaurant. Je vais rentrer dimanche.' },
        { id: 'w-27', prompt: 'Complete: Quand j\'étais petit, je _____ (When I was little, I...)', type: 'completion', cefrLevel: 'A2', difficulty: 2, category: 'past', sampleAnswer: 'Quand j\'étais petit, je jouais dans le parc.' },
        { id: 'w-28', prompt: 'Write: Describe your ideal vacation (5 sentences)', type: 'paragraph', cefrLevel: 'A2', difficulty: 2, category: 'travel', sampleAnswer: 'Mes vacances idéales seraient à la montagne. Je ferais du ski. Le soir, je me relaxerais. Je mangerais bien. Ce serait parfait.' },
        { id: 'w-29', prompt: 'Write: What do you want in the future? (4-5 sentences)', type: 'paragraph', cefrLevel: 'A2', difficulty: 2, category: 'future', sampleAnswer: 'Dans le futur, je veux voyager. Je veux apprendre des langues. Je veux un bon travail. Je veux une famille. J\'espère être heureux.' },
        { id: 'w-30', prompt: 'Write: Describe your neighborhood (5 sentences)', type: 'paragraph', cefrLevel: 'A2', difficulty: 2, category: 'environment', sampleAnswer: 'Mon quartier est calme. Il y a un parc près. Il y a aussi des magasins. Les voisins sont sympas. J\'aime habiter ici.' },
        { id: 'w-31', prompt: 'Write: What sports do you like? (4-5 sentences)', type: 'paragraph', cefrLevel: 'A2', difficulty: 2, category: 'sports', sampleAnswer: 'Je joue au tennis deux fois par semaine. C\'est bon pour la santé. Je regarde le football aussi. Mon équipe préférée est PSG. Le sport est important.' },
        { id: 'w-32', prompt: 'Complete: Hier, je _____ au marché. (Yesterday, I went to the market)', type: 'completion', cefrLevel: 'A2', difficulty: 2, category: 'past', sampleAnswer: 'Hier, je suis allé au marché.' },
        { id: 'w-33', prompt: 'Write: Describe a birthday celebration (5 sentences)', type: 'paragraph', cefrLevel: 'A2', difficulty: 2, category: 'celebrations', sampleAnswer: 'J\'ai fêté mon anniversaire avec des amis. Nous avons fait une fête. J\'ai reçu des cadeaux. Nous avons mangé un gâteau. C\'était merveilleux.' },
        { id: 'w-34', prompt: 'Write: Your favorite season and why (4-5 sentences)', type: 'paragraph', cefrLevel: 'A2', difficulty: 2, category: 'preferences', sampleAnswer: 'Ma saison préférée est l\'été. Il fait beau. Je peux aller à la plage. Les journées sont longues. J\'aime me promener.' },
        { id: 'w-35', prompt: 'Write: A typical day at work (5 sentences)', type: 'paragraph', cefrLevel: 'A2', difficulty: 2, category: 'work', sampleAnswer: 'Je commence à 9 heures. Le matin, j\'ai des réunions. À midi, je déjeune. L\'après-midi, je travaille sur mes projets. Je finis à 18 heures.' },
        { id: 'w-36', prompt: 'Complete: Demain, nous _____ au cinéma. (Tomorrow, we will go to cinema)', type: 'completion', cefrLevel: 'A2', difficulty: 2, category: 'future', sampleAnswer: 'Demain, nous irons au cinéma.' },
        { id: 'w-37', prompt: 'Write: Technology you use daily (4-5 sentences)', type: 'paragraph', cefrLevel: 'A2', difficulty: 2, category: 'technology', sampleAnswer: 'J\'utilise mon smartphone chaque jour. Je l\'utilise pour appeler. Je regarde mes emails aussi. Je regarde des vidéos. La technologie est utile.' },
        { id: 'w-38', prompt: 'Write: Your favorite restaurant (5 sentences)', type: 'paragraph', cefrLevel: 'A2', difficulty: 2, category: 'food', sampleAnswer: 'Mon restaurant préféré s\'appelle Le Bistrot. Il est près de chez moi. La nourriture est délicieuse. Le personnel est gentil. J\'y vais souvent.' },
        { id: 'w-39', prompt: 'Write: How to stay healthy (4-5 sentences)', type: 'paragraph', cefrLevel: 'A2', difficulty: 2, category: 'health', sampleAnswer: 'Je fais du sport régulièrement. Je mange bien. Je dors huit heures. Je ne fume pas. Je bois de l\'eau.' },
        { id: 'w-40', prompt: 'Write: A problem you solved (5 sentences)', type: 'paragraph', cefrLevel: 'A2', difficulty: 2, category: 'problem-solving', sampleAnswer: 'J\'ai perdu mes clés. J\'ai cherché partout. Je les ai trouvées dans ma veste. J\'étais soulagé. Maintenant, je fais attention.' },
        { id: 'w-41', prompt: 'Write: What makes a good friend? (4-5 sentences)', type: 'paragraph', cefrLevel: 'A2', difficulty: 2, category: 'relationships', sampleAnswer: 'Un bon ami est honnête. Il écoute les problèmes. Il est là dans les moments difficiles. Il respecte les opinions. L\'amitié est importante.' },
        { id: 'w-42', prompt: 'Complete: Si je gagne, je _____ (If I win, I will...)', type: 'completion', cefrLevel: 'A2', difficulty: 2, category: 'hypothetical', sampleAnswer: 'Si je gagne, je voyagerai.' },
        { id: 'w-43', prompt: 'Write: How you learned French (5 sentences)', type: 'paragraph', cefrLevel: 'A2', difficulty: 2, category: 'language', sampleAnswer: 'J\'ai commencé il y a deux ans. Je prends des cours en ligne. Je pratique tous les jours. Je regarde des films français. C\'est difficile mais intéressant.' },
        { id: 'w-44', prompt: 'Write: A free day plan (5 sentences)', type: 'paragraph', cefrLevel: 'A2', difficulty: 2, category: 'leisure', sampleAnswer: 'Je dormirais tard. Je lirais un livre. J\'irais me promener. Je verrais mes amis. Je cuisinerais un bon repas.' },
        { id: 'w-45', prompt: 'Write: Describe your hometown (5 sentences)', type: 'paragraph', cefrLevel: 'A2', difficulty: 2, category: 'places', sampleAnswer: 'Ma ville est petite mais jolie. Il y a un centre historique. Les gens sont accueillants. Il y a de bons restaurants. J\'aime ma ville.' },

        // B1 Level - Structured essays (25 exercises)
        { id: 'w-46', prompt: 'Essay: Social media advantages/disadvantages (100-120 words)', type: 'essay', cefrLevel: 'B1', difficulty: 3, category: 'technology', sampleAnswer: 'Les réseaux sociaux ont des avantages et inconvénients. Ils permettent de rester en contact avec des amis éloignés. Ils offrent des opportunités professionnelles. L\'information est accessible rapidement. Cependant, l\'utilisation excessive peut causer une dépendance. La vie privée est compromise. Les fausses informations sont un problème. Les comparaisons sociales affectent la santé mentale. En conclusion, il faut utiliser ces plateformes avec modération pour profiter des avantages tout en minimisant les risques.' },
        { id: 'w-47', prompt: 'Essay: A significant life event (100-120 words)', type: 'essay', cefrLevel: 'B1', difficulty: 3, category: 'personal', sampleAnswer: 'Mon déménagement à l\'étranger il y a trois ans a été un événement marquant. C\'était difficile au début de m\'adapter. Je me sentais seul et désorienté. Cependant, cette expérience m\'a fait grandir. J\'ai appris à être indépendant et ouvert. J\'ai rencontré des personnes fascinantes de différentes cultures. Cette aventure m\'a enseigné que le changement apporte de la croissance. Aujourd\'hui, je suis reconnaissant pour cette expérience transformatrice.' },
        { id: 'w-48', prompt: 'Opinion: Should students wear uniforms? (100-120 words)', type: 'essay', cefrLevel: 'B1', difficulty: 3, category: 'education', sampleAnswer: 'Les uniformes scolaires présentent plusieurs avantages. Ils réduisent les inégalités sociales en éliminant les comparaisons vestimentaires. Ils créent un sentiment d\'appartenance scolaire. Ils simplifient le choix matinal. Cependant, ils limitent l\'expression personnelle des jeunes. Ils représentent un coût pour les familles. Malgré ces inconvénients, je crois que les bénéfices l\'emportent, surtout où les différences socio-économiques sont marquées. L\'uniforme favorise l\'égalité et la concentration sur l\'apprentissage.' },
        { id: 'w-49', prompt: 'Essay: Technology and communication (100-120 words)', type: 'essay', cefrLevel: 'B1', difficulty: 3, category: 'technology', sampleAnswer: 'La technologie a révolutionné la communication. Les messages instantanés permettent de communiquer en temps réel mondialement. Les emails ont remplacé le courrier postal. Les réseaux sociaux permettent de partager notre vie. Cette évolution a rendu la communication plus rapide et accessible. Cependant, elle a réduit les interactions face à face. Beaucoup dépendent trop de leurs appareils. Malgré ces défis, la technologie a amélioré notre capacité à rester connectés, particulièrement pour les relations à distance.' },
        { id: 'w-50', prompt: 'Essay: Benefits of learning languages (100-120 words)', type: 'essay', cefrLevel: 'B1', difficulty: 3, category: 'education', sampleAnswer: 'Apprendre une langue étrangère offre de nombreux avantages. Cela améliore la mémoire et la concentration. Les personnes bilingues ont une meilleure flexibilité mentale. Professionnellement, cela ouvre des opportunités internationales. Culturellement, cela permet de comprendre d\'autres perspectives. Cela facilite les voyages. L\'apprentissage développe la patience. En résumé, c\'est un investissement précieux qui bénéficie à tous les aspects de la vie.' },
        { id: 'w-51', prompt: 'Letter: Request course information', type: 'professional', cefrLevel: 'B1', difficulty: 3, category: 'correspondence', sampleAnswer: 'Madame, Monsieur,\nJe vous écris pour obtenir des renseignements sur vos cours de français. Quels niveaux proposez-vous? Quelles sont les dates? Quels sont les tarifs? Combien d\'heures par semaine? Offrez-vous des cours en ligne? Proposez-vous un test de niveau? Je vous remercie. Cordialement,' },
        { id: 'w-52', prompt: 'Essay: How to prepare your favorite dish (100-120 words)', type: 'essay', cefrLevel: 'B1', difficulty: 3, category: 'instructions', sampleAnswer: 'Je vais expliquer comment préparer des crêpes. D\'abord, mélangez 250g de farine avec trois œufs. Ajoutez 500ml de lait en remuant. Laissez reposer 30 minutes. Faites chauffer une poêle avec du beurre. Versez une louche de pâte et cuisez deux minutes de chaque côté. La crêpe doit être dorée. Répétez jusqu\'à épuisement de la pâte. Servez avec du sucre ou confiture. Cette recette est simple et rapide. Tout le monde adore ce plat délicieux.' },
        { id: 'w-53', prompt: 'Essay: A city you want to visit (100-120 words)', type: 'essay', cefrLevel: 'B1', difficulty: 3, category: 'travel', sampleAnswer: 'J\'aimerais visiter Tokyo. Cette ville combine tradition et modernité. Je suis attiré par sa culture riche et les temples anciens. La cuisine japonaise est réputée. Tokyo offre une technologie de pointe. J\'aimerais voir les jardins paisibles et la floraison des cerisiers. La ville est sûre et propre. Les Japonais sont hospitaliers. Cette destination représente un parfait mélange d\'histoire, de culture et d\'innovation.' },
        { id: 'w-54', prompt: 'Opinion: Ban cars from cities? (100-120 words)', type: 'essay', cefrLevel: 'B1', difficulty: 3, category: 'environment', sampleAnswer: 'L\'interdiction des voitures en centre-ville est controversée. Cela réduirait la pollution et améliorerait la qualité de vie. Les piétons seraient plus en sécurité. Cela encouragerait les transports publics. Les centres deviendraient plus agréables. Cependant, cela nuirait aux commerces. Les personnes à mobilité réduite auraient des difficultés. Les livraisons seraient compliquées. Une solution équilibrée serait des zones à circulation limitée avec exceptions. L\'amélioration des transports est nécessaire avant toute interdiction.' },
        { id: 'w-55', prompt: 'Essay: Your ideal job (100-120 words)', type: 'essay', cefrLevel: 'B1', difficulty: 3, category: 'career', sampleAnswer: 'Mon emploi idéal serait traducteur international. J\'aime les langues et cultures. Je pourrais travailler depuis chez moi. La traduction est intellectuellement stimulante. J\'apprécierais la variété des sujets. Ce travail permettrait un apprentissage constant. Je contribuerais à la communication internationale. Le salaire peut être bon. Je pourrais voyager et travailler avec des clients mondiaux. Cette carrière correspondrait à mes intérêts et compétences.' },
        { id: 'w-56', prompt: 'Story: An unexpected encounter (100-120 words)', type: 'essay', cefrLevel: 'B1', difficulty: 3, category: 'narrative', sampleAnswer: 'Un matin d\'automne, je me promenais dans le parc quand j\'ai remarqué un vieil homme sur un banc. Il pleurait. Je me suis approché et lui ai demandé s\'il allait bien. Il m\'a expliqué que c\'était l\'anniversaire de la mort de sa femme. Nous avons parlé. Il m\'a raconté des histoires merveilleuses sur leur vie. Malgré sa tristesse, ses yeux brillaient. Nous avons passé deux heures ensemble. Il m\'a remercié. Cette rencontre m\'a rappelé l\'importance de la compassion. Parfois, les étrangers nous touchent le plus.' },
        { id: 'w-57', prompt: 'Essay: Reduce plastic pollution (100-120 words)', type: 'essay', cefrLevel: 'B1', difficulty: 3, category: 'environment', sampleAnswer: 'La réduction de la pollution plastique nécessite des actions. Nous devons réduire notre consommation de plastique jetable. Utiliser des sacs réutilisables fait une différence. Le recyclage doit être pris au sérieux. Les gouvernements doivent légiférer pour interdire certains plastiques. Les entreprises doivent adopter des emballages écologiques. L\'éducation est cruciale. Participer aux nettoyages aide directement. Soutenir les organisations environnementales accélère le changement. Chaque geste compte dans cette lutte.' },
        { id: 'w-58', prompt: 'Email: Complain about defective product', type: 'professional', cefrLevel: 'B1', difficulty: 3, category: 'correspondence', sampleAnswer: 'Objet: Réclamation\nMadame, Monsieur,\nJe vous contacte concernant un achat le 15 mars. J\'ai acheté un téléphone qui ne fonctionne pas. Après trois jours, l\'écran ne s\'allume plus. J\'ai la facture et la garantie. Je souhaiterais un échange ou remboursement. Quelle procédure suivre? Dans l\'attente,\nCordialement,' },
        { id: 'w-59', prompt: 'Compare: City vs countryside living (100-120 words)', type: 'essay', cefrLevel: 'B1', difficulty: 3, category: 'lifestyle', sampleAnswer: 'Vivre en ville ou à la campagne présente des avantages différents. La ville offre des opportunités professionnelles et des services accessibles. La vie culturelle est riche. Cependant, la ville est bruyante, polluée et stressante. Le coût est élevé. À la campagne, l\'environnement est paisible. L\'air est pur. Les relations sont chaleureuses. Néanmoins, les opportunités d\'emploi sont limitées et les services moins accessibles. Le choix dépend des priorités: carrière et commodités versus tranquillité et nature.' },
        { id: 'w-60', prompt: 'Essay: Education system in your country (100-120 words)', type: 'essay', cefrLevel: 'B1', difficulty: 3, category: 'education', sampleAnswer: 'Le système éducatif comprend plusieurs étapes. L\'école primaire dure cinq ans et est gratuite. Ensuite, le collège dure quatre ans. Après, les élèves choisissent un lycée général ou professionnel. Le baccalauréat marque la fin du secondaire. L\'enseignement supérieur inclut universités et grandes écoles. Notre système valorise l\'éducation publique. Cependant, il fait face à des défis comme les inégalités. Des réformes sont discutées pour améliorer la qualité.' },
        { id: 'w-61', prompt: 'Essay: What makes a good teacher? (100-120 words)', type: 'essay', cefrLevel: 'B1', difficulty: 3, category: 'education', sampleAnswer: 'Un bon enseignant possède plusieurs qualités. La patience est cruciale. Un bon professeur doit être passionné. La capacité d\'expliquer clairement est fondamentale. Un enseignant adapte ses méthodes aux besoins. L\'écoute et l\'empathie créent un environnement positif. L\'équité est importante. Un bon enseignant encourage les questions. Il doit être organisé et préparé. L\'humour rend les cours engageants. Ces qualités créent une expérience enrichissante qui inspire les élèves.' },
        { id: 'w-62', prompt: 'Essay: A cultural celebration (100-120 words)', type: 'essay', cefrLevel: 'B1', difficulty: 3, category: 'culture', sampleAnswer: 'Le 14 juillet est la fête nationale française qui commémore la prise de la Bastille en 1789. C\'est un jour férié. Les festivités commencent par un défilé militaire. Des cérémonies officielles ont lieu. L\'après-midi, des bals animent les places. Le soir, des feux d\'artifice illuminent le ciel. Les gens pique-niquent et admirent le spectacle. C\'est une journée de célébration nationale. Les rues sont décorées de drapeaux. Cette fête unit les Français autour de leur histoire.' },
        { id: 'w-63', prompt: 'Opinion: Books vs movies? (100-120 words)', type: 'essay', cefrLevel: 'B1', difficulty: 3, category: 'entertainment', sampleAnswer: 'Les livres et films ont des avantages. Les livres stimulent l\'imagination. Ils développent le vocabulaire. On peut les lire à son rythme. Cependant, ils demandent plus de temps. Les films offrent une expérience visuelle immédiate. Ils sont plus accessibles. Les effets enrichissent l\'histoire. Mais les adaptations omettent des détails. Je pense que les deux se complètent. Les livres sont meilleurs pour l\'immersion tandis que les films conviennent pour le divertissement rapide. L\'idéal est d\'apprécier les deux.' },
        { id: 'w-64', prompt: 'CV: Introduction paragraph (80-100 words)', type: 'professional', cefrLevel: 'B1', difficulty: 3, category: 'career', sampleAnswer: 'Professionnel dynamique avec cinq ans d\'expérience en marketing digital. Diplômé d\'une école de commerce, je me spécialise dans les réseaux sociaux. Ma créativité m\'a permis d\'augmenter l\'engagement de 40%. Je maîtrise plusieurs outils numériques et parle français et anglais. Passionné par l\'innovation, je recherche de nouveaux défis dans une entreprise dynamique où je pourrais contribuer à la croissance.' },
        { id: 'w-65', prompt: 'Essay: Importance of exercise (100-120 words)', type: 'essay', cefrLevel: 'B1', difficulty: 3, category: 'health', sampleAnswer: 'L\'exercice physique est essentiel. Il renforce le système cardiovasculaire. L\'activité aide à contrôler le poids. Elle améliore la santé mentale en réduisant le stress. Le sport renforce les os et muscles. Il améliore le sommeil et l\'énergie. L\'exercice booste le système immunitaire. Pour les personnes âgées, il maintient la mobilité. Les experts recommandent 30 minutes par jour. Intégrer l\'exercice est un investissement dans la santé à long terme.' },
        { id: 'w-66', prompt: 'Essay: A challenge you overcame (100-120 words)', type: 'essay', cefrLevel: 'B1', difficulty: 3, category: 'personal', sampleAnswer: 'Un grand défi était ma peur de parler en public. À l\'université, je devais faire des présentations. Mon cœur battait fort. J\'ai décidé de combattre cette peur progressivement. J\'ai commencé devant un miroir. J\'ai rejoint un club de débat. J\'ai appris des techniques de respiration. Avec la pratique, ma confiance a augmenté. Maintenant, je peux présenter devant de grands groupes. Cette expérience m\'a enseigné que la persévérance peut surmonter toute peur. C\'est une compétence précieuse.' },
        { id: 'w-67', prompt: 'Opinion: Should homework be abolished? (100-120 words)', type: 'essay', cefrLevel: 'B1', difficulty: 3, category: 'education', sampleAnswer: 'La question des devoirs divise éducateurs et parents. Je pense que les devoirs ont leur place avec modération. Ils renforcent l\'apprentissage et développent l\'autonomie. Les élèves apprennent la gestion du temps. Cependant, trop de devoirs cause du stress. Les jeunes ont besoin de jouer. L\'équilibre est la clé. Les devoirs devraient être significatifs et adaptés. Une ou deux heures semblent raisonnables. L\'abolition serait extrême, mais une réduction et meilleure qualité seraient bénéfiques.' },
        { id: 'w-68', prompt: 'Letter: Apply for summer job', type: 'professional', cefrLevel: 'B1', difficulty: 3, category: 'correspondence', sampleAnswer: 'Madame, Monsieur,\nSuite à votre annonce pour un poste d\'été, je vous écris pour postuler. Étudiant en deuxième année, je recherche un emploi pour juillet-août. J\'ai déjà travaillé comme serveur. Je suis dynamique et ponctuel. Disponible immédiatement, je peux travailler en horaires flexibles. Ma maîtrise du français et anglais serait un atout. Mon CV est joint. Je reste disponible pour un entretien. Cordialement,' },
        { id: 'w-69', prompt: 'Essay: How internet changed lives (100-120 words)', type: 'essay', cefrLevel: 'B1', difficulty: 3, category: 'technology', sampleAnswer: 'Internet a transformé nos vies. L\'accès à l\'information est instantané. Le shopping en ligne a révolutionné le commerce. Le travail à distance est possible. L\'éducation s\'est démocratisée avec les cours en ligne. Les relations ont changé avec les réseaux sociaux. Le divertissement est disponible via streaming. Cependant, Internet a créé des problèmes: addiction, cyberharcèlement, désinformation. La dépendance aux écrans affecte la santé. Malgré ces défis, Internet reste une innovation révolutionnaire qui façonne notre société.' },
        { id: 'w-70', prompt: 'Essay: Your dream house (100-120 words)', type: 'essay', cefrLevel: 'B1', difficulty: 3, category: 'description', sampleAnswer: 'Ma maison idéale serait près de la mer avec vue sur l\'océan. Ce serait moderne avec de grandes fenêtres. Le salon aurait une cheminée et une cuisine ouverte. À l\'étage, trois chambres confortables. Ma chambre aurait un balcon donnant sur la mer. Le jardin aurait des plantes méditerranéennes et une terrasse. Une petite piscine compléterait l\'ensemble. Le garage pour deux voitures. Cette maison combinerait confort et nature. Ce serait un refuge paisible pour ma famille.' },

        // B2 Level - Complex argumentative essays (25 exercises)
        { id: 'w-71', prompt: 'Essay: Impact of AI on employment (150 words)', type: 'essay', cefrLevel: 'B2', difficulty: 4, category: 'technology', sampleAnswer: 'L\'intelligence artificielle transforme le marché du travail de manière complexe. D\'une part, l\'automatisation menace de nombreux emplois, particulièrement les tâches répétitives et prévisibles. Les chauffeurs, caissiers et opérateurs pourraient être remplacés. Cette disruption inquiète les travailleurs et nécessite des politiques de reconversion. D\'autre part, l\'IA crée de nouvelles opportunités dans le développement, la maintenance et la supervision de systèmes intelligents. Elle augmente également la productivité dans des secteurs comme la médecine et l\'éducation. Le véritable défi réside dans la gestion de cette transition. Les gouvernements doivent investir massivement dans la formation continue. Le système éducatif doit évoluer pour préparer aux métiers de demain. Une réflexion sur le revenu universel pourrait s\'avérer nécessaire. L\'IA n\'est ni bonne ni mauvaise en soi; c\'est notre capacité d\'adaptation qui déterminera si elle bénéficie ou nuit à l\'emploi.' },
        { id: 'w-72', prompt: 'Report: Write a business proposal (150 words)', type: 'professional', cefrLevel: 'B2', difficulty: 4, category: 'business', sampleAnswer: 'PROPOSITION: Lancement d\'une plateforme de covoiturage écologique\n\nContexte: La mobilité urbaine fait face à des défis environnementaux et économiques. Notre solution vise à réduire les émissions tout en diminuant les coûts de transport.\n\nObjectifs:\n- Réduire le nombre de véhicules en circulation de 30%\n- Offrir une alternative économique (-50% vs transport individuel)\n- Créer une communauté d\'utilisateurs engagés\n\nStratégie:\nDéveloppement d\'une application mobile avec algorithme de matching intelligent, système de paiement intégré et notation des utilisateurs. Partenariats avec entreprises pour trajets domicile-travail.\n\nBudget: 200 000€ (développement, marketing, opérationnel)\nRetour sur investissement prévu: 18 mois\n\nCette solution répond aux enjeux actuels de mobilité durable tout en créant de la valeur économique.' },
        { id: 'w-73', prompt: 'Essay: Ethical implications of genetic engineering (150 words)', type: 'essay', cefrLevel: 'B2', difficulty: 4, category: 'ethics', sampleAnswer: 'L\'ingénierie génétique soulève des questions éthiques profondes. La technologie CRISPR permet désormais de modifier le génome humain avec précision. Si les applications thérapeutiques semblent légitimes pour guérir des maladies héréditaires, la frontière avec l\'eugénisme est ténue. Où tracer la ligne entre soin et amélioration? La sélection d\'embryons selon des critères non médicaux pose problème. Elle pourrait accentuer les inégalités sociales en créant une élite génétiquement "supérieure". De plus, les modifications germinales transmissibles aux générations futures impliquent une responsabilité énorme. Nous n\'en comprenons pas toutes les conséquences à long terme. Le consentement est également problématique: peut-on décider pour des générations non encore nées? Un cadre réglementaire international strict semble nécessaire. Le progrès scientifique ne doit pas précéder la réflexion éthique.' },
        { id: 'w-74', prompt: 'Analysis: Compare two political systems (150 words)', type: 'essay', cefrLevel: 'B2', difficulty: 4, category: 'politics', sampleAnswer: 'Les systèmes présidentiel et parlementaire présentent des différences structurelles fondamentales. Dans un système présidentiel, le chef d\'État est élu directement et dispose de pouvoirs exécutifs importants, indépendants du législatif. Cette séparation stricte offre stabilité et leadership fort, mais peut créer des blocages institutionnels. Le système parlementaire fusionne exécutif et législatif: le gouvernement émane du parlement et lui est responsable. Cette configuration favorise la cohérence politique mais peut engendrer une instabilité gouvernementale. Le présidentiel protège mieux contre les majorités parlementaires abusives, tandis que le parlementaire assure une meilleure représentativité. Les États-Unis incarnent le modèle présidentiel, le Royaume-Uni le parlementaire. La France combine les deux avec son système semi-présidentiel. Aucun système n\'est intrinsèquement supérieur; leur efficacité dépend du contexte culturel et historique national.' },
        { id: 'w-75', prompt: 'Essay: Climate change solutions (150 words)', type: 'essay', cefrLevel: 'B2', difficulty: 4, category: 'environment', sampleAnswer: 'Face à l\'urgence climatique, des solutions multiples doivent être déployées simultanément. La transition énergétique vers les renouvelables constitue la priorité absolue. L\'éolien et le solaire deviennent compétitifs économiquement. L\'électrification des transports doit s\'accélérer avec des infrastructures de recharge adéquates. L\'agriculture régénérative peut transformer ce secteur de source d\'émissions en puits de carbone. La rénovation énergétique des bâtiments offre un potentiel considérable. Les solutions technologiques comme la capture de CO2 sont prometteuses mais insuffisantes seules. Un changement comportemental est indispensable: consommation raisonnée, alimentation moins carnée, mobilité douce. Les politiques publiques doivent inciter ces transitions par la fiscalité écologique et la régulation. L\'engagement des entreprises via la finance verte accélère le changement. L\'éducation sensibilise les générations futures. La lutte climatique nécessite une approche systémique combinant technologie, politique et sociétal.' }
    ],

    // Dialogue Practice - Conversational scenarios (13 dialogues)
    dialogues: [
        // A1 Level - Basic greetings (5 dialogues with comprehension questions)
        {
            id: 'd-1',
            title: 'Meeting someone',
            cefrLevel: 'A1',
            difficulty: 1,
            category: 'greetings',
            turns: [
                { speaker: 'A', text: 'Bonjour!', translation: 'Hello!' },
                { speaker: 'B', text: 'Bonjour! Comment allez-vous?', translation: 'Hello! How are you?' },
                { speaker: 'A', text: 'Je vais bien, merci. Et vous?', translation: 'I\'m fine, thank you. And you?' },
                { speaker: 'B', text: 'Très bien, merci!', translation: 'Very well, thank you!' }
            ],
            questions: [
                { question: 'Comment va la personne A?', answer: 'bien', type: 'comprehension' },
                { question: 'Est-ce une conversation formelle ou informelle?', answer: 'formelle', type: 'comprehension', alternatives: ['formal', 'vous'] }
            ]
        },
        {
            id: 'd-2',
            title: 'Introducing yourself',
            cefrLevel: 'A1',
            difficulty: 1,
            category: 'introduction',
            turns: [
                { speaker: 'A', text: 'Je m\'appelle Marie.', translation: 'My name is Marie.' },
                { speaker: 'B', text: 'Moi, c\'est Pierre. Enchanté!', translation: 'I\'m Pierre. Nice to meet you!' }
            ],
            questions: [
                { question: 'Comment s\'appelle la personne A?', answer: 'Marie', type: 'comprehension' },
                { question: 'Comment s\'appelle la personne B?', answer: 'Pierre', type: 'comprehension' }
            ]
        },
        {
            id: 'd-3',
            title: 'At the café',
            cefrLevel: 'A1',
            difficulty: 1,
            category: 'shopping',
            turns: [
                { speaker: 'A', text: 'Bonjour, un café s\'il vous plaît.', translation: 'Hello, a coffee please.' },
                { speaker: 'B', text: 'Ça fait 2 euros.', translation: 'That\'s 2 euros.' }
            ],
            questions: [
                { question: 'Que commande la personne A?', answer: 'un café', type: 'comprehension', alternatives: ['café', 'coffee'] },
                { question: 'Combien coûte le café?', answer: '2 euros', type: 'comprehension', alternatives: ['2', 'deux euros'] }
            ]
        },
        {
            id: 'd-4',
            title: 'Asking directions',
            cefrLevel: 'A1',
            difficulty: 1,
            category: 'directions',
            turns: [
                { speaker: 'A', text: 'Pardon, où est la gare?', translation: 'Excuse me, where is the train station?' },
                { speaker: 'B', text: 'C\'est tout droit.', translation: 'It\'s straight ahead.' }
            ],
            questions: [
                { question: 'Que cherche la personne A?', answer: 'la gare', type: 'comprehension', alternatives: ['gare'] },
                { question: 'Dans quelle direction est la gare?', answer: 'tout droit', type: 'comprehension', alternatives: ['droit'] }
            ]
        },
        {
            id: 'd-5',
            title: 'Buying something',
            cefrLevel: 'A1',
            difficulty: 1,
            category: 'shopping',
            turns: [
                { speaker: 'A', text: 'Combien ça coûte?', translation: 'How much does it cost?' },
                { speaker: 'B', text: 'Quinze euros.', translation: 'Fifteen euros.' }
            ],
            questions: [
                { question: 'Combien coûte l\'objet?', answer: '15 euros', type: 'comprehension', alternatives: ['quinze euros', '15', 'quinze'] }
            ]
        },

        // A2 Level (3 dialogues)
        {
            id: 'd-6',
            title: 'Making plans',
            cefrLevel: 'A2',
            difficulty: 2,
            category: 'social',
            turns: [
                { speaker: 'A', text: 'Tu es libre samedi?', translation: 'Are you free Saturday?' },
                { speaker: 'B', text: 'Oui, pourquoi?', translation: 'Yes, why?' },
                { speaker: 'A', text: 'On pourrait aller au cinéma.', translation: 'We could go to the cinema.' }
            ],
            questions: [
                { question: 'Quel jour sont-ils disponibles?', answer: 'samedi', type: 'comprehension', alternatives: ['Saturday'] },
                { question: 'Où proposent-ils d\'aller?', answer: 'au cinéma', type: 'comprehension', alternatives: ['cinéma', 'cinema'] }
            ]
        },
        {
            id: 'd-7',
            title: 'At restaurant',
            cefrLevel: 'A2',
            difficulty: 2,
            category: 'food',
            turns: [
                { speaker: 'A', text: 'Vous avez choisi?', translation: 'Have you chosen?' },
                { speaker: 'B', text: 'Oui, je prends le menu du jour.', translation: 'Yes, I\'ll have the daily menu.' }
            ],
            questions: [
                { question: 'Où se passe cette conversation?', answer: 'au restaurant', type: 'comprehension', alternatives: ['restaurant'] },
                { question: 'Que commande la personne B?', answer: 'le menu du jour', type: 'comprehension', alternatives: ['menu du jour', 'menu'] }
            ]
        },
        {
            id: 'd-8',
            title: 'Hobbies',
            cefrLevel: 'A2',
            difficulty: 2,
            category: 'hobbies',
            turns: [
                { speaker: 'A', text: 'Qu\'aimes-tu faire?', translation: 'What do you like to do?' },
                { speaker: 'B', text: 'J\'aime lire et faire du sport.', translation: 'I like reading and sports.' }
            ],
            questions: [
                { question: 'Quels sont les deux passe-temps de la personne B?', answer: 'lire et faire du sport', type: 'comprehension', alternatives: ['lire et sport', 'lecture et sport', 'reading and sports'] },
                { question: 'Est-ce que la personne B aime lire?', answer: 'oui', type: 'comprehension', alternatives: ['yes'] }
            ]
        },

        // B1 Level (2 dialogues)
        {
            id: 'd-9',
            title: 'Job interview',
            cefrLevel: 'B1',
            difficulty: 3,
            category: 'work',
            turns: [
                { speaker: 'A', text: 'Parlez-moi de votre expérience.', translation: 'Tell me about your experience.' },
                { speaker: 'B', text: 'J\'ai travaillé trois ans comme développeur web.', translation: 'I worked three years as a web developer.' }
            ],
            questions: [
                { question: 'Combien de temps la personne B a-t-elle travaillé?', answer: 'trois ans', type: 'comprehension', alternatives: ['3 ans', 'three years'] },
                { question: 'Quel était le métier de la personne B?', answer: 'développeur web', type: 'comprehension', alternatives: ['développeur', 'web developer'] }
            ]
        },
        {
            id: 'd-10',
            title: 'Travel plans',
            cefrLevel: 'B1',
            difficulty: 3,
            category: 'travel',
            turns: [
                { speaker: 'A', text: 'Où vas-tu en vacances?', translation: 'Where are you going on vacation?' },
                { speaker: 'B', text: 'J\'hésite entre l\'Espagne et l\'Italie.', translation: 'I\'m hesitating between Spain and Italy.' }
            ],
            questions: [
                { question: 'Entre quels pays la personne B hésite-t-elle?', answer: 'l\'Espagne et l\'Italie', type: 'comprehension', alternatives: ['Espagne et Italie', 'Spain and Italy', 'Espagne Italie'] },
                { question: 'La personne B a-t-elle décidé sa destination?', answer: 'non', type: 'comprehension', alternatives: ['no', 'pas encore'] }
            ]
        },

        // B2 Level (2 dialogues)
        {
            id: 'd-11',
            title: 'Remote work debate',
            cefrLevel: 'B2',
            difficulty: 4,
            category: 'work',
            turns: [
                { speaker: 'A', text: 'Que penses-tu du télétravail?', translation: 'What do you think about remote work?' },
                { speaker: 'B', text: 'C\'est intéressant mais comporte des risques d\'isolement.', translation: 'It\'s interesting but carries risks of isolation.' }
            ],
            questions: [
                { question: 'Quel est le sujet de discussion?', answer: 'le télétravail', type: 'comprehension', alternatives: ['télétravail', 'remote work'] },
                { question: 'Quel risque du télétravail est mentionné?', answer: 'l\'isolement', type: 'comprehension', alternatives: ['isolement', 'isolation'] }
            ]
        },
        {
            id: 'd-12',
            title: 'Environmental policy',
            cefrLevel: 'B2',
            difficulty: 4,
            category: 'environment',
            turns: [
                { speaker: 'A', text: 'Comment réduire les émissions de CO2?', translation: 'How to reduce CO2 emissions?' },
                { speaker: 'B', text: 'Il faut investir massivement dans les énergies renouvelables.', translation: 'We must invest massively in renewable energies.' }
            ],
            questions: [
                { question: 'Quel est le problème environnemental discuté?', answer: 'les émissions de CO2', type: 'comprehension', alternatives: ['émissions de CO2', 'CO2', 'CO2 emissions'] },
                { question: 'Quelle est la solution proposée?', answer: 'investir dans les énergies renouvelables', type: 'comprehension', alternatives: ['énergies renouvelables', 'renewable energies'] }
            ]
        },

        // C1 Level (1 dialogue)
        {
            id: 'd-13',
            title: 'AI philosophy',
            cefrLevel: 'C1',
            difficulty: 5,
            category: 'philosophy',
            turns: [
                { speaker: 'A', text: 'L\'IA peut-elle avoir une conscience?', translation: 'Can AI have consciousness?' },
                { speaker: 'B', text: 'Question philosophique complexe. Imiter n\'est pas posséder.', translation: 'Complex philosophical question. Imitating is not possessing.' }
            ],
            questions: [
                { question: 'Quel est le sujet philosophique abordé?', answer: 'la conscience de l\'IA', type: 'comprehension', alternatives: ['conscience IA', 'AI consciousness', 'intelligence artificielle'] },
                { question: 'Selon B, quelle est la différence importante?', answer: 'imiter n\'est pas posséder', type: 'comprehension', alternatives: ['imiter et posséder', 'imitating is not possessing'] }
            ]
        }
    ],

    // Conjugation Tables - Full verb conjugations (all 6 forms at once)
    // Each table groups 6 conjugation items for practice
    conjugationTables: [
        // A1 Level - Essential verbs in Présent
        {
            id: 'ct-1',
            verb: 'être',
            english: 'to be',
            tense: 'présent',
            tenseFr: 'Présent',
            cefrLevel: 'A1',
            difficulty: 1,
            category: 'irregular',
            forms: [
                { subject: 'je', answer: 'suis' },
                { subject: 'tu', answer: 'es' },
                { subject: 'il/elle', answer: 'est' },
                { subject: 'nous', answer: 'sommes' },
                { subject: 'vous', answer: 'êtes' },
                { subject: 'ils/elles', answer: 'sont' }
            ]
        },
        {
            id: 'ct-2',
            verb: 'avoir',
            english: 'to have',
            tense: 'présent',
            tenseFr: 'Présent',
            cefrLevel: 'A1',
            difficulty: 1,
            category: 'irregular',
            forms: [
                { subject: 'je', answer: 'ai' },
                { subject: 'tu', answer: 'as' },
                { subject: 'il/elle', answer: 'a' },
                { subject: 'nous', answer: 'avons' },
                { subject: 'vous', answer: 'avez' },
                { subject: 'ils/elles', answer: 'ont' }
            ]
        },
        {
            id: 'ct-3',
            verb: 'aller',
            english: 'to go',
            tense: 'présent',
            tenseFr: 'Présent',
            cefrLevel: 'A1',
            difficulty: 1,
            category: 'irregular',
            forms: [
                { subject: 'je', answer: 'vais' },
                { subject: 'tu', answer: 'vas' },
                { subject: 'il/elle', answer: 'va' },
                { subject: 'nous', answer: 'allons' },
                { subject: 'vous', answer: 'allez' },
                { subject: 'ils/elles', answer: 'vont' }
            ]
        },
        {
            id: 'ct-4',
            verb: 'parler',
            english: 'to speak',
            tense: 'présent',
            tenseFr: 'Présent',
            cefrLevel: 'A1',
            difficulty: 1,
            category: 'er-verb',
            forms: [
                { subject: 'je', answer: 'parle' },
                { subject: 'tu', answer: 'parles' },
                { subject: 'il/elle', answer: 'parle' },
                { subject: 'nous', answer: 'parlons' },
                { subject: 'vous', answer: 'parlez' },
                { subject: 'ils/elles', answer: 'parlent' }
            ]
        },
        {
            id: 'ct-5',
            verb: 'faire',
            english: 'to do/make',
            tense: 'présent',
            tenseFr: 'Présent',
            cefrLevel: 'A1',
            difficulty: 1,
            category: 'irregular',
            forms: [
                { subject: 'je', answer: 'fais' },
                { subject: 'tu', answer: 'fais' },
                { subject: 'il/elle', answer: 'fait' },
                { subject: 'nous', answer: 'faisons' },
                { subject: 'vous', answer: 'faites' },
                { subject: 'ils/elles', answer: 'font' }
            ]
        },

        // A2 Level - Passé Composé
        {
            id: 'ct-6',
            verb: 'parler',
            english: 'to speak',
            tense: 'passé composé',
            tenseFr: 'Passé Composé',
            cefrLevel: 'A2',
            difficulty: 2,
            category: 'er-verb',
            forms: [
                { subject: 'je', answer: 'ai parlé' },
                { subject: 'tu', answer: 'as parlé' },
                { subject: 'il/elle', answer: 'a parlé' },
                { subject: 'nous', answer: 'avons parlé' },
                { subject: 'vous', answer: 'avez parlé' },
                { subject: 'ils/elles', answer: 'ont parlé' }
            ]
        },
        {
            id: 'ct-7',
            verb: 'aller',
            english: 'to go',
            tense: 'passé composé',
            tenseFr: 'Passé Composé',
            cefrLevel: 'A2',
            difficulty: 2,
            category: 'irregular',
            forms: [
                { subject: 'je', answer: 'suis allé(e)' },
                { subject: 'tu', answer: 'es allé(e)' },
                { subject: 'il/elle', answer: 'est allé(e)' },
                { subject: 'nous', answer: 'sommes allé(e)s' },
                { subject: 'vous', answer: 'êtes allé(e)(s)' },
                { subject: 'ils/elles', answer: 'sont allé(e)s' }
            ]
        },

        // A2 Level - Imparfait
        {
            id: 'ct-8',
            verb: 'être',
            english: 'to be',
            tense: 'imparfait',
            tenseFr: 'Imparfait',
            cefrLevel: 'A2',
            difficulty: 2,
            category: 'irregular',
            forms: [
                { subject: 'je', answer: 'étais' },
                { subject: 'tu', answer: 'étais' },
                { subject: 'il/elle', answer: 'était' },
                { subject: 'nous', answer: 'étions' },
                { subject: 'vous', answer: 'étiez' },
                { subject: 'ils/elles', answer: 'étaient' }
            ]
        },
        {
            id: 'ct-9',
            verb: 'parler',
            english: 'to speak',
            tense: 'imparfait',
            tenseFr: 'Imparfait',
            cefrLevel: 'A2',
            difficulty: 2,
            category: 'er-verb',
            forms: [
                { subject: 'je', answer: 'parlais' },
                { subject: 'tu', answer: 'parlais' },
                { subject: 'il/elle', answer: 'parlait' },
                { subject: 'nous', answer: 'parlions' },
                { subject: 'vous', answer: 'parliez' },
                { subject: 'ils/elles', answer: 'parlaient' }
            ]
        },

        // B1 Level - Futur Simple
        {
            id: 'ct-10',
            verb: 'être',
            english: 'to be',
            tense: 'futur simple',
            tenseFr: 'Futur Simple',
            cefrLevel: 'B1',
            difficulty: 3,
            category: 'irregular',
            forms: [
                { subject: 'je', answer: 'serai' },
                { subject: 'tu', answer: 'seras' },
                { subject: 'il/elle', answer: 'sera' },
                { subject: 'nous', answer: 'serons' },
                { subject: 'vous', answer: 'serez' },
                { subject: 'ils/elles', answer: 'seront' }
            ]
        },
        {
            id: 'ct-11',
            verb: 'avoir',
            english: 'to have',
            tense: 'futur simple',
            tenseFr: 'Futur Simple',
            cefrLevel: 'B1',
            difficulty: 3,
            category: 'irregular',
            forms: [
                { subject: 'je', answer: 'aurai' },
                { subject: 'tu', answer: 'auras' },
                { subject: 'il/elle', answer: 'aura' },
                { subject: 'nous', answer: 'aurons' },
                { subject: 'vous', answer: 'aurez' },
                { subject: 'ils/elles', answer: 'auront' }
            ]
        },
        {
            id: 'ct-12',
            verb: 'parler',
            english: 'to speak',
            tense: 'futur simple',
            tenseFr: 'Futur Simple',
            cefrLevel: 'B1',
            difficulty: 3,
            category: 'er-verb',
            forms: [
                { subject: 'je', answer: 'parlerai' },
                { subject: 'tu', answer: 'parleras' },
                { subject: 'il/elle', answer: 'parlera' },
                { subject: 'nous', answer: 'parlerons' },
                { subject: 'vous', answer: 'parlerez' },
                { subject: 'ils/elles', answer: 'parleront' }
            ]
        },

        // B1 Level - Conditionnel
        {
            id: 'ct-13',
            verb: 'être',
            english: 'to be',
            tense: 'conditionnel',
            tenseFr: 'Conditionnel',
            cefrLevel: 'B1',
            difficulty: 3,
            category: 'irregular',
            forms: [
                { subject: 'je', answer: 'serais' },
                { subject: 'tu', answer: 'serais' },
                { subject: 'il/elle', answer: 'serait' },
                { subject: 'nous', answer: 'serions' },
                { subject: 'vous', answer: 'seriez' },
                { subject: 'ils/elles', answer: 'seraient' }
            ]
        },
        {
            id: 'ct-14',
            verb: 'avoir',
            english: 'to have',
            tense: 'conditionnel',
            tenseFr: 'Conditionnel',
            cefrLevel: 'B1',
            difficulty: 3,
            category: 'irregular',
            forms: [
                { subject: 'je', answer: 'aurais' },
                { subject: 'tu', answer: 'aurais' },
                { subject: 'il/elle', answer: 'aurait' },
                { subject: 'nous', answer: 'aurions' },
                { subject: 'vous', answer: 'auriez' },
                { subject: 'ils/elles', answer: 'auraient' }
            ]
        },
        {
            id: 'ct-15',
            verb: 'parler',
            english: 'to speak',
            tense: 'conditionnel',
            tenseFr: 'Conditionnel',
            cefrLevel: 'B1',
            difficulty: 3,
            category: 'er-verb',
            forms: [
                { subject: 'je', answer: 'parlerais' },
                { subject: 'tu', answer: 'parlerais' },
                { subject: 'il/elle', answer: 'parlerait' },
                { subject: 'nous', answer: 'parlerions' },
                { subject: 'vous', answer: 'parleriez' },
                { subject: 'ils/elles', answer: 'parleraient' }
            ]
        },

        // POUVOIR (can/to be able) - Essential modal verb
        {
            id: 'ct-16',
            verb: 'pouvoir',
            english: 'can / to be able',
            tense: 'présent',
            tenseFr: 'Présent',
            cefrLevel: 'A2',
            difficulty: 2,
            category: 'irregular',
            forms: [
                { subject: 'je', answer: 'peux' },
                { subject: 'tu', answer: 'peux' },
                { subject: 'il/elle', answer: 'peut' },
                { subject: 'nous', answer: 'pouvons' },
                { subject: 'vous', answer: 'pouvez' },
                { subject: 'ils/elles', answer: 'peuvent' }
            ]
        },
        {
            id: 'ct-17',
            verb: 'pouvoir',
            english: 'can / to be able',
            tense: 'imparfait',
            tenseFr: 'Imparfait',
            cefrLevel: 'A2',
            difficulty: 2,
            category: 'irregular',
            forms: [
                { subject: 'je', answer: 'pouvais' },
                { subject: 'tu', answer: 'pouvais' },
                { subject: 'il/elle', answer: 'pouvait' },
                { subject: 'nous', answer: 'pouvions' },
                { subject: 'vous', answer: 'pouviez' },
                { subject: 'ils/elles', answer: 'pouvaient' }
            ]
        },
        {
            id: 'ct-18',
            verb: 'pouvoir',
            english: 'can / to be able',
            tense: 'futur simple',
            tenseFr: 'Futur Simple',
            cefrLevel: 'A2',
            difficulty: 2,
            category: 'irregular',
            forms: [
                { subject: 'je', answer: 'pourrai' },
                { subject: 'tu', answer: 'pourras' },
                { subject: 'il/elle', answer: 'pourra' },
                { subject: 'nous', answer: 'pourrons' },
                { subject: 'vous', answer: 'pourrez' },
                { subject: 'ils/elles', answer: 'pourront' }
            ]
        },

        // VOULOIR (to want) - Essential modal verb
        {
            id: 'ct-19',
            verb: 'vouloir',
            english: 'to want',
            tense: 'présent',
            tenseFr: 'Présent',
            cefrLevel: 'A2',
            difficulty: 2,
            category: 'irregular',
            forms: [
                { subject: 'je', answer: 'veux' },
                { subject: 'tu', answer: 'veux' },
                { subject: 'il/elle', answer: 'veut' },
                { subject: 'nous', answer: 'voulons' },
                { subject: 'vous', answer: 'voulez' },
                { subject: 'ils/elles', answer: 'veulent' }
            ]
        },
        {
            id: 'ct-20',
            verb: 'vouloir',
            english: 'to want',
            tense: 'imparfait',
            tenseFr: 'Imparfait',
            cefrLevel: 'A2',
            difficulty: 2,
            category: 'irregular',
            forms: [
                { subject: 'je', answer: 'voulais' },
                { subject: 'tu', answer: 'voulais' },
                { subject: 'il/elle', answer: 'voulait' },
                { subject: 'nous', answer: 'voulions' },
                { subject: 'vous', answer: 'vouliez' },
                { subject: 'ils/elles', answer: 'voulaient' }
            ]
        },
        {
            id: 'ct-21',
            verb: 'vouloir',
            english: 'to want',
            tense: 'futur simple',
            tenseFr: 'Futur Simple',
            cefrLevel: 'A2',
            difficulty: 2,
            category: 'irregular',
            forms: [
                { subject: 'je', answer: 'voudrai' },
                { subject: 'tu', answer: 'voudras' },
                { subject: 'il/elle', answer: 'voudra' },
                { subject: 'nous', answer: 'voudrons' },
                { subject: 'vous', answer: 'voudrez' },
                { subject: 'ils/elles', answer: 'voudront' }
            ]
        },

        // DEVOIR (must/to have to) - Essential modal verb
        {
            id: 'ct-22',
            verb: 'devoir',
            english: 'must / to have to',
            tense: 'présent',
            tenseFr: 'Présent',
            cefrLevel: 'A2',
            difficulty: 2,
            category: 'irregular',
            forms: [
                { subject: 'je', answer: 'dois' },
                { subject: 'tu', answer: 'dois' },
                { subject: 'il/elle', answer: 'doit' },
                { subject: 'nous', answer: 'devons' },
                { subject: 'vous', answer: 'devez' },
                { subject: 'ils/elles', answer: 'doivent' }
            ]
        },
        {
            id: 'ct-23',
            verb: 'devoir',
            english: 'must / to have to',
            tense: 'imparfait',
            tenseFr: 'Imparfait',
            cefrLevel: 'A2',
            difficulty: 2,
            category: 'irregular',
            forms: [
                { subject: 'je', answer: 'devais' },
                { subject: 'tu', answer: 'devais' },
                { subject: 'il/elle', answer: 'devait' },
                { subject: 'nous', answer: 'devions' },
                { subject: 'vous', answer: 'deviez' },
                { subject: 'ils/elles', answer: 'devaient' }
            ]
        },
        {
            id: 'ct-24',
            verb: 'devoir',
            english: 'must / to have to',
            tense: 'futur simple',
            tenseFr: 'Futur Simple',
            cefrLevel: 'A2',
            difficulty: 2,
            category: 'irregular',
            forms: [
                { subject: 'je', answer: 'devrai' },
                { subject: 'tu', answer: 'devras' },
                { subject: 'il/elle', answer: 'devra' },
                { subject: 'nous', answer: 'devrons' },
                { subject: 'vous', answer: 'devrez' },
                { subject: 'ils/elles', answer: 'devront' }
            ]
        },

        // SAVOIR (to know) - Essential verb
        {
            id: 'ct-25',
            verb: 'savoir',
            english: 'to know',
            tense: 'présent',
            tenseFr: 'Présent',
            cefrLevel: 'A2',
            difficulty: 2,
            category: 'irregular',
            forms: [
                { subject: 'je', answer: 'sais' },
                { subject: 'tu', answer: 'sais' },
                { subject: 'il/elle', answer: 'sait' },
                { subject: 'nous', answer: 'savons' },
                { subject: 'vous', answer: 'savez' },
                { subject: 'ils/elles', answer: 'savent' }
            ]
        },
        {
            id: 'ct-26',
            verb: 'savoir',
            english: 'to know',
            tense: 'imparfait',
            tenseFr: 'Imparfait',
            cefrLevel: 'A2',
            difficulty: 2,
            category: 'irregular',
            forms: [
                { subject: 'je', answer: 'savais' },
                { subject: 'tu', answer: 'savais' },
                { subject: 'il/elle', answer: 'savait' },
                { subject: 'nous', answer: 'savions' },
                { subject: 'vous', answer: 'saviez' },
                { subject: 'ils/elles', answer: 'savaient' }
            ]
        },

        // VOIR (to see) - Very common verb
        {
            id: 'ct-27',
            verb: 'voir',
            english: 'to see',
            tense: 'présent',
            tenseFr: 'Présent',
            cefrLevel: 'A2',
            difficulty: 2,
            category: 'irregular',
            forms: [
                { subject: 'je', answer: 'vois' },
                { subject: 'tu', answer: 'vois' },
                { subject: 'il/elle', answer: 'voit' },
                { subject: 'nous', answer: 'voyons' },
                { subject: 'vous', answer: 'voyez' },
                { subject: 'ils/elles', answer: 'voient' }
            ]
        },
        {
            id: 'ct-28',
            verb: 'voir',
            english: 'to see',
            tense: 'imparfait',
            tenseFr: 'Imparfait',
            cefrLevel: 'A2',
            difficulty: 2,
            category: 'irregular',
            forms: [
                { subject: 'je', answer: 'voyais' },
                { subject: 'tu', answer: 'voyais' },
                { subject: 'il/elle', answer: 'voyait' },
                { subject: 'nous', answer: 'voyions' },
                { subject: 'vous', answer: 'voyiez' },
                { subject: 'ils/elles', answer: 'voyaient' }
            ]
        },

        // DIRE (to say/tell) - Very common verb
        {
            id: 'ct-29',
            verb: 'dire',
            english: 'to say / to tell',
            tense: 'présent',
            tenseFr: 'Présent',
            cefrLevel: 'A2',
            difficulty: 2,
            category: 'irregular',
            forms: [
                { subject: 'je', answer: 'dis' },
                { subject: 'tu', answer: 'dis' },
                { subject: 'il/elle', answer: 'dit' },
                { subject: 'nous', answer: 'disons' },
                { subject: 'vous', answer: 'dites' },
                { subject: 'ils/elles', answer: 'disent' }
            ]
        },
        {
            id: 'ct-30',
            verb: 'dire',
            english: 'to say / to tell',
            tense: 'imparfait',
            tenseFr: 'Imparfait',
            cefrLevel: 'A2',
            difficulty: 2,
            category: 'irregular',
            forms: [
                { subject: 'je', answer: 'disais' },
                { subject: 'tu', answer: 'disais' },
                { subject: 'il/elle', answer: 'disait' },
                { subject: 'nous', answer: 'disions' },
                { subject: 'vous', answer: 'disiez' },
                { subject: 'ils/elles', answer: 'disaient' }
            ]
        },

        // METTRE (to put) - Very common verb
        {
            id: 'ct-31',
            verb: 'mettre',
            english: 'to put',
            tense: 'présent',
            tenseFr: 'Présent',
            cefrLevel: 'B1',
            difficulty: 2,
            category: 'irregular',
            forms: [
                { subject: 'je', answer: 'mets' },
                { subject: 'tu', answer: 'mets' },
                { subject: 'il/elle', answer: 'met' },
                { subject: 'nous', answer: 'mettons' },
                { subject: 'vous', answer: 'mettez' },
                { subject: 'ils/elles', answer: 'mettent' }
            ]
        },
        {
            id: 'ct-32',
            verb: 'mettre',
            english: 'to put',
            tense: 'imparfait',
            tenseFr: 'Imparfait',
            cefrLevel: 'B1',
            difficulty: 2,
            category: 'irregular',
            forms: [
                { subject: 'je', answer: 'mettais' },
                { subject: 'tu', answer: 'mettais' },
                { subject: 'il/elle', answer: 'mettait' },
                { subject: 'nous', answer: 'mettions' },
                { subject: 'vous', answer: 'mettiez' },
                { subject: 'ils/elles', answer: 'mettaient' }
            ]
        },

        // PRENDRE (to take) - Very common verb
        {
            id: 'ct-33',
            verb: 'prendre',
            english: 'to take',
            tense: 'présent',
            tenseFr: 'Présent',
            cefrLevel: 'A2',
            difficulty: 2,
            category: 'irregular',
            forms: [
                { subject: 'je', answer: 'prends' },
                { subject: 'tu', answer: 'prends' },
                { subject: 'il/elle', answer: 'prend' },
                { subject: 'nous', answer: 'prenons' },
                { subject: 'vous', answer: 'prenez' },
                { subject: 'ils/elles', answer: 'prennent' }
            ]
        },
        {
            id: 'ct-34',
            verb: 'prendre',
            english: 'to take',
            tense: 'imparfait',
            tenseFr: 'Imparfait',
            cefrLevel: 'A2',
            difficulty: 2,
            category: 'irregular',
            forms: [
                { subject: 'je', answer: 'prenais' },
                { subject: 'tu', answer: 'prenais' },
                { subject: 'il/elle', answer: 'prenait' },
                { subject: 'nous', answer: 'prenions' },
                { subject: 'vous', answer: 'preniez' },
                { subject: 'ils/elles', answer: 'prenaient' }
            ]
        },

        // VENIR (to come) - Very common verb
        {
            id: 'ct-35',
            verb: 'venir',
            english: 'to come',
            tense: 'présent',
            tenseFr: 'Présent',
            cefrLevel: 'A2',
            difficulty: 2,
            category: 'irregular',
            forms: [
                { subject: 'je', answer: 'viens' },
                { subject: 'tu', answer: 'viens' },
                { subject: 'il/elle', answer: 'vient' },
                { subject: 'nous', answer: 'venons' },
                { subject: 'vous', answer: 'venez' },
                { subject: 'ils/elles', answer: 'viennent' }
            ]
        },
        {
            id: 'ct-36',
            verb: 'venir',
            english: 'to come',
            tense: 'imparfait',
            tenseFr: 'Imparfait',
            cefrLevel: 'A2',
            difficulty: 2,
            category: 'irregular',
            forms: [
                { subject: 'je', answer: 'venais' },
                { subject: 'tu', answer: 'venais' },
                { subject: 'il/elle', answer: 'venait' },
                { subject: 'nous', answer: 'venions' },
                { subject: 'vous', answer: 'veniez' },
                { subject: 'ils/elles', answer: 'venaient' }
            ]
        },

        // CONNAÎTRE (to know/be familiar with) - Essential verb
        {
            id: 'ct-37',
            verb: 'connaître',
            english: 'to know / be familiar with',
            tense: 'présent',
            tenseFr: 'Présent',
            cefrLevel: 'A2',
            difficulty: 2,
            category: 'irregular',
            forms: [
                { subject: 'je', answer: 'connais' },
                { subject: 'tu', answer: 'connais' },
                { subject: 'il/elle', answer: 'connaît' },
                { subject: 'nous', answer: 'connaissons' },
                { subject: 'vous', answer: 'connaissez' },
                { subject: 'ils/elles', answer: 'connaissent' }
            ]
        },
        {
            id: 'ct-38',
            verb: 'connaître',
            english: 'to know / be familiar with',
            tense: 'imparfait',
            tenseFr: 'Imparfait',
            cefrLevel: 'A2',
            difficulty: 2,
            category: 'irregular',
            forms: [
                { subject: 'je', answer: 'connaissais' },
                { subject: 'tu', answer: 'connaissais' },
                { subject: 'il/elle', answer: 'connaissait' },
                { subject: 'nous', answer: 'connaissions' },
                { subject: 'vous', answer: 'connaissiez' },
                { subject: 'ils/elles', answer: 'connaissaient' }
            ]
        }
    ],

    // Grammar Topics with Lessons
    grammarTopics: [
        {
            id: 'topic-1',
            title: 'Articles (Definite and Indefinite)',
            description: 'Learn how to use le, la, les, un, une, and des',
            cefrLevel: 'A1',
            category: 'articles',
            theory: `
                <h3>Definite Articles (the)</h3>
                <ul>
                    <li><strong>le</strong> - masculine singular (le garçon = the boy)</li>
                    <li><strong>la</strong> - feminine singular (la maison = the house)</li>
                    <li><strong>les</strong> - plural (les filles = the girls)</li>
                    <li><strong>l'</strong> - before vowels (l'ami = the friend)</li>
                </ul>
                <h3>Indefinite Articles (a/an, some)</h3>
                <ul>
                    <li><strong>un</strong> - masculine (un livre = a book)</li>
                    <li><strong>une</strong> - feminine (une pomme = an apple)</li>
                    <li><strong>des</strong> - plural (des livres = some books)</li>
                </ul>
            `,
            examples: [
                'le garçon (the boy)',
                'la fille (the girl)',
                'les enfants (the children)',
                'un chat (a cat)',
                'une maison (a house)',
                'des pommes (some apples)'
            ],
            exerciseIds: ['g-1', 'g-2', 'g-3', 'g-4', 'g-5', 'g-6', 'g-7', 'g-22', 'g-23', 'g-24']
        },
        {
            id: 'topic-2',
            title: 'Gender Agreement with Adjectives',
            description: 'Mastering adjective-noun agreement',
            cefrLevel: 'A2',
            category: 'agreement',
            theory: `
                <h3>Adjective Agreement</h3>
                <p>In French, adjectives must agree in gender (masculine/feminine) and number (singular/plural) with the nouns they describe.</p>
                <h4>Basic Rules:</h4>
                <ul>
                    <li><strong>Masculine:</strong> petit (small)</li>
                    <li><strong>Feminine:</strong> Add -e → petite</li>
                    <li><strong>Plural:</strong> Add -s → petits (m), petites (f)</li>
                </ul>
                <h4>Special Cases:</h4>
                <ul>
                    <li><strong>beau/belle</strong> (beautiful)</li>
                    <li><strong>vieux/vieille</strong> (old) - vieil before vowel</li>
                    <li><strong>nouveau/nouvelle</strong> (new)</li>
                </ul>
            `,
            examples: [
                'un grand garçon (a big boy)',
                'une grande fille (a big girl)',
                'le petit chat (the small cat)',
                'la petite maison (the small house)',
                'un beau jour (a beautiful day)',
                'une belle journée (a beautiful day)'
            ],
            exerciseIds: ['g-8', 'g-9', 'g-10', 'g-25', 'g-26', 'g-27', 'g-28', 'g-29', 'g-30', 'g-31', 'g-32', 'g-33', 'g-34', 'g-35', 'g-36']
        },
        {
            id: 'topic-3',
            title: 'Pluralization',
            description: 'Rules for forming plurals in French',
            cefrLevel: 'A1',
            category: 'pluralization',
            theory: `
                <h3>Plural Formation</h3>
                <h4>Regular Plurals:</h4>
                <ul>
                    <li><strong>Add -s:</strong> le livre → les livres (books)</li>
                    <li><strong>-al → -aux:</strong> l'animal → les animaux (animals)</li>
                    <li><strong>-eau → -eaux:</strong> le beau → les beaux (beautiful ones)</li>
                    <li><strong>-eu → -eux:</strong> le jeu → les jeux (games)</li>
                </ul>
                <h4>Irregular Plurals:</h4>
                <ul>
                    <li><strong>l'œil → les yeux</strong> (eyes)</li>
                    <li><strong>Words ending in -x stay the same:</strong> la voix → les voix</li>
                </ul>
            `,
            examples: [
                'la maison → les maisons',
                'le cheval → les chevaux',
                'le journal → les journaux',
                'le jeu → les jeux',
                'l\'œil → les yeux'
            ],
            exerciseIds: ['g-11', 'g-12', 'g-13', 'g-37', 'g-38', 'g-39', 'g-40', 'g-41', 'g-42', 'g-43']
        },
        {
            id: 'topic-4',
            title: 'Prepositions',
            description: 'Essential French prepositions and their usage',
            cefrLevel: 'A2',
            category: 'prepositions',
            theory: `
                <h3>Common Prepositions</h3>
                <h4>Basic Prepositions:</h4>
                <ul>
                    <li><strong>à</strong> - to, at (à l'école = to/at school)</li>
                    <li><strong>de</strong> - from, of (de Paris = from Paris)</li>
                    <li><strong>en</strong> - in (en France = in France)</li>
                    <li><strong>avec</strong> - with (avec moi = with me)</li>
                    <li><strong>pour</strong> - for (pour toi = for you)</li>
                    <li><strong>sans</strong> - without (sans argent = without money)</li>
                </ul>
                <h4>Contractions:</h4>
                <ul>
                    <li><strong>à + le = au</strong> (au restaurant)</li>
                    <li><strong>à + les = aux</strong> (aux États-Unis)</li>
                    <li><strong>de + le = du</strong> (du pain)</li>
                    <li><strong>de + les = des</strong> (des étudiants)</li>
                </ul>
                <h4>Location Prepositions:</h4>
                <ul>
                    <li><strong>sur</strong> - on (sur la table)</li>
                    <li><strong>sous</strong> - under (sous le lit)</li>
                    <li><strong>devant</strong> - in front of</li>
                    <li><strong>derrière</strong> - behind</li>
                    <li><strong>entre</strong> - between</li>
                </ul>
            `,
            examples: [
                'Je vais à l\'école (I go to school)',
                'Il vient de Paris (He comes from Paris)',
                'Elle habite en France (She lives in France)',
                'Le livre est sur la table (The book is on the table)',
                'Nous allons au restaurant (We go to the restaurant)'
            ],
            exerciseIds: ['g-14', 'g-15', 'g-16', 'g-44', 'g-45', 'g-46', 'g-47', 'g-48', 'g-49', 'g-50', 'g-51', 'g-52', 'g-53', 'g-54', 'g-55']
        },
        {
            id: 'topic-5',
            title: 'Negation',
            description: 'How to make negative sentences in French',
            cefrLevel: 'A2',
            category: 'negation',
            theory: `
                <h3>Negation in French</h3>
                <h4>Basic Negation: ne...pas</h4>
                <p>Place ne before the verb and pas after it.</p>
                <p><strong>Example:</strong> Je parle → Je ne parle pas (I don't speak)</p>

                <h4>Other Negative Structures:</h4>
                <ul>
                    <li><strong>ne...jamais</strong> - never (Je ne mange jamais)</li>
                    <li><strong>ne...rien</strong> - nothing (Il n'a rien)</li>
                    <li><strong>ne...personne</strong> - no one (Elle ne voit personne)</li>
                    <li><strong>ne...plus</strong> - no longer (Ils n'habitent plus ici)</li>
                    <li><strong>ne...que</strong> - only (Je n'ai que cinq euros)</li>
                    <li><strong>ne...ni...ni</strong> - neither...nor (Je n'ai ni temps ni argent)</li>
                </ul>

                <h4>Note:</h4>
                <p>Before a vowel, <strong>ne</strong> becomes <strong>n'</strong></p>
            `,
            examples: [
                'Je ne parle pas français (I don\'t speak French)',
                'Elle ne mange jamais de viande (She never eats meat)',
                'Il n\'a rien (He has nothing)',
                'Nous ne voyons personne (We don\'t see anyone)',
                'Je n\'ai que dix euros (I only have ten euros)'
            ],
            exerciseIds: ['g-17', 'g-18', 'g-56', 'g-57', 'g-58', 'g-59', 'g-60', 'g-61', 'g-62', 'g-63']
        },
        {
            id: 'topic-6',
            title: 'Possessive Adjectives',
            description: 'My, your, his, her, our, their in French',
            cefrLevel: 'A2',
            category: 'possessive',
            theory: `
                <h3>Possessive Adjectives</h3>
                <p>Possessive adjectives agree with the object possessed, not the possessor.</p>

                <h4>Singular:</h4>
                <table border="1" cellpadding="5">
                    <tr><th>English</th><th>Masculine</th><th>Feminine</th><th>Plural</th></tr>
                    <tr><td>my</td><td>mon</td><td>ma</td><td>mes</td></tr>
                    <tr><td>your (tu)</td><td>ton</td><td>ta</td><td>tes</td></tr>
                    <tr><td>his/her</td><td>son</td><td>sa</td><td>ses</td></tr>
                    <tr><td>our</td><td>notre</td><td>notre</td><td>nos</td></tr>
                    <tr><td>your (vous)</td><td>votre</td><td>votre</td><td>vos</td></tr>
                    <tr><td>their</td><td>leur</td><td>leur</td><td>leurs</td></tr>
                </table>

                <h4>Special Rule:</h4>
                <p>Use masculine form (mon, ton, son) before feminine words starting with a vowel:</p>
                <p><strong>mon idée</strong> (my idea - not "ma idée")</p>
            `,
            examples: [
                'mon livre (my book)',
                'ma maison (my house)',
                'mes amis (my friends)',
                'ton chat (your cat)',
                'sa voiture (his/her car)',
                'notre école (our school)',
                'leur maison (their house)'
            ],
            exerciseIds: ['g-19', 'g-20', 'g-21', 'g-64', 'g-65', 'g-66', 'g-67', 'g-68', 'g-69', 'g-70']
        },
        {
            id: 'topic-7',
            title: 'Object Pronouns',
            description: 'Direct and indirect object pronouns',
            cefrLevel: 'B1',
            category: 'pronouns',
            theory: `
                <h3>Object Pronouns</h3>

                <h4>Direct Object Pronouns:</h4>
                <ul>
                    <li><strong>me/m'</strong> - me</li>
                    <li><strong>te/t'</strong> - you</li>
                    <li><strong>le/l'</strong> - him/it (m)</li>
                    <li><strong>la/l'</strong> - her/it (f)</li>
                    <li><strong>nous</strong> - us</li>
                    <li><strong>vous</strong> - you</li>
                    <li><strong>les</strong> - them</li>
                </ul>

                <h4>Indirect Object Pronouns:</h4>
                <ul>
                    <li><strong>me/m'</strong> - to me</li>
                    <li><strong>te/t'</strong> - to you</li>
                    <li><strong>lui</strong> - to him/her</li>
                    <li><strong>nous</strong> - to us</li>
                    <li><strong>vous</strong> - to you</li>
                    <li><strong>leur</strong> - to them</li>
                </ul>

                <h4>Special Pronouns:</h4>
                <ul>
                    <li><strong>y</strong> - replaces à + place/thing</li>
                    <li><strong>en</strong> - replaces de + noun</li>
                </ul>

                <h4>Position:</h4>
                <p>Pronouns go BEFORE the conjugated verb.</p>
                <p><strong>Example:</strong> Je le vois (I see him)</p>
            `,
            examples: [
                'Je le vois (I see him)',
                'Elle me donne le livre (She gives me the book)',
                'Nous leur parlons (We speak to them)',
                'Ils y pensent (They think about it)',
                'J\'en ai (I have some)'
            ],
            exerciseIds: ['g-71', 'g-72', 'g-73', 'g-74', 'g-75', 'g-76', 'g-77', 'g-78', 'g-79', 'g-80']
        },
        {
            id: 'topic-8',
            title: 'Passé Composé',
            description: 'The compound past tense',
            cefrLevel: 'B1',
            category: 'past_tense',
            theory: `
                <h3>Passé Composé</h3>
                <p>Used for completed actions in the past.</p>

                <h4>Formation:</h4>
                <p><strong>avoir/être (present) + past participle</strong></p>

                <h4>With AVOIR (most verbs):</h4>
                <ul>
                    <li>J'ai mangé (I ate)</li>
                    <li>Tu as fini (You finished)</li>
                    <li>Il a pris (He took)</li>
                </ul>

                <h4>With ÊTRE (movement & reflexive verbs):</h4>
                <ul>
                    <li>Je suis allé(e) (I went)</li>
                    <li>Elle est venue (She came)</li>
                    <li>Nous sommes arrivés (We arrived)</li>
                </ul>

                <h4>Agreement with ÊTRE:</h4>
                <p>Past participle agrees with the subject:</p>
                <ul>
                    <li>Elle est allée (feminine: add -e)</li>
                    <li>Ils sont arrivés (masculine plural: add -s)</li>
                    <li>Elles sont venues (feminine plural: add -es)</li>
                </ul>

                <h4>Common Irregular Past Participles:</h4>
                <ul>
                    <li>avoir → eu</li>
                    <li>être → été</li>
                    <li>faire → fait</li>
                    <li>prendre → pris</li>
                    <li>voir → vu</li>
                </ul>
            `,
            examples: [
                'J\'ai mangé une pomme (I ate an apple)',
                'Elle est allée à Paris (She went to Paris)',
                'Nous avons fini le travail (We finished the work)',
                'Ils sont arrivés hier (They arrived yesterday)',
                'Tu as pris le bus (You took the bus)'
            ],
            exerciseIds: ['g-81', 'g-82', 'g-83', 'g-84', 'g-85', 'g-86', 'g-87', 'g-88']
        },
        {
            id: 'topic-9',
            title: 'Imparfait',
            description: 'The imperfect past tense',
            cefrLevel: 'B1',
            category: 'past_tense',
            theory: `
                <h3>L'Imparfait (Imperfect)</h3>
                <p>Used for ongoing, habitual, or background actions in the past.</p>

                <h4>Formation:</h4>
                <ol>
                    <li>Take the <strong>nous</strong> form of present tense</li>
                    <li>Remove <strong>-ons</strong></li>
                    <li>Add imparfait endings: -ais, -ais, -ait, -ions, -iez, -aient</li>
                </ol>

                <h4>Example: PARLER</h4>
                <p>nous parlons → parl-</p>
                <ul>
                    <li>je parlais</li>
                    <li>tu parlais</li>
                    <li>il/elle parlait</li>
                    <li>nous parlions</li>
                    <li>vous parliez</li>
                    <li>ils/elles parlaient</li>
                </ul>

                <h4>Irregular: ÊTRE</h4>
                <p>Stem: ét-</p>
                <ul>
                    <li>j'étais, tu étais, il était, nous étions, vous étiez, ils étaient</li>
                </ul>

                <h4>When to use:</h4>
                <ul>
                    <li><strong>Habitual actions:</strong> Quand j'étais jeune, je jouais au foot (When I was young, I played soccer)</li>
                    <li><strong>Descriptions:</strong> Il faisait beau (The weather was nice)</li>
                    <li><strong>Ongoing actions:</strong> Je mangeais quand il est arrivé (I was eating when he arrived)</li>
                </ul>
            `,
            examples: [
                'Je mangeais (I was eating / I used to eat)',
                'Tu étais content (You were happy)',
                'Il faisait beau (It was nice weather)',
                'Nous allions à l\'école (We used to go to school)',
                'Ils jouaient au tennis (They were playing / used to play tennis)'
            ],
            exerciseIds: ['g-89', 'g-90', 'g-91', 'g-92', 'g-93', 'g-94', 'g-95', 'g-96']
        },
        {
            id: 'topic-10',
            title: 'Conditional',
            description: 'Expressing hypothetical situations',
            cefrLevel: 'B1',
            category: 'conditional',
            theory: `
                <h3>Le Conditionnel (Conditional)</h3>
                <p>Used to express wishes, polite requests, and hypothetical situations.</p>

                <h4>Formation:</h4>
                <p><strong>Future stem + imparfait endings</strong></p>
                <p>Endings: -ais, -ais, -ait, -ions, -iez, -aient</p>

                <h4>Regular verbs:</h4>
                <ul>
                    <li><strong>Parler:</strong> je parlerais (I would speak)</li>
                    <li><strong>Finir:</strong> je finirais (I would finish)</li>
                </ul>

                <h4>Irregular stems (same as future):</h4>
                <ul>
                    <li><strong>avoir</strong> → aur- → j'aurais</li>
                    <li><strong>être</strong> → ser- → je serais</li>
                    <li><strong>aller</strong> → ir- → j'irais</li>
                    <li><strong>faire</strong> → fer- → je ferais</li>
                    <li><strong>pouvoir</strong> → pourr- → je pourrais</li>
                    <li><strong>vouloir</strong> → voudr- → je voudrais</li>
                    <li><strong>devoir</strong> → devr- → je devrais</li>
                </ul>

                <h4>Uses:</h4>
                <ul>
                    <li><strong>Polite requests:</strong> Je voudrais un café (I would like a coffee)</li>
                    <li><strong>Hypothetical:</strong> Si j'étais riche, je voyagerais (If I were rich, I would travel)</li>
                    <li><strong>Possibility:</strong> Tu pourrais m'aider? (Could you help me?)</li>
                </ul>
            `,
            examples: [
                'Je voudrais un café (I would like a coffee)',
                'Tu devrais étudier (You should study)',
                'Il aimerait voyager (He would like to travel)',
                'Nous pourrions partir (We could leave)',
                'Vous seriez content (You would be happy)'
            ],
            exerciseIds: ['g-97', 'g-98', 'g-99', 'g-100', 'g-101']
        },
        {
            id: 'topic-11',
            title: 'Introduction to Subjunctive',
            description: 'Basic subjunctive mood usage',
            cefrLevel: 'B1',
            category: 'subjunctive',
            theory: `
                <h3>Le Subjonctif (Subjunctive Mood)</h3>
                <p>Used to express doubt, emotion, desire, necessity, or uncertainty.</p>

                <h4>When to use:</h4>
                <ul>
                    <li><strong>After expressions of desire:</strong> Je veux que tu viennes (I want you to come)</li>
                    <li><strong>After expressions of emotion:</strong> Je suis content que tu sois là (I'm happy you're here)</li>
                    <li><strong>After expressions of doubt:</strong> Je doute qu'il vienne (I doubt he'll come)</li>
                    <li><strong>After impersonal expressions:</strong> Il faut que tu études (You must study)</li>
                </ul>

                <h4>Common triggers:</h4>
                <ul>
                    <li>vouloir que (to want that)</li>
                    <li>il faut que (it's necessary that)</li>
                    <li>il est important que (it's important that)</li>
                    <li>avoir peur que (to be afraid that)</li>
                    <li>douter que (to doubt that)</li>
                </ul>

                <h4>Formation (regular):</h4>
                <ol>
                    <li>Take <strong>ils/elles</strong> form of present</li>
                    <li>Remove <strong>-ent</strong></li>
                    <li>Add: -e, -es, -e, -ions, -iez, -ent</li>
                </ol>

                <h4>Irregular stems:</h4>
                <ul>
                    <li><strong>avoir:</strong> que j'aie</li>
                    <li><strong>être:</strong> que je sois</li>
                    <li><strong>aller:</strong> que j'aille</li>
                    <li><strong>faire:</strong> que je fasse</li>
                    <li><strong>pouvoir:</strong> que je puisse</li>
                    <li><strong>savoir:</strong> que je sache</li>
                </ul>
            `,
            examples: [
                'Je veux que tu viennes (I want you to come)',
                'Il faut que tu études (You must study)',
                'Il est important qu\'il sache (It\'s important that he knows)',
                'Je doute qu\'elle ait raison (I doubt she\'s right)',
                'J\'ai peur qu\'ils soient en retard (I\'m afraid they\'re late)'
            ],
            exerciseIds: ['g-102', 'g-103', 'g-104', 'g-105']
        },
        {
            id: 'topic-12',
            title: 'Advanced Subjunctive',
            description: 'Subjunctive with conjunctions and complex structures',
            cefrLevel: 'B2',
            category: 'subjunctive',
            theory: `
                <h3>Advanced Subjunctive Usage</h3>

                <h4>Conjunctions requiring subjunctive:</h4>
                <ul>
                    <li><strong>avant que</strong> - before</li>
                    <li><strong>bien que</strong> - although</li>
                    <li><strong>jusqu'à ce que</strong> - until</li>
                    <li><strong>pourvu que</strong> - provided that</li>
                    <li><strong>sans que</strong> - without</li>
                    <li><strong>afin que</strong> - so that</li>
                    <li><strong>à moins que</strong> - unless</li>
                </ul>

                <h4>Exception:</h4>
                <p><strong>au cas où</strong> (in case) takes CONDITIONAL, not subjunctive!</p>

                <h4>Subjunctive after superlatives:</h4>
                <p>Le meilleur restaurant que je connaisse (The best restaurant I know)</p>

                <h4>Subjunctive with indefinite antecedents:</h4>
                <p>Je cherche quelqu'un qui puisse m'aider (I'm looking for someone who can help me)</p>

                <h4>Fixed expressions:</h4>
                <ul>
                    <li><strong>Quoi qu'il fasse</strong> - Whatever he does</li>
                    <li><strong>Où qu'il aille</strong> - Wherever he goes</li>
                </ul>
            `,
            examples: [
                'Avant qu\'il parte (Before he leaves)',
                'Bien qu\'elle soit fatiguée (Although she\'s tired)',
                'Jusqu\'à ce qu\'ils arrivent (Until they arrive)',
                'Sans que je le sache (Without my knowing)',
                'C\'est le meilleur que je connaisse (It\'s the best I know)'
            ],
            exerciseIds: ['g-106', 'g-107', 'g-108', 'g-109', 'g-110', 'g-111', 'g-112', 'g-113', 'g-114', 'g-115']
        },
        {
            id: 'topic-13',
            title: 'Conditional Perfect',
            description: 'Past conditional and hypothetical past',
            cefrLevel: 'B2',
            category: 'conditional',
            theory: `
                <h3>Conditionnel Passé (Past Conditional)</h3>
                <p>Used to express what would have happened in the past.</p>

                <h4>Formation:</h4>
                <p><strong>avoir/être (conditional) + past participle</strong></p>

                <h4>Examples:</h4>
                <ul>
                    <li>J'aurais fait (I would have done)</li>
                    <li>Tu serais allé (You would have gone)</li>
                    <li>Elle aurait voulu (She would have wanted)</li>
                </ul>

                <h4>Si clauses (Type 3 - Past hypothetical):</h4>
                <p><strong>Si + pluperfect, conditional perfect</strong></p>
                <p>Si j'avais su, je serais venu (If I had known, I would have come)</p>

                <h4>Agreement with être:</h4>
                <ul>
                    <li>Elle serait allée (She would have gone)</li>
                    <li>Ils seraient venus (They would have come)</li>
                </ul>

                <h4>Common uses:</h4>
                <ul>
                    <li><strong>Regret:</strong> J'aurais dû étudier (I should have studied)</li>
                    <li><strong>Reproach:</strong> Tu aurais pu m'aider (You could have helped me)</li>
                    <li><strong>Hypothetical past:</strong> Sans toi, j'aurais échoué (Without you, I would have failed)</li>
                </ul>
            `,
            examples: [
                'J\'aurais fait le travail (I would have done the work)',
                'Elle serait allée à Paris (She would have gone to Paris)',
                'Si j\'avais su... (If I had known...)',
                'Ils seraient venus (They would have come)',
                'Nous aurions pu gagner (We could have won)'
            ],
            exerciseIds: ['g-116', 'g-117', 'g-118', 'g-119', 'g-120']
        },
        {
            id: 'topic-14',
            title: 'Gerunds and Infinitives',
            description: 'Present participles and infinitive constructions',
            cefrLevel: 'B2',
            category: 'gerund',
            theory: `
                <h3>Gerunds (en + participe présent)</h3>

                <h4>Formation:</h4>
                <p><strong>en</strong> + present participle (-ant form)</p>
                <p>To form present participle: take <strong>nous</strong> form, remove <strong>-ons</strong>, add <strong>-ant</strong></p>

                <h4>Examples:</h4>
                <ul>
                    <li>parlons → en parlant (while speaking)</li>
                    <li>mangeons → en mangeant (while eating)</li>
                    <li>finissons → en finissant (while finishing)</li>
                </ul>

                <h4>Uses of gerund:</h4>
                <ul>
                    <li><strong>Simultaneity:</strong> En mangeant, il regarde la télé (While eating, he watches TV)</li>
                    <li><strong>Manner:</strong> Il a réussi en travaillant dur (He succeeded by working hard)</li>
                </ul>

                <h3>Infinitive Constructions</h3>

                <h4>After prepositions:</h4>
                <ul>
                    <li><strong>avant de</strong> + infinitive: Avant de partir (Before leaving)</li>
                    <li><strong>après</strong> + past infinitive: Après avoir mangé (After having eaten)</li>
                    <li><strong>sans</strong> + infinitive: Sans dire (Without saying)</li>
                    <li><strong>pour</strong> + infinitive: Pour réussir (In order to succeed)</li>
                </ul>

                <h4>Past infinitive:</h4>
                <p><strong>avoir/être (infinitive) + past participle</strong></p>
                <p>Après avoir mangé (After having eaten)</p>
                <p>Après être parti (After having left)</p>
            `,
            examples: [
                'En mangeant (While eating)',
                'Avant de partir (Before leaving)',
                'Après avoir mangé (After having eaten)',
                'Sans dire un mot (Without saying a word)',
                'En travaillant dur (By working hard)'
            ],
            exerciseIds: ['g-121', 'g-122', 'g-123', 'g-124', 'g-125']
        },
        {
            id: 'topic-15',
            title: 'Relative Clauses',
            description: 'Using qui, que, où, dont to connect ideas',
            cefrLevel: 'B2',
            category: 'relative',
            theory: `
                <h3>Relative Pronouns</h3>

                <h4>QUI (who, which, that - subject)</h4>
                <p>Replaces the subject of the relative clause.</p>
                <p>L'homme <strong>qui</strong> parle (The man who speaks)</p>

                <h4>QUE (whom, which, that - object)</h4>
                <p>Replaces the direct object of the relative clause.</p>
                <p>Le livre <strong>que</strong> je lis (The book that I read)</p>
                <p>Note: que becomes qu' before a vowel</p>

                <h4>OÙ (where, when)</h4>
                <p>Replaces a place or time.</p>
                <p>La ville <strong>où</strong> j'habite (The city where I live)</p>
                <p>Le jour <strong>où</strong> je suis né (The day when I was born)</p>

                <h4>DONT (whose, of which, about which)</h4>
                <p>Replaces de + noun.</p>
                <p>L'ami <strong>dont</strong> je t'ai parlé (The friend I told you about)</p>
                <p>Le livre <strong>dont</strong> j'ai besoin (The book I need - avoir besoin de)</p>

                <h4>CE QUI / CE QUE (what)</h4>
                <ul>
                    <li><strong>Ce qui</strong> - what (subject): Ce qui m'intéresse (What interests me)</li>
                    <li><strong>Ce que</strong> - what (object): Ce que je veux (What I want)</li>
                </ul>
            `,
            examples: [
                'L\'homme qui parle (The man who speaks)',
                'Le livre que je lis (The book that I read)',
                'La ville où j\'habite (The city where I live)',
                'L\'ami dont la voiture (The friend whose car)',
                'Ce qui m\'intéresse (What interests me)'
            ],
            exerciseIds: ['g-126', 'g-127', 'g-128', 'g-129', 'g-130']
        },
        {
            id: 'topic-16',
            title: 'Indirect Speech',
            description: 'Reported speech and sequence of tenses',
            cefrLevel: 'B2',
            category: 'indirect_speech',
            theory: `
                <h3>Discours Indirect (Indirect Speech)</h3>

                <h4>Tense Changes:</h4>
                <p>When reporting speech in the past, tenses shift:</p>

                <table border="1" cellpadding="5">
                    <tr><th>Direct Speech</th><th>Indirect Speech</th></tr>
                    <tr><td>Present</td><td>→ Imparfait</td></tr>
                    <tr><td>Passé Composé</td><td>→ Plus-que-parfait</td></tr>
                    <tr><td>Future</td><td>→ Conditional</td></tr>
                    <tr><td>Imperative</td><td>→ de + infinitive</td></tr>
                </table>

                <h4>Examples:</h4>
                <ul>
                    <li>Direct: "Je suis fatigué" → Indirect: Il a dit qu'il <strong>était</strong> fatigué</li>
                    <li>Direct: "J'ai fini" → Indirect: Il a dit qu'il <strong>avait fini</strong></li>
                    <li>Direct: "Je viendrai" → Indirect: Il a dit qu'il <strong>viendrait</strong></li>
                </ul>

                <h4>Time expressions change:</h4>
                <ul>
                    <li>aujourd'hui → ce jour-là</li>
                    <li>demain → le lendemain</li>
                    <li>hier → la veille</li>
                    <li>maintenant → à ce moment-là</li>
                </ul>

                <h4>Verbs for reporting:</h4>
                <ul>
                    <li><strong>dire que</strong> (to say that)</li>
                    <li><strong>demander si</strong> (to ask if)</li>
                    <li><strong>demander + question word</strong> (to ask + what/where/etc.)</li>
                    <li><strong>répondre que</strong> (to answer that)</li>
                </ul>
            `,
            examples: [
                'Il a dit qu\'il était fatigué (He said he was tired)',
                'Elle m\'a demandé si je viendrais (She asked me if I would come)',
                'Je lui ai dit que j\'avais fini (I told him I had finished)',
                'Il a dit qu\'il partait le lendemain (He said he was leaving tomorrow)',
                'Elle m\'a demandé où j\'habitais (She asked me where I lived)'
            ],
            exerciseIds: ['g-131', 'g-132', 'g-133', 'g-134', 'g-135']
        }
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
        ...(FRENCH_CONTENT.level3?.vocabulary || []),
        ...(FRENCH_CONTENT.level4?.vocabulary || []),
        ...(FRENCH_CONTENT.level5?.vocabulary || []),
        ...(FRENCH_CONTENT.level6?.vocabulary || []),
        ...FRENCH_CONTENT.phrases,
        ...FRENCH_CONTENT.grammar,
        ...FRENCH_CONTENT.conjugation,
        ...(FRENCH_CONTENT.reading || []),
        ...(FRENCH_CONTENT.dialogues || []),
        ...(FRENCH_CONTENT.writing || [])
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
                ...(FRENCH_CONTENT.level3?.vocabulary || []),
                ...(FRENCH_CONTENT.level4?.vocabulary || []),
                ...(FRENCH_CONTENT.level5?.vocabulary || []),
                ...(FRENCH_CONTENT.level6?.vocabulary || []),
                ...FRENCH_CONTENT.phrases
            ];
        case 'grammar':
            return FRENCH_CONTENT.grammar;
        case 'conjugation':
            return FRENCH_CONTENT.conjugation;
        case 'conjugation-table':
            return FRENCH_CONTENT.conjugationTables || [];
        case 'reading':
            return FRENCH_CONTENT.reading || [];
        case 'dialogue':
            return FRENCH_CONTENT.dialogues || [];
        case 'writing':
            return FRENCH_CONTENT.writing || [];
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

/**
 * Get items by CEFR level
 */
function getItemsByCefrLevel(cefrLevel) {
    const allItems = getAllContent();
    return allItems.filter(item => item.cefrLevel === cefrLevel);
}

/**
 * Get items up to and including a CEFR level
 */
function getItemsUpToCefrLevel(cefrLevel) {
    const levels = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
    const targetIndex = levels.indexOf(cefrLevel);
    if (targetIndex === -1) return [];

    const allItems = getAllContent();
    return allItems.filter(item => {
        const itemIndex = levels.indexOf(item.cefrLevel);
        return itemIndex !== -1 && itemIndex <= targetIndex;
    });
}

/**
 * Get statistics for CEFR levels
 */
function getCefrLevelStats() {
    const allItems = getAllContent();
    const stats = {
        A1: 0, A2: 0, B1: 0, B2: 0, C1: 0, C2: 0
    };

    allItems.forEach(item => {
        if (item.cefrLevel && stats.hasOwnProperty(item.cefrLevel)) {
            stats[item.cefrLevel]++;
        }
    });

    return stats;
}

/**
 * Get random question filtered by CEFR level
 */
function getRandomQuestionByLevel(exerciseType = 'all', cefrLevel = null, maxLevel = null) {
    let items = getContentByType(exerciseType);

    if (cefrLevel) {
        items = items.filter(item => item.cefrLevel === cefrLevel);
    } else if (maxLevel) {
        items = getItemsUpToCefrLevel(maxLevel).filter(item => {
            if (exerciseType === 'all') return true;
            if (exerciseType === 'vocabulary') {
                return item.id.startsWith('v-') || item.id.startsWith('p-');
            }
            if (exerciseType === 'grammar') {
                return item.id.startsWith('g-');
            }
            if (exerciseType === 'conjugation') {
                return item.id.startsWith('c-');
            }
            return false;
        });
    }

    if (items.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
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
        getItemsByDifficulty,
        getItemsByCefrLevel,
        getItemsUpToCefrLevel,
        getCefrLevelStats,
        getRandomQuestionByLevel
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
        getItemsByDifficulty,
        getItemsByCefrLevel,
        getItemsUpToCefrLevel,
        getCefrLevelStats,
        getRandomQuestionByLevel
    };
}
