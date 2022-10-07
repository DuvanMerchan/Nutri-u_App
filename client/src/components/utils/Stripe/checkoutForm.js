import React, { useState } from "react";
import {
  CardElement,
  Elements,
  PaymentElement,
  PaymentRequestButtonElement,
  useElements,
  useStripe,
  loadStripe
} from "@stripe/react-stripe-js";

//import subimg1 from "./subimg1.jpg"



export function PaymentForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  
  const storagelocal = localStorage.getItem("userSession")


  const stripe = useStripe();
  const elements = useElements();

  const createSubscription = async () => {
    
    try {
      const paymentMethod = await stripe.createPaymentMethod({
        card: elements.getElement("card"),
        type: "card",
      });
      const response = await fetch("localhost:5000/user/premium", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          paymentMethod: paymentMethod.paymentMethod.id,
        }),
      });
      if (!response.ok) return alert("Payment unsuccessful!");
      const data = await response.json();
      const confirm = await stripe.confirmCardPayment(data.clientSecret);
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
        <button onClick={createSubscription}>Subscribe - 5 INR</button>
      </div>
    </div>
  );
}

// export default PaymentForm;