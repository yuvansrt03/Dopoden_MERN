import express, { Router } from 'express'
import { getUsers,loginUser } from '../Controller/auth.js'
const app=express()
const authrouter=Router()

authrouter.post('/login',loginUser)
authrouter.get('/users',getUsers)

export default authrouter