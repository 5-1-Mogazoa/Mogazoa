import * as S from "./styled";

type RatingStarsProps = {
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
};

function RatingStars({ score, setScore }: RatingStarsProps) {
  const SCORE_ARRAY = [1, 2, 3, 4, 5];

  return (
    <S.Container>
      {SCORE_ARRAY.map((num, index) => (
        <S.Star key={index} $selected={num <= score ? true : false} onClick={() => setScore(num)} />
      ))}
    </S.Container>
  );
}

export default RatingStars;
