# friday-jarvis-core

Production-ready monorepo foundation for a FRIDAY-style AI core.

## Stack
- Next.js 15 App Router + TypeScript
- Tailwind + shadcn/ui-ready component architecture
- `packages/core` for modular agent + tools
- Prisma + PostgreSQL/Supabase
- Upstash Redis (rate limiting/cache placeholder)
- NextAuth-ready auth boundary

## Run
```bash
npm install
npm run dev
```

## API
- `GET /api/health`
- `POST /api/chat`
- `GET /api/voice/realtime`

## Architecture
- `apps/web`: UI + API routes
- `packages/core`: agent orchestration, memory, tools, guards
- `prisma`: relational schema
