import {ITitle} from "@models/title/title.interface";
import {
  IJowCreateRecipeBody
} from "queries/jow/interfaces/requests/jowCreateRecipeBody.interface";

export class TitleModel {
  private title: ITitle = "";

  public getTitle(): ITitle {
    return this.title;
  }

  public fromExtractor(title: string): void {
    this.title = title;
  }

  public toJowRecipe(): Pick<IJowCreateRecipeBody, "title"> {
    let jowTitle = this.title;
    const maxJowTitleLength = 50;

    if (jowTitle.length > maxJowTitleLength) {
      jowTitle = jowTitle.slice(0, maxJowTitleLength - 3) + '...';
      console.warn(`Title is too long. Truncated to ${maxJowTitleLength} characters.`);
    }

    return {
      title: jowTitle,
    };
  }
}
