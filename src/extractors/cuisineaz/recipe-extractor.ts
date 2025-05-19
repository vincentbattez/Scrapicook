import {RecipeModel} from "@models/recipe/recipe.model";
import {
  CuisineAZIngredientExtractor,
} from "@extractors/cuisineaz/ingredient.extractor";
import { Page } from "@playwright/test";
import {
  CuisineAZNumberOfPersonExtractor
} from "@extractors/cuisineaz/numberOfPerson.extractor";
import {
  CuisineAZCookTimeExtractor
} from "@extractors/cuisineaz/cookTime.extractor";
import {CuisineAZTitleExtractor} from "@extractors/cuisineaz/title.extractor";
import {CuisineAZImageExtractor} from "@extractors/cuisineaz/image.extractor";
import {CuisineAZStepExtractor} from "@extractors/cuisineaz/step.extractor";
import {CuisineAZAstuceExtractor} from "@extractors/cuisineaz/astuce.extractor";

export class CuisineAZRecipeExtractor implements RecipeModel {
  static async create(page: Page): Promise<RecipeModel> {
    return new RecipeModel({
      title: await CuisineAZTitleExtractor.extract(page),
      image: await CuisineAZImageExtractor.extract(page),
      cookTime: await CuisineAZCookTimeExtractor.extract(page),
      numberOfPerson: await CuisineAZNumberOfPersonExtractor.extract(page),
      ingredients: await CuisineAZIngredientExtractor.extract(page),
      steps: await CuisineAZStepExtractor.extract(page),
      astuce: await CuisineAZAstuceExtractor.extract(page),
    });
  }
}
