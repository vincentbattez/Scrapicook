import { logger } from "@src/server";
import { type FastifyRequest } from "fastify";
import { chromium } from "playwright";

import { IExtractRecipeQuery } from "@controllers/recipe/interfaces/extract/extractRecipeQuery.interface";

import { RecipeModel } from "@models/recipe/recipe.model";

import { publishRecipeForSource } from "@services/recipe/recipe-creator";
import { recipeParser } from "@services/recipe/recipe-parser";

export const recipeExtractorService = {
  extractRecipeFromPage: async ({
    request,
  }: {
    request: FastifyRequest<{
      Query: IExtractRecipeQuery;
    }>;
  }): Promise<RecipeModel> => {
    // logger.info(request.query);
    logger.info("🚀 Starting recipe extraction...");
    const browser = await chromium.launch({
      headless: true,
    });
    const page = await browser.newPage();

    await page.goto(request.query.urlSource);
    logger.info(`🌐 Page loaded: "${page.url()}"`);

    let Recipe;

    try {
      Recipe = await recipeParser.parseRecipeFromPage(page);
    } catch (error) {
      logger.error("❌ Error during recipe extraction:");
      logger.error(error);
      throw error;
    }

    logger.info("📖", Recipe.toJSONRecipe());

    // @todo: expect to recipe has well all the properties
    await browser.close();

    return Recipe;

    // @todo: must be moved to publish recipe service
    const publishResponse = await publishRecipeForSource(
      Recipe,
      request.query.target,
    );
  },
};
