import { Controller, RegisterOptions, useFormContext } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { QUERY_KEY } from "@/src/routes";
import { getProducts } from "@/src/apis/product";
import * as S from "./styled";

interface FormNameInputProps {
  name: string;
  defaultValue?: string;
  rules?: Pick<RegisterOptions, "required" | "maxLength" | "minLength" | "validate">;
}

const FormNameInput = ({ name, defaultValue, rules }: FormNameInputProps) => {
  const [productName, setProductName] = useState("");
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <S.ProductNameInputWrap>
      <Controller
        name={name}
        control={control}
        rules={rules}
        defaultValue=""
        render={({ field }) => (
          <S.ProductNameInput
            {...field}
            type="text"
            placeholder="상품명 (상품 등록 여부를 확인해 주세요)"
            onChange={(e) => {
              field.onChange(e);
              setProductName(e.target.value);
            }}
          />
        )}
      />
    </S.ProductNameInputWrap>
  );
};

export default FormNameInput;
