import { ComponentType, ReactNode } from "react";

export interface PropsWithChildren<T = ComponentType | string | ReactNode> {
  children: T;
}

export interface PropsWithClassName {
  className?: string;
}

export interface PropsLink {
  to: string;
  children: ReactNode;
  active?: boolean;
}
