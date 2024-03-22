import RankingList from "@/src/components/home/Ranking/RankingList";
import CategoryList from "@/src/components/home/Category/CategoryList";
import BaseCardList from "@/src/components/home/BaseCardList/BaseCardList";
import ProductAddButton from "../ProductAddButton/ProductAddButton";
import * as S from "./Styled/StyledHomeLayout";
import { useEffect, useState } from "react";
import { getToken } from "@/src/apis/auth";
import SearchProducts from "../../search/SearchProducts/SearchProducts";
import { useRouter } from "next/router";

export default function HomeLayout() {
  const [isLogin, setIsLogin] = useState(false);
  const [isBaseOrSearch, setIsBaseOrSearch] = useState(true);
  const router = useRouter();
  const { keyword, category } = router.query;

  useEffect(() => {
    const checkLogin = async () => {
      setIsLogin((await getToken()) ? true : false);
    };
    checkLogin();
  }, []);

  useEffect(() => {
    setIsBaseOrSearch(!(category || keyword));
  }, [category, keyword]);

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
          <S.BaseCardListWrap>{isBaseOrSearch ? <BaseCardList /> : <SearchProducts />}</S.BaseCardListWrap>
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
