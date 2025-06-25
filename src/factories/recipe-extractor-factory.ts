import { Page } from "@playwright/test";

import { ExtractorRecipeAvailableEnum } from "@models/recipe-source/recipe-source.model";
import { RecipeModel } from "@models/recipe/recipe.model";

import { recipeSourceExtractor } from "@extractors/common/recipeSource.extractor";
import { cuisineAZRecipeExtractor } from "@extractors/cuisineaz/recipe-extractor";
import { IExtractorSource } from "@extractors/interfaces/extractorAbstract.interface";

const availableExtractorMapping: Record<
  ExtractorRecipeAvailableEnum,
  IExtractorSource<RecipeModel>
> = {
  [ExtractorRecipeAvailableEnum.CUISINEAZ]: cuisineAZRecipeExtractor,
};

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
