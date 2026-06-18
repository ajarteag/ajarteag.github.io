# Portfolio Project Guidelines

## Agent Environment Setup
* You are operating inside an isolated Docker Sandbox. You have permission to install packages, run builds, and execute terminal commands.
* **CRITICAL:** When starting any local development server (e.g., Vite, Python HTTP server, Node), you MUST bind the host to `0.0.0.0` (not `localhost` or `127.0.0.1`). This ensures the port is exposed from the sandbox so I can view the website on my host browser.

## Personal Context (Portfolio Content)
When writing copy, generating sections, or filling in project details, use the following biographical data:
* **Name:** Alejandro Arteaga
* **Current Status:** MS in Computer Science (Artificial Intelligence and Robotics) at the University of Southern California (USC).
* **Undergraduate:** BS in Astrophysics from Carnegie Mellon University.
* **Experience:** Software Engineer Intern at Qualcomm (Modem Software, Summer 2024).
* **Key Projects:** Software Lead for USC Autonomous Underwater Vehicle Design Team (Robosub SC) preparing for the 2026 competition. 
* **Technical Stack Focus:** C++, Python, ROS 2 (Humble), CUDA/Triton, Linux (Arch/Ubuntu), and Neovim workflows.

## Workflow & Coding Standards
* Write clean, semantic, and accessible code.
* Prefer minimal, lightweight dependencies. If a standard library or native web API can accomplish the task, use it instead of installing a new package.
* Before making sweeping architectural changes, outline your plan in the terminal and ask for my confirmation.
* Format code cleanly and ensure responsive design principles are applied from the start.

## Development & Browser Testing Environment
* **Framework:** Astro (Static Site Generator with MDX)
* **Dev Server Port:** 4321 (Must expose via `0.0.0.0`)
* **Playwright Automation:** When using Playwright MCP to inspect layout or components, ensure the dev server is running concurrently. Use headless execution since this is a Docker container.

## Common Commands
* Install Dependencies: `npm install`
* Start Dev Server: `npm run dev -- --host 0.0.0.0`
* Build Site: `npm run build`
* Preview Production Build: `npm run preview -- --host 0.0.0.0`
* Run Playwright Tests/Inspections: `npx playwright test`
