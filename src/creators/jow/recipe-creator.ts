import { RecipeModel } from "@models/recipe/recipe.model";

import { jowQueries } from "@queries/jow/jow.queries";

export class JowRecipeCreator {
  static async create(Recipe: RecipeModel): Promise<any> {
    jowQueries.createRecipe(Recipe);

    return {};
  }
}
