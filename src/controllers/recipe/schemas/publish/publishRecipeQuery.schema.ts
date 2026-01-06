import { AvailableCreatorRecipeEnum } from "@services/enums/available-creator-recipe";

export const publishRecipeQuerySchema = {
  title: "Schema of the query params to publish recipe",
  type: "object",
  properties: {
    target: {
      type: "string",
      enum: Object.values(AvailableCreatorRecipeEnum),
      description: "Target platform for recipe publishing",
    },
  },
  required: ["target"],
} as const;
