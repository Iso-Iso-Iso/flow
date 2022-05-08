import { Request, Response } from "express";

import UserService from "@service/user";

class UserController {
  async createOne(req: Request, res: Response) {
    if (req.isUserExist || req.isUserLogined) return res.status(500).json({});
    const userConfig = req.body;

    try {
      const user = await UserService.createOne(userConfig);
      res.json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  }
  async getOne(req: Request, res: Response) {}
  async updateOne(req: Request, res: Response) {}
}

export default new UserController();
