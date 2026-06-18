# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository State & Architecture

This repo is **Alejandro Arteaga's personal portfolio website**, a static site deployed to GitHub Pages at the user/organization page `ajarteag.github.io` (served from the repo root domain, not a subpath).

**Current state: early scaffold.** The intended stack is described below, but the actual application has not been built yet. As of now the repo contains only:
- `public/Resume_AlejandroArteaga.pdf` — downloadable resume (see Resume path note below)
- `.github/workflows/` — two GitHub Pages deploy workflows
- `README.md` — phase-based roadmap for the build-out
- Leftover Next.js config (`.eslintrc.json`, `.gitignore`) from the previous site that was nuked (commit `027f531`)

There is **no `package.json`, `astro.config.*`, or `src/` yet** — these must be created when scaffolding the Astro project. The `README.md` roadmap (scaffold → About/Education → Projects grid → styling/terminal aesthetic → Pages deploy) is the source of truth for what to build next; the user wants to flesh these phases out collaboratively.

**Intended stack:** Astro (static site generator) with MDX. Build output goes to `./dist`, which both deploy workflows publish.

**Gotchas when scaffolding:**
- `.eslintrc.json` extends `next/core-web-vitals` and `.gitignore` targets `.next/`/`out/` — these are Next.js leftovers. Update them to match Astro (output `dist/`, `node_modules/`) when setting up the project.
- There are **two redundant Pages workflows** that both trigger on push to `main` and both publish `./dist`: `.github/workflows/deploy.yml` and `.github/workflows/main.yml`. They will race under the shared `concurrency: pages` group. Consolidate to one before relying on deploys.
- `deploy.yml` has a bug in the Node setup step: `node-size: 20` should be `node-version: 20`.

## Common Commands

These assume the Astro project has been scaffolded with the scripts below in `package.json`:
- Install dependencies: `npm install`
- Start dev server: `npm run dev -- --host 0.0.0.0` (port 4321)
- Build site: `npm run build` (outputs to `./dist`)
- Preview production build: `npm run preview -- --host 0.0.0.0`
- Run Playwright tests/inspections: `npx playwright test`

## Critical: Dev Server Binding

This runs inside an isolated Docker sandbox. When starting **any** local server (Vite/Astro dev, Python HTTP server, Node), you MUST bind to `0.0.0.0` — not `localhost` or `127.0.0.1` — so the port is exposed from the sandbox and the user can view it in their host browser. For Playwright inspections, run headless and keep the dev server running concurrently.

## Resume Path

The resume PDF lives at `public/Resume_AlejandroArteaga.pdf`. Astro serves `public/` from the site root, so download buttons, embedded viewers, and links must use the `href` path `/Resume_AlejandroArteaga.pdf` (no `/public` prefix).

## Git & Version Control Workflow

- **Never commit or push directly to `main`.**
- Before making code changes, create and check out a branch named `feature/cc/[concise-feature-name]` (e.g. `feature/cc/3d-canvas-setup`).
- Make atomic commits with clear, descriptive messages.
- When a feature is complete and locally tested, push (`git push -u origin <branch>`) and open a PR into `main` with `gh pr create`. Then **stop and hand the PR link to the user** for visual review and manual merge — do not merge yourself.

## Coding Standards

- Write clean, semantic, accessible HTML/CSS; apply responsive design from the start.
- Prefer minimal, lightweight dependencies — use the standard library or a native web API over adding a package when possible.
- Outline the plan and ask for confirmation before sweeping architectural changes.

## Personal Context (for portfolio copy)

Use this biographical data when writing copy or filling in project/section details:
- **Name:** Alejandro Arteaga
- **Current status:** MS in Computer Science, Intelligent Robotics at USC Viterbi (expected Dec 2026).
- **Undergrad:** BS in Physics/Astrophysics, Minor in CS, Carnegie Mellon University (May 2024).
- **Experience:**
  - Software Infrastructure Intern, NVIDIA — Autonomous Vehicles (AV) Verification & Validation (V&V) team (May 2026 – Present).
  - Software Engineer Intern, Qualcomm — Modem Software, 5G Access Stratum Automation Integration & Test (May 2025 – Aug 2025).
  - Robotics Software Engineer, CMU TartanAUV autonomous underwater vehicle team (Sep 2023 – Aug 2024).
  - Software Engineer Intern, National Instruments — Telemetry Squad (May 2023 – Aug 2023).
  - Scientific Computing Research Assistant, CMU Physics Neutrino Group (May 2021 – May 2022).
- **Key projects:**
  - Performance analysis & optimization of Direct Lidar-Inertial Odometry (DLIO) for edge computing, benchmarked on NVIDIA Jetson AGX Orin.
  - Multimodal GenAI Personal Nutrition Assistant (Qualcomm Edge AI Hackathon) using on-device inference and RAG.
- **Technical focus:** Python, C/C++, Linux, ROS, NVIDIA JetPack, Foxglove, Arduino, Raspberry Pi, OpenCV, PyTorch, UV, Docker, K3s Kubernetes, Jenkins, MongoDB, MySQL, PostgreSQL, SQLite, Apache Spark, OpenMPI, OpenMP, OpenACC.
