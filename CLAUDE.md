# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Claude Code for Marketers is an Astro-based blog teaching marketers how to use Claude Code. The site uses a terminal-inspired design with light/dark mode support.

## Commands

```bash
npm run dev      # Start dev server (localhost:4321)
npm run build    # Build to ./dist/
npm run preview  # Preview production build
```

## Architecture

### Content System
- Blog posts are Markdown files in `src/content/blog/`
- Content schema defined in `src/content.config.ts` with Zod validation
- Required frontmatter: `title`, `description`, `pubDate`
- Optional: `updatedDate`, `author`, `image`, `imageAlt`, `tags`, `categories`, `draft`

### Layout Hierarchy
- `BaseLayout.astro` - Global layout with header, footer, theme toggle, CSS variables
- `BlogPost.astro` - Article layout (wraps BaseLayout)

### Theming
- Light/dark mode via `data-theme` attribute on `<html>`
- CSS variables defined in BaseLayout's `:root` and `[data-theme="dark"]`
- Theme preference persisted to localStorage
- Key colors: `--color-accent` (terracotta #DA7756), `--color-bg`, `--color-text`

### Fonts
- `--font-mono`: JetBrains Mono (headings, code, UI elements)
- `--font-body`: Source Serif 4 (body text)

## Deployment

Static site deployed to Cloudflare Pages. Site URL configured in `astro.config.mjs`.
