import { RecipeModel } from "@models/recipe/recipe.model";

import { IExtractorAbstract } from "@extractors/interfaces/extractorAbstract.interface";

export type IRecipeExtractor = IExtractorAbstract<RecipeModel>;
