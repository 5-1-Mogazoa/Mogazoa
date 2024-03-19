import React, { useEffect } from "react";
import * as S from "./styled";
import ReviewItem from "../ReviewItem";
import SortDropdown from "../../common/button/SortDropdown";
import { useInfiniteQuery } from "@tanstack/react-query";
import { getProductReviews } from "@/src/apis/product";
import { QUERY_KEY } from "@/src/routes";
import { useInView } from "react-intersection-observer";
import { getReviewsListResponseType } from "@/src/apis/product/schema";

export type OrderOptionType = "recent" | "ratingDesc" | "ratingAsc" | "likeCount" | "reviewCount" | "rating";
export type OrderType = { id: OrderOptionType; name: string };

type ReviewListProps = {
  productId: number;
  order: OrderType;
  setOrder: React.Dispatch<React.SetStateAction<OrderType>>;
  loginToggle: () => void;
};

function ReviewList({ productId, order, setOrder, loginToggle }: ReviewListProps) {
  const [ref, inView] = useInView();

  const {
    status,
    data: reviewData,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: [QUERY_KEY.REVIEWS, productId, order.id],
    queryFn: async ({ pageParam }) => {
      const param = typeof pageParam === "number" ? pageParam : undefined;
      return await getProductReviews({ productId, order: order.id, pageParam: param });
    },
    initialPageParam: 0,
    getNextPageParam: (lastPage: getReviewsListResponseType) => {
      return lastPage?.nextCursor ?? undefined;
    },
  });

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  // 리뷰목록의 정렬기준 버튼클릭 이벤트
  const handleOrderButtonClick = (orderItem: OrderType) => {
    setOrder(orderItem);
  };

  if (!reviewData) return null;

  const reviewList = reviewData?.pages[0].list;
  const noList = reviewList.length === 0;

  return (
    <S.Container>
      <S.TitleWithOrer>
        상품 리뷰
        <SortDropdown type="products" selectedItem={order} handleOrderButtonClick={handleOrderButtonClick} />
      </S.TitleWithOrer>
      {noList && <S.NoList>첫번째 상품리뷰를 등록해보세요!</S.NoList>}
      <S.List>
        {reviewData?.pages.map((page) => (
          <React.Fragment key={page.nextCursor}>
            {page.list.map((review) => (
              <ReviewItem key={review.id} review={review} order={order} loginToggle={loginToggle} />
            ))}
          </React.Fragment>
        ))}
        <S.ScrollButton ref={ref} onClick={() => fetchNextPage()} disabled={!hasNextPage || isFetchingNextPage}>
          {!hasNextPage && "리뷰를 다 봤어요!"}
        </S.ScrollButton>
      </S.List>
    </S.Container>
  );
}

export default ReviewList;
