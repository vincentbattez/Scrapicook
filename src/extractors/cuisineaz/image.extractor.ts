import {Page} from "@playwright/test";
import {IImageExtractor} from "@extractors/interfaces/image-extractor.interface";
import {ImageModel} from "@models/image/image.model";

export class CuisineAZImageExtractor implements IImageExtractor {
  static async extract(page: Page): Promise<ImageModel> {
    const imageUrl = await page.locator('.recipe_img picture img').getAttribute('src');

    const Image = new ImageModel();

    // 🌟 Feed Image
    Image.fromExtractor(imageUrl);

    return Image;
  }
}
