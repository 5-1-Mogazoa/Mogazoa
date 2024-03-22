import { getUserCreated } from "@/src/apis/user";
import { StyledSelectDropdown } from "@/src/components/common/button/Styled/StyledSelectDropdown";
import { QUERY_KEY } from "@/src/routes";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import Indicator from "../../../../../public/icons/select_arrow.svg";
import Image from "next/image";

export type selectedOptionType = { value: number; label: string };

export interface FormSelectProducttProps {
  productId?: number;
  productName?: string;
  name: string;
  userId: number;
  handleChangeOption: any;
}

function FormSelectProduct({ productId, productName, name, userId, handleChangeOption }: FormSelectProducttProps) {
  const { data: createdProducts } = useQuery({
    queryKey: [QUERY_KEY.CREATED_PRODUCTS],
    queryFn: () => getUserCreated(userId),
  });

  const userProductList = createdProducts?.list.map((product) => ({
    value: product.id,
    label: product.name,
  })) ?? [{ value: productId, label: productName }];

  const {
    control,
    formState: { errors },
  } = useFormContext();

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
            handleChangeOption(selectedOption);
          }}
          {...field}
          components={{
            DropdownIndicator: () => <Image width={24} height={24} src="/icons/select_arrow.svg" alt="화살표" />,
          }}
        />
      )}
    />
  );
}

export default FormSelectProduct;
