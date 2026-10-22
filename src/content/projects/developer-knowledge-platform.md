---
title: 'Developer Knowledge Platform'
description: 'Internal web application at Bosch: shared component library, i18n and API migrations, auth fixes, and a 50 → 80+ Lighthouse score.'
company: 'Bosch Global Software Technologies Vietnam'
period: 'Apr 2026 – Sep 2026'
order: 1
tech: ['React 19', 'TypeScript', 'Redux Toolkit', 'Vite', 'Tailwind CSS v4', 'TipTap', 'Orval/OpenAPI', 'i18next']
featured: true
---

An internal web application I worked on as a Frontend Developer Intern, contributing across 13 sprints in a 5-person Scrum team.

## Shared component library

- Built a shared component library with **4 themes** and Light/Dark/System mode, with live OS sync and no flash on load.
- Published it as a private package, now **adopted by 5 applications**.
- Developed **20+ reusable hooks, components and utilities**, which delivered 8 features and cut duplicated logic in one module by ~30%.

## Performance

Improved the Lighthouse performance score from **under 50 to 80+** by:

- route-based code splitting and vendor chunking
- lazy-loading translations, cutting ~200 KB from the initial load
- setting image dimensions and deferring third-party scripts

## Migrations

- **i18n:** moved translations for 10 languages (~730 keys each) from an Azure API to bundled files. Users now see translated text before login, the app makes fewer startup requests, and Azure storage costs went down.
- **API v1 → v2:** set up generated clients from two OpenAPI specs and moved 6 Redux data slices and their services to the new API.

## Authentication fixes

- Rewrote the token-refresh logic so only one refresh runs while other requests wait, which stopped refresh loops and duplicate calls.
- Fixed a logout bug that signed users straight back in.

## Tooling

- Implemented **3 CI/CD pipelines** that build on pull requests and deploy only on pushes to `develop` or `main`.
- Connected Claude to Figma and the internal Frontend Kit through MCP, with reusable skills and agents that generate theme-compliant components and speed up UI work for the team.
