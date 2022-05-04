import express from "express";

import lessonsController from "@controllers/lessons";

const router = express.Router();

router.get("/lessons", lessonsController.paginate);
router.post("/lessons", lessonsController.createOne);
router.get("/lessons/:name", lessonsController.getOne);
router.put("/lessons/:name", lessonsController.updateOne);
router.delete("/lessons/:name", lessonsController.deleteOne);

export default router;
