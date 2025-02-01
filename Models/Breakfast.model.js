const mongoose=require("mongoose");
const breakshema=new mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        description:{
            type:String,
            required:true
    },
    img:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    }
    
}


)

const breakfast=mongoose.model('Breakfast',breakshema);
module.exports=breakfast;  
