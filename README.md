# Frontend Engineering Task – Incident Dashboard

# 🚨 Incident Dashboard – Frontend Engineering Challenge

## Mission Statement

**Build a production-ready incident management dashboard that engineering teams can trust.**

You're joining a critical infrastructure team where incident response matters. This dashboard is the command center for engineers monitoring system health, identifying issues, and responding to production problems in real-time.

Your mission: Take this unstable prototype and transform it into a robust, performant, and accessible application that can handle hundreds of incidents without breaking, while providing an intuitive experience for stressed engineers at 3 AM.

This is your opportunity to demonstrate:

- 🎯 **Technical Excellence** – Clean architecture, proper state management, and Angular best practices
- 🐛 **Problem-Solving** – Debug hidden issues, fix edge cases, and handle null/undefined gracefully
- ⚡ **Performance Awareness** – Optimize rendering, implement smart caching, and eliminate bottlenecks
- ♿ **Accessibility First** – Build for all users, keyboard navigation, and screen readers
- 🧪 **Quality Assurance** – Test what matters, catch regressions early

The current implementation is intentionally flawed. Your task is to improve the architecture, fix the bugs, and add critical features that make this dashboard production-worthy.

**Estimated time: 6–8 hours** | **Make it beautiful. Make it work. Make it yours.**

---

## Your Tasks

### 1. Fix Data Loading

The application has issues with state management and data loading. Identify and fix all problems.

### 2. Implement Data Normalisation

The API returns inconsistent data. Create proper normalisation logic to ensure data quality and consistency.

### 3. Fix Filtering

The filtering functionality is broken. Make severity and text search filters work correctly.

### 4. Optimize Performance

The list re-renders unnecessarily. Implement proper change detection and tracking.

### 5. Add Incident Details Panel

Build a details panel that opens when clicking an incident. Include close functionality (button + ESC key).

### 6. Ensure Accessibility

Make the application keyboard navigable with proper focus management and ARIA attributes.

### 7. Write Tests

Add 3–5 meaningful tests covering core functionality.

---

## Getting started

```bash
npm install
npm run dev   # start dev server
npm test      # run tests
```

You may adjust scripts or add small utilities if it helps your workflow.

---

## 📝 Working Blog – Development Journey

### 🐛 Issues Fixed (Development Insights)

During the development phase, I identified and resolved several critical issues affecting the dashboard's functionality and stability:

1. **Semantic HTML Structure Fix** – The `IncidentItem` component had a semantic bug where the `<li>` closing tag was replaced with `</div>`, breaking the list structure. This violated proper HTML semantics and caused accessibility and styling issues. Fixed by ensuring proper `<li>` wrapper with correct closing tags.

2. **Data Loading Initialization** – The initial `useEffect` dependency array was missing, causing continuous API calls on every render. Implemented an empty dependency array `[]` to ensure the API is called only once during component mount, preventing redundant network requests and improving application performance.

3. **State Management Synchronization** – The incidents store wasn't properly initializing state on mount. Added explicit data fetching in the Dashboard component to ensure incidents are loaded before rendering the list.

4. **Filter State Persistence** – Filtering wasn't working correctly because filter state wasn't being properly applied to the incident list. Implemented proper filtering logic in the store with computed selectors for severity and search filters.

5. **Null/Undefined Safety** – The component wasn't handling edge cases where incidents data could be null during loading. Added proper conditional rendering and loading states to prevent runtime errors.

### ⚡ Optimization Strategies (Performance Improvements)

1. **Memory-Efficient Filtering** – Instead of creating duplicate arrays for filtered data (which would occupy additional memory space), I implemented a `filteredOut` flag directly on the source incident objects. This approach maintains a single source of truth while allowing efficient filtering without memory duplication.

2. **Smooth UI Transactions with startTransaction** – For large dataset filtering operations that could potentially block the UI and prevent smooth typing interactions, I utilized `startTransaction` to prioritize the filtering task at a lower priority level. This ensures the page maintains smooth user interactions even during heavy computational operations.

### 🤖 AI Usage & Learning Journey

This development process leveraged AI assistance in strategic ways to accelerate learning and productivity:

1. **Zustand State Management Learning** – Used AI to understand Zustand's core concepts, including hooks-based store creation, selectors for fine-grained subscriptions, and best practices for managing global state in React. This foundational knowledge enabled proper implementation of the incidents store without unnecessary re-renders.

2. **Work Documentation & Communication** – AI helped structure and articulate the development work into clear, professional documentation. This working blog transforms scattered thoughts into a comprehensive narrative that explains decision-making, problems encountered, and solutions implemented—useful for code reviews and knowledge transfer.

3. **Initial CSS Framework Generation** – Used AI to generate baseline CSS styling for components including buttons, badges, modals, and layout utilities. This kickstarted visual development without manual boilerplate, allowing focus on functionality and component architecture rather than spending time on initial styling iterations.
