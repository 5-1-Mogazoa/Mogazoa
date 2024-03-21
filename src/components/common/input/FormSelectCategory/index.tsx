import { getCategoryList } from "@/src/apis/category";
import { QUERY_KEY } from "@/src/routes";
import { useQuery } from "@tanstack/react-query";
import { Controller, useFormContext } from "react-hook-form";
import { StyledSelectDropdown } from "../../button/Styled/StyledSelectDropdown";
import Indicator from "../../../../../public/icons/select_arrow.svg";

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
            {...field}
            // components={{ DropdownIndicator: Indicator }} TODO 버튼 이미지 에러
          />
        );
      }}
    />
  );
}

export default FormSelectCategory;
