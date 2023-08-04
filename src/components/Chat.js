import React from "react";
import './Chat.css';
import NAVBAR from "./common/nav";
import Footer from "./common/Footer";

function Chat(){
    return(
        <>
            <NAVBAR/>
        <div className="chat">
            <div className="header_chat col-sm-12 col-md-6 col-lg-4 my-responsive-div">
               <h2>Chat With Us</h2>
               <h3>Send a request for your question</h3>
            </div>


         <div className="form_chat col-sm-12 col-md-6 col-lg-4 my-responsive-div">
            <form action="">
             <label htmlFor="fname">Full Name</label>
             <input type="text" className="input_form" id="fname" name="fname" />
             <label htmlFor="email">Email</label>
             <input type="email" className="input_form" id="email" name="email" />
             <label htmlFor="suggestion">Suggestion</label>
             <input type="text" className="input_form" id="suggestion" name="suggestion" />
             <label htmlFor="message">Message</label>
             <input type="text" className="input_form" id="message" name="message" />
             <input type="button" className="btn_form" value="Send" />
            </form>
         </div>

        </div>
         <Footer/>
        </>
    )
}


export default Chat;