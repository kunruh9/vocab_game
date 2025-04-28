# Vocabulary Game

## Motivation & Background

The English language may supersede writing actual source code in the near future. Based on my experience, working with Generative AI to build Software Applications is very much an exercise in clear communication. It's not about how _much_ you write, but how well you can articulate your vision. Sometimes, guiding the AI through an iterative process of concise prompts is more effective than trying to "describe the world".

For the basic implementation of this game, the goal is simple: help users learn uncommon (or advanced) English words and their definitions. While this alone may not make someone a great Prompt Engineer, it is a valuable step toward building strong language and recall skills.

---

## Current Features

- **Word Recall Game:**
  - Presents 10 definitions per session, one at a time.
  - User types the word that matches the definition.
  - Immediate feedback after each answer (correct/incorrect, with the correct answer shown if wrong).
  - Score is tracked and displayed throughout the session.
  - User can quit at any time; final score is shown at the end.
- **Vocabulary Dataset:**
  - Over 1,000 advanced/uncommon English words, each with a definition and example sentence.
  - Data is stored locally; no account or internet connection required after loading.
- **User Experience:**
  - Clean, mobile-friendly interface.
  - Fast, simple, and distraction-free gameplay.
- **Technical:**
  - Web-based application for cross-platform compatibility.
  - End-to-end tested from development to deployment ([see live site](https://www.kyleunruh.com/)).

---

## Roadmap

### Completed
- [x] Word recall game mode (definition shown, user types the word)
- [x] Immediate feedback and scoring
- [x] 10-question session limit
- [x] Local storage of vocabulary data (no backend required)
- [x] Clean, mobile-first UI
- [x] End-to-end deployment pipeline

### Planned / In Progress

#### 1. Definition Recall Feature
- [ ] Display a single word at a time; user types the definition
- [ ] Compare user input to correct definition (initially direct string match, later semantic)
- [ ] Immediate feedback and navigation

#### 2. Age-Specific Vocabulary Sets
- [ ] Implement grade-level appropriate vocabulary sets
- [ ] Align with state educational standards (e.g., Common Core)
- [ ] Expand target audience: elementary, middle, high school, SAT/ACT prep
- [ ] Source lists from educational standards and test prep guides

#### 3. Enhanced Definition Comparison
- [ ] Move beyond direct string matching for definitions
- [ ] Use semantic similarity for partial credit and multiple acceptable answers

#### 4. Gamification & Social Features
- [ ] Leaderboards
- [ ] Friends list
- [ ] Real-time competition with other users

#### 5. Additional Improvements
- [ ] More robust scoring and feedback
- [ ] Session history and review
- [ ] Accessibility enhancements
- [ ] Improved data import/export tools

---

## Contributing

Contribution guidelines will be added as the project develops. Suggestions and feedback are welcome!

## License

[License information to be added] 