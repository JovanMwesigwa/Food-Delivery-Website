import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch } from "react-router-dom"
import LandingPage from './landing/landing';
import SignIn from './signin/signin';
import Register from './register/register';
import NavBar from '../components/navbar/navbar';
import { AnimatePresence } from "framer-motion"
import RestaurantProfile from './restaurantProfile/restaurantProfile';


function HomePage() {
    const [ showRegister, setShowRegister ] = useState(false);
    const [ showSignIn, setShowSignIn ] = useState(false);

  return (
    <>
      <NavBar showRegister={showRegister} setShowRegister={setShowRegister}
              showSignIn={showSignIn} setShowSignIn={setShowSignIn}/>

      { showRegister && <Register showRegister={showRegister} setShowRegister={setShowRegister} /> }
      { showSignIn && <SignIn showSignIn={showSignIn}  setShowSignIn={setShowSignIn} />}
        
      <AnimatePresence exitBeforeEnter onExitComplete={() => setShowRegister(false)} >
          <Switch >
              <Route exact path="/" component={LandingPage} />
              <Route path="/restaurant-profile" component={RestaurantProfile} />
          </Switch>
      </AnimatePresence>
    </>
  );
}

export default HomePage;
