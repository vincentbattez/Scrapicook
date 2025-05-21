import {ICookTime, ITime} from "@models/cooktime/cooktime.interface";
import {
  IJowCreateRecipeBody
} from "queries/jow/interfaces/requests/jowCreateRecipeBody.interface";
import {stringUtils} from "@src/utils/string";
import {IModelAbstract} from "@models/interfaces/modelAbstract.interface";

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
  }

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
    let normalizedUnit: string | null = stringUtils.normalizeString(time.unit ?? "");

    if (!normalizedUnit) {
      normalizedUnit = null
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

    this.cooktime[key].value = value ?? null
    this.cooktime[key].unit = normalizedUnit
  }

  public toJowRecipe(): Pick<IJowCreateRecipeBody, "cookingTime" | "preparationTime" | "restingTime"> {
    return {
      cookingTime: this.get().cooking.value ? String(this.get().cooking.value) : "",
      preparationTime: this.get().preparation.value ? String(this.get().preparation.value) : "",
      restingTime: this.get().rest.value ? String(this.get().rest.value) : "",
    };
  }
}

