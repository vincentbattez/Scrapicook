import {RecipeModel} from "@models/recipe/recipe.model";
import {
  IJowCreateRecipeBody
} from "queries/jow/interfaces/requests/jowCreateRecipeBody.interface";

export class JowQueries {
  static async createRecipe(
    Recipe: RecipeModel,
  ) {
    const recipe = Recipe.get()
    const body: IJowCreateRecipeBody = {
      additionalConstituents: [],
      backgroundPattern: {
        color: "#075526",
        imageUrl: "patterns/kale-03.png"
      },
      requiredTools: [],
      placeHolderUrl: "placeholders/plate.png",
      staticCoversCount: false,
      userConstituents: [],
      constituents: [], // @todo: list of ingredients
      recipeFamily: "", // @todo: c'est quoi ?
      ...recipe.cookTime.toJowRecipe(),
      ...recipe.image.toJowRecipe(),
      ...recipe.astuce.toJowRecipe(),
      ...recipe.title.toJowRecipe(),
      ...recipe.numberOfPerson.toJowRecipe(),
      ...recipe.stepList.toJowRecipe(),
    }
    console.log("body", body)

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
    return {}
  }
}
