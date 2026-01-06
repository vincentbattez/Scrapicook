import type { FastifyPluginAsync } from "fastify";

import { IConvertRecipe200Response } from "@controllers/recipe/interfaces/convert/convertRecipe200Response.interface";
import { IConvertRecipeBody } from "@controllers/recipe/interfaces/convert/convertRecipeBody.interface";
import { IConvertRecipeQuery } from "@controllers/recipe/interfaces/convert/convertRecipeQuery.interface";
import { convertRecipe200ResponseSchema } from "@controllers/recipe/schemas/convert/convertRecipe200Response.schema";
import { convertRecipeBodySchema } from "@controllers/recipe/schemas/convert/convertRecipeBody.schema";
import { convertRecipeQuerySchema } from "@controllers/recipe/schemas/convert/convertRecipeQuery.schema";

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
        const { recipe } = request.body;

        // TODO: Implement the conversion logic
        // This will involve:
        // 1. Converting the RecipeModel to a RecipeModel instance
        // 2. Using the factory pattern to select the appropriate converter
        // 3. Converting to the target format (JOW, GROCY, etc.)

        // Placeholder response for now
        const response: IConvertRecipe200Response = {
          data: {
            message: `Conversion to ${target} not implemented yet`,
            target,
            statusCode: 501,
          },
          statusCode: 200,
          message:
            "Conversion endpoint structure ready, business logic to be implemented",
        };

        return await reply.code(response.statusCode).send(response);
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
