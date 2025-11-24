# Prompt Booter

Improve rough ideas into clear, structured, high-quality prompts for AI models like ChatGPT, Claude, and Gemini.

A responsive web app built with Next.js, TypeScript, Tailwind CSS, and the OpenRouter API.

## Screenshots

![Landing Page](/landing.png)
![Prompt Improver](/improve.png)

## Overview

Prompt Booter allows users to enter rough text and automatically transform it into a stronger, clearer, and better-structured prompt using AI. The `/improve` page sends the text to the backend `/api/improve` endpoint, which returns markdown-formatted results ready to copy.

## Features

* Enhance unstructured prompts into refined output
* Markdown rendering with react-markdown
* One-click copy functionality
* `/api/improve` POST endpoint
* Gradient glass UI design
* Mobile-friendly responsive layout
* Shared header and footer layout

## Tech Stack

* Next.js (App Router)
* TypeScript
* Tailwind CSS v4
* React Markdown
* Node.js 18+
* OpenRouter API

## Installation

### Clone the repository

```bash
git clone https://github.com/your-username/prompt-booter.git
cd prompt-booter
```

### Install dependencies

```bash
npm install
```

### Run development mode

```bash
npm run dev
```

### Open in browser

```
http://localhost:3000
```

## Environment Variables

Create `.env.local` in the project root:

```env
OPENROUTER_API_KEY=your_api_key_here
```

## Project Structure

```
prompt-booter/
├── app/
│   ├── page.tsx
│   ├── improve/page.tsx
│   ├── api/improve/route.ts
│   ├── layout.tsx
│   └── globals.css
│
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── PromptImprover.tsx
│
├── public/
│   └── robotHead.png
│
├── .env.local (ignored)
├── package.json
├── tsconfig.json
├── postcss.config.mjs
└── next.config.ts
```

## Scripts

```bash
npm run dev
npm run build
npm start
```
