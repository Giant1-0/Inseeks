const mongoose = require('mongoose')

mongooseconnection().then(() => console.log("Connected to Mongodb")).catch((err) => console.log(err))

async function mongooseconnection(){
    await mongoose.connect('mongodb://127.0.0.1:27017/GiantDatabase')
}

const ChatOnNavbar = require('../models/chat')  
const express = require('express')
const app = express()
const port = 5000

app.use(express.json())

const cors = require('cors');
app.use(cors());

app.post('/api/users',(req,res) =>{
    const {name, email, suggestion, message} = req.body
    console.log(name,"Hi")
    console.log(email,"Hi")
    console.log(suggestion,"Hi")
    console.log(message,"Hi")

    saveUsers()
    async function saveUsers(){
        const chat = await ChatOnNavbar.create({
            name: name,
            email: email,
            suggestion: suggestion,
            message: message
        })
    }
    
})

app.listen(port, ()=>{
    console.log(`Server Started on the port ${port}`)
})