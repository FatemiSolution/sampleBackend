require('dotenv').config()
// this is just like import express statement
const express = require('express')
// app is a powerful variable
const app = express()
// this is a virtual port where listening will take place
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter', (req,res)=> {
    res.send('shabbir.high@gmail.com')
})
app.get('/login', (req, res)=>{
    res.send('<h1>please login at fatemi Solutiion</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})