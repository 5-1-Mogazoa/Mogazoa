import { useQuery } from "@tanstack/react-query";
import { getCategoryList } from "@/src/apis/category";
import Category from "./category";
import * as S from "./Styled/StyledCategoryList";
import useFilterSearch from "../../search/useFilterSearch";
import { useState } from "react";

export default function CategoryList() {
  const filterSearch = useFilterSearch();
  const [isSelected, setIsSelected] = useState<string | undefined>("");
  const { data: categoryList } = useQuery({
    queryKey: ["categoryList"],
    queryFn: () => getCategoryList(),
  });

  if (!categoryList) {
    return null;
  }

  const onChange = (e) => {
    const selectedValue = e.target.value;

    // 이미 선택된 값과 같은 경우에만 해제
    if (isSelected === selectedValue) {
      setIsSelected(undefined);
    } else {
      setIsSelected(selectedValue);
      filterSearch({ category: e.target.value });
    }
  };

  return (
    <>
      <S.CategoryListWrap>
        <S.CategoryTitle>카테고리</S.CategoryTitle>
        <S.CategoryListBox>
          {categoryList?.map((item: any, index: number) => (
            <Category
              id={item.id}
              value={item.name}
              label={item.name}
              key={index}
              onChange={onChange}
              checked={isSelected === item.name}
            />
          ))}
        </S.CategoryListBox>
      </S.CategoryListWrap>
    </>
  );
}
