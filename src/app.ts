import express,{Application} from 'express';
import path from 'path';

const app: Application=express();

app.use(express.static(path.join(__dirname,"../public")));
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

import homeRoute from './routes/home';
import aboutRoute from './routes/about';
import problemsRoute from './routes/problems';
import solutionsRoute from './routes/solutions';

app.use("/",homeRoute);
app.use("/about",aboutRoute);
app.use("/problems",problemsRoute);
app.use("/solutions",solutionsRoute);

export default app;