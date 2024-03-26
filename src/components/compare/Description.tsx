import * as S from "./Styled/StyledTable";
type DescriptionProps = {
  a: number;
  b: number;
  productAData: any;
  productBData: any;
};

export default function Description({ productAData, productBData }: DescriptionProps) {
  if (a > b) {
    return (
      <S.ResultWinner>
        <S.ResultProduct>{productAData?.productName}</S.ResultProduct> 상품이 승리하였습니다
      </S.ResultWinner>
    );
  } else if (a < b) {
    return (
      <S.ResultWinner>
        <S.ResultProduct>{productBData.productName}</S.ResultProduct> 상품이 승리하였습니다
      </S.ResultWinner>
    );
  } else {
    return <S.ResultWinner>무승부입니다.</S.ResultWinner>;
  }
}
