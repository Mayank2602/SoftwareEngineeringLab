
const express=require("express");
const path =require('path')
const bodyParser=require('body-parser')

const app=express();
const port=3000

app.use(bodyParser.urlencoded({extended:true}))
// app.use(express.static('../public'))

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/public/index.html')
})


app.listen( port,()=>`app is listening on ${port}`)