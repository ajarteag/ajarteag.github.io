# Alejandro Arteaga - Personal Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This site showcases my experience in robotics, computer engineering, and software development.

🌐 **Live Site**: [ajarteag.github.io](https://ajarteag.github.io)

[![Deploy static content to Pages](https://github.com/matthewyjiang/matthewyjiang.github.io/actions/workflows/main.yml/badge.svg)](https://github.com/matthewyjiang/matthewyjiang.github.io/actions/workflows/main.yml)

## Tech Stack

- **Frontend**: React 18.3.1 with TypeScript
- **Build Tool**: Vite 5.4.2
- **Styling**: Tailwind CSS 3.4.1
- **UI Components**: Flowbite React 0.10.2
- **Icons**: Lucide React 0.344.0
- **Routing**: React Router DOM 7.1.5
- **Fonts**: Ubuntu Mono (primary), IBM Plex Mono (extended)

## Development

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
git clone https://github.com/ajarteag/ajarteag.github.io.git
cd ajarteag.github.io
npm install
```

### Development Server

```bash
npm run dev
```

Opens development server at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

Generates optimized build in `/dist` directory

### Preview Production Build

```bash
npm run preview
```

### Linting

```bash
npm run lint
```

## Deployment

The site is automatically deployed to GitHub Pages using GitHub Actions:

- **Trigger**: Push to `main` branch
- **Build**: Node.js 20 with npm caching
- **Deploy**: Static files served from `/dist` directory
- **URL**: [ajarteag.github.io](https://ajarteag.github.io)

## Citation

This site is based off of [Matthew Jiang](https://matthewyjiang.com/)'s [Personal Portfolio Website](https://github.com/matthewyjiang/matthewyjiang.github.io).
