import { IAstuce } from "@models/astuce/astuce.interface";
import {
  IJowCreateRecipeBody
} from "queries/jow/interfaces/requests/jowCreateRecipeBody.interface";

export class AstuceModel {
  private astuce: IAstuce = null;

  public getAstuce(): IAstuce {
    return this.astuce;
  }

  public fromExtractor(astuce: string): void {
    this.astuce = astuce;
  }

  public toJowRecipe(): Pick<IJowCreateRecipeBody, "tip"> {
    const jowMaxAstuceLength = 350;
    let jowAstuce = this.astuce;

    if (!jowAstuce) {
      return {
        tip: {
          description: "",
        },
      };
    }

    if (jowAstuce.length > jowMaxAstuceLength) {
      jowAstuce = jowAstuce.slice(0, jowMaxAstuceLength - 3) + '...';
      console.warn(`Astuce description is too long. Truncated to ${jowMaxAstuceLength} characters.`);
    }

    return {
      tip: {
        description: jowAstuce,
      },
    };
  }
}
