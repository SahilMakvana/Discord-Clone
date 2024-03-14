import React, { useEffect } from 'react';
// import { Counter } from './features/counter/Counter';
import { useDispatch, useSelector } from "react-redux";
import './App.css';
import Chat from "./Chat";
import Sidebar from './Sidebar';
import { selectUser } from './features/userSlice';
import Login from "./Login";
import { auth } from './firebase';
import { login, logout } from "./features/userSlice";


function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log("user is ", authUser);
      if (authUser) {
        // the user is logged in
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        // the user is logged out
        dispatch(logout());
      }
    })
  }, [dispatch])
  return (
    // BEM naming convention
    <div className="app">
      {user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (
        <Login />
      )}
      
    </div>
  );  
}

export default App;

// Developed by SahilMakvana 
// Developed by SahilMakvana 

