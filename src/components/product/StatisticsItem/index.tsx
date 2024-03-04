import Image from "next/image";
import * as S from "./styled";
import { statisticalCalculator } from "@/src/utils/statisticalCalculator";

type StatisticsProps = {
  statType: "rating" | "reviewCount" | "favoriteCount";
  count: number;
  average: number;
};

function StatisticsItem({ statType, count, average }: StatisticsProps) {
  const typeInfo = {
    rating: { title: "별점 평균", src: "/icons/star.svg", alt: "별점 별 아이콘" },
    favoriteCount: { title: "찜", src: "/icons/heartfull.svg", alt: "찜 하트 아이콘" },
    reviewCount: { title: "리뷰", src: "/icons/messagebubble.svg", alt: "리뷰 말풍선 아이콘" },
  };

  const statisticalResults = statisticalCalculator(statType, count, average);

  return (
    <S.Container>
      <S.TitleWithCount>
        {typeInfo[statType].title}
        <S.Count>
          <S.Icon>
            <Image fill src={typeInfo[statType].src} alt={typeInfo[statType].alt} />
          </S.Icon>
          {count}
        </S.Count>
      </S.TitleWithCount>
      <S.Result>{statisticalResults}</S.Result>
    </S.Container>
  );
}

export default StatisticsItem;
