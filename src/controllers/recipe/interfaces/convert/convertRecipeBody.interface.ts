export interface IConvertRecipeBody {
  recipe: {
    title: {
      title: string;
    };
    image: {
      image: string;
    };
    cookTime: {
      cooktime: {
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
    };
    numberOfPerson: {
      numberOfPerson: number;
    };
    ingredientList: {
      ingredientList: Array<{
        label: string;
        quantity: number;
        unit: {
          unit: string | null;
        };
      }>;
    };
    stepList: {
      step: Array<{
        step: {
          step: number;
          description: string;
        };
      }>;
      stepCount: number;
    };
    astuce: {
      astuce: string;
    };
    recipeSource: {
      recipeSource: {
        source: string;
        title: string;
        url: string;
      };
    };
  };
}
