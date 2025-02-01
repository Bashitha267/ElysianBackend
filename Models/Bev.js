const mongoose=require('mongoose')
const BevSchema=new mongoose.Schema({
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

const Bevrage=mongoose.model('Beverages',BevSchema)
module.exports=Bevrage;