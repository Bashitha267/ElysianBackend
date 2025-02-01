const mongoose=require('mongoose')
const feedbackshema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
        }
    }



)

const feedback=mongoose.model('Feedback',feedbackshema)
module.exports=feedback;