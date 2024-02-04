import express from 'express'
import cors from 'cors'
import { 
    createWorkout,
    getWorkroutes,
    getWorkroute,
    deleteWorkroute,
    updateWorkroute
 } from '../controllers/workroutesController.js'

const router = express.Router()

//cors middleware
router.use(cors({
    origin: 'http://localhost:3000'
}))

//Get all routes
router.get('/', getWorkroutes)
// router.get('/', get)

//Get a single route
router.get('/:id', getWorkroute)

//Post a new workout
router.post('/', createWorkout )

//Delete a new route
router.delete('/delete/:id', deleteWorkroute)

//update a new route
router.patch('/:id', updateWorkroute)

export default router