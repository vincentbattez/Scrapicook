import {IImage} from "@models/image/image.interface";

export class ImageModel {
  private image: IImage = null;

  public getImage(): IImage {
    return this.image;
  }

  public fromExtractor(image: string | null): void {
    this.image = image;
  }

  public toJowRecipe(): string | null {
    return this.image;
  }
}
