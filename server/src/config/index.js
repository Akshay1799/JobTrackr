import dotenv from "dotenv"
dotenv.config();

export const config = {
    port: process.env.PORT ||3000,
    nodeEnv: process.env.NODE_ENV,
    mongoUri: process.env.MONGO_URI,
    jwtSecret: process.env.JWT_SECRET_KEY,
    jwtExpiresIn: process.env.JWT_EXPIRES_IN
}