require('dotenv').config();
const { User } = require("../../db.js");
const { HOST_EMAIL, PORT_EMAIL, EMAIL, EMAIL_PASS, DB_HOST, DB_PORT } = process.env;
const Stripe = require('stripe')

const stripe = new Stripe('sk_test_51LpumKJocvWwgusfR19jzAn2K6nOtr99mMwbcQpJUMWLvPOZPlQozetO9hdsLp95i29WyTO7o7Kvv7IQHLZoqqAx00S5mMHbOv')


const changeToPremium = async (userEmail, userName, paymentMethod) =>{

    const user = await User.findOne({where:{email: userEmail}})


    try {

      const customer = await stripe.customers.create({
        email: userEmail,
        name: userName,
        payment_method: paymentMethod,
        invoice_settings: { default_payment_method: paymentMethod }
      })

      const product = await stripe.products.create({
        name: 'Monthly subscription',
      })

      const subscription = await stripe.subscriptions.create({
      customer: customer.id,
      items: [
        {
          price_data: {
            currency: "USD",
            product: product.id,
            unit_amount: "50",
            recurring: {
              interval: "month",
            },
          },
        },
      ],

      payment_settings: {
        payment_method_types: ["card"],
        save_default_payment_method: "on_subscription",
      },
        expand: ["latest_invoice.payment_intent"],
    });
    // console.log('ESTOOO',subscription)
    return {
      message: 'Subscription successfully initiated',
      clientSecret: subscription.latest_invoice.payment_intent.client_secret,
      subscriptionId: subscription.id
    }

    } catch(error) {
        console.log('Change to premium error',error);
        return JSON.stringify({ message: error.message });
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