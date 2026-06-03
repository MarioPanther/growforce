<<<<<<< HEAD
# growforce
=======
# Grow Force Next.js Website

Production-ready Next.js App Router website for Grow Force.

The project is configured for static export. `npm run build` generates a deployable `out/` folder at the project root.

## Tech Stack

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- shadcn/Radix UI components

## Local Setup

```sh
npm install
npm run dev
```

Open `http://127.0.0.1:3000` or `http://localhost:3000`.

## Environment Setup

Create `.env.local` from `.env.example`:

```sh
cp .env.example .env.local
```

Required for production SEO:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

Optional:

```env
NEXT_PUBLIC_GA_ID=
NEXT_PUBLIC_GTM_ID=
NEXT_PUBLIC_WHATSAPP_NUMBER=
```

Analytics and GTM scripts load only when their values exist.

## Scripts

```sh
npm run lint
npm run build
```

`npm run lint` uses ESLint directly because the installed Next CLI no longer provides `next lint`.

## Vercel Deployment

1. Push the repository to GitHub, GitLab, or Bitbucket.
2. Import the project in Vercel.
3. Add environment variables from `.env.example`.
4. Use the build command: `npm run build`.
5. Use the output directory: `out`.
6. Deploy.

## Static Hosting Deployment

For Netlify, cPanel, Apache, Nginx, or any static host:

```sh
npm install
npm run build
```

Upload the contents of `out/` to your static hosting document root.

For Apache/cPanel, `trailingSlash: true` is enabled so nested routes export as folders with `index.html`, for example:

```text
out/about/index.html
out/services/hr-consulting/index.html
```

For Nginx, serve the `out/` folder as static files and fall back 404s to `404.html` if your host supports custom errors.

## Node/PM2 Static Serving

If your server requires a Node process, serve the generated `out/` folder with any static file server:

```sh
pm2 serve out 3000 --spa --name grow-force-next
pm2 save
```

## SEO

Site origin is centralized in `src/config/site.ts` and should be set with `NEXT_PUBLIC_SITE_URL`.
It is used for canonical URLs, Open Graph URLs, `metadataBase`, `sitemap.xml`, and `robots.txt`.
>>>>>>> 206498c (Initial Next.js project)
