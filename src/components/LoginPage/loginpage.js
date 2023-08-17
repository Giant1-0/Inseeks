import React,{useState} from "react";
import axios from "axios";

export default function Loginpage({setIsLoggedIn,signuppage}) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [LoginFailMessage, setLoginFailMessage] = useState('none');

  const handleLogin = (e) => {
    e.preventDefault();
     const LogInData = {
      email : email,
      pass : pass,
    };
      axios.post('http://localhost:5000/api/login', LogInData)
      .then((response)=> {
        console.log("Success",response)
          if(response.status === 200){
            setIsLoggedIn()
          } else {
            console.log("User with this email not found")
          }
        })
      .catch((err) => {      
          console.log('Error',err.response.status)
          if(err.response.status === 500){
          setLoginFailMessage('block')
          setTimeout(() => {
            setLoginFailMessage('none')
          }, 4000);
        } else {
          console.log("Some other error")
        }
      })
    }
  
  return (
    <>
    <div className="login-email-pass-wrong" style={ {display: LoginFailMessage }}>Oops, Either email or password do not match! Try Again</div>
    <div className='login'>
    <div className="container">
      <div className="brand-container">
        <h1 className="header header-left">GwfswfIANT</h1>
        <div className="icon-media">
          <i className="fa-brands fa-facebook fa-xl i"></i>
          <i className="fa-brands fa-instagram fa-xl i"></i>
          <i className="fa-brands fa-twitter fa-xl i"></i>
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
        <a className="redirect-signin" onClick={signuppage}>New Giant? Sign Up !</a>
      </div>
    </div>

    </div>
    </>
  )
}
