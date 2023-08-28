import {useState, useEffect} from 'react'
import NAVBAR from './components/common/nav'
import PROFILEPAGE from './components/Profile pages/profilepage'
import DASHBOARD from './components/Dashboard/popupdashboard'
import CHAT from './components/Chat/chat'
import LOGIN from './components/LoginPage/loginpage'
import SIGNUP from './components/SignUpPage/signuppage'
import HOME from './components/Home/home'
import POST from './components/Post/Post'
import REQUEST from './components/Request/requestquestion'
import { BrowserRouter,Routes, Route} from 'react-router-dom';

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
  const [userDataInformation, setUserData] = useState({});


  useEffect(()=> {
    const storedLoginStatus = localStorage.getItem('isLoggedIn');
    if(storedLoginStatus) {
      setIsLoggedIn(JSON.parse(storedLoginStatus))
    }
    const storedUserData = localStorage.getItem('userDataInformation');
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  },[])
  

  const dashToggleButton = () => {
    setActiveComponent((prevComponent) =>
    prevComponent === 'DASHBOARD' ? null : 'DASHBOARD')
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
  localStorage.removeItem('isLoggedIn')
 }
 const handleLogin = (userData) => {
  setIsLoggedIn(true);
  localStorage.setItem('isLoggedIn',true)
  setUserData(userData)
  localStorage.setItem('userDataInformation', JSON.stringify(userData));
  console.log('isLoggedIn:', isLoggedIn);
console.log('signedUp:', signedUp);
console.log('userDataInformation:', userDataInformation);

}

  return (
    <div>
      {isLoggedIn ? 
      
      <div> 
        <BrowserRouter>
        <NAVBAR onDashImageClick={dashToggleButton} loginpage={loginpagefromlogoutbutton}/>
        <Routes>
          <Route path='/' element={<HOME/>}/>
          <Route path='/chat' element={<CHAT/>}/>
          <Route path='/profile' element={<PROFILEPAGE username={userDataInformation.username}/>}/>
          <Route path='/post' element={<POST/>}>
          {/* <Route path='/requests' element={<REQUEST/>}/> */}
          </Route>
        </Routes>
        </BrowserRouter>
              {activeComponent === 'DASHBOARD' ? <DASHBOARD /> : null}
      </div> 
      : signedUp?
        <SIGNUP loginpage={Gologinpage} onSignUpFormSubmit={SignUpComplete}/> 
       : SignUpToLoginBack ?
       <LOGIN setIsLoggedIn={handleLogin} signuppage={Gosignuppage} onLoginSuccess={handleLogin}/>
      :
      <LOGIN setIsLoggedIn={handleLogin} signuppage={Gosignuppage} onLoginSuccess={handleLogin}/>
      }
    </div>
  )
  
    }      
export default App;
