import { PropsWithChildren } from "@interfaces/components/index";

export interface ChapterItemProps extends PropsWithChildren<string> {
  to: string;
}
