export interface IExtractRecipe200Response {
  data: {
    recipe: {
      title: string;
      ingredients: Array<{
        name: string;
        quantity: string;
        unit?: string;
      }>;
      steps: string[];
      cookTime?: {
        preparation: number;
        cooking: number;
        total: number;
      };
      servings: number;
      tips?: string;
      image?: string;
    };
    source: {
      url: string;
      extractor: string;
    };
    extractionTime: string;
  };
}
