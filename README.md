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
