# Portfolio Project Guidelines

## Agent Environment Setup
* You are operating inside an isolated Docker Sandbox. You have permission to install packages, run builds, and execute terminal commands.
* **CRITICAL:** When starting any local development server (e.g., Vite, Python HTTP server, Node), you MUST bind the host to `0.0.0.0` (not `localhost` or `127.0.0.1`). This ensures the port is exposed from the sandbox so I can view the website on my host browser.

## Personal Context (Portfolio Content)
When writing copy, generating sections, or filling in project details, use the following biographical data:
* **Name:** Alejandro Arteaga
* **Current Status:** Pursuing a Master of Science in Computer Science, Intelligent Robotics at the University of Southern California (USC), Viterbi School of Engineering (Expected Dec 2026).
* **Undergraduate Degree:** Bachelor of Science in Physics/Astrophysics with a Minor in Computer Science from Carnegie Mellon University (May 2024).
* **Experience:**
  * Software Infrastructure Intern at NVIDIA Corporation for the Autonomous Vehicles (AV), Verification & Validation (V&V) Team (May 2026 - Present).
  * Software Engineer Intern at Qualcomm Technologies Inc for the Modem Software, 5G Access Stratum Automation Integration & Test team (May 2025 - Aug 2025).
  * Robotics Software Engineer for the CMU Autonomous Underwater Vehicle Design Team, TartanAUV (Sep 2023 - Aug 2024).
  * Software Engineer Intern at National Instruments on the Telemetry Squad (May 2023 - Aug 2023).
  * Scientific Computing Research Assistant for the Mellon College of Science, Department of Physics, Neutrino Physics Group (May 2021 - May 2022).
* **Key Projects:**
  * Performance Analysis and Optimization of Direct Lidar-Inertial Odometry (DLIO) for Edge Computing, benchmarking real-time performance on an NVIDIA Jetson AGX Orin.
  * Multimodal GenAI Personal Nutrition Assistant developed during the Qualcomm Edge AI Developer Hackathon, leveraging on-device inference and RAG.
* **Technical Stack Focus:** Python, C/C++, Linux, ROS, NVIDIA JetPack, Foxglove, Arduino, Raspberry Pi, OpenCV, PyTorch, UV, Docker, K3s Kubernetes, Jenkins, MongoDB, MySQL, PostgreSQL, SQLite, Apache Spark, OpenMPI, OpenMP, and OpenACC.
* **Resume File Location:** A downloadable PDF of my resume is stored at `public/Resume_AlejandroArteaga.pdf`. When creating download buttons, embedded viewers, or links to the resume, always use the `href` path `/Resume_AlejandroArteaga.pdf`.

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
