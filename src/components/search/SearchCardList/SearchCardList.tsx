import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/src/apis/product";
import Card from "../../common/card/Card";
import styled from "styled-components";
import { OrderType } from "@/pages/products/[productId]";
import { getCategoryList } from "@/src/apis/category";

type SearchCardListProps = {
  order?: OrderType;
  category?: string | string[] | undefined;
  searchQuery?: string | string[] | undefined;
};

export default function SearchCardList({ order, category, searchQuery }: SearchCardListProps) {
  const [productData, setProductData] = useState<Item>();
  const { data: productList } = useQuery({
    queryKey: ["productList"],
    queryFn: () => getProducts(),
  });

  useEffect(() => {
    const fetchData = async () => {
      console.log(searchQuery);
      const categoryList = await getCategoryList();

      if (productList && productList.list && categoryList) {
        let filteredList = [...productList.list];

        if (order?.name === "최신순") {
          filteredList = filteredList.sort((a, b) => b.createdAt - a.createdAt);
        } else if (order?.name === "별점순") {
          filteredList = filteredList.sort((a, b) => b.rating - a.rating);
        } else if (order?.name === "리뷰순") {
          filteredList = filteredList.sort((a, b) => b.reviewCount - a.reviewCount);
        }

        if (category) {
          const selectedCategoryIds = Array.isArray(category)
            ? category.map((categoryName) => categoryList.find((cat) => cat.name === categoryName)?.id)
            : [categoryList.find((cat) => cat.name === category)?.id];

          // 선택된 카테고리에 해당하는 제품만 필터링
          filteredList = filteredList.filter((item) => selectedCategoryIds.includes(item.categoryId));
        }

        if (searchQuery) {
          // 검색어가 존재하는 경우, 제품명에 검색어가 포함된 제품만 필터링
          const lowerCaseSearchQuery = searchQuery.toLowerCase();
          filteredList = filteredList.filter((item) => item.name.toLowerCase().includes(lowerCaseSearchQuery));
        }

        setProductData(filteredList);
      }
    };

    fetchData();
  }, [order, productList, category, searchQuery]);

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
