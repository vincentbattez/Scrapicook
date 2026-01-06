import { Page } from "@playwright/test";

import { RecipeSourceModel } from "@models/recipe-source/recipe-source.model";

import { AbstractExtractor } from "@extractors/interfaces/common/extractorAbstract.interface";
import { IRecipeSourceExtractor } from "@extractors/interfaces/recipeSource-extractor.interface";

export class RecipeSourceExtractor
  extends AbstractExtractor<RecipeSourceModel>
  implements IRecipeSourceExtractor
{
  constructor() {
    super("recipeSource");
  }

  protected async doExtract(page: Page): Promise<RecipeSourceModel> {
    return new RecipeSourceModel({
      source: page.url().split("/")[2].replace(/^www./, "").split(".")[0],
      title: await page.title(),
      url: page.url(),
    });
  }
}

export const recipeSourceExtractor = new RecipeSourceExtractor();
