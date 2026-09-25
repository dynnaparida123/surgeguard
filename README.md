# SurgeGuard

SurgeGuard is an AI-powered disaster risk, infrastructure vulnerability, and citizen reporting system for coastal APAC regions. It combines geospatial intelligence, weather feeds, multimodal AI checks, and citizen observations to shift disaster response from recovery to proactive early warning and infrastructure hardening.

## Architecture

- Frontend: Next.js + React + TypeScript + Tailwind
- Backend: Next.js API routes and server-side services
- Database: PostgreSQL + Prisma
- Caching: Redis
- Authentication: Auth.js or JWT-based session layer in demo mode
- Geospatial: Google Maps + Google Earth Engine abstraction
- AI: Google Gemini via server-side APIs only
- Storage: object-storage-ready uploads and signed URLs

## Local development

```bash
npm install
cp .env.example .env.local
npx prisma generate
npx prisma db push
npm run dev
```

Open http://localhost:3000

## Database migration

```bash
npx prisma migrate dev --name init
```

## Seed data

```bash
npm run db:seed
```

## Production deployment

1. Create a PostgreSQL database.
2. Configure environment variables.
3. Deploy to Vercel or another Node-compatible hosting service.
4. Run Prisma migrations and seed data in the target environment.

## Demo mode

Set `DEMO_MODE=true` to enable the built-in fictional data set around Puri, Bhubaneswar, Cuttack, and the Bay of Bengal. The application clearly labels all demo observations.

## Google Maps setup

1. Create a Google Cloud project.
2. Enable Maps JavaScript API and Geocoding API.
3. Add `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` to your environment.

## Google Earth Engine setup

1. Enable Earth Engine API for your project.
2. Set `GOOGLE_CLOUD_PROJECT` and `EARTH_ENGINE_PROJECT`.
3. Keep the service account private key out of the frontend.

## Gemini setup

1. Create a Gemini API key.
2. Set `GEMINI_API_KEY` and optionally `GEMINI_MODEL`.
3. Keep all AI processing server-side.

## Environment variables

See `.env.example`.
