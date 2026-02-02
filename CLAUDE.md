# Claude Context

Express.js web service built with TypeScript.

## Tech Stack

- Node.js with Express 5
- TypeScript
- tsx for development (hot reload)
- pino for logging (pino-http for request logs)

## Commands

- `npm run dev` - Development with hot reload
- `npm run build` - Compile TypeScript
- `npm start` - Run production build

## Project Structure

- `src/index.ts` - Main Express app with middleware and error handling
- `src/logger.ts` - Pino logger instance (pretty in dev, JSON in prod)
- `src/routes/` - Route modules (add new routes here)
- `dist/` - Compiled output (gitignored)

## Conventions

- Use TypeScript for all source files
- Place routes in `src/routes/` and import in `src/routes/index.ts`
- Use async/await for async operations
- Use `logger` from `./logger` instead of `console.log`
- Error responses: `{ error: "message" }`
- Success responses: JSON objects

## Adding New Routes

1. Create `src/routes/yourRoute.ts`
2. Import and use in `src/routes/index.ts`:
   ```typescript
   import yourRoute from './yourRoute';
   router.use('/your-path', yourRoute);
   ```
