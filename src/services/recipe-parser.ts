import {recipeExtractorFactory,} from "@factories/recipe-extractor-factory";
import {Page} from "@playwright/test";
import {RecipeModel} from "@models/recipe/recipe.model";

export const recipeParser = {
  parseRecipeFromPage: (page: Page): Promise<RecipeModel> => {
    return recipeExtractorFactory.create(page);
  },
}
