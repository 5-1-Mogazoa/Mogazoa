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

type SignUpData = {
  email: String;
  nickname: string;
  password: string;
  passwordConfirmation: string;
};

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<SignUpData>({ mode: "onBlur" });
  const onSubmit = (data: SignUpData) => {
    if (data.password !== data.passwordConfirmation) {
      setError("passwordConfirmation", { type: "matched", message: ERROR_MESSAGE.NOT_MATCH_PASSWORD });
      return;
    }
    console.log(data);
  };
  const hasError = Object.values(errors).length;

  const [isPWView, setIsPWView] = useState(false);
  const [isPWConfirmationView, setIsPWConfirmationView] = useState(false);
  const handlePWView = () => setIsPWView(!isPWView);
  const handlePWConfirmationView = () => setIsPWConfirmationView(!isPWConfirmationView);

  // TODO : email, nickname 중복시 사용할 에러추가 코드 추가 예정
  // setError("email", { type: "duplicated", message: ERROR_MESSAGE.DUPLICATE_EMAIL });
  // setError("nickname", { type: "duplicated", message: ERROR_MESSAGE.DUPLICATE_NICKNAME });

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
      {/* TODO: 제출 버튼 추가 예정 */}
      <StyledSignUpButtonContainer>
        <StyledPrimaryButton disabled={hasError ? true : false}>가입하기</StyledPrimaryButton>
      </StyledSignUpButtonContainer>
    </StyledSignUpForm>
  );
}
