import {IImage} from "@models/image/image.interface";
import {
  IJowCreateRecipeBody
} from "queries/jow/interfaces/requests/jowCreateRecipeBody.interface";

export class ImageModel {
  private image: IImage = null;

  public getImage(): IImage {
    return this.image;
  }

  public fromExtractor(image: string | null): void {
    this.image = image;
  }

  public toJowRecipe(): Pick<IJowCreateRecipeBody, "imageUrl"> {
    return {
      imageUrl: this.image ?? "",
    };
  }
}
