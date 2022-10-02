const { Router } = require("express")
const Diet = require( '../db' )
const router = Router()
// const dietTypes = require('../utils/apispoon')

const dietTypes = [
    {
        id: 1,
        name: 'Gluten Free',
        description: 'Eliminating gluten means avoiding wheat, barley, rye, and other gluten-containing grains and foods made from them (or that may have been cross contaminated).',
    },
    {
        id: 2,
        name: 'Ketogenic',
        description: 'The keto diet is based more on the ratio of fat, protein, and carbs in the diet rather than specific ingredients. Generally speaking, high fat, protein-rich foods are acceptable and high carbohydrate foods are not. The formula we use is 55-80% fat content, 15-35% protein content, and under 10% of carbohydrates.',
    },
    {
        id: 3,
        name: 'Vegetarian',
        description: 'No ingredients may contain meat or meat by-products, such as bones or gelatin.',
    },
    {
        id: 4,
        name: 'Lacto-Vegetarian',
        description: 'All ingredients must be vegetarian and none of the ingredients can be or contain egg.',
    },
    {
        id: 5,
        name: 'Ovo-Vegetarian',
        description: 'All ingredients must be vegetarian and none of the ingredients can be or contain dairy.',
    },
    {
        id: 6,
        name: 'Vegan',
        description: 'No ingredients may be meat or meat by-products, such as bones or gelatin, nor may they contain eggs, dairy, or honey.',
    },
    {
        id: 7,
        name: 'Pescetarian',
        description: 'Everything is allowed except meat and meat by-products - some pescetarians eat eggs and dairy, some do not.',
    },
    {
        id: 8,
        name: 'Paleo',
        description: 'Allowed ingredients include meat (especially grass fed), fish, eggs, vegetables, some oils (e.g. coconut and olive oil), and in smaller quantities, fruit, nuts, and sweet potatoes. We also allow honey and maple syrup (popular in Paleo desserts, but strict Paleo followers may disagree). Ingredients not allowed include legumes (e.g. beans and lentils), grains, dairy, refined sugar, and processed foods.',
    },
    {
        id: 9,
        name: 'Primal',
        description: 'Very similar to Paleo, except dairy is allowed - think raw and full fat milk, butter, ghee, etc.',
    },
    {
        id: 10,
        name: 'Whole30',
        description: 'Allowed ingredients include meat, fish/seafood, eggs, vegetables, fresh fruit, coconut oil, olive oil, small amounts of dried fruit and nuts/seeds. Ingredients not allowed include added sweeteners (natural and artificial, except small amounts of fruit juice), dairy (except clarified butter or ghee), alcohol, grains, legumes (except green beans, sugar snap peas, and snow peas), and food additives, such as carrageenan, MSG, and sulfites.',
    },
];
router.get('/', async (req, res) => {
    // console.log(typeOf(dietTypes))
    
    // try{
    //     for(d of dietTypes){
    //         // console.log(d)
    
    //         const exist = await Diet.findOne({where: {name: d.name}})
    //         if(!exist){
    //             await Diet.create({
    //                 id: d.id,
    //                 name: d.name,
    //                 description: d.description
    //             })
    //         } else {
    //             return res.json(await Diet.findAll())
    //         }
    
    //         // const exist =  Diet.findByPk({
    //         //     where:{
    //         //         id: d.id
    //         //     }
    //         // })
    //         console.log(exist)
    //     }
    // }catch(e){
    //     console.log('lol')
    // }

    // return res.json(await diet.findAll())


    async function generateDiets() {
        try {
          
            dietTypes.forEach( (e) => {
            const [createdDiets, isCreated] = Diet.findOrCreate({
              where: {
                id: e.id,
              },
              defaults: {
                name: e.name,
                id: e.id
              }
            })
            console.log(isCreated)
          })
        } catch (error) {
          console.log(error)
        }
      }
      generateDiets()
})

module.exports = router;