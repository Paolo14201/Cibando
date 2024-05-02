import RECIPES from "../mocks/recipes-mock";
const apiBaseUrl = '/api/recipes'
/* async function getRecipes() {
  try {
    const response = await RECIPES;
    return response;
  } catch (error) {
    console.log(error);
  }
} */

async function getRecipes() {
  try{
    const response = await fetch(apiBaseUrl + '/trovaTutto');
    if(response.ok) {
      const data =await response.json();
      return data
    }else {
      throw new Error ('Errore nella richiesta al server !') // SE LA RICHIESTA è STATA FATTA MALE
    }
  } catch (error) {
    console.log(error)
}
}

const getRecipe = async (id) => {
  try {
      const response = await RECIPES.find(ricetta => ricetta._id ===  id);
      return response;
  } catch (error) {
      console.log(error)
  }
}


const RecipeApi = {
    getRecipes : getRecipes,
    getRecipe : getRecipe,
}

export default RecipeApi;