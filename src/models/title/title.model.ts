import {
  IConvertibleAbstract,
  IModelWith,
} from "@models/interfaces/modelAbstract.interface";
import { ITitle } from "@models/title/title.interface";

import { recipeConverterFactory } from "@factories/recipe-converter-factory";

import { AvailableCreatorRecipeEnum } from "@services/enums/available-creator-recipe";

export class TitleModel implements IModelWith<ITitle, IConvertibleAbstract> {
  private readonly title: ITitle;

  constructor(title: ITitle) {
    this.title = title;
  }

  public get(): ITitle {
    return this.title;
  }

  public convert(availableConverter: AvailableCreatorRecipeEnum) {
    return recipeConverterFactory.convert(availableConverter).toTitle(this);
  }
}
