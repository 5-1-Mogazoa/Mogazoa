import { getCategoryList } from "@/src/apis/category";
import { QUERY_KEY } from "@/src/routes";
import { useQuery } from "@tanstack/react-query";
import { Controller, useFormContext } from "react-hook-form";
import { StyledSelectDropdown } from "../../button/Styled/StyledSelectDropdown";
import Indicator from "../../../../../public/icons/select_arrow.svg";
import Image from "next/image";

interface FormSelectCategoryProps {
  name: string;
  defaultValue: number;
  categoryName?: string;
}

function FormSelectCategory({ name, defaultValue, categoryName }: FormSelectCategoryProps) {
  const { data: categories } = useQuery({
    queryKey: [QUERY_KEY.CATEGORYS],
    queryFn: () => getCategoryList(),
  });

  const categoryList = categories?.map((category) => ({ value: category.id, label: category.name })) ?? [
    { value: defaultValue, label: categoryName || "" },
  ];

  const {
    control,
    formState: { errors },
  } = useFormContext();

  if (!categories) return null;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange, ...field } }) => {
        return (
          <StyledSelectDropdown
            options={categoryList}
            value={categoryList.find((category) => category.value === value)}
            onChange={onChange}
            placeholder="카테고리선택"
            {...field}
            components={{
              DropdownIndicator: () => <Image width={24} height={24} src="/icons/select_arrow.svg" alt="화살표" />,
            }}
          />
        );
      }}
    />
  );
}

export default FormSelectCategory;
