import {Page} from "@playwright/test";
import { ITitleExtractor } from "@extractors/interfaces/title-extractor.interface";
import {TitleModel} from "@models/title/title.model";

export const cuisineAZTitleExtractor: ITitleExtractor = {
  extract: async (page: Page): Promise<TitleModel> => {
    let title = await page.locator('.recipe-title')?.innerText();

    return new TitleModel(title)
  },
}
