import { useQuery } from "@tanstack/react-query";
import { getCategoryList } from "@/src/apis/category";
import * as S from "./Styled/StyledCategory";
import { useState } from "react";

type CategoryProps = {
  id: number;
  value: string;
  label: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
export default function Category({ id, value, onChange, label }: CategoryProps) {
  return (
    <S.RadioLabel>
      <S.HiddenRadioInput type="radio" id={id} name="categoryGroup" value={value} onChange={onChange} />
      <S.CustomRadio>{label}</S.CustomRadio>
    </S.RadioLabel>
  );
}
