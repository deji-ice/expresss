import express from 'express'
import db from "../db/conn.js"

const postRoutes = express.Router()

postRoutes.get('/', async (req, res)=>{
    let collection  = await db.collection('posts')
    let results = await collection.find({}).limit(20).toArray()
    res.send(results).status(200)
})

export default postRoutes