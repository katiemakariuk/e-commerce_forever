import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/clodinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';

// App Config

const app = express()
const port = process.env.PORT || 4000
connectDB()
connectCloudinary()

//Middlewares

app.use(express.json())
app.use(cors())

//API endpoints
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)

app.get('/', (req, res)=>{
    res.send("API working")
})

app.listen(port, ()=>{
    console.log("Server is listening on the port " + port)
})