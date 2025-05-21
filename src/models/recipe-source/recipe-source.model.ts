import { stringUtils } from "@src/utils/string";

import { IModelAbstract } from "@models/interfaces/modelAbstract.interface";
import { IRecipeSource } from "@models/recipe-source/recipe-source.interface";

export enum ExtractorRecipeAvailableEnum {
  CUISINEAZ = "cuisineaz",
}

export class RecipeSourceModel implements IModelAbstract<IRecipeSource> {
  private readonly recipeSource: IRecipeSource;

  constructor(recipeSource: { source: string; title: string; url: string }) {
    // get extractor source enum
    const extractorRecipeAvailableEnumList = Object.values(
      ExtractorRecipeAvailableEnum,
    );
    const availableExtractor = stringUtils.findFirstMatchingString({
      sourceWordList: extractorRecipeAvailableEnumList,
      targetWordList: [recipeSource.source],
    });
    const availableExtractorEnum =
      extractorRecipeAvailableEnumList[
        availableExtractor.firstMatchingStringIndex
      ];

    this.recipeSource = {
      source: availableExtractorEnum,
      title: recipeSource.title,
      url: recipeSource.url,
    };
  }

  public get(): IRecipeSource {
    return this.recipeSource;
  }
}
