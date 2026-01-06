# Scrapicook - Product Definition

## Why This Project Exists

### The Problem
Managing recipes from various cooking websites is tedious:
- Each website has its own format (CuisineAZ, Marmiton, etc.)
- Manually converting recipes to inventory management tools (Grocy) or shopping platforms (Jow) is time-consuming
- Tracking pantry inventory and ensuring sufficient stock is manual and error-prone
- No automated way to link recipes to shopping lists across different platforms

### The Solution
Scrapicook automates the entire recipe-to-shopping workflow:
1. **Extract** recipes from any supported cooking website
2. **Normalize** them to a standard format
3. **Match** ingredients with your Grocy inventory database using fuzzy matching
4. **Convert** recipes to target platform formats (Jow, Grocy)
5. **Track** missing ingredients/units via OpenTelemetry for manual resolution

## How It Should Work

### Main Flow (as documented in readme.md)

```
1. Extractors: source URL → source_recipe
   ↓
2. Normalization: source_recipe → normalized_recipe  
   ↓
3. Fuzzy Matching: normalized_recipe + Grocy DB → truth_recipe
   ↓
4. Creators: truth_recipe → target_recipe (Jow/Grocy)
   ↓
5. Recipe created on target platform!
```

### Detailed Steps

1. **Extraction** (Extractors)
   - Scrape recipe content from source websites using Playwright
   - Extract: title, image, cook times, servings, ingredients, steps, tips
   - Log warnings via OTEL for any missing/unparseable data

2. **Normalization**
   - Convert all extracted data to a standardized Recipe model
   - Ensure consistency in units, quantities, and ingredient labels

3. **Fuzzy Matching**
   - Match ingredients against Grocy database (source of truth)
   - Log warnings for unmatched ingredients/units
   - Missing items can be manually resolved via Grafana dashboard

4. **Creation**
   - Convert normalized recipe to target platform format
   - Map ingredients using the source-target mapping database
   - Create recipe on target platform via API

## User Experience Goals

- **Zero manual data entry**: Recipes should flow automatically from URL to target
- **Graceful degradation**: Missing data doesn't block the flow; warnings are logged
- **Observability**: All issues are trackable via Grafana dashboards
- **Extensibility**: Easy to add new source extractors and target platforms

## Target Platforms

### Jow
- Purpose: Shopping list generation for supermarkets (Intermarché, Auchan)
- API endpoint: `/recipes/uploaded`
- Constraints: Title max 50 chars, tip max 350 chars, step max 350 chars

### Grocy
- Purpose: Inventory management with expiration dates and stock levels
- Role: Source of truth for ingredients and units
- Future: Direct recipe creation support

## Data Model Summary

### Recipe Components
- Title, Image, Cook Times (prep/cooking/rest)
- Number of persons (servings)
- Ingredient list with quantities and units
- Step list with descriptions
- Tips/tricks (astuce)
- Source metadata (URL, source name)
