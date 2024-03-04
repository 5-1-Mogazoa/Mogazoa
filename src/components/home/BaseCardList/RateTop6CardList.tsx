import Card from "@/src/components/common/card/Card";
import { useEffect, useState } from "react";
import { CardListBox } from "./Styled/StyledBaseCardList";
import { Item } from "./type";

export default function RateTop6CardList({ productList }: any) {
  const [rateTop6CardList, setRateTop6CardList] = useState<Item>();

  useEffect(() => {
    const rateSortedList = productList?.list.sort((a: any, b: any) => b.rating - a.rating);
    const rateTop6 = rateSortedList?.slice(0, 6);
    setRateTop6CardList(rateTop6);
  }, []);

  return (
    <>
      {rateTop6CardList?.map((card: any, index: number) => {
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
