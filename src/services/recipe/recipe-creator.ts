import { RecipeModel } from "@models/recipe/recipe.model";

import { recipeCreatorFactory } from "@factories/recipe-creator-factory";

import { AvailableCreatorRecipeEnum } from "@services/enums/available-creator-recipe";

export async function publishRecipeForSource(
  Recipe: RecipeModel,
  target: AvailableCreatorRecipeEnum,
): Promise<string> {
  return recipeCreatorFactory.create(Recipe, target);
}
