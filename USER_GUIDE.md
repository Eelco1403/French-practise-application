# French Practice App - User Guide

## 🎯 Quick Start

1. **Open the app**: Open `index.html` in your web browser
2. **Enter your name**: Type your name in the welcome screen
3. **Start practicing**: Click "Start Learning" to begin

## 📚 Features

### Interactive Practice
- Practice French vocabulary with instant feedback
- Translate English words and phrases to French
- Accent-insensitive input (you can type "cafe" instead of "café")
- Case-insensitive answers

### Progress Tracking
The app tracks your mastery in 4 stages:
- **Learning** (0-50%): Just starting out
- **Developing** (51-70%): Making progress
- **Mastered** (71-85%): Confident with occasional errors
- **Solid** (86%+): Very reliable

### Content Library
- **70+ vocabulary items** covering:
  - Greetings (hello, goodbye, thank you, etc.)
  - Food & Drink (café, pain, vin, etc.)
  - Family (mère, père, frère, sœur)
  - Numbers (1-10)
  - Colors (rouge, bleu, vert, etc.)
  - Common Verbs (être, avoir, aller, etc.)
  - Places (maison, école, restaurant, etc.)
  - Time expressions (aujourd'hui, demain, hier)
- **8 common phrases** (How are you?, I don't understand, etc.)

### Smart Assessment System
- Tracks every attempt
- Calculates mastery percentage
- Detects knowledge decay
- Evaluates readiness for next level (after 30 items with 70% mastery)

## 🎮 How to Use

### Starting a Session
1. Enter your name on the welcome screen
2. Your progress is automatically saved to your browser
3. Return anytime to continue where you left off

### Practicing
1. Read the English word/phrase
2. Type the French translation
3. Press Enter or click "Check Answer"
4. See instant feedback (correct/incorrect)
5. View the correct answer if you got it wrong
6. Click "Next Question" to continue

### Understanding Your Stats
- **Correct**: Number of correct answers this session
- **Total**: Total attempts this session
- **Accuracy**: Your session accuracy percentage

### Progress Overview
View your mastery breakdown:
- How many items are in each stage
- Overall progress toward next level
- Visual progress bar

## 💡 Tips for Success

1. **Practice regularly**: Daily practice helps retain vocabulary
2. **Don't worry about accents**: Type "etre" instead of "être" - both work!
3. **Review mistakes**: Pay attention to the correct answers when you make mistakes
4. **Track progress**: Watch as items move from "Learning" to "Solid"
5. **Complete 30 items**: Attempt at least 30 different items to unlock level progress

## 🔧 Technical Details

### Browser Requirements
- Modern web browser (Chrome, Firefox, Safari, Edge)
- JavaScript enabled
- localStorage support for saving progress

### File Structure
```
French-practise-application/
├── index.html          # Main app interface
├── styles.css          # Beautiful styling
├── app.js              # Main application logic
├── content.js          # French vocabulary database
└── src/
    └── logic/
        ├── assessment.js  # Assessment & mastery tracking
        ├── utils.js       # Utility functions
        └── layer1-tests.js # Test suite
```

### Data Storage
- Progress is saved in browser localStorage
- Data persists between sessions
- Each user gets a unique ID
- No server or internet connection required

## 🧪 Testing

Run the test suite to verify everything works:
```bash
node src/logic/layer1-tests.js
```

All 53 tests should pass!

## 🎯 Learning Path

### Level 1: Basics (50 items)
Master fundamental vocabulary:
- Essential greetings
- Numbers 1-10
- Common verbs (être, avoir, aller)
- Basic food items
- Family members
- Colors

### Level 2: Intermediate (20 items)
Expand your knowledge:
- Places (maison, école, hôtel)
- Time expressions
- Adjectives (grand, petit, bon)

### Phrases
Practice real conversations:
- Greetings and introductions
- Common questions
- Essential expressions

## 🔄 Reset Progress

If you want to start over:
1. Open browser console (F12)
2. Type: `resetSession()`
3. Confirm the reset

**Warning**: This will delete all your progress!

## 🎉 Next Steps

Once you've mastered the basics:
1. Complete at least 30 items
2. Achieve 70% mastery on those items
3. Watch for the "Ready for next level" message
4. Continue practicing to maintain your skills

## 💬 About the Assessment System

The app uses a sophisticated mastery tracking system:
- Records every attempt (correct/incorrect)
- Calculates percentage accuracy
- Assigns mastery stages automatically
- Detects knowledge decay (if performance drops)
- Evaluates readiness for advancement

This ensures you truly learn the material before moving forward!

## 🌟 Features at a Glance

✓ 70+ vocabulary items + phrases
✓ Instant feedback
✓ Progress tracking
✓ Mastery stages
✓ Beautiful, responsive design
✓ Mobile-friendly
✓ Offline capable
✓ No account required
✓ Privacy-focused (all data stays in your browser)

Happy learning! 🇫🇷
