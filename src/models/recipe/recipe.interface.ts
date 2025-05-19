import {AstuceModel} from "@models/astuce/astuce.model";
import {TitleModel} from "@models/title/title.model";
import {ImageModel} from "@models/image/image.model";
import {CookTimeModel} from "@models/cooktime/cooktime.model";
import {NumberOfPersonModel} from "@models/numberOfPerson/numberOfPerson.model";
import {IngredientListModel} from "@models/ingredient/ingredient.model";
import {StepListModel} from "@models/step/step.model";

export interface IRecipe {
  title: TitleModel,
  image: ImageModel,
  cookTime: CookTimeModel,
  numberOfPerson: NumberOfPersonModel,
  ingredients: IngredientListModel,
  steps: StepListModel,
  astuce: AstuceModel,
}
