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


app.post('/api/signupdata', async (req,res) => {
    const {fullname,email,pass,username}=req.body

    const isEmailExist = await SignUpDetails.findOne({email: email})

    if(isEmailExist){
        console.log("User already exists")
        return res.status(409).json({error: 'Conflicting'});
    } else {
        
        if(emailValidator.validate(email)){
            saveSignUp()            
            return res.status(200).json({ message: 'User registered successfully' });
        } 
        else 
        {
        return res.status(400).json({ error: 'Invalid email account' });    
        console.log("Unable to save")
        }     
    }

    console.log(emailValidator.validate(email))
       
    async function saveSignUp(){
        const signup = await SignUpDetails.create({
            fullname : fullname,
            email : email,
            pass: pass,
            username: username
        })
    }

})

app.post('/api/login', async (req,res)=>{
    //Axios was not working without the try-catch
    try{
    const {email,pass}=req.body;
        console.log(email, pass);

    const name = await SignUpDetails.findOne({email: email}) //Why does not work without async await
    if(name.email === email && name.pass === pass){
        res.status(200).json({message: 'user matched'});
        console.log("user matched")
    } else {
        res.status(404).json({message: 'user not found'});
        console.log("user did not match")
    }
} catch(error) {
    // console.err(error);
    res.status(500).json({error: 'An error occured'})
}
    });

    
app.listen(port, ()=>{
    console.log(`Server Started on the port ${port}`)
})