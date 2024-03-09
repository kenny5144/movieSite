import express from "express";
import dotenv from 'dotenv'
import mongoose from "mongoose";
import cors from 'cors'
dotenv.config()
import {UserRouter} from './routes/user.js'
const uri='mongodb+srv://ojok761:Iamkehindeojo123@gamesite.jmpbm1v.mongodb.net'
const app = express()
app.use(express.json())
app.use(cors())
app.use('/auth', UserRouter)
mongoose.connect(`${uri}/authentication`)
app.listen(process.env.PORT, ()=>{
    console.log("server is running k ")
}
)