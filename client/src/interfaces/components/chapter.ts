import { PropsWithChildren } from "@interfaces/components/index";
import { ReactNode } from "react";

export interface ChapterProps extends PropsWithChildren<ReactNode> {
  title: string;
}
