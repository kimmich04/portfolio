---
title: 'Zalo QR Follow Tracking Service'
description: 'Real-time service that logs every new Zalo OA follower to Google Sheets and attributes it to the QR code or campaign that brought them in.'
company: 'Kenix Solution'
period: 'Aug 2025 – Mar 2026'
order: 4
tech: ['NestJS', 'TypeScript', 'Socket.IO', 'Google Sheets API', 'Docker']
featured: true
---

A NestJS service that records every new follower of a business's Zalo Official Account (OA) in Google Sheets in real time, and tracks which QR code or campaign (`ref`) brought each follower in.

## API and real-time updates

- Built **4 REST endpoints**: 3 webhook routes sharing one handler, plus a health check.
- Added a **Socket.IO namespace** that pushes follow events live to connected clients.
- Protected incoming webhooks with a secret-header check.

## Reliability

- Failed writes go into a size-limited queue that a cron job retries every minute (up to 10 attempts).
- Repeat events are ignored for 10 minutes.
- A flexible parser handles the many formats of Zalo payloads and timestamps.

## Campaign attribution

Each follow is credited to the right QR code or campaign by checking, in order:

1. the referral code sent with the event
2. a 24-hour per-user session
3. a fallback map set in configuration

## Structure and deployment

- Organized into 2 modules with 6 separate parts (controller, gateway, services, scheduler, parser) and about 11 validated settings, with unit tests for the parser.
- Packaged as a slim Docker image that runs as a non-root user and ships only compiled code.
- Automated deployment to the client's server with a 7-step PowerShell script: build → export → upload → load → run.
