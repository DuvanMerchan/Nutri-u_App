const axios = require ("axios")
const { API_KEY } = process.env
const { Recipe, Diet } = require("../db")
// import  dietTypes  from '../utils/apispoon'



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
                    image: e.image,
                    summary: e.summary,
                    cuisines: e.cuisines?.map(ele => ele),
                    dishTypes: e.dishTypes?.map(ele => ele),
                    diets: e.diets?.map(ele => ele),
                    //ingredients: e.analyzedInstructions[0].steps?.map(ele => ele.ingredients.name): "does not have any ingredient"
            }
       })
            return dishRecipe
    }

    } catch(error) {
        console.log(error)
    }
}


const getApiNameRecipes = async(name) => {

    try {
    
        const axiosName = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${name}&addRecipeInformation=true&number=100&apiKey=${API_KEY}`)
        const { results } = axiosName
    
        if(results !==0) {
            let dishName = results?.map((el) => {
                return {
                    name: el.title,
                    vegetarian: el.vegetarian,
                    vegan: el.vegan,
                    glutenFree: el.glutenFree,
                    dairyFree: el.dairyFree,
                    veryPopular: el.veryPopular,
                    healthScore: e.healthScore,
                    image: el.image,
                    summary: el.summary,
                    cuisines: el.cuisines?.map(ele => ele),
                    dishTypes: el.dishTypes?.map(ele => ele),
                    diets: el.diets?.map(ele => ele),
                    //ingredients: el.analyzedInstructions[0].steps?.map(ele => ele.ingredients.name): "does not have any ingredient"
                }
            })
                return dishName
        }
    } catch(error) {
        console.log(error)
    }
}

// const getApiRecipeByID = async (req, res) => {

//         const { recipeID } = req.params;
        
//         try{
//             if(recipeID){
//                 let { data } = await axios.get(`https://api.spoonacular.com/recipes/${recipeID}/information?&apiKey=${API_KEY}`)
//                 if(data.hasOwnProperty('id')) res.json(data)
//                 else{throw new Error(`We can't find a recipe with id: ${recipeID}`)}
//             }else{
//                 throw new Error(`We need an id to search a recipe`)
//             }

//         }catch(e){
//             res.send(e.message)
//         }
//     }







module.exports = {
    getApiRecipes,
    getApiNameRecipes,
}