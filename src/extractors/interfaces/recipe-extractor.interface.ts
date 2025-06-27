import { RecipeModel } from "@models/recipe/recipe.model";

import { IExtractorAbstract } from "@extractors/interfaces/common/extractorAbstract.interface";

export type IRecipeExtractor = IExtractorAbstract<RecipeModel>;
