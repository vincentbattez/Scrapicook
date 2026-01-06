import { logger } from "@src/server";

import { RecipeModel } from "@models/recipe/recipe.model.js";

import {
  IJowCreateRecipeBody,
  IJowIngredient,
} from "@queries/jow/interfaces/requests/jowCreateRecipeBody.interface";
import { IJowCreateRecipeResponse } from "@queries/jow/interfaces/responses/jowCreateRecipeResponse.interface";

import { AvailableCreatorRecipeEnum } from "@services/enums/available-creator-recipe";

export const jowQueries = {
  async createRecipe(Recipe: RecipeModel): Promise<IJowCreateRecipeResponse> {
    // @todo: séparé la creation du call API
    const body = Recipe.convert(AvailableCreatorRecipeEnum.JOW);
    logger.info("body");
    logger.info(body);

    return this.publishRecipe(body);
  },

  async publishRecipe(
    jowRecipeBody: IJowCreateRecipeBody,
  ): Promise<IJowCreateRecipeResponse> {
    // Check if environment variables are loaded
    if (!process.env.JOW_API_URL || !process.env.JOW_BEARER) {
      logger.error(
        "JOW_API_URL or JOW_BEARER environment variables are not set",
      );
      throw new Error("Missing JOW environment variables");
    }

    try {
      const response = await fetch(
        process.env.JOW_API_URL + "/public/recipes/uploaded",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.JOW_BEARER}`,
          },
          body: JSON.stringify(jowRecipeBody),
        },
      );

      if (!response.ok) {
        logger.error(
          `❌ Recipe creation failed: ${response.status} ${response.statusText}`,
        );
        throw new Error(
          `Recipe creation failed: ${response.status} ${response.statusText}`,
        );
      }

      const createdRecipe = await response.json();
      logger.info("✅ Recipe created successfully");
      logger.info(createdRecipe);

      return createdRecipe;
    } catch (error) {
      logger.error("❌ Error creating recipe:", error);
      throw error;
    }
  },
  async searchIngredient(ingredientName: string): Promise<IJowIngredient[]> {
    logger.info(`🔍 Searching ingredient: "${ingredientName}"`);

    // Check if environment variables are loaded
    if (!process.env.JOW_API_URL || !process.env.JOW_BEARER) {
      logger.error(
        "JOW_API_URL or JOW_BEARER environment variables are not set",
      );
      throw new Error("Missing JOW environment variables");
    }

    // Build URL with query parameters
    const url = new URL("/public/ingredients/search", process.env.JOW_API_URL);
    url.searchParams.append("query", ingredientName);
    url.searchParams.append("limit", "10");
    url.searchParams.append("start", "0");
    url.searchParams.append("availabilityZoneId", "FR");

    try {
      const response = await fetch(url.toString(), {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.JOW_BEARER}`,
        },
      });

      if (!response.ok) {
        logger.error(
          `❌ API call failed: ${response.status} ${response.statusText}`,
        );
        throw new Error(
          `API call failed: ${response.status} ${response.statusText}`,
        );
      }

      const jowIngredientList = (await response.json()) as IJowIngredient[];
      logger.info("✅ Search successful");
      logger.info(jowIngredientList.map((jowIngredient) => jowIngredient.name));

      return jowIngredientList;
    } catch (error) {
      logger.error("❌ Error calling Jow API:", error);
      throw error;
    }
  },
};
