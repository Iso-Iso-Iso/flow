import { Request, Response, NextFunction } from "express";
import UserService from "@service/user";

async function isUserExist(req: Request, res: Response, next: NextFunction) {
  const { name } = req.body;
  try {
    const user = await UserService.getOne(name);
    if (user) req.isUserExist = true;
  } catch (err) {
    req.isUserExist = false;
  } finally {
    next();
  }
}

export default isUserExist;
