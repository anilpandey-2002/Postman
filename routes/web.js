import express from "express";

const router = express.Router();
import { studentController } from "../controllers/studentController.js";

router.get("/", studentController.getAllDoc);
router.get("/:id", studentController.getSingleDocById);
router.post("/", studentController.createDoc);
router.put("/:id", studentController.updateDocById);
router.delete("/:id", studentController.deleteDocById);

// module.exports=router;
export default router;
