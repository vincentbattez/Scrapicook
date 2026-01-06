import type { IJowCreateRecipeBody } from "@queries/jow/interfaces/requests/jowCreateRecipeBody.interface";

export interface IConvertRecipe200Response {
  data: IJowCreateRecipeBody | Record<string, any>;
  statusCode: number;
  message?: string;
}
