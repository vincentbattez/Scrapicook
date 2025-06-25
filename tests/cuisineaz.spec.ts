import { test } from "@playwright/test";

import {
  DestinationRecipeAvailableEnum,
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
  console.log(Recipe.get().title.convert(DestinationRecipeAvailableEnum.JOW));

  const publishResponse = await publishRecipeForSource(
    Recipe,
    DestinationRecipeAvailableEnum.JOW,
  );
  console.log("✅", publishResponse);
});
