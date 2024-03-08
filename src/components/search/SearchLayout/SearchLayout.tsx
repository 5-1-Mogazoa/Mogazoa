import RankingList from "@/src/components/home/Ranking/RankingList";
import CategoryList from "@/src/components/home/Category/CategoryList";
import SearchProducts from "../SearchProducts/SearchProducts";
import * as S from "./Styled/StyledSearchLayout";

export default function SearchLayout() {
  return (
    <>
      <S.SearchLayout>
        <S.CategoryListWrap>
          <CategoryList />
        </S.CategoryListWrap>
        <S.MainWrap>
          <S.RankingListWrap>
            <RankingList />
          </S.RankingListWrap>
          <S.SearchCardListWrap>
            <SearchProducts />
          </S.SearchCardListWrap>
        </S.MainWrap>
      </S.SearchLayout>
    </>
  );
}
