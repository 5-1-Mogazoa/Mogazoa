import { getUserCreatedProduct } from "@/src/apis/user";
import { StyledSelectDropdown } from "@/src/components/common/button/Styled/StyledSelectDropdown";
import { QUERY_KEY } from "@/src/routes";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import Indicator from "../../../../../public/icons/select_arrow.svg";

export interface FormSelectProducttProps {
  productId?: number;
  name: string;
  userId?: number;
  setProductId: React.Dispatch<React.SetStateAction<number>>;
  handleChangeOption: any;
}

function FormSelectProduct({ productId, name, userId, setProductId, handleChangeOption }: FormSelectProducttProps) {
  const [userProductList, setUserProductList] = useState([{ value: productId, label: name }]);

  const { data: createdProducts } = useQuery({
    queryKey: [QUERY_KEY.CREATED_PRODUCTS],
    queryFn: () => getUserCreatedProduct(userId),
  });

  const {
    control,
    formState: { errors },
  } = useFormContext();

  useEffect(() => {
    if (createdProducts?.list && createdProducts?.list.length > 0) {
      const formattedList = createdProducts.list.map((product) => ({
        value: product.id,
        label: product.name,
      }));
      setUserProductList(formattedList);
    }
  }, [createdProducts]);

  if (!createdProducts) return null;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange, ...field } }) => (
        <StyledSelectDropdown
          options={userProductList}
          value={userProductList.find((product) => product.value === productId)}
          onChange={(selectedOption) => {
            onChange(selectedOption);
            handleChangeOption(selectedOption);
          }}
          {...field}
          // components={{ DropdownIndicator: Indicator }} TODO 버튼 이미지 에러
        />
      )}
    />
  );
}

export default FormSelectProduct;
