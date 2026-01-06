import type { FastifyPluginAsync } from "fastify";

import { IConvertRecipe200Response } from "@controllers/recipe/interfaces/convert/convertRecipe200Response.interface";
import { IConvertRecipeBody } from "@controllers/recipe/interfaces/convert/convertRecipeBody.interface";
import { IConvertRecipeQuery } from "@controllers/recipe/interfaces/convert/convertRecipeQuery.interface";
import { convertRecipe200ResponseSchema } from "@controllers/recipe/schemas/convert/convertRecipe200Response.schema";
import { convertRecipeBodySchema } from "@controllers/recipe/schemas/convert/convertRecipeBody.schema";
import { convertRecipeQuerySchema } from "@controllers/recipe/schemas/convert/convertRecipeQuery.schema";

import { AstuceModel } from "@models/astuce/astuce.model";
import { CookTimeModel } from "@models/cooktime/cooktime.model";
import { ImageModel } from "@models/image/image.model";
import { NumberOfPersonModel } from "@models/numberOfPerson/numberOfPerson.model";
import { RecipeModel } from "@models/recipe/recipe.model";
import { StepListModel } from "@models/step/step.model";
import { TitleModel } from "@models/title/title.model";

import { recipeConverterFactory } from "@factories/recipe-converter-factory";

import { AvailableCreatorRecipeEnum } from "@services/enums/available-creator-recipe";

const convertRecipeController: FastifyPluginAsync = async (
  fastify,
): Promise<void> => {
  fastify.post<{
    Reply: IConvertRecipe200Response;
    Query: IConvertRecipeQuery;
    Body: IConvertRecipeBody;
  }>(
    "/convert",
    {
      schema: {
        querystring: convertRecipeQuerySchema,
        body: convertRecipeBodySchema,
        response: {
          200: {
            description: "Recipe successfully converted to target format",
            content: {
              "application/json": {
                schema: convertRecipe200ResponseSchema,
              },
            },
          },
          400: {
            description: "Invalid request parameters",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: { type: "string" },
                    statusCode: { type: "number" },
                  },
                  required: ["message", "statusCode"],
                },
              },
            },
          },
          500: {
            description: "Internal server error during conversion",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: { type: "string" },
                    statusCode: { type: "number" },
                  },
                  required: ["message", "statusCode"],
                },
              },
            },
          },
        },
      },
    },
    async (request, reply) => {
      try {
        const { target } = request.query;
        const recipe = request.body;

        // Validate target enum
        const targetEnum =
          target.toUpperCase() as keyof typeof AvailableCreatorRecipeEnum;

        if (!AvailableCreatorRecipeEnum[targetEnum]) {
          throw new Error(`Target "${target}" is not supported`);
        }

        // Convert the raw recipe structure to internal RecipeModel
        const titleModel = new TitleModel(recipe.title);
        const imageModel = new ImageModel(recipe.image);
        const cookTimeModel = new CookTimeModel(recipe.cookTime);
        const numberOfPersonModel = new NumberOfPersonModel(
          recipe.numberOfPerson,
        );

        // Convert steps - convert each step from the array
        const stepListModel = new StepListModel();

        recipe.stepList.forEach((stepItem) => {
          stepListModel.pushStep(stepItem.step.description);
        });

        const astuceModel = new AstuceModel(recipe.astuce);

        // TODO: For now, create empty ingredient list as ingredients/units conversion is complex
        const ingredientListModel: any = { get: () => [] }; // Placeholder for complex ingredient conversion

        // Build internal RecipeModel
        const recipeModel = new RecipeModel({
          title: titleModel,
          image: imageModel,
          cookTime: cookTimeModel,
          numberOfPerson: numberOfPersonModel,
          ingredientList: ingredientListModel,
          stepList: stepListModel,
          astuce: astuceModel,
          recipeSource: null as any, // TODO: Convert recipe source if needed
        });

        // Use factory to get the appropriate converter
        const converter = recipeConverterFactory.convert(
          AvailableCreatorRecipeEnum[targetEnum],
        );

        // Convert to target format (JOW for now)
        const convertedRecipe = converter.toRecipe(recipeModel);

        const response: IConvertRecipe200Response = {
          data: convertedRecipe,
        };

        return await reply.code(200).send(response);
      } catch (error) {
        return reply.code(error.statusCode || 500).send({
          message: error.message || "Internal server error",
          statusCode: error.statusCode || 500,
        });
      }
    },
  );
};

export default convertRecipeController;
