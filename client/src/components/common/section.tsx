import React, { ReactNode } from "react";

import { PropsWithChildren } from "@interfaces/components/index";

function Section({ children }: PropsWithChildren<ReactNode>) {
  return <div className="mb-big">{children}</div>;
}

export default Section;
