import express from 'express';
import dotenv from "dotenv"
import databaseConnected from './config/database.js';

import productRouter from "./routes/products.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000

app.use(express.json());// allow us to accepts JSON Data in the req body

app.use("/api/products", productRouter)

app.listen(PORT, () => {
    databaseConnected();
    console.log(`Server listening on Port ${PORT}`);
});


