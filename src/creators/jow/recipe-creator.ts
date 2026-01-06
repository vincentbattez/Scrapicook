import { ICreatorAbstract } from "@creators/interfaces/common/creatorAbstract.interface";

import { RecipeModel } from "@models/recipe/recipe.model";

import { jowQueries } from "@queries/jow/jow.queries";

export class JowRecipeCreator implements ICreatorAbstract<any> {
  async create(Recipe: RecipeModel): Promise<any> {
    // Convert RecipeModel to Jow recipe

    const result = await jowQueries.createRecipe(Recipe);

    return result;
  }
}
