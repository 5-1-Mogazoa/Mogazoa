import { Controller, RegisterOptions, useFormContext } from "react-hook-form";
import { StyledLetterCount, StyledTextBox, StyledTextBoxContainer } from "../Styled/StyledTextBox";

interface FormTextareaProps {
  rules?: Pick<RegisterOptions, "required" | "maxLength" | "minLength" | "validate">;
  name: string;
  placeholder: string;
  maxLength?: number;
}

function FormTextarea({ rules, name, placeholder, maxLength = 1000 }: FormTextareaProps) {
  const { control } = useFormContext();

  return (
    <StyledTextBoxContainer>
      <Controller
        rules={rules}
        render={({ field }) => (
          <>
            <StyledTextBox {...field} maxLength={maxLength} placeholder={placeholder} />
            <StyledLetterCount>
              {field.value?.length || 0} / {maxLength}
            </StyledLetterCount>
          </>
        )}
        name={name}
        control={control}
      />
    </StyledTextBoxContainer>
  );
}

export default FormTextarea;
