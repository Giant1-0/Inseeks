const express = require('express');
const router = express.Router();
const SignUpDetails = require('../models/signup')
const emailValidator = require('email-validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
var userDetailsFetch = require('../middlewares/userDetailsFetch')

const JWT_SECRET  = 'KamalNapoRitik$class1'

router.post('/signupdata', async (req,res) => {
    const {fullname,email,pass,username}=req.body
    const name = await SignUpDetails.findOne({email: email}) //Why does not work without async await
    console.log(req.user,"thi this this");
    const user = await SignUpDetails.findOne({email: email})

    if(user){
        console.log("User already exists")
        res.status(409).json({error: 'Conflicting'});
    } else {
        
        if(emailValidator.validate(email)){
            saveSignUp()            
            // const data = {
            //     user : {
            //         id: name.id
            //     }
            // }
            // const authToken = jwt.sign(data, JWT_SECRET);
            // console.log("This is auth token",authToken)
            res.status(200).json({ message: 'User registered successfully' });
        } 
        else 
        {
        res.status(400).json({ error: 'Invalid email account' });    
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

    if(!name) {
        res.status(404).json({message: 'user not found'});
        console.log("user do not exist")
    }
    const passwordComparison = await bcrypt.compare(pass, name.pass)
    if(!passwordComparison){
        res.status(400).json({message: 'Wrong Password'});
        console.log("Wrong Password")
    }
    else {
        const data = {
            user : {
                id: name.id,
                name: name.fullname
            }   
        }

        const authToken = jwt.sign(data, JWT_SECRET);
        console.log("This is auth token",authToken)
        res.status(200).json({message: 'user matched',authToken: authToken});
    } 
    
   
} catch(error) {
    // console.err(error);
    res.status(500).json({error: 'An error occured'})
}
});

// router.post('/getuser', userDetailsFetch,  async (req, res) => {
//     try {
//     //   userId = req.user.id;
//     //   const user = await SignUpDetails.findById(userId).select("-pass")
     
//     //   res.send(user)
//     console.log(req.user)
//     } catch (error) {
//       console.error(error.message);
//       res.status(500)
//     //   .send("Internal Server Error");
//     }
// })

router.post('/getuser', userDetailsFetch, async (req, res) => {
    try {
        // Access the user object from req.user
        const user = await req.user;
        // Check if the user is valid (optional)
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        // Send the user data as the response
        res.json(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;

