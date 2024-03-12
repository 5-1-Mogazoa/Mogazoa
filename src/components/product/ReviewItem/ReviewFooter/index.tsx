import { formatDate } from "@/src/utils/formatDate";
import * as S from "./styled";
import { useState } from "react";
import { deleteReviewLike, postReviewLike } from "@/src/apis/review";
import Image from "next/image";
import { useQueryClient } from "@tanstack/react-query";
import { QUERY_KEY } from "@/src/routes";

type ReviewFooterProps = {
  id: number;
  createdAt: string;
  isLiked: boolean;
  likeCount: number;
  createdByMe: boolean;
};

function ReviewFooter({ id, createdAt, isLiked, likeCount, createdByMe }: ReviewFooterProps) {
  const [isLikedLocal, setIsLikedLocal] = useState(isLiked);
  const [likeCountLocal, setLikeCountLocal] = useState(likeCount);
  const formatCreatedAt = formatDate(createdAt);

  const queryClient = useQueryClient();

  const handleLikeClick = async () => {
    try {
      if (!isLikedLocal) {
        await postReviewLike(id);
        setIsLikedLocal(true);
        setLikeCountLocal(likeCountLocal + 1);
      } else {
        await deleteReviewLike(id);
        setIsLikedLocal(false);
        setLikeCountLocal(likeCountLocal - 1);
      }
    } catch (error) {
      console.error("리뷰 좋아요 등록 실패", error);
    } finally {
      // reviewsData 다시 받아오기
      await queryClient.invalidateQueries({ queryKey: [QUERY_KEY.REVIEWS] });
    }
  };

  return (
    <S.Container>
      <S.DateWithButtons>
        {formatCreatedAt}
        {createdByMe && (
          <S.EditDeleteButtons>
            <button>수정</button>
            <button>삭제</button>
          </S.EditDeleteButtons>
        )}
      </S.DateWithButtons>
      <S.LikeButton $isLiked={isLikedLocal} onClick={handleLikeClick}>
        <S.LikeIcon>
          {isLikedLocal ? (
            <Image fill src="/icons/upfull.svg" alt="좋아요 클릭 후 이미지" />
          ) : (
            <Image fill src="/icons/upempty.svg" alt="좋아요 클릭 전 이미지" />
          )}
        </S.LikeIcon>
        {likeCountLocal}
      </S.LikeButton>
    </S.Container>
  );
}

export default ReviewFooter;
