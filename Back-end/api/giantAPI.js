const mongoose = require('mongoose')

mongooseconnection().then(() => console.log("Connected to Mongodb")).catch((err) => console.log(err))

async function mongooseconnection(){
    await mongoose.connect('mongodb://127.0.0.1:27017/GiantDatabase')
}

const ChatOnNavbar = require('../models/chat')
const SignUpDetails = require('../models/signup')
// SignUpDetails.deleteMany({}).then(()=>{
//     console.log("deleted")
// })

const express = require('express')
const app = express()
const port = 5000

app.use(express.json())

const cors = require('cors');
app.use(cors());


const emailValidator = require('email-validator');

app.post('/api/users',(req,res) => {
    const {name, email, suggestion, message} = req.body
    console.log(name,"Hi")
    console.log(email,"Hi")
    console.log(suggestion,"Hi")
    console.log(message,"Hi")

    saveChat()
    async function saveChat(){
        const chat = await ChatOnNavbar.create({
            name: name,
            email: email,
            suggestion: suggestion,
            message: message
        })

    }   
})


app.post('/api/logindata',(req,res) => {
    const {fullname,email,pass,username}=req.body
    console.log(emailValidator.validate(email))
        if(emailValidator.validate(email)){
            saveSignUp()            
        } else 
        {
        return res.status(400).json({ error: 'Invalid email account' });
        console.log("Unable to save")
        }     
    async function saveSignUp(){
        
        const signup = await SignUpDetails.create({
            fullname : fullname,
            email : email,
            pass: pass,
            username: username
        })
        return res.status(200).json({ message: 'User registered successfully' });

    }

})

app.listen(port, ()=>{
    console.log(`Server Started on the port ${port}`)
})