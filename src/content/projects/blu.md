---
title: 'Blu'
description: 'AI chat app built at an AI-native hackathon: a React frontend with type-driven rendering of 6 AI response types and a fault-tolerant API layer.'
company: 'VAIC 2026 · NIC & Meta'
role: 'Frontend Developer · Team of 6'
period: '2026'
badge: 'Hackathon'
demo: 'https://borderless-lovat.vercel.app/'
repo: 'https://github.com/tntanh5/borderless'
order: 5
tech: ['React', 'TypeScript']
featured: true
---

Built at **VAIC 2026 — AI-native Hackathon** (NIC & Meta, 1500+ participants) in a team of 6. I built the frontend with React.

## Structure

- **16 components, 2 custom hooks and 3 service modules.**

## Type-driven rendering

- Used TypeScript **discriminated unions** so one dispatcher component picks from **8 UI components** to display **6 AI response types**.

## State and async logic

- Built 2 custom hooks that separate state management from async logic.
- Handled the race condition when a user switches chats while a reply is still pending.

## Fault-tolerant API layer

- Request timeouts, typed error classes and one-click retry.
- Checks on LLM responses, so the UI never crashes on malformed data.

## React patterns

Lazy state initialization, immutable updates, `useEffect`/`useRef` for side effects and the DOM, `useCallback`, controlled components and optimistic UI, in a responsive UI.
