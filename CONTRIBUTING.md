# Lend And Earn App

This repository contains a small scaffold for the Resource Lender project (web + api + db).

Project layout :

```
resource-lender/
├─ .env
├─ docker-compose.yml
├─ package.json            
├─ README.md
├─ /apps
│  ├─ /web                 
│  │  ├─ package.json
│  │  ├─ index.html
│  │  └─ src/
│  │     ├─ main.tsx
│  │     ├─ App.tsx
│  │     ├─ pages/
│  │     │  ├─ Home.tsx
│  │     │  ├─ ListingCreate.tsx
│  │     │  └─ ListingView.tsx
│  │     ├─ pages/Auth/
│  │     │  ├─ Login.tsx
│  │     │  └─ Signup.tsx
│  │     └─ services/api.ts
│  └─ /api                 
│     ├─ package.json
│     └─ src/
│        ├─ server.ts
│        ├─ app.ts
│        ├─ routes/
│        │  ├─ auth.ts
│        │  ├─ listings.ts
│        │  └─ loans.ts
│        ├─ controllers/
│        │  ├─ auth.controller.ts
│        │  └─ listing.controller.ts
│        ├─ prisma/
│        │  └─ client.ts
│        ├─ middlewares/
│        │  └─ auth.ts
│        └─ utils/
│           └─ validation.ts
└─ /db
   └─ prisma/
      ├─ schema.prisma
      └─ seed.ts
```

- Directory structure and minimal boilerplate files for the web and api apps.
- `db/prisma/schema.prisma` using SQLite and a small set of models (User, Listing, Loan).
- `db/prisma/seed.ts` to create example users.
- Root `.env`, `docker-compose.yml`, and workspace `package.json`.

Note: this is a skeleton — many production concerns (auth, validation, error handling, TypeScript configs and type packages) are left minimal on purpose.

Prerequisites
- Node.js (>=18 recommended)
- A package manager: pnpm (recommended for workspace) or npm/yarn
- (Optional) Docker/Docker Compose if you plan to run with Docker

Recommended quick setup (PowerShell)

1) Install pnpm (optional but recommended for workspaces):

```powershell
npm install -g pnpm
```

2) From repo root, install dependencies for workspace (this will install each `apps/*` package):

3) API: generate Prisma client and seed the DB

```powershell
# generate Prisma client 
npx prisma generate --schema=./db/prisma/schema.prisma

# run seed
node ./db/prisma/seed.ts
```

If you prefer to run seed using ts-node:

```powershell
pnpm add -w -D ts-node typescript
npx ts-node ./db/prisma/seed.ts
```

4) Run dev servers (separate terminals)

API (from repo root using workspace script):

```powershell
pnpm --filter ./apps/api dev
```

Web (from repo root):

```powershell
pnpm --filter ./apps/web dev
```

Or run both using `docker-compose` (if you want to build images/containers):

```powershell
docker-compose up --build
```


