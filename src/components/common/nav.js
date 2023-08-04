import React, { useState } from 'react';
import PopupWindow from './PopupWindow';


const Navbar = () => {

  const [showPopup, setShowPopup] = useState(false);

  const handleIconClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };


  return (
    <div>
        <div class="div-navbar">
            <h3 className='name-in-logo'>Inseeks</h3>
            <ul className='ul-navbar_center'>
                <li><img className="dashboard-image" src="/images/dashboard.png" alt="" onClick={handleIconClick}/></li>
                <li><img className="chatoption-image" src="/images/chatoption.png" alt="" /></li>
                <li><i class="fa-solid fa-bell" id='thebell-icon'></i></li>
                <li><i class="fa-solid fa-user" id='theprofile-icon'></i></li>
                </ul>

            <ul class='ul-navbar_right'>
                <li><input className='search-text' type='text' placeholder='Search'></input></li>
                <li><button className='navbar-login-button'> Log out </button></li>
            </ul>
                
            
        </div>

        {showPopup && (
        <PopupWindow onClose={handleClosePopup}>
          {
   
          }
        </PopupWindow>
      )}

    </div>
  )
}


export default Navbar;