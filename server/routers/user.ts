import { Router } from "express";
import UserController from "@controllers/user";

import isUserExist from "@middleware/isUserExist";
import isUserLogined from "@middleware/isUserLogined";
import encryptUserPassword from "@middleware/encryptUserPassword";
import validateFieldLength from "@middleware/validateFieldLength";

const router = Router();

router.post(
  "/user",
  [
    isUserExist,
    isUserLogined,
    validateFieldLength("password", 8),
    encryptUserPassword,
  ],
  UserController.createOne
);
router.get("/user/:name", UserController.getOne);
router.put(
  "/user/:name",
  [validateFieldLength("password", 8), encryptUserPassword],
  UserController.updateOne
);

export default router;
