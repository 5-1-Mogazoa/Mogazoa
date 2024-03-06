import { ReactNode } from "react";
import * as S from "./styled";

type ReviewListProps = { children: ReactNode };

function ReviewList({ children }: ReviewListProps) {
  return (
    <S.Container>
      상품 리뷰<S.List>{children}</S.List>
    </S.Container>
  );
}

export default ReviewList;
