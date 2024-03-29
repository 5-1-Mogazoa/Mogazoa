import { useQuery } from "@tanstack/react-query";
import { getCategoryList } from "@/src/apis/category";
import Category from "./category";
import * as S from "./Styled/StyledCategoryList";
import useFilterSearch from "../../../hooks/useFilterSearch";
import { useState } from "react";
import Image from "next/image";

type CategoryListProps = {
  isCategory?: boolean;
  onClose?: () => void;
};

export default function CategoryList({ onClose, isCategory }: CategoryListProps) {
  const filterSearch = useFilterSearch();
  const [isSelected, setIsSelected] = useState<string | undefined>("");
  const { data: categoryList } = useQuery({
    queryKey: ["categoryList"],
    queryFn: () => getCategoryList(),
  });

  if (!categoryList) {
    return null;
  }

  const onChange = (e: any) => {
    const selectValue = e.target.value;
    const selectedId = e.target.id;

    // 이미 선택된 값과 같은 경우에만 해제
    if (isSelected === selectValue) {
      setIsSelected(undefined);
    } else {
      setIsSelected(selectValue);
      filterSearch({ category: selectedId });
    }
  };

  return (
    <S.CategoryListWrap $isCategory={isCategory}>
      <S.CloseButton onClick={onClose}>
        <Image src="/icons/closeSvgr.svg" alt="닫기 아이콘 이미지" width={24} height={24} />
      </S.CloseButton>
      <S.CategoryTitle>카테고리</S.CategoryTitle>
      <S.CategoryListBox onClick={onClose}>
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
  );
}
