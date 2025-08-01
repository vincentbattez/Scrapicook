import { logger } from "@src/server";
import { stringUtils } from "@src/utils/string";

import {
  IUnit,
  unitEnum,
  unitMapping,
} from "@models/ingredient/unit/unit.interface";
import {
  IConvertibleAbstract,
  IModelWith,
} from "@models/interfaces/modelAbstract.interface";

import { recipeConverterFactory } from "@factories/recipe-converter-factory";

import { AvailableCreatorRecipeEnum } from "@services/enums/available-creator-recipe";

export class UnitModel implements IModelWith<IUnit, IConvertibleAbstract> {
  private readonly unit: IUnit;

  constructor(unit: string | unitEnum | null) {
    if (!unit) {
      logger.warn(`Unit "${unit}" is not defined. Defaulting to null.`);
      this.unit = null;

      return;
    }

    if (
      !stringUtils.findMatchingStrings({
        sourceWordList: Object.keys(unitMapping),
        targetWordList: [unit],
      }).length
    ) {
      logger.warn(`Unit "${unit}" is not a valid unit. Defaulting to null.`);
      this.unit = null;

      return;
    }

    this.unit = unitMapping[unit];
  }

  public get(): IUnit {
    return this.unit;
  }

  convert(availableConverter: AvailableCreatorRecipeEnum) {
    return recipeConverterFactory.convert(availableConverter).toUnit(this);
  }
}
