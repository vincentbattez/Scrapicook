import { logger } from "@src/server";
import { type FastifyRequest } from "fastify";
import { chromium } from "playwright";

import { IExtractRecipeQuery } from "@controllers/recipe/interfaces/extract/extractRecipeQuery.interface";

import { AvailableCreatorRecipeEnum } from "@services/enums/available-creator-recipe";
import { publishRecipeForSource } from "@services/recipe/recipe-creator";
import { recipeParser } from "@services/recipe/recipe-parser";

export const recipeExtractorService = {
  extractRecipeFromPage: async ({
    request,
  }: {
    request: FastifyRequest<{
      Query: IExtractRecipeQuery;
    }>;
  }): Promise<any> => {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    logger.info(request.query);

    await page.goto(
      "https://www.cuisineaz.com/recettes/tzatziki-facile-17295.aspx",
    );
    const Recipe = await recipeParser.parseRecipeFromPage(page);

    logger.info("📖", Recipe.toJSONRecipe());

    // @todo: expect to recipe has well all the properties
    logger.info(Recipe.get().title.convert(AvailableCreatorRecipeEnum.JOW));

    const publishResponse = await publishRecipeForSource(
      Recipe,
      AvailableCreatorRecipeEnum.JOW,
    );
    logger.info("✅", publishResponse);
  },
};
