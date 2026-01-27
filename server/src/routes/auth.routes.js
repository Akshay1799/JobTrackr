// auth.routes.js

import express from 'express';
import { login, me, register } from '../controllers/auth.controller.js';
import { protect } from '../middlewares/auth.middleware.js';

const route = express.Router();

route.post('/register', register)
route.post('/login', login)
route.get('/me', protect, me)

export default route;