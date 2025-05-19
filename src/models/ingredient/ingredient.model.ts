import {IIngredient} from "@models/ingredient/ingredient.interface";

export class IngredientModel {
  private readonly label: string;
  private readonly quantity: number | null;
  private readonly unit: string | null;

  constructor(ingredient: IIngredient) {
    this.label = ingredient.label;
    this.quantity = ingredient.quantity || null;
    this.unit = ingredient.unit ?? (ingredient.quantity ? "pièce" : null);

    if (!ingredient.quantity) {
      console.warn(`Ingredient "${this.label}" has no quantity. Defaulting to null.`);
    }

    if (!ingredient.unit) {
      console.warn(`Ingredient "${this.label}" has no unit. Defaulting to "pièce".`);
    }
  }

  public getLabel(): string {
    return this.label;
  }

  public getQuantity(): number | null {
    return this.quantity;
  }

  public getUnit(): string | null {
    return this.unit;
  }
}

export class IngredientListModel {
  private readonly ingredientList: IngredientModel[] = [];

  constructor(ingredients: IngredientModel[]) {
    this.ingredientList = ingredients;
  }

  public pushIngredient(ingredient: {
    label: string;
    quantity: string | null;
    unit: string | null;
  }): void {
    this.ingredientList.push(new IngredientModel({
      label: ingredient.label,
      quantity: Number(ingredient.quantity),
      unit: ingredient.unit ?? null,
    }));
  }

  public getIngredientList(): IngredientModel[] {
    return this.ingredientList;
  }
}
