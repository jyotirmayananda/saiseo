# Sai SEO Solution

Educational institute website built with Next.js 14, TypeScript, Tailwind CSS, Framer Motion, Prisma, and JWT auth.

## Features

- **Public homepage** — animated hero, courses, services, branches, ISO badge
- **Result lookup** — search by roll number at `/result`
- **Admin panel** — protected CRUD for students and results at `/admin`

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- Prisma ORM + SQLite (local) / PostgreSQL (production)
- JWT-based admin authentication
- react-hook-form + zod

## Getting Started

```bash
npm install
cp .env.example .env
npm run db:migrate
npm run db:seed
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Default Admin Credentials

- Email: `admin@saiseo.com`
- Password: `admin123`

### Sample Roll Numbers

- `SEO2024001` — Rahul Kumar (PGDCA, Pass)
- `SEO2024002` — Priya Das (DCA, Pass)
- `SEO2024003` — Amit Patnaik (Python, Fail)

## Deploy to Netlify

1. Push to GitHub and connect the repo in Netlify
2. **Remove** manual publish directory `.next` in Netlify UI — use `netlify.toml` (includes `@netlify/plugin-nextjs`)
3. Add these **Environment variables** in Netlify → Site settings → Environment variables:

| Variable | Example |
|---|---|
| `DATABASE_URL` | PostgreSQL URL from [Neon](https://neon.tech) or Supabase |
| `JWT_SECRET` | Random secure string |
| `ADMIN_EMAIL` | `admin@saiseo.com` |
| `ADMIN_PASSWORD` | Your admin password |

4. Change `prisma/schema.prisma` datasource to `postgresql` for production (SQLite does not work on Netlify)
5. Run migrations against your production DB: `npx prisma migrate deploy`
6. Seed admin user: `npm run db:seed`

## Deploy to Vercel

1. Push to GitHub
2. Import project in Vercel
3. Set environment variables: `DATABASE_URL`, `JWT_SECRET`, `ADMIN_EMAIL`, `ADMIN_PASSWORD`
4. Use a PostgreSQL database (e.g. Vercel Postgres, Supabase, Neon)
5. Run migrations: `npx prisma migrate deploy`

## Project Structure

```
app/
  (public)/          # Homepage & result lookup
  admin/             # Login & protected panel
  api/               # REST API routes
components/
  ui/                # Reusable UI components
  home/              # Homepage sections
  admin/             # Admin components
lib/                 # Prisma, auth, validations
prisma/              # Database schema & seed
```
