import { Router } from "express";
import ContentsController from "@controllers/contents";

const router = Router();

router.get("/contents", ContentsController.getAll);
router.post("/contents", ContentsController.createOne);
router.patch("/contents/:name", ContentsController.patchOne);

export default router;
