import {
  IConvertibleAbstract,
  IModelWith,
} from "@models/interfaces/modelAbstract.interface";
import { IJSONRecipe, IRecipe } from "@models/recipe/recipe.interface";

import { recipeConverterFactory } from "@factories/recipe-converter-factory";

import { DestinationRecipeAvailableEnum } from "@services/recipe-creator";

export class RecipeModel implements IModelWith<IRecipe, IConvertibleAbstract> {
  private readonly recipe: IRecipe;

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
    };
  }

  convert(availableConverter: DestinationRecipeAvailableEnum) {
    return recipeConverterFactory.convert(availableConverter).toRecipe(this);
  }
}
