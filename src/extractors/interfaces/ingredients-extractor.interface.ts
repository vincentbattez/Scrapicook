import { IRecipe } from "@models/recipe/recipe.interface";
import {Page} from "@playwright/test";

export interface IIngredientsExtractor {
  extract(html: Page): Promise<IRecipe["ingredients"]>;
}
