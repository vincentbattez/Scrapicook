import { AvailableCreatorRecipeEnum } from "@services/enums/available-creator-recipe";

export const convertRecipeQuerySchema = {
  title: "Schema of the query params to convert recipe",
  type: "object",
  properties: {
    target: {
      type: "string",
      enum: Object.values(AvailableCreatorRecipeEnum),
      description: "Target platform for recipe conversion",
    },
  },
  required: ["target"],
} as const;
