import express from 'express'
import User from '../Models/UserModel.js'
import Post from '../Models/PostModel.js'
import jwt from 'jsonwebtoken'
const app=express()

export const createPost=async(req,res)=>{
    try {
        const body={
            "postOwnerId":req.body.postOwnerId,
            "postOwnername":req.body.postOwnername,
            "postDescription":req.body.postDescription,
            "postImagePath":req.file.originalname,
            "userImagePath":req.body.userImagePath,
        }
        const post=await Post.create(body)
        res.status(200).send(post)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}
export const getPosts=async(req,res)=>{
    try {
        const posts=await Post.find()
        res.status(200).json(posts)
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

export const patchPost=async(req,res)=>{
    try {
        const id=req.params.id;
        const post=await Post.findById(id);
        const userId=post.postOwnerId;
        const IsLiked=post.likes.get(userId);
        if(IsLiked){
            post.likes.delete(userId)
        }
        else{
            post.likes.set(userId,true)
        }
        const updatedPost=await Post.findByIdAndUpdate(id,{likes:post.likes})
        res.status(200).json(post);
    } catch (error) {
        res.status(400).json("jaja")
    }
}