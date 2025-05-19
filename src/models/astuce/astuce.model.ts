import { IAstuce } from "@models/astuce/astuce.interface";

export class AstuceModel {
  private astuce: IAstuce = null;

  public getAstuce(): IAstuce {
    return this.astuce;
  }

  public fromExtractor(astuce: string): void {
    this.astuce = astuce;
  }

  public toJowRecipe(): string {
    const jowMaxAstuceLength = 350;
    let jowAstuce = this.astuce;

    if (!jowAstuce) {
      return
    }

    if (jowAstuce.length > jowMaxAstuceLength) {
      jowAstuce = jowAstuce.slice(0, jowMaxAstuceLength - 3) + '...';
    }

    return jowAstuce;
  }
}
