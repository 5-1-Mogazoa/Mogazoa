import { ReactNode } from "react";
import * as S from "./styled";

export type Variant = "filled" | "ghost_blue" | "ghost_pink" | "ghost_gray" | "ghost_black";
export type ButtonType =
  | "auth"
  | "modal"
  | "compare"
  | "follow"
  | "review"
  | "product_compare"
  | "product_compare_edit";

interface ButtonProps {
  variant: Variant;
  buttonType: ButtonType;
  children: ReactNode;
}

function Button({ variant, buttonType, children, ...props }: ButtonProps) {
  return (
    <S.Button $variant={variant} $buttonType={buttonType}>
      {children}
    </S.Button>
  );
}

export default Button;
