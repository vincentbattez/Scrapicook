import { test, expect } from '@playwright/test';
import { parseRecipeFromPage } from "@services/recipe-parser";
import { RecipeCreationAppEnum, publishRecipeForSource } from "@services/recipe-creator";

test('get started link', async ({ page }) => {
  await page.goto('https://www.cuisineaz.com/recettes/tzatziki-facile-17295.aspx');
  const Recipe = await parseRecipeFromPage(page)
  console.log("📖", Recipe.getRecipe().steps.getStep());
  console.log("📖", Recipe.getRecipe().steps.toJowRecipe());
  // @todo: expect to recipe has well all the properties

  const publishResponse = await publishRecipeForSource(Recipe, RecipeCreationAppEnum.JOW);
  console.log("✅", publishResponse);
});
