import { IRecipe } from "@models/recipe/recipe.interface";

export interface ICooktimeExtractor {
  extract(html: string): IRecipe["cookTime"];
}
