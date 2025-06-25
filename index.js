const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const userRouter = require('./Routes/auth')
const cookieParser = require('cookie-parser')
const recipeRouter = require('./Routes/reciper')


const app = express()

app.use(cors({
    origin:["https://vercel-recipe-alpha.vercel.app"],
    methods:["GET","POST","PUT"],
    credentials:true
}))
app.use(cookieParser())
app.use(express.json())
app.use('/auth', userRouter)
app.use('/recipe', recipeRouter)

const connection=()=>{
    mongoose.connect('mongodb+srv://rashmi:rashmi123@cluster0.pszpa.mongodb.net/teste?retryWrites=true&w=majority&appName=Cluster0').then(()=>{
        console.log("Db Connected");

    }).catch((error)=>{
       console.log(error);
    })
    
}
connection();



app.listen(3001, ()=>{
    console.log("Server Started")
})