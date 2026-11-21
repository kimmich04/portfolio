---
title: 'Internal Employee Portal'
description: 'Internal portal at Bosch: 8 features shipped, 35 REST endpoints migrated to API v2, initial JS payload cut by ~61%, and Vitest coverage for auth logic.'
company: 'Bosch Global Software Technologies Vietnam'
period: 'Apr 2026 – Sep 2026'
order: 1
tech: ['React', 'TypeScript', 'Redux Toolkit', 'Vite', 'i18n', 'Orval', 'Azure', 'Vitest']
featured: true
---

An internal employee portal I worked on as a Frontend Developer Intern. I collaborated with a 5-person Agile Scrum team across 13 sprints, through task estimation, GitHub branches, pull requests and code reviews.

## Features and reusable code

- Shipped **8 features** using React, TypeScript and Redux Toolkit.
- Built **10+ reusable hooks, components and utilities** across the news, events and admin modules.
- Extracted duplicated admin CRUD logic into a reusable React hook, removing **~160 lines of duplicated code** across the News and Events modules.

## Performance

Cut the initial JS payload by **~61%** (2.0 MB → 778 KB; 612 KB → 241 KB gzipped) with:

- route-level code splitting (20 lazy routes)
- vendor chunking
- on-demand locale loading

## API and i18n migrations

- **API v1 → v2:** migrated **35 REST endpoints across 30 files** using Orval-generated TypeScript clients, improving type safety between frontend and backend.
- **i18n:** replaced runtime Azure Storage translation fetching with bundled JSON for 10 languages (~600 keys), removing an authenticated API dependency so the UI renders translated text before login.
- Added **video embedding** as an alternative to uploading files to Azure Storage, reducing storage and streaming load.

## Auth and testing

- Fixed a **race condition in the SSO logout flow** where React state updates triggered a silent re-login, using a non-persisted Redux flag to block the automatic OAuth redirect.
- Wrote **unit tests with Vitest** for Redux async thunks (mocked API clients), time-dependent logic (fake timers) and a single-flight token-refresh interceptor (fake Axios adapter simulating concurrent 401s).

## Tooling and workflow

- Implemented **3 CI/CD pipelines** that build on pull requests and deploy only on pushes to `develop` or `main`.
- Applied a **Claude-based SDLC workflow** (Figma and Jira via MCP, planner/implementer/reviewer agents) to deliver frontend features against the internal Frontend Kit.
