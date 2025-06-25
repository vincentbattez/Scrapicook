import { RecipeModel } from "@models/recipe/recipe.model";

import { recipeCreatorFactory } from "@factories/recipe-creator-factory";

export enum DestinationRecipeAvailableEnum {
  JOW = "jow",
  // GROCY = "grocy",
}

export async function publishRecipeForSource(
  Recipe: RecipeModel,
  destination: DestinationRecipeAvailableEnum,
): Promise<string> {
  return recipeCreatorFactory.create(Recipe, destination);
}
