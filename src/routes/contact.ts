import express from 'express';
import {Request,Response} from 'express';

const router = express.Router();

router.get("/",(req: Request,res: Response) =>{
res.render("contact",{

title:"Contact | Break The Cycle",

description:"Get in touch with the 'Break the Cycle' team. Reach out for collaborations, support, or to learn more about how you can help empower youth.",

active:"contact"});

});

export default router;