import { logger } from "@src/server";
import { Page } from "playwright/test";

import { RecipeSourceModel } from "@models/recipe-source/recipe-source.model";

export interface IExtractorAbstract<T> {
  extract(page: Page, RecipeSource?: RecipeSourceModel): Promise<T>;
}

export interface IExtractorWithSource<T> {
  extract(page: Page, RecipeSource: RecipeSourceModel): Promise<T>;
}

// Unified abstract base class that handles both cases
export abstract class AbstractExtractor<T> {
  protected readonly extractorName: string;

  constructor(extractorName: string) {
    this.extractorName = extractorName;
  }

  protected abstract doExtract(
    page: Page,
    RecipeSource?: RecipeSourceModel,
  ): Promise<T>;

  // Method that handles both cases with optional RecipeSource
  async extract(page: Page, RecipeSource?: RecipeSourceModel): Promise<T> {
    logger.info(`extraction: ${this.extractorName}`);

    return this.doExtract(page, RecipeSource);
  }
}
