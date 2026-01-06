import type { IJowCreateRecipeBody } from "@queries/jow/interfaces/requests/jowCreateRecipeBody.interface";

export type IConvertRecipe200Response =
  | IJowCreateRecipeBody
  | Record<string, any>;
