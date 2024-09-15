import express from "express";
import router from "./routes/web.js";
import { connectdb } from "./db/connectdb.js";
import { studentModel } from "./models/student.js";

const app = express();
const port = process.env.PORT || 3000;
const DATABASE_URL =
  process.env.DATABASE_URL || "mongodb://localhost:27017/school";

// Database connection
connectdb(DATABASE_URL);

// middleware to get data in josn from createDoc
app.use(express.json());
// Routes
app.use("/student", router);

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
