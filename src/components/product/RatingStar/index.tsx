import { Controller, useFormContext } from "react-hook-form";
import * as S from "./styled";

// 일반 페이지(review)에서 사용하는 별점
interface RatingStarsProps {
  type: "modal" | "page";
  score: number;
}

export function RatingStars({ type, score }: RatingStarsProps) {
  const SCORE_ARRAY = [1, 2, 3, 4, 5];

  return (
    <S.Container>
      {SCORE_ARRAY.map((number, index) => (
        <S.Star key={index} $type={type} $selected={number <= score ? true : false} />
      ))}
    </S.Container>
  );
}

// Modalt(react-hook-form) 사용하는 별점
interface FormRatingStarsProps {
  type: "modal" | "page";
  score: number;
  setScore?: React.Dispatch<React.SetStateAction<number>>;
  defaultValue: number;
}

export function FormRatingStars({ type, score, setScore, defaultValue }: FormRatingStarsProps) {
  const SCORE_ARRAY = [1, 2, 3, 4, 5];

  const {
    control,
    formState: { errors },
  } = useFormContext();

  const handleClick = (number: number) => {
    if (type === "modal" && setScore) {
      setScore(number);
    }
  };

  return (
    <S.Container>
      {SCORE_ARRAY.map((number, index) => (
        <Controller
          key={index}
          name="rating"
          control={control}
          defaultValue={defaultValue}
          render={({ field }) => (
            <S.Star
              key={index}
              $type={type}
              $selected={number <= score ? true : false}
              onClick={() => {
                handleClick(number);
                field.onChange(number);
              }}
              {...field}
            />
          )}
        />
      ))}
    </S.Container>
  );
}
