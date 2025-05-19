import { IRecipe } from "@models/recipe/recipe.interface";

export interface IAstuceExtractor {
  extract(html: string): IRecipe["astuce"];
}
