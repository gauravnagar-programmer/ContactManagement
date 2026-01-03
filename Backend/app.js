import express from "express";
import "dotenv/config"
import "./config/dbStart.js"
import Contact from "./Routes/Route.js"
import cors from "cors"

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors())
app.use(express.json());
app.use('/contact',Contact)


// Start server

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
