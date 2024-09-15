import { studentModel } from "../models/student.js";

class studentController {
  static createDoc = async (req, res) => {
    try {
      // method1
      // const { name, age, fees } = req.body;
      // const doc = new studentModel({
      //   name,
      //   age,
      //   fees,
      // });
      // or you can directly use
      const doc = new studentModel(req.body); //method2
      const result = await doc.save();
      res.status(201).send(result);
    } catch (e) {
      console.log(e);
    }
  };

  static getAllDoc = async (req, res) => {
    try {
      const result = await studentModel.find();
      res.send(result);
    } catch (e) {
      console.log(e);
    }
  };
  static getSingleDocById = async (req, res) => {
    try {
      const result = await studentModel.findById(req.params.id);
      res.send(result);
    } catch (e) {
      console.log(e);
    }
  };
  static updateDocById = async (req, res) => {
    try {
      const result = await studentModel.findByIdAndUpdate(
        req.params.id,
        req.body
      );
      res.send(result);
    } catch (e) {
      console.log(e);
    }
  };
  static deleteDocById = async (req, res) => {
    try {
      const result = await studentModel.findByIdAndDelete(req.params.id);
      res.status(204).send(result);
    } catch (e) {
      console.log(e);
    }
  };
}
export { studentController };
