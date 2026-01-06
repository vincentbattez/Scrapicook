import { Page } from "@playwright/test";

import { TitleModel } from "@models/title/title.model";

import { AbstractExtractor } from "@extractors/interfaces/common/extractorAbstract.interface";
import { ITitleExtractor } from "@extractors/interfaces/title-extractor.interface";

export class CuisineAZTitleExtractor
  extends AbstractExtractor<TitleModel>
  implements ITitleExtractor
{
  constructor() {
    super("title");
  }

  protected async doExtract(page: Page): Promise<TitleModel> {
    let title = await page.locator(".recipe-title")?.innerText();

    return new TitleModel(title);
  }
}

export const cuisineAZTitleExtractor = new CuisineAZTitleExtractor();
