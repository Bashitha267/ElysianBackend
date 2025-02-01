const breakfast=require('../Models/Breakfast.model');
const addBreakfast=async(req,res)=>{
    try{
        const breakfastMenu=await breakfast.create(req.body)
        res.status(201).json("Menu item added")
    }catch(error){
        res.status(500).send({message:error.message});
    }
}
const getBreakfast=async (req,res) => {
    try{
        const breakfastMenu=await breakfast.find()
        res.status(200).json(breakfastMenu)
    }catch(error){
        res.status(500).send({message:error.message});
    }
}
exports.addBreakfast=addBreakfast;
exports.getBreakfast=getBreakfast;