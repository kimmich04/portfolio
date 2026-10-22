---
title: 'Smash Club'
description: 'Online sport booking platform: NestJS microservices with RabbitMQ events, Prisma queries, and a Next.js frontend.'
company: 'Kenix Solution'
period: 'Aug 2025 – Mar 2026'
order: 2
tech:
  [
    'NestJS 11',
    'TypeScript',
    'Prisma 6',
    'PostgreSQL',
    'RabbitMQ',
    'Redis',
    'Next.js 15',
    'React 19',
    'Tailwind CSS v4',
    'shadcn/ui',
    'GitLab CI',
  ]
featured: true
---

An online sport booking platform built with a microservice backend and a Next.js frontend.

## Backend

- Designed and built a **Subcourt management module** in NestJS with a layered structure (controller, service, repository, DTOs, mapper), 4 REST endpoints, Prisma schema and migrations, and time-slot conflict detection.
- Built **event-driven notifications** with RabbitMQ: the core service publishes a subcourt-created event, and the workflow service sends HTML emails that respect each user's notification settings.
- Rewrote the booking search as a **single dynamic Prisma query** with database-level pagination and a parallel count, replacing about 470 lines of in-memory filtering.
- Built court and tournament management APIs (update/soft delete, tournament detail updates with DTO validation) and cleared the Redis cache on writes.
- Resolved **Prisma migration drift** in the processing service by baselining the schema into a single initial migration and marking it as applied, which unblocked deployments without resetting existing data.

## Frontend

- Refactored the tournament UI into a reusable hook and a typed service layer, simplifying the main tournament modal.

## Production fixes

Fixed 6 production bugs across frontend and backend (pricing display, tournament creation and registration, category editing 404, gender categorization, district search) in a Scrum/GitLab workflow. 15 of my commits reached the production branch.
