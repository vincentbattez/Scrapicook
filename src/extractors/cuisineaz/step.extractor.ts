import {Page} from "@playwright/test";
import {IStepExtractor} from "@extractors/interfaces/step-extractor.interface";
import {StepListModel} from "@models/step/step.model";

export class CuisineAZStepExtractor implements IStepExtractor {
  static async extract(page: Page): Promise<StepListModel> {
    const preparationSteps = await page.locator('.preparation_steps .preparation_step p').allInnerTexts();
    const StepList = new StepListModel();

    preparationSteps.forEach(step => {
      StepList.pushStep(step);
    });

    return StepList;
  }
}
