import { IAbstractConverter } from "@converters/interfaces/AbstractConverter.interface";
import { JowConverter } from "@converters/jow.converter";

import { AvailableCreatorRecipeEnum } from "@services/enums/available-creator-recipe";

export const availableConverterMapping: Record<
  AvailableCreatorRecipeEnum,
  IAbstractConverter
> = {
  [AvailableCreatorRecipeEnum.JOW]: new JowConverter(),
};
