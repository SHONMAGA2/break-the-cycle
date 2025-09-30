import express,{Application} from 'express';
import path from 'path';

const app: Application=express();

app.use(express.static(path.join(__dirname,"../public")));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

import homeRoute from './route/home.ejs';

app.use("/home",homeRoute);

export default app;