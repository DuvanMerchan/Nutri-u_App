const { Router } = require("express");
const userRoute = require('./users/userfree.js')
// Importar todos los routers;

const router = Router();

// Configurar los routers


router.use('/user', userRoute)

module.exports = router;