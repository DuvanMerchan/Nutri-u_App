import React, { useState, useEffect } from "react";
import {
  CardElement,
  // Elements,
  // PaymentElement,
  // PaymentRequestButtonElement,
  useElements,
  useStripe,
  CardNumberElement,
  CardExpiryElement,
  FpxBankElement,
  CardCvcElement
  // loadStripe
} from "@stripe/react-stripe-js";
import swal from 'sweetalert';
import { NavBar } from "../nav/nav";

import style from './checkoutForm.module.css' 
const { REACT_APP_HOST } =
  process.env;


export function PaymentForm() {

  useEffect(() => {
    const loggedUserSession = window.sessionStorage.getItem("user")
    if(loggedUserSession){
      const userLogged = JSON.parse(loggedUserSession)
      setUser(userLogged)
    }
  },[])

  const [user, setUser] = useState('')

  const stripe = useStripe();
  const elements = useElements();


  const createSubscription = async () => {
    
    try {

      const paymentMethod = await stripe.createPaymentMethod({
        card: elements.getElement("card"),
        type: "card",
      });

      const response = await fetch(`${REACT_APP_HOST}/user/premium`, {
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


      if (!response.ok) return alert("Payment unsuccessful!");
      const data = await response.json();
      // const datae = JSON.parse(data)

      console.log('ESTIIIII', data.respuesta)
      const confirm = await stripe.confirmCardPayment(data.respuesta.clientSecret);
      if (confirm.error) return alert("Payment unsuccessful!");
      swal("Payment Successful! Subscription active.");

    } catch (err) {
      console.error(err);
      swal("Payment failed! " + err.message);
    }
  };

  return (
    <div>
      <NavBar/>
    <div className={style.paymentContainer}>
      <div className={style.cardContainer}>
        <form onSubmit={createSubscription}>
            {/* <input className={style.cardNumber}/>
          <input className={style.expiration}/>
          <input className={style.cvc}/>
          <input className={style.country}/>
          <br /> */}
          <input type='text' placeholder='name'/>
          <FpxBankElement />
          <CardNumberElement />
          <CardExpiryElement />
          <CardCvcElement />
          <button onClick={createSubscription} class="btn btn-secondary">Subscribe - 5 USD</button>
        </form>
        {/* <div style={{ width: "40%" }}>
          <input type='text' placeholder='name'/>
          <FpxBankElement />
          <CardNumberElement />
          <CardExpiryElement />
          <CardCvcElement />
          <button onClick={createSubscription} class="btn btn-secondary">Subscribe - 5 USD</button>
        </div> */}

      </div>
    </div>
    </div>
  );
}

// export default PaymentForm;