# Modification Log & Architecture Overview

## Bilingual Site Update (English/French)

### Architecture

- **i18n Setup:** Uses `react-i18next` and `i18next` for internationalization.
- **Translation Files:** Located in `src/lib/locales/en.json` and `src/lib/locales/fr.json`.
- **i18n Initialization:** Handled in `src/lib/i18n.ts`.
- **Language Switcher:** Will be added to the Navbar for toggling between English and French.
- **All UI Text:** Will use translation keys instead of hardcoded strings.

### Modifications

- Installed `react-i18next` and `i18next`.
- Created translation files for English and French.
- Set up i18n initialization.
- Will update all components/pages to use translation keys.
- Will add a language switcher to the Navbar.

---

## [Date: YYYY-MM-DD] Bilingual Translation System Complete

- All user-facing text across pages, modals, and the footer is now internationalized using translation keys.
- English and French translation files (`en.json`, `fr.json`) are fully populated with all required keys.
- The language switcher in the navbar updates the entire site’s text between English and French.
- All new translation keys are documented in the translation files.
- The site is now fully functional in both English and French.

Further changes will be logged here as the implementation progresses.

---

## [Planned] Private Documents Feature

- Add a new page for Private Documents, listing confidential NGO documents.
- Users can request access to documents, providing a reason for their request.
- Admins can approve or deny requests via Supabase dashboard.
- Only approved users can view/download documents.
- Supabase schema will include:
  - `private_documents` table: id, title, description, file_url, created_at
  - `document_access_requests` table: id, user_id, document_id, reason, status (pending/approved/denied), created_at
  - `document_access_permissions` table: id, user_id, document_id, granted_at

---

## [Planned] Professional Admin Dashboard

- Admins log in using Supabase Auth (email/password).
- Only users with `is_admin` flag in the `profiles` table can access the dashboard.
- Admin dashboard accessible via a professional button in the Navbar.
- Admins can upload new private documents (title, description, file upload to Supabase Storage).
- Admins can view, approve, or deny user requests for document access.
- Admin dashboard includes logout functionality.
- All admin actions are protected and only available to authenticated admin users.
