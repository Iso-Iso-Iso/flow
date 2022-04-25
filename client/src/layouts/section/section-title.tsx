import React from "react";

import { PropsWithChildren } from "@interfaces/components/index";

const SecondaryTitle = ({ children }: PropsWithChildren) => (
  <h2 className="mb-medium">{children as string} </h2>
);

export default SecondaryTitle;
