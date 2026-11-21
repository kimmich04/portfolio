---
title: 'Nam Nhi Pharmacity'
description: 'Online pharmacy e-commerce platform: 14 REST APIs, JWT auth with rotating refresh tokens, schema design and queue-based email.'
company: 'Kenix Solution'
period: 'Oct 2025 – Mar 2026'
demo: 'https://nhathuocnamnhi.com.vn'
order: 3
tech: ['NestJS', 'Next.js', 'React', 'Redis', 'Prisma', 'PostgreSQL', 'Docker']
featured: true
---

An online pharmacy e-commerce platform with an admin side built on KiotViet-synced data.

## Backend

- Implemented **authentication** with JWT short-lived access tokens and rotating refresh tokens with reuse detection, stored as SHA-256 hashes and delivered via httpOnly cookies.
- Built **10+ shared backend components** following NestJS best practices across the request lifecycle: global JWT guard, logging middleware and interceptor, error filter, validation pipe, and config modules.
- Designed and built **14 REST APIs** covering authentication, invoices, inventory, customers and admin accounts with role-based permissions.
- Contributed to the team's PostgreSQL/Prisma schema design, owning the auth models and indexing them around their lookup queries (unique token hash, composite email + purpose).
- Moved email sending into a separate **queue-based module on Redis/BullMQ**, so API responses no longer wait on SMTP and failed emails are retried automatically.

## Frontend

- Delivered **7 admin pages** on KiotViet-synced data.
- Built **3 reusable list/filter components** adopted across the admin pages.
