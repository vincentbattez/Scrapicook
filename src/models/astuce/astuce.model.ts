import { IAstuce } from "@models/astuce/astuce.interface";
import { IModelAbstract } from "@models/interfaces/modelAbstract.interface";

import { IJowCreateRecipeBody } from "@queries/jow/interfaces/requests/jowCreateRecipeBody.interface";

export class AstuceModel implements IModelAbstract<IAstuce> {
  private readonly astuce: IAstuce;

  constructor(astuce: IAstuce) {
    this.astuce = astuce || null;
  }

  public get(): IAstuce {
    return this.astuce;
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
      jowAstuce = jowAstuce.slice(0, jowMaxAstuceLength - 3) + "...";

      console.warn(
        `Astuce description is too long. Truncated to ${jowMaxAstuceLength} characters.`,
      );
    }

    return {
      tip: {
        description: jowAstuce,
      },
    };
  }
}
