import { RecipeModel } from "@models/recipe/recipe.model";

import { RecipeCreatorFactory } from "@factories/recipe-creator-factory";

export enum RecipeCreationAppEnum {
  JOW = "jow",
  GROCY = "grocy",
}

export async function publishRecipeForSource(
  Recipe: RecipeModel,
  destination: RecipeCreationAppEnum,
): Promise<string> {
  return RecipeCreatorFactory.create(Recipe, destination);
}
