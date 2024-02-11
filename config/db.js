import mongoose from "mongoose";
const uri = process.env.DB_URL;
console.log(uri);

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(uri);
        console.log(`Connected to MongoDB Successfully ${conn.connection.host} `.bgGreen.green);
    }
    catch (err) {
        console.log(`Error connecting to MongoDB`.bgWhite.red);
    }
}

export default connectDB;
