import React from "react";

import "./notation-item.scss";

import IconEye from "@icons/eye";
import IconEyeSlash from "@icons/eye-slash";
import IconTrash from "@icons/trash";

// TODO: remake when server logic will be fixed
// ! Icons have already imported
function NotationItem() {
  return (
    <div className="notation-item">
      <p className="notation-item__text">awdawdd</p> <IconEye /> <IconTrash />
    </div>
  );
}

export default NotationItem;
