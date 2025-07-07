import dotenv from "dotenv"

dotenv.config();

export const PORT = process.env.PORT || 4000;
export const MONGO_DB_ATLAS = process.env.MONGO_DB_ATLAS;
