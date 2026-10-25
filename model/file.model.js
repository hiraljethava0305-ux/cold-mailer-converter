import mongoose from "mongoose"
const fileSchema=new mongoose.Schema({
    fileName:{
        type:String,
        required:true
    },
    fileURL:{
        type:String,
        required:true
    },
    createdBy:{
        required:true,
        ref:"User",
        type:mongoose.Schema.Types.ObjectId
    }
})

const File=mongoose.model("File",fileSchema)
export default File
