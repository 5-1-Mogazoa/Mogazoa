import { Controller, useFormContext } from "react-hook-form";
import ReactSelect from "react-select";
import { StyledSelectDropdown } from "../../button/Styled/StyledSelectDropdown";
import Image from "next/image";

interface FormSelectProps {
  options: { value: number; label: string }[];
  name: string;
  placeholder: string;
  setSelectedProductId?: React.Dispatch<React.SetStateAction<number>>;
}

function FormSelect({ options, name, placeholder, setSelectedProductId }: FormSelectProps) {
  const { control } = useFormContext();

  return (
    <Controller
      render={({ field }) => (
        <StyledSelectDropdown
          {...field}
          options={options}
          placeholder={placeholder}
          isClearable
          onChange={(selectedOption) => {
            field.onChange(selectedOption);
            if (selectedOption && setSelectedProductId) {
              setSelectedProductId((selectedOption as { value: number; label: string }).value);
            }
          }}
          components={{
            DropdownIndicator: () => <Image width={24} height={24} src="/icons/select_arrow.svg" alt="화살표" />,
          }}
        />
      )}
      name={name}
      control={control}
    />
  );
}

export default FormSelect;
