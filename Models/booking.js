const mongoose=require('mongoose')
const bookingShema=new mongoose.Schema({
    name:{
        type:String,
        required:true

    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    count:{
        type:Number,
        required:true
    },
    message:{
        type:String,
        required:true
    }


})
const booking=mongoose.model('Booking',bookingShema)
module.exports=booking;