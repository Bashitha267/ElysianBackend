const mongoose=require('mongoose');
const dinnershema=new mongoose.Schema({
    name:{type:String,required:true},
    price:{type:String,required:true},
    image:{type:String,required:true},
    description:{type:String,required:true},






})
const dinner=mongoose.model('Dinner',dinnershema)
module.exports=dinner;
