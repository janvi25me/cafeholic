import express from 'express';
import Cafe from '../models/cafeModel';
// import { 
//     getCafes, 
//     getCafe, 
//     } from '../controllers/cafeController.js';
    // updateCafe
    // createCafe, 
    // deleteCafe, 


const router = express.Router()

// Get all cafes
router.get("/", getCafes)

// // Get a single cafe
router.get("/id", getCafe)

router.post("/", (req, res) => {
    res.json({ msg: 'Post a new cafe info' })
})

// // Post a new cafe
// router.post("/id:", async(req, res) => {
//   const { Cafe_name, Cafe_email, Cafe_add, Cafe_phone } 
//       = req.body

//       try {
//         const cafe = await Cafe.create({Cafe_name, Cafe_email, Cafe_add, Cafe_phone})
//         res.status(200).json(cafe) 
//     } catch(error) {
//       res.status(400).json({error: error.message}) 
//     }
// })

// // Delete a cafe 
// router.delete("/id:", (req, res) => {
//     res.json({msg: 'Delete cafe info'})
// })

// // Patch/Update cafe detail
// router.patch("/id:", (req, res) => {
//     res.json({msg: 'Update cafe info'})
// })


 export default router;

