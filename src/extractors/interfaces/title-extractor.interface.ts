import { IRecipe } from "@models/recipe/recipe.interface";

export interface ITitleExtractor {
  extract(html: string): IRecipe["title"];
}
