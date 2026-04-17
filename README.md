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

## My working Blog

### Issues

1. In IncidentItem li tag is closed with div rather than li
2. Made useEffect with empty dependency array since we want only to call api one time as of now on component mount
