import { ExtractorRecipeAvailableEnum } from "@models/recipe-source/recipe-source.model";

export interface IRecipeSource {
  source: ExtractorRecipeAvailableEnum;
  title: string;
  url: string;
}
