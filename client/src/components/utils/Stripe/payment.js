import React from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { PaymentForm } from './checkoutForm'
import { NavBar } from '../nav/nav'

const stripePromise = loadStripe("pk_test_51LpumKJocvWwgusfuIDgKMDWBBTXIYMiqNNp1I0a6FOuXMVVnNFrqUOuUmJzvONbAVs0Fc7NAGCCNGm4AumQptBV00bOAnI6rN")

// const appearance = {
//     theme: 'night',
//    labels: 'floating',
 
//    variables: {
//      colorPrimary: '#0570de',
//      colorBackground: '#ffffff',
//      colorText: '#30313d',
//      colorDanger: '#df1b41',
//      fontFamily: 'Ideal Sans, system-ui, sans-serif',
//      spacingUnit: '2px',
//      borderRadius: '4px',
//      // See all possible variables below
//    }
//  };

//  const options = {
//     appearance,
//     clientSecret
//  }
export function Payment () {

    return(
        <div>
            <NavBar/>
            <Elements stripe={stripePromise}>
                <PaymentForm/>
            </Elements>
        </div>
    )
}