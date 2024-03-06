import React, { useState } from "react";
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
import { useRouter } from "next/router";
import { AuthDataType, AuthResponseType } from "@/src/types/auth/authDataType";
import { postSignInData } from "@/src/apis/auth";

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

export default function SignInForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<AuthDataType>({ mode: "onBlur" });

  const postMutation = useMutation({
    mutationFn: (data: AuthDataType) => postSignInData(data),
  });

  const onSubmit = async (data: AuthDataType) => {
    try {
      const result = (await postMutation.mutateAsync(data)) as AuthResponseType;

      const accessToken = result.accessToken;
      const userId = result.user.id;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("userId", String(userId));
      router.push("/");
      return;
    } catch (error: any) {
      //TODO : error 타입 지정하기
      if (error.response.data.details.email) {
        setError("email", { type: "failSignIn", message: ERROR_MESSAGE.CHECK_EMAIL });
      } else {
        setError("password", { type: "failSignIn", message: ERROR_MESSAGE.CHECK_PASSWORD });
      }
    }
  };

  const hasError = Object.values(errors).length;

  const [isPWView, setIsPWView] = useState(false);
  const handlePWView = () => setIsPWView(!isPWView);

  return (
    <StyledSignUpForm onSubmit={handleSubmit(onSubmit)}>
      <StyledInputContainer>
        <StyledLabel htmlFor="signInEmailInput">이메일</StyledLabel>
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
          id="signInEmailInput"
        />
        {errors.email && <StyledDescription $isError>{errors.email.message} </StyledDescription>}
      </StyledInputContainer>
      <StyledInputContainer>
        <StyledLabel htmlFor="signInPassword">비밀번호</StyledLabel>
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
            })}
            id="signInPassword"
          />
          <StyledPasswordOnOffButton onClick={handlePWView} $isVisibility={isPWView} />
        </StyledPasswordInputContainer>
        {errors.password && <StyledDescription $isError>{errors.password.message} </StyledDescription>}
      </StyledInputContainer>
      <StyledSignUpButtonContainer>
        <StyledPrimaryButton disabled={hasError ? true : false}>로그인</StyledPrimaryButton>
      </StyledSignUpButtonContainer>
    </StyledSignUpForm>
  );
}
