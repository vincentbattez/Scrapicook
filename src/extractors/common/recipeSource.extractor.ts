import {Page} from "@playwright/test";
import {IRecipeSourceExtractor} from "@extractors/interfaces/recipeSource-extractor.interface";
import {RecipeSourceModel} from "@models/recipe-source/recipe-source.model";

export const recipeSourceExtractor: IRecipeSourceExtractor = {
  extract: async (page: Page): Promise<RecipeSourceModel> => {
    return new RecipeSourceModel({
      source: page.url().split("/")[2].replace(/^www./, "").split(".")[0],
      title: await page.title(),
      url: page.url(),
    });
  }
}
