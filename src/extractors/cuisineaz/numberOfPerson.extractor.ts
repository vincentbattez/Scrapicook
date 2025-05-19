import { INumberOfPersonExtractor } from "@extractors/interfaces/numberOfPerson-extractor.interface";
import {Page} from "@playwright/test";
import {NumberOfPersonModel} from "@models/numberOfPerson/numberOfPerson.model";

export class CuisineAZNumberOfPersonExtractor implements INumberOfPersonExtractor {
  static async extract(page: Page): Promise<NumberOfPersonModel> {
    const numberOfPersonLocator = await page.locator('.recipe_utils_information').allInnerTexts();
    const numberOfPersonString = numberOfPersonLocator.find((text) => text.includes("pers"));
    const numberOfPerson = numberOfPersonString?.split(" ")[0] ?? null;

    const NumberOfPerson = new NumberOfPersonModel();

    // 🌟 Feed NumberOfPerson
    NumberOfPerson.fromExtractor(numberOfPerson);

    return NumberOfPerson;
  }
}
