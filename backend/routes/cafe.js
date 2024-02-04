import express from 'express';
import Cafe from '../models/cafeModel';
// import { 
//     getCafes, 
//     getCafe, 
//     createCafe, 
//     deleteCafe, 
//     updateCafe } from '../controllers/cafeController.js';

const router = express.Router()

//Get all cafes
router.get("/", (req, res) => {
    res.json({msg: 'Get all cafes'})
})

//Get a single cafe
router.get("/:id", (req, res) => {
    res.json({msg: 'Get single cafe info'})
})

// router.post('/', (req, res) => {
//     res.json({ msg: 'Post a new cafe info' })
// })

//Post a new cafe
router.post("/", async(req, res) => {
  const { Cafe_name, Cafe_email, Cafe_add , Cafe_phone } = req.body

      try {
        const cafe = await Cafe.create({ Cafe_name, Cafe_email, Cafe_add, Cafe_phone })
        res.status(200).json(cafe) 
    } catch(error) {
      res.status(400).json({error: error.message}) 
    }
})

//Delete a cafe 
router.delete("/:id", (req, res) => {
    res.json({msg: 'Delete cafe info'})
})

//Patch/Update cafe detail
router.patch("/:id", (req, res) => {
    res.json({msg: 'Update cafe info'})
})


export default router;

