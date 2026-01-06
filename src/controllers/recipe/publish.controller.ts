import type { FastifyPluginAsync } from "fastify";

import { IPublishRecipe200Response } from "@controllers/recipe/interfaces/publish/publishRecipe200Response.interface";
import { IPublishRecipeBody } from "@controllers/recipe/interfaces/publish/publishRecipeBody.interface";
import { IPublishRecipeQuery } from "@controllers/recipe/interfaces/publish/publishRecipeQuery.interface";
import { publishRecipe200ResponseSchema } from "@controllers/recipe/schemas/publish/publishRecipe200Response.schema";
import { publishRecipeBodySchema } from "@controllers/recipe/schemas/publish/publishRecipeBody.schema";
import { publishRecipeQuerySchema } from "@controllers/recipe/schemas/publish/publishRecipeQuery.schema";

import { AvailableCreatorRecipeEnum } from "@services/enums/available-creator-recipe";

const publishRecipeController: FastifyPluginAsync = async (
  fastify,
): Promise<void> => {
  fastify.post<{
    Reply: IPublishRecipe200Response;
    Query: IPublishRecipeQuery;
    Body: IPublishRecipeBody;
  }>(
    "/publish",
    {
      schema: {
        querystring: publishRecipeQuerySchema,
        body: publishRecipeBodySchema,
        response: {
          200: {
            description: "Recipe successfully published to target platform",
            content: {
              "application/json": {
                schema: publishRecipe200ResponseSchema,
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
            description: "Internal server error during publishing",
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

        // Validate target enum
        const targetEnum =
          target.toUpperCase() as keyof typeof AvailableCreatorRecipeEnum;

        if (!AvailableCreatorRecipeEnum[targetEnum]) {
          throw new Error(`Target "${target}" is not supported`);
        }

        // @TODO: use recipeCreatorFactory

        const response: IPublishRecipe200Response = {
          data: {
            message: `Recipe successfully published to "${target}"`,
            recipeId: "unknown",
            status: "success",
          },
        };

        return await reply.code(200).send(response);
      } catch (error) {
        const statusCode = error.statusCode || 500;

        return reply.code(statusCode).send({
          message: error.message || "Internal server error during publishing",
          statusCode,
        });
      }
    },
  );
};

export default publishRecipeController;
