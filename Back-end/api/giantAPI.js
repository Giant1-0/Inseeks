const mongodbConnect = require('../db/database')


mongodbConnect().then(() => console.log("Connected to Mongodb")).catch((err) => console.log(err))

const express = require('express')
const app = express()
const port = 5000


const cors = require('cors');
app.use(cors());


app.use(express.json())
app.use('/api',require('../routes/authentication'))
app.use('/',require('../routes/questionrequest'))
app.use('/',require('../routes/fileuploads'))

// const path = require('path');
// const uploadsPath = path.join(__dirname, '..uploads'); // Define the path to your uploads directory
// app.use('/uploads', express.static(uploadsPath));
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


app.listen(port, ()=>{
    console.log(`Server Started on the port ${port}`)
})