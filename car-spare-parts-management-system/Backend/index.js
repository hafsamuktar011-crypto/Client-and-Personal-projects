import express from 'express'
import cors from 'cors';
import { mainRuote } from './src/routes/main.route';


const app=express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


app.get("/api",mainRuote)

app.listen(3000,()=>{
    console.log("server is starting http://localhost:3000")
})