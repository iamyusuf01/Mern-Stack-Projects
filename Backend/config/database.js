import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

 const databaseConnected = () => {
    mongoose.connect(process.env.MONGODB_URL , {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Database connected successfully'))
    .catch((error) => {
        console.error('Database connection error:')
        console.error(error);
        process.exit(1);
    });
}

export default databaseConnected;