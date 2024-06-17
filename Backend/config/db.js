import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://ayush123:ayush123@cluster0.0qfkn2u.mongodb.net/Food-Del').then(()=>{
        console.log("DB connected");
    })
}