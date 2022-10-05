const { Router } = require("express");
const usersRoutes = require('./users');
const adminRoutes = require('./admin')

// Importar todos los routers;

const router = Router();

router.use('/users', usersRoutes)
router.use('/admin', adminRoutes)

module.exports = router;