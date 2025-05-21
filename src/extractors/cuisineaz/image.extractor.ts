import {Page} from "@playwright/test";
import {IImageExtractor} from "@extractors/interfaces/image-extractor.interface";
import {ImageModel} from "@models/image/image.model";

export const cuisineAZImageExtractor: IImageExtractor = {
  extract: async (page: Page): Promise<ImageModel> => {
    const imageUrl = await page.locator('.recipe_img picture img').getAttribute('src');

    return new ImageModel(imageUrl);
  },
}
