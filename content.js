/**
 * FRENCH PRACTICE APP - CONTENT DATABASE
 * Vocabulary and phrases for practice exercises
 */

const FRENCH_CONTENT = {
    // Level 1: Basic Vocabulary
    level1: {
        vocabulary: [
            // Greetings
            { id: 'v-1', english: 'hello', french: 'bonjour', category: 'greetings', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-2', english: 'goodbye', french: 'au revoir', category: 'greetings', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-3', english: 'thank you', french: 'merci', category: 'greetings', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-4', english: 'please', french: 's\'il vous plaît', category: 'greetings', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-5', english: 'excuse me', french: 'excusez-moi', category: 'greetings', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-6', english: 'yes', french: 'oui', category: 'greetings', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-7', english: 'no', french: 'non', category: 'greetings', difficulty: 1, cefrLevel: 'A1' },

            // Common Nouns
            { id: 'v-8', english: 'water', french: 'eau', category: 'food', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-9', english: 'bread', french: 'pain', category: 'food', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-10', english: 'wine', french: 'vin', category: 'food', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-11', english: 'coffee', french: 'café', category: 'food', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-12', english: 'tea', french: 'thé', category: 'food', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-13', english: 'milk', french: 'lait', category: 'food', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-14', english: 'cheese', french: 'fromage', category: 'food', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-15', english: 'meat', french: 'viande', category: 'food', difficulty: 1, cefrLevel: 'A1' },

            // Family
            { id: 'v-16', english: 'mother', french: 'mère', category: 'family', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-17', english: 'father', french: 'père', category: 'family', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-18', english: 'sister', french: 'sœur', category: 'family', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-19', english: 'brother', french: 'frère', category: 'family', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-20', english: 'child', french: 'enfant', category: 'family', difficulty: 1, cefrLevel: 'A1' },

            // Numbers
            { id: 'v-21', english: 'one', french: 'un', category: 'numbers', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-22', english: 'two', french: 'deux', category: 'numbers', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-23', english: 'three', french: 'trois', category: 'numbers', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-24', english: 'four', french: 'quatre', category: 'numbers', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-25', english: 'five', french: 'cinq', category: 'numbers', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-26', english: 'six', french: 'six', category: 'numbers', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-27', english: 'seven', french: 'sept', category: 'numbers', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-28', english: 'eight', french: 'huit', category: 'numbers', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-29', english: 'nine', french: 'neuf', category: 'numbers', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-30', english: 'ten', french: 'dix', category: 'numbers', difficulty: 1, cefrLevel: 'A1' },

            // Colors
            { id: 'v-31', english: 'red', french: 'rouge', category: 'colors', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-32', english: 'blue', french: 'bleu', category: 'colors', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-33', english: 'green', french: 'vert', category: 'colors', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-34', english: 'yellow', french: 'jaune', category: 'colors', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-35', english: 'black', french: 'noir', category: 'colors', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-36', english: 'white', french: 'blanc', category: 'colors', difficulty: 1, cefrLevel: 'A1' },

            // Common Verbs
            { id: 'v-37', english: 'to be', french: 'être', category: 'verbs', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-38', english: 'to have', french: 'avoir', category: 'verbs', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-39', english: 'to do', french: 'faire', category: 'verbs', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-40', english: 'to go', french: 'aller', category: 'verbs', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-41', english: 'to eat', french: 'manger', category: 'verbs', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-42', english: 'to drink', french: 'boire', category: 'verbs', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-43', english: 'to sleep', french: 'dormir', category: 'verbs', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-44', english: 'to speak', french: 'parler', category: 'verbs', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-45', english: 'to listen', french: 'écouter', category: 'verbs', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-46', english: 'to read', french: 'lire', category: 'verbs', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-47', english: 'to write', french: 'écrire', category: 'verbs', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-48', english: 'to see', french: 'voir', category: 'verbs', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-49', english: 'to understand', french: 'comprendre', category: 'verbs', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-50', english: 'to know', french: 'savoir', category: 'verbs', difficulty: 1, cefrLevel: 'A1' },

            // Extended Numbers (11-100)
            { id: 'v-71', english: 'eleven', french: 'onze', category: 'numbers', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-72', english: 'twelve', french: 'douze', category: 'numbers', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-73', english: 'thirteen', french: 'treize', category: 'numbers', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-74', english: 'fourteen', french: 'quatorze', category: 'numbers', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-75', english: 'fifteen', french: 'quinze', category: 'numbers', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-76', english: 'sixteen', french: 'seize', category: 'numbers', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-77', english: 'seventeen', french: 'dix-sept', category: 'numbers', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-78', english: 'eighteen', french: 'dix-huit', category: 'numbers', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-79', english: 'nineteen', french: 'dix-neuf', category: 'numbers', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-80', english: 'twenty', french: 'vingt', category: 'numbers', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-81', english: 'thirty', french: 'trente', category: 'numbers', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-82', english: 'forty', french: 'quarante', category: 'numbers', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-83', english: 'fifty', french: 'cinquante', category: 'numbers', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-84', english: 'sixty', french: 'soixante', category: 'numbers', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-85', english: 'seventy', french: 'soixante-dix', category: 'numbers', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-86', english: 'eighty', french: 'quatre-vingts', category: 'numbers', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-87', english: 'ninety', french: 'quatre-vingt-dix', category: 'numbers', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-88', english: 'one hundred', french: 'cent', category: 'numbers', difficulty: 1, cefrLevel: 'A1' },

            // Days of the Week
            { id: 'v-89', english: 'Monday', french: 'lundi', category: 'time', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-90', english: 'Tuesday', french: 'mardi', category: 'time', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-91', english: 'Wednesday', french: 'mercredi', category: 'time', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-92', english: 'Thursday', french: 'jeudi', category: 'time', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-93', english: 'Friday', french: 'vendredi', category: 'time', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-94', english: 'Saturday', french: 'samedi', category: 'time', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-95', english: 'Sunday', french: 'dimanche', category: 'time', difficulty: 1, cefrLevel: 'A1' },

            // Months
            { id: 'v-96', english: 'January', french: 'janvier', category: 'time', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-97', english: 'February', french: 'février', category: 'time', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-98', english: 'March', french: 'mars', category: 'time', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-99', english: 'April', french: 'avril', category: 'time', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-100', english: 'May', french: 'mai', category: 'time', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-101', english: 'June', french: 'juin', category: 'time', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-102', english: 'July', french: 'juillet', category: 'time', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-103', english: 'August', french: 'août', category: 'time', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-104', english: 'September', french: 'septembre', category: 'time', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-105', english: 'October', french: 'octobre', category: 'time', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-106', english: 'November', french: 'novembre', category: 'time', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-107', english: 'December', french: 'décembre', category: 'time', difficulty: 1, cefrLevel: 'A1' },

            // Seasons
            { id: 'v-108', english: 'spring', french: 'printemps', category: 'time', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-109', english: 'summer', french: 'été', category: 'time', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-110', english: 'autumn/fall', french: 'automne', category: 'time', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-111', english: 'winter', french: 'hiver', category: 'time', difficulty: 1, cefrLevel: 'A1' },

            // Time Expressions
            { id: 'v-112', english: 'hour', french: 'heure', category: 'time', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-113', english: 'minute', french: 'minute', category: 'time', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-114', english: 'second', french: 'seconde', category: 'time', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-115', english: 'day', french: 'jour', category: 'time', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-116', english: 'week', french: 'semaine', category: 'time', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-117', english: 'month', french: 'mois', category: 'time', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-118', english: 'year', french: 'année', category: 'time', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-119', english: 'noon', french: 'midi', category: 'time', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-120', english: 'midnight', french: 'minuit', category: 'time', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-121', english: 'afternoon', french: 'après-midi', category: 'time', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-122', english: 'now', french: 'maintenant', category: 'time', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-123', english: 'always', french: 'toujours', category: 'time', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-124', english: 'never', french: 'jamais', category: 'time', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-125', english: 'often', french: 'souvent', category: 'time', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-126', english: 'sometimes', french: 'quelquefois', category: 'time', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-127', english: 'early', french: 'tôt', category: 'time', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-128', english: 'late', french: 'tard', category: 'time', difficulty: 1, cefrLevel: 'A1' },

            // Extended Food Vocabulary
            { id: 'v-129', english: 'apple', french: 'pomme', category: 'food', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-130', english: 'orange', french: 'orange', category: 'food', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-131', english: 'banana', french: 'banane', category: 'food', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-132', english: 'strawberry', french: 'fraise', category: 'food', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-133', english: 'grape', french: 'raisin', category: 'food', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-134', english: 'pear', french: 'poire', category: 'food', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-135', english: 'tomato', french: 'tomate', category: 'food', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-136', english: 'potato', french: 'pomme de terre', category: 'food', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-137', english: 'carrot', french: 'carotte', category: 'food', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-138', english: 'lettuce', french: 'laitue', category: 'food', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-139', english: 'onion', french: 'oignon', category: 'food', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-140', english: 'chicken', french: 'poulet', category: 'food', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-141', english: 'fish', french: 'poisson', category: 'food', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-142', english: 'egg', french: 'œuf', category: 'food', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-143', english: 'rice', french: 'riz', category: 'food', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-144', english: 'pasta', french: 'pâtes', category: 'food', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-145', english: 'soup', french: 'soupe', category: 'food', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-146', english: 'salad', french: 'salade', category: 'food', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-147', english: 'butter', french: 'beurre', category: 'food', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-148', english: 'sugar', french: 'sucre', category: 'food', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-149', english: 'salt', french: 'sel', category: 'food', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-150', english: 'pepper', french: 'poivre', category: 'food', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-151', english: 'juice', french: 'jus', category: 'food', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-152', english: 'beer', french: 'bière', category: 'food', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-153', english: 'breakfast', french: 'petit-déjeuner', category: 'food', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-154', english: 'lunch', french: 'déjeuner', category: 'food', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-155', english: 'dinner', french: 'dîner', category: 'food', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-156', english: 'snack', french: 'goûter', category: 'food', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-157', english: 'chocolate', french: 'chocolat', category: 'food', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-158', english: 'cake', french: 'gâteau', category: 'food', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-159', english: 'cookie', french: 'biscuit', category: 'food', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-160', english: 'ice cream', french: 'glace', category: 'food', difficulty: 1, cefrLevel: 'A1' },

            // House & Rooms
            { id: 'v-161', english: 'room', french: 'pièce', category: 'house', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-162', english: 'kitchen', french: 'cuisine', category: 'house', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-163', english: 'bedroom', french: 'chambre', category: 'house', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-164', english: 'bathroom', french: 'salle de bain', category: 'house', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-165', english: 'living room', french: 'salon', category: 'house', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-166', english: 'dining room', french: 'salle à manger', category: 'house', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-167', english: 'garden', french: 'jardin', category: 'house', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-168', english: 'door', french: 'porte', category: 'house', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-169', english: 'window', french: 'fenêtre', category: 'house', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-170', english: 'table', french: 'table', category: 'house', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-171', english: 'chair', french: 'chaise', category: 'house', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-172', english: 'bed', french: 'lit', category: 'house', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-173', english: 'sofa', french: 'canapé', category: 'house', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-174', english: 'lamp', french: 'lampe', category: 'house', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-175', english: 'television', french: 'télévision', category: 'house', difficulty: 1, cefrLevel: 'A1' },

            // Clothing
            { id: 'v-176', english: 'shirt', french: 'chemise', category: 'clothing', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-177', english: 'pants', french: 'pantalon', category: 'clothing', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-178', english: 'dress', french: 'robe', category: 'clothing', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-179', english: 'skirt', french: 'jupe', category: 'clothing', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-180', english: 'jacket', french: 'veste', category: 'clothing', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-181', english: 'coat', french: 'manteau', category: 'clothing', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-182', english: 'shoes', french: 'chaussures', category: 'clothing', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-183', english: 'socks', french: 'chaussettes', category: 'clothing', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-184', english: 'hat', french: 'chapeau', category: 'clothing', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-185', english: 'scarf', french: 'écharpe', category: 'clothing', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-186', english: 'gloves', french: 'gants', category: 'clothing', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-187', english: 'sweater', french: 'pull', category: 'clothing', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-188', english: 't-shirt', french: 'tee-shirt', category: 'clothing', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-189', english: 'jeans', french: 'jean', category: 'clothing', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-190', english: 'shorts', french: 'short', category: 'clothing', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-191', english: 'tie', french: 'cravate', category: 'clothing', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-192', english: 'belt', french: 'ceinture', category: 'clothing', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-193', english: 'boots', french: 'bottes', category: 'clothing', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-194', english: 'sandals', french: 'sandales', category: 'clothing', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-195', english: 'glasses', french: 'lunettes', category: 'clothing', difficulty: 1, cefrLevel: 'A1' },

            // Body Parts
            { id: 'v-196', english: 'head', french: 'tête', category: 'body', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-197', english: 'face', french: 'visage', category: 'body', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-198', english: 'eye', french: 'œil', category: 'body', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-199', english: 'nose', french: 'nez', category: 'body', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-200', english: 'mouth', french: 'bouche', category: 'body', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-201', english: 'ear', french: 'oreille', category: 'body', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-202', english: 'hair', french: 'cheveux', category: 'body', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-203', english: 'hand', french: 'main', category: 'body', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-204', english: 'finger', french: 'doigt', category: 'body', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-205', english: 'arm', french: 'bras', category: 'body', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-206', english: 'leg', french: 'jambe', category: 'body', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-207', english: 'foot', french: 'pied', category: 'body', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-208', english: 'back', french: 'dos', category: 'body', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-209', english: 'stomach', french: 'ventre', category: 'body', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-210', english: 'heart', french: 'cœur', category: 'body', difficulty: 1, cefrLevel: 'A1' },

            // Common Adjectives
            { id: 'v-211', english: 'happy', french: 'heureux', category: 'adjectives', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-212', english: 'sad', french: 'triste', category: 'adjectives', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-213', english: 'tired', french: 'fatigué', category: 'adjectives', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-214', english: 'hungry', french: 'faim', category: 'adjectives', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-215', english: 'thirsty', french: 'soif', category: 'adjectives', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-216', english: 'hot', french: 'chaud', category: 'adjectives', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-217', english: 'cold', french: 'froid', category: 'adjectives', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-218', english: 'old', french: 'vieux', category: 'adjectives', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-219', english: 'young', french: 'jeune', category: 'adjectives', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-220', english: 'new', french: 'nouveau', category: 'adjectives', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-221', english: 'old (things)', french: 'ancien', category: 'adjectives', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-222', english: 'fast', french: 'rapide', category: 'adjectives', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-223', english: 'slow', french: 'lent', category: 'adjectives', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-224', english: 'long', french: 'long', category: 'adjectives', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-225', english: 'short', french: 'court', category: 'adjectives', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-226', english: 'tall', french: 'grand', category: 'adjectives', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-227', english: 'short (height)', french: 'petit', category: 'adjectives', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-228', english: 'strong', french: 'fort', category: 'adjectives', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-229', english: 'weak', french: 'faible', category: 'adjectives', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-230', english: 'easy', french: 'facile', category: 'adjectives', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-231', english: 'difficult', french: 'difficile', category: 'adjectives', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-232', english: 'clean', french: 'propre', category: 'adjectives', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-233', english: 'dirty', french: 'sale', category: 'adjectives', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-234', english: 'expensive', french: 'cher', category: 'adjectives', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-235', english: 'cheap', french: 'bon marché', category: 'adjectives', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-236', english: 'full', french: 'plein', category: 'adjectives', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-237', english: 'empty', french: 'vide', category: 'adjectives', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-238', english: 'open', french: 'ouvert', category: 'adjectives', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-239', english: 'closed', french: 'fermé', category: 'adjectives', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-240', english: 'right (correct)', french: 'correct', category: 'adjectives', difficulty: 1, cefrLevel: 'A1' },

            // School & Education
            { id: 'v-241', english: 'student', french: 'étudiant', category: 'school', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-242', english: 'teacher', french: 'professeur', category: 'school', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-243', english: 'book', french: 'livre', category: 'school', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-244', english: 'notebook', french: 'cahier', category: 'school', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-245', english: 'pen', french: 'stylo', category: 'school', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-246', english: 'pencil', french: 'crayon', category: 'school', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-247', english: 'paper', french: 'papier', category: 'school', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-248', english: 'desk', french: 'bureau', category: 'school', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-249', english: 'class', french: 'classe', category: 'school', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-250', english: 'lesson', french: 'leçon', category: 'school', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-251', english: 'homework', french: 'devoirs', category: 'school', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-252', english: 'exam', french: 'examen', category: 'school', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-253', english: 'question', french: 'question', category: 'school', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-254', english: 'answer', french: 'réponse', category: 'school', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-255', english: 'word', french: 'mot', category: 'school', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-256', english: 'language', french: 'langue', category: 'school', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-257', english: 'number', french: 'nombre', category: 'school', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-258', english: 'letter', french: 'lettre', category: 'school', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-259', english: 'dictionary', french: 'dictionnaire', category: 'school', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-260', english: 'computer', french: 'ordinateur', category: 'school', difficulty: 1, cefrLevel: 'A1' },

            // Weather
            { id: 'v-261', english: 'weather', french: 'temps', category: 'weather', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-262', english: 'sun', french: 'soleil', category: 'weather', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-263', english: 'rain', french: 'pluie', category: 'weather', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-264', english: 'snow', french: 'neige', category: 'weather', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-265', english: 'wind', french: 'vent', category: 'weather', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-266', english: 'cloud', french: 'nuage', category: 'weather', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-267', english: 'storm', french: 'orage', category: 'weather', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-268', english: 'temperature', french: 'température', category: 'weather', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-269', english: 'it\'s hot', french: 'il fait chaud', category: 'weather', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-270', english: 'it\'s cold', french: 'il fait froid', category: 'weather', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-271', english: 'it\'s raining', french: 'il pleut', category: 'weather', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-272', english: 'it\'s snowing', french: 'il neige', category: 'weather', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-273', english: 'it\'s sunny', french: 'il fait beau', category: 'weather', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-274', english: 'it\'s windy', french: 'il y a du vent', category: 'weather', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-275', english: 'it\'s cloudy', french: 'il y a des nuages', category: 'weather', difficulty: 1, cefrLevel: 'A1' },

            // Occupations
            { id: 'v-276', english: 'doctor', french: 'médecin', category: 'occupations', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-277', english: 'nurse', french: 'infirmier', category: 'occupations', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-278', english: 'police officer', french: 'policier', category: 'occupations', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-279', english: 'firefighter', french: 'pompier', category: 'occupations', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-280', english: 'lawyer', french: 'avocat', category: 'occupations', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-281', english: 'engineer', french: 'ingénieur', category: 'occupations', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-282', english: 'waiter', french: 'serveur', category: 'occupations', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-283', english: 'cook/chef', french: 'cuisinier', category: 'occupations', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-284', english: 'driver', french: 'chauffeur', category: 'occupations', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-285', english: 'farmer', french: 'fermier', category: 'occupations', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-286', english: 'artist', french: 'artiste', category: 'occupations', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-287', english: 'musician', french: 'musicien', category: 'occupations', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-288', english: 'actor', french: 'acteur', category: 'occupations', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-289', english: 'dentist', french: 'dentiste', category: 'occupations', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-290', english: 'pharmacist', french: 'pharmacien', category: 'occupations', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-291', english: 'banker', french: 'banquier', category: 'occupations', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-292', english: 'salesperson', french: 'vendeur', category: 'occupations', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-293', english: 'secretary', french: 'secrétaire', category: 'occupations', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-294', english: 'journalist', french: 'journaliste', category: 'occupations', difficulty: 1, cefrLevel: 'A1' },
            { id: 'v-295', english: 'photographer', french: 'photographe', category: 'occupations', difficulty: 1, cefrLevel: 'A1' },
        ]
    },

    // Level 2: Intermediate Vocabulary
    level2: {
        vocabulary: [
            // Places
            { id: 'v-51', english: 'house', french: 'maison', category: 'places', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-52', english: 'school', french: 'école', category: 'places', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-53', english: 'restaurant', french: 'restaurant', category: 'places', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-54', english: 'hotel', french: 'hôtel', category: 'places', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-55', english: 'hospital', french: 'hôpital', category: 'places', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-56', english: 'airport', french: 'aéroport', category: 'places', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-57', english: 'train station', french: 'gare', category: 'places', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-58', english: 'market', french: 'marché', category: 'places', difficulty: 2, cefrLevel: 'A2' },

            // Time & Days
            { id: 'v-59', english: 'today', french: 'aujourd\'hui', category: 'time', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-60', english: 'tomorrow', french: 'demain', category: 'time', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-61', english: 'yesterday', french: 'hier', category: 'time', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-62', english: 'morning', french: 'matin', category: 'time', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-63', english: 'evening', french: 'soir', category: 'time', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-64', english: 'night', french: 'nuit', category: 'time', difficulty: 2, cefrLevel: 'A2' },

            // Common Adjectives
            { id: 'v-65', english: 'big', french: 'grand', category: 'adjectives', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-66', english: 'small', french: 'petit', category: 'adjectives', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-67', english: 'good', french: 'bon', category: 'adjectives', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-68', english: 'bad', french: 'mauvais', category: 'adjectives', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-69', english: 'beautiful', french: 'beau', category: 'adjectives', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-70', english: 'ugly', french: 'laid', category: 'adjectives', difficulty: 2, cefrLevel: 'A2' },

            // Transportation
            { id: 'v-296', english: 'car', french: 'voiture', category: 'transportation', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-297', english: 'bus', french: 'bus', category: 'transportation', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-298', english: 'train', french: 'train', category: 'transportation', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-299', english: 'plane', french: 'avion', category: 'transportation', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-300', english: 'bicycle', french: 'vélo', category: 'transportation', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-301', english: 'motorcycle', french: 'moto', category: 'transportation', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-302', english: 'boat', french: 'bateau', category: 'transportation', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-303', english: 'taxi', french: 'taxi', category: 'transportation', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-304', english: 'metro/subway', french: 'métro', category: 'transportation', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-305', english: 'ticket', french: 'billet', category: 'transportation', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-306', english: 'station', french: 'station', category: 'transportation', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-307', english: 'stop', french: 'arrêt', category: 'transportation', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-308', english: 'driver', french: 'conducteur', category: 'transportation', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-309', english: 'passenger', french: 'passager', category: 'transportation', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-310', english: 'departure', french: 'départ', category: 'transportation', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-311', english: 'arrival', french: 'arrivée', category: 'transportation', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-312', english: 'delay', french: 'retard', category: 'transportation', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-313', english: 'traffic', french: 'circulation', category: 'transportation', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-314', english: 'parking', french: 'parking', category: 'transportation', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-315', english: 'road', french: 'route', category: 'transportation', difficulty: 2, cefrLevel: 'A2' },

            // Travel & Vacation
            { id: 'v-316', english: 'vacation', french: 'vacances', category: 'travel', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-317', english: 'trip', french: 'voyage', category: 'travel', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-318', english: 'tourist', french: 'touriste', category: 'travel', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-319', english: 'passport', french: 'passeport', category: 'travel', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-320', english: 'luggage', french: 'bagages', category: 'travel', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-321', english: 'suitcase', french: 'valise', category: 'travel', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-322', english: 'map', french: 'carte', category: 'travel', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-323', english: 'guide', french: 'guide', category: 'travel', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-324', english: 'museum', french: 'musée', category: 'travel', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-325', english: 'monument', french: 'monument', category: 'travel', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-326', english: 'beach', french: 'plage', category: 'travel', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-327', english: 'mountain', french: 'montagne', category: 'travel', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-328', english: 'lake', french: 'lac', category: 'travel', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-329', english: 'river', french: 'rivière', category: 'travel', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-330', english: 'sea', french: 'mer', category: 'travel', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-331', english: 'country', french: 'pays', category: 'travel', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-332', english: 'city', french: 'ville', category: 'travel', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-333', english: 'village', french: 'village', category: 'travel', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-334', english: 'reservation', french: 'réservation', category: 'travel', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-335', english: 'camping', french: 'camping', category: 'travel', difficulty: 2, cefrLevel: 'A2' },

            // Shopping & Money
            { id: 'v-336', english: 'shop/store', french: 'magasin', category: 'shopping', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-337', english: 'price', french: 'prix', category: 'shopping', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-338', english: 'money', french: 'argent', category: 'shopping', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-339', english: 'euro', french: 'euro', category: 'shopping', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-340', english: 'cent', french: 'centime', category: 'shopping', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-341', english: 'cash', french: 'espèces', category: 'shopping', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-342', english: 'credit card', french: 'carte de crédit', category: 'shopping', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-343', english: 'receipt', french: 'reçu', category: 'shopping', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-344', english: 'discount', french: 'réduction', category: 'shopping', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-345', english: 'sale', french: 'soldes', category: 'shopping', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-346', english: 'customer', french: 'client', category: 'shopping', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-347', english: 'cashier', french: 'caissier', category: 'shopping', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-348', english: 'bag', french: 'sac', category: 'shopping', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-349', english: 'size', french: 'taille', category: 'shopping', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-350', english: 'color', french: 'couleur', category: 'shopping', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-351', english: 'quality', french: 'qualité', category: 'shopping', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-352', english: 'to buy', french: 'acheter', category: 'shopping', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-353', english: 'to sell', french: 'vendre', category: 'shopping', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-354', english: 'to cost', french: 'coûter', category: 'shopping', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-355', english: 'to pay', french: 'payer', category: 'shopping', difficulty: 2, cefrLevel: 'A2' },

            // Hobbies & Sports
            { id: 'v-356', english: 'hobby', french: 'passe-temps', category: 'hobbies', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-357', english: 'sport', french: 'sport', category: 'hobbies', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-358', english: 'football/soccer', french: 'football', category: 'hobbies', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-359', english: 'basketball', french: 'basket-ball', category: 'hobbies', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-360', english: 'tennis', french: 'tennis', category: 'hobbies', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-361', english: 'swimming', french: 'natation', category: 'hobbies', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-362', english: 'running', french: 'course', category: 'hobbies', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-363', english: 'cycling', french: 'cyclisme', category: 'hobbies', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-364', english: 'skiing', french: 'ski', category: 'hobbies', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-365', english: 'dancing', french: 'danse', category: 'hobbies', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-366', english: 'music', french: 'musique', category: 'hobbies', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-367', english: 'guitar', french: 'guitare', category: 'hobbies', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-368', english: 'piano', french: 'piano', category: 'hobbies', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-369', english: 'painting', french: 'peinture', category: 'hobbies', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-370', english: 'drawing', french: 'dessin', category: 'hobbies', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-371', english: 'photography', french: 'photographie', category: 'hobbies', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-372', english: 'reading', french: 'lecture', category: 'hobbies', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-373', english: 'writing', french: 'écriture', category: 'hobbies', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-374', english: 'cooking', french: 'cuisine', category: 'hobbies', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-375', english: 'gardening', french: 'jardinage', category: 'hobbies', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-376', english: 'game', french: 'jeu', category: 'hobbies', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-377', english: 'team', french: 'équipe', category: 'hobbies', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-378', english: 'player', french: 'joueur', category: 'hobbies', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-379', english: 'match', french: 'match', category: 'hobbies', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-380', english: 'ball', french: 'ballon', category: 'hobbies', difficulty: 2, cefrLevel: 'A2' },

            // Technology
            { id: 'v-381', english: 'phone', french: 'téléphone', category: 'technology', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-382', english: 'mobile phone', french: 'portable', category: 'technology', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-383', english: 'internet', french: 'internet', category: 'technology', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-384', english: 'email', french: 'courriel', category: 'technology', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-385', english: 'website', french: 'site web', category: 'technology', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-386', english: 'message', french: 'message', category: 'technology', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-387', english: 'photo', french: 'photo', category: 'technology', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-388', english: 'video', french: 'vidéo', category: 'technology', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-389', english: 'screen', french: 'écran', category: 'technology', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-390', english: 'keyboard', french: 'clavier', category: 'technology', difficulty: 2, cefrLevel: 'A2' },
            { id: 'v-391', english: 'mouse', french: 'souris', category: 'technology', difficulty: 2, cefrLevel: 'A2' },
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
            { id: 'v-425', english: 'mouse', french: 'souris', category: 'animals', difficulty: 2, cefrLevel: 'A2' },
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
            { id: 'v-501', english: 'idea', french: 'idée', category: 'abstract', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-502', english: 'opinion', french: 'opinion', category: 'abstract', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-503', english: 'theory', french: 'théorie', category: 'abstract', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-504', english: 'concept', french: 'concept', category: 'abstract', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-505', english: 'reality', french: 'réalité', category: 'abstract', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-506', english: 'truth', french: 'vérité', category: 'abstract', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-507', english: 'freedom', french: 'liberté', category: 'abstract', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-508', english: 'justice', french: 'justice', category: 'abstract', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-509', english: 'equality', french: 'égalité', category: 'abstract', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-510', english: 'democracy', french: 'démocratie', category: 'abstract', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-511', english: 'responsibility', french: 'responsabilité', category: 'abstract', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-512', english: 'experience', french: 'expérience', category: 'abstract', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-513', english: 'knowledge', french: 'connaissance', category: 'abstract', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-514', english: 'wisdom', french: 'sagesse', category: 'abstract', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-515', english: 'imagination', french: 'imagination', category: 'abstract', difficulty: 3, cefrLevel: 'B1' },

            // Business & Work
            { id: 'v-516', english: 'company', french: 'entreprise', category: 'business', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-517', english: 'employee', french: 'employé', category: 'business', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-518', english: 'employer', french: 'employeur', category: 'business', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-519', english: 'manager', french: 'directeur', category: 'business', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-520', english: 'boss', french: 'patron', category: 'business', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-521', english: 'colleague', french: 'collègue', category: 'business', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-522', english: 'meeting', french: 'réunion', category: 'business', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-523', english: 'project', french: 'projet', category: 'business', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-524', english: 'deadline', french: 'date limite', category: 'business', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-525', english: 'contract', french: 'contrat', category: 'business', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-526', english: 'salary', french: 'salaire', category: 'business', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-527', english: 'budget', french: 'budget', category: 'business', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-528', english: 'profit', french: 'bénéfice', category: 'business', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-529', english: 'loss', french: 'perte', category: 'business', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-530', english: 'market', french: 'marché', category: 'business', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-531', english: 'competition', french: 'concurrence', category: 'business', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-532', english: 'strategy', french: 'stratégie', category: 'business', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-533', english: 'goal', french: 'objectif', category: 'business', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-534', english: 'achievement', french: 'réalisation', category: 'business', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-535', english: 'challenge', french: 'défi', category: 'business', difficulty: 3, cefrLevel: 'B1' },

            // Politics & Society
            { id: 'v-536', english: 'government', french: 'gouvernement', category: 'politics', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-537', english: 'president', french: 'président', category: 'politics', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-538', english: 'minister', french: 'ministre', category: 'politics', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-539', english: 'citizen', french: 'citoyen', category: 'politics', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-540', english: 'vote', french: 'vote', category: 'politics', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-541', english: 'election', french: 'élection', category: 'politics', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-542', english: 'law', french: 'loi', category: 'politics', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-543', english: 'parliament', french: 'parlement', category: 'politics', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-544', english: 'party (political)', french: 'parti', category: 'politics', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-545', english: 'policy', french: 'politique', category: 'politics', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-546', english: 'society', french: 'société', category: 'politics', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-547', english: 'community', french: 'communauté', category: 'politics', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-548', english: 'public', french: 'public', category: 'politics', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-549', english: 'private', french: 'privé', category: 'politics', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-550', english: 'rights', french: 'droits', category: 'politics', difficulty: 3, cefrLevel: 'B1' },

            // Environment
            { id: 'v-551', english: 'environment', french: 'environnement', category: 'environment', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-552', english: 'nature', french: 'nature', category: 'environment', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-553', english: 'climate', french: 'climat', category: 'environment', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-554', english: 'pollution', french: 'pollution', category: 'environment', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-555', english: 'recycling', french: 'recyclage', category: 'environment', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-556', english: 'waste', french: 'déchets', category: 'environment', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-557', english: 'energy', french: 'énergie', category: 'environment', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-558', english: 'renewable', french: 'renouvelable', category: 'environment', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-559', english: 'sustainable', french: 'durable', category: 'environment', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-560', english: 'global warming', french: 'réchauffement climatique', category: 'environment', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-561', english: 'endangered species', french: 'espèce en danger', category: 'environment', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-562', english: 'conservation', french: 'conservation', category: 'environment', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-563', english: 'forest', french: 'forêt', category: 'environment', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-564', english: 'planet', french: 'planète', category: 'environment', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-565', english: 'earth', french: 'terre', category: 'environment', difficulty: 3, cefrLevel: 'B1' },

            // Media & Entertainment
            { id: 'v-566', english: 'film/movie', french: 'film', category: 'media', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-567', english: 'actor/actress', french: 'acteur/actrice', category: 'media', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-568', english: 'director', french: 'réalisateur', category: 'media', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-569', english: 'novel', french: 'roman', category: 'media', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-570', english: 'author/writer', french: 'auteur/écrivain', category: 'media', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-571', english: 'newspaper', french: 'journal', category: 'media', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-572', english: 'article', french: 'article', category: 'media', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-573', english: 'news', french: 'nouvelles', category: 'media', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-574', english: 'channel', french: 'chaîne', category: 'media', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-575', english: 'program', french: 'programme', category: 'media', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-576', english: 'concert', french: 'concert', category: 'media', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-577', english: 'theater', french: 'théâtre', category: 'media', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-578', english: 'play', french: 'pièce', category: 'media', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-579', english: 'exhibition', french: 'exposition', category: 'media', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-580', english: 'performance', french: 'représentation', category: 'media', difficulty: 3, cefrLevel: 'B1' },

            // Education & Learning
            { id: 'v-581', english: 'education', french: 'éducation', category: 'education', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-582', english: 'university', french: 'université', category: 'education', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-583', english: 'degree', french: 'diplôme', category: 'education', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-584', english: 'course', french: 'cours', category: 'education', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-585', english: 'subject', french: 'matière', category: 'education', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-586', english: 'research', french: 'recherche', category: 'education', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-587', english: 'professor', french: 'professeur', category: 'education', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-588', english: 'scholarship', french: 'bourse', category: 'education', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-589', english: 'grade', french: 'note', category: 'education', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-590', english: 'certificate', french: 'certificat', category: 'education', difficulty: 3, cefrLevel: 'B1' },

            // Advanced Adjectives
            { id: 'v-591', english: 'necessary', french: 'nécessaire', category: 'adjectives', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-592', english: 'impossible', french: 'impossible', category: 'adjectives', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-593', english: 'possible', french: 'possible', category: 'adjectives', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-594', english: 'important', french: 'important', category: 'adjectives', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-595', english: 'effective', french: 'efficace', category: 'adjectives', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-596', english: 'useful', french: 'utile', category: 'adjectives', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-597', english: 'useless', french: 'inutile', category: 'adjectives', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-598', english: 'careful', french: 'prudent', category: 'adjectives', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-599', english: 'reasonable', french: 'raisonnable', category: 'adjectives', difficulty: 3, cefrLevel: 'B1' },
            { id: 'v-600', english: 'available', french: 'disponible', category: 'adjectives', difficulty: 3, cefrLevel: 'B1' },
        ]
    },

    // Level 4: B2 Advanced Vocabulary
    level4: {
        vocabulary: [
            // Professional Terminology
            { id: 'v-601', english: 'sector', french: 'secteur', category: 'professional', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-602', english: 'revenue', french: 'revenu', category: 'professional', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-603', english: 'stakeholder', french: 'partie prenante', category: 'professional', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-604', english: 'implementation', french: 'mise en œuvre', category: 'professional', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-605', english: 'framework', french: 'cadre', category: 'professional', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-606', english: 'infrastructure', french: 'infrastructure', category: 'professional', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-607', english: 'investment', french: 'investissement', category: 'professional', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-608', english: 'entrepreneur', french: 'entrepreneur', category: 'professional', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-609', english: 'innovation', french: 'innovation', category: 'professional', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-610', english: 'efficiency', french: 'efficacité', category: 'professional', difficulty: 4, cefrLevel: 'B2' },

            // Legal & Formal
            { id: 'v-611', english: 'legislation', french: 'législation', category: 'legal', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-612', english: 'clause', french: 'clause', category: 'legal', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-613', english: 'jurisdiction', french: 'juridiction', category: 'legal', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-614', english: 'attorney', french: 'avocat', category: 'legal', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-615', english: 'plaintiff', french: 'plaignant', category: 'legal', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-616', english: 'defendant', french: 'défendeur', category: 'legal', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-617', english: 'testimony', french: 'témoignage', category: 'legal', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-618', english: 'verdict', french: 'verdict', category: 'legal', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-619', english: 'litigation', french: 'litige', category: 'legal', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-620', english: 'amendment', french: 'amendement', category: 'legal', difficulty: 4, cefrLevel: 'B2' },

            // Scientific & Technical
            { id: 'v-621', english: 'hypothesis', french: 'hypothèse', category: 'scientific', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-622', english: 'methodology', french: 'méthodologie', category: 'scientific', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-623', english: 'analysis', french: 'analyse', category: 'scientific', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-624', english: 'synthesis', french: 'synthèse', category: 'scientific', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-625', english: 'experiment', french: 'expérience', category: 'scientific', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-626', english: 'evidence', french: 'preuve', category: 'scientific', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-627', english: 'phenomenon', french: 'phénomène', category: 'scientific', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-628', english: 'variable', french: 'variable', category: 'scientific', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-629', english: 'observation', french: 'observation', category: 'scientific', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-630', english: 'conclusion', french: 'conclusion', category: 'scientific', difficulty: 4, cefrLevel: 'B2' },

            // Economic & Financial
            { id: 'v-631', english: 'inflation', french: 'inflation', category: 'economic', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-632', english: 'recession', french: 'récession', category: 'economic', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-633', english: 'stock market', french: 'bourse', category: 'economic', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-634', english: 'capital', french: 'capital', category: 'economic', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-635', english: 'debt', french: 'dette', category: 'economic', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-636', english: 'asset', french: 'actif', category: 'economic', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-637', english: 'liability', french: 'passif', category: 'economic', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-638', english: 'dividend', french: 'dividende', category: 'economic', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-639', english: 'shareholder', french: 'actionnaire', category: 'economic', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-640', english: 'bankruptcy', french: 'faillite', category: 'economic', difficulty: 4, cefrLevel: 'B2' },

            // Advanced Social Topics
            { id: 'v-641', english: 'discrimination', french: 'discrimination', category: 'social', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-642', english: 'prejudice', french: 'préjugé', category: 'social', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-643', english: 'stereotype', french: 'stéréotype', category: 'social', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-644', english: 'diversity', french: 'diversité', category: 'social', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-645', english: 'integration', french: 'intégration', category: 'social', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-646', english: 'immigration', french: 'immigration', category: 'social', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-647', english: 'welfare', french: 'bien-être social', category: 'social', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-648', english: 'poverty', french: 'pauvreté', category: 'social', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-649', english: 'inequality', french: 'inégalité', category: 'social', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-650', english: 'activism', french: 'activisme', category: 'social', difficulty: 4, cefrLevel: 'B2' },

            // Nuanced Adjectives
            { id: 'v-651', english: 'subtle', french: 'subtil', category: 'adjectives', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-652', english: 'peculiar', french: 'particulier', category: 'adjectives', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-653', english: 'remarkable', french: 'remarquable', category: 'adjectives', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-654', english: 'ambiguous', french: 'ambigu', category: 'adjectives', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-655', english: 'comprehensive', french: 'complet', category: 'adjectives', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-656', english: 'inevitable', french: 'inévitable', category: 'adjectives', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-657', english: 'controversial', french: 'controversé', category: 'adjectives', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-658', english: 'sophisticated', french: 'sophistiqué', category: 'adjectives', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-659', english: 'spontaneous', french: 'spontané', category: 'adjectives', difficulty: 4, cefrLevel: 'B2' },
            { id: 'v-660', english: 'substantial', french: 'substantiel', category: 'adjectives', difficulty: 4, cefrLevel: 'B2' },
        ]
    },

    // Level 5: C1 Proficiency Vocabulary
    level5: {
        vocabulary: [
            // Specialized Professional
            { id: 'v-661', english: 'paradigm', french: 'paradigme', category: 'professional', difficulty: 5, cefrLevel: 'C1' },
            { id: 'v-662', english: 'leverage', french: 'effet de levier', category: 'professional', difficulty: 5, cefrLevel: 'C1' },
            { id: 'v-663', english: 'consortium', french: 'consortium', category: 'professional', difficulty: 5, cefrLevel: 'C1' },
            { id: 'v-664', english: 'synergy', french: 'synergie', category: 'professional', difficulty: 5, cefrLevel: 'C1' },
            { id: 'v-665', english: 'incumbent', french: 'titulaire', category: 'professional', difficulty: 5, cefrLevel: 'C1' },
            { id: 'v-666', english: 'precedent', french: 'précédent', category: 'professional', difficulty: 5, cefrLevel: 'C1' },
            { id: 'v-667', english: 'delegation', french: 'délégation', category: 'professional', difficulty: 5, cefrLevel: 'C1' },
            { id: 'v-668', english: 'arbitration', french: 'arbitrage', category: 'professional', difficulty: 5, cefrLevel: 'C1' },
            { id: 'v-669', english: 'subsidiary', french: 'filiale', category: 'professional', difficulty: 5, cefrLevel: 'C1' },
            { id: 'v-670', english: 'protocol', french: 'protocole', category: 'professional', difficulty: 5, cefrLevel: 'C1' },

            // Philosophical & Abstract
            { id: 'v-671', english: 'existentialism', french: 'existentialisme', category: 'philosophy', difficulty: 5, cefrLevel: 'C1' },
            { id: 'v-672', english: 'metaphor', french: 'métaphore', category: 'philosophy', difficulty: 5, cefrLevel: 'C1' },
            { id: 'v-673', english: 'irony', french: 'ironie', category: 'philosophy', difficulty: 5, cefrLevel: 'C1' },
            { id: 'v-674', english: 'paradox', french: 'paradoxe', category: 'philosophy', difficulty: 5, cefrLevel: 'C1' },
            { id: 'v-675', english: 'ambivalence', french: 'ambivalence', category: 'philosophy', difficulty: 5, cefrLevel: 'C1' },
            { id: 'v-676', english: 'dichotomy', french: 'dichotomie', category: 'philosophy', difficulty: 5, cefrLevel: 'C1' },
            { id: 'v-677', english: 'ideology', french: 'idéologie', category: 'philosophy', difficulty: 5, cefrLevel: 'C1' },
            { id: 'v-678', english: 'rhetoric', french: 'rhétorique', category: 'philosophy', difficulty: 5, cefrLevel: 'C1' },
            { id: 'v-679', english: 'epistemology', french: 'épistémologie', category: 'philosophy', difficulty: 5, cefrLevel: 'C1' },
            { id: 'v-680', english: 'ontology', french: 'ontologie', category: 'philosophy', difficulty: 5, cefrLevel: 'C1' },

            // Sophisticated Adjectives
            { id: 'v-681', english: 'meticulous', french: 'méticuleux', category: 'adjectives', difficulty: 5, cefrLevel: 'C1' },
            { id: 'v-682', english: 'ubiquitous', french: 'omniprésent', category: 'adjectives', difficulty: 5, cefrLevel: 'C1' },
            { id: 'v-683', english: 'intrinsic', french: 'intrinsèque', category: 'adjectives', difficulty: 5, cefrLevel: 'C1' },
            { id: 'v-684', english: 'inherent', french: 'inhérent', category: 'adjectives', difficulty: 5, cefrLevel: 'C1' },
            { id: 'v-685', english: 'pivotal', french: 'crucial', category: 'adjectives', difficulty: 5, cefrLevel: 'C1' },
            { id: 'v-686', english: 'tangible', french: 'tangible', category: 'adjectives', difficulty: 5, cefrLevel: 'C1' },
            { id: 'v-687', english: 'ephemeral', french: 'éphémère', category: 'adjectives', difficulty: 5, cefrLevel: 'C1' },
            { id: 'v-688', english: 'arbitrary', french: 'arbitraire', category: 'adjectives', difficulty: 5, cefrLevel: 'C1' },
            { id: 'v-689', english: 'clandestine', french: 'clandestin', category: 'adjectives', difficulty: 5, cefrLevel: 'C1' },
            { id: 'v-690', english: 'pragmatic', french: 'pragmatique', category: 'adjectives', difficulty: 5, cefrLevel: 'C1' },
        ]
    },

    // Level 6: C2 Mastery Vocabulary
    level6: {
        vocabulary: [
            // Mastery-level Professional
            { id: 'v-691', english: 'hegemony', french: 'hégémonie', category: 'professional', difficulty: 6, cefrLevel: 'C2' },
            { id: 'v-692', english: 'auspices', french: 'auspices', category: 'professional', difficulty: 6, cefrLevel: 'C2' },
            { id: 'v-693', english: 'nomenclature', french: 'nomenclature', category: 'professional', difficulty: 6, cefrLevel: 'C2' },
            { id: 'v-694', english: 'caveat', french: 'mise en garde', category: 'professional', difficulty: 6, cefrLevel: 'C2' },
            { id: 'v-695', english: 'juxtaposition', french: 'juxtaposition', category: 'professional', difficulty: 6, cefrLevel: 'C2' },

            // Literary & Poetic
            { id: 'v-696', english: 'verisimilitude', french: 'vraisemblance', category: 'literary', difficulty: 6, cefrLevel: 'C2' },
            { id: 'v-697', english: 'allegory', french: 'allégorie', category: 'literary', difficulty: 6, cefrLevel: 'C2' },
            { id: 'v-698', english: 'anthology', french: 'anthologie', category: 'literary', difficulty: 6, cefrLevel: 'C2' },
            { id: 'v-699', english: 'prosaic', french: 'prosaïque', category: 'literary', difficulty: 6, cefrLevel: 'C2' },
            { id: 'v-700', english: 'euphemism', french: 'euphémisme', category: 'literary', difficulty: 6, cefrLevel: 'C2' },

            // Rare & Sophisticated
            { id: 'v-701', english: 'quintessential', french: 'quintessentiel', category: 'adjectives', difficulty: 6, cefrLevel: 'C2' },
            { id: 'v-702', english: 'pervasive', french: 'omniprésent', category: 'adjectives', difficulty: 6, cefrLevel: 'C2' },
            { id: 'v-703', english: 'infinitesimal', french: 'infinitésimal', category: 'adjectives', difficulty: 6, cefrLevel: 'C2' },
            { id: 'v-704', english: 'magnanimous', french: 'magnanime', category: 'adjectives', difficulty: 6, cefrLevel: 'C2' },
            { id: 'v-705', english: 'pernicious', french: 'pernicieux', category: 'adjectives', difficulty: 6, cefrLevel: 'C2' },
        ]
    },

    // Common Phrases
    phrases: [
        { id: 'p-1', english: 'How are you?', french: 'Comment allez-vous?', difficulty: 2, cefrLevel: 'A2' },
        { id: 'p-2', english: 'What is your name?', french: 'Comment vous appelez-vous?', difficulty: 2, cefrLevel: 'A2' },
        { id: 'p-3', english: 'I am fine', french: 'Je vais bien', difficulty: 2, cefrLevel: 'A2' },
        { id: 'p-4', english: 'I don\'t understand', french: 'Je ne comprends pas', difficulty: 2, cefrLevel: 'A2' },
        { id: 'p-5', english: 'Do you speak English?', french: 'Parlez-vous anglais?', difficulty: 2, cefrLevel: 'A2' },
        { id: 'p-6', english: 'Where is the bathroom?', french: 'Où sont les toilettes?', difficulty: 2, cefrLevel: 'A2' },
        { id: 'p-7', english: 'How much does it cost?', french: 'Combien ça coûte?', difficulty: 2, cefrLevel: 'A2' },
        { id: 'p-8', english: 'I would like', french: 'Je voudrais', difficulty: 2, cefrLevel: 'A2' },
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
