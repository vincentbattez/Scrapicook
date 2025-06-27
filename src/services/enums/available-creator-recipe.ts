import { ICreatorAbstract } from "@creators/interfaces/common/creatorAbstract.interface";
import { JowRecipeCreator } from "@creators/jow/recipe-creator";

export enum AvailableCreatorRecipeEnum {
  JOW = "jow",
  // GROCY = "grocy",
}

// @todo: replace any
export const availableCreatorMapping: Record<
  AvailableCreatorRecipeEnum,
  ICreatorAbstract<any>
> = {
  [AvailableCreatorRecipeEnum.JOW]: new JowRecipeCreator(),
};
