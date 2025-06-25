import {
  IConvertibleAbstract,
  IModelWith,
} from "@models/interfaces/modelAbstract.interface";
import { IStep } from "@models/step/step.interface";

import { recipeConverterFactory } from "@factories/recipe-converter-factory";

import { DestinationRecipeAvailableEnum } from "@services/recipe-creator";

export class StepModel implements IModelWith<IStep, IConvertibleAbstract> {
  private readonly step: IStep;

  constructor(step: IStep) {
    this.step = {
      step: step.step,
      description: step.description,
    };
  }

  public get(): IStep {
    return this.step;
  }

  convert(availableConverter: DestinationRecipeAvailableEnum) {
    return recipeConverterFactory.convert(availableConverter).toStep(this);
  }
}

export class StepListModel
  implements IModelWith<StepModel[], IConvertibleAbstract>
{
  private readonly step: StepModel[] = [];
  private stepCount: number = 0;

  public get(): StepModel[] {
    return this.step.map((step) => step);
  }

  public pushStep(description: string): void {
    this.step.push(
      new StepModel({
        step: ++this.stepCount,
        description,
      }),
    );
  }

  convert(availableConverter: DestinationRecipeAvailableEnum) {
    return recipeConverterFactory.convert(availableConverter).toStepList(this);
  }
}
