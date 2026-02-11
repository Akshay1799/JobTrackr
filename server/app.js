import express from 'express';
import { errorHandler } from './src/middlewares/error.middleware.js';
import authRoutes from './src/routes/auth.routes.js';
import jobRoutes from './src/routes/job.routes.js'

export const app = express();

app.use(express.json());

app.get('/health', (req, res)=>{
    res.status(200).json({message:'ok'})
})

app.use('/api/auth', authRoutes)
app.use('/api/jobs', jobRoutes)

app.use(errorHandler)

 