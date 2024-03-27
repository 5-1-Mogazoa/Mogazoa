import * as S from "@/src/components/profiles/MyActivity/StyledMyActivity/StyledMyActivity";
import StarIcon from "@/public/icons/star.svg";
import MessageIcon from "@/public/icons/messagebubble.svg";
import { StyledCategoryChip } from "@/src/components/common/chip/Styled/StyledCategoryChip";

type Props = {
  ratingEverage: number;
  reviewsCount: number;
  favoriteCategory: any;
};
export default function MyActivity({ ratingEverage, reviewsCount, favoriteCategory }: Props) {
  return (
    <S.StyledActivities>
      <S.ActivityList>활동내역</S.ActivityList>
      <S.StyledMyActivitiesBox>
        <S.StyledMyActivities>
          <S.StyledMyActivitiesText>{"남긴 별점 평균"}</S.StyledMyActivitiesText>
          <S.StyledMyActivitiesNumber>
            <StarIcon />
            <S.StyledRatings>{ratingEverage}</S.StyledRatings>
          </S.StyledMyActivitiesNumber>
        </S.StyledMyActivities>
        <S.StyledMyActivities>
          <S.StyledMyActivitiesText>{"남긴 리뷰"}</S.StyledMyActivitiesText>
          <S.StyledMyActivitiesNumber>
            <MessageIcon />
            <S.StyledRatings>{reviewsCount}</S.StyledRatings>
          </S.StyledMyActivitiesNumber>
        </S.StyledMyActivities>
        {/* 카테고리 없을 경우 조건 추가 */}
        <S.StyledMyActivities>
          <S.StyledMyActivitiesText>{"관심 카테고리"}</S.StyledMyActivitiesText>
          <StyledCategoryChip $small={false} $category={favoriteCategory}>
            {favoriteCategory}
          </StyledCategoryChip>
        </S.StyledMyActivities>
      </S.StyledMyActivitiesBox>
    </S.StyledActivities>
  );
}
