import { ResultContainer, ResultDes, Table, Tableline } from "./Styled/StyledTable";
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
    //A데이AData, productBData비교 기능 구현
    <>
      <ResultContainer>
        <Description resultCount={resultCount} finalWinner={finalWinner} />

        <ResultDes>3가지 항목 중 {resultCount} 가지 항목에 우세합니다.</ResultDes>
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
          handleResultCount={handleResultCount}
          handleFinalWinner={handleFinalWinner}
          productAData={productAData}
          productBData={productBData}
        />
      </Table>
    </>
  );
}
