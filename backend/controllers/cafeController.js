import mongoose from "mongoose";
import Cafe from '../models/cafeModel.js';

//Get all cafes
export const getCafes = async (req, res) => {
    const cafes = await Cafe.find({}).sort({createdAt: -1})
  
    res.status(200).json(cafes)
}

//Get a single cafe
export const getCafe = async(req, res) => {
    const { id } = req.params
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: 'No such cafe info'}) 
    }

    const cafe = await Cafe.findById(id)

    if(!cafe) {
        return res.status(404).json({error: 'No such cafe info'})
    }

    res.status(200).json(cafe)
}

//create a new cafe info
export const createCafe = async(req, res) => {
const { Cafe_name, Cafe_email, Cafe_add, Cafe_phone,
    Cafe_pincode, Cafe_image1, Cafe_image2, Cafe_image3,
      Open_time, Close_time, Capacity, Menu_image } 
      = req.body

      //add doc to db
      try{
       const cafe = await Cafe.create({Cafe_name, Cafe_email, 
           Cafe_add, Cafe_phone, Cafe_pincode, Cafe_image1, 
           Cafe_image2, Cafe_image3, Open_time, Close_time, 
           Capacity, Menu_image })
           res.status(200).json(cafe)
      } catch (error) {
          res.status(404).json({error: error.message})
       }
}

 //delete cafe info
 export const deleteCafe = async(req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such cafe info'}) 
      }
  
      const cafe = await Cafe.findOneAndDelete({_id: id})

      if(!cafe) {
        return res.status(404).json({error: 'No such cafe info'})
      }
    
      res.status(200).json(cafe)
 }   

 //update cafe info
 export const updateCafe = async(req, res) => {
    const { id } = req.params
        
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such cafe info'}) 
  }

  const cafe = await Cafe.findOneAndUpdate({_id:  id}, {
    ...req.body
  })

  if(!cafe) {
    return res.status(404).json({error: 'No such cafe info'})
  }
  
  res.status(200).json(cafe)
 }