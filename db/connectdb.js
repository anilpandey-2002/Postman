import mongoose from "mongoose";

const connectdb = async (DATABASE_URL) => {
  try {
    const DB_OPTIONS = {
      dbName: "school",
    };
    await mongoose.connect(DATABASE_URL, DB_OPTIONS);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Could not connect to MongoDB:", err);
  }
};
export { connectdb };
