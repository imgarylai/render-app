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
├── logger.ts      # Pino logger instance
└── routes/
    └── index.ts   # Route definitions
```

## Logging

Uses [pino](https://github.com/pinojs/pino) for structured logging.

```typescript
import logger from './logger';

logger.info('message');
logger.warn('warning');
logger.error('error');
logger.debug('debug');
```

**Environment variables:**
- `LOG_LEVEL` - `debug`, `info`, `warn`, `error` (default: `info`)
- `NODE_ENV=production` - Outputs JSON instead of pretty format
