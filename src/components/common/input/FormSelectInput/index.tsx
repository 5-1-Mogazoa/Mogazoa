// import { Controller, RegisterOptions, useFormContext } from "react-hook-form";
// import { StyledInput } from "../Styled/StyledInput";

// export interface FormSelectInputProps {
//   key?: number;
//   name: string;
//   rules?: Pick<RegisterOptions, "required" | "maxLength" | "minLength" | "validate">;
//   placeholder?: string;
//   defaultValue?: string | number;
// }

// function FormSelectInput({ key, name, rules, placeholder, defaultValue }: FormSelectInputProps) {
//   const {
//     control,
//     formState: { errors },
//   } = useFormContext();

//   return (
//     <Controller
//       key={key}
//       name={name}
//       control={control}
//       rules={rules}
//       defaultValue={defaultValue || ""}
//       render={({ field }) => <StyledInput placeholder={placeholder} {...field} />}
//     />
//   );
// }

// export default FormSelectInput;

//

import { getUserCreatedProduct } from "@/src/apis/user";
import { QUERY_KEY } from "@/src/routes";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { Controller, RegisterOptions, useFormContext } from "react-hook-form";
import * as S from "./styled";

export interface FormSelectInputProps {
  id?: number;
  name: string;
  userId?: number;
  rules?: Pick<RegisterOptions, "required">;
  defaultValue?: string | number;
  setProduct: React.Dispatch<React.SetStateAction<object>>;
}

function FormSelectInput({ id, name, userId, rules, defaultValue, setProduct }: FormSelectInputProps) {
  const queryClient = useQueryClient();

  const { data: createdProducts } = useQuery({
    queryKey: [QUERY_KEY.CREATED_PRODUCTS, userId],
    queryFn: () => getUserCreatedProduct(userId),
  });

  const {
    control,
    formState: { errors },
  } = useFormContext();

  if (!createdProducts) return null;

  const { list } = createdProducts;

  return (
    <S.Container>
      <Controller
        name={name}
        control={control}
        rules={rules}
        defaultValue={defaultValue}
        render={({ onChange, value, ref }) => (
          <S.SelectBox
            options={createdProducts}
            value={list.find((product) => product.name === name)}
            onChange={(event) => onChange(event.target.value)}
          />
        )}
      />
    </S.Container>
  );
}

export default FormSelectInput;
