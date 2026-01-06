export const convertRecipe200ResponseSchema = {
  title: "Schema of the converted recipe response",
  type: "object",
  properties: {
    data: {
      description: "Converted recipe in target format",
      oneOf: [
        {
          // IJowCreateRecipeBody structure
          type: "object",
          properties: {
            additionalConstituents: { type: "array" },
            backgroundPattern: {
              type: "object",
              properties: {
                color: { type: "string" },
                imageUrl: { type: "string" },
              },
              required: ["color", "imageUrl"],
            },
            constituents: { type: "array" },
            cookingTime: { type: "string" },
            directions: { type: "array" },
            recipeFamily: { type: "string" },
            requiredTools: { type: "array" },
            imageUrl: { type: "string" },
            placeHolderUrl: { type: "string" },
            preparationTime: { type: "string" },
            restingTime: { type: "string" },
            staticCoversCount: { type: "boolean" },
            tip: {
              type: "object",
              properties: {
                description: { type: "string" },
              },
              required: ["description"],
            },
            title: { type: "string" },
            userConstituents: { type: "array" },
            userCoversCount: { type: "number" },
          },
          required: [
            "backgroundPattern",
            "constituents",
            "directions",
            "recipeFamily",
            "imageUrl",
            "placeHolderUrl",
            "staticCoversCount",
            "tip",
            "title",
            "userCoversCount",
          ],
        },
        {
          // Generic structure for other targets (e.g., GROCY)
          type: "object",
        },
      ],
    },
    statusCode: { type: "number" },
    message: { type: "string" },
  },
  required: ["data", "statusCode"],
} as const;
