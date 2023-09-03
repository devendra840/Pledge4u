const mongoose=require("mongoose")


const ImagesModelSchema=mongoose.Schema({
    timeStamp: { type: Date, default: Date.now },
    img: { required: true, type: String },
  

})

const ImagesModel=mongoose.model("images",ImagesModelSchema)

module.exports={ImagesModel}