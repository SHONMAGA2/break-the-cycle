import express from 'express';
import {Request,Response} from 'express';

const router = express.Router();

router.get("/",(req: Request,res: Response) =>{
res.render("solutions",{

title:"solutions | Break The Cycle",

description:"Learn about the solutions offered by 'Break the Cycle' — promoting healthy digital habits, academic integrity, and strategies to improve student performance.",

active:"solutions"});

});

export default router;