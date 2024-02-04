import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import WorkRoutes from './routes/workroute.js';
import Cafes from './routes/cafe.js';

dotenv.config();

//express app
const app = express()
const PORT = process.env.PORT || 3001

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
  origin: 'http://127.0.0.1:3000',
  methods: 'GET,PUT,PATCH,POST,DELETE',
  credentials: true,
}));

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
}) 

//routes
app.use('/api/work', WorkRoutes)
app.use('/api/cafe', Cafes)


//connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    //listen for requests
    app.listen(PORT, () => {
        console.log(`Connected to db & Server is listening on port ${PORT}`)
    })
})
  .catch((error) => {
    console.log("Error connecting to mongodb", error)
  })




