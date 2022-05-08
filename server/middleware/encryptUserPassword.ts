import { SHA256 } from "crypto-js";
import { Request, Response, NextFunction } from "express";

function encryptUserPassword(req: Request, res: Response, next: NextFunction) {
  const { password } = req.body;

  try {
    if (!password) return next();

    req.body.password = SHA256(password).toString();
    next();
  } catch (err) {
    res.status(500).json([]);
  }
}

export default encryptUserPassword;
