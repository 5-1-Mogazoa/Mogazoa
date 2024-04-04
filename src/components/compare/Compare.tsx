import Gnb from "../gnb/gnb";
import styled from "styled-components";
import * as S from "./Styled/StyledTable";
import CompareResultTable from "./CompareResultTable";
import Description from "./Description";
import { useState } from "react";

type CompareTableProps = {
  productAData: any;
  productBData: any;
};
//비교하기 테이블 만들기
export function CompareTable({ productAData, productBData }: CompareTableProps) {
  const [resultCount, setResultCount] = useState(0);
  const [finalWinner, setFinalWinner] = useState("");

  const handleResultCount = (value: number) => setResultCount(value);
  const handleFinalWinner = (value: string) => setFinalWinner(value);

  return (
    <>
      <S.ResultContainer>
        <Description resultCount={resultCount} finalWinner={finalWinner} />

        <S.ResultDes>3가지 항목 중 {resultCount} 가지 항목에 우세합니다.</S.ResultDes>
      </S.ResultContainer>
      <S.Table>
        <thead>
          <tr>
            <S.Tableline>기준</S.Tableline>
            <S.Tableline>상품1</S.Tableline>
            <S.Tableline>상품2</S.Tableline>
            <S.Tableline>결과</S.Tableline>
          </tr>
        </thead>
        <CompareResultTable
          handleResultCount={handleResultCount}
          handleFinalWinner={handleFinalWinner}
          productAData={productAData}
          productBData={productBData}
        />
      </S.Table>
    </>
  );
}
