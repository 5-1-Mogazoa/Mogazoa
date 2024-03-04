import Image from "next/image";
import * as S from "./styled";
import { useEffect } from "react";

function ReviewItem({ review }) {
  const { user, reviewImages, createdAt, isLiked, likeCount, content, rating } = review;

  const userFollowReview = "팔로워 000 리뷰 000";

  return (
    <S.Container>
      <S.UserWithRating>
        <S.UserInfo>
          <S.UserImage>
            <Image fill src={user.image} alt={`${user.nickname} 프로필 이미지`} />
          </S.UserImage>
          <S.NameFollowReview>
            <S.NameWithRanking>{user.nickname}</S.NameWithRanking>
            <S.FollowReview>{userFollowReview}</S.FollowReview>
          </S.NameFollowReview>
        </S.UserInfo>
      </S.UserWithRating>
    </S.Container>
  );
}

export default ReviewItem;
