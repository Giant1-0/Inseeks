import React,{useState} from 'react' 

export default function Nav({onProfileImageClick,onDashImageClick,onchatToggleButton,loginpage,homePage}) {
  const [tog, settog] = useState(true);
  const NavBarToggleButton = () => {
    settog(!tog) //!returns opposite boolean
  }

  // const [showUserProfilePage, setUserProfilePage] =useState(false);
  // const profilePageToggleButton = () => {

  // }

  return (
    <div>
        <div className="div-navbar">
            <h3 className='name-in-logo' onClick={homePage}>InSeeks</h3>
            <ul className='ul-navbar_center'>
                <li><img className="dashboard-image" src="/images/dashboard.png" alt="" onClick={onDashImageClick}/></li>
                <li><img className="chatoption-image" src="/images/chatoption.png" alt="" onClick={onchatToggleButton}/></li>
                <li><i className="fa-solid fa-bell" id='thebell-icon'></i></li>
                <li><i className="fa-solid fa-user" id='theprofile-icon' onClick={onProfileImageClick}></i></li>
                </ul>

            <ul className='ul-navbar_right'>
                <li><input className='search-text' type='text' placeholder='Search'></input></li>
                <li><button className='navbar-login-button' onClick={loginpage}> Log out </button></li>
                <button className='toggle-button-on-nav-bar' onClick={NavBarToggleButton}> In </button>
            </ul>
            {/* For toggle Links */}            
        </div>
      <div className={`ToggleDiv${tog? 'notShowing' : ''}`}>
      <ul className='ul-navbar_top'>
                <li><img className="dashboard-image" src="/images/dashboard.png" alt="" /><a href="#">Dashboard</a></li>
                <li><img className="chatoption-image" src="/images/chatoption.png" alt="" /><a href="#">Chat</a></li>
                <li><i class="fa-solid fa-bell" id='thebell-icon'></i><a href="#">Notification</a></li>
                <li><i class="fa-solid fa-user" id='theprofile-icon'></i><a href="#">Profile</a></li>
                </ul>

            <ul className='ul-navbar_bottom'>
                <li><input className='search-text-toggle-bottom' type='text' placeholder='Search'></input></li>
                <li><button className='navbar-login-button-toggle-bottom'> Log out </button></li>
            </ul>
      </div>
    </div>
  )
}