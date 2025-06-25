import { IImage } from "@models/image/image.interface";
import {
  IConvertibleAbstract,
  IModelWith,
} from "@models/interfaces/modelAbstract.interface";

import { recipeConverterFactory } from "@factories/recipe-converter-factory";

import { DestinationRecipeAvailableEnum } from "@services/recipe-creator";

export class ImageModel implements IModelWith<IImage, IConvertibleAbstract> {
  private readonly image: IImage;

  constructor(image: IImage) {
    this.image = image;
  }

  public get(): IImage {
    return this.image;
  }

  convert(availableConverter: DestinationRecipeAvailableEnum) {
    return recipeConverterFactory.convert(availableConverter).toImage(this);
  }
}
