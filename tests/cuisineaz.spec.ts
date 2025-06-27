import { test } from "@playwright/test";
import { PrismaService } from "@src/database/prismaClient";

import { AvailableCreatorRecipeEnum } from "@services/enums/available-creator-recipe";
import { publishRecipeForSource } from "@services/recipe/recipe-creator";
import { recipeParser } from "@services/recipe/recipe-parser";

test("cuisineaz recipe", async ({ page }) => {
  const prisma = new PrismaService();

  console.log("✅ prisma()", prisma);
});

test("get started link", async ({ page }) => {
  await page.goto(
    "https://www.cuisineaz.com/recettes/tzatziki-facile-17295.aspx",
  );
  const Recipe = await recipeParser.parseRecipeFromPage(page);

  console.log("📖", Recipe.toJSONRecipe());

  // @todo: expect to recipe has well all the properties
  console.log(Recipe.get().title.convert(AvailableCreatorRecipeEnum.JOW));

  const publishResponse = await publishRecipeForSource(
    Recipe,
    AvailableCreatorRecipeEnum.JOW,
  );
  console.log("✅", publishResponse);
});
