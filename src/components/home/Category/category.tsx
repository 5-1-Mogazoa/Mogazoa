import { useQuery } from "@tanstack/react-query";
import { useState, useRef } from "react";
import { useRouter } from "next/router";
import { getCategoryList } from "@/src/apis/category";
import * as S from "./Styled/StyledCategory";
import useFilterSearch from "@/src/hooks/useFilterSearch";

type CategoryProps = {
  id: number;
  value: string;
  label: string;
  checked?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Category: React.FC<CategoryProps> = ({ id, value, onChange, label, checked }) => {
  const searchFilter = useFilterSearch();
  const radioRef = useRef<HTMLInputElement>(null);

  const handleClick = (e: React.MouseEvent<HTMLLabelElement, MouseEvent>) => {
    // radioRef.current가 존재하고, 이미 체크된 상태에서 동일한 라디오를 클릭한 경우
    if (radioRef.current && radioRef.current === e.target && checked) {
      e.preventDefault(); // 기본 동작 방지
      onChange({ target: { value: "" } } as React.ChangeEvent<HTMLInputElement>); // 체크 해제 로직

      searchFilter({ category: null });
      return;
    }
  };

  return (
    <S.RadioLabel onClick={handleClick}>
      <S.HiddenRadioInput
        type="radio"
        id={String(id)}
        name="categoryGroup"
        value={value}
        onChange={onChange}
        checked={checked}
        ref={radioRef}
      />
      <S.CustomRadio>{label}</S.CustomRadio>
    </S.RadioLabel>
  );
};

export default Category;
