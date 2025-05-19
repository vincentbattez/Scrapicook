import { IRecipe } from "@models/recipe/recipe.interface";

export interface IImageExtractor {
  extract(html: string): IRecipe["image"];
}
