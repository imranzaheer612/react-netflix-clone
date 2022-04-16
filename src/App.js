import './App.css';
import HomeScreen from './homeScreen/HomeScreen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import { useEffect, } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { login, logout, selectUser } from './features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import ProfileScreen from './ProfileScreen';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch()


  /**
   * Check if the user is authenticated
   * --> if so then set user state
   * --> else set user to null
   * --> onAuthStateChanged will notify the app about the successful authentication
   *      and return the user object
  */
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, userAuth => {

      if (userAuth) {
        dispatch(
          login({
            uid : userAuth.uid, 
            email : userAuth.email
          })
        )
        // console.log(userAuth);
      }
      else {
        dispatch(logout())
      }

      return unsubscribe;
    });

  }, [dispatch]);


  return (
    <div className='app'>
      
      {
      /* 
      * If user is not logged go to the login screen
      * Else go to the home screen 
      * */
      }
      <Router>
        { !user ? (<Login/>) : 
        (
          <Routes>
            <Route exact path='/profile' element={ <ProfileScreen/>}/>
            <Route exact path='/' element={<HomeScreen/>}/>
          </Routes>
        )}
      </Router>

    </div>
  );
}

export default App;
