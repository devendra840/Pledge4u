const express=require("express")
const { DataBaseConnection } = require("./db.js")
const { ImagesModel } = require("./Model/ImagesModel.js")
const cors =require("cors")

const app=express()

app.use(express.json())

app.use(cors())

app.get("/images",async(req,res)=>{
    try {
       const data=await ImagesModel.find({})
       res.send({msg:"Data Fetched Success",data})
    } catch (error) {
        
    }
})

app.post("/images",async(req,res)=>{
    console.log(req.body)
    try {
        let newImage= ImagesModel(req.body)

        await newImage.save()

        res.send({msg:"Images added Success"})

    } catch (error) {
        
    }
})

app.listen(8000,async()=>{
    try {
        console.log("server is started at port 8000")
        await DataBaseConnection
        console.log("Data Base Connected to the server")

} catch (error) {
        console.log("error",error)
    }
})