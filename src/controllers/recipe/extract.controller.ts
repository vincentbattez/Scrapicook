import type { FastifyPluginAsync } from "fastify";

import { IExtractRecipe200Response } from "@controllers/recipe/interfaces/extract/extractRecipe200Response.interface";
import { IExtractRecipeQuery } from "@controllers/recipe/interfaces/extract/extractRecipeQuery.interface";
import { extractRecipeQuerySchema } from "@controllers/recipe/schemas/extract/extractRecipeQuery.schema";

import { recipeExtractorService } from "@services/recipe/recipe-extract";

const extractRecipeController: FastifyPluginAsync = async (
  fastify,
): Promise<void> => {
  fastify.get<{
    Reply: IExtractRecipe200Response;
    Query: IExtractRecipeQuery;
  }>(
    "/extract",
    {
      schema: {
        querystring: extractRecipeQuerySchema,
        response: {
          // 200: {
          //   description: "Quote Engine returns information from UCBQuote",
          //   content: {
          //     "application/json": {
          //       schema: extractRecipe200ResponseSchema,
          //     },
          //   },
          // },
          // 403: {
          //   description: "Quote Engine blocks access to unauthorized users",
          //   content: {
          //     "application/json": {
          //       schema: customError403Schema,
          //     },
          //   },
          // },
          // 500: {
          //   description: "Quote Engine returns information from UCBQuote",
          //   content: {
          //     "application/json": {
          //       schema: customError500Schema,
          //     },
          //   },
          // },
        },
      },
    },
    async (request, reply) => {
      try {
        const response = await recipeExtractorService.extractRecipeFromPage({
          request,
        });

        return await reply.code(200).send(response.toJSONRecipe());
      } catch (error) {
        return reply.code(error.statusCode || 500).send({ ...error });
      }
    },
  );

  // 400 error handler
  // fastify.setErrorHandler(async (error, request, reply) => {
  //   logger.error(`error: ${error.message}`);
  //
  //   await historyRepository.addQuote({
  //     shopId: WorkorderDtoStore.getShopId(),
  //     // @ts-expect-error not an error
  //     workorderId:
  //       WorkorderDtoStore.getWorkorder()?.id ?? request.body?.workorderId ?? "",
  //     generationStatus: error?.statusCode ?? 500,
  //     // @ts-expect-error not an error
  //     input: request.body,
  //     output: null,
  //     quoteId: null,
  //   });
  //
  //   return reply.status(error?.statusCode || 500).send({ ...error });
  // });
};

export default extractRecipeController;
