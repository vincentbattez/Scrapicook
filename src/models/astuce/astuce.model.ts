import { IAstuce } from "@models/astuce/astuce.interface";
import {
  IConvertibleAbstract,
  IModelWith,
} from "@models/interfaces/modelAbstract.interface";

import { recipeConverterFactory } from "@factories/recipe-converter-factory";

import { AvailableCreatorRecipeEnum } from "@services/enums/available-creator-recipe";

export class AstuceModel implements IModelWith<IAstuce, IConvertibleAbstract> {
  private readonly astuce: IAstuce;

  constructor(astuce: IAstuce) {
    this.astuce = astuce || null;
  }

  public get(): IAstuce {
    return this.astuce;
  }

  convert(availableConverter: AvailableCreatorRecipeEnum.JOW) {
    return recipeConverterFactory.convert(availableConverter).toAstuce(this);
  }
}
