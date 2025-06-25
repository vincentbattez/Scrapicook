import { Page } from "@playwright/test";

import { RecipeSourceModel } from "@models/recipe-source/recipe-source.model";
import { RecipeModel } from "@models/recipe/recipe.model";

import { cuisineAZAstuceExtractor } from "@extractors/cuisineaz/astuce.extractor";
import { cuisineAZCookTimeExtractor } from "@extractors/cuisineaz/cookTime.extractor";
import { cuisineAZImageExtractor } from "@extractors/cuisineaz/image.extractor";
import { cuisineAZIngredientExtractor } from "@extractors/cuisineaz/ingredient.extractor";
import { cuisineAZNumberOfPersonExtractor } from "@extractors/cuisineaz/numberOfPerson.extractor";
import { cuisineAZStepExtractor } from "@extractors/cuisineaz/step.extractor";
import { cuisineAZTitleExtractor } from "@extractors/cuisineaz/title.extractor";
import { IExtractorSource } from "@extractors/interfaces/extractorAbstract.interface";

export const cuisineAZRecipeExtractor: IExtractorSource<RecipeModel> = {
  extract: async (
    page: Page,
    RecipeSource: RecipeSourceModel,
  ): Promise<RecipeModel> => {
    return new RecipeModel({
      title: await cuisineAZTitleExtractor.extract(page),
      image: await cuisineAZImageExtractor.extract(page),
      cookTime: await cuisineAZCookTimeExtractor.extract(page),
      numberOfPerson: await cuisineAZNumberOfPersonExtractor.extract(page),
      ingredientList: await cuisineAZIngredientExtractor.extract(page),
      stepList: await cuisineAZStepExtractor.extract(page),
      astuce: await cuisineAZAstuceExtractor.extract(page),
      recipeSource: RecipeSource,
    });
  },
};
