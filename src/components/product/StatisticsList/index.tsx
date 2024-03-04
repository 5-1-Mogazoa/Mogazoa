import { ReactNode } from "react";
import * as S from "./styled";

type StatisticsListProps = { children: ReactNode };

function StatisticsList({ children }: StatisticsListProps) {
  return (
    <S.Container>
      상품 통계<S.List>{children}</S.List>
    </S.Container>
  );
}

export default StatisticsList;
