import {
  IIngredientsExtractor
} from "@extractors/interfaces/ingredients-extractor.interface";
import {IngredientListModel} from "@models/ingredient/ingredient.model";
import {Page} from "@playwright/test";

export const cuisineAZIngredientExtractor: IIngredientsExtractor = {
  extract: async (page: Page): Promise<IngredientListModel> => {
    await page.waitForSelector('.ingredient_list');
    const ingredientList = await page.locator('.ingredient_list');

    // map over the ingredient label and quantity
    const ingredients = await ingredientList.locator('.ingredient_item .ingredient_label').allInnerTexts();
    const quantities = await ingredientList.locator('.ingredient_item .ingredient_qte').allInnerTexts();

    const IngredientList = new IngredientListModel([]);

    // map over the ingredient label and quantity
    ingredients.forEach((ingredient, index) => {
      const [quantity, ...unit] = quantities[index].split(' ')

      // 🌟 Feed IngredientList
      IngredientList.pushIngredient({
        label: ingredient,
        quantity,
        unit: unit.join(" ") || null,
      });
    });

    return IngredientList
  }
}
