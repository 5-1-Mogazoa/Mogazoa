import { formatDate } from "@/src/utils/formatDate";
import * as S from "./styled";
import { deleteReview, deleteReviewLike, postReviewLike } from "@/src/apis/review";
import Image from "next/image";
import { useQueryClient } from "@tanstack/react-query";
import { QUERY_KEY } from "@/src/routes";
import { useToggle } from "usehooks-ts";
import ModalDeleteReview from "../../ModalDeleteReview";
import { OrderType } from "../../ReviewList";
import { useRouter } from "next/router";

type ReviewFooterProps = {
  id: number;
  createdAt: string;
  isLiked: boolean;
  likeCount: number;
  createdByMe: boolean;
  order: OrderType;
  loginToggle: () => void;
};

function ReviewFooter({ id, createdAt, isLiked, likeCount, createdByMe, order, loginToggle }: ReviewFooterProps) {
  const router = useRouter();
  const productId = Number(router.query.productId);

  const [deleteReviewModal, deleteReviewToggle, setDeleteReviewModal] = useToggle();
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
      await queryClient.invalidateQueries({ queryKey: [QUERY_KEY.REVIEWS, productId, order.id] });
    }
  };

  const handleDeleteReveiwClick = async () => {
    await deleteReview(id);

    await queryClient.invalidateQueries({ queryKey: [QUERY_KEY.REVIEWS, productId, order.id] });
  };

  return (
    <>
      <S.Container>
        <S.DateWithButtons>
          {formatCreatedAt}
          {createdByMe && (
            <S.EditDeleteButtons>
              <button>수정</button>
              <button onClick={deleteReviewToggle}>삭제</button>
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
      {deleteReviewModal && (
        <ModalDeleteReview onClose={() => setDeleteReviewModal(false)} callback={handleDeleteReveiwClick} />
      )}
    </>
  );
}

export default ReviewFooter;
