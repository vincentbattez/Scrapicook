import { IRecipe } from "@models/recipe/recipe.interface";
import {Page} from "@playwright/test";

export interface INumberOfPersonExtractor {
  extract(page: Page): Promise<IRecipe["numberOfPerson"]>;
}
