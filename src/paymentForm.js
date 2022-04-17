import React, { useState } from 'react';
import {CardElement, PaymentElement, useElements, useStripe} from '@stripe/react-stripe-js';
import axios from 'axios';

export default function PaymentForm() {


    
    const CARD_OPTIONS = {
        iconStyle: "solid",
        style: {
            base: {
                iconColor: "#c4f0ff",
                color: "#fff",
                fontWeight: 500,
                fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
                fontSize: "16px",
                fontSmoothing: "antialiased",
                ":-webkit-autofill": { color: "#fce883" },
                "::placeholder": { color: "#87bbfd" }
            },
            invalid: {
                iconColor: "#ffc7ee",
                color: "#ffc7ee"
            }
        }
    }

    const[success, setSuccess] = useState(false);
    const stripe = useStripe();
    const element = useElements();


    const handleSubmit = async (event) => {
        
        // handle default form submission
        event.preventDefault();
    
        if (!stripe || !element) {
          return;
        }
    
        const result = await stripe.createPaymentMethod({
            type: "card",
            card:  element.getElement(CardElement)
        }
        );
    
        if (result.error) {
          console.log(result.error.message);
        } 
        else {
          try {
              // redirect for payment
              const id = result.paymentMethod;
              const response = await axios.post("http://localhost:4000/payment",  {
                  amount : 1000, 
                  id
              })

              if (response.data.success) {
                  console.log("Successful payment");
                  setSuccess(true);
              }
          }
          catch(error) 
          {
              console.log("error: ", error);
          }
        }
      };



  return (
    <>
        {
        !success ? 
            <form onSubmit={handleSubmit}>
                <fieldset className="FormGroup">
                    <div className="FormRow">
                        <CardElement options={CARD_OPTIONS}/>
                    </div>
                </fieldset>
                <button>Pay</button>
            </form>
        :
            <div>
                <h2>You just bought a sweet spatula!</h2>
            </div> 
        }   
    </>
  );
};