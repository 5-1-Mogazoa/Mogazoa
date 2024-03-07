import * as S from "./styled";

type RatingStarsProps = {
  type: "modal" | "page";
  score: number;
  setScore?: React.Dispatch<React.SetStateAction<number>>;
};

function RatingStars({ type, score, setScore }: RatingStarsProps) {
  const SCORE_ARRAY = [1, 2, 3, 4, 5];

  const handleClick = (number: number) => {
    if (type === "modal" && setScore) {
      setScore(number);
    }
  };

  return (
    <S.Container>
      {SCORE_ARRAY.map((number, index) => (
        <S.Star
          key={index}
          $type={type}
          $selected={number <= score ? true : false}
          onClick={() => handleClick(number)}
        />
      ))}
    </S.Container>
  );
}

export default RatingStars;
