import {IIngredient} from "@models/ingredient/ingredient.interface";
import {IModelAbstract} from "@models/interfaces/modelAbstract.interface";
import {UnitModel} from "@models/ingredient/unit/unit.model";
import {unitEnum} from "@models/ingredient/unit/unit.interface";

export class IngredientModel implements IModelAbstract<IIngredient> {
  private readonly label: string;
  private readonly quantity: number | null;
  private readonly unit: UnitModel

  constructor(ingredient: {
    label: string;
    quantity: number | null;
    unit: string | null;
  }) {
    if (!ingredient.quantity) {
      console.warn(`Ingredient "${ingredient.label}" has no quantity. Defaulting to null.`);
    }

    if (!ingredient.unit) {
      console.warn(`Ingredient "${ingredient.label}" has no unit. Defaulting to "pièce".`);
    }

    this.label = ingredient.label;
    this.quantity = ingredient.quantity || null;
    this.unit = new UnitModel(ingredient.unit ?? (ingredient.quantity ? unitEnum.PIECE : null));
  }

  public get(): IIngredient {
    return {
      label: this.label,
      quantity: this.quantity,
      unit: this.unit.get(),
    };
  }
}

export class IngredientListModel implements IModelAbstract<IIngredient[]> {
  private readonly ingredientList: IngredientModel[] = [];

  constructor(ingredients: IngredientModel[]) {
    this.ingredientList = ingredients;
  }

  get(): IIngredient[] {
    return this.ingredientList.map((ingredient) => ingredient.get());
  }

  public pushIngredient(ingredient: {
    label: string;
    quantity: string | null;
    unit: string | null;
  }): void {
    this.ingredientList.push(
      new IngredientModel({
        label: ingredient.label,
        quantity: Number(ingredient.quantity),
        unit: ingredient.unit ?? null,
      })
    );
  }
}
