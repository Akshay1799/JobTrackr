// auth.controller.js

import { catchAsync } from "../utils/catchAsync.js";
import AppError from '../utils/AppError.js'
import User from "../models/user.model.js";
import { generateToken } from "../utils/generateToken.js";

export const register = catchAsync(async (req, res, next) => {
    const {name, email, password} = req.body;

    if (!name || !email || !password) {
        return next(new AppError('All fields are required', 400))
    }

    const existingUser = await User.findOne({email});
    if(existingUser){
        return next(new AppError('Email already exists!', 409))
    }

    const user = await User.create({name, email,password})

    res.status(200).json({
        status:'Success',
        user:{
            name: user.name,
            email: user.email
        }
    })
    
})


export const login = catchAsync(async (req, res, next) => {
    const {email, password} = req.body;

    if (!email || !password) {
        return next(new AppError('Fields are missing!', 400))
    }

    const user = await User.findOne({email});
    if(!user) return next(new AppError('User does not exists!', 400));

    const isMatch = await user.comparePassword(password);
    if(!isMatch) return next(new AppError('Invalid Credentials', 401))

    const token = generateToken(user._id);

    res.status(200).json({
        status:'User loged in successfully!',
        token,
        user:{
            id: user._id,
            email:user.email
        }
    })
})

export const me = catchAsync(async(req, res)=>{
    res.status(200).json({
        status:"Success",
        user: req.user
    })
})