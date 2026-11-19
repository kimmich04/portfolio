---
title: 'Storagemate'
description: 'AI agent on Zalo that records stock in/out from F&B staff chat messages, with a LangChain assistant that answers managers’ stock questions.'
company: 'K-tech Hackathon 2026 · LIKELION'
role: 'Team Lead · Backend & AI · Team of 5'
period: '2026'
badge: 'Hackathon'
demo: 'https://storagemate-dashboard.vercel.app/'
repo: 'https://github.com/kimmich04/storagemate-service'
links:
  - label: 'Try the Zalo bot'
    href: 'https://bot.zaloplatforms.com/bots/455572586906579631'
order: 4
tech: ['Python', 'FastAPI', 'LangChain', 'PostgreSQL', 'React', 'Supabase', 'Railway', 'Vercel', 'GitHub Actions']
featured: true
---

Built at **K-tech Hackathon 2026 — AI for Business Innovation** (LIKELION, 200+ participants), where I led a team of 5 and owned the backend and AI parts.

Staff at F&B chains report stock movements in a Zalo chat; Storagemate turns those messages into stock-in/stock-out records, and managers can ask questions about their inventory in plain language.

## Architecture

- Designed the architecture: a Zalo bot feeding a **Postgres-backed message queue**, a background worker that processes messages, and a React dashboard.
- Structured the FastAPI backend into **domain-based packages** (router, schemas, models, service and dependencies per domain) for maintainability.

## AI agent

- Built a **tool-calling AI agent** with LangChain that answers managers' questions about stock, top items, movement history and staff activity.
- It chains **5 typed read-only tools** over several steps, with step and time limits, and declines rather than invents a number.

## Deployment and CI/CD

- Deployed the backend, dashboard and database on **Railway, Vercel and Supabase** (ngrok for local development), and registered the Zalo Bot webhook through Zalo's API.
- Built a **GitHub Actions pipeline** for the dashboard: pull requests to `main` run lint, tests and build, and merges deploy to Vercel production only after all checks pass, replacing Vercel's auto-deploy.
