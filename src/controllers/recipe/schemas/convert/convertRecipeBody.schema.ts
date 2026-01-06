export const convertRecipeBodySchema = {
  title: "Schema of the RecipeModel to convert",
  type: "object",
  properties: {
    recipe: {
      type: "object",
      properties: {
        title: {
          type: "object",
          properties: {
            title: { type: "string" },
          },
          required: ["title"],
        },
        image: {
          type: "object",
          properties: {
            image: { type: "string" },
          },
          required: ["image"],
        },
        cookTime: {
          type: "object",
          properties: {
            cooktime: {
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
          },
          required: ["cooktime"],
        },
        numberOfPerson: {
          type: "object",
          properties: {
            numberOfPerson: { type: "number" },
          },
          required: ["numberOfPerson"],
        },
        ingredientList: {
          type: "object",
          properties: {
            ingredientList: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  label: { type: "string" },
                  quantity: { type: "number" },
                  unit: {
                    type: "object",
                    properties: {
                      unit: { type: ["string", "null"] },
                    },
                    required: ["unit"],
                  },
                },
                required: ["label", "quantity", "unit"],
              },
            },
          },
          required: ["ingredientList"],
        },
        stepList: {
          type: "object",
          properties: {
            step: {
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
            stepCount: { type: "number" },
          },
          required: ["step", "stepCount"],
        },
        astuce: {
          type: "object",
          properties: {
            astuce: { type: "string" },
          },
          required: ["astuce"],
        },
        recipeSource: {
          type: "object",
          properties: {
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
          required: ["recipeSource"],
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
    },
  },
  required: ["recipe"],
} as const;
