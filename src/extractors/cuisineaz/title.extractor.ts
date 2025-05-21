import { Page } from "@playwright/test";

import { TitleModel } from "@models/title/title.model";

import { ITitleExtractor } from "@extractors/interfaces/title-extractor.interface";

export const cuisineAZTitleExtractor: ITitleExtractor = {
  extract: async (page: Page): Promise<TitleModel> => {
    let title = await page.locator(".recipe-title")?.innerText();

    return new TitleModel(title);
  },
};
