import React,{useState} from "react";
import axios from "axios";


export default function Chat({onFormSubmit}){
const [fullname, setfullname] = useState('')
const [email, setemail] = useState('')
const [suggestion, setsuggestion] = useState('')
const [message, setmessage] = useState('')

const handleSubmit = (e) => {
    e.preventDefault();
    onFormSubmit();
    const newChat ={
        name: fullname,
        email: email,
        suggestion: suggestion,
        message: message
    };

    axios.post('http://localhost:5000/api/users',newChat)
    .then((response) => {
        console.log('User registered',response.data)
    })
    .catch((error)=>{
        console.error('Error registered user:', error)
    })
}

    return(
        <>
        <div className="chat">
            <div className="header_chat col-sm-12 col-md-6 col-lg-4 my-responsive-div">
               <h2>Chat With Us</h2>
               <h3>Send a request for your question</h3>
            </div>


         <div className="form_chat col-sm-12 col-md-6 col-lg-4 my-responsive-div">
            <form action="" onSubmit={handleSubmit}>
             <label htmlFor="fname">Full Name</label>
             <input type="text" className="input_form" id="fname" name="fname" 
             value={fullname}
             onChange={(e)=> setfullname(e.target.value)}
             />
             <label htmlFor="email">Email</label>
             <input type="email" className="input_form" id="email" name="email" 
             value={email}
             onChange={(e)=> setemail(e.target.value)}
             />
             <label htmlFor="suggestion">Suggestion</label>
             <input type="text" className="input_form" id="suggestion" name="suggestion" 
             value={suggestion}
             onChange={(e)=> setsuggestion(e.target.value)}
             />
             <label htmlFor="message">Message</label>
             <textarea type="text" className="input_form" id="message" name="message" 
             value={message}
             onChange={(e)=> setmessage(e.target.value)}
             />
             {/* <div className="input_form" id="message" contenteditable="true">
 
            </div> */}
             <input type="submit" className="btn_form" value="Send"/>
            </form>
         </div>

        </div>
        </>
    )
}
