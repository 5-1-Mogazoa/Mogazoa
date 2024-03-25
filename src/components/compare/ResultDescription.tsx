import * as S from "./Styled/StyledTable";
export def function CompareDescription() {
  return (
    <S.ResultContainer>
      <S.ResultWinner>
        <S.ResultProduct>이긴상품</S.ResultProduct> 상품이 승리하였습니다
      </S.ResultWinner>
      <S.ResultDes>3가지 항목 중 {이긴갯수} 가지 항목에서 우세합니다.</S.ResultDes>
    </S.ResultContainer>
  );
}
