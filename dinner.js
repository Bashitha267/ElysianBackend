const Dinner=require('../Models/Dinner')
const addDinner=async(req,res)=>{
    try{
        const dinner= await Dinner.create(req.body);
        res.status(201).json({message:"Dinner added successfully"})
    }
    catch(error){
        res.status(500).send({message:error.message})
    }

}

const getDinner=async(req,res)=>{
    try{
        const dinner= await Dinner.find();
        res.status(200).json(dinner)
    }
    catch(error){
        res.status(500).send({message:error.message})
    }
}

exports.addDinner=addDinner;
exports.getDinner=getDinner;