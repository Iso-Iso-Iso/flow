import { ChangeEventHandler } from "react";

export interface InputProps<T = HTMLInputElement> {
  value?: string;
  onChange: ChangeEventHandler<T>;
  className?: string;
  placeholder?: string;
  error?: boolean;
  type?: string;
}
