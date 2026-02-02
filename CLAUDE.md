# Claude Context

Express.js web service built with TypeScript using MVC architecture.

## Tech Stack

- Node.js with Express 5
- TypeScript
- tsx for development (hot reload)
- morgan for request logging

## Commands

- `npm run dev` - Development with hot reload
- `npm run build` - Compile TypeScript
- `npm start` - Run production build

## Project Structure (MVC)

```
src/
├── index.ts              # App entry, middleware setup
├── controllers/          # Request handlers (business logic)
├── models/               # Data models and storage
├── middleware/           # Custom middleware (errors, auth, etc.)
└── routes/               # URL routing
```

## Conventions

- Use TypeScript for all source files
- Controllers handle request/response logic
- Models define data structures and storage
- Routes map URLs to controllers
- Error responses: `{ error: "message" }`
- Success responses: JSON objects

## Adding a New Resource

1. Create model: `src/models/foo.model.ts`
2. Create controller: `src/controllers/foo.controller.ts`
3. Create routes: `src/routes/foo.routes.ts`
4. Register in `src/routes/index.ts`:
   ```typescript
   import fooRoutes from './foo.routes';
   router.use('/foo', fooRoutes);
   ```

## Existing CRUD Example

See `item.controller.ts` for a complete CRUD implementation with:
- List all (GET /)
- Get by ID (GET /:id)
- Create (POST /)
- Update (PUT /:id)
- Delete (DELETE /:id)
