import { RecipeCreatorFactory } from "@factories/recipe-creator-factory";
import {RecipeModel} from "@models/recipe/recipe.model";

export enum RecipeCreationAppEnum {
  JOW = "jow",
  GROCY = "grocy",
}

export async function publishRecipeForSource(Recipe: RecipeModel, destination: RecipeCreationAppEnum): Promise<string> {
  return RecipeCreatorFactory.create(Recipe, destination);
}
