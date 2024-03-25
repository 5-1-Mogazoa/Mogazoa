import { Controller, RegisterOptions, useFormContext } from "react-hook-form";
import { StyledLetterCount, StyledTextBox, StyledTextBoxContainer } from "../Styled/StyledTextBox";
import { useState } from "react";

interface FormTextareaProps {
  rules?: Pick<RegisterOptions, "required" | "maxLength" | "minLength" | "validate">;
  name: string;
  placeholder: string;
  maxLength?: number;
}

function FormTextarea({ rules, name, placeholder, maxLength = 1000 }: FormTextareaProps) {
  const [isFocused, setIsFocused] = useState(false);

  const { control } = useFormContext();

  return (
    <Controller
      rules={rules}
      render={({ field }) => (
        <StyledTextBoxContainer $focused={isFocused}>
          <StyledTextBox
            {...field}
            maxLength={maxLength}
            placeholder={placeholder}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
          <StyledLetterCount>
            {field.value?.length || 0} / {maxLength}
          </StyledLetterCount>
        </StyledTextBoxContainer>
      )}
      name={name}
      control={control}
    />
  );
}

export default FormTextarea;
