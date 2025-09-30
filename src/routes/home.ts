import express from 'express';
import {Request,Response} from 'express';

const router = express.Router();

router.set("view engine","ejs");

router.get("/",(req: Request,res: Response) =>{
res.render("home");
});