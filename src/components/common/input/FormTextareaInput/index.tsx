// import { Controller, RegisterOptions, useFormContext } from "react-hook-form";
// import { StyledTextBox } from "../Styled/StyledTextBox";
// import { useEffect, useState } from "react";

// export interface FormTextareaInputProps {
//   key?: number;
//   name: string;
//   rules?: Pick<RegisterOptions, "required" | "maxLength" | "minLength" | "validate">;
//   placeholder?: string;
//   defaultValue?: string;
// }

// function FormTextareaInput({ key, name, rules, placeholder, defaultValue }: FormTextareaInputProps) {
//   const [newValue, setNewValue] = useState(defaultValue);

//   const {
//     control,
//     formState: { errors },
//   } = useFormContext();

//   useEffect(() => {
//     setNewValue(defaultValue);
//   }, [defaultValue]);

//   return (
//     <Controller
//       key={key}
//       name={name}
//       control={control}
//       rules={rules}
//       defaultValue={defaultValue || ""}
//       render={({ field }) => (
//         <StyledTextBox
//           value={newValue}
//           onChange={(event) => {
//             field.onChange(event);
//             setNewValue(event.target.value);
//           }}
//           placeholder={placeholder}
//         />
//       )}
//     />
//   );
// }

// export default FormTextareaInput;

//
import { Controller, RegisterOptions, useFormContext } from "react-hook-form";
import { StyledTextBox } from "../Styled/StyledTextBox";
import { useEffect, useState } from "react";

export interface FormTextareaInputProps {
  key?: number;
  name: string;
  rules?: Pick<RegisterOptions, "required" | "maxLength" | "minLength" | "validate">;
  placeholder?: string;
  defaultValue?: string;
}

function FormTextareaInput({ key, name, rules, placeholder, defaultValue }: FormTextareaInputProps) {
  const [newValue, setNewValue] = useState(defaultValue);

  const {
    control,
    formState: { errors },
  } = useFormContext();

  useEffect(() => {
    setNewValue(defaultValue);
  }, [defaultValue]);

  return (
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
            field.onChange(event);
            setNewValue(event.target.value);
          }}
          placeholder={placeholder}
        />
      )}
    />
  );
}

export default FormTextareaInput;
