import { ReactNode } from "react";

export interface ButtonDto {
  children: ReactNode;
  className?: string;
  isLoading?: boolean;
  disabled?: boolean;
  type?: "button" | "reset" | "submit" | undefined;
  border?: "none" | "border-1" | "border-2" | "border-3" | "border-4";
  borderColor?: "Yellow" | "lowYellow" | "blue" | "lowBlue";
  color?: "Yellow" | "lowYellow" | "blue" | "lowBlue" | "white" | "black";
  background?: "Yellow" | "lowYellow" | "blue" | "lowBlue";
  hoverBackground?: "Yellow" | "lowYellow" | "blue" | "lowBlue";
  fontSize?: 10 | 15 | 20 | 25 | 30 | 35 | 40;
  onClick?: () => void;
  ref?: any;
  width?: string;
}
