import { IModelAbstract } from "@models/interfaces/modelAbstract.interface";
import { IStep } from "@models/step/step.interface";

import { IJowCreateRecipeBody } from "@queries/jow/interfaces/requests/jowCreateRecipeBody.interface";

export class StepModel implements IModelAbstract<IStep> {
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

  public toJowRecipe(): IStep {
    const jowMaxStepLength = 350;
    const jowStep = this.step;

    if (jowStep.description.length > jowMaxStepLength) {
      jowStep.description =
        jowStep.description.slice(0, jowMaxStepLength - 3) + "...";

      console.warn(
        `Step ${jowStep.step} description is too long. Truncated to ${jowMaxStepLength} characters.`,
      );
    }

    return jowStep;
  }
}

export class StepListModel implements IModelAbstract<IStep[]> {
  private readonly step: StepModel[] = [];
  private stepCount: number = 0;

  public get(): IStep[] {
    return this.step.map((step) => step.get());
  }

  public pushStep(description: string): void {
    this.step.push(
      new StepModel({
        step: ++this.stepCount,
        description,
      }),
    );
  }

  public toJowRecipe(): Pick<IJowCreateRecipeBody, "directions"> {
    return {
      directions: this.step.map((step) => {
        return {
          label: step.toJowRecipe().description,
          involvedIngredients: [],
        };
      }),
    };
  }
}
