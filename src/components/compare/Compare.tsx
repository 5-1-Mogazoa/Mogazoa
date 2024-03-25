import Gnb from "../gnb/gnb";
import styled from "styled-components";
import {
  ResultContainer,
  ResultWinner,
  ResultProduct,
  ResultDes,
  Table,
  TableWhite,
  Tableline,
  Win1,
  Win2,
} from "./Styled/StyledTable";
import { useEffect, useState } from "react";
import CompareResultTable from "./CompareResultTable";
import Description from "./Description";

type CompareTableProps = {
  productAData: any;
  productBData: any;
};

//비교하기 테이블 만들기
export function CompareTable({ productAData, productBData }: CompareTableProps) {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const handleSetA = () => setA((prev) => prev + 1);
  const handleSetB = () => setB((prev) => prev + 1);
  return (
    //A데이AData, productBData비교 기능 구현
    <>
      <ResultContainer>
        {/* <ResultWinner>
          <ResultProduct>이긴상품</ResultProduct> 상품이 승리하였습니다
        </ResultWinner> */}
        {/* <Description productAData={productAData} productBData={productBData} a={a} b={b} /> */}

        <ResultDes>3가지 항목 중 {/** */}가지 항목에서 우세합니다.</ResultDes>
      </ResultContainer>
      <Table>
        <thead>
          <tr>
            <Tableline>기준</Tableline>
            <Tableline>상품1</Tableline>
            <Tableline>상품2</Tableline>
            <Tableline>결과</Tableline>
          </tr>
        </thead>
        <CompareResultTable
          // handleSetA={handleSetA}
          // handleSetB={handleSetB}
          setA={setA}
          setB={setB}
          productAData={productAData}
          productBData={productBData}
        />
      </Table>
    </>
  );
}
