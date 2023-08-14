import React,{useState} from 'react'

export default function SignUpPage({loginpage}) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  
  
  const handleLogin = (e) => {
    e.preventDefault();
      
    }
  
  return (
    <div className='signup'>
    <div className="container-signup">
      <div className="brand-container-signup">
        <h1 className="header header-left-signup">
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
        <h1 className="header header-right-signup">Please Enter Details</h1>
        <form action="#" onSubmit={handleLogin}>
        <input type="fullname" name="fullname" id="fullname" placeholder="Full Name" 
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          />
          <input type="email" name="email" id="email1" placeholder="Email ID" 
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          />
          <input type="password" name="pass" id="pass1" placeholder="Password" 
          value={pass}
          onChange={(e)=>setPass(e.target.value)}
          />
          <input type="username" name="username" id="username" placeholder="Username: How We should call you" 
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
        <a className="redirect-signin-signup" onClick={loginpage}>Go back to login page !</a>
      </div>
    </div>

    </div>
  )
}
