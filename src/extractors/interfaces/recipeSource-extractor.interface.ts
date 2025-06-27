import { IRecipe } from "@models/recipe/recipe.interface";

import { IExtractorAbstract } from "@extractors/interfaces/common/extractorAbstract.interface";

export type IRecipeSourceExtractor = IExtractorAbstract<
  IRecipe["recipeSource"]
>;
