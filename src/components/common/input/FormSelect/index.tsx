import { Controller, useFormContext } from "react-hook-form";
import ReactSelect from "react-select";
import { StyledSelectDropdown } from "../../button/Styled/StyledSelectDropdown";

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
        />
      )}
      name={name}
      control={control}
    />
  );
}

export default FormSelect;
