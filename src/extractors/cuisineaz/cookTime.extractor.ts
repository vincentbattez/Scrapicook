import { Page } from "@playwright/test";
import { stringUtils } from "@src/utils/string";

import { ICookTime } from "@models/cooktime/cooktime.interface";
import { CookTimeModel } from "@models/cooktime/cooktime.model";

import { ICooktimeExtractor } from "@extractors/interfaces/cooktime-extractor.interface";

const CUISINEAZ_COOKTIME_PREPARATION_TITLE_LIST = ["preparation"];
const CUISINEAZ_COOKTIME_COOKING_TITLE_LIST = ["cuisson"];
const CUISINEAZ_COOKTIME_REST_TITLE_LIST = ["repos"];

export const cuisineAZCookTimeExtractor: ICooktimeExtractor = {
  extract: async (page: Page): Promise<CookTimeModel> => {
    const cookTimeLocator = page.locator(".recipe_time_informations_container");
    const cookTimeTitleList = await cookTimeLocator
      .locator(".recipe_time_information_title")
      .allInnerTexts();
    const cookTimeValueList = await cookTimeLocator
      .locator(".recipe_time_information")
      .allInnerTexts();

    const cookTimeMapping: {
      [K in keyof ICookTime]: string[];
    } = {
      preparation: CUISINEAZ_COOKTIME_PREPARATION_TITLE_LIST,
      cooking: CUISINEAZ_COOKTIME_COOKING_TITLE_LIST,
      rest: CUISINEAZ_COOKTIME_REST_TITLE_LIST,
    };

    const cookTime = Object.entries(cookTimeMapping).reduce(
      (acc: Partial<ICookTime>, [typeTime, targetTitleList]) => {
        let timeMatching;

        try {
          timeMatching = stringUtils.findFirstMatchingString({
            sourceWordList: cookTimeTitleList,
            targetWordList: targetTitleList,
          });
        } catch (e) {
          console.warn(e);

          return acc;
        }

        const [value, ...unit] =
          cookTimeValueList[timeMatching.firstMatchingStringIndex].split(" ");

        return {
          ...acc,
          [typeTime]: {
            value,
            unit: unit.join(" "),
          },
        };
      },
      {},
    );

    return new CookTimeModel(cookTime);
  },
};
