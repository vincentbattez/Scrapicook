import { RecipeModel } from "@models/recipe/recipe.model";

import { CuisineAZRecipeExtractor } from "@extractors/cuisineaz/recipe-extractor";
import { IExtractorWithSource } from "@extractors/interfaces/common/extractorAbstract.interface";

export enum AvailableExtractorRecipeEnum {
  CUISINEAZ = "cuisineaz",
}

export const availableExtractorMapping: Record<
  AvailableExtractorRecipeEnum,
  IExtractorWithSource<RecipeModel>
> = {
  [AvailableExtractorRecipeEnum.CUISINEAZ]: new CuisineAZRecipeExtractor(),
};
