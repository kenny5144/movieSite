import express from 'express'
import bcryt from 'bcrypt'
import mongoose from 'mongoose'
import {User} from '../models/User.js'
const router = express.Router()

router.post('/Signup',async (req,res)=>{
    const {UserName , Email , Password }=req.body
   const user= User.find({Email})
   if (user ){
    return res.json({message:"user already existed"})
   }
   const hashpassword = await bcryt.hash(Password, 10)
   const newUser = new User({
    UserName,
    Email,
    Password: hashpassword,
   })
   await newUser.save()
   return res.json({message:"record Registerd"})
})
export{router as UserRouter}