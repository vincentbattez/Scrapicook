import { ICreatorAbstract } from "@creators/interfaces/common/creatorAbstract.interface";

import { RecipeModel } from "@models/recipe/recipe.model";

import { jowQueries } from "@queries/jow/jow.queries";

export class JowRecipeCreator implements ICreatorAbstract<any> {
  async create(Recipe: RecipeModel): Promise<any> {
    jowQueries.createRecipe(Recipe);

    return {};
  }
}
