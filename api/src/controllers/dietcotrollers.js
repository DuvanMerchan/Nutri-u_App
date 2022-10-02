const axios = require ("axios")
const { API_KEY } = process.env
const { Recipe, Diet } = require("../db")


const getAllDiet = async()=>{
    try{
        const dietsDB = await Diet.findAll()
           return dietsDB
    }catch(e){
        console.log(e)
    }
} 

const getDietByID = async(id) => {
        
    try{
        const axiosID = await axios.get(dietTypes)
        const { results } = axiosID
        
        let dietName = results?.filter(e => e.id === id)
        return dietName

    }catch(e){
        console.log(e)
    }

}

module.exports = {
    getAllDiet,
    getDietByID 
}