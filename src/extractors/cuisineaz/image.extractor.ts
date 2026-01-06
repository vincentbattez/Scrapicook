import { Page } from "@playwright/test";

import { ImageModel } from "@models/image/image.model";

import { AbstractExtractor } from "@extractors/interfaces/common/extractorAbstract.interface";
import { IImageExtractor } from "@extractors/interfaces/image-extractor.interface";

export class CuisineAZImageExtractor
  extends AbstractExtractor<ImageModel>
  implements IImageExtractor
{
  constructor() {
    super("image");
  }

  protected async doExtract(page: Page): Promise<ImageModel> {
    const imageUrl = await page
      .locator("#recipe_image picture img")
      .first()
      .getAttribute("src");

    return new ImageModel(imageUrl);
  }
}

export const cuisineAZImageExtractor = new CuisineAZImageExtractor();
