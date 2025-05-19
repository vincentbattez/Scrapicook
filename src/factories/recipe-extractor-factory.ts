import { CuisineAZRecipeExtractor } from "@extractors/cuisineaz/recipe-extractor";
import {Page} from "@playwright/test";
import {RecipeModel} from "@models/recipe/recipe.model";

export class RecipeExtractorFactory {
  static create(page: Page): Promise<RecipeModel> {
    // Extract the source from the URL
    const url = page.url();
    const source = url.split("/")[2];

    if (source.toLowerCase() === "www.cuisineaz.com") {
      console.log(`🌟 Extract ${source} recipe`);
      return CuisineAZRecipeExtractor.create(page);
    }

    throw new Error(`Source non supportée (${source})`);
  }
}
