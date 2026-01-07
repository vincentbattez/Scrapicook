export const printRecipeBodySchema = {
  title: "Schema of the TargetRecipe to print",
  type: "object",
  properties: {
    recipeUrlList: {
      type: "array",
      description: "Target recipe structure (JowRecipe, GrocyRecipe, etc.)",
      items: {
        type: "string",
      },
      // Allow any properties for extensibility
      additionalProperties: true,
    },
  },
  required: ["recipeUrlList"],
} as const;
