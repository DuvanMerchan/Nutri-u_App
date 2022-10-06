const { Diet } = require('../db');
const dietTypes = require('../utils/diets');


const loadDbInfo = async () => {

    const dietsAll = await Diet.findAll()
    if(!dietsAll.length){
        dietTypes.forEach(async d =>{           
            await Diet.findOrCreate({
              where:{
                id: d.id,
                name: d.name.toLowerCase(),
                description: d.description
              }
            })
        })

    }

}

const addDietsOnDb = () => {
}

const addRecipesOnDb = () => {

}

module.exports = {
    loadDbInfo,

  };

