const { request } = require("express");
const Lunch = require("../Models/Lunch")
const e=require('express')
const addlunch=async(req,res)=>{
    try{
        const lunch=await Lunch.create(req.body);
    res.status(201).json({message:"Lunch added successfully",lunch:lunch})

    }catch(error){
        res.status(500).send({message:error.message});

    }
}
const getlunch=async (req,res)=>{
  try{
    const response =await Lunch.find()
    res.status(200).json(response)
    }
    catch(error){
        res.status(500).send({message:error.message});

    }
  
}
exports.addLunch=addlunch; 
exports.getLunch=getlunch;