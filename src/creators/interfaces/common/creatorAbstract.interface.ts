import { RecipeModel } from "@models/recipe/recipe.model";

export interface ICreatorAbstract<T> {
  create(Recipe: RecipeModel): Promise<T>;
}
