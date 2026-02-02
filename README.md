# Render App

Express.js web service with TypeScript.

## Setup

```bash
npm install
```

## Development

```bash
npm run dev    # Start with hot reload
```

Server runs at http://localhost:3000

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with hot reload |
| `npm run build` | Compile TypeScript |
| `npm start` | Run compiled code |

## API Endpoints

- `GET /` - Root endpoint
- `GET /health` - Health check

## Project Structure

```
src/
├── index.ts       # App entry point
└── routes/
    └── index.ts   # Route definitions
```
