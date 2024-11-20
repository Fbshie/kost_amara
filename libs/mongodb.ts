import mongoose from "mongoose"


const connectMongoDB = async () => {
    try {
        const dbUrl = process.env.MONGODB_URL;
        if (!dbUrl) {
            throw new Error("MONGODB_URL is not set in environment variables.");
        }
        await mongoose.connect(dbUrl);
        console.log("Connected to MongoDB.");
    } catch (error) {
        console.error(error);
    }
    
};

export default connectMongoDB;