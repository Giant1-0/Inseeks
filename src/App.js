import {useState} from 'react'
import NAVBAR from './components/common/nav'
import PROFILEPAGE from './components/Profile pages/profilepage'
import DASHBOARD from './components/Dashboard/popupdashboard'
import CHAT from './components/Chat/chat'
import LOGIN from './components/LoginPage/loginpage'
import SIGNUP from './components/SignUpPage/signuppage'
import HOME from './components/Home/home'
import POST from './components/Post/Post'

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

  const [post, setPost] = useState(false);
  const [homePageSwitching, setSwitch] = useState(1);


  const profilePageToggleButton = () => {
    setSwitch(0);
    setActiveComponent((prevComponent) => 
      prevComponent === 'PROFILEPAGE' ? 'HOME': 'PROFILEPAGE')
  }

  const dashToggleButton = () => {
    setActiveComponent((prevComponent) =>
    prevComponent === 'DASHBOARD' ? null : 'DASHBOARD')
}  

  const chatToggleButton = () => {
    setSwitch(0);
    setActiveComponent((prevComponent) =>
    prevComponent === 'CHAT' ? 'HOME': 'CHAT')
}  
  const Gosignuppage = () => {
    ShowSignedUp(true);
    SetSignupToLoginBack(false);
  } 
  const Gologinpage = () => {
    SetSignupToLoginBack(true);
    ShowSignedUp(false);
  }
  const SignUpComplete = () =>{
    ShowSignedUp(false);
 }
 const loginpagefromlogoutbutton = () => {
  setIsLoggedIn(false);
 }
 const WriteonPost = () => {
  setPost(true);
}

const backToHomePage =() =>{
  //  setBack(true);
   setPost(false);
   setSwitch(1);
  //  setActiveComponent('HOME')
  setActiveComponent((prevComponent)=>
    prevComponent === 'HOME' ? null:'HOME'
  )
}
  return (
    <div>
      {isLoggedIn ? 
      
      <div> 
        <NAVBAR onProfileImageClick={profilePageToggleButton}
              onDashImageClick={dashToggleButton} 
              onchatToggleButton={chatToggleButton}
              loginpage={loginpagefromlogoutbutton}
              homePage={backToHomePage}
              />

              {activeComponent === 'PROFILEPAGE' ? <PROFILEPAGE /> : null}
              {activeComponent === 'DASHBOARD' ? <DASHBOARD /> : null}
              {activeComponent === 'CHAT' ? <CHAT onFormSubmit={chatToggleButton}/> : null}
              {activeComponent === 'HOME' ? <HOME /> : null}

              {
      post? <POST/> : homePageSwitching? <HOME addAQuestion={WriteonPost}/> :null
    }


      </div> 
      : signedUp?
        <SIGNUP loginpage={Gologinpage} onSignUpFormSubmit={SignUpComplete}/> 
       : SignUpToLoginBack ?
       <LOGIN setIsLoggedIn={setIsLoggedIn} signuppage={Gosignuppage}/>
      :
      <LOGIN setIsLoggedIn={setIsLoggedIn} signuppage={Gosignuppage}/>
}     
    </div>
  );
}

export default App;
