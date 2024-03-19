import { Controller, RegisterOptions, useFormContext } from "react-hook-form";
import { StyledTextBox } from "../Styled/StyledTextBox";
import React, { useEffect, useState } from "react";
import * as S from "./styled";

export interface FormTextareaInputProps {
  key?: number;
  name: string;
  rules?: Pick<RegisterOptions, "required" | "maxLength" | "minLength" | "validate">;
  placeholder?: string;
  defaultValue?: string;
}

function FormTextareaInput({ key, name, rules, placeholder, defaultValue }: FormTextareaInputProps) {
  const [newValue, setNewValue] = useState(defaultValue);
  const [characterCount, setCharactterCount] = useState(defaultValue ? defaultValue.length : 0);

  const {
    control,
    formState: { errors },
  } = useFormContext();

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = event.target.value;
    // 300자까지만 입력 가능
    if (inputValue.length <= 300) {
      setNewValue(inputValue);
      setCharactterCount(inputValue.length);
    }
  };

  useEffect(() => {
    setNewValue(defaultValue);
  }, [defaultValue]);

  return (
    <S.Container>
      <Controller
        key={key}
        name={name}
        control={control}
        rules={rules}
        defaultValue={defaultValue || ""}
        render={({ field }) => (
          <StyledTextBox
            value={newValue}
            onChange={(event) => {
              handleInputChange(event);
              field.onChange(event);
            }}
            placeholder={placeholder}
          />
        )}
      />
      <S.Counter>{characterCount} / 300</S.Counter>
    </S.Container>
  );
}

export default FormTextareaInput;
