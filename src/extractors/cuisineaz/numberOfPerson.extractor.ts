import { Page } from "@playwright/test";

import { NumberOfPersonModel } from "@models/numberOfPerson/numberOfPerson.model";

import { AbstractExtractor } from "@extractors/interfaces/common/extractorAbstract.interface";
import { INumberOfPersonExtractor } from "@extractors/interfaces/numberOfPerson-extractor.interface";

export class CuisineAZNumberOfPersonExtractor
  extends AbstractExtractor<NumberOfPersonModel>
  implements INumberOfPersonExtractor
{
  constructor() {
    super("numberOfPerson");
  }

  protected async doExtract(page: Page): Promise<NumberOfPersonModel> {
    const numberOfPersonLocatorList = await page
      .locator(".recipe_utils_information")
      .allInnerTexts();
    const numberOfPersonString = numberOfPersonLocatorList.find((text) =>
      text.includes("pers"),
    );
    const numberOfPerson = numberOfPersonString?.split(" ")[0] ?? null;

    return new NumberOfPersonModel(numberOfPerson);
  }
}

export const cuisineAZNumberOfPersonExtractor =
  new CuisineAZNumberOfPersonExtractor();
