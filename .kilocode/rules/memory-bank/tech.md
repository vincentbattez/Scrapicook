# Scrapicook - Technical Stack

## Core Technologies

### Runtime & Language
- **Node.js** with modern ESNext features
- **TypeScript** 5.8+ with strict mode enabled
- **tsx** for development hot-reloading

### Framework
- **Fastify** 5.0 - High-performance web framework
  - `@fastify/autoload` - Automatic route/plugin loading
  - `@fastify/sensible` - Sensible defaults
  - `@fastify/type-provider-json-schema-to-ts` - JSON Schema to TypeScript types

### Web Scraping
- **Playwright** 1.52 - Browser automation for recipe extraction
- Configured via `playwright.config.ts`
- Uses CSS selectors for extracting recipe components

### Database
- **PostgreSQL** - Multi-schema database
- **Prisma** 6.8 - ORM with typed SQL
  - Client generated to `generated/prisma/`
  - Multi-schema support: `source`, `target`, `public`
  - Preview features: `multiSchema`, `typedSql`

### Input Validation
- **AJV** 8.17 - JSON Schema validation with type coercion
- JSON Schemas defined in `src/controllers/*/schemas/`

### Observability
Full OpenTelemetry stack:
- **Traces**: `@opentelemetry/exporter-trace-otlp-http/grpc`
- **Metrics**: `@opentelemetry/exporter-metrics-otlp-http/grpc`, Prometheus exporter
- **Logs**: `@opentelemetry/exporter-logs-otlp-http/grpc`
- **Auto-instrumentation**: Fastify, Pino, FS, Prisma
- Target: Local OTEL collector at `192.168.100.2:4318`

### Fuzzy Matching
- **Fuse.js** 7.1 - Fuzzy search library for ingredient matching

### Logging
- **Pino** (via Fastify) - Fast JSON logger
- **pino-pretty** - Pretty printing for development

## Development Tools

### Code Quality
- **ESLint** 9 with TypeScript plugin
- **Prettier** 3.5 with plugins:
  - `prettier-plugin-sort-imports` - Import sorting
  - `prettier-plugin-multiline-arrays` - Array formatting
- Configuration: `.prettierrc`

### Testing
- **Playwright Test** - E2E and component testing
- Tests located in `tests/` directory
- Uses Playwright's `@playwright/test` runner

### Build & Run
```bash
# Development (hot-reload)
npm run dev          # NODE_ENV=local tsx watch src/server.ts

# Production build
npm run build        # tsc -p tsconfig.json
npm run start        # fastify start -l info src/server.ts

# Code quality
npm run lint         # eslint .
npm run lint:fix     # eslint --fix
npm run format       # prettier --write

# Testing
npm test             # node --test test/**/*.test.js
npx playwright test  # Playwright tests
```

## TypeScript Configuration

Key settings from `tsconfig.json`:
- Target: ESNext
- Module: NodeNext
- Strict mode enabled
- Path aliases for clean imports:
  - `@controllers/*`, `@services/*`, `@models/*`
  - `@extractors/*`, `@converters/*`, `@creators/*`
  - `@factories/*`, `@queries/*`, `@utils/*`

## Environment Variables

Required:
- `DATABASE_URL` - PostgreSQL connection string
- `PORT` - Server port (default: 8080)
- `SERVER_HOSTNAME` - Server host (default: localhost)
- `NODE_ENV` - Environment (local/development/production)

Planned:
- `JOW_API_URL` - Jow API endpoint
- `JOW_API_KEY` - Jow authentication token

## Project Structure

```
.
├── src/               # Source code
├── tests/             # Playwright tests
├── prisma/            # Database schema & migrations
├── generated/         # Generated Prisma client
├── documentation/     # Images and schemas
├── _grocy/            # Grocy CSV exports
├── routes/            # Legacy routes (example only)
└── .kilocode/         # Kilo Code rules
```

## External Dependencies

### Jow API
- Endpoint: `/recipes/uploaded` (POST)
- Authentication: Bearer token (pending)
- Format: Custom JSON structure (`IJowCreateRecipeBody`)

### Grocy API (Planned)
- Used as source of truth for ingredients/units
- CSV exports available in `_grocy/` for seeding

## Performance Considerations

- Fastify chosen for high throughput
- OpenTelemetry for observability without logging overhead
- Playwright browser instances managed per request
- Prisma connection pooling via default configuration
