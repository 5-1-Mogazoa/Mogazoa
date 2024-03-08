import { useState } from "react";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { getCategoryList } from "@/src/apis/category";
import Category from "./category";
import * as S from "./Styled/StyledCategoryList";
import useFilterSearch, { filterSearchProps } from "../../search/useFilterSearch";

export default function CategoryList() {
  const filterSearch = useFilterSearch();
  const { data: categoryList } = useQuery({
    queryKey: ["categoryList"],
    queryFn: () => getCategoryList(),
  });
  if (!categoryList) {
    return null;
  }

  const onChange = (e) => {
    filterSearch({ category: e.target.value });
  };

  return (
    <>
      <S.CategoryListWrap>
        <S.CategoryTitle>카테고리</S.CategoryTitle>
        <S.CategoryListBox>
          {categoryList?.map((item: any, index: number) => (
            <Category id={item.id} value={item.name} label={item.name} key={index} onChange={onChange} />
          ))}
        </S.CategoryListBox>
      </S.CategoryListWrap>
    </>
  );
}
