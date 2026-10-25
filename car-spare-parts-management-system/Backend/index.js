import express from 'express'

const app=express()

app.use(express.json())
app.listen("server is starting http://localhost:3000")