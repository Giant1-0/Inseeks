import React,{useState} from 'react'
import axios from "axios";


export default function SignUpPage({loginpage,onSignUpFormSubmit}) {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [username, setUsername] = useState('');
  const [popUpCorrectMail, setpopUpCorrectMail] = useState('none');
  const [popUpSuccess, setpopUpSuccess] = useState('none');
  const [popUpEmailAlExists, setpopUpEmailAlExists] = useState('none');

  const url = "localhost"
  //localhost

  const handleLogin = (e) => {
    e.preventDefault();
     const SignUpData = {
      fullname : fullname,
      email : email,
      pass : pass,
      username : username
    };
      axios.post(`http://${url}:5000/api/signupdata`, SignUpData)
      .then((response)=> {
      
          console.log('Success', response)
          if(response.status === 200){
              setpopUpSuccess('block');
              setTimeout(() => {
                onSignUpFormSubmit()
                setpopUpSuccess('none'); // Hide popup after 5 seconds
              }, 2000);

          }
        })
      .catch((err) => {
          console.log('There is an error',err)

          if(err.response.status === 409){
            setpopUpEmailAlExists('block');
              setTimeout(() => {
                setpopUpEmailAlExists('none'); // Hide popup after 5 seconds
              }, 4000);
          }
          else if(err.response.status === 400){
            setpopUpCorrectMail('block');
              setTimeout(() => {
                setpopUpCorrectMail('none'); // Hide popup after 5 seconds
              }, 3000);
          }
      })
    }
  
  return (
    <>
    <div className="message-popup-please-enter-valid-mail" style={ {display: popUpCorrectMail }}>Please enter a valid email</div>
    <div className="message-popup-success" style={ {display: popUpSuccess }}>Success!!</div>
    <div className="message-popup-already-exists" style={ {display: popUpEmailAlExists }}>Oops, user having same email already exists, Please login if already registered</div>

    <div className='signup'>
    <div className="container-signup">
      <div className="brand-container-signup">
        <h1 className="header-signup header-left-signup">
        Unleash Your Creativity Where the questions Ignite imaginative answer
            {/* Sign Up Through */}
            </h1>
        <div className="icon-media-signup">
          <i className="fa-brands fa-facebook fa-xl i"></i>
          <i className="fa-brands fa-instagram fa-xl i"></i>
          <i className="fa-brands fa-twitter fa-xl i"></i>
        </div>
      </div>
      <div className="form-container-signup">
        <h1 className="header-signup header-right-signup">Please Enter Details</h1>
        <form action="#" onSubmit={handleLogin}>
        <input type="fullname" name="fullname" id="fullname" placeholder="Full Name" 
          value={fullname}
          onChange={(e)=>setFullname(e.target.value)}
          required
          />
          <input type="email" name="email" id="email1" placeholder="Email ID" 
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          required
          />
          <input type="password" name="pass" id="pass1" placeholder="Password" 
          value={pass}
          onChange={(e)=>setPass(e.target.value)}
          required
          />
          <input type="username" name="username" id="username" placeholder="Username: How We should call you" 
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
          required
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
        <a className="redirect-signin-signup" onClick={loginpage}>Go back to login page !</a>
      </div>
    </div>

    </div>
    </>
  )
}
