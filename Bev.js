const Beverage=require('../Models/Bev')
const addBev=async(req,res)=>{
    try{
        const addBevNew=await Beverage.create(req.body)
        res.status(201).json({message:"Bev Added Successfully"})
    }
    catch(error){
        res.status(500).json({message:error.message})
    }
}
const getBev=async(req,res)=>{
    try{
        const allBev=await Beverage.find();
        res.status(200).json(allBev)
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

exports.addBev=addBev;
exports.getBev=getBev;  