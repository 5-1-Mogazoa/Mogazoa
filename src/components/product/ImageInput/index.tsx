import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import * as S from "./styled";
import { StyledEmptyImageIcon, StyledImageBox, StyledImageInput } from "../../common/input/Styled/StyledImageInput";
import Image from "next/image";
import ERROR_MESSAGE from "../../../constant/ERROR_MESSAGE";
import { FieldValues, UseFormRegister } from "react-hook-form";

type ImageInputProps = {
  value?: string;
  register: UseFormRegister<FieldValues>;
  // onChange: Dispatch<SetStateAction<File | ImageObject | undefined>>;
};

function ImageInput({ register, value }: ImageInputProps) {
  const [postImages, setPostImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    let reader = new FileReader();

    const fileList = event.target.files;
    if (fileList && fileList.length > 0) {
      let file = fileList[0];
      setPostImages([...postImages, file]);
      // setValue("profileImageUrl", file);
      reader.readAsDataURL(file);
    }

    reader.onloadend = () => {
      const previewImageUrl = reader.result;
      if (previewImageUrl) {
        setPreviewImages([...previewImages, previewImageUrl]);
      }
      console.log(previewImageUrl);
    };
  };

  return (
    <S.Container>
      <S.Label htmlFor="images">
        <S.ImageInput
          type="file"
          id="images"
          {...register("images", {
            required: {
              value: true,
              message: ERROR_MESSAGE.REQUIRED_REVIEW_IMAGE,
            },
          })}
          accept="image/*"
          onChange={handleFileChange}
        />
        <S.Icon />
      </S.Label>
      {previewImages.map((imageUrl, index) => (
        <S.PreviewImage key={index}>
          <Image fill src={imageUrl} alt={imageUrl} />
          <S.DeleteButton />
        </S.PreviewImage>
      ))}
    </S.Container>
  );
}

export default ImageInput;

//

//

{
  /* <button type="button">
            <img alt="업로드 이미지 제거" src="src/assets/icon-close-button.svg" />
          </button> */
}

// const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
//   let fileList = event.target.files;
//   if (fileList && fileList.length > 0) {
//     let file = fileList[0];
//     // 여기서 file을 활용하여 이미지를 선택하는 창을 띄우거나 이미지를 처리하는 로직을 추가할 수 있습니다.
//     // 예를 들어, file을 Blob으로 변환한 후 URL.createObjectURL을 사용하여 URL을 생성하고, 해당 URL을 previewImg에 추가할 수 있습니다.
//     let blob = file.slice();
//     let url = URL.createObjectURL(blob);
//     setPreviewImg([...previewImg, url]);
//   }
// };

// function uploadFile(e) {
//   let fileArr = e.target.files;
//   setPostImg(Array.from(fileArr));

//   console.log("클릭");

//   let fileUrl = [];
//   for (let i = 0; i < fileArr.length; i++) {
//     let fileRead = new FileReader();
//     fileRead.onload = function () {
//       fileUrl[i] = fileRead.result;
//       setPreviewImg([...fileUrl]);
//       fileRead.readAsDataURL(fileArr[i]);
//     };
//   }
// }

// const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
//   let reader = new FileReader();

//   const fileList = event.target.files;
//   if (fileList && fileList.length > 0) {
//     let file = fileList[0];
//     reader.readAsDataURL(file);
//     setPostImages([...postImaxges, file]);
//   }

//   reader.onloadend = () => {
//     const previewImageUrl = reader.result;

//     if (previewImageUrl) {
//       setPreviewImages([...previewImages, previewImageUrl]);
//     }
//     console.log(previewImages);
//   };
// };

// const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
//   let reader = new FileReader();

//   const fileList = event.target.files;
//   if (fileList && fileList.length > 0) {
//     let file = fileList[0];
//     // setValue("profileImageUrl", file);
//     setPostImages([...postImages, file]);
//     console.log(file);

//     const imageUrl = URL.createObjectURL(file);
//     setPreviewImages([...previewImages, imageUrl]);
//     console.log(imageUrl);
//   }
// };

// const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
//   let reader = new FileReader();

//   const fileList = event.target.files;
//   if (fileList && fileList.length > 0) {
//     let file = fileList[0];
//     setPostImages([...postImages, file]);
//     // setValue("profileImageUrl", file);
//     reader.readAsDataURL(file);
//   }

//   reader.onloadend = () => {
//     const previewImageUrl = reader.result;
//     if (previewImageUrl) {
//       setPreviewImages([...previewImages, previewImageUrl]);
//     }
//     console.log(previewImageUrl);
//   };
// };
