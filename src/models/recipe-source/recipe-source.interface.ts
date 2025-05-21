import {
  extractorRecipeAvailableEnum
} from "@models/recipe-source/recipe-source.model";

export interface IRecipeSource {
  source: extractorRecipeAvailableEnum;
  title: string;
  url: string;
}
