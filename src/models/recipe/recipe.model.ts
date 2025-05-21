import {IJSONRecipe, IRecipe} from "@models/recipe/recipe.interface";
import {IModelAbstract} from "@models/interfaces/modelAbstract.interface";

export class RecipeModel implements IModelAbstract<IRecipe> {
  recipe: IRecipe;

  constructor(recipe: IRecipe) {
    this.recipe = recipe;
  }

  get(): IRecipe {
    return this.recipe;
  }

  toJSONRecipe(): IJSONRecipe {
    return {
      stepList: this.recipe.stepList.get(),
      title: this.recipe.title.get(),
      image: this.recipe.image.get(),
      numberOfPerson: this.recipe.numberOfPerson.get(),
      cookTime: this.recipe.cookTime.get(),
      astuce: this.recipe.astuce.get(),
      ingredientList: this.recipe.ingredientList.get(),
      recipeSource: this.recipe.recipeSource.get(),
    }
  }
}
