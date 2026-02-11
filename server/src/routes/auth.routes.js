// auth.routes.js

import express from 'express';
import { login, me, signup } from '../controllers/auth.controller.js';
import { protect } from '../middlewares/auth.middleware.js';

const route = express.Router();

route.post('/signup', signup)
route.post('/login', login)
route.get('/me', protect, me)

export default route;