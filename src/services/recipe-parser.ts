import { Page } from "@playwright/test";

import { RecipeModel } from "@models/recipe/recipe.model";

import { recipeExtractorFactory } from "@factories/recipe-extractor-factory";

export const recipeParser = {
  parseRecipeFromPage: (page: Page): Promise<RecipeModel> => {
    return recipeExtractorFactory.create(page);
  },
};
