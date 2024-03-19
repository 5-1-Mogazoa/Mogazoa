// import { Controller, useFormContext } from "react-hook-form";
// import * as S from "./styled";
// import Image from "next/image";
// import { ChangeEvent, useState } from "react";
// import { ReviewImagesType } from "@/src/apis/product/schema";

// interface FormMultiImageInputProps {
//   name: string;
//   defaultValue?: ReviewImagesType[] | undefined;
// }

// function FormMultiImageInput({ name, defaultValue }: FormMultiImageInputProps) {
//   const [previewImages, setPreviewImages] = useState<string[]>([]);

//   const {
//     control,
//     formState: { errors },
//   } = useFormContext();

//   const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
//     const fileList = event.target.files;
//     if (!fileList || fileList.length === 0) return;

//     // 미리보기 이미지 추가
//     let reader = new FileReader();
//     let file = fileList[0];
//     reader.readAsDataURL(file);
//     reader.onloadend = () => {
//       const previewImageUrl = reader.result as string;
//       if (previewImageUrl) {
//         setPreviewImages([...previewImages, previewImageUrl]);
//       }
//     };
//   };

//   const handleDeleteImage = (index: number) => {
//     setPreviewImages((prevImages) => prevImages.filter((_, i) => i !== index));
//   };

//   return (
//     <S.Container>
//       <S.Label htmlFor={name}>
//         <Controller
//           name={name}
//           control={control}
//           render={({ field: { value, onChange, ...field } }) => (
//             <S.ImageInput
//               id={name}
//               type="file"
//               value={value?.fileName}
//               accept="image/*"
//               multiple
//               onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
//                 const files = event.target.files;
//                 if (!files) return;

//                 const fileArray = Array.from(files);
//                 const newValue = value ? [...value, ...fileArray] : fileArray;
//                 onChange(newValue);
//                 handleFileChange(event);
//               }}
//               {...field}
//             />
//           )}
//         />
//         <S.Icon />
//       </S.Label>
//       {previewImages.map((imageUrl, index) => (
//         <S.PreviewImage key={index}>
//           <Image fill src={imageUrl} alt={imageUrl} />
//           <S.DeleteButton onClick={() => handleDeleteImage(index)} />
//         </S.PreviewImage>
//       ))}
//     </S.Container>
//   );
// }

// export default FormMultiImageInput;

// 리뷰 생성 삭제 합치기

// import { Controller, useFormContext } from "react-hook-form";
// import * as S from "./styled";
// import Image from "next/image";
// import { ChangeEvent, useEffect, useState } from "react";
// import { ReviewImagesType } from "@/src/apis/product/schema";

// interface FormMultiImageInputProps {
//   type: "post" | "edit";
//   name: string;
//   defaultValue?: ReviewImagesType[] | undefined;
// }

// function FormMultiImageInput({ type, name, defaultValue }: FormMultiImageInputProps) {
//   const [previewImages, setPreviewImages] = useState<string[]>([]);
//   const [defaultImageIds, setDefaultImageIds] = useState<{ id: number }[]>([]);

//   const {
//     control,
//     formState: { errors },
//   } = useFormContext();

//   const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
//     const fileList = event.target.files;
//     if (!fileList || fileList.length === 0) return;

//     // 미리보기 이미지 추가
//     let reader = new FileReader();
//     let file = fileList[0];
//     reader.readAsDataURL(file);
//     reader.onloadend = () => {
//       const previewImageUrl = reader.result as string;
//       if (previewImageUrl) {
//         setPreviewImages([...previewImages, previewImageUrl]);
//       }
//     };
//   };

//   const handleDeleteImage = (index: number) => {
//     setPreviewImages((prevImages) => prevImages.filter((_, i) => i !== index));
//     // setDefaultImageIds((prevIds) => prevIds.filter((_, i) => i !== index));
//   };

//   useEffect(() => {
//     if (defaultValue) {
//       const defaultPreviewSources = defaultValue.map((value) => value.source);
//       setPreviewImages(defaultPreviewSources);

//       const defaultIds = defaultValue.map((value) => ({ id: value.id }));
//       setDefaultImageIds(defaultIds);
//     }
//   }, [defaultValue]);

//   return (
//     <S.Container>
//       <S.Label htmlFor={name}>
//         <Controller
//           name={name}
//           control={control}
//           render={({ field: { value, onChange, ...field } }) => (
//             <S.ImageInput
//               id={name}
//               type="file"
//               value={value?.fileName}
//               accept="image/*"
//               multiple
//               onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
//                 const files = event.target.files;
//                 if (!files) return;

//                 const fileArray = Array.from(files);
//                 let newValue = value ? [...value, ...fileArray] : fileArray;

//                 if (defaultImageIds.length !== 0) {
//                   newValue = [...newValue, ...defaultImageIds];
//                 }

//                 onChange(newValue);
//                 handleFileChange(event);
//               }}
//               {...field}
//             />
//           )}
//         />
//         <S.Icon />
//       </S.Label>
//       {previewImages.map((imageUrl, index) => (
//         <S.PreviewImage key={index}>
//           <Image fill src={imageUrl} alt={imageUrl} />
//           <S.DeleteButton onClick={() => handleDeleteImage(index)} />
//         </S.PreviewImage>
//       ))}
//     </S.Container>
//   );
// }

// export default FormMultiImageInput;

// 수정3

// 리뷰 생성 삭제 합치기

import { Controller, useFormContext } from "react-hook-form";
import * as S from "./styled";
import Image from "next/image";
import { ChangeEvent, useEffect, useState } from "react";
import { ReviewImagesType } from "@/src/apis/product/schema";

interface FormMultiImageInputProps {
  name: string;
  defaultValue?: ReviewImagesType[] | undefined;
}

function FormMultiImageInput({ name, defaultValue }: FormMultiImageInputProps) {
  const [newValue, setNewValue] = useState<any>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  const {
    control,
    formState: { errors },
    setValue,
  } = useFormContext();

  useEffect(() => {
    if (defaultValue) {
      const defaultPreviewSources = defaultValue.map((value) => value.source);
      setPreviewImages(defaultPreviewSources);

      const defaultIds = defaultValue.map((value) => {
        return { id: value.id };
      });
      setNewValue(defaultIds);
    }
  }, [defaultValue]);

  useEffect(() => {
    setValue(name, newValue);
  }, [newValue, name, setValue]);

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (!fileList || fileList.length === 0) return;

    // 기존 파일과 새로운 파일을 합친 총 개수가 3개를 초과하는지 체크
    if (fileList.length + previewImages.length > 3) {
      alert("리뷰 사진은 3개까지만 첨부할 수 있어요!");
      return;
    }

    // 미리보기 이미지 추가
    let reader = new FileReader();
    let file = fileList[0];
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const previewImageUrl = reader.result as string;
      if (previewImageUrl) {
        setPreviewImages((prev) => [...prev, previewImageUrl]);
      }
    };
    setNewValue((prev) => [...prev, file]);
  };

  const handleDeleteImage = (index: number) => {
    setPreviewImages((prevImages) => prevImages.filter((_, i) => i !== index));
    setNewValue((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <S.Container>
      <S.LabelWithPreviews>
        <S.Label htmlFor={name}>
          <Controller
            name={name}
            control={control}
            render={({ field: { value, onChange, ...field } }) => (
              <S.ImageInput
                id={name}
                type="file"
                accept="image/*"
                multiple
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
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
      </S.LabelWithPreviews>
    </S.Container>
  );
}

export default FormMultiImageInput;
