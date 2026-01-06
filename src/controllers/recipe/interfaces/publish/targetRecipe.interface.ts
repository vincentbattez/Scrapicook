import type { IJowCreateRecipeBody } from "@queries/jow/interfaces/requests/jowCreateRecipeBody.interface";

// Union type for all possible target recipes
export type TargetRecipe =
  | IJowCreateRecipeBody
  | GrocyRecipe // Future: GrocyRecipe
  | OtherTargetRecipe; // Future: OtherTargetRecipe

// Placeholder for future Grocy recipe interface
export interface GrocyRecipe {
  // TODO: Define Grocy recipe structure
  [key: string]: any;
}

// Placeholder for future other target recipes
export interface OtherTargetRecipe {
  // TODO: Define other target recipe structures
  [key: string]: any;
}
