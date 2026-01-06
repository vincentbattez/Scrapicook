export const convertRecipeBodySchema = {
  title: "Schema of the RecipeModel to convert",
  type: "object",
  properties: {
    title: { type: "string" },
    image: { type: "string" },
    cookTime: {
      type: "object",
      properties: {
        preparation: {
          type: "object",
          properties: {
            value: { type: ["number", "null"] },
            unit: { type: ["string", "null"] },
          },
          required: ["value", "unit"],
        },
        cooking: {
          type: "object",
          properties: {
            value: { type: ["number", "null"] },
            unit: { type: ["string", "null"] },
          },
          required: ["value", "unit"],
        },
        rest: {
          type: "object",
          properties: {
            value: { type: ["number", "null"] },
            unit: { type: ["string", "null"] },
          },
          required: ["value", "unit"],
        },
      },
      required: ["preparation", "cooking", "rest"],
    },
    numberOfPerson: { type: "number" },
    ingredientList: {
      type: "array",
      items: {
        type: "object",
        properties: {
          label: { type: "string" },
          quantity: { type: "number" },
          unit: { type: ["string", "null"] },
        },
        required: ["label", "quantity", "unit"],
      },
    },
    stepList: {
      type: "array",
      items: {
        type: "object",
        properties: {
          step: {
            type: "object",
            properties: {
              step: { type: "number" },
              description: { type: "string" },
            },
            required: ["step", "description"],
          },
        },
        required: ["step"],
      },
    },
    astuce: { type: "string" },
    recipeSource: {
      type: "object",
      properties: {
        source: { type: "string" },
        title: { type: "string" },
        url: { type: "string" },
      },
      required: ["source", "title", "url"],
    },
  },
  required: [
    "title",
    "image",
    "cookTime",
    "numberOfPerson",
    "ingredientList",
    "stepList",
    "astuce",
    "recipeSource",
  ],
} as const;
