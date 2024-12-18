import express from 'express';
import dotenv from "dotenv"
import databaseConnected from './config/database.js';
import path from 'path'
import productRouter from "./routes/products.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000

const __dirname = path.resolve();

app.use(express.json());// allow us to accepts JSON Data in the req body

app.use("/api/products", productRouter)

if(process.env.NODE_ENV !== 'production') {
    app.use(express.static(path.join(__dirname, "/Frontend/dist")));
}
app.listen(PORT, () => {
    databaseConnected();
    console.log(`Server listening on Port ${PORT}`);
});


