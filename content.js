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
