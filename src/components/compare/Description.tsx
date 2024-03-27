import * as S from "./Styled/StyledTable";
type DescriptionProps = {
  resultCount: number;
  finalWinner: string;
};

export default function Description({ resultCount, finalWinner }: DescriptionProps) {
  console.log(resultCount, finalWinner);

  return resultCount === 0 ? (
    <S.ResultWinner>무승부입니다.</S.ResultWinner>
  ) : (
    <S.ResultWinner>
      <S.ResultProduct1>{finalWinner}</S.ResultProduct1> 상품이 승리하였습니다
    </S.ResultWinner>
  );
}
