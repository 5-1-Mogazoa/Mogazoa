import Image from "next/image";
import * as S from "./styled";
import { ReviewUserType } from "@/src/apis/product/schema";
import RatingStars from "../../RatingStar";
import { StyledRankingChip } from "@/src/components/common/chip/Styled/StyledRankingChip";

type RankingName = {
  [key: number]: "1등" | "2등" | "3등" | "4등" | "5등";
};

type ReviewItemUserProps = {
  user: ReviewUserType;
  userCount: { ranking: number; follower: number; reviewed: number };
  rating: number;
};

function ReviewItemUser({ user, userCount, rating }: ReviewItemUserProps) {
  const { ranking, reviewed, follower } = userCount;
  const inTheRankings = ranking <= 5;

  const rankingName = (ranking: number) => {
    switch (ranking) {
      case 1:
        return "1등";
      case 2:
        return "2등";
      case 3:
        return "3등";
      case 4:
        return "4등";
      case 5:
        return "5등";
      default:
        return "없음";
    }
  };

  return (
    <S.Container>
      <S.ProfileImage>
        <Image fill src={user.image || "/icons/default_profile.svg"} alt={`${user.nickname} 프로필 이미지`} />
      </S.ProfileImage>
      <S.UserTextInfo>
        <S.NameWithFollowReview>
          <S.NameWithRanking>
            {inTheRankings && (
              <StyledRankingChip $ranking={rankingName(ranking)}>{rankingName(ranking)}</StyledRankingChip>
            )}
            {user.nickname}
          </S.NameWithRanking>
          <S.FollowReview>
            <span>팔로워 {follower}</span>
            <span>리뷰{reviewed}</span>
          </S.FollowReview>
        </S.NameWithFollowReview>
        <RatingStars type="page" score={rating} />
      </S.UserTextInfo>
    </S.Container>
  );
}

export default ReviewItemUser;
