import { Controller, RegisterOptions, useFormContext } from "react-hook-form";
import { StyledTextBox } from "../Styled/StyledTextBox";

export interface FormTextareaInputProps {
  key?: number;
  name: string;
  rules?: Pick<RegisterOptions, "required" | "maxLength" | "minLength" | "validate">;
  placeholder?: string;
  defaultValue?: string;
}

function FormTextareaInput({ key, name, rules, placeholder, defaultValue }: FormTextareaInputProps) {
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
      render={({ field }) => <StyledTextBox value={field.value} onChange={field.onChange} placeholder={placeholder} />}
    />
  );
}

export default FormTextareaInput;
