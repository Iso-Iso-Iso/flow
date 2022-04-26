import { PropsWithChildren } from "@interfaces/components/index";
import { ReactNode } from "react";

export interface ContentsProps extends PropsWithChildren<ReactNode> {
  title: string;
}

export interface ContentsItemProps extends PropsWithChildren<string> {
  to: string;
}
