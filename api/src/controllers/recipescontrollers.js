const axios = require ("axios")
const { API_KEY } = process.env
const { Recipe, Diet } = require("../db.js")
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
                // through: {
                //     attributes: ['name']
                // }
            }]
        })
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


const getApiNameRecipes = async(name) => {
    try {
        const axiosName = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${name}&addRecipeInformation=true&number=100&apiKey=${API_KEY}`)
        const results  = axiosName.data.results
        if(results !==0) {
            let dishName = results?.map((el) => {
                return {
                    name: el.title,
                    vegetarian: el.vegetarian,
                    vegan: el.vegan,
                    glutenFree: el.glutenFree,
                    dairyFree: el.dairyFree,
                    veryPopular: el.veryPopular,
                    healthScore: el.healthScore,
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


const getDBNameRecipes = async(name) => {
    try {
        const dbRecipes = await Recipe.findAll({
            where: {
                name: name
            },
            include: [{
                model: Diet,
                // through: {
                //     attributes: ['name']
                // }
            }]
        })   
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


const getAllInfo = async() => {
    try {
            let data = await getApiRecipes()
           let dbData = await getDBRecipes()
           if(!dbData || dbData.length === 0) {

            if(!data || data.length === 0) {
                throw new Error("Oops, we couldn't find any recipes")
            }else{
                return data
            }
        }else{
            if(!data){
                return dbData
            }
            let totalData = [...dbData, ...data]
            return totalData
            }

    } catch (error) {
        console.log(error)
    }
}

const getByName = async (name)=>{
    try {
        let data = await getApiNameRecipes(name)
        let dbData = await getDBNameRecipes(name)
        if(!dbData) {
            if(!data || data.length === 0) {
                throw new Error("Oops, we couldn't find any recipes")
            }else{
                return data
            }
        }else{
            if(!data){
                return dbData
            }
            let totalData = [...dbData, ...data]
            return totalData
        }
    } catch (error) {
        
    }
}


module.exports = {
    getAllInfo,
    getByName,
}