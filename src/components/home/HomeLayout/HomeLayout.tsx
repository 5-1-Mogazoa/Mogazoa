import RankingList from "@/src/components/home/Ranking/RankingList";
import CategoryList from "@/src/components/home/Category/CategoryList";
import BaseCardList from "@/src/components/home/BaseCardList/BaseCardList";
import ProductAddButton from "../ProductAddButton/ProductAddButton";
import * as S from "./Styled/StyledHomeLayout";
import { useEffect, useState } from "react";
import { getToken } from "@/src/apis/auth";

export default function HomeLayout() {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    (async () => {
      if (await getToken()) {
        setIsLogin(true);
        return;
      }
    })();
  }, []);

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
        {isLogin && (
          <S.ProductAddButtonWrap>
            <ProductAddButton />
          </S.ProductAddButtonWrap>
        )}
      </S.HomeLayout>
    </>
  );
}
