// job.model.js

import mongoose, { Schema } from "mongoose";

export const jobSchema = new mongoose.Schema({
    user:{type:Schema.Types.ObjectId, ref:'User', required:true, index:true},
    title:{type:String, required:true, trim:true},
    company:{type:String, required:true, trim:true},
    status: {type:String, enum:['Applied', 'Interview', 'Offer', 'Rejected'], default:'Applied'},
    dateApplied: {type:Date, default:Date.now},
    link:{type:String},
    notes:{type:String},
    workType:{type:String, enum:['Remote', 'Hybrid', 'Onsite']},
    employementType:{type:String, enum:['Full-time', 'Intern']},
},{timestamps:true})

const Job = mongoose.model("Job", jobSchema);
export default Job;