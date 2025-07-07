import mongoose from 'mongoose'
import {MONGO_DB_ATLAS} from './server.config.js'

async function connectToDB(){
    try {
        mongoose.connection.on('connected',()=>console.log("Database Connected"));
        await mongoose.connect(`${MONGO_DB_ATLAS}/Auth-mern`);
    } catch (error) {
        console.log("unable to connect to the DB server");
        console.log(error);
    }
}
export default connectToDB;