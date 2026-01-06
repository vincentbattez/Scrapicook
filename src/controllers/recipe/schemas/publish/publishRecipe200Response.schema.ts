export const publishRecipe200ResponseSchema = {
  title: "Schema of the publish recipe response",
  type: "object",
  properties: {
    data: {
      type: "object",
      properties: {
        message: { type: "string" },
        recipeId: { type: "string" },
        status: {
          type: "string",
          enum: ["success", "error"],
        },
        platform: { type: "string" },
        url: { type: "string" },
      },
      required: ["message", "status"],
    },
  },
  required: ["data"],
} as const;
