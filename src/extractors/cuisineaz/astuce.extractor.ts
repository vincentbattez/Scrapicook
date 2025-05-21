import {Page} from "@playwright/test";
import {IAstuceExtractor} from "@extractors/interfaces/astuce-extractor.interface";
import {AstuceModel} from "@models/astuce/astuce.model";
import {stringUtils} from "@src/utils/string";

const CUISINEAZ_ASTUCE_TITLE = ['astuce', 'tips', 'conseil'];

export const cuisineAZAstuceExtractor: IAstuceExtractor = {
  extract: async (page: Page): Promise<AstuceModel> => {
    const extractedAstuceList = await page.locator('.recipe_section').allInnerTexts();
    let matchingString

    try {
      matchingString = stringUtils.findFirstMatchingString({
        sourceWordList: extractedAstuceList,
        targetWordList: CUISINEAZ_ASTUCE_TITLE,
      })
    } catch (e) {
      console.warn(e);
      return new AstuceModel(null);
    }

    let astuce = extractedAstuceList[matchingString.firstMatchingStringIndex]
      .split('\n')
      .slice(1)
      .join('\n')
      .trim()

    return new AstuceModel(astuce);
  }
}
