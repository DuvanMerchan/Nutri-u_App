const { Router } = require("express");
const userRoute = require('./users/user.js')
const recipesRoute = require('./recipes')
const dietsRoutes = require('./diets')
const recipe = require("./recipe")
// Importar todos los routers;

const router = Router();

// Configurar los routers


router.use('/user', userRoute)
router.use('/recipes', recipesRoute)
router.use('/recipe', recipe)
router.use('/diets', dietsRoutes)

module.exports = router;