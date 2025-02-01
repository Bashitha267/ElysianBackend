const mongoose=require('mongoose')
const lunch=new mongoose.Schema({
    name:{
         type:String,
         required:true
    },
    price:{
        type:String,
        required:true

    },
    img:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
})
const Lunch=mongoose.model('Lunch',lunch)
module.exports=Lunch;