# HVAC Conversion Site

Greenfield Next.js landing page for a local HVAC contractor, designed for Vercel deployment.

## Run locally

```bash
bun install
bun run dev
```

Then open `http://localhost:3000`.

## Routes

The site includes the home conversion page plus dedicated routes for the full service taxonomy, city landing pages, financing, VIP maintenance, about/team/reviews, emergency service, blog articles, contact, and legal pages.

## Preview city copy

Use a query parameter to preview dynamic geo copy:

```text
http://localhost:3000/?city=Round-Rock
```

## Build for Vercel

```bash
bun run build
bun run start
```

Import the repository into Vercel or run `vercel` from the project root. No special Vercel configuration is required for this Next.js app.
