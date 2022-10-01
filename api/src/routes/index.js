const { Router } = require("express");
const userRoute = require('./users/userfree.js')
const recipesRoute = require('./recipes')
// Importar todos los routers;

const router = Router();

// Configurar los routers


router.use('/user', userRoute)
router.use('/recipes', recipesRoute)

module.exports = router;