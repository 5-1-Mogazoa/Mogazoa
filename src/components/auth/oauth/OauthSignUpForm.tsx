import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  StyledDescription,
  StyledInput,
  StyledInputContainer,
  StyledLabel,
} from "../../common/input/Styled/StyledInput";
import ERROR_MESSAGE from "@/src/constant/ERROR_MESSAGE";
import { StyledPrimaryButton } from "../../common/button/Styled/StyledButton";
import { StyledOauthSignUpButtonContainer, StyledOauthSignUpForm } from "../Styled/StyledAuthForm";
import PLACEHODLER_MESSAGE from "@/src/constant/PLACEHOLDER_MESSAGE";
import { OauthDataType } from "@/src/types/oauth/oauthDataType";
import OauthError from "./OauthError";

export default function OauthSignUpForm() {
  const [isErrorTest, setIsErrorTest] = useState(false); //임시 에러 설정
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<OauthDataType>({ mode: "onBlur" });

  const onSubmit = async (data: any) => {
    //TODO :api 통신 및 닉네임 중복검사 추가 예정
    setError("nickname", { type: "duplicated", message: ERROR_MESSAGE.DUPLICATE_NICKNAME });
  };

  const hasError = Object.values(errors).length;

  return isErrorTest ? (
    <OauthError />
  ) : (
    <StyledOauthSignUpForm onSubmit={handleSubmit(onSubmit)}>
      <StyledInputContainer>
        <StyledLabel htmlFor="signUpNickname">닉네임</StyledLabel>
        <StyledInput
          $isError={errors.nickname ? true : false}
          type="nickname"
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
          id="signUpNickname"
        />
        {errors.nickname ? (
          <StyledDescription $isError>{errors.nickname.message} </StyledDescription>
        ) : (
          <StyledDescription>최대 20자 가능</StyledDescription>
        )}
      </StyledInputContainer>
      <StyledOauthSignUpButtonContainer>
        <StyledPrimaryButton disabled={hasError ? true : false}>가입하기</StyledPrimaryButton>
      </StyledOauthSignUpButtonContainer>
    </StyledOauthSignUpForm>
  );
}
