import { User } from "@interfaces/models/user";
import UserModel from "@models/user";

import RoleService from "@service/role";

class UserService {
  async createOne(userConfig: User) {
    const user = new UserModel(userConfig);

    const standartRole = await RoleService.findLowPriorityRole();

    user.role = standartRole?._id;

    await user.validate();
    return user.save();
  }
  async getOne(name: string) {
    const user = await UserModel.findOne({ name });

    if (!user) throw new Error("User is not exist");
    return user;
  }
  async updateOne(name: string, userParams: User) {
    await UserModel.updateOne({ name }, userParams);
  }
}

export default new UserService();
