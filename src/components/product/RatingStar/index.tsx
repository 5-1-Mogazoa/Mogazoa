import { Controller, useFormContext } from "react-hook-form";
import * as S from "./styled";

// 일반 페이지(review)에서 사용하는 별점
interface RatingStarsProps {
  type: "modal" | "page";
  score: number;
}

export function RatingStars({ type, score }: RatingStarsProps) {
  return (
    <S.Container>
      {[...Array(10)].map((_, index) => {
        const value = (index + 1) * 0.5;
        const rightStar = value % 1 === 0;
        return <S.Star key={index} $type={type} $selected={value <= score ? true : false} $rightStar={rightStar} />;
      })}
    </S.Container>
  );
}

// Modalt(react-hook-form) 사용하는 별점
interface FormRatingStarsProps {
  type: "modal" | "page";
  defaultValue: number;
}

export function FormRatingStars({ type, defaultValue }: FormRatingStarsProps) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <S.Container>
      {[...Array(10)].map((_, index) => {
        const ratingValue = (index + 1) * 0.5;
        const rightStar = ratingValue % 1 === 0; // 정수 값일 경우 별 오른쪽 부분(좌우반전 적용)
        return (
          <Controller
            key={ratingValue}
            name="rating"
            control={control}
            rules={{ min: 1 }}
            defaultValue={defaultValue}
            render={({ field }) => (
              <button
                {...field}
                type="button"
                onClick={() => field.onChange(ratingValue)}
                disabled={ratingValue <= 1 && field.value === 1}>
                <S.Star $type={type} $selected={field.value >= ratingValue ? true : false} $rightStar={rightStar} />
              </button>
            )}
          />
        );
      })}
    </S.Container>
  );
}
