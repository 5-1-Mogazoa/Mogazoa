import { useQuery } from "@tanstack/react-query";
import { getProductList } from "@/src/apis/product";
import RateTop6CardList from "./RateTop6CardList";
import ReviewTop6CardList from "./ReviewTop6CardList";
import * as S from "./Styled/StyledBaseCardList";
import { Children } from "react";

type CardListBoxWrapPorps = {
  title: string;
  description?: string;
  children: ReactNode;
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
  const { data: productList } = useQuery({
    queryKey: ["productList"],
    queryFn: () => getProductList(),
  });
  if (!productList) {
    return null;
  }

  return (
    <>
      <CardListBoxWrap title="지금 핫한 상품" description="TOP 6">
        <ReviewTop6CardList productList={productList} />
      </CardListBoxWrap>
      <CardListBoxWrap title="별점이 높은 상품">
        <RateTop6CardList productList={productList} />
      </CardListBoxWrap>
    </>
  );
}
