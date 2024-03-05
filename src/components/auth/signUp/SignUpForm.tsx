import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  StyledDescription,
  StyledInput,
  StyledInputContainer,
  StyledLabel,
  StyledPasswordInputContainer,
  StyledPasswordOnOffButton,
} from "../../common/input/Styled/StyledInput";
import ERROR_MESSAGE from "@/src/constant/ERROR_MESSAGE";
import REGEX from "@/src/constant/REGEX";
import { StyledPrimaryButton } from "../../common/button/Styled/StyledButton";
import styled from "styled-components";
import { useMutation } from "@tanstack/react-query";
import { postSignUpData } from "@/src/apis/auth/signUp";
import SignUpData from "@/src/types/auth/signUp/signUpData";
import { useRouter } from "next/router";
import SignUpResponseType from "@/src/apis/auth/signUp/schema";
import { getAccessToken } from "@/src/utils/getCookieData";

const StyledSignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 335px;
  gap: 30px;
  padding-top: 30px;
  margin: 0 auto;

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    padding-top: 180px;
    width: 440px;
    gap: 40px;
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    padding-top: 90px;
    width: 640px;
  }
`;

const StyledSignUpButtonContainer = styled.div`
  margin-top: 126px;
  width: 335px;
  height: 50px;

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    margin-top: 20px;
    width: 440px;
    height: 55px;
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    width: 640px;
    height: 65px;
  }
`;

export default function SignUpForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<SignUpData>({ mode: "onBlur" });

  const postMutation = useMutation({
    mutationFn: (data: SignUpData) => postSignUpData(data),
  });

  const onSubmit = async (data: SignUpData) => {
    if (data.password !== data.passwordConfirmation) {
      setError("passwordConfirmation", { type: "matched", message: ERROR_MESSAGE.NOT_MATCH_PASSWORD });
      return;
    }
    try {
      const result = (await postMutation.mutateAsync(data)) as SignUpResponseType;

      const expirationDate = new Date();
      expirationDate.setHours(expirationDate.getHours() + 1);

      const accessToken = result.accessToken;
      const userId = result.user.id;
      document.cookie = `accessToken=${accessToken}; expires=${expirationDate.toUTCString()}; path=/; HttpOnly`;
      document.cookie = `userId=${userId}; expires=${expirationDate.toUTCString()}; path=/; HttpOnly`;
      router.push("/");
      return;
    } catch (error: any) {
      //TODO : error 타입 지정하기
      if (error.response.data.details.email) {
        setError("email", { type: "duplicated", message: ERROR_MESSAGE.DUPLICATE_EMAIL });
      } else if (error.response.data.details.nickname) {
        setError("nickname", { type: "duplicated", message: ERROR_MESSAGE.DUPLICATE_NICKNAME });
      }
    }
  };

  const hasError = Object.values(errors).length;

  const [isPWView, setIsPWView] = useState(false);
  const [isPWConfirmationView, setIsPWConfirmationView] = useState(false);
  const handlePWView = () => setIsPWView(!isPWView);
  const handlePWConfirmationView = () => setIsPWConfirmationView(!isPWConfirmationView);

  return (
    <StyledSignUpForm onSubmit={handleSubmit(onSubmit)}>
      <StyledInputContainer>
        <StyledLabel htmlFor="signUpEmailInput">이메일</StyledLabel>
        <StyledInput
          $isError={errors.email ? true : false}
          type="email"
          placeholder="이메일을 입력해 주세요"
          {...register("email", {
            required: {
              value: true,
              message: ERROR_MESSAGE.REQUIRED_EMAIL,
            },
            pattern: {
              value: REGEX.EMAIL,
              message: ERROR_MESSAGE.REQUIRED_EMAIL_FORMAT,
            },
          })}
          id="signUpEmailInput"
        />
        {errors.email && <StyledDescription $isError>{errors.email.message} </StyledDescription>}
      </StyledInputContainer>
      <StyledInputContainer>
        <StyledLabel htmlFor="signUpNickname">닉네임</StyledLabel>
        <StyledInput
          $isError={errors.nickname ? true : false}
          type="nickname"
          placeholder="닉네임을 입력해 주세요"
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
        {errors.nickname && <StyledDescription $isError>{errors.nickname.message} </StyledDescription>}
      </StyledInputContainer>
      <StyledInputContainer>
        <StyledLabel htmlFor="signUpPassword">비밀번호</StyledLabel>
        <StyledPasswordInputContainer>
          <StyledInput
            $isError={errors.password ? true : false}
            type={isPWView ? "text" : "password"}
            placeholder="비밀번호를 입력해 주세요"
            {...register("password", {
              required: {
                value: true,
                message: ERROR_MESSAGE.REQUIRED_PASSWORD,
              },
              pattern: {
                value: REGEX.PASSWORD,
                message: ERROR_MESSAGE.REQUIRED_PASSWORD_FORMAT,
              },
              minLength: {
                value: 8,
                message: ERROR_MESSAGE.PASSWORD_MIN_LENGTH,
              },
            })}
            id="signUpPassword"
          />
          <StyledPasswordOnOffButton onClick={handlePWView} $isVisibility={isPWView} />
        </StyledPasswordInputContainer>
        {errors.password && <StyledDescription $isError>{errors.password.message} </StyledDescription>}
      </StyledInputContainer>
      <StyledInputContainer>
        <StyledLabel htmlFor="signUpPasswordConfirmation">비밀번호 확인</StyledLabel>
        <StyledPasswordInputContainer>
          <StyledInput
            $isError={errors.passwordConfirmation ? true : false}
            type={isPWConfirmationView ? "text" : "password"}
            placeholder="비밀번호를 한번 더 입력해 주세요"
            {...register("passwordConfirmation", {
              required: {
                value: true,
                message: ERROR_MESSAGE.REQUIRED_PW_COMFIRMATION,
              },
            })}
            id="signUpPasswordConfirmation"
          />
          <StyledPasswordOnOffButton onClick={handlePWConfirmationView} $isVisibility={isPWConfirmationView} />
        </StyledPasswordInputContainer>
        {errors.passwordConfirmation && (
          <StyledDescription $isError>{errors.passwordConfirmation.message} </StyledDescription>
        )}
      </StyledInputContainer>
      <StyledSignUpButtonContainer>
        <StyledPrimaryButton disabled={hasError ? true : false}>가입하기</StyledPrimaryButton>
      </StyledSignUpButtonContainer>
    </StyledSignUpForm>
  );
}
