import { Page } from "playwright/test";

import { RecipeSourceModel } from "@models/recipe-source/recipe-source.model";

export interface IExtractorAbstract<T> {
  extract(page: Page): Promise<T>;
}

export interface IExtractorWithSource<T> {
  extract(page: Page, RecipeSource: RecipeSourceModel): Promise<T>;
}
