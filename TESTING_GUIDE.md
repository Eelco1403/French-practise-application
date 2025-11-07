# French Practice App - Comprehensive Testing Guide

## Overview
This guide provides step-by-step instructions for testing all features of the French Practice App.

---

## 🚀 Quick Start Testing

### Prerequisites
1. Open `index.html` in a modern web browser (Chrome, Firefox, Safari, or Edge)
2. Open Developer Console (F12) to monitor for errors
3. Ensure localStorage is enabled

---

## 📋 Testing Checklist

### 1. User Setup & Management ✓

#### Test: Create New User
- [ ] Open app, enter name "Test User"
- [ ] Select interface language (try all 4: EN, NL, FR, DE)
- [ ] Select CEFR level (A1-C2)
- [ ] Click "Start Learning"
- [ ] **Expected:** App switches to practice screen, user name appears in header

#### Test: User Dropdown
- [ ] Click on user name in header
- [ ] **Expected:** Dropdown shows with "Switch User", "Add New User", "Reset User Data"
- [ ] Verify current user has checkmark ✓

#### Test: User Switching
- [ ] Create second user "Student 2"
- [ ] Practice a few exercises
- [ ] Click user dropdown, switch back to "Test User"
- [ ] **Expected:** Progress loads correctly for Test User
- [ ] Switch back to Student 2
- [ ] **Expected:** Student 2's progress restored

#### Test: Reset User Data
- [ ] Complete 5-10 exercises
- [ ] Click user dropdown → "Reset User Data"
- [ ] Confirm reset
- [ ] **Expected:** All progress cleared, counters reset to 0
- [ ] Verify mastery data cleared in progress section

---

### 2. Language Switching (i18n) ✓

#### Test: English → Dutch
- [ ] Set language to English
- [ ] Note button labels (Start Learning, Save Progress, etc.)
- [ ] Switch to Nederlands (Dutch)
- [ ] **Expected:** All UI labels update to Dutch
- [ ] Verify feedback messages in Dutch after answering question

#### Test: French Language
- [ ] Switch to Français
- [ ] **Expected:**
  - Button labels in French
  - Feedback messages in French
  - Accent helper label in French
  - User management labels in French

#### Test: German Language
- [ ] Switch to Deutsch
- [ ] Complete exercise and verify feedback in German
- [ ] Check error messages appear in German

#### Test: Dynamic Content Translation
- [ ] Answer question incorrectly 3 times
- [ ] **Expected:** "Maximum attempts reached" message in current language
- [ ] Try different languages and verify attempt counter translates

---

### 3. Exercise Types ✓

#### Test: Vocabulary Exercise
- [ ] Click "Vocabulary" button
- [ ] **Expected:** Word in English → translate to French
- [ ] Enter correct answer
- [ ] **Expected:** Green checkmark, "Correct! Well done!" message
- [ ] Click "Next Question"
- [ ] Repeat for 5 questions

#### Test: Grammar Exercise
- [ ] Click "Grammar" button
- [ ] **Expected:** Grammar question with fill-in-the-blank
- [ ] Enter answer
- [ ] **Expected:** Shows explanation in feedback
- [ ] Verify level-appropriate grammar appears

#### Test: Conjugation Exercise
- [ ] Click "Conjugation" button
- [ ] **Expected:** Full conjugation table (je, tu, il/elle, nous, vous, ils/elles)
- [ ] Fill in all 6 forms
- [ ] Click "Check All Answers"
- [ ] **Expected:** Feedback for each form, overall pass/fail
- [ ] Verify mastery updates

#### Test: Reading Comprehension
- [ ] Click "Reading" button
- [ ] **Expected:** Passage with title + multiple questions
- [ ] Answer first question
- [ ] **Expected:** "Great! X more questions about this passage"
- [ ] Complete all questions for passage
- [ ] **Expected:** "Perfect! You've completed all questions"

#### Test: Dialogue Exercise
- [ ] Click "Dialogue" button
- [ ] **Expected:** Conversation with Speaker A/B
- [ ] Questions about dialogue appear
- [ ] Answer questions
- [ ] Verify translations shown

#### Test: All Types Mixed
- [ ] Click "All Types" button
- [ ] **Expected:** Random mix of all exercise types
- [ ] Complete 10 exercises
- [ ] Verify variety of types appear

---

### 4. Retry Logic (3 Attempts) ✓

#### Test: Correct on First Try
- [ ] Answer question correctly immediately
- [ ] **Expected:** "Correct! Well done!" feedback
- [ ] No attempt counter shown
- [ ] Immediately advance to next question

#### Test: Correct on Second Attempt
- [ ] Answer incorrectly first time
- [ ] **Expected:** "Not quite right. (Attempt 1/3 - 2 tries remaining)"
- [ ] Answer correctly on second try
- [ ] **Expected:** "Correct! (Attempt 2/3)"
- [ ] Verify progress counted correctly

#### Test: Three Incorrect Attempts
- [ ] Answer incorrectly 3 times in a row
- [ ] **Expected:**
  - Attempt 1: "1 try remaining"
  - Attempt 2: "1 try remaining"
  - Attempt 3: "Maximum attempts reached (3/3)"
  - Shows correct answer
  - Auto-advance to next question
- [ ] Verify mistake counter increments

---

### 5. Accent Helper ✓

#### Test: Accent Button Insertion
- [ ] Click in answer input field
- [ ] Position cursor in middle of text
- [ ] Click accent button (é, à, ç, etc.)
- [ ] **Expected:** Character inserts at cursor position
- [ ] Cursor moves after inserted character
- [ ] Test all 23 accent buttons

#### Test: A1/A2 Level (Accents Optional)
- [ ] Set level to A1
- [ ] Answer "café" as "cafe" (without accent)
- [ ] **Expected:** Answer accepted as correct
- [ ] Set level to A2, repeat test
- [ ] **Expected:** Still accepted

#### Test: B1+ Level (Accents Required)
- [ ] Set level to B1
- [ ] Answer "café" as "cafe"
- [ ] **Expected:** Marked incorrect
- [ ] Feedback: "Close! At level B1, accent marks are required. Correct answer: café"
- [ ] Answer with accent: "café"
- [ ] **Expected:** Accepted as correct

---

### 6. Level-Based Content Filtering ✓

#### Test: A1 Level
- [ ] Set CEFR level to A1
- [ ] Practice vocabulary
- [ ] **Expected:** Only A1 words appear
- [ ] Try all exercise types
- [ ] Verify no B1/B2/C1/C2 content appears

#### Test: B2 Level
- [ ] Set level to B2
- [ ] **Expected:** A1, A2, B1, and B2 content available
- [ ] Verify higher level (C1, C2) content not shown
- [ ] Check grammar topics filtered by level

#### Test: Change Level Mid-Session
- [ ] Start at A1, complete 5 exercises
- [ ] Click "Change Level" → select B1
- [ ] **Expected:** Next questions are B1 level
- [ ] Progress preserved from A1 exercises

---

### 7. Skills Visualization Grid ✓

#### Test: Summary View
- [ ] Navigate to Progress section
- [ ] **Expected:** 4 cards showing Learning/Developing/Mastered/Solid counts
- [ ] Verify numbers update after completing exercises

#### Test: Detailed Skills Grid
- [ ] Click "Detailed Skills Grid" button
- [ ] **Expected:**
  - Grid of skill cards
  - Each card shows word/phrase, translation, mastery %, stage
  - Color-coded by mastery level
  - Progress bar visual
  - Type badge (vocabulary/grammar/etc.)

#### Test: Mastery Color Coding
- [ ] Learning (0-25%): Red background
- [ ] Developing (26-75%): Yellow/orange background
- [ ] Mastered (76-99%): Green background
- [ ] Solid (100%): Blue background
- [ ] Hover over cards for lift effect

#### Test: Filter Skills
- [ ] Click "Learning" filter
- [ ] **Expected:** Only red cards shown
- [ ] Click "Mastered" filter
- [ ] **Expected:** Only green cards shown
- [ ] Click "All" filter
- [ ] **Expected:** All cards visible again

#### Test: Skill Details
- [ ] Click on a skill card
- [ ] **Expected:** Popup/alert with:
  - Skill name and translation
  - Mastery percentage and stage
  - Attempts and correct count
  - First practiced date
  - Last practiced date

---

### 8. Grammar Topics Overview ✓

#### Test: Topics Grid
- [ ] Click "Grammar" exercise type
- [ ] **Expected:** Grid of grammar topics
- [ ] Each topic shows:
  - Title and CEFR level
  - Description
  - Number of exercises
  - Progress percentage
  - Color-coded status (not started/in progress/mastered)

#### Test: Topic Mastery Tracking
- [ ] Click a "Not Started" topic (gray)
- [ ] Complete 2-3 exercises
- [ ] Return to topics grid
- [ ] **Expected:** Topic shows "X% Complete" in yellow
- [ ] Complete all exercises
- [ ] **Expected:** Topic shows "✓ Mastered" in green

#### Test: Topic Lesson View
- [ ] Click on any topic
- [ ] **Expected:**
  - Lesson title, level, description
  - Theory section with explanation
  - Examples section with sample sentences
  - "Start Practice Exercises" button
- [ ] Click "Start Practice"
- [ ] **Expected:** Exercises for that topic load

---

### 9. Verb Conjugation Overview ✓

#### Test: Verb List
- [ ] Click "Conjugation" exercise type
- [ ] **Expected:** List of verbs grouped by CEFR level
- [ ] Each verb card shows:
  - Verb name (être, avoir, etc.)
  - English translation
  - CEFR level badge
  - Number of tenses
  - Overall mastery percentage (if practiced)

#### Test: Verb Mastery Display
- [ ] Find verb you've practiced
- [ ] **Expected:** Shows "X% mastered" in green/yellow/red
- [ ] Color coding:
  - Red (0-49%): Needs practice
  - Yellow (50-74%): Developing
  - Green (75-100%): Mastered

#### Test: Verb Details - Tense Breakdown
- [ ] Click on a verb (e.g., "être")
- [ ] **Expected:**
  - Verb name, level, English meaning
  - List of all tenses for that verb
  - Each tense row shows:
    * Tense name (Present, Past, Future, etc.)
    * Progress bar (if practiced)
    * Mastery percentage
    * Stage badge (learning/developing/mastered/solid)
    * "Not practiced yet" if no attempts

#### Test: Tense Mastery Colors
- [ ] Practice specific tense
- [ ] Return to verb details
- [ ] **Expected:** Progress bar color matches mastery:
  - Red (0-49%)
  - Orange (50-74%)
  - Green (75-100%)
- [ ] Stage badge updates: learning → developing → mastered → solid

#### Test: Multiple Verbs
- [ ] Practice 3 different verbs
- [ ] Return to verb list
- [ ] **Expected:** All show individual mastery percentages
- [ ] Click each verb
- [ ] **Expected:** Each shows tense-by-tense breakdown

---

### 10. Data Persistence ✓

#### Test: Session Save
- [ ] Complete 10 exercises
- [ ] Note progress counts
- [ ] Close browser completely
- [ ] Reopen app
- [ ] **Expected:**
  - Last user automatically loaded
  - Progress counts restored
  - Mastery data intact
  - Can continue from where left off

#### Test: Multiple Users Persistence
- [ ] Create User A, complete 5 exercises
- [ ] Create User B, complete 3 exercises
- [ ] Close and reopen browser
- [ ] **Expected:**
  - Both users in dropdown
  - Each user's progress separate and intact

#### Test: Cross-Session Data
- [ ] Practice for 2 days
- [ ] Check "First practiced" dates on skills
- [ ] **Expected:** Dates preserved correctly
- [ ] Check "Last practiced" dates update properly

---

### 11. Error Handling ✓

#### Test: Empty Input
- [ ] Leave answer blank, click submit
- [ ] **Expected:** Counted as incorrect attempt
- [ ] Retry with correct answer works

#### Test: No Content for Level
- [ ] Set to C2 level
- [ ] Try exercise type with limited C2 content
- [ ] **Expected:** Either:
  - Shows warning "No exercises available"
  - Falls back to other levels gracefully
  - No crashes or white screen

#### Test: Browser Console
- [ ] Open Developer Console (F12)
- [ ] Complete various exercises
- [ ] **Expected:** No critical errors (red)
- [ ] Warnings are acceptable, but no crashes

---

### 12. Mobile Responsiveness ✓

#### Test: Mobile View (or Resize Browser)
- [ ] Resize browser to 375px width (mobile size)
- [ ] **Expected:**
  - Skills grid adjusts to single column
  - Buttons remain clickable
  - Text remains readable
  - No horizontal scrolling
  - Accent helper wraps properly

---

## 🐛 Common Issues & Solutions

### Issue: Progress Not Saving
**Solution:** Check if localStorage is enabled in browser settings

### Issue: Translations Not Working
**Solution:** Ensure i18n.js loaded before app.js. Check browser console for errors.

### Issue: Skills Grid Empty
**Solution:** Complete at least 3-5 exercises first to populate grid

### Issue: User Dropdown Not Appearing
**Solution:** Verify user is logged in (name shown in header)

---

## 📊 Test Result Summary Template

```
Test Date: __________
Tester Name: __________
Browser: Chrome / Firefox / Safari / Edge (circle one)

✅ PASSED:
- User management: __/__
- Language switching: __/__
- Exercise types: __/6
- Retry logic: __/__
- Accent helper: __/__
- Level filtering: __/__
- Visualizations: __/__
- Data persistence: __/__

❌ FAILED:
(List any failures)

📝 NOTES:
(Additional observations)
```

---

## 🎯 Priority Test Scenarios

If time is limited, test these critical paths first:

1. **Create user → Complete 10 exercises → Check progress saves** (5 min)
2. **Switch languages → Verify all UI updates** (3 min)
3. **Test retry logic (3 attempts)** (2 min)
4. **View skills grid → Filter by mastery** (2 min)
5. **Test accent helper at B1+ level** (2 min)

**Total Priority Testing Time: ~15 minutes**

---

## 🚀 Automated Testing (Future)

For developers: Consider implementing:
- Jest/Mocha unit tests for utility functions
- Cypress/Selenium E2E tests for user flows
- Lighthouse performance audits
- Accessibility (a11y) testing with axe

---

## ✅ Sign-Off

- [ ] All critical features tested
- [ ] No blocking bugs found
- [ ] Documentation reviewed
- [ ] Ready for production

**Tested by:** _________________
**Date:** _________________
**Approved by:** _________________

---

**Need Help?** Check browser console (F12) for detailed error messages.
