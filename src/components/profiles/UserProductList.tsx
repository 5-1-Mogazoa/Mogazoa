import { getUserCreated, getUserFavorite, getUserReviewed } from "@/src/apis/user";
import { useQuery } from "@tanstack/react-query";
import Card from "../common/card/Card";
import { CardListBox, CardListBoxWrap } from "../home/BaseCardList/Styled/StyledBaseCardList";

type UserProductListProps = { userId: number; dataType: "CREATED" | "REVIEWED" | "FAVORITE" };
export default function UserProductList({ userId, dataType }: UserProductListProps) {
  const { data: CREATED } = useQuery({
    queryKey: ["CREATED", userId],
    queryFn: () => getUserCreated(userId),
  });
  const { data: REVIEWED } = useQuery({
    queryKey: ["REVIEWED", userId],
    queryFn: () => getUserReviewed(userId),
  });
  console.log({CREATED})

  const { data: FAVORITE } = useQuery({
    queryKey: ["FAVORITE", userId],
    queryFn: () => getUserFavorite(userId),
  });
  let dataList = null;
  switch (dataType) {
    case "CREATED":
      dataList = CREATED;
      break;
    case "REVIEWED":
      dataList = REVIEWED;
      break;
    case "FAVORITE":
      dataList = FAVORITE;
      break;
  }
  return (
    <CardListBoxWrap>
      <CardListBox>
        {dataList?.list.map((card: any, index: number) => {
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
      </CardListBox>
    </CardListBoxWrap>
  );
}