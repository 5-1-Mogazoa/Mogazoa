// import { getUserCreatedProduct } from "@/src/apis/user";
// import { QUERY_KEY } from "@/src/routes";
// import { useQuery, useQueryClient } from "@tanstack/react-query";
// import React, { useEffect, useState } from "react";
// import { Controller, RegisterOptions, useFormContext } from "react-hook-form";
// import * as S from "./styled";

// export interface FormSelectInputProps {
//   id?: number;
//   name: string;
//   userId?: number;
//   rules?: Pick<RegisterOptions, "required">;
//   defaultValue?: object;
//   setProduct: React.Dispatch<React.SetStateAction<object>>;
// }

// function FormSelectInput({ id, name, userId, rules, defaultValue, setProduct }: FormSelectInputProps) {
//   const [selectList, setSelectList] = useState([{ value: id, label: name }]);
//   const queryClient = useQueryClient();

//   const { data: createdProducts } = useQuery({
//     queryKey: [QUERY_KEY.CREATED_PRODUCTS, userId],
//     queryFn: () => getUserCreatedProduct(userId),
//   });

//   const {
//     control,
//     formState: { errors },
//   } = useFormContext();

//   useEffect(() => {
//     if (createdProducts?.list && createdProducts?.list.length > 0) {
//       const formattedList = createdProducts.list.map((product) => ({
//         value: product.id,
//         label: product.name,
//       }));
//       setSelectList(formattedList);
//     }
//   }, [createdProducts]);

//   if (!createdProducts) return null;
//   // const { list } = createdProducts;

//   return (
//     <S.Container>
//       <Controller
//         name={name}
//         control={control}
//         rules={rules}
//         defaultValue={defaultValue}
//         render={({ onChange, value, ref }) => (
//           <S.SelectBox
//             options={selectList}
//             value={selectList.find((product) => product.label === name)}
//             onChange={(event) => onChange(event)}
//           />
//         )}
//       />
//     </S.Container>
//   );
// }

// export default FormSelectInput;

import { Controller, useFormContext } from "react-hook-form";
import Indicator from "../../../../../public/icons/select_arrow.svg";
import * as S from "./styled";

export interface FormSelectInputProps {
  name?: string; // form 보낼때 데이터 이름
  optionList: {
    // 보여줄 선택 옵션들
    value: number | undefined;
    label: string;
  }[];
  productId?: number; // 선택된 데이터 아이디
  handleChangeOption: any;
}

function FormSelectInput({ name, optionList, productId, handleChangeOption }: FormSelectInputProps) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  if (!name) return null;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange, ...field } }) => (
        <S.SelectBox
          options={optionList}
          value={optionList.find((product) => product.value === productId)}
          onChange={(selectedOption) => {
            onChange(selectedOption);
            handleChangeOption(selectedOption);
          }}
          {...field}
          components={{ DropdownIndicator: Indicator }}
        />
      )}
    />
  );
}

export default FormSelectInput;
