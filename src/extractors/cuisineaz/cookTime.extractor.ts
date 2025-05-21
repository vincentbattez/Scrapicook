import {Page} from "@playwright/test";
import {ICooktimeExtractor} from "@extractors/interfaces/cooktime-extractor.interface";
import {CookTimeModel} from "@models/cooktime/cooktime.model";
import {stringUtils} from "@src/utils/string";
import {ICookTime} from "@models/cooktime/cooktime.interface";

const CUISINEAZ_COOKTIME_PREPARATION_TITLE = ['preparation'];
const CUISINEAZ_COOKTIME_COOKING_TITLE = ['cuisson'];
const CUISINEAZ_COOKTIME_REST_TITLE = ['repos'];

export const cuisineAZCookTimeExtractor: ICooktimeExtractor = {
  extract: async (page: Page): Promise<CookTimeModel> => {
    const cookTimeLocator = page.locator('.recipe_time_informations_container');
    const cookTimeTitleList = await cookTimeLocator.locator('.recipe_time_information_title').allInnerTexts();
    const cookTimeValueList = await cookTimeLocator.locator('.recipe_time_information').allInnerTexts();

    const cookTimeMapping: {
      [K in keyof ICookTime]: string[]
    } = {
      preparation: CUISINEAZ_COOKTIME_PREPARATION_TITLE,
      cooking: CUISINEAZ_COOKTIME_COOKING_TITLE,
      rest: CUISINEAZ_COOKTIME_REST_TITLE,
    }

    const cookTime = Object.entries(cookTimeMapping).reduce((acc: Partial<ICookTime>, [typeTime, targetTitleList]) => {
      let timeMatching;

      try {
        timeMatching = stringUtils.findFirstMatchingString({
          sourceWordList: cookTimeTitleList,
          targetWordList: targetTitleList,
        })
      } catch (e) {
        console.warn(e);
        return acc;
      }

      const [value, ...unit] = cookTimeValueList[timeMatching.firstMatchingStringIndex].split(" ")

      return {
        ...acc,
        [typeTime]: {
          value,
          unit: unit.join(" "),
        }
      };
    }, {});

    return new CookTimeModel(cookTime);
  },
}
