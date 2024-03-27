import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/src/apis/product";
import RateTop6CardList from "./RateTop6CardList";
import ReviewTop6CardList from "./ReviewTop6CardList";
import * as S from "./Styled/StyledBaseCardList";
import { Children, useEffect, useState } from "react";
import { QUERY_KEY, PRODUCT_LIMIT } from "@/src/routes";

type CardListBoxWrapPorps = {
  title: string;
  description?: string;
  children: React.ReactNode;
};

const CardListBoxWrap = ({ title, description, children }: CardListBoxWrapPorps) => (
  <S.CardListBoxWrap>
    <S.CardListTitleBox>
      <S.CardListTitle>{title}</S.CardListTitle>
      {description && <S.CardListDes>{description}</S.CardListDes>}
    </S.CardListTitleBox>
    <S.CardListBox>{children}</S.CardListBox>
  </S.CardListBoxWrap>
);

export default function BaseCardList() {
  const { data: reviewProducts } = useQuery({
    queryKey: [QUERY_KEY.PRODUCTS, { order: "reviewCount" }],
    queryFn: () => getProducts({ order: "reviewCount" }),
  });

  const { data: rateProducts } = useQuery({
    queryKey: [QUERY_KEY.PRODUCTS, { order: "rating" }],
    queryFn: () => getProducts({ order: "rating" }),
  });

  if (!reviewProducts || !rateProducts) {
    return null;
  }

  return (
    <>
      <CardListBoxWrap title="지금 핫한 상품" description="TOP 6">
        <ReviewTop6CardList productList={reviewProducts} />
      </CardListBoxWrap>
      <CardListBoxWrap title="별점이 높은 상품">
        <RateTop6CardList productList={rateProducts} />
      </CardListBoxWrap>
    </>
  );
}
