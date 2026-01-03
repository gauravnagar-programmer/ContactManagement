import mongoose from "mongoose";

const DB_URL = process.env.MONGO_URL

mongoose.connect(DB_URL)
.then(() => console.log('server is connected successfully'))
.catch((error) =>console.log("error : " , error.message)) 