import {Page} from "@playwright/test";
import { INumberOfPersonExtractor } from "@extractors/interfaces/numberOfPerson-extractor.interface";
import {NumberOfPersonModel} from "@models/numberOfPerson/numberOfPerson.model";

export const cuisineAZNumberOfPersonExtractor: INumberOfPersonExtractor = {
  extract: async (page: Page): Promise<NumberOfPersonModel> => {
    const numberOfPersonLocator = await page.locator('.recipe_utils_information').allInnerTexts();
    const numberOfPersonString = numberOfPersonLocator.find((text) => text.includes("pers"));
    const numberOfPerson = numberOfPersonString?.split(" ")[0] ?? null;

    return new NumberOfPersonModel(numberOfPerson);
  },
}
