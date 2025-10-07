## Learn Chess (minimal)

Minimal Next.js app scaffolded for a simple chess learning experience.

### Development

```bash
pnpm dev
```

Open `http://localhost:3000`.

### Scripts

- `pnpm dev`: run dev server
- `pnpm build`: production build
- `pnpm start`: start production server
- `pnpm lint`: run eslint

### Structure

- `src/app/layout.tsx`: app shell and metadata
- `src/app/page.tsx`: minimal landing page
- `src/app/globals.css`: base styles (Tailwind v4)

### Next steps

- Add a chessboard component and lesson pages under `src/app/(learn)/`.
- Define types and utilities under `src/lib/` as needed.
