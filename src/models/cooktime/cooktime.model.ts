import {ICookTime, ITime} from "@models/cooktime/cooktime.interface";

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
    this.cooktime[key].value = Number(time.value) ?? null
    this.cooktime[key].unit = time.unit ?? null
  }

  public toJowRecipe(): ICookTime {
    return this.cooktime;
  }
}
