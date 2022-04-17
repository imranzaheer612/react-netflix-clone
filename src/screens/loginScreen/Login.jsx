import React from 'react'
import { useState } from 'react'
import './Login.css'
import SignUpScreen from '../signUpScreen/SignUpScreen'

function Login() {

  const [signIn, setSignIn] = useState(false)



  return (

    <div className='loginScreen'>
      <div className="loginScreen__background">
        <img 
          className='loginScreen__logo'
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png"
          alt="netflix-logo" 
        />
        <button className="loginScreen__button">Sign In</button>
      <div className="loginScreen__gradient"></div>

      
        <div className="loginScreen__body">
          {signIn ? (<SignUpScreen />) : (
            <>
              <h1>Unlimited movies, TV shows, and more.</h1>
              <h2>Watch anywhere. Cancel at anytime</h2>
              <h3>Ready to watch? Enter your email to create or restart your membership</h3>

              <div className="loginScreen__input">
                <form >
                    <input type="email" placeholder="Email address" />
                    <button className="loginScreen__getStarted" onClick={() => {setSignIn(true)}}>GET STARTED</button>
                </form>
              </div>   
            </>
          )}
        </div>
        </div>

    </div>
  )
}

export default Login