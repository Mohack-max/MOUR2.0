# Deployment Guide

This project is a Vite + React + TypeScript app, ready for static hosting.

## 1. Build the Project

```
npm install
npm run build
```

The production-ready files will be in the `dist/` folder.

---

## 2. Deploy to AWS S3 + CloudFront

### a. Create an S3 Bucket

- Go to AWS S3 console
- Create a new bucket (e.g., `my-healthmour-site`)
- Uncheck "Block all public access" (for static hosting)

### b. Upload Files

- Upload all files from the `dist/` folder to your S3 bucket

### c. Enable Static Website Hosting

- In bucket properties, enable static website hosting
- Set index document to `index.html`

### d. (Optional) Set up CloudFront for CDN

- Create a new CloudFront distribution
- Set the origin to your S3 bucket website endpoint
- Update your domain DNS to point to the CloudFront distribution

---

## 3. Deploy to Hostinger (or Any Static Host)

- Log in to your hosting control panel
- Go to File Manager or FTP
- Upload all files from the `dist/` folder to your public_html (or equivalent) directory
- Make sure `index.html` is at the root of your site

---

## 4. Notes

- All images and static assets should be in the `public/images/` directory and referenced as `/images/your-image.png` in code.
- If you use a custom domain, update DNS settings as needed.
- For other static hosts (Netlify, Vercel, GitHub Pages), follow their guides for static site deployment.

---

## 5. Troubleshooting

- If images or assets do not load, check that paths start with `/images/` and files exist in `public/images/`.
- If you see a blank page, make sure you uploaded the contents of `dist/`, not the folder itself.
- For SPA routing (React Router), ensure your host redirects all routes to `index.html` (S3: set error document to `index.html`).

---

## Supabase SQL Schema for Private Documents Feature

```sql
-- Table: private_documents
create table if not exists private_documents (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  file_url text not null,
  created_at timestamp with time zone default timezone('utc', now())
);

-- Table: document_access_requests
create table if not exists document_access_requests (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  document_id uuid references private_documents(id) on delete cascade,
  reason text,
  status text check (status in ('pending', 'approved', 'denied')) default 'pending',
  created_at timestamp with time zone default timezone('utc', now())
);

-- Table: document_access_permissions
create table if not exists document_access_permissions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  document_id uuid references private_documents(id) on delete cascade,
  granted_at timestamp with time zone default timezone('utc', now())
);
```

---

## Supabase SQL for Admin Role Support

```sql
-- Add is_admin flag to profiles table
alter table profiles add column if not exists is_admin boolean default false;

-- To create an admin user, sign up via the app, then run:
update profiles set is_admin = true where email = 'admin@example.com';
```

- Only users with is_admin = true will be able to access the admin dashboard.
