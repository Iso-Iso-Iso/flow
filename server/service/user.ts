import { User } from "@interfaces/models/user";
import UserModel from "@models/user";
import RoleModel from "@models/role";
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
  async updateOne() {}
}

export default new UserService();
