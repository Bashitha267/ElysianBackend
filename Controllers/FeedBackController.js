const Feedback=require("../Models/feedBack.model")
const addFeedback=async(req,res)=>{
    try{
        const feedback=await Feedback.create(req.body)
        res.status(201).json(feedback)
    }
    catch(e){res.status(500).send(e)}
}

const getFeed=async(req,res)=>{
    try{
        const feedback12=await Feedback.find()
        res.status(200).json(feedback12)
    }
    catch(e){
        res.status(500).json(e)
    }
}



exports.addFeedback=addFeedback;
exports.getFeed=getFeed; 