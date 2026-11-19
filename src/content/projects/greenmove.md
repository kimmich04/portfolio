---
title: 'GreenMove — Least Emission Zone Routing Engine'
description: 'Thesis research: a multi-criteria route planning service that turns raw OpenStreetMap data into a routable graph and benchmarks 5 shortest-path algorithms.'
company: 'Thesis research'
role: 'Backend Developer · Team of 4'
period: '2026'
badge: 'Thesis'
order: 6
tech: ['Python', 'FastAPI', 'pyosmium', 'OpenStreetMap']
featured: true
---

A multi-criteria route planning service, built as my thesis research project in a team of 4. I worked on the backend: the data pipeline, the routing algorithms and the API.

## Data pipeline

- Designed and built an end-to-end pipeline that transforms a **330 MB raw OpenStreetMap extract** into a routable, multi-modal road graph.
- Used a custom **two-pass spatial extraction algorithm** (pyosmium) to preserve full graph topology at scale.

## Routing algorithms

Implemented and benchmarked **5 shortest-path algorithms** on a **10k+ edge graph**:

- Dijkstra
- A\* with admissible heuristics
- Yen's K-shortest-paths
- Constrained Shortest Path
- Bi-objective A\* / Pareto search

I chose between A\* and plain Dijkstra per use case, based on heuristic reuse and validity trade-offs.

## Routing API

- Built a **FastAPI** routing API with k-d tree nearest-neighbor point snapping.
- Multi-criteria queries: fastest, shortest, constrained and Pareto-optimal routes, with sub-second responses.
