import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/src/apis/product";
import Card from "../../common/card/Card";
import styled from "styled-components";
import { getCategoryList } from "@/src/apis/category";
import { QUERY_KEY, PRODUCT_LIMIT } from "@/src/routes";

type SearchCardListProps = {
  order?: "recent" | "rating" | "reviewCount" | string;
  category?: number;
  keyword?: string | undefined;
};

export default function SearchCardList({ order, category, keyword }: SearchCardListProps) {
  const [productData, setProductData] = useState();

  // useEffect(() => {
  //   const { data: products } = useQuery({
  //     queryKey: [QUERY_KEY.PRODUCTS],
  //     queryFn: () => getProducts({ order, keyword, category }), // pageParam는 무한스크롤 사용시
  //   });
  //   setProductData(products);
  // }, [order, category, keyword]);

  return (
    <>
      <CardListbox>
        {productData?.map((card: any, index: number) => {
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
