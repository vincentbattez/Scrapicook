import { Page } from "@playwright/test";

import { RecipeModel } from "@models/recipe/recipe.model";

import { recipeSourceExtractor } from "@extractors/common/recipeSource.extractor";

import { availableExtractorMapping } from "@services/enums/available-extractor-recipe";

export const recipeExtractorFactory = {
  extract: async (page: Page): Promise<RecipeModel> => {
    // Extract the source from the URL
    const RecipeSource = await recipeSourceExtractor.extract(page);
    const source = RecipeSource.get().source;

    // Check if the source is supported
    if (!availableExtractorMapping[source]) {
      throw new Error(`Recipe source "${source}" is not supported`);
    }

    // Choose the extractor based on the source
    console.log(`🌟 Extract ${source} recipe`);

    return availableExtractorMapping[source].extract(page, RecipeSource);
  },
};
