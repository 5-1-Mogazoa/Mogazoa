import { useEffect, useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
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
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
    queryKey: [QUERY_KEY.PRODUCTS, { order, category, keyword }],
    queryFn: ({ pageParam = 0 }) => getProducts({ order, category, keyword, cursor: pageParam, limit: PRODUCT_LIMIT }),
    getNextPageParam: (lastPage, pages) => lastPage.nextCursor,
  });

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
    if (!isFetchingNextPage && hasNextPage) {
      fetchNextPage();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [fetchNextPage, hasNextPage]);

  return (
    <>
      <CardListbox>
        {data?.pages.map((page) =>
          page?.list.map(
            (
              card: any, // index 제거
            ) => (
              <Card
                key={card.id} // 수정된 부분: index 대신 card.id 사용
                productId={card.id}
                imageUrl={card.image}
                imageAlt={card.name}
                cardProductTitle={card.name}
                review={card.reviewCount}
                pick={card.favoriteCount}
                rateScore={card.rating}
              />
            ),
          ),
        )}
      </CardListbox>
      {isFetchingNextPage && <div>Loading...</div>}
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
