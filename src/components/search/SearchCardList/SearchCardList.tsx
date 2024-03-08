import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getProductList } from "@/src/apis/product";
import Card from "../../common/card/Card";
import styled from "styled-components";

export default function SearchCardList() {
  const [productData, setProductData] = useState<Item>();

  const { data: productList } = useQuery({
    queryKey: ["productList"],
    queryFn: () => getProductList(),
  });

  useEffect(() => {
    if (productList) {
      setProductData(productList.list);
    }
  }, [productList]);

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
