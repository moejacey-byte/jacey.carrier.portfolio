# Optional backend

GitHub Pages can host the main portfolio but **cannot run Node/Express server code**.

This folder is therefore optional. It provides a real contact API if you later deploy a small backend to Render, Railway, Fly.io, Vercel Functions, or another server-capable host.

## Local run

```bash
cd backend
npm install
cp .env.example .env
# add your SMTP credentials
npm start
```

The API endpoint is:

`POST /api/contact`

Body:

```json
{
  "name": "Example",
  "email": "person@example.com",
  "message": "Hello Jacey!"
}
```

The current GitHub Pages site does not depend on this folder.
