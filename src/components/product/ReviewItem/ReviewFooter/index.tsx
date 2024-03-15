import { formatDate } from "@/src/utils/formatDate";
import * as S from "./styled";
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
  loginToggle: () => void;
};

function ReviewFooter({ id, createdAt, isLiked, likeCount, createdByMe, loginToggle }: ReviewFooterProps) {
  const formatCreatedAt = formatDate(createdAt);

  const queryClient = useQueryClient();

  const handleLikeClick = async () => {
    const token = localStorage.getItem("accessToken");

    if (!token) {
      loginToggle();
      return;
    }

    try {
      if (!isLiked) {
        await postReviewLike(id);
      } else {
        await deleteReviewLike(id);
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
      <S.LikeButton $isLiked={isLiked} onClick={handleLikeClick}>
        <S.LikeIcon>
          {isLiked ? (
            <Image fill src="/icons/upfull.svg" alt="좋아요 클릭 후 이미지" />
          ) : (
            <Image fill src="/icons/upempty.svg" alt="좋아요 클릭 전 이미지" />
          )}
        </S.LikeIcon>
        {likeCount}
      </S.LikeButton>
    </S.Container>
  );
}

export default ReviewFooter;
