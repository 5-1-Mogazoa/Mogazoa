import React, { ReactNode, SetStateAction } from "react";
import * as S from "./styled";
import ReviewItem from "../ReviewItem";
import { ReviewListType } from "@/src/apis/product/schema";
import SortDropdown from "../../common/button/SortDropdown";
import { OrderType } from "@/pages/products/[productId]";

type ReviewListProps = {
  reviewList: ReviewListType[];
  order: OrderType;
  loginToggle: () => void;
  handleOrderButtonClick: (selectedOrder: OrderType) => void;
};

function ReviewList({ reviewList, order, loginToggle, handleOrderButtonClick }: ReviewListProps) {
  const noList = reviewList.length === 0;

  return (
    <S.Container>
      <S.TitleWithOrer>
        상품 리뷰
        <SortDropdown type="products" selectedItem={order} handleOrderButtonClick={handleOrderButtonClick} />
      </S.TitleWithOrer>
      {noList && <S.NoList>첫번째 상품리뷰를 등록해보세요!</S.NoList>}
      <S.List>
        {reviewList.map((review) => (
          <ReviewItem key={review.id} review={review} loginToggle={loginToggle} />
        ))}
      </S.List>
    </S.Container>
  );
}

export default ReviewList;
