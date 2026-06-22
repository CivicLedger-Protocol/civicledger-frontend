# CivicLedger — Web application (Next.js / WhoPays-grade README)

**CivicLedger Web** — citizen-readable transparency, agency-facing deployment narrative, and the roadmap for milestone-based public spending on Soroban.

---

## 🎯 What is this app?

This frontend makes **public procurement and disbursement** understandable: what gets published on-chain, how milestones unlock funds, and how vendors earn reputation. Agencies and watchdogs are primary readers—the UI must stay **accessible**, **fast**, and honest about delivery status via [`SITE_MAP`](../../docs/SITE_MAP.md).

---

## ❓ Problems the **whole protocol** tackles

From the [root README](../../README.md):

- Citizens and oversight bodies lack **timely, trustworthy** visibility into tenders and outcomes.
- Donor and taxpayer funds often move through **opaque** milestones with weak proof of delivery.
- Vendor selection rarely produces **portable reputation**, encouraging repeated failures.

---

## ✅ Goals this frontend supports

- Publish tender lifecycle events so awards are **tamper-evident**.
- Hold funds in **milestone escrow** until objective evidence is accepted.
- Surface **vendor performance** and disputes for future procurement decisions.
- Support **agency pilots** without forcing one vendor’s closed database as source of truth.

---

## 💡 Why a dedicated **Next.js** frontend?

- **Democratic accountability**: Citizens encounter tenders and spend through the web first.
- **Donor reporting**: NGOs need pages they can link in grant reports (`/solutions`, `/transparency`).
- **Contributor funnel**: `/issues` and `/contact` recruit civic-tech builders.

---

## ✨ Features & surfaces (shipping roadmap)

- **🏛️ Solutions** — agency/donor deployment modules (`/solutions`).
- **🧱 Architecture** — contract boundaries explained for technical reviewers (`/architecture`).
- **🔭 Transparency** — citizen explorer preview (`/transparency`).
- **📌 Issues & contact** — contributor queue and pilot partnerships.
- **🗺️ Site map table** — on `/` via `ExpectedPages`.

---

## 🏗️ Architecture

| Layer | Choice |
| ----- | ------ |
| Framework | **Next.js 15** — App Router, React 19 |
| Language | **TypeScript** (strict) |
| Styling | **CSS variables** in `app/globals.css` — protocol-specific palette |
| Components | `components/expected-pages.tsx` — **site map table** synced with [`docs/SITE_MAP.md`](../../docs/SITE_MAP.md) |
| Data | Static/scaffold today → Server Components + [`../backend/`](../backend/README.md) for authenticated flows |
| Blockchain UX | Wallet demos optional — **RPC/signing secrets stay off this bundle** |

---

## 📁 Project structure

```
apps/web/
├── app/
│   ├── layout.tsx       # Shell: metadata + nav links
│   ├── page.tsx         # Landing + <ExpectedPages /> site map
│   ├── globals.css      # Design tokens / theme
│   └── …                # Feature routes (see route tables below)
├── components/
│   └── expected-pages.tsx
├── next.config.ts
├── package.json
├── tsconfig.json
└── README.md            # ← you are here
```

---

## 🗺️ Routes

### Header navigation

| Route | Label | Notes |
| ----- | ----- | ----- |
| `/solutions` | Solutions | Primary navigation |
| `/architecture` | Architecture | Primary navigation |
| `/transparency` | Transparency | Primary navigation |
| `/roadmap` | Roadmap | Primary navigation |
| `/issues` | Issues | Primary navigation |
| `/docs` | Docs | Primary navigation |
| `/contact` | Contact | Primary navigation |

### Full backlog (canonical)

Authoritative **purpose + status**: [`../../docs/SITE_MAP.md`](../../docs/SITE_MAP.md).

| Route | Purpose | Status |
| ----- | ------- | ------ |
| `/` | Strategic landing + site map | Scaffold * |
| `/solutions` | Agency and donor deployment modules | Scaffold * |
| `/architecture` | Contract boundaries | Scaffold * |
| `/transparency` | Citizen-facing explorer preview | Planned |
| `/roadmap` | Milestone execution | Scaffold * |
| `/issues` | Contributor queue | Scaffold * |
| `/docs` | Integration and governance docs | Scaffold * |
| `/contact` | Pilot partnerships | Scaffold * |

The **Expected pages** section on **`/`** mirrors this table so visitors see delivery honesty without opening GitHub.

---

## 🚀 Quick start

### Prerequisites

- **Node.js** 20.x or **22.x** (LTS)
- npm (pnpm/yarn OK if your org standardizes)

### Install & run (dev)

```bash
cd apps/web
npm install
npm run dev
```

Open **http://localhost:3000**

### Run **with** the API (integration dev)

```bash
# Terminal A — backend
cd ../backend && npm install && cp .env.example .env && npm run dev

# Terminal B — web (this folder)
cd ../web && npm run dev
```

Match [`../backend/README.md`](../backend/README.md) CORS origin ↔ Next origin.

---

## 📜 Available scripts

| Command | Purpose |
| ------- | ------- |
| `npm run dev` | Dev server + hot reload |
| `npm run build` | Production build |
| `npm run start` | Serve production output |
| `npm run lint` | ESLint (`next/core-web-vitals`) |

---

## 🔐 Environment variables

### Baseline

Static scaffold needs **no secrets**. Use `.env.local` (gitignored) for optional public config.

### Planned **browser-safe** vars (`NEXT_PUBLIC_*` only)

Never put private keys or RPC URLs here.

| Variable | Example | Purpose |
| -------- | ------- | ------- |
| `NEXT_PUBLIC_APP_ENV` | `preview` / `production` | Feature flags for experimental explorer. |
| `NEXT_PUBLIC_BACKEND_URL` | `https://…` | API for authenticated agency tools. |

---

## 🔗 Integration contract

- **REST**: Call [`apps/backend`](../backend/README.md) under `/api/v1/*` from Route Handlers or authenticated clients—never ship server secrets to `NEXT_PUBLIC_*`.
- **Soroban**: Demonstrate wallet flows with **test keys** only; production signing patterns belong in backend or secure wallets.
- **Contracts**: Rules live in [`../../contracts/`](../../contracts/) — UI reflects state via Horizon/indexers/backend.

---

## 🧪 Testing & quality gates

```bash
npm run lint
npm run build
```

Fix all ESLint + TypeScript errors before merging.

---

## 🚢 Deployment (e.g. Vercel / Netlify / Cloudflare Pages)

1. Set **build command**: `npm run build`
2. Set **output**: Next.js default (`.next`)
3. Configure **`NEXT_PUBLIC_*`** env vars per environment
4. Point **`NEXT_PUBLIC_BACKEND_URL`** at your deployed API
5. Enable **preview deployments** for grant demo links

---

## 🤝 Contributing

See [`../../CONTRIBUTING.md`](../../CONTRIBUTING.md). UI changes should stay aligned with [`../../docs/SITE_MAP.md`](../../docs/SITE_MAP.md).

---

## 📄 License

Match repository license (Apache-2.0 common for OSS grants).

---

## 📞 Support & docs

| Resource | Link |
| -------- | ---- |
| Monorepo overview | [`../../README.md`](../../README.md) |
| Backend API | [`../backend/README.md`](../backend/README.md) |
| Site map | [`../../docs/SITE_MAP.md`](../../docs/SITE_MAP.md) |
| Layout plan | [`../../docs/layout-plan.md`](../../docs/layout-plan.md) |
| Milestones → issues | [`../../docs/milestones-issues.md`](../../docs/milestones-issues.md) |

---

**npm package:** `civicledger-web` · **Slug:** `civicledger` · **Stack:** Next.js App Router

**Ship it.** 🚀
