import { formatDate } from "@/src/utils/formatDate";
import * as S from "./styled";
import { deleteReview, deleteReviewLike, postReviewLike } from "@/src/apis/review";
import Image from "next/image";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { QUERY_KEY } from "@/src/routes";
import { useToggle } from "usehooks-ts";
import ModalDeleteReview from "../../ModalDeleteReview";
import { OrderType } from "../../ReviewList";
import { useRouter } from "next/router";
import { getToken } from "@/src/apis/auth";
import { getProductDetail } from "@/src/apis/product";
import { ProductDetailResponseType, ReviewListType } from "@/src/apis/product/schema";
import ModalEditReview from "../../ModalEditReview";

type ReviewFooterProps = {
  review: ReviewListType;
  createdByMe: boolean;
  order: OrderType;
  rating: number;
  loginToggle: () => void;
};

function ReviewFooter({ review, createdByMe, order, loginToggle }: ReviewFooterProps) {
  const [deleteReviewModal, deleteReviewToggle, setDeleteReviewModal] = useToggle();
  const [editReviewModal, editReviewToggle, setEditReviewModal] = useToggle();
  const { id, createdAt, isLiked, likeCount } = review;
  const formatCreatedAt = formatDate(createdAt);

  const router = useRouter();
  const productId = Number(router.query.productId);

  const { data: productDetail } = useQuery({
    queryKey: [QUERY_KEY.PRODUCT_DETAIL, productId],
    queryFn: () => getProductDetail(productId),
  });

  const { name, category } = (productDetail as ProductDetailResponseType) || { name: "", category: 1 };

  const queryClient = useQueryClient();

  // 리뷰 좋아요 클릭 이벤트
  const handleLikeClick = async () => {
    const token = await getToken();

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

  // 리뷰 삭제 이벤트
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
              <button onClick={editReviewToggle}>수정</button>
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
      {editReviewModal && (
        <ModalEditReview
          name={name}
          category={category.name}
          order={order}
          review={review}
          onClose={() => setEditReviewModal(false)}
        />
      )}
      {deleteReviewModal && (
        <ModalDeleteReview onClose={() => setDeleteReviewModal(false)} callback={handleDeleteReveiwClick} />
      )}
    </>
  );
}

export default ReviewFooter;
