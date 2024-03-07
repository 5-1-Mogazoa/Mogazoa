import React, { ReactNode, SetStateAction } from "react";
import * as S from "./styled";
import ReviewItem from "../ReviewItem";
import { ReviewListType } from "@/src/apis/product/schema";
import SortDropdown from "../../common/button/SortDropdown";

export type OrderOptionType = "recent" | "ratingDesc" | "ratingAsc" | "likeCount";

type ReviewListProps = {
  reviewList: ReviewListType[];
  order: OrderOptionType;
  setOrder: React.Dispatch<SetStateAction<OrderOptionType>>;
};

function ReviewList({ reviewList, order, setOrder }: ReviewListProps) {
  return (
    <S.Container>
      <S.TitleWithOrer>
        상품 리뷰<SortDropdown order={order} setOrder={setOrder}></SortDropdown>
      </S.TitleWithOrer>
      <S.List>
        {reviewList.map((review) => (
          <ReviewItem key={review.id} review={review} />
        ))}
      </S.List>
    </S.Container>
  );
}

export default ReviewList;
