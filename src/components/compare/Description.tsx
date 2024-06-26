import * as S from "./Styled/StyledTable";
type DescriptionProps = {
  resultCount: number;
  finalWinner: string;
};

export default function Description({ resultCount, finalWinner }: DescriptionProps) {
  return resultCount === 0 ? (
    <S.ResultWinner>무승부입니다.</S.ResultWinner>
  ) : (
    <S.ResultWinner>
      <S.FinalResult>{finalWinner}</S.FinalResult> 상품이 승리하였습니다
    </S.ResultWinner>
  );
}
