import { ReactNode } from "react";

export interface Props {
  children: string | ReactNode;
  primary?: boolean;
  rounded?: boolean;
  className?: string;
  huge?: boolean;
  disabled?: boolean;
}
