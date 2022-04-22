import { ComponentType } from "react";

export interface PropsWithChildren {
  children: ComponentType | string;
}

export interface PropsWithClassName {
  className?: string;
}
