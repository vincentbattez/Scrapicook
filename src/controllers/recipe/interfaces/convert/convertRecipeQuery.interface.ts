import { AvailableCreatorRecipeEnum } from "@services/enums/available-creator-recipe";

export interface IConvertRecipeQuery {
  target: AvailableCreatorRecipeEnum | "JOW" | "GROCY";
}
