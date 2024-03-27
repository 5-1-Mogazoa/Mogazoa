import Card from "@/src/components/common/card/Card";
import { useEffect, useState } from "react";
import { CardListBox } from "./Styled/StyledBaseCardList";
import { Item } from "./type";

export default function ReviewTop6CardList({ productList }: any) {
  const [reviewTop6CardList, setReviewTop6CardList] = useState<Item[]>([]);

  useEffect(() => {
    const reviewTop6 = productList?.list.slice(0, 6);
    setReviewTop6CardList(reviewTop6);
  }, []);

  return (
    <>
      {reviewTop6CardList?.map((card: any, index: number) => {
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
    </>
  );
}
