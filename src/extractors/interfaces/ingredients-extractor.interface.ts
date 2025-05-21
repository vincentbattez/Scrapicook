import { IRecipe } from "@models/recipe/recipe.interface";
import {IExtractorAbstract} from "@extractors/interfaces/extractorAbstract.interface";

export type IIngredientsExtractor = IExtractorAbstract<IRecipe["ingredientList"]>
