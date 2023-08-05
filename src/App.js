import {useState} from 'react'
import NAVBAR from './components/common/nav'
import PROFILEPAGE from './components/Profile pages/profilepage'

import './App.css';
import './ProfilePage.css';

function App() {
  const [showUserProfilePage, setUserProfilePage] =useState(false);
  const profilePageToggleButton = () => {
    setUserProfilePage(!showUserProfilePage)
  }
  return (
    <div>
      <NAVBAR onProfileImageClick={profilePageToggleButton}/>
      {showUserProfilePage ? <PROFILEPAGE/>:null }
     
    </div>
  );
}

export default App;
