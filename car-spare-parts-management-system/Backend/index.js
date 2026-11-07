import express from 'express'


const app=express()

app.use(express.json())

app.get("/",(req,res)=>{
    res.send("get ready")
})

app.listen(3000,()=>{
    console.log("server is starting http://localhost:3000")
})