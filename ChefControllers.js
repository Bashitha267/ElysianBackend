const e=require('express')
const Chef=require('../Models/cheif.model');
const Gallery = require('../Models/gallery.model');


const addChef=async(req,res)=>{
    try{
    const chef=await Chef.create(req.body);
    res.status(201).json(chef)
    
    }catch(err){
        res.status(500).send({message:err.message});
    }
    }
    

const getChef=async(req,res)=>{
    try{
        const chefs=await Chef.find();
        res.status(200).json(chefs);


    }catch(error){
        res.status(500).send({message:error.message});
    }

}


const getphtos=async(req,res)=>{
    try{
        const photos=await Gallery.find();
        res.status(200).json(photos);}
    catch(error){
        res.status(500).send({message:error.message});
    }



}
const addPhotos=async(req,res)=>{
    try{
    const photos=await Gallery.create(req.body);
    res.status(201).send("photos added successfully");

    }
    catch(error){
        res.status(500).send({message:error.message});
    }
}

exports.addPhotos=addPhotos;
exports.getphotos=getphtos;










    exports.addChef=addChef;
    exports.getChef=getChef;