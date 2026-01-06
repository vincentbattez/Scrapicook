import { Page } from "@playwright/test";

import { StepListModel } from "@models/step/step.model";

import { AbstractExtractor } from "@extractors/interfaces/common/extractorAbstract.interface";
import { IStepExtractor } from "@extractors/interfaces/step-extractor.interface";

export class CuisineAZStepExtractor
  extends AbstractExtractor<StepListModel>
  implements IStepExtractor
{
  constructor() {
    super("step");
  }

  protected async doExtract(page: Page): Promise<StepListModel> {
    const preparationStepDescriptionList = await page
      .locator(".preparation_steps .preparation_step p")
      .allInnerTexts();
    const StepList = new StepListModel();

    preparationStepDescriptionList.forEach((stepDescription) => {
      StepList.pushStep(stepDescription);
    });

    return StepList;
  }
}

export const cuisineAZStepExtractor = new CuisineAZStepExtractor();
