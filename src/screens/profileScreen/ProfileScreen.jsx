import React, { useState } from 'react'
import Navbar from '../homeScreen/components/Navbar'
import { signOut } from 'firebase/auth'
import { auth } from '../../app/firebase';
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice';
import './ProfileScreen.css'
import { useNavigate } from 'react-router-dom';
import StripeContainer from '../../stripeContainer';

function ProfileScreen() {

    const user = useSelector(selectUser);
    // const {user, setUser} = useContext(UserContext)
    const history = useNavigate()
    const [plan, setPlan] = useState(null)

    const updatePlan = (newPlan) => {
        // setPlan(newPlan)
        // db.collection("users").doc(user.email).update({
        //     plan: newPlan
        // }).then(() => {
        //     console.log("Document successfully updated!")
        // }).catch((err) => {
        //     console.error(err)
        // })
        // console.log("click triggered");

        <StripeContainer></StripeContainer>
    }

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

                            <div className='profileScreen_plans'>
                            <h3>Plans</h3>
                            <p>Renewal Date: </p>
                            <div className='profileScreen_plan'>
                                <div className='profileScreen_planInfo'>
                                    <h5>Mobile 199</h5>
                                    <p>Watch on 1 mobile phone or tablet at a time in Standard Definition. Download videos on 1 phone or tablet.</p>
                                </div>
                                {plan==="Mobile" ? <button className="profileScreen_disabled" disabled>Subscribed</button> : <button>₹199/month</button>}
                                {/* {plan==="Mobile" ? <button className="profileScreen_disabled" disabled>Subscribed</button> : <button onClick={() => updatePlan("Mobile")}>₹199/month</button>} */}
                            </div>
                            <div className='profileScreen_plan'>
                                <div className='profileScreen_planInfo'>
                                    <h5>Basic 499</h5>
                                    <p>Watch on 1 screen at a time in Standard Definition. Download videos on 1 phone or tablet.</p>
                                </div>
                                {plan==="Basic" ? <button className="profileScreen_disabled" disabled>Subscribed</button> : <button>₹499/month</button>}
                                {/* {plan==="Basic" ? <button className="profileScreen_disabled" disabled>Subscribed</button> : <button onClick={() => updatePlan("Basic")}>₹499/month</button>} */}
                            </div>
                            <div className='profileScreen_plan'>
                                <div className='profileScreen_planInfo'>
                                    <h5>Standard 649</h5>
                                    <p>Watch on 2 screens at a time. Full HD (1080p) available. Download videos on 2 phones or tablets.</p>
                                </div>
                                {plan==="Standard" ? <button className="profileScreen_disabled" disabled>Subscribed</button> : <button>₹649/month</button>}
                                {/* {plan==="Standard" ? <button className="profileScreen_disabled" disabled>Subscribed</button> : <button onClick={() => updatePlan("Standard")}>₹649/month</button>} */}
                            </div>
                            <div className='profileScreen_plan'>
                                <div className='profileScreen_planInfo'>
                                    <h5>Premium 799</h5>
                                    <p>Watch on 4 screens at a time. Full HD (1080p) and Ultra HD (4K) available. Download videos on 4 phones or tablets.</p>
                                </div>
                                {plan==="Premium" ? <button className="profileScreen_disabled" disabled>Subscribed</button> : <button>₹799/month</button>}
                                {/* {plan==="Premium" ? <button className="profileScreen_disabled" disabled>Subscribed</button> : <button onClick={() => updatePlan("Premium")}>₹799/month</button>} */}
                            </div>
                        </div>

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