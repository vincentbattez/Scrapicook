import { Page } from "@playwright/test";
import { stringUtils } from "@src/utils/string";

import { AstuceModel } from "@models/astuce/astuce.model";

import { IAstuceExtractor } from "@extractors/interfaces/astuce-extractor.interface";

const CUISINEAZ_ASTUCE_TITLE_LIST = ["astuce", "tips", "conseil"];

export const cuisineAZAstuceExtractor: IAstuceExtractor = {
  extract: async (page: Page): Promise<AstuceModel> => {
    const extractedAstuceList = await page
      .locator(".recipe_section")
      .allInnerTexts();
    let matchingString;

    try {
      matchingString = stringUtils.findFirstMatchingString({
        sourceWordList: extractedAstuceList,
        targetWordList: CUISINEAZ_ASTUCE_TITLE_LIST,
      });
    } catch (e) {
      console.warn(e);

      return new AstuceModel(null);
    }

    let astuce = extractedAstuceList[matchingString.firstMatchingStringIndex]
      .split("\n")
      .slice(1)
      .join("\n")
      .trim();

    return new AstuceModel(astuce);
  },
};
