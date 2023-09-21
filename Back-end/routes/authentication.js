const express = require('express');
const router = express.Router();
const SignUpDetails = require('../models/signup')
const emailValidator = require('email-validator')
const bcrypt = require('bcryptjs')

router.post('/signupdata', async (req,res) => {
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
        const salt = await bcrypt.genSalt(10)
        const secPass = await bcrypt.hash(pass,salt)

        const signup = await SignUpDetails.create({
            fullname : fullname,
            email : email,
            pass: secPass,
            username: username
        })
    }

})


router.post('/users',(req,res) => {
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


router.post('/login', async (req,res)=>{
    //Axios was not working without the try-catch
    try{
    const {email,pass}=req.body;
        console.log(email, pass);

    const name = await SignUpDetails.findOne({email: email}) //Why does not work without async await
    if(name.email === email && name.pass === pass){
        res.status(200).json({message: 'user matched',username: name.username});
        console.log("user matched",name.username)

    } else {
        res.status(404).json({message: 'user not found'});
        console.log("user did not match")
    }
} catch(error) {
    // console.err(error);
    res.status(500).json({error: 'An error occured'})
}
});



module.exports = router;