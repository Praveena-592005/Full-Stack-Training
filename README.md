# Full Stack Auth Demo

This repository contains a small full-stack authentication demo with:

- React frontend built with Vite
- Express backend with JWT authentication
- Sign-up endpoint storing users in a JSON database
- Login endpoint returning a JWT
- Protected dashboard page behind an auth guard
- Instructions for setup and VS Code Copilot usage

## Folder structure

- `client/` - React frontend app
- `server/` - Express backend API
- `server/data/db.json` - Simple demo user store

## Setup

1. Open this folder in Visual Studio Code.
2. Install dependencies:
   - `cd server && npm install`
   - `cd ../client && npm install`
3. Start both servers:
   - Backend: `cd server && npm run dev`
   - Frontend: `cd client && npm run dev`
4. Open the client at `http://localhost:5173`.

## Authentication flow

- Sign up creates a user and returns a JWT.
- Login validates credentials and returns a JWT.
- The dashboard page calls `/api/dummy` with `Authorization: Bearer <token>`.
- If the token is missing or invalid, the user is redirected to login.

## VS Code Copilot

To use GitHub Copilot in VS Code:

1. Install the GitHub Copilot extension.
2. Sign in with your GitHub account.
3. Use Copilot suggestions while editing files.
4. Open this repo and start editing `client/src` or `server/index.js`.

## Git commit guidance

Create a commit after setup:

```bash
git init
git add .
git commit -m "Initialize full-stack auth demo with sign-up, login, and protected dashboard"
```

## Notes

- This demo uses a JSON file for storage. For production, use a real database.
- The server uses a demo JWT secret. In production, store secrets in environment variables.
