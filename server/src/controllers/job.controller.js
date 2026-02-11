// job.controller.js
import Job from "../models/job.model.js";
import { catchAsync } from "../utils/catchAsync.js";
import AppError from "../utils/AppError.js";

export const createJob = catchAsync(async(req, res, next)=>{
    const{title, company, status, workType, employementType, link, notes, dateApplied} = req.body;

    if(!title || !company){
        return next(new AppError("Fileds are missing", 400))
    }

    const job = await Job.create({
        user:req.user._id,
        title, 
        company,
        status,
        workType,
        employementType,
        link,
        notes,
        dateApplied
    });

    res.status(201).json({
        status:"Success",
        message:"Job created successfully!",
        job
    })
})