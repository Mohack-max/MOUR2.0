This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start development server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```
   Output will be in the `dist/` folder.

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions (AWS, Hostinger, and more).

## Environment variables 🔒

Create a `.env` file in the project root with the following variables (or use your hosting provider's environment configuration):

- `VITE_SUPABASE_URL` — your Supabase project URL
- `VITE_SUPABASE_ANON_KEY` — your Supabase anon/public key
- `VITE_ADMIN_EMAIL` — optional admin email used for local admin login (recommended to set a real admin or use role-based checks)

Example: create a `.env` or `.env.local` file and add:

```
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
VITE_ADMIN_EMAIL=admin@example.com
```

