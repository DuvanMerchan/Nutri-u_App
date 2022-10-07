import React from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { PaymentForm } from './checkoutForm'


const stripePromise = loadStripe("pk_test_51LpumKJocvWwgusfuIDgKMDWBBTXIYMiqNNp1I0a6FOuXMVVnNFrqUOuUmJzvONbAVs0Fc7NAGCCNGm4AumQptBV00bOAnI6rN")

export function Payment () {


    return(
        <Elements stripe={stripePromise}>
            <PaymentForm/>
        </Elements>
    )
}