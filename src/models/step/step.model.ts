import { IStep } from "@models/step/step.interface";
import {
  IJowCreateRecipeBody
} from "queries/jow/interfaces/requests/jowCreateRecipeBody.interface";

export class StepModel {
  private readonly step: IStep;

  constructor(step: IStep) {
    this.step = {
      step: step.step,
      description: step.description,
    };
  }

  public getStep(): IStep {
    return this.step;
  }

  public toJowRecipe(): IStep {
    const jowMaxStepLength = 350;
    const jowStep = this.step;

    if (jowStep.description.length > jowMaxStepLength) {
      jowStep.description = jowStep.description.slice(0, jowMaxStepLength - 3) + '...';
      console.warn(`Step ${jowStep.step} description is too long. Truncated to ${jowMaxStepLength} characters.`);
    }

    return jowStep;
  }
}

export class StepListModel {
  private readonly step: StepModel[] = [];
  private stepCount: number = 0;

  public getStep(): StepModel[] {
    return this.step;
  }

  public pushStep(description: string): void {
    this.step.push(new StepModel({
      step: ++this.stepCount,
      description,
    }));
  }

  public toJowRecipe(): Pick<IJowCreateRecipeBody, "directions"> {
    return {
      directions: this.step.map((step) => {
        return {
          label: step.toJowRecipe().description,
          involvedIngredients: [],
        };
      }),
    }
  }
}
