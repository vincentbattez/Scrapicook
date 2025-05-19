import {ICookTime, ITime} from "@models/cooktime/cooktime.interface";
import {
  IJowCreateRecipeBody
} from "queries/jow/interfaces/requests/jowCreateRecipeBody.interface";

export class CookTimeModel {
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

  public getCookTime(): ICookTime {
    return this.cooktime;
  }

  public fromExtractor({
     preparationTime,
     cookingTime,
     restTime,
   }: {
    preparationTime: ITime;
    cookingTime: ITime;
    restTime: ITime;
  }): void {
    if (preparationTime) {
      this.setTime(preparationTime, "preparation");
    }
    if (cookingTime) {
      this.setTime(cookingTime, "cooking");
    }
    if (restTime) {
      this.setTime(restTime, "rest");
    }
  }

  private setTime(time: ITime, key: keyof ICookTime): void {
    let value = Number(time.value);
    // convert to minute
    if (["h", "heure", "hour"].includes(time.unit)) {
      value *= 60;
    }

    this.cooktime[key].value = value ?? null
    this.cooktime[key].unit = "min"
  }

  public toJowRecipe(): Pick<IJowCreateRecipeBody, "cookingTime" | "preparationTime" | "restingTime"> {
    return {
      cookingTime: this.getCookTime().cooking.value ? String(this.getCookTime().cooking.value) : "",
      preparationTime: this.getCookTime().preparation.value ? String(this.getCookTime().preparation.value) : "",
      restingTime: this.getCookTime().rest.value ? String(this.getCookTime().rest.value) : "",
    };
  }
}

