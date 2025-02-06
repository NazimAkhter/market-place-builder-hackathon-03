import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';
import React from 'react';

interface CheckoutPageProps {
    amount: number;
}

const CheckoutPage: React.FC<CheckoutPageProps> = ({ amount }) => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        // Step 1: Submit the form to validate and prepare the payment
        const { error: submitError } = await elements.submit();
        if (submitError) {
            console.error(submitError);
            return;
        }

        // Step 2: Fetch the clientSecret from your API route
        const myhost = window.location.host;
        let URL = '';

        if (myhost === 'vercel.com') {
            URL = 'https://market-place-builder-hackathon-03-gial6hk09.vercel.app/';
        } else {
            URL = 'https://stripe-payment-one-nu.vercel.app';
        }

        const response = await fetch(`${URL}/api/payment-intent`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ amount: amount * 100 }), // Convert amount to cents
        });

        const { clientSecret } = await response.json();

        // Step 3: Confirm the payment with the clientSecret
        const { error } = await stripe.confirmPayment({
            elements,
            clientSecret, // Pass the clientSecret here
            confirmParams: {
                return_url: `${URL}/PaymentSuccess`, // Redirect URL after payment
            },
        });

        if (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <PaymentElement />
            <button className='mx-auto font-semibold py-2 bg-darkPrimary text-myWhite w-full rounded mt-5 uppercase transition-all ease-out hover:bg-myPrimary focus:bg-black duration-300 text-center hove:scale-110' type="submit" disabled={!stripe}>
                Pay Now $&nbsp;{amount}
            </button>
        </form>
    );
};

export default CheckoutPage;