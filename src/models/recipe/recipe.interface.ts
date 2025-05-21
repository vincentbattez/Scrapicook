import { IAstuce } from "@models/astuce/astuce.interface";
import { AstuceModel } from "@models/astuce/astuce.model";
import { ICookTime } from "@models/cooktime/cooktime.interface";
import { CookTimeModel } from "@models/cooktime/cooktime.model";
import { IImage } from "@models/image/image.interface";
import { ImageModel } from "@models/image/image.model";
import { IIngredient } from "@models/ingredient/ingredient.interface";
import { IngredientListModel } from "@models/ingredient/ingredient.model";
import { INumberOfPerson } from "@models/numberOfPerson/numberOfPerson.interface";
import { NumberOfPersonModel } from "@models/numberOfPerson/numberOfPerson.model";
import { IRecipeSource } from "@models/recipe-source/recipe-source.interface";
import { RecipeSourceModel } from "@models/recipe-source/recipe-source.model";
import { IStep } from "@models/step/step.interface";
import { StepListModel } from "@models/step/step.model";
import { ITitle } from "@models/title/title.interface";
import { TitleModel } from "@models/title/title.model";

export interface IRecipe {
  title: TitleModel;
  image: ImageModel;
  cookTime: CookTimeModel;
  numberOfPerson: NumberOfPersonModel;
  ingredientList: IngredientListModel;
  stepList: StepListModel;
  astuce: AstuceModel;
  recipeSource: RecipeSourceModel;
}

export interface IJSONRecipe {
  title: ITitle;
  image: IImage;
  cookTime: ICookTime;
  numberOfPerson: INumberOfPerson;
  ingredientList: IIngredient[];
  stepList: IStep[];
  astuce: IAstuce;
  recipeSource: IRecipeSource;
}
