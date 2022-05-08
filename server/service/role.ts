import RoleModel from "@models/role";

class RoleService {
  async findLowPriorityRole() {
    const lowPriorityRole = RoleModel.findOne({ status: 1 });
    if (!lowPriorityRole) throw new Error("Low priority role not found");
    return lowPriorityRole;
  }
}

export default new RoleService();
