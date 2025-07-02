export const extractRecipeQuerySchema = {
  title: "Schema of the params to get quote history",
  type: "object",
  properties: {
    urlSource: {
      type: "string",
      description: "URL of the recipe page to extract",
    },
    target: {
      type: "string",
      description:
        "Target platform for the recipe extraction (e.g., JOW, CuisineAZ)",
    },
  },
  required: ["urlSource", "target"],
} as const;
