import { JowRecipeCreator } from "@src/creators/jow/recipe-creator";

import { RecipeModel } from "@models/recipe/recipe.model";

import { DestinationRecipeAvailableEnum } from "@services/recipe-creator";

// export enum DestinationRecipeAvailableEnum {
//   JOW = "jow",
//   // GROCY = "grocy",
// }
// Mapping des créateurs par destination
// @todo: remove const and use imported enum
const availableCreatorMapping = {
  [DestinationRecipeAvailableEnum.JOW]: JowRecipeCreator,
};

export const recipeCreatorFactory = {
  create(Recipe: RecipeModel, destination: DestinationRecipeAvailableEnum) {
    // Check if the destination is supported
    if (!availableCreatorMapping[destination]) {
      throw new Error(`Destination recipe "${destination}" is not supported`);
    }

    console.log(`🌟 Create ${destination} destination recipe`);

    return availableCreatorMapping[destination].create(Recipe);
  },
};
