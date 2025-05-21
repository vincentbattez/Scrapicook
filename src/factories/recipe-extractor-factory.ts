import { Page } from "@playwright/test";

import { ExtractorRecipeAvailableEnum } from "@models/recipe-source/recipe-source.model";
import { RecipeModel } from "@models/recipe/recipe.model";

import { recipeSourceExtractor } from "@extractors/common/recipeSource.extractor";
import { cuisineAZRecipeExtractor } from "@extractors/cuisineaz/recipe-extractor";

const extractorMapping = {
  [ExtractorRecipeAvailableEnum.CUISINEAZ]: cuisineAZRecipeExtractor,
};

export const recipeExtractorFactory = {
  create: async (page: Page): Promise<RecipeModel> => {
    // Extract the source from the URL
    const RecipeSource = await recipeSourceExtractor.extract(page);

    // Check if the source is supported
    if (!extractorMapping[RecipeSource.get().source]) {
      throw new Error(
        `Recipe source ${RecipeSource.get().source} is not supported`,
      );
    }

    // Choose the extractor based on the source
    console.log(`🌟 Extract ${RecipeSource.get().source} recipe`);

    return extractorMapping[RecipeSource.get().source].extract(
      page,
      RecipeSource,
    );
  },
};
