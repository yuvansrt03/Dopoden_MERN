import express, { Router } from 'express'
import { createPost, getPosts ,patchPost} from '../Controller/post.js'
const app=express()
const postrouter=Router()
postrouter.get('/posts',getPosts)
postrouter.patch('/posts/:id',patchPost);
export default postrouter