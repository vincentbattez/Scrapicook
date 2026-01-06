import { Page } from "@playwright/test";
import { logger } from "@src/server";
import { stringUtils } from "@src/utils/string";

import { AstuceModel } from "@models/astuce/astuce.model";

import { IAstuceExtractor } from "@extractors/interfaces/astuce-extractor.interface";
import { AbstractExtractor } from "@extractors/interfaces/common/extractorAbstract.interface";

const CUISINEAZ_ASTUCE_TITLE_LIST = ["astuce", "tips", "conseil"];

export class CuisineAZAstuceExtractor
  extends AbstractExtractor<AstuceModel>
  implements IAstuceExtractor
{
  constructor() {
    super("astuce");
  }

  protected async doExtract(page: Page): Promise<AstuceModel> {
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
      logger.warn(e);

      return new AstuceModel(null);
    }

    let astuce = extractedAstuceList[matchingString.firstMatchingStringIndex]
      .split("\n")
      .slice(1)
      .join("\n")
      .trim();

    return new AstuceModel(astuce);
  }
}

export const cuisineAZAstuceExtractor = new CuisineAZAstuceExtractor();
