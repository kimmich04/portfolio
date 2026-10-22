---
title: 'Nam Nhi Pharmacity'
description: 'Online pharmacy e-commerce platform: 14 REST APIs, JWT auth with rotating refresh tokens, and queue-based email.'
company: 'Kenix Solution'
period: 'Aug 2025 – Mar 2026'
order: 3
tech: ['NestJS', 'Prisma', 'Redis/BullMQ', 'Next.js 16', 'React 19', 'Tailwind CSS']
featured: true
---

An online pharmacy e-commerce platform with an admin side built on KiotViet-synced data.

## Backend

- Designed and built **14 REST APIs** covering authentication, invoices, inventory, customers and admin accounts with role-based permissions.
- Implemented **JWT authentication** with short-lived access tokens and rotating refresh tokens with reuse detection, stored as SHA-256 hashes and delivered via httpOnly cookies.
- Built **10+ shared backend components** across the NestJS request lifecycle: global JWT guard, logging middleware and interceptor, error filter, validation pipe, and config modules.
- Moved email sending into a separate **queue-based module on Redis/BullMQ**, so API responses no longer wait on SMTP and failed emails are retried automatically.

## Frontend

- Delivered **7 admin screens** on top of KiotViet-synced data.
- Added 3 reusable list and filter components, now used in 8 data tables.
- Resolved 6+ UI and integration issues, including a frontend/backend request/response mismatch, image scaling across 13 files, and table layout bugs.
