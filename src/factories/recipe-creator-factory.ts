import {RecipeCreationAppEnum} from "@services/recipe-creator";
import {JowRecipeCreator} from "@src/creators/jow/recipe-creator";
import {RecipeModel} from "@models/recipe/recipe.model";

export class RecipeCreatorFactory {
  static create(Recipe: RecipeModel, destination: RecipeCreationAppEnum): Promise<any> {
    // Extract the source from the URL
    if (destination === RecipeCreationAppEnum.JOW) {
      console.log(`🌟 Create ${destination} recipe`);
      return JowRecipeCreator.create(Recipe);
    }

    throw new Error(`Destination non supportée (${destination})`);
  }
}
