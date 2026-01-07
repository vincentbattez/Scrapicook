export interface IPrintRecipe200Response {
  data: {
    message: string;
    recipeId?: string;
    status: "success" | "error";
    platform?: string;
    url?: string; // URL to view the printed recipe
  };
}
