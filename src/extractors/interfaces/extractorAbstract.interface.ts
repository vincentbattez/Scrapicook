import { Page } from "playwright/test";

export interface IExtractorAbstract<T> {
  extract(page: Page): Promise<T>;
}


