import { RecipeModel } from "@models/recipe/recipe.model";

import {
  AvailableCreatorRecipeEnum,
  availableCreatorMapping,
} from "@services/enums/available-creator-recipe";

export const recipeCreatorFactory = {
  create(Recipe: RecipeModel, target: AvailableCreatorRecipeEnum): any {
    // Check if the target is supported
    if (!availableCreatorMapping[target]) {
      throw new Error(`Target recipe "${target}" is not supported`);
    }

    console.log(`🌟 Create ${target} target recipe`);

    return availableCreatorMapping[target].create(Recipe);
  },
};
