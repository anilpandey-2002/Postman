import mongoose from "mongoose";
// Defining a schema
const studentSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  age: { type: Number, required: true },
  fees: {
    type: mongoose.Decimal128,
    required: true,
    validate: (value) => {
      value >= 5500.5;
    },
  },
});

// Creating a model based on the schema
const studentModel = mongoose.model("item", studentSchema);
export { studentModel };
