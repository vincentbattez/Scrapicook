import { test } from "@playwright/test";

import {
  RecipeCreationAppEnum,
  publishRecipeForSource,
} from "@services/recipe-creator";
import { recipeParser } from "@services/recipe-parser";

test("get started link", async ({ page }) => {
  await page.goto(
    "https://www.cuisineaz.com/recettes/tzatziki-facile-17295.aspx",
  );
  const Recipe = await recipeParser.parseRecipeFromPage(page);

  console.log("📖", Recipe.toJSONRecipe());
  // @todo: expect to recipe has well all the properties

  const publishResponse = await publishRecipeForSource(
    Recipe,
    RecipeCreationAppEnum.JOW,
  );
  console.log("✅", publishResponse);
});
