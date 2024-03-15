import { ChangeEvent, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import * as S from "@/src/components/common/modal/StyledModal";
import Image from "next/image";
import { FieldValues, useForm } from "react-hook-form";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getMyData, patchMyData } from "@/src/apis/user";
import { UserPatchDataType } from "@/src/types/user/userDataType";
import { StyledLabel } from "../common/input/Styled/StyledInput";
import PLACEHODLER_MESSAGE from "@/src/constant/PLACEHOLDER_MESSAGE";
import ERROR_MESSAGE from "@/src/constant/ERROR_MESSAGE";
import { StyledEmptyImageIcon, StyledImageBox, StyledImageInput } from "../common/input/Styled/StyledImageInput";
import { API_ROUTE } from "@/src/routes";
import { apiCall } from "@/src/lib/axiosInstance";
import {
  StyledImageContainer,
  StyledProfileDescription,
  StyledProfileForm,
  StyledProfileInput,
  StyledProfileLetterCount,
  StyledProfilePrimaryButton,
  StyledProfileTextBox,
  StyledProfileTextBoxContainer,
} from "./Styled/StyledProfileEdit";

interface ModalProps {
  setIsOpen: (value: boolean) => void;
}

// hasOptionsbutton 대신 modalType으로 review는 헤더부분 다르게 함
export default function ProfileEditModal({ setIsOpen }: ModalProps) {
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);

  const { data: myData } = useQuery<UserPatchDataType>({
    queryKey: ["myData"],
    queryFn: () => getMyData() as Promise<UserPatchDataType>,
  });
  const postMutation = useMutation({
    mutationFn: (data: UserPatchDataType) => patchMyData(data),
  });

  const [textLength, setTextLength] = useState(myData?.description.length);
  const [imageURL, setImageURL] = useState("");

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    formState: { errors },
  } = useForm<UserPatchDataType>({
    mode: "onSubmit",
  });

  useEffect(() => {
    if (myData) {
      setValue("nickname", myData.nickname);
      setValue("image", myData.image);
      setValue("description", myData.description);
      setImageURL(myData.image);
    }
  }, [myData]);
  const stopEventBubbing = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleTextLength = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextLength(e.target.value.length);
  };

  const handleClose = () => setIsOpen(false);
  const onSubmit = async (data: UserPatchDataType) => {
    if (!myData?.image) {
      data.image = `${location.origin}/icons/default_profile.svg`;
    }
    try {
      await postMutation.mutateAsync(data);
    } catch (error: any) {
      //TODO: error 타입지정
      console.error(error);
      if (error.response.data.message === ERROR_MESSAGE.DUPLICATE_NICKNAME) {
        setError("nickname", { type: "nickname", message: ERROR_MESSAGE.DUPLICATE_NICKNAME });
        return;
      }
    }
    handleClose();
  };

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      (async () => {
        //TODO: type 설정
        const postImage = async (imageFile: File) => {
          const formData = new FormData();
          formData.append("image", imageFile, "img");

          const requestProps = {
            method: "post",
            endPoint: API_ROUTE.IMAGE_UPLOAD,
            data: formData,
          };

          return await apiCall(requestProps);
        };

        const url = await postImage(e.target.files[0]);
        setImageURL(url.url as string);
        setValue("image", url.url);
      })();
    }
  };

  useEffect(() => {
    setPortalRoot(document.body);
  }, []);

  const hasError = Object.values(errors).length;

  return (
    portalRoot &&
    createPortal(
      <S.Background onClick={handleClose}>
        <S.Container $isSmall={true} onClick={stopEventBubbing}>
          <S.Header>
            <S.Title>프로필편집</S.Title>
            <S.CloseButton onClick={handleClose}>
              <Image fill src="/icons/closeSvgr.svg" alt="닫기 아이콘 이미지" />
            </S.CloseButton>
          </S.Header>
          <StyledProfileForm onSubmit={handleSubmit(onSubmit)}>
            <StyledImageContainer>
              <StyledLabel htmlFor="image">
                <StyledImageBox $imageURL={imageURL}>{!imageURL && <StyledEmptyImageIcon />}</StyledImageBox>
              </StyledLabel>
              <StyledImageInput onChange={handleImageUpload} id="image" type="file" />
            </StyledImageContainer>
            <StyledProfileInput
              $isError={errors.nickname ? true : false}
              type="text"
              placeholder={PLACEHODLER_MESSAGE.REQUIRED_NICKNAME}
              {...register("nickname", {
                required: {
                  value: true,
                  message: ERROR_MESSAGE.REQUIRED_NICKNAME,
                },
                maxLength: {
                  value: 20,
                  message: ERROR_MESSAGE.NICKNAME_MAX_LENGTH,
                },
              })}
              id="nickname"
            />
            {errors.nickname && (
              <StyledProfileDescription $isError>{errors.nickname.message} </StyledProfileDescription>
            )}
            <StyledProfileTextBoxContainer>
              <StyledProfileTextBox
                defaultValue={myData?.description}
                placeholder={"프로필을 입력해 주세요"}
                {...register("description")}
                id="description"
                maxLength={300}
                onChange={handleTextLength}
              />
              <StyledProfileLetterCount>{textLength || 0} / 300</StyledProfileLetterCount>
            </StyledProfileTextBoxContainer>
            <StyledProfilePrimaryButton disabled={hasError ? true : false}>저장하기</StyledProfilePrimaryButton>
          </StyledProfileForm>
        </S.Container>
      </S.Background>,
      document.body,
    )
  );
}
