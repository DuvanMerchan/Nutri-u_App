const axios = require ("axios")
const { API_KEY } = process.env

const getApiRecipes = async() => {

    try {

        const axiosResponse = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`)
        const { results } = axiosResponse.data;

        if(results !== 0 ) {
            let dishRecipe = await results?.map((e) => {
                return {
                name: e.title,
                vegetarian: e.vegetarian,
                vegan: e.vegan,
                glutenFree: e.glutenFree,
                dairyFree: e.dairyFree,
                veryPopular: e.veryPopular,
                healthScore: e.healthScore,
                readyInMinutes: e.readyInMinutes,
                image: e.image,
                summary: e.summary,
                cuisines: e.cuisines?.map(ele => ele),
                dishTypes: e.dishTypes?.map(ele => ele),
                diets: e.diets?.map(ele => ele),
                ingredients: e.analyzedInstructions[0].steps.map(ele => ele.ingredients.name)
                    //falta filtrar ingredients//////
            }
       })

       return dishRecipe
    }

    } catch(error) {
        console.log(error)
    }
}