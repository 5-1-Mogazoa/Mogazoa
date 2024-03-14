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
