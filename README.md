### SURGEGUARD

AI-powered disaster risk, infrastructure vulnerability, and citizen reporting platform for coastal APAC resilience.

## Overview

SURGEGUARD combines weather, satellite, infrastructure, and citizen reporting intelligence to move disaster response from reactive recovery to preventive action.

## Quick start

```bash
npm install
cp .env.example .env.local
npx prisma generate
npx prisma db push
npm run dev
```

## Environment variables

See `.env.example` for the full configuration.

## Demo mode

To run with mock data without external services, set:

```bash
DEMO_MODE=true
```

## Deployment

This app is built to be Vercel-compatible and expects Postgres, external weather/satellite providers, Google Maps, and Gemini configured via environment variables.

## Database

```bash
npx prisma migrate dev --name init
npm run db:seed
```

## Google Maps

1. Create a Google Cloud project.
2. Enable the Maps JavaScript API and Geocoding API.
3. Add `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` to `.env.local`.

## Google Earth Engine

1. Configure a GCP project.
2. Enable Earth Engine API.
3. Add `GOOGLE_CLOUD_PROJECT` and `EARTH_ENGINE_PROJECT` to your environment.
4. Store service account credentials in a JSON path referenced by `GOOGLE_APPLICATION_CREDENTIALS`.

## Gemini / AI

1. Create a Gemini API key.
2. Set `GEMINI_API_KEY` and optionally `GEMINI_MODEL` in `.env.local`.
3. Every AI request is processed server-side only.

## Local development

```bash
npm install
cp .env.example .env.local
npm run db:generate
npm run db:push
npm run dev
```

## Production deployment

- Deploy the app to Vercel.
- Use a managed Postgres database for `DATABASE_URL`.
- Add public storage bucket credentials for uploaded images.
- Configure Redis if using caching or rate limiting.

## Architecture

- `app/`: routing and page-level UI
- `components/`: reusable visual components
- `lib/`: AI, weather, geospatial, scoring, utilities
- `prisma/`: schema and seed scripts
- `public/`: static assets

## Security

- API keys are kept server-side.
- AI output is validated using Zod schemas.
- Uploaded image validation and duplicate checks are performed before public publication.
- Role-checks and admin routes are expected to validate session data before sensitive actions.
