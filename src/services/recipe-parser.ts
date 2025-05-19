import { RecipeExtractorFactory } from "@factories/recipe-extractor-factory";
import {Page} from "@playwright/test";
import {RecipeModel} from "@models/recipe/recipe.model";

export async function parseRecipeFromPage(page: Page): Promise<RecipeModel> {
  return RecipeExtractorFactory.create(page);
}
