import { IRecipe } from "@models/recipe/recipe.interface";

export class RecipeModel {
  recipe: IRecipe;

  constructor(recipe: IRecipe) {
    this.recipe = recipe;
  }

  getRecipe() {
    return this.recipe;
  }
}
