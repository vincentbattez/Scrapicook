import {Page} from "@playwright/test";
import {IAstuceExtractor} from "@extractors/interfaces/astuce-extractor.interface";
import {AstuceModel} from "@models/astuce/astuce.model";

export class CuisineAZAstuceExtractor implements IAstuceExtractor {
  static async extract(page: Page): Promise<AstuceModel> {
    const astuceList = await page.locator('.recipe_section.primary_background').allInnerTexts();
    let astuce = astuceList.find((item) => item.startsWith('ASTUCES'))
      .split('\n')
      .slice(1)
      .join('\n')
      .trim()

    const astuceModel = new AstuceModel(astuce)

    // 🌟 Feed Astuce
    astuceModel.fromExtractor(astuce);

    return astuceModel;
  }
}
