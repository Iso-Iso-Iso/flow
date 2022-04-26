import { PropsWithChildren } from "@interfaces/components";
import { ReactNode } from "react";

export interface SectionProps extends PropsWithChildren<ReactNode> {
  title?: string;
}
