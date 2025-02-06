"use client"

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import convertToSubCurrency from './ConvertToSubCurrency';
import { useSearchParams } from 'next/navigation';
import CheckoutPage from './CheckoutPage';

if (process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY === undefined) {
    throw new Error('NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY is not defined');
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

const StripePayment = () => {
    const searchParams = useSearchParams();
    const amount = parseFloat(searchParams.get('amount') || '0');

    return (
        <div className='w-[90%] mx-auto bg-borderGray text-darkPrimary p-6 my-12 rounded-xl font-montserrat'>
            <h1 className='text-3xl pb-7 font-semibold text-center uppercase text-darkPrimary'> Requested Amount $ {amount}</h1>

            <Elements
                stripe={stripePromise}
                options={{
                    mode: 'payment',
                    amount: convertToSubCurrency(amount),
                    currency: 'usd'
                }}
                
            >
                <CheckoutPage amount={amount} />
            </Elements>
        </div>
    );
};

export default StripePayment;