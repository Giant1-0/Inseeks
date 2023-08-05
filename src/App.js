import {useState} from 'react'
import NAVBAR from './components/common/nav'
import PROFILEPAGE from './components/Profile pages/profilepage'
import DASHBOARD from './components/Dashboard/popupdashboard'


import './App.css';
import './ProfilePage.css';
import './popupdashboard.css';


function App() {
  const [showUserProfilePage, setUserProfilePage] =useState(false);
  const profilePageToggleButton = () => {
    setUserProfilePage(!showUserProfilePage)
  }

  const [showdashPopUp, setShowdashPopUp] =useState(false);
  const dashToggleButton = () => {
    setShowdashPopUp(!showdashPopUp)
  }
  return (
    <div>
      <NAVBAR onProfileImageClick={profilePageToggleButton}
              onDashImageClick={dashToggleButton} />
      {showUserProfilePage ? <PROFILEPAGE/>:null }
      {showdashPopUp ? <DASHBOARD/>:null }
    </div>
  );
}

export default App;
