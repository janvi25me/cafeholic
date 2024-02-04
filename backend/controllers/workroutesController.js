import Workroute from '../models/workrouteModel.js'
import mongoose from 'mongoose'

//GET all workouts
export const getWorkroutes = async (req, res) => {
    const workroutes = await Workroute.find({}).sort({craetedAt: -1})
    console.log(workroutes)
    res.status(200).json(workroutes)
}

// get a single workroute
 export const getWorkroute = async(req, res) => {
    const { id } = req.params
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({error: 'No such workroute'}) 
    }

    const workroute = await Workroute.findById(id)

    if(!workroute) {
        return res.status(404).json({error: 'No such workout'})
    }

    res.status(200).json(workroute)
}

// create new workout
export const createWorkout = async (req, res) => {
    const {name, email, phone, password} = req.body

    //add doc to db
    try {
      const workroute = await Workroute.create({name, email, phone, password})
      res.status(200).json(workroute)
    } catch (error) {
       res.status(400).json({error: error.message}) 
    }
}

// delete 

export const deleteWorkroute = async (req, res) => {
  const { id } = req.params
    
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such workroute'}) 
  }

  const workroute = await Workroute.findOneAndDelete({_id: id})

  if(!workroute) {
    return res.status(400).json({error: 'No such workroute'})
  }

  res.status(200).json(workroute)
}

// update

export const updateWorkroute = async (req, res) => {
  const { id } = req.params
    
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such workroute'}) 
  }

  const workroute = await Workroute.findOneAndUpdate({_id:  id}, {
    ...req.body
  })

  if(!workroute) {
    return res.status(400).json({error: 'No such workroute'})
  }
  
  res.status(200).json(workroute)
} 

