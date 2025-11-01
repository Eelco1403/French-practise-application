# FRENCH LEARNING APP - MASTER PROJECT REFERENCE

**Status:** MVP Phase - In Development  
**Last Updated:** November 1, 2025  
**Owner:** User (Living in France, Teaching Experience)  
**GitHub:** https://github.com/Eelco1403/French-practise-application (PUBLIC)

---

## 🎯 PROJECT VISION

### Personal Goals (Immediate - Now)
- Build comprehensive French learning tool for self-study (you) and wife
- Practice vocabulary, conjugation, grammar, phrases (A1-B2 levels)
- Track progress and identify weak areas
- Make learning efficient (adaptive, not grinding through known content)

### Business Goals (Medium-term - 6-12 months)
- Develop commercial product: "Custom Language Learning Apps as a Service"
- Offer personalized apps to French learners, teachers, other language combos
- Initial pricing: €15 (basic), €25 (standard), €40 (complete) per app
- Potential subscription: €8-10/month for updates
- Scale to multiple language pairs (eventually universal framework)

### Unique Value Proposition
✓ Personalization (not one-size-fits-all)  
✓ Adaptive learning (app learns from mistakes)  
✓ Teacher-designed (real credibility)  
✓ Affordable (€15-50 vs €10-20/month subscriptions)  
✓ AI-enhanced (Claude integration for rapid development)

---

## 🏗️ TECHNICAL ARCHITECTURE

### Technology Stack
- **Frontend:** React (JavaScript framework)
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Storage:** React state (current), Firebase/Supabase (future)
- **Delivery:** Single HTML file (works in any browser)

### Core Components (Never Change - Universal)
1. **Exercise Engine** - Handles questions, answer checking, feedback
2. **Progress Tracker** - Records attempts, calculates mastery %
3. **Adaptive Algorithm** - Selects next exercises based on performance
4. **User Interface** - Clean, functional, consistent design
5. **Data Storage** - Auto-saves progress using persistent storage

### Pluggable Components (Easy to Customize)
1. **Content Database** - Language packs, vocabulary, grammar, conjugation
2. **Feature Modules** - Placement test, practice selection, grammar lessons
3. **Configuration Files** - Language settings, UI preferences, difficulty

---

## 📊 6-LAYER ARCHITECTURE (Build Sequence)

| Layer | Name | Description | Dependencies |
|-------|------|-------------|--------------|
| **1** | Assessment System | Placement test, continuous assessment, readiness | None (foundational) |
| **2** | Database & Multi-User | User creation, class mgmt, enrollment, permissions | Layer 1 |
| **3** | Teacher Interface | Dashboard, reports, topic assignment, student data | Layer 2 |
| **4** | Learner Interface | Practice exercises, conjugation toggles, assessment | Layer 2 |
| **5** | Content Database | Vocabulary, conjugations, phrases, grammar | Independent |
| **6** | Integration & Testing | End-to-end testing, edge cases, UX validation | Layers 1-5 |

**Build Rationale:**
- Layer 1 is foundational (all others depend on assessment data)
- Layer 2 provides foundation for user management
- Layers 3-4 can be built in parallel (both depend on Layer 2)
- Layer 5 is independent (can start anytime)
- Layer 6 is last (combines everything for end-to-end testing)

---

## 📚 CONTENT STRUCTURE (CEFR Levels A1-B2+)

| Level | Target Items | Current Status | Focus Areas |
|-------|--------------|----------------|-------------|
| **A1** | 300-500 | 100-150 partial | Greetings, numbers, family, food, colors |
| **A2** | 800-1000 | Planned | Daily routines, housing, transportation, health |
| **B1** | 1500-2000 | Planned | Abstract concepts, media, business, opinions |
| **B2** | 3000-4000 | Future | Professional, formal, idioms, advanced grammar |

**Current Implementation Status:**
- ✅ Working prototype with core features
- ✅ Bidirectional exercises (French↔English)
- ✅ Spaced repetition with decay detection
- ✅ Multi-user support (you + wife)
- ✅ Auto-save progress
- ✅ Accent-tolerant input (café = cafe)
- 📊 100-150 vocabulary words implemented
- 📊 20+ conjugation exercises
- 📊 10+ phrases implemented

---

## 📅 REALISTIC TIMELINE

### Phase 1: Build & Refine (Weeks 1-2, Nov-Dec 2025)
- Core framework with universal architecture
- First complete language pair (French ↔ English)
- Test extensively with wife, gather feedback

### Phase 2: Enhance & Test (Weeks 3-4, Jan 2026)
- Expand French content (500+ items)
- Add advanced features (placement test, practice selection)
- Beta testing with 3-5 friends/local learners

### Phase 3: Polish & Launch (Weeks 5-6, Feb 2026)
- Professional touches and documentation
- Implement beta feedback
- Create website/marketing materials
- Set pricing and launch

**Time Commitment:**
- Available: 5 hours/day
- Capacity: 25-35 hours/week
- Estimated build time: 18-20 hours for MVP
- Recommended pace: One layer per day (intensive)

---

## 💼 BUSINESS MODEL

### Custom App Service (Recommended for Launch)
Customer contacts with specific need → You create customized app in 5-10 minutes → Customer pays and receives app

### Pricing Strategy
- **Starter Pack:** €15 (50-100 items, one skill area)
- **Standard Pack:** €25 (200-300 items, 2-3 skill areas)
- **Complete Pack:** €40 (400+ items, all areas, full adaptive system)
- **Monthly Subscription:** €8/month (ongoing updates)
- **Additional Updates:** €10/update

---

## 🚀 NEXT IMMEDIATE STEPS

### For User (This Week)
1. Test current app thoroughly (if it exists/works)
2. Use daily for French practice
3. Note any problems, confusing UI, missing features
4. Get wife's feedback on usability

### For Next Chat Session
1. Read this MASTER_PROJECT_CONSOLIDATED.md
2. Check GitHub repo for latest code
3. Read STATUS.md for what's been done
4. Continue from last stopping point
5. Create new code/files as needed
6. Verify files exist + push to GitHub
7. Update STATUS.md before ending

---

## 📞 QUICK REFERENCE

**GitHub Repo:** https://github.com/Eelco1403/French-practise-application  
**Technology:** React + Tailwind CSS + Lucide React  
**First Task:** Build Layer 1 (Assessment System) - logic only, no UI yet  
**Key Function:** recordAttempt() - tracks all learner attempts  
**Critical Algorithm:** Placement test + Mastery calculation  
**Current Status:** Ready to build - architecture complete, no code in repo yet  

---

**Document Version:** 1.0 (November 1, 2025)
