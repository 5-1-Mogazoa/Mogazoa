import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getCategoryList } from "@/src/apis/category";
import Category from "./category";
import * as S from "./Styled/StyledCategoryList";

export default function CategoryList() {
  const { data: categoryList } = useQuery({
    queryKey: ["categoryList"],
    queryFn: () => getCategoryList(),
  });
  console.log(categoryList);
  if (!categoryList) {
    return null;
  }

  const onChange = (e) => {
    console.log(e.target.value);
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
