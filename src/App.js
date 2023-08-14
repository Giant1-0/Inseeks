import {useState} from 'react'
import NAVBAR from './components/common/nav'
import PROFILEPAGE from './components/Profile pages/profilepage'
import DASHBOARD from './components/Dashboard/popupdashboard'
import CHAT from './components/Chat/chat'
import LOGIN from './components/LoginPage/loginpage'
import SIGNUP from './components/SignUpPage/signuppage'

import './App.css';
import './ProfilePage.css';
import './popupdashboard.css';
import './Chat.css';
import './LoginPage.css';
import './SignUp.css'

function App() {

  const [activeComponent, setActiveComponent] =useState(null);
  const [isLoggedIn, setIsLoggedIn] =useState(false);
  const [signedUp, ShowSignedUp] =useState(false);
  const [SignUpToLoginBack, SetSignupToLoginBack] =useState(false);

  const profilePageToggleButton = () => {
    setActiveComponent((prevComponent) =>
      prevComponent === 'PROFILEPAGE' ? null: 'PROFILEPAGE')
  }

  const dashToggleButton = () => {
    setActiveComponent((prevComponent) =>
    prevComponent === 'DASHBOARD' ? null: 'DASHBOARD')
}  

  const chatToggleButton = () => {
    setActiveComponent((prevComponent) =>
    prevComponent === 'CHAT' ? null: 'CHAT')
}  
  const Gosignuppage = () => {
    ShowSignedUp(true);
    SetSignupToLoginBack(false);
  } 
  const Gologinpage = () => {
    SetSignupToLoginBack(true);
    ShowSignedUp(false);

  }

  return (
    <div>
      {isLoggedIn ? 
      
      <div> 
        <NAVBAR onProfileImageClick={profilePageToggleButton}
              onDashImageClick={dashToggleButton} 
              onchatToggleButton={chatToggleButton}/>

              {activeComponent === 'PROFILEPAGE' ? <PROFILEPAGE /> : null}
              {activeComponent === 'DASHBOARD' ? <DASHBOARD /> : null}
              {activeComponent === 'CHAT' ? <CHAT onFormSubmit={chatToggleButton}/> : null}
 
      </div> 
      : signedUp?
        <SIGNUP loginpage={Gologinpage}/> 
       : SignUpToLoginBack ?
       <LOGIN setIsLoggedIn={setIsLoggedIn} signuppage={Gosignuppage}/>

      :
      <LOGIN setIsLoggedIn={setIsLoggedIn} signuppage={Gosignuppage}/>
}     
    </div>
  );
}

export default App;
