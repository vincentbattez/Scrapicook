export interface IPrintRecipe200Response {
  message?: string;
  statusCode?: number;
  recipeList?: {
    recipeName: string;
    downloadLink?: string; // Path to download the PDF
  }[];
}
