import { Controller, useFormContext } from "react-hook-form";
import * as S from "./styled";
import { ChangeEvent, useEffect, useState } from "react";

interface FormImageInputProps {
  name: string;
  defaultValue?: string;
}

function FormImageInput({ name, defaultValue }: FormImageInputProps) {
  const [previewImage, setPreviewImage] = useState<string | undefined>(defaultValue);

  const {
    control,
    formState: { errors },
  } = useFormContext();

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (!fileList || fileList.length === 0) return;

    let reader = new FileReader();
    let file = fileList[0];
    reader.readAsDataURL(file);
    reader.onload = () => {
      const previewImageUrl = reader.result as string;
      if (previewImageUrl) {
        setPreviewImage(previewImageUrl);
      }
    };
  };

  useEffect(() => {
    setPreviewImage(defaultValue);
  }, [defaultValue]);

  return (
    <S.Label htmlFor={name} $previewImage={previewImage}>
      <Controller
        name={name}
        control={control}
        render={({ field: { value, onChange, ...field } }) => (
          <S.ImageInput
            id={name}
            type="file"
            value={value?.fileName}
            accept="image/*"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              const files = event.target.files;
              if (!files || files.length === 0) return;

              const newValue = files[0];
              onChange(newValue);
              handleFileChange(event);
            }}
            {...field}
          />
        )}
      />
      {!previewImage && <S.Icon />}
    </S.Label>
  );
}

export default FormImageInput;
