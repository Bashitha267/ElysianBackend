const mongoose=require('mongoose');
const productSchema=new mongoose.Schema(
{
    name:{
        type:String,
        required:[true,'Cheif name is required']
    },
    role:{
        type:String,
        required:[true]
    },
    email:{
        type:String,
        required:[true]
    },
    image:{
        type:String,
        required:[true]
    },
    description:{
        type:String,
        required:[true]
    },

},
{
    timestamps:true,
}

)
const Chief=mongoose.model('Cheif',productSchema);
module.exports=Chief;