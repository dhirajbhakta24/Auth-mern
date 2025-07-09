import dotenv from "dotenv"

dotenv.config();

export const PORT = process.env.PORT || 4000;
export const MONGO_DB_ATLAS = process.env.MONGO_DB_ATLAS;
export const JWT_SECRET = process.env.JWT_SECRET;
export const NODE_ENV =process.env.NODE_ENV;
