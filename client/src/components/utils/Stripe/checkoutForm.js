import React, { useState, useEffect } from "react";
import {
  CardElement,
  Elements,
  PaymentElement,
  PaymentRequestButtonElement,
  useElements,
  useStripe,
  loadStripe
} from "@stripe/react-stripe-js";
import axios from 'axios';


//import subimg1 from "./subimg1.jpg"



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
    <div>
      <div style={{ width: "40%" }}>
        <br />
        <CardElement />
        <br />
        <button onClick={createSubscription}>Subscribe - 5 USD</button>
      </div>
    </div>
  );
}

// export default PaymentForm;