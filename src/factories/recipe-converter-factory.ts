import { IAbstractConverter } from "@converters/interfaces/AbstractConverter.interface";
import { jowConverter } from "@converters/jow.converter";

import { DestinationRecipeAvailableEnum } from "@services/recipe-creator";

const availableConverterMapping: Record<
  DestinationRecipeAvailableEnum,
  IAbstractConverter
> = {
  [DestinationRecipeAvailableEnum.JOW]: jowConverter,
};

export const recipeConverterFactory = {
  convert: (converter: DestinationRecipeAvailableEnum): IAbstractConverter => {
    // Check if the converter is supported
    if (!availableConverterMapping[converter]) {
      throw new Error(`Destination recipe "${converter}" is not supported`);
    }

    console.log(`🌟 Use "${converter}" converter`);

    return availableConverterMapping[converter];
  },
};
