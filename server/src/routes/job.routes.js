// job.routes.js
import express from 'express';
import { protect } from "../middlewares/auth.middleware.js";
import { createJob } from '../controllers/job.controller.js';

const route = express.Router();

route.post('/',protect, createJob);

export default route;
