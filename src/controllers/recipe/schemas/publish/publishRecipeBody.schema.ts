export const publishRecipeBodySchema = {
  title: "Schema of the TargetRecipe to publish",
  type: "object",
  properties: {
    recipe: {
      type: "object",
      description: "Target recipe structure (JowRecipe, GrocyRecipe, etc.)",
      // Allow any properties for extensibility
      additionalProperties: true,
    },
  },
  required: ["recipe"],
} as const;
