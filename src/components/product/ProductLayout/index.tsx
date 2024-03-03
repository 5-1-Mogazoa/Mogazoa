import { ReactNode } from "react";
import * as S from "./styled";

type ProductLayoutProps = {
  children: ReactNode;
};

function ProductLayout({ children }: ProductLayoutProps) {
  return <S.Layout>{children}</S.Layout>;
}

export default ProductLayout;
