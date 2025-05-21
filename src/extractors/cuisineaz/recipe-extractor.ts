import { Page } from "@playwright/test";
import {RecipeModel} from "@models/recipe/recipe.model";
import {cuisineAZIngredientExtractor} from "@extractors/cuisineaz/ingredient.extractor";
import {cuisineAZNumberOfPersonExtractor} from "@extractors/cuisineaz/numberOfPerson.extractor";
import {cuisineAZCookTimeExtractor} from "@extractors/cuisineaz/cookTime.extractor";
import {cuisineAZTitleExtractor} from "@extractors/cuisineaz/title.extractor";
import {cuisineAZImageExtractor} from "@extractors/cuisineaz/image.extractor";
import {cuisineAZStepExtractor} from "@extractors/cuisineaz/step.extractor";
import {cuisineAZAstuceExtractor} from "@extractors/cuisineaz/astuce.extractor";
import {RecipeSourceModel} from "@models/recipe-source/recipe-source.model";

export const cuisineAZRecipeExtractor = {
  extract: async (page: Page, RecipeSource: RecipeSourceModel): Promise<RecipeModel> => {
    return new RecipeModel({
      title: await cuisineAZTitleExtractor.extract(page),
      image: await cuisineAZImageExtractor.extract(page),
      cookTime: await cuisineAZCookTimeExtractor.extract(page),
      numberOfPerson: await cuisineAZNumberOfPersonExtractor.extract(page),
      ingredientList: await cuisineAZIngredientExtractor.extract(page, RecipeSource),
      stepList: await cuisineAZStepExtractor.extract(page),
      astuce: await cuisineAZAstuceExtractor.extract(page),
      recipeSource: RecipeSource,
    });
  },
}
