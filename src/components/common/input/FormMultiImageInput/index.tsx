import { Controller, useFormContext } from "react-hook-form";
import * as S from "./styled";
import Image from "next/image";
import { ChangeEvent, useState } from "react";

interface FormMultiImageInputProps {
  name: string;
  defaultValue?: string[] | undefined;
}

function FormMultiImageInput({ name, defaultValue }: FormMultiImageInputProps) {
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  const {
    control,
    formState: { errors },
  } = useFormContext();

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (!fileList || fileList.length === 0) return;

    // 미리보기 이미지 추가
    let reader = new FileReader();
    let file = fileList[0];
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const previewImageUrl = reader.result as string;
      if (previewImageUrl) {
        setPreviewImages([...previewImages, previewImageUrl]);
      }
    };
  };

  const handleDeleteImage = (index: number) => {
    setPreviewImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  return (
    <S.Container>
      <S.Label htmlFor={name}>
        <Controller
          name={name}
          control={control}
          render={({ field: { value, onChange, ...field } }) => (
            <S.ImageInput
              id={name}
              type="file"
              value={value?.fileName}
              accept="image/*"
              multiple
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const files = event.target.files;
                if (!files) return;

                const fileArray = Array.from(files);
                const newValue = value ? [...value, ...fileArray] : fileArray;
                onChange(newValue);
                handleFileChange(event);
              }}
              {...field}
            />
          )}
        />
        <S.Icon />
      </S.Label>
      {previewImages.map((imageUrl, index) => (
        <S.PreviewImage key={index}>
          <Image fill src={imageUrl} alt={imageUrl} />
          <S.DeleteButton onClick={() => handleDeleteImage(index)} />
        </S.PreviewImage>
      ))}
    </S.Container>
  );
}

export default FormMultiImageInput;
