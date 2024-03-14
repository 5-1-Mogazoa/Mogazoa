import { getCategoryList } from "@/src/apis/category";
import { QUERY_KEY } from "@/src/routes";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { StyledSelectDropdown } from "../../button/Styled/StyledSelectDropdown";
import Indicator from "../../../../../public/icons/select_arrow.svg";

interface FormSelectCategoryProps {
  name: string;
  defaultValue: number;
  categoryName?: string;
}

function FormSelectCategory({ name, defaultValue, categoryName }: FormSelectCategoryProps) {
  const [categoryId, setCategoryId] = useState(defaultValue);
  const [categoryList, setCategoryList] = useState([{ value: defaultValue, label: categoryName || "" }]);

  const { data: categories } = useQuery({
    queryKey: [QUERY_KEY.CATEGORYS],
    queryFn: () => getCategoryList(),
  });

  const {
    control,
    formState: { errors },
  } = useFormContext();

  useEffect(() => {
    if (categories) {
      const formattedList = categories.map((category) => ({ value: category.id, label: category.name }));

      setCategoryList(formattedList);
    }
  }, []);

  useEffect(() => {
    setCategoryId(defaultValue);
  }, [defaultValue]);

  if (!categories) return null;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value, onChange, ...field } }) => (
        <StyledSelectDropdown
          options={categoryList}
          defaultValue={categoryList.find((category) => category.value === categoryId)}
          value={categoryList.find((category) => category.value === categoryId)}
          onChange={(selectedOption) => {
            onChange(selectedOption);
            setCategoryId(selectedOption.value);
          }}
          {...field}
          // components={{ DropdownIndicator: Indicator }} TODO 버튼 이미지 에러
        />
      )}
    />
  );
}

export default FormSelectCategory;
