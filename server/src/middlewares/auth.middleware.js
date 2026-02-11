// auth.middleware.js

import jwt from 'jsonwebtoken';
import {config} from '../config/index.js';
import AppError from '../utils/AppError.js';
import { catchAsync } from '../utils/catchAsync.js';
import User from '../models/user.model.js';

export const protect = catchAsync(async(req, res, next)=>{
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        token = req.headers.authorization.split(' ')[1];
    }

    if(!token) return next(new AppError('Token is missing', 401));

    const decoded = jwt.verify(token, config.jwtSecret);

    const user = await User.findById(decoded.id);
    if(!user) return next(new AppError('User no longer exists', 401))

    req.user = user;

    next();
})