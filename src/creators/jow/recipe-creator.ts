import {RecipeModel} from "@models/recipe/recipe.model";
import {JowQueries} from "queries/jow/jow.queries";

export class JowRecipeCreator {
  static async create(Recipe: RecipeModel): Promise<any> {
    JowQueries.createRecipe(Recipe);
    return {}
  }
}
