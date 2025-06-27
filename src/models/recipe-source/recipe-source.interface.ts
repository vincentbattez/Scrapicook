import { AvailableExtractorRecipeEnum } from "@services/enums/available-extractor-recipe";

export interface IRecipeSource {
  source: AvailableExtractorRecipeEnum;
  title: string;
  url: string;
}
