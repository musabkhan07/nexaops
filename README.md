# NexaOps

Production-oriented Next.js + TypeScript starter for NexaOps: AIOps, DevOps, cloud automation, monitoring and AI-powered IT operations.

## Run locally

1. Install Node.js 20+ and PostgreSQL.
2. Copy `.env.example` to `.env` and set `DATABASE_URL`, `ADMIN_EMAIL`, `ADMIN_PASSWORD`, and `AUTH_SECRET`.
3. Run `npm install`.
4. Run `npx prisma migrate dev --name init`.
5. Run `npm run dev` and open http://localhost:3000.
6. Admin: http://localhost:3000/admin/login

## Included
- Responsive premium dark UI
- Home, Services, Solutions, About, Case Studies, Blog, Contact, Consultation
- Lead, contact and consultation APIs with Zod validation
- PostgreSQL/Prisma schema for leads, consultations, services, blog and case studies
- JWT-based admin session protected by middleware
- Admin dashboard and management views
- SEO-ready metadata and clean URLs

## Production hardening
Add a managed email provider, CAPTCHA/rate limiting, transactional notifications, richer admin CRUD editors, calendar integration, audit logs and deployment secrets before production launch.

## GitHub CI/CD

This project includes GitHub Actions workflows:

- `.github/workflows/ci.yml` runs on pushes and pull requests to `main`.
- It installs dependencies, generates Prisma Client, type-checks the app and creates a production build.
- `.github/workflows/deploy-vercel.yml` deploys to Vercel after CI passes on `main`.

### Required GitHub Actions secrets for Vercel deployment

Add these repository secrets under **Settings → Secrets and variables → Actions**:

- `VERCEL_TOKEN`
- `VERCEL_ORG_ID`
- `VERCEL_PROJECT_ID`

Set your production application environment variables in Vercel, including `DATABASE_URL`, `ADMIN_EMAIL`, `ADMIN_PASSWORD`, and `AUTH_SECRET`.

### Git workflow

```bash
git checkout -b feature/my-change
# make changes
git add .
git commit -m "feat: describe the change"
git push -u origin feature/my-change
```

Open a Pull Request on GitHub. CI runs automatically. After merging into `main`, the CD workflow deploys the production build to Vercel.
