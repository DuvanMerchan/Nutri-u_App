require('dotenv').config();
const { User } = require("../../db.js");
const { HOST_EMAIL, PORT_EMAIL, EMAIL, EMAIL_PASS, DB_HOST, DB_PORT } = process.env;
const Stripe = require('stripe')

const stripe = new Stripe('sk_test_51LpumKJocvWwgusfR19jzAn2K6nOtr99mMwbcQpJUMWLvPOZPlQozetO9hdsLp95i29WyTO7o7Kvv7IQHLZoqqAx00S5mMHbOv')


const changeToPremium = async (userId) =>{

    const user = await User.findByPk(userId)

    
    const { paymentId, amount } = req.body;

    try {

       

    } catch(error) {
        console.log(error);
        return res.json({ message: error.message });
    }
}


// const listFavoritesRecipes = ()=>{

// }

// const update = ()=>{
//         User.update({ where: { email: email } })

    

//     .then(userx=>{
//         console.log("user",userx[0])
//         if(!userx) throw new Error('user not found');
//         if(userx.emailVerified) throw new Error('user already verified');
//         userx.emailVerified = true
        
//     }
// }

module.exports = {
    changeToPremium,

}