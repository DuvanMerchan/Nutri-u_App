import React, { useState, useEffect } from "react";
import {
  CardElement,
  // Elements,
  // PaymentElement,
  // PaymentRequestButtonElement,
  useElements,
  useStripe,
  // loadStripe
} from "@stripe/react-stripe-js";
import axios from 'axios';

import style from './checkoutForm.module.css' 

// import subimg1 from "./subimg1.jpg"


// const appearance = {
//   theme: 'night',
//   labels: 'floating'
// };

const appearance = {
   theme: 'night',
  labels: 'floating',

  variables: {
    colorPrimary: '#0570de',
    colorBackground: '#ffffff',
    colorText: '#30313d',
    colorDanger: '#df1b41',
    fontFamily: 'Ideal Sans, system-ui, sans-serif',
    spacingUnit: '2px',
    borderRadius: '4px',
    // See all possible variables below
  }
};

// Pass the appearance object to the Elements instance
// const elements = stripe.elements({clientSecret, appearance});


export function PaymentForm() {

  useEffect(() => {
    const loggedUserSession = window.sessionStorage.getItem("userSession")
    if(loggedUserSession){
      const userLogged = JSON.parse(loggedUserSession)
      setUser(userLogged)
    }
  },[])

  const [user, setUser] = useState('')

  const stripe = useStripe();
  const elements = useElements();

  // const element = elements.create('card', {
  //   style: {
  //     base: {
  //       iconColor: '#c4f0ff',
  //       color: '#fff',
  //       fontWeight: '500',
  //       fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
  //       fontSize: '16px',
  //       fontSmoothing: 'antialiased',
  //       ':-webkit-autofill': {
  //         color: '#fce883',
  //       },
  //       '::placeholder': {
  //         color: '#87BBFD',
  //       },
  //     },
  //     invalid: {
  //       iconColor: '#FFC7EE',
  //       color: '#FFC7EE',
  //     },
  //   },
  // });

  const createSubscription = async () => {
    
    try {

      const paymentMethod = await stripe.createPaymentMethod({
        card: elements.getElement("card"),
        type: "card",
      });

      const response = await fetch("http://localhost:5000/user/premium", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName: user.username,
          userEmail: user.email,
          paymentMethod: paymentMethod.paymentMethod.id,
        }),
      });

      // const response = await axios.post('localhost:5000/user/premium',{
      //   headers: {
      //          "Content-Type": "application/json",
      //        },
      //        body: JSON.stringify({
      //         userName: storageLocal.username,
      //         userEmail: storageLocal.email,
      //         paymentMethod: paymentMethod.paymentMethod.id,
      //        })
      // })

      if (!response.ok) return alert("Payment unsuccessful!");
      const data = await response.json();
      // const datae = JSON.parse(data)

      console.log('ESTIIIII', data.respuesta)
      const confirm = await stripe.confirmCardPayment(data.respuesta.clientSecret);
      if (confirm.error) return alert("Payment unsuccessful!");
      alert("Payment Successful! Subscription active.");

    } catch (err) {
      console.error(err);
      alert("Payment failed! " + err.message);
    }
  };

  return (
    <div className={style.paymentContainer}>
      <div className={style.cardContainer}>
        <div style={{ width: "40%" }}>
          {/* <input className={style.cardNumber}/>
          <input className={style.expiration}/>
          <input className={style.cvc}/>
          <input className={style.country}/>
          <br /> */}
          
          <CardElement />
          <button onClick={createSubscription} class="btn btn-secondary">Subscribe - 5 USD</button>
        </div>

      </div>
    </div>
  );
}

// export default PaymentForm;