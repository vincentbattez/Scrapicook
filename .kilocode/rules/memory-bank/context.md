# Scrapicook - Current Context

## Current Work Focus

### Active Development
- **CuisineAZ Extractor**: Fully implemented and functional
- **Jow Converter**: Partially implemented (ingredient/unit conversion pending)
- **ETL Pipeline**: Basic flow working end-to-end for title, steps, tips, cook times

### Pending Work
1. **Ingredient/Unit Conversion** - Methods throw `Error: Function not implemented`
2. **Jow API Integration** - API call commented out, awaiting authentication setup
3. **Grocy Creator** - Not yet implemented
4. **Fuzzy Matching** - Database seeded but matching logic not integrated

## Recent Changes
- Initial project setup with Fastify 5.0 and Playwright
- Database schema established with multi-schema PostgreSQL
- OpenTelemetry observability fully configured
- CuisineAZ extractor with all recipe components working

## Next Steps

### Immediate (High Priority)
1. Implement `toIngredient()` and `toIngredientList()` in `JowConverter`
2. Implement `toUnit()` conversion logic
3. Set up Jow API authentication and uncomment API call
4. Write comprehensive tests for extraction flow

### Short Term
1. Implement fuzzy matching service using Fuse.js
2. Create Grocy recipe creator
3. Add Marmiton extractor
4. Implement error handling with OTEL logging for missing ingredients

### Long Term
1. ChatGPT recipe generation integration
2. Grocery shopping list automation
3. Grocy inventory sync from Jow purchases
4. Dashboard for manual ingredient mapping

## Known Issues

### Code @todo Items Found
- [`src/converters/jow.converter.ts:96`](src/converters/jow.converter.ts:96) - `toIngredient` not implemented
- [`src/converters/jow.converter.ts:100`](src/converters/jow.converter.ts:100) - `toUnit` not implemented  
- [`src/converters/jow.converter.ts:105`](src/converters/jow.converter.ts:105) - `toIngredientList` not implemented
- [`src/queries/jow/jow.queries.ts:11`](src/queries/jow/jow.queries.ts:11) - API call separated from creation logic
- [`src/services/enums/available-creator-recipe.ts:6`](src/services/enums/available-creator-recipe.ts:6) - Grocy creator commented out

### Technical Debt
- Return types in `IAbstractConverter` interface use `any` - need proper typing
- `availableCreatorMapping` uses `any` type
- Test coverage is minimal (only basic Playwright tests)

## Environment Notes

### Development Setup
```bash
# Start development server
npm run dev

# Run Playwright tests
npx playwright test

# Database operations
npx prisma generate
npx prisma db push
npx prisma db seed
```

### OTEL Configuration
- Collector at `192.168.100.2:4318` (HTTP mode)
- Logs, metrics, and traces all enabled
- Grafana dashboards expected at same host

## Architecture Decisions

### Why Factory Pattern?
Enables easy addition of new source extractors and target platforms without modifying existing code.

### Why Models with Convert Capability?
Each domain model (Title, Ingredient, Step, etc.) knows how to convert itself to target formats, following Single Responsibility while enabling composition.

### Why Multi-Schema PostgreSQL?
Clean separation between:
- Source data (from Grocy)
- Target data (for Jow, Grocy)
- Mapping tables (public schema)
