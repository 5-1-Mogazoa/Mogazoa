import RankingList from "@/src/components/home/Ranking/RankingList";
import CategoryList from "@/src/components/home/Category/CategoryList";
import BaseCardList from "@/src/components/home/BaseCardList/BaseCardList";
import * as S from "./Styled/StyledHomeLayout";

export default function HomeLayout() {
  return (
    <>
      <S.HomeLayout>
        <S.CategoryListWrap>
          <CategoryList />
        </S.CategoryListWrap>
        <S.MainWrap>
          <S.RankingListWrap>
            <RankingList />
          </S.RankingListWrap>
          <S.BaseCardListWrap>
            <BaseCardList />
          </S.BaseCardListWrap>
        </S.MainWrap>
      </S.HomeLayout>
    </>
  );
}
