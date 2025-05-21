import { Page } from "@playwright/test";

import { IngredientListModel } from "@models/ingredient/ingredient.model";

import { IIngredientsExtractor } from "@extractors/interfaces/ingredients-extractor.interface";

export const cuisineAZIngredientExtractor: IIngredientsExtractor = {
  extract: async (page: Page): Promise<IngredientListModel> => {
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
  },
};
