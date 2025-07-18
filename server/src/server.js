import express from "express"
import cors from "cors"
import 'dotenv/config'
import cookieParser from "cookie-parser";
import connectToDB from './config/db.config.js'
import {PORT} from './config/server.config.js'
import authRouter from "./routes/authRoutes.js";


const app = express();


app.use(express.json());
app.use(cookieParser());
app.use(cors({credentials:true}))

//API ENDPOINTS
app.get('/',(req,res)=>{
    res.send("API Working");
})

app.use('/api/auth',authRouter)

app.listen(PORT, async ()=>{
    console.log(`Server started on PORT : ${PORT}`);
    

    await connectToDB();
});