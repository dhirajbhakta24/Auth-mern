import express from "express"
import cors from "cors"
import 'dotenv/config'
import cookieParser from "cookie-parser";
import connectToDB from './config/db.config.js'
import {PORT} from './config/server.config.js'


const app = express();


app.use(express.json());
app.use(cookieParser());
app.use(cors({credentials:true}))

app.get('/',(req,res)=>{
    res.send("API Working");
})

app.listen(PORT, async ()=>{
    console.log(`Server started on PORT : ${PORT}`);
    

    await connectToDB();
  
    
});