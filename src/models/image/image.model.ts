import { IImage } from "@models/image/image.interface";
import { IModelAbstract } from "@models/interfaces/modelAbstract.interface";

import { IJowCreateRecipeBody } from "@queries/jow/interfaces/requests/jowCreateRecipeBody.interface";

export class ImageModel implements IModelAbstract<IImage> {
  private readonly image: IImage;

  constructor(image: IImage) {
    this.image = image;
  }

  public get(): IImage {
    return this.image;
  }

  public toJowRecipe(): Pick<IJowCreateRecipeBody, "imageUrl"> {
    return {
      imageUrl: this.image ?? "",
    };
  }
}
