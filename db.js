const mongoose=require("mongoose")

const DataBaseConnection=mongoose.connect(`mongodb+srv://devendra:devendra@cluster0.0n64zp7.mongodb.net/pledge4u?retryWrites=true&w=majority`)
module.exports={DataBaseConnection}