import { Controller, RegisterOptions, useFormContext } from "react-hook-form";
import { StyledLetterCount, StyledTextBox, StyledTextBoxContainer } from "../Styled/StyledTextBox";
import { useState } from "react";
import Toast from "../../toast/Toast";

interface FormTextareaProps {
  rules?: Pick<RegisterOptions, "required" | "maxLength" | "minLength" | "validate">;
  name: string;
  placeholder: string;
  maxLength?: number;
}

function FormTextarea({ rules, name, placeholder, maxLength = 1000 }: FormTextareaProps) {
  const [isFocused, setIsFocused] = useState(false);

  const mobileStyle = "position: absolute; bottom: 2rem; right: 5rem;";
  const tabletStyle = "position: absolute; bottom: 3rem; right: 14.5rem;";
  const desktopStyle = "position: absolute; right: 16rem";

  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div style={{ position: "relative" }}>
      <Controller
        rules={rules}
        render={({ field }) => (
          <StyledTextBoxContainer $focused={isFocused}>
            <StyledTextBox
              {...field}
              maxLength={maxLength}
              placeholder={placeholder}
              onFocus={() => setIsFocused(true)}
              onBlur={() => {
                field.onBlur();
                setIsFocused(false);
              }}
            />
            <StyledLetterCount>
              {field.value?.length || 0} / {maxLength}
            </StyledLetterCount>
          </StyledTextBoxContainer>
        )}
        name={name}
        control={control}
      />
      {errors[name] && (
        <Toast
          type="error"
          message={(errors[name] as any)?.message}
          mobileStyle={mobileStyle}
          tabletStyle={tabletStyle}
          desktopStyle={desktopStyle}
        />
      )}
    </div>
  );
}

export default FormTextarea;
