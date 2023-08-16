import { useState } from 'react';
import Nav from './components/common/nav';
import Home from './components/Home/home';
import POST from './components/post/Post';




import './App.css';


function App() {

  const [post, setPost] = useState(false);
  const [back, setBack] = useState(false);

const WriteonPost = () => {
  setPost(true);
}

const backToHomePage =() =>{
   setBack(true);
   setPost(false);
}

  return (
  
   <div>
    <Nav homePage={backToHomePage}/>
    {
      post? <POST/> : back?  <Home addAQuestion={WriteonPost}/> : <Home addAQuestion={WriteonPost}/>
    }
   
    
   </div>
    
  );
}

export default App;
