import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './paymentForm';


const PUBLIC_KEY = "pk_test_51KpW1MKS7s8SLBvoDkDfZWfpezyV8xclMiGvt5Vc6uH43igxz29bD4HJk8cv7lPnyvJSeFfBLDWMXEgEcUPmsgUN00RTU1EOYz"

const stripePromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer() {
//   const options = {
//     clientSecret: '{{CLIENT_SECRET}}',
//   };

  return (
    <Elements stripe={stripePromise}>
      <PaymentForm />
    </Elements>
  );
};