import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import "../styles/Navbar.css"

function Navbar() {

    const [show, setShow] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setShow(true);
            }
            else {
                setShow(false);
            }
        })

        return () => {
            window.removeEventListener('scroll', null)
        }
    }, []);

  return (
    <div className={`nav ${show && "nav-black"}`}>
        <img
        onClick={() => {navigate('/')}} 
        className="nav-logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png"
        alt="netflix logo" 
        />
        
        <img 
        onClick={() => {navigate('./profile')}}
        className="nav-avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="netflix avatar" 
        />


    </div>
  )
}

export default Navbar