export const extractRecipeQuerySchema = {
  title: "Schema of the params to get quote history",
  type: "object",
  properties: {
    urlSource: {
      type: "string",
      description: "URL of the recipe page to extract",
    },
  },
  required: ["urlSource"],
} as const;
