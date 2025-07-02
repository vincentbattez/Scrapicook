import { logger } from "@src/server";

import { IAbstractConverter } from "@converters/interfaces/AbstractConverter.interface";

import { availableConverterMapping } from "@services/enums/available-converter-recipe";
import { AvailableCreatorRecipeEnum } from "@services/enums/available-creator-recipe";

export const recipeConverterFactory = {
  convert: (converter: AvailableCreatorRecipeEnum): IAbstractConverter => {
    // Check if the converter is supported
    if (!availableConverterMapping[converter]) {
      throw new Error(`Target recipe "${converter}" is not supported`);
    }

    logger.info(`🌟 Use "${converter}" converter`);

    return availableConverterMapping[converter];
  },
};
