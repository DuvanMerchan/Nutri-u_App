const { Router } = require("express");
<<<<<<< HEAD
const { User } = require('../../db')
const usersRoutes = require('./users');
const adminRoutes = require('./admin');
const { userLogin, userSingIn, confirmAccount } = require("../../controllers/usersControllers/users.controllers");
const { changeToPremium } = require('../../controllers/usersControllers/userfree.controller');
const { json } = require( 'body-parser' );

=======
const { User } = require("../../db");
const usersRoutes = require("./users");
const adminRoutes = require("./admin");
const {
  userLogin,
  userSingIn,
  confirmAccount,
  userLogOut,
  forgotPassword,
  newPassword,
} = require("../../controllers/usersControllers/users.controllers");
const {
  changeToPremium,
} = require("../../controllers/usersControllers/userfree.controller");
>>>>>>> c1bea2f36ba8a72e95c5c7623872d471c5f5663d

// Importar todos los routers;

const router = Router();

router.use("/users", usersRoutes);
router.use("/admin", adminRoutes);
router.post("/singin", userSingIn);
router.post("/login", async (req, res) => {
  let { email, password } = req.body;
  let user = await userLogin(email, password);
  res.json({
    user,
  });
});
router.post("/logout", async (req, res) => {
  let { user, token } = req.body;
  let loggedUser = await userLogOut(user, token);
  res.json({
    loggedUser,
  });
});
router.get("/confirm/:token", confirmAccount);

<<<<<<< HEAD
router.post('/premium', async (req,res) =>{
    let {userEmail, userName, paymentMethod} = req.body
    let respuesta = await changeToPremium(userEmail, userName, paymentMethod)
    console.log('estoo', JSON.stringify(respuesta))
    res.json({
        respuesta
    })
})
=======
router.post("/premium", (req, res) => {
  let { userId } = req.body;
  changeToPremium(userId);
});
>>>>>>> c1bea2f36ba8a72e95c5c7623872d471c5f5663d


router.post("/forgot-password", forgotPassword)
router.post("/new-password/:token", newPassword)

module.exports = router;
