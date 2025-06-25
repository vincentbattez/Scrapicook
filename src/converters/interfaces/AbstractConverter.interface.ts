import { AstuceModel } from "@models/astuce/astuce.model";
import { CookTimeModel } from "@models/cooktime/cooktime.model";
import { ImageModel } from "@models/image/image.model";
import {
  IngredientListModel,
  IngredientModel,
} from "@models/ingredient/ingredient.model";
import { UnitModel } from "@models/ingredient/unit/unit.model";
import { NumberOfPersonModel } from "@models/numberOfPerson/numberOfPerson.model";
import { RecipeModel } from "@models/recipe/recipe.model";
import { StepListModel, StepModel } from "@models/step/step.model";
import { TitleModel } from "@models/title/title.model";

export interface IAbstractConverter {
  // @todo: how to type this?
  toTitle(titleModel: TitleModel): any;
  toAstuce(astuceModel: AstuceModel): any;
  toCookTime(cookTimeModel: CookTimeModel): any;
  toIngredient(ingredientModel: IngredientModel): any;
  toIngredientList(ingredientListModel: IngredientListModel): any;
  toUnit(unitModel: UnitModel): any;
  toImage(imageModel: ImageModel): any;
  toNumberOfPerson(numberOfPersonModel: NumberOfPersonModel): any;
  toRecipe(recipeModel: RecipeModel): any;
  toStep(stepModel: StepModel): any;
  toStepList(stepModelList: StepListModel): any;
}
