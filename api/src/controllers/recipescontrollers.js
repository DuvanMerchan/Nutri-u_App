const axios = require ("axios")
const { API_KEY } = process.env
const { Recipe, Diet } = require("../../db.js")
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
                    //cuisines: e.cuisines?.map(ele => ele),
                    //dishTypes: e.dishTypes?.map(ele => ele),
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


const getDBRecipes = async() => {
    try {
        const dbRecipes = await Recipe.findAll({
            include: [{
                model: Diet,
                through: {
                    attributes: ['name']
                }
            }]
        })
        console.log(dbRecipes)
        let data = dbRecipes.map(e => {
            return {
                name: e.name,
                vegetarian: e.vegetarian,
                vegan: e.vegan,
                glutenFree: e.glutenFree,
                dairyFree: e.dairyFree,
                veryPopular: e.veryPopular,
                healthScore: e.healthScore,
                image: e.image,
                summary: e.summary,
                diets: e.diets?.map(ele => ele.name)
            }
        })
        return data
    } catch (error) {
        console.log(error)
    }
}

const getAllInfo = async(req, res) => {
    try {
        let data = await getApiRecipes()
        let dbData = await getDBRecipes()
        if(!dbData || dbData.length === 0) {
            if(!data || data.length === 0) {
                return res.status(404).json({msg: "Oops, we couldn't find any recipes"})
            }
            return res.status(200).json(data)
        }
        let totalData = [...data, ...dbData]
        return res.status(200).json(totalData)
    } catch (error) {
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
                    //cuisines: el.cuisines?.map(ele => ele),
                    //dishTypes: el.dishTypes?.map(ele => ele),
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