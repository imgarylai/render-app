# Render App

Express.js web service with TypeScript using MVC architecture.

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

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | / | Root endpoint |
| GET | /health | Health check |
| GET | /items | List all items |
| GET | /items/:id | Get item by ID |
| POST | /items | Create item |
| PUT | /items/:id | Update item |
| DELETE | /items/:id | Delete item |

## Project Structure

```
src/
├── index.ts                  # App entry point
├── controllers/              # Request handlers
│   ├── health.controller.ts
│   ├── home.controller.ts
│   └── item.controller.ts
├── models/                   # Data models
│   └── item.model.ts
├── middleware/               # Express middleware
│   └── error.middleware.ts
└── routes/                   # Route definitions
    ├── index.ts
    └── item.routes.ts
```

## Example Requests

```bash
# Create item
curl -X POST http://localhost:3000/items \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","description":"A test item"}'

# List items
curl http://localhost:3000/items

# Update item
curl -X PUT http://localhost:3000/items/1 \
  -H "Content-Type: application/json" \
  -d '{"name":"Updated"}'

# Delete item
curl -X DELETE http://localhost:3000/items/1
```
