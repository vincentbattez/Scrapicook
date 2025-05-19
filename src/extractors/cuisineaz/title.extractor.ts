import { ITitleExtractor } from "@extractors/interfaces/title-extractor.interface";
import {Page} from "@playwright/test";
import {TitleModel} from "@models/title/title.model";

export class CuisineAZTitleExtractor implements ITitleExtractor {
  static async extract(page: Page): Promise<TitleModel> {
    let title = await page.locator('.recipe-title').innerText();

    const Title = new TitleModel()
    Title.fromExtractor(title);

    return Title
  }
}
