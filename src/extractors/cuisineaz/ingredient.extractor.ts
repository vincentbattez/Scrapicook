import { Page } from "@playwright/test";

import { IngredientListModel } from "@models/ingredient/ingredient.model";

import { AbstractExtractor } from "@extractors/interfaces/common/extractorAbstract.interface";
import { IIngredientsExtractor } from "@extractors/interfaces/ingredients-extractor.interface";

export class CuisineAZIngredientExtractor
  extends AbstractExtractor<IngredientListModel>
  implements IIngredientsExtractor
{
  constructor() {
    super("ingredient");
  }

  protected async doExtract(page: Page): Promise<IngredientListModel> {
    await page.waitForSelector(".ingredient_list");
    const ingredientLocator = await page.locator(".ingredient_list");

    // map over the ingredient label and quantity
    const ingredientList = await ingredientLocator
      .locator(".ingredient_item .ingredient_label")
      .allInnerTexts();
    const quantitieList = await ingredientLocator
      .locator(".ingredient_item .ingredient_qte")
      .allInnerTexts();

    const IngredientList = new IngredientListModel([]);

    // map over the ingredient label and quantity
    ingredientList.forEach((ingredient, index) => {
      const [quantity, ...unitList] = quantitieList[index].split(" ");

      // 🌟 Feed IngredientList
      IngredientList.pushIngredient({
        label: ingredient,
        quantity,
        unit: unitList.join(" ") || null,
      });
    });

    return IngredientList;
  }
}

export const cuisineAZIngredientExtractor = new CuisineAZIngredientExtractor();
