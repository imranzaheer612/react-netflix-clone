import React from 'react'
import Navbar from '../homeScreen/components/Navbar'
import { auth } from '../../app/firebase';
import { signOut } from 'firebase/auth'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice';
import './ProfileScreen.css'

function ProfileScreen() {

    const user = useSelector(selectUser);

    return (
        <div className='profileScreen'>
        <Navbar />
        <div className='profileScreen__body'>
            <h1>Edit Profile</h1>
            <div className='profileScreen__info'>
                <img 
                src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
                alt='' 
                />
                <div className='profileScreen__details'>
                    <h2>{user.email}</h2>
                    <div className='profileScreen__plans'>
                        <button 
                            onClick={() => {signOut(auth)}} 
                            className='profileScreen__signout'
                        >
                            Sign Out
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default ProfileScreen