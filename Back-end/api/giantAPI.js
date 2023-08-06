const mongoose = require('mongoose')



mongoose.connect('mongodb://127.0.0.1:27017/GiantDatabase')
.then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

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
    saveUsers()
    async function saveUsers(){
        const chat = new ChatOnNavbar({
            name: name,
            email: email,
            suggestion: suggestion,
            message: message
        })
    await chat.save()
    // console.log(chat)
    }
    
})

app.listen(port, ()=>{
    console.log(`Server Started on the port ${port}`)
})