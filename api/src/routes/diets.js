const { Router } = require("express")
const Diet = require( '../db' )
const router = Router()
// const dietTypes = require('../utils/apispoon')

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


    // async function generateDiets() {
    //     try {
          
    //         dietTypes.forEach( (e) => {
    //         const [createdDiets, isCreated] = Diet.findOrCreate({
    //           where: {
    //             id: e.id,
    //           },
    //           defaults: {
    //             name: e.name,
    //             id: e.id
    //           }
    //         })
    //         console.log(isCreated)
    //       })
    //     } catch (error) {
    //       console.log(error)
    //     }
    //   }
    //   generateDiets()
})

module.exports = router;