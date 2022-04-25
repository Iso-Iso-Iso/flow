import { PropsWithChildren } from "@interfaces/components/index";

export interface StubProps extends PropsWithChildren<string> {
  to: string;
}
