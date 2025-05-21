import { Page } from "@playwright/test";

import { StepListModel } from "@models/step/step.model";

import { IStepExtractor } from "@extractors/interfaces/step-extractor.interface";

export const cuisineAZStepExtractor: IStepExtractor = {
  extract: async (page: Page): Promise<StepListModel> => {
    const preparationStepDescriptionList = await page
      .locator(".preparation_steps .preparation_step p")
      .allInnerTexts();
    const StepList = new StepListModel();

    preparationStepDescriptionList.forEach((stepDescription) => {
      StepList.pushStep(stepDescription);
    });

    return StepList;
  },
};
