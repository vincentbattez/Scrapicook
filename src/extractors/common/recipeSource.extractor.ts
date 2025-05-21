import { Page } from "@playwright/test";

import { RecipeSourceModel } from "@models/recipe-source/recipe-source.model";

import { IRecipeSourceExtractor } from "@extractors/interfaces/recipeSource-extractor.interface";

export const recipeSourceExtractor: IRecipeSourceExtractor = {
  extract: async (page: Page): Promise<RecipeSourceModel> => {
    return new RecipeSourceModel({
      source: page.url().split("/")[2].replace(/^www./, "").split(".")[0],
      title: await page.title(),
      url: page.url(),
    });
  },
};
