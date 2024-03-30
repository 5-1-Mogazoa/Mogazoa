import { Controller, RegisterOptions, useFormContext } from "react-hook-form";
import * as S from "./styled";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "@/src/routes";
import { getProducts } from "@/src/apis/product";

interface FormProductNameInputProps {
  rules?: Pick<RegisterOptions, "required" | "maxLength" | "minLength" | "validate">;
  name: string;
  maxLength?: number;
  defaultValue?: string;
  placeholder: string;
}

function FormProductNameInput({ rules, name, maxLength = 20, defaultValue, placeholder }: FormProductNameInputProps) {
  const [keyword, setKeyword] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { control } = useFormContext();

  const { data: productsByKeyword } = useQuery({
    queryKey: [QUERY_KEY.PRODUCTS, keyword],
    queryFn: () => getProducts({ keyword: keyword }),
    enabled: !!keyword,
  });

  const similarProductNameList = productsByKeyword?.list.filter((list) => list.name !== defaultValue) || [];
  const noList = similarProductNameList.length === 0;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    if (value) setKeyword(value);

    if (keyword) setIsOpen(true);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setIsOpen(false);
    }
  };

  return (
    <S.Container>
      <Controller
        rules={rules}
        render={({ field }) => (
          <S.FormInput
            {...field}
            maxLength={maxLength}
            placeholder={placeholder}
            onChange={(event) => {
              field.onChange(event);
              handleChange(event);
            }}
            onKeyDown={handleKeyDown}
            onBlur={() => {
              setIsOpen(false);
            }}
          />
        )}
        name={name}
        control={control}
      />
      {isOpen && !noList && (
        <S.SearchDropDown>
          {!noList && <S.Info>이미 등록된 상품명은 피해주세요!</S.Info>}
          {similarProductNameList.map((list) => (
            <S.SearchItem key={list.id}>{list.name}</S.SearchItem>
          ))}
        </S.SearchDropDown>
      )}
    </S.Container>
  );
}

export default FormProductNameInput;
