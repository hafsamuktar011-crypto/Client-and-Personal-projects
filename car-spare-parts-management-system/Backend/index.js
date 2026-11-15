import express from 'express'
import cors from 'cors';


const app=express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


app.get("/",(req,res)=>{
    res.send("get ready")
})

app.listen(3000,()=>{
    console.log("server is starting http://localhost:3000")
})