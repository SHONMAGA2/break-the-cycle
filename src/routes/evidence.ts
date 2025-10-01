import express from 'express';
import {Request,Response} from 'express';

const router = express.Router();

router.get("/",(req: Request,res: Response) =>{
res.render("evidence",{

title:"Evidence | Break The Cycle",

description:"Explore the evidence behind the issues: statistics, student experiences, and real data that highlight the impact of cyber addiction, plagiarism, and underperformance.",

active:"evidence"});

});

export default router;