import React from 'react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { PaymentForm } from './checkoutForm'
import { NavBar } from '../nav/nav'

const stripePromise = loadStripe("pk_test_51LpumKJocvWwgusfuIDgKMDWBBTXIYMiqNNp1I0a6FOuXMVVnNFrqUOuUmJzvONbAVs0Fc7NAGCCNGm4AumQptBV00bOAnI6rN")

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