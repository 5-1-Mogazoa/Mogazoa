import { Controller, useFormContext } from "react-hook-form";
import * as S from "./styled";
import { useEffect, useState } from "react";

interface FormImageProps {
  name: string;
  defaultValue?: string;
}

function FormImage({ name, defaultValue }: FormImageProps) {
  const [previewImage, setPreviewImage] = useState<string | undefined>(defaultValue);
  const { control, setValue } = useFormContext();

  const handleFileChange = async (newFile: File) => {
    let reader = new FileReader();
    reader.readAsDataURL(newFile);
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
        render={({ field: { value, ...field } }) => (
          <S.ImageInput
            {...field}
            type="file"
            id={name}
            accept="image/*"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              const files = event.target.files;
              if (!files || files.length === 0) return;

              const newFile = files[0];
              setValue(name, newFile);
              handleFileChange(newFile);
            }}
          />
        )}
        name={name}
        control={control}
      />
    </S.Label>
  );
}

export default FormImage;
