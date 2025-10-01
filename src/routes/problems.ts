import express from 'express';
import {Request,Response} from 'express';

const router = express.Router();

router.get("/",(req: Request,res: Response) =>{
res.render("problems",{

title:"Problems | Break The Cycle",

description:"Discover the main problems students face today, including cyber addiction, plagiarism, and academic underperformance, and why addressing them is vital.",

active:"problems"});

});

export default router;