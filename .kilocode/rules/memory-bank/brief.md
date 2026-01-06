# Scrapicook - Project Brief

## Project Overview
Scrapicook is an ETL (Extract-Transform-Load) system for recipes that extracts cooking recipes from various online sources (CuisineAZ, Marmiton, etc.) and converts them into formats compatible with target platforms (Jow, Grocy).

## Core Objectives
1. **Recipe Conversion**: Automatically convert recipes from source websites to target platforms (Jow, Grocy), using Grocy as the source of truth for ingredients and units
2. **Shopping List Integration**: Automatically add missing products to Jow shopping cart based on Grocy stock minimums
3. **Inventory Sync**: Update Grocy inventory when products are purchased through Jow

## Key Features
- Web scraping of recipes from CuisineAZ (and planned support for Marmiton, ChatGPT)
- Normalized recipe model for cross-platform compatibility
- Fuzzy matching of ingredients between sources and targets
- Integration with Jow and Grocy APIs
- OpenTelemetry observability for tracking missing ingredients/units

## Business Value
- **Jow**: Generates shopping lists from recipes for supermarkets (Intermarché, Auchan)
- **Grocy**: Manages food inventory with expiration dates, quantities, and stock consumption

## Current Status
Early development - CuisineAZ extractor implemented, Jow converter partial, Grocy integration pending
