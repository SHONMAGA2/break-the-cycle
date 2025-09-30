import app from './app.ts';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 6500;

app.listen(PORT =>{
console.log(`Server running on http://localhost:${PORT}`);
});