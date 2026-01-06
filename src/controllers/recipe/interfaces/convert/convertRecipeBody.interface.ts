export interface IConvertRecipeBody {
  title: string;
  image: string;
  cookTime: {
    preparation: {
      value: number | null;
      unit: string | null;
    };
    cooking: {
      value: number | null;
      unit: string | null;
    };
    rest: {
      value: number | null;
      unit: string | null;
    };
  };
  numberOfPerson: number;
  ingredientList: Array<{
    label: string;
    quantity: number;
    unit: string | null;
  }>;
  stepList: Array<{
    step: {
      step: number;
      description: string;
    };
  }>;
  astuce: string;
  recipeSource: {
    source: string;
    title: string;
    url: string;
  };
}
