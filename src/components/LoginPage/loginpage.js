import React,{useState} from 'react'
//import './LoginPage.css';

export default function Loginpage({setIsLoggedIn}) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if(email == 'kamal@gmail' && pass =="kamal" || email == 'ritik@gmail' && pass =="ritik" || email == 'napo@gmail' && pass =="napo"){
      setIsLoggedIn(true);
    }
  }     
  return (
    <div className='login'>
    <div className="container">
      <div className="brand-container">
        <h1 className="header header-left">GwfswfIANT</h1>
        <div className="icon-media">
          <i className="fa-brands fa-facebook fa-xl"></i>
          <i className="fa-brands fa-instagram fa-xl"></i>
          <i className="fa-brands fa-twitter fa-xl"></i>
        </div>
      </div>
      <div className="form-container">
        <h1 className="header header-right">WELCOME</h1>
        <form action="#" onSubmit={handleLogin}>
          <input type="email" name="email" id="email1" placeholder="Email ID" 
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          />
          <input type="password" name="pass" id="pass1" placeholder="Password" 
          value={pass}
          onChange={(e)=>setPass(e.target.value)}
          />
          <button type="submit">Sign-Up</button>
        </form>
        <a href="#" className="google-auth">
          <img
            src="/images/SignUp.jpeg"
            alt="google icon"
            href="#"
          />
        </a>
        <a className="redirect-signin">New Giant? Sign Up !</a>
      </div>
    </div>

    </div>
  )
}
