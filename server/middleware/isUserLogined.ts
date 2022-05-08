import { Request, Response, NextFunction } from "express";

function isUserLogined(req: Request, res: Response, next: NextFunction) {
  if (req.session.userId) req.isUserLogined = true;
  next();
}

export default isUserLogined;
