---
title: 'Smash Club'
description: 'Online sports booking platform: NestJS microservices with RabbitMQ events, a 16× faster booking search, and fixes for N+1 queries and overbooking.'
company: 'Kenix Solution'
period: 'Oct 2025 – Mar 2026'
demo: 'https://smash-club.net'
order: 2
tech: ['NestJS', 'Next.js', 'React', 'RabbitMQ', 'Redis', 'Prisma', 'PostgreSQL', 'Docker']
featured: true
---

An online sports booking platform built with a microservice backend and a Next.js frontend.

## Backend design

- Designed **4 REST endpoints** in a NestJS module following a clean layered structure (controller, service, repository, DTOs, mapper).
- Built **event-driven notifications** between microservices with RabbitMQ: the core service publishes an event to a durable queue, and the workflow service consumes it with manual ack/nack (requeue on failure) and sends HTML emails that respect each user's notification settings. This keeps SMTP latency off the API response path.

## Performance and correctness

- Rewrote the booking search API as a **single dynamic Prisma query** with DB-level pagination, cutting median latency **16× (109 → 7 ms)** and payload **1.2 MB → 13 KB**.
- Eliminated an **N+1 query** in the notification read API with a batched ownership check, reducing SQL statements from 2N+1 to 2.
- Eliminated an **overbooking race condition** using a transaction and pessimistic locking.
- Resolved **Prisma migration drift** in the processing service by baselining the schema into a single initial migration and marking it as applied, which unblocked deployments without resetting existing data.

## Delivery

- Fixed **5 production bugs** relating to query filtering, API response mapping and cache invalidation, tracked in Jira and shipped through a Scrum/GitLab workflow.
- Built and deployed backend services to the team's dev and UAT environments over SSH (Termius), verifying changes against UAT before release to production.
