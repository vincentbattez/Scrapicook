import { IUnit } from "@models/ingredient/unit/unit.interface";

export interface IIngredient {
  label: string;
  quantity: number | null;
  unit: IUnit;
}
