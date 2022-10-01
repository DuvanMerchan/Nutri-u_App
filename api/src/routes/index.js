const { Router } = require("express");
const userRoute = require('./users/userfree.js')
// Importar todos los routers;

const router = Router();

const recipes = require("./recipes")
const recipesId = require("./recipesById")

// Configurar los routers

router.use("/", recipesId)
router.use("/", recipes)
router.use('/user', userRoute)

module.exports = router;