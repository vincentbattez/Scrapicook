import { RecipeModel } from "@models/recipe/recipe.model.js";

import { IJowCreateRecipeResponse } from "@queries/jow/interfaces/responses/jowCreateRecipeResponse.interface";

import { DestinationRecipeAvailableEnum } from "@services/recipe-creator";

export const jowQueries = {
  createRecipe(Recipe: RecipeModel): IJowCreateRecipeResponse {
    // @todo: séparé la creation du call API
    const body = Recipe.convert(DestinationRecipeAvailableEnum.JOW);
    console.log("body", body);

    // const createRecipeResponse = await fetch(process.env.JOW_API_URL + '/recipes/uploaded', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application,json',
    //     'Authorization': `Bearer kemoernil`, // @todo: get api key
    //   },
    //   body: JSON.stringify({
    //     name: Recipe.name,
    //     description: Recipe.description,
    //     image: Recipe.image,
    //     ingredients: Recipe.ingredients.map((ingredient) => ({
    //       name: ingredient.name,
    //       quantity: ingredient.quantity,
    //       unit: ingredient.unit,
    //     })),
    //     instructions: Recipe.instructions.map((instruction) => ({
    //       text: instruction.text,
    //       duration: instruction.duration,
    //     })),
    //   }),
    // })

    // console.log("createRecipeResponse", createRecipeResponse)
    // return createRecipeResponse;
    return {};
  },
};
