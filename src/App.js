import {useState} from 'react'
import NAVBAR from './components/common/nav'
import PROFILEPAGE from './components/Profile pages/profilepage'
import DASHBOARD from './components/Dashboard/popupdashboard'
import CHAT from './components/Chat/chat'


import './App.css';
import './ProfilePage.css';
import './popupdashboard.css';
import './Chat.css';



function App() {

    const [activeComponent, setActiveComponent] =useState(null);

  // const [showUserProfilePage, setUserProfilePage] =useState(false);
  const profilePageToggleButton = () => {
    setActiveComponent((prevComponent) =>
      prevComponent === 'PROFILEPAGE' ? null: 'PROFILEPAGE')
  }

  // const [showdashPopUp, setShowdashPopUp] =useState(false);
  const dashToggleButton = () => {
    setActiveComponent((prevComponent) =>
    prevComponent === 'DASHBOARD' ? null: 'DASHBOARD')
}  

  const chatToggleButton = () => {
    setActiveComponent((prevComponent) =>
    prevComponent === 'CHAT' ? null: 'CHAT')
}  
  return (
    <div>
      <NAVBAR onProfileImageClick={profilePageToggleButton}
              onDashImageClick={dashToggleButton} 
              onchatToggleButton={chatToggleButton}/>

      {activeComponent === 'PROFILEPAGE' ? <PROFILEPAGE /> : null}
      {activeComponent === 'DASHBOARD' ? <DASHBOARD /> : null}
      {activeComponent === 'CHAT' ? <CHAT onFormSubmit={chatToggleButton}/> : null}

      {/* {showUserProfilePage ? <PROFILEPAGE/>:null }
      {showdashPopUp ? <DASHBOARD/>:null } */}

    </div>
  );
}

export default App;
