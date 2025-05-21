import {ITitle} from "@models/title/title.interface";
import {
  IJowCreateRecipeBody
} from "queries/jow/interfaces/requests/jowCreateRecipeBody.interface";
import {IModelAbstract} from "@models/interfaces/modelAbstract.interface";

export class TitleModel implements IModelAbstract<ITitle> {
  private readonly title: ITitle;

  constructor(title: ITitle) {
    this.title = title;
  }

  public get(): ITitle {
    return this.title;
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
