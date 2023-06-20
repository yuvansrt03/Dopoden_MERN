import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import authrouter from './socialmedia-backend/Routes/auth.js'
import dotenv from 'dotenv'
import postrouter from './socialmedia-backend/Routes/post.js'
import bodyParser from 'body-parser'
import path from 'path'
import multer from 'multer'
import helmet from 'helmet'
import morgan from 'morgan'
import fs from 'fs'
import {fileURLToPath} from 'url'
import { createUser } from './socialmedia-backend/Controller/auth.js'
import { createPost } from './socialmedia-backend/Controller/post.js'

const __filename=fileURLToPath(import.meta.url)
const __dirname=path.dirname(__filename)
dotenv.config();
console.log("haf")
const router = express.Router();
const app=express()
app.use(cors())
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}))
app.use(morgan("common"))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(process.env.CONNECTION_STRING,{
  useNewUrlParser:true,
  useUnifiedTopology:true,
})

app.get('/',(req,res)=>{
  const body=req.body
  res.send("hey")
})
app.use('/auth',authrouter)
app.use('/',postrouter)
// app.use(bodyParser.json({ limit: '50mb' }));

// app.use(bodyParser.urlencoded({
//    limit: '50mb',
//    extended: true,
//    parameterLimit: 50000
// }));

const storage = multer.diskStorage({
  destination: `${__dirname}/assets`,
  filename: (req, file, cb) => {
    console.log(req.body)
    cb(null,file.originalname);
  },
});
const upload=multer({storage})
app.use("/assets",express.static(path.join(__dirname,'/assets')))

// app.get('/assets/:imageName', (req, res) => {
//   const imageName = req.params.imageName
//   const readStream = fs.createReadStream(`images/${imageName}`)
//   readStream.pipe(res)
// })

app.post("/auth/register",upload.single('image'),createUser)
app.post("/posts",upload.single('image'),createPost)
const PORT=5000||5001

app.listen(PORT,()=>{
  console.log(`server is listening on ${PORT}`)
})