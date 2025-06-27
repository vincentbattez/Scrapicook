import { IImage } from "@models/image/image.interface";
import {
  IConvertibleAbstract,
  IModelWith,
} from "@models/interfaces/modelAbstract.interface";

import { recipeConverterFactory } from "@factories/recipe-converter-factory";

import { AvailableCreatorRecipeEnum } from "@services/enums/available-creator-recipe";

export class ImageModel implements IModelWith<IImage, IConvertibleAbstract> {
  private readonly image: IImage;

  constructor(image: IImage) {
    this.image = image;
  }

  public get(): IImage {
    return this.image;
  }

  convert(availableConverter: AvailableCreatorRecipeEnum) {
    return recipeConverterFactory.convert(availableConverter).toImage(this);
  }
}
