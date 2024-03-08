import { useState } from "react";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { getCategoryList } from "@/src/apis/category";
import Category from "./category";
import * as S from "./Styled/StyledCategoryList";

export type filterSearchProps = {
  category?: string;
  sort?: string;
  searchQuery?: string;
};

export default function CategoryList() {
  const { data: categoryList } = useQuery({
    queryKey: ["categoryList"],
    queryFn: () => getCategoryList(),
  });
  if (!categoryList) {
    return null;
  }

  const onChange = (e) => {
    console.log(e.target.value);
    filterSearch({ category: e.target.value });
  };
  const router = useRouter();
  const filterSearch = ({ category, sort, searchQuery }: filterSearchProps) => {
    const { query } = router;
    if (searchQuery !== undefined) query.searchQuery = searchQuery;
    if (sort !== undefined) query.sortValue = sort;
    if (category !== undefined) query.category = category;

    router.push({
      pathname: router.pathname,
      query: query,
    });
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
