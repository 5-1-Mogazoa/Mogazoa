import { ReviewImagesType } from "@/src/apis/product/schema";
import { useEffect, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import * as S from "./styled";
import Toast from "../../toast/Toast";
import Image from "next/image";

type newValueType = { id: number } | File;

interface FormImageMultiProps {
  name: string;
  defaultValue?: ReviewImagesType[];
}

function FormImageMulti({ name, defaultValue }: FormImageMultiProps) {
  const [previewImages, setPreviewImages] = useState<string[]>(defaultValue?.map((value) => value.source) || []);
  const [newValue, setNewValue] = useState<newValueType[]>(
    defaultValue?.map((value) => ({
      id: value.id,
    })) || [],
  );
  const [toastIsOpen, setToastIsOpen] = useState(false);

  const isLessThanThree = previewImages.length < 3;
  const mobileStyle = "position: absolute; bottom:2rem; left: 4rem;";
  const tabletStyle = "position: absolute; left: 15rem;";
  const desktopStyle = "position: absolute; left: 1rem;";

  const { control, setValue } = useFormContext();

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    // 기존 파일과 새로운 파일을 합친 총 개수가 3개를 초과하는지 체크
    if (files.length + previewImages.length > 3) {
      setToastIsOpen(true);
      return;
    }

    // 미리보기 이미지 추가
    let file = files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const previewImageUrl = reader.result as string;
      if (previewImageUrl) {
        setPreviewImages((prev) => [...prev, previewImageUrl]);
      }
    };

    setNewValue((prev: newValueType[]) => [...prev, file]);
  };

  const handleDeleteImage = (index: number) => {
    setPreviewImages((prev) => prev.filter((_, i) => i !== index));
    setNewValue((prev) => prev.filter((_, i) => i !== index));
  };

  useEffect(() => {
    setValue(name, newValue);
  }, [setValue, name, newValue]);

  return (
    <S.Container>
      <S.LabelWithPreviews>
        {isLessThanThree && (
          <S.Label htmlFor={name}>
            <Controller
              render={({ field }) => (
                <S.ImageInput
                  id={name}
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    handleFileChange(event);
                  }}
                />
              )}
              name={name}
              control={control}
            />
            <S.Icon />
          </S.Label>
        )}
        {previewImages.map((imageUrl, index) => (
          <S.PreviewImage key={index}>
            <Image fill src={imageUrl} alt={`미리보기 이미지 ${index}`} style={{ objectFit: "cover" }} />
            <S.DeleteButton onClick={() => handleDeleteImage(index)} />
          </S.PreviewImage>
        ))}
      </S.LabelWithPreviews>
      {toastIsOpen && (
        <Toast
          type="error"
          message="사진은 3개까지만 첨부할 수 있어요!"
          setToastIsOpen={setToastIsOpen}
          mobileStyle={mobileStyle}
          tabletStyle={tabletStyle}
          desktopStyle={desktopStyle}
        />
      )}
    </S.Container>
  );
}

export default FormImageMulti;
