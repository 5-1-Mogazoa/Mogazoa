import { Controller, RegisterOptions, useFormContext } from "react-hook-form";
import { StyledTextBox } from "../Styled/StyledTextBox";

interface FormTextInputProps {
  key?: number;
  name: string;
  rules?: Pick<RegisterOptions, "required" | "maxLength" | "minLength" | "validate">;
  placeholder?: string;
  defaultValue?: string | number;
}

function FormTextInput({ key, name, rules, placeholder, defaultValue }: FormTextInputProps) {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <Controller
      key={key}
      name={name}
      control={control}
      rules={rules}
      defaultValue={defaultValue || ""}
      render={({ field }) => <StyledTextBox placeholder={placeholder} {...field} />}
    />
  );
}

export default FormTextInput;
