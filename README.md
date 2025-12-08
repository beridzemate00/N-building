# N-building — Renovation & Home Services (Full Stack) v2

A lightweight full-stack website for **N-building** focused on:
- Painting
- Plastering & surface repair
- Removing/adjusting walls
- Door repairs
- Electrical
- Plumbing

Design: clean **blue/white**, modern, fast-loading, with a lightweight 3D hero.

## v2 adds
- Language switcher: **English / ქართული / Русский** (no heavy i18n library)
- Improved Projects gallery with tag filters
- Floating quick-contact buttons (Phone + WhatsApp placeholders)
- Tiny Admin page to view contact requests (demo token-based)

## Tech
- Frontend: React + Vite + TypeScript + Tailwind, Framer Motion, React Router
- 3D: @react-three/fiber + drei
- Backend: Express + TypeScript + Zod
- Storage: In-memory (upgrade to DB later)

## Quick start

### Backend
```bash
cd backend
cp .env.example .env
npm install
npm run dev
```

### Frontend
```bash
cd ../frontend
cp .env.example .env
npm install
npm run dev
```

Open:
- Frontend: http://localhost:5173
- API health: http://localhost:5000/health
- Admin page: http://localhost:5173/admin

## Admin (demo)
- Backend checks `ADMIN_TOKEN` (default `demo-admin`).
- Frontend uses `VITE_ADMIN_TOKEN` to access the admin endpoint.

This is a lightweight demo mechanism. For production, use proper authentication.

## Customize
Update these placeholders:
- `frontend/src/config/brand.ts`
  - phone number
  - WhatsApp number
  - service areas
- `backend/src/data/projects.ts`
  - real projects & фото
