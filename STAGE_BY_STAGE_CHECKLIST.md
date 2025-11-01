# FRENCH LEARNING APP - STAGE BY STAGE CHECKLIST

**Purpose:** Define exactly what "DONE" means for each deliverable  
**Updated:** November 1, 2025  
**Status:** Ready to build

---

## 📋 LAYER 1: ASSESSMENT SYSTEM
**Duration:** 1-2 days  
**Deliverable:** Core logic functions for placement test & mastery tracking

### What Must Be Built
- [ ] `assessment.js` with all Layer 1 functions
- [ ] `utils.js` with helper functions (input normalization, answer validation)
- [ ] Local storage persistence (saveProgress, loadProgress)
- [ ] UUID generation for users

### Specific Functions to Implement

#### recordAttempt()
- [ ] Takes masteryData, itemKey, isCorrect as params
- [ ] Updates timesAttempted counter
- [ ] Updates timesCorrect counter
- [ ] Calculates masteryPercentage = (timesCorrect / timesAttempted) * 100
- [ ] Calls calculateMasteryStage() to set stage
- [ ] Returns updated object

#### calculateMasteryStage()
- [ ] 0-50% → 'learning'
- [ ] 51-70% → 'developing'
- [ ] 71-85% → 'mastered'
- [ ] 86%+ → 'solid'

#### checkDecay()
- [ ] Takes lastAttempts (array of last 3 booleans), allTimeAccuracy
- [ ] Calculates recentAccuracy from lastAttempts
- [ ] Returns true if (allTimeAccuracy - recentAccuracy) > 15%
- [ ] Returns false otherwise

#### evaluateReadinessForNextLevel()
- [ ] Check if user has attempted at least 30 items
- [ ] Check if at least 70% are mastered or solid
- [ ] Return { ready: true/false, reason: "message" }

#### validateAnswer()
- [ ] Normalize both strings (lowercase, remove accents)
- [ ] Compare normalized strings
- [ ] Return true/false

#### normalizeInput()
- [ ] Convert to lowercase
- [ ] Remove accents: café → cafe
- [ ] Trim whitespace
- [ ] Return normalized string

### Testing Requirements
- [ ] Test recordAttempt with multiple attempts (3+)
- [ ] Test calculateMasteryStage with boundary values (50, 70, 85, 100)
- [ ] Test validateAnswer with accents (café = cafe ✓)
- [ ] Test normalizeInput with special characters
- [ ] Test saveProgress & loadProgress round-trip
- [ ] Test checkDecay with real scenario

### Success Criteria (Layer 1 DONE = ALL checked)
- [ ] All 6 functions exist and export correctly
- [ ] All tests pass (console.log tests work as documented)
- [ ] localStorage works (data persists on reload)
- [ ] No errors in browser console
- [ ] Code is commented and clear
- [ ] File exists at `/src/logic/assessment.js`
- [ ] File exists at `/src/logic/utils.js`
- [ ] Committed to GitHub with message "Layer 1: Assessment System - Core Functions"

---

## 📋 LAYER 2: DATABASE & MULTI-USER
**Duration:** 1-2 days  
**Deliverable:** User management and data persistence

### What Must Be Built
- [ ] `database.js` with Layer 2 functions
- [ ] User profile structure (userId, name, email, currentLevel, masteryData)
- [ ] Multi-user state management
- [ ] Class/group management (for teacher later)

### Specific Functions to Implement

#### createUser()
- [ ] Params: name, email
- [ ] Returns: { userId (UUID), name, email, currentLevel: null, masteryData: {}, createdAt }
- [ ] Never duplicate userIds

#### assignUserToClass()
- [ ] Params: userId, classId
- [ ] Updates user.classId
- [ ] Adds userId to class.studentIds[]

#### recordUserAttempt()
- [ ] Params: userId, itemKey, isCorrect, allUsers
- [ ] Finds user in allUsers
- [ ] Calls recordAttempt() from Layer 1
- [ ] Saves updated state to localStorage
- [ ] Returns updated user object

#### getUserProgress()
- [ ] Params: userId, allUsers
- [ ] Returns: { userId, masteredCount, developingCount, learningCount, solidCount, overallAccuracy }

#### evaluateUserReadiness()
- [ ] Params: userId, allUsers
- [ ] Calls evaluateReadinessForNextLevel() from Layer 1
- [ ] Returns: { ready: bool, reason: string, currentLevel, nextLevel }

#### exportUserData()
- [ ] Params: userId, allUsers
- [ ] Returns JSON with all user data (for download/backup)
- [ ] Includes userId, masteryData, progress, createdAt

### Testing Requirements
- [ ] Create 2 test users (you, your wife)
- [ ] Record 10 attempts for each user
- [ ] Verify each user's data stays separate (no leakage)
- [ ] Test getUserProgress() for accuracy
- [ ] Test evaluateUserReadiness() returns correct readiness
- [ ] Test saveProgress/loadProgress with multi-user state

### Success Criteria (Layer 2 DONE = ALL checked)
- [ ] All 6 functions exist and export correctly
- [ ] Multi-user state works (2+ users, no data mixing)
- [ ] localStorage stores full state properly
- [ ] State can be loaded, modified, saved, reloaded with no loss
- [ ] All tests pass
- [ ] File exists at `/src/logic/database.js`
- [ ] Committed to GitHub with message "Layer 2: Database & Multi-User - User Management"

---

## 📋 LAYER 3: LEARNER INTERFACE
**Duration:** 2-3 days  
**Deliverable:** React UI for practicing exercises

### What Must Be Built
- [ ] `LearnerDashboard.jsx` - main learner view
- [ ] `ExercisePanel.jsx` - shows current exercise
- [ ] `ProgressBar.jsx` - shows mastery level for current item
- [ ] `UserSelector.jsx` - switch between users
- [ ] Input validation & feedback display

### Component Structure

#### LearnerDashboard
- [ ] Display current user name
- [ ] Show current level (A1/A2/B1/B2)
- [ ] Show overall stats (total attempted, mastery %)
- [ ] "Start Practice" button
- [ ] "View Progress" button
- [ ] Switch user dropdown

#### ExercisePanel
- [ ] Display question (French or English)
- [ ] Input field for answer
- [ ] Submit button
- [ ] Immediate feedback (✓ correct, ✗ wrong)
- [ ] Show correct answer if wrong
- [ ] Auto-advance to next item after 1 second
- [ ] Track streak (correct in a row)

#### ProgressBar
- [ ] Show current mastery % for this item
- [ ] Color coding: Red (learning) → Yellow (developing) → Light Green (mastered) → Green (solid)
- [ ] Display mastery stage text ("Learning", "Developing", etc.)

### Styling Requirements
- [ ] Clean, minimal design
- [ ] Mobile-responsive (works on phone + desktop)
- [ ] Uses Tailwind CSS only (no custom CSS)
- [ ] Uses Lucide React icons for buttons

### Testing Requirements
- [ ] Component renders without errors
- [ ] Can select different users
- [ ] Input accepts user answer
- [ ] Correct answer marked correctly
- [ ] Wrong answer marked correctly
- [ ] Progress updates after each answer
- [ ] Auto-advance works
- [ ] Data saves when answer submitted

### Success Criteria (Layer 3 DONE = ALL checked)
- [ ] All 4 components exist and render
- [ ] Can take 10 practice questions in a row
- [ ] Data updates correctly after each attempt
- [ ] Progress persists after page reload
- [ ] No console errors
- [ ] Mobile responsive
- [ ] Components committed: LearnerDashboard.jsx, ExercisePanel.jsx, ProgressBar.jsx, UserSelector.jsx
- [ ] Committed to GitHub with message "Layer 3: Learner Interface - Practice UI"

---

## 📋 LAYER 4: TEACHER INTERFACE (Optional for MVP)
**Duration:** 1-2 days  
**Deliverable:** Admin interface to view student progress & assign content

### What Must Be Built
- [ ] `TeacherDashboard.jsx` - main teacher view
- [ ] `StudentList.jsx` - list of all students
- [ ] `StudentDetail.jsx` - individual student stats
- [ ] `ContentAssignment.jsx` - assign topics/levels
- [ ] Simple reporting (completion %, mastery %)

### Success Criteria (Layer 4 DONE = ALL checked)
- [ ] Can see all users and their progress
- [ ] Can view individual student data
- [ ] Can see which topics student is weak in
- [ ] Can assign practice content to students
- [ ] Reports show clear metrics
- [ ] Committed to GitHub with message "Layer 4: Teacher Interface - Admin Dashboard"

---

## 📋 LAYER 5: CONTENT DATABASE
**Duration:** 1-2 days  
**Deliverable:** Vocabulary, conjugations, phrases in JSON

### What Must Be Built
- [ ] `content.json` with A1 vocabulary (100+ items)
- [ ] Conjugation exercises (être, avoir, aller, regular -ER verbs)
- [ ] Phrase/expression database
- [ ] Content organized by level and topic

### Content Structure
```json
{
  "vocabulary": {
    "A1": {
      "greetings": [
        { "id": "v-1", "french": "Bonjour", "english": "Hello", "level": "A1" },
        ...
      ],
      "numbers": [...],
      "family": [...]
    }
  },
  "conjugations": {
    "A1": [
      { "id": "c-1", "verb": "être", "tense": "present", "pronoun": "je", "form": "suis" },
      ...
    ]
  },
  "phrases": {
    "A1": [
      { "id": "p-1", "french": "Ça va?", "english": "How are you?", "context": "greeting" },
      ...
    ]
  }
}
```

### Testing Requirements
- [ ] Load content.json without errors
- [ ] All items have required fields (id, french, english, level)
- [ ] Can retrieve items by level
- [ ] Can retrieve items by topic
- [ ] Sample data works with Layer 3 UI

### Success Criteria (Layer 5 DONE = ALL checked)
- [ ] `content.json` exists with 100+ items
- [ ] File is valid JSON (no syntax errors)
- [ ] All required fields present
- [ ] Committed to GitHub with message "Layer 5: Content Database - A1 Vocabulary & Conjugations"

---

## 📋 LAYER 6: INTEGRATION & TESTING
**Duration:** 1-2 days  
**Deliverable:** End-to-end testing, bug fixes, performance

### What Must Be Built
- [ ] Full user journey testing (create user → practice → view progress)
- [ ] Multi-user scenario testing (you + wife using app simultaneously)
- [ ] Edge case handling (no content, all items mastered, new user)
- [ ] Performance testing (does it stay fast with 500+ items?)
- [ ] Mobile UI testing (test on phone if possible)
- [ ] Bug fixes from testing

### Test Scenarios

#### Scenario 1: New User Setup
- [ ] Create new user
- [ ] Assign level
- [ ] Start practice
- [ ] Complete 5 questions
- [ ] Progress saves
- [ ] Reload page → data persists

#### Scenario 2: Multi-User
- [ ] Create 2 users
- [ ] User 1 answers 5 questions
- [ ] Switch to User 2
- [ ] User 2 answers 5 questions
- [ ] Switch back to User 1 → their data unchanged
- [ ] User 2 data unchanged

#### Scenario 3: Decay Detection
- [ ] User masters an item (80%+ accuracy)
- [ ] User answers it incorrectly next session
- [ ] App flags decay alert
- [ ] Item appears higher in next session's queue

#### Scenario 4: Edge Cases
- [ ] No content available → show helpful message
- [ ] All items mastered → show congratulations + next level option
- [ ] New user with no attempts → show welcome + tutorial
- [ ] Offline access → works without internet (localStorage only)

### Success Criteria (Layer 6 DONE = ALL checked)
- [ ] All 4 scenarios tested and working
- [ ] No console errors in Chrome DevTools
- [ ] Mobile view responsive (test at 375px width)
- [ ] Response time < 500ms per action
- [ ] Data persists across sessions
- [ ] Edge cases handled gracefully
- [ ] Bug list compiled and fixed
- [ ] Final version committed with message "Layer 6: Integration & Testing - MVP Complete"

---

## 🎯 OVERALL PROJECT SUCCESS CRITERIA

### Must Have (Cannot skip)
- [x] Layer 1: Assessment logic
- [x] Layer 2: Multi-user database
- [x] Layer 3: Learner practice interface
- [x] Layer 5: Content (A1 vocabulary minimum)
- [x] Layer 6: Integration testing

### Nice to Have (Can add later)
- [ ] Layer 4: Teacher dashboard
- [ ] Placement test UI (non-blocking)
- [ ] Decay detection UI (non-blocking)
- [ ] Spaced repetition algorithm refinement

### Project is "DONE" (MVP) When:
- [x] All 5 must-haves complete and tested
- [x] Can create 2 users (you + wife)
- [x] Can practice 10+ exercises
- [x] Progress saves and loads
- [x] Mobile responsive
- [x] All code in GitHub
- [x] Clear documentation
- [x] Zero console errors
- [x] Tested with wife and confirmed working

---

## 📅 STAGE COMPLETION TRACKING

| Stage | Start Date | End Date | Hours Spent | Status | Notes |
|-------|-----------|----------|------------|--------|-------|
| Layer 1 | TBD | TBD | - | Not Started | Core functions only, no UI |
| Layer 2 | TBD | TBD | - | Not Started | Multi-user support |
| Layer 3 | TBD | TBD | - | Not Started | Main learner UI |
| Layer 5 | TBD | TBD | - | Not Started | Content data |
| Layer 6 | TBD | TBD | - | Not Started | Testing & fixes |
| **TOTAL** | - | - | - | **Not Started** | **Ready to build** |

---

## 🚀 HOW TO USE THIS CHECKLIST

1. **Print it out** (or keep open in browser)
2. **Each layer = one focused chat session**
3. **Before layer:** Review checklist for that layer
4. **During layer:** Check off items as completed
5. **After layer:** Verify all ☐ are checked before moving to next
6. **Update timestamp:** Record start/end date & hours
7. **After project:** This becomes your completion record

---

**Checklist Version:** 1.0 (November 1, 2025)  
**Purpose:** Ensure consistency and clarity across all chat sessions  
**To Update:** Revise after each layer with learnings/adjustments
