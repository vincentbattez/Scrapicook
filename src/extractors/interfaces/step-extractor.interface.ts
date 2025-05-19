import { IRecipe } from "@models/recipe/recipe.interface";

export interface IStepExtractor {
  extract(html: string): IRecipe["steps"];
}
