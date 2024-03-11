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
import { useOauth } from "@/src/lib/OauthProvider";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { postOauthSignUpData } from "@/src/apis/oauth";
import { AuthResponseType } from "@/src/types/auth/authDataType";

type mutationParameterType = {
  data: OauthDataType;
  provider: string;
};

export default function OauthSignUpForm() {
  const { idToken } = useOauth();
  const router = useRouter();
  const { provider } = router.query;
  const [isOauthError, setIsOauthErrorTest] = useState(false);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<OauthDataType>({ mode: "onBlur" });

  const postMutation = useMutation({
    mutationFn: ({ data, provider }: mutationParameterType) => postOauthSignUpData(data, provider),
  });

  const onSubmit = async (data: OauthDataType) => {
    const postData = {
      nickname: data.nickname,
      token: idToken || "",
    };
    //TODO :api 통신 및 닉네임 중복검사 추가 예정
    try {
      if (typeof provider === "string") {
        const result = (await postMutation.mutateAsync({ data: postData, provider })) as AuthResponseType;
        const accessToken = result.accessToken;
        const userId = result.user.id;
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("userId", String(userId));
        router.push("/");
        return;
      }
    } catch (error: any) {
      //TODO: error 타입 설정
      if (error.response.data.details?.nickname) {
        setError("nickname", { type: "duplicated", message: ERROR_MESSAGE.DUPLICATE_NICKNAME });
      } else {
        setIsOauthErrorTest(true);
      }
    }
  };

  const hasError = Object.values(errors).length;

  return isOauthError ? (
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
