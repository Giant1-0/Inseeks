import React,{useState} from 'react' 
import { Link } from 'react-router-dom';


export default function Nav({onDashImageClick,loginpage}) {
  const [tog, settog] = useState(true);
  const NavBarToggleButton = () => {
    settog(!tog) //!returns opposite boolean
  }


  return (
    <div>
        <div className="div-navbar">
          <Link to="/"><h3 className='name-in-logo'> InSeeks</h3></Link>
            <ul className='ul-navbar_center'>
                <li><img className="dashboard-image" src="/images/dashboard.png" alt="" onClick={onDashImageClick}/></li>
                {/* <Link to="/chat"> <li><img className="chatoption-image" src="/images/chatoption.png" alt=""/></li></Link> */}
                <li><i className="fa-solid fa-bell" id='thebell-icon'></i></li>
                <Link to="/profile"><li><i className="fa-solid fa-user" id='theprofile-icon'></i></li></Link>
                </ul>
                      
            <ul className='ul-navbar_right'>
                <li><input className='search-text' type='text' placeholder='Search'></input></li>
                <Link to ="/"><li><button className='navbar-login-button' onClick={loginpage}> Log out </button></li> </Link>
                <button className='toggle-button-on-nav-bar' onClick={NavBarToggleButton}> In </button>
            </ul>
            {/* For toggle Links */}            
        </div>
      <div className={`ToggleDiv${tog? 'notShowing' : ''}`}>
      <ul className='ul-navbar_top'>
                <li><img className="dashboard-image" src="/images/dashboard.png" alt="" /><a href="#">Dashboard</a></li>
                {/* <li><img className="chatoption-image" src="/images/chatoption.png" alt="" /><a href="#">Chat</a></li> */}
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