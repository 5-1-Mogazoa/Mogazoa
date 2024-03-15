import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/src/apis/product";
import Card from "../../common/card/Card";
import styled from "styled-components";
import { QUERY_KEY, PRODUCT_LIMIT } from "@/src/routes";

type SearchCardListProps = {
  order?: "recent" | "rating" | "reviewCount" | string;
  category?: number | null | undefined;
  keyword?: string | null | undefined;
};

export default function SearchCardList({ order, category, keyword }: SearchCardListProps) {
  const { data: productData } = useQuery({
    queryKey: [QUERY_KEY.PRODUCTS, { order, category, keyword }],
    queryFn: () => getProducts({ order, category, keyword }),
  });
  return (
    <>
      <CardListbox>
        {productData?.list?.map((card: any, index: number) => {
          return (
            <Card
              key={index}
              productId={card.id}
              imageUrl={card.image}
              imageAlt={card.name}
              cardProductTitle={card.name}
              review={card.reviewCount}
              pick={card.favoriteCount}
              rateScore={card.rating}
            />
          );
        })}
      </CardListbox>
    </>
  );
}

const CardListbox = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 15px;

  @media (min-width: 1090px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
`;
