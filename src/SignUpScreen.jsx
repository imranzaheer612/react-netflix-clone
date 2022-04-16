import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react'
import { useRef } from 'react';
import { auth } from './firebase';
import './SignUpScreen.css'

function SignUpScreen() {

    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    /**
     * user can register hos account to
     * firebase by clicking sign-up now
    */
    const register = (e) => {
        e.preventDefault();
        
        createUserWithEmailAndPassword( 
            auth, 
            emailRef.current.value, 
            passwordRef.current.value
        )
        .then ((userCredentials) => {
            console.log(userCredentials);
        })
        .catch(error => {
            alert(error.message)
        })
    }

    /**
     * user can get logged in to his account if exits
    */
    const signIn = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(
            auth, 
            emailRef.current.value, 
            passwordRef.current.value
        )
        .then ( (userCredentials) => {
            console.log(userCredentials)
        })
        .catch((error) => {
            alert(error.message)
        })
    }

    return (
        <div className='signUpScreen'>
            <form>
                    <h1>Sign In</h1>
                    <input ref={emailRef} type="email" placeholder="Email address" />
                    <input ref={passwordRef} type="password" placeholder="Password" />
                    <button type="submit" onClick={signIn}>Sign In</button>
                    <h4>
                        <span className='signUpScreen__gray'>New to Netflix? </span>
                        <span className='signUpScreen__link' onClick={register}>Sign Up Now.</span>
                    </h4>
            </form>

            </div>
    )
}

export default SignUpScreen