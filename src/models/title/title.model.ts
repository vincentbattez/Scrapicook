import {ITitle} from "@models/title/title.interface";

export class TitleModel {
  private title: ITitle = "";

  public getTitle(): ITitle {
    return this.title;
  }

  public fromExtractor(title: string): void {
    this.title = title;
  }

  public toJowRecipe(): string {
    let jowTitle = this.title;
    const maxJowTitleLength = 50;

    if (jowTitle.length > maxJowTitleLength) {
      jowTitle = jowTitle.slice(0, maxJowTitleLength - 3) + '...';
    }

    return jowTitle;
  }
}
