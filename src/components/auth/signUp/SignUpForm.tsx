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
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { AuthDataType, AuthResponseType } from "@/src/types/auth/authDataType";
import { postSignUpData, postToken } from "@/src/apis/auth";
import { StyledSignUpButtonContainer, StyledSignUpForm } from "../Styled/StyledAuthForm";
import PLACEHODLER_MESSAGE from "@/src/constant/PLACEHOLDER_MESSAGE";

export default function SignUpForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<AuthDataType>({ mode: "onBlur" });

  const postMutation = useMutation({
    mutationFn: (data: AuthDataType) => postSignUpData(data),
  });

  const onSubmit = async (data: AuthDataType) => {
    if (data.password !== data.passwordConfirmation) {
      setError("passwordConfirmation", { type: "matched", message: ERROR_MESSAGE.NOT_MATCH_PASSWORD });
      return;
    }
    try {
      const result = (await postMutation.mutateAsync(data)) as AuthResponseType;

      const accessToken = result.accessToken;
      const userId = result.user.id;
      await postToken(accessToken);
      //TODO: localStorage accessToken 설정 삭제 예정
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("userId", String(userId));
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
          placeholder={PLACEHODLER_MESSAGE.REQUIRED_EMAIL}
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
      <StyledInputContainer>
        <StyledLabel htmlFor="signUpPassword">비밀번호</StyledLabel>
        <StyledPasswordInputContainer>
          <StyledInput
            $isError={errors.password ? true : false}
            type={isPWView ? "text" : "password"}
            placeholder={PLACEHODLER_MESSAGE.REQUIRED_PASSWORD}
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
        {errors.password ? (
          <StyledDescription $isError>{errors.password.message}</StyledDescription>
        ) : (
          <StyledDescription>최소 8자 이상</StyledDescription>
        )}
      </StyledInputContainer>
      <StyledInputContainer>
        <StyledLabel htmlFor="signUpPasswordConfirmation">비밀번호 확인</StyledLabel>
        <StyledPasswordInputContainer>
          <StyledInput
            $isError={errors.passwordConfirmation ? true : false}
            type={isPWConfirmationView ? "text" : "password"}
            placeholder={PLACEHODLER_MESSAGE.REQUIRED_PASSWORD_CONFIRMATION}
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
