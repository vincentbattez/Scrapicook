import {Page} from "@playwright/test";
import {ICooktimeExtractor} from "@extractors/interfaces/cooktime-extractor.interface";
import {CookTimeModel, ICookTime} from "@models/cooktime/cooktime.model";

export class CuisineAZCookTimeExtractor implements ICooktimeExtractor {
  static async extract(page: Page): Promise<ICookTime> {
    const cookTimeLocator = await page.locator('.recipe_time_informations_container');
    const cookTimeTitleList = await cookTimeLocator.locator('.recipe_time_information_title').allInnerTexts();
    const cookTimeValueList = await cookTimeLocator.locator('.recipe_time_information').allInnerTexts();

    const CookTime = new CookTimeModel()

    // build preparation, rest and total time
    const cookTime = cookTimeTitleList.reduce((acc: ICookTime, title: string, index) => {
      const [value, ...unit] = cookTimeValueList[index].split(" ");
      const normalizedTitle = title.toLowerCase().trim();

      if (normalizedTitle.includes("préparation")) {
        acc.preparationTime = {
          value,
          unit: unit.join(" "),
        };
      } else if (normalizedTitle.includes("cuisson")) {
        acc.cookingTime = {
          value,
          unit: unit.join(" "),
        };
      } else if (normalizedTitle.includes("repos")) {
        acc.restTime = {
          value,
          unit: unit.join(" "),
        };
      }

      return acc;
    }, { preparationTime: null, cookingTime: null, restTime: null });

    // 🌟 Feed CookTime
    CookTime.fromExtractor(cookTime);

    return CookTime;
  }
}
