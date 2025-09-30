import express from 'express';
import {Request,Response} from 'express';

const router = express.Router();

router.get("/",(req: Request,res: Response) =>{
res.render("home",{

title:"Home | Break The Cycle",

description:"Youth-led initiative tackling cyber addiction, plagiarism, and underperformance.",

active:",home"});

});

export default router;