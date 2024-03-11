import { useQuery } from "@tanstack/react-query";
import { getCategoryList } from "@/src/apis/category";
import * as S from "./Styled/StyledCategory";
import { useState, useRef } from "react";

type CategoryProps = {
  id: number;
  value: string;
  label: string;
  checked?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Category({ id, value, onChange, label, checked }: CategoryProps) {
  const radioRef = useRef(null);

  const handleClick = (e) => {
    if (e.target === radioRef.current && radioRef.current.checked) {
      e.preventDefault();
      onChange({ target: { value: "" } });
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
}
