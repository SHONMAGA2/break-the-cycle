import express from 'express';
import {Request,Response} from 'express';

const router = express.Router();

router.get("/",(req: Request,res: Response) =>{
res.render("about",{

title:"About | Break The Cycle",

description:"Learn more about the 'Break the Cycle' initiative, its mission to empower youth, address cyber addiction, plagiarism, and underperformance, and the dedicated team driving this change.",

active:"about"});

});

export default router;