import { stringUtils } from "@src/utils/string";

import { ICookTime, ITime } from "@models/cooktime/cooktime.interface";
import { IModelAbstract } from "@models/interfaces/modelAbstract.interface";

import { recipeConverterFactory } from "@factories/recipe-converter-factory";

import { DestinationRecipeAvailableEnum } from "@services/recipe-creator";

export class CookTimeModel implements IModelAbstract<ICookTime> {
  private readonly cooktime: ICookTime = {
    preparation: {
      value: null,
      unit: null,
    },
    cooking: {
      value: null,
      unit: null,
    },
    rest: {
      value: null,
      unit: null,
    },
  };

  constructor(cooktime: Partial<ICookTime>) {
    (Object.keys(this.cooktime) as (keyof ICookTime)[]).forEach((key) => {
      if (cooktime[key]) {
        this.setTime(cooktime[key], key);
      }
    });
  }

  public get(): ICookTime {
    return this.cooktime;
  }

  private setTime(time: ITime, key: keyof ICookTime): void {
    let value: number = Number(time.value);
    let normalizedUnit: string | null = stringUtils.normalizeString(
      time.unit ?? "",
    );

    if (!normalizedUnit) {
      normalizedUnit = null;
    }

    // convert to minute
    if (
      normalizedUnit &&
      stringUtils.findMatchingStrings({
        sourceWordList: ["hour", "heure", "h"],
        targetWordList: [normalizedUnit],
      }).length
    ) {
      value *= 60;
      normalizedUnit = "min";
    }

    this.cooktime[key].value = value ?? null;
    this.cooktime[key].unit = normalizedUnit;
  }

  convert(availableConverter: DestinationRecipeAvailableEnum) {
    return recipeConverterFactory.convert(availableConverter).toCookTime(this);
  }
}
