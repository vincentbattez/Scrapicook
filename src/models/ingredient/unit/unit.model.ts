import {IModelAbstract} from "@models/interfaces/modelAbstract.interface";
import {
  IUnit,
  unitEnum,
  unitMapping
} from "@models/ingredient/unit/unit.interface";
import {stringUtils} from "@src/utils/string";

export class UnitModel implements IModelAbstract<IUnit> {
  private readonly unit: IUnit;

  constructor(unit: string | unitEnum | null) {
    if (!unit) {
      console.warn(`Unit "${unit}" is not defined. Defaulting to null.`);
      this.unit = null;
      return;
    }

    if (!stringUtils.findMatchingStrings({
      sourceWordList: Object.keys(unitMapping),
      targetWordList: [unit],
    }).length) {
      console.warn(`Unit "${unit}" is not a valid unit. Defaulting to null.`);
      this.unit = null;
      return;
    }

    this.unit = unitMapping[unit];
  }

  public get(): IUnit {
    return this.unit;
  }
}
