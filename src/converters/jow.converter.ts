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

import { IAbstractConverter } from "@converters/interfaces/AbstractConverter.interface";

import {
  IJowCreateRecipeBody,
  IJowDirection,
} from "@queries/jow/interfaces/requests/jowCreateRecipeBody.interface";

import { AvailableCreatorRecipeEnum } from "@services/enums/available-creator-recipe";

export class JowConverter implements IAbstractConverter {
  private readonly creatorEnum = AvailableCreatorRecipeEnum.JOW;

  toTitle(titleModel: TitleModel): Pick<IJowCreateRecipeBody, "title"> {
    const title = titleModel.get();
    const maxJowTitleLength = 50;

    if (title.length <= maxJowTitleLength) {
      return {
        title,
      };
    }

    const truncated = title.slice(0, maxJowTitleLength - 3) + "...";

    console.warn(
      `Title is too long. Truncated to ${maxJowTitleLength} characters.`,
    );

    return {
      title: truncated,
    };
  }

  toAstuce(astuceModel: AstuceModel): Pick<IJowCreateRecipeBody, "tip"> {
    const jowMaxAstuceLength = 350;
    let jowAstuce = astuceModel.get();

    if (!jowAstuce) {
      return {
        tip: {
          description: "",
        },
      };
    }

    if (jowAstuce.length > jowMaxAstuceLength) {
      jowAstuce = jowAstuce.slice(0, jowMaxAstuceLength - 3) + "...";

      console.warn(
        `Astuce description is too long. Truncated to ${jowMaxAstuceLength} characters.`,
      );
    }

    return {
      tip: {
        description: jowAstuce,
      },
    };
  }

  toCookTime(
    cookTimeModel: CookTimeModel,
  ): Pick<
    IJowCreateRecipeBody,
    "cookingTime" | "preparationTime" | "restingTime"
  > {
    return {
      cookingTime: cookTimeModel.get().cooking.value
        ? String(cookTimeModel.get().cooking.value)
        : "",
      preparationTime: cookTimeModel.get().preparation.value
        ? String(cookTimeModel.get().preparation.value)
        : "",
      restingTime: cookTimeModel.get().rest.value
        ? String(cookTimeModel.get().rest.value)
        : "",
    };
  }

  toIngredient(ingredientModel: IngredientModel) {
    // @todo: do it
    throw new Error("Function not implemented.");
  }

  toUnit(unitModel: UnitModel) {
    // @todo: do it
    throw new Error("Function not implemented.");
  }

  toIngredientList(ingredientListModel: IngredientListModel): unknown {
    // @todo: do it
    throw new Error("Function not implemented.");
  }

  toImage(imageModel: ImageModel): Pick<IJowCreateRecipeBody, "imageUrl"> {
    return {
      imageUrl: imageModel.get() ?? "",
    };
  }

  toNumberOfPerson(
    numberOfPersonModel: NumberOfPersonModel,
  ): Pick<IJowCreateRecipeBody, "userCoversCount"> {
    return {
      userCoversCount: numberOfPersonModel.get(),
    };
  }

  toRecipe(recipeModel: RecipeModel): IJowCreateRecipeBody {
    const recipe = recipeModel.get();

    return {
      additionalConstituents: [],
      backgroundPattern: {
        color: "#075526",
        imageUrl: "patterns/kale-03.png",
      },
      requiredTools: [],
      placeHolderUrl: "placeholders/plate.png",
      staticCoversCount: false,
      userConstituents: [],
      constituents: [], // @todo: list of ingredients
      recipeFamily: "", // @todo: c'est quoi ?
      ...recipe.cookTime.convert(this.creatorEnum),
      ...recipe.image.convert(this.creatorEnum),
      ...recipe.astuce.convert(this.creatorEnum),
      ...recipe.title.convert(this.creatorEnum),
      ...recipe.numberOfPerson.convert(this.creatorEnum),
      ...recipe.stepList.convert(this.creatorEnum),
    };
  }

  toStep(stepModel: StepModel): IJowDirection {
    const jowMaxStepLength = 350;
    const jowStep = stepModel.get();

    if (jowStep.description.length > jowMaxStepLength) {
      jowStep.description =
        jowStep.description.slice(0, jowMaxStepLength - 3) + "...";

      console.warn(
        `Step ${jowStep.step} description is too long. Truncated to ${jowMaxStepLength} characters.`,
      );
    }

    return {
      label: jowStep.description,
      involvedIngredients: [],
    };
  }

  toStepList(
    stepListModel: StepListModel,
  ): Pick<IJowCreateRecipeBody, "directions"> {
    return {
      directions: stepListModel.get().map((stepModel) => {
        return stepModel.convert(this.creatorEnum);
      }),
    };
  }
}
