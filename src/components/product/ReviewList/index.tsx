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
  return (
    <S.Container>
      <S.TitleWithOrer>
        상품 리뷰
        <SortDropdown type="products" selectedItem={order} handleOrderButtonClick={handleOrderButtonClick} />
      </S.TitleWithOrer>
      <S.List>
        {reviewList.map((review) => (
          <ReviewItem key={review.id} review={review} loginToggle={loginToggle} />
        ))}
      </S.List>
    </S.Container>
  );
}

export default ReviewList;
