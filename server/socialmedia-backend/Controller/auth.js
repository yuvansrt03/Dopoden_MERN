import express from 'express'
const app=express()
import User from '../Models/UserModel.js'
import jwt from 'jsonwebtoken'
export const createUser=async(req,res)=>{
    try {
        const {name,mail,password,dob} = req.body
        const fileoriginal=req.file.originalname
        const body={"name":name,"mail":mail,"password":password,"dob":dob,"userImagepath":fileoriginal}
        const user=await User.create(body)
        res.status(200).send(user)
    } catch (error) {
        res.status(400).send({message:error.message})
    }
}
export const getUsers=async(req,res)=>{
    try {
        const users=await User.find()
        res.status(200).send(users)
    } catch (error) {
        res.status(400).send({error:error.message})
    }
}
export const loginUser=async(req,res)=>{
    try {
        console.log(req.body)
        const user = await User.findOne({name:req.body.name})
        if(user.name===req.body.name && user.password===req.body.password){
            const accesstoken=jwt.sign({id:user._id},process.env.SECRET_STRING)
            res.status(200).json({
                user,
                accesstoken,
            })
        }
        else{
            res.status(400).json({status:'error',message:'else error'})
        }
    } catch (error) {
        console.log("hey")
        res.status(404).json({status:'error',message:error.message})
    }
}
