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
import { postSignInData, postToken } from "@/src/apis/auth";
import { StyledSignInButtonContainer, StyledSignInForm } from "../Styled/StyledAuthForm";
import PLACEHODLER_MESSAGE from "@/src/constant/PLACEHOLDER_MESSAGE";

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
      await postToken(accessToken);
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
    <StyledSignInForm onSubmit={handleSubmit(onSubmit)}>
      <StyledInputContainer>
        <StyledLabel htmlFor="signInEmailInput">이메일</StyledLabel>
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
            placeholder={PLACEHODLER_MESSAGE.REQUIRED_PASSWORD}
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
      <StyledSignInButtonContainer>
        <StyledPrimaryButton disabled={hasError ? true : false}>로그인</StyledPrimaryButton>
      </StyledSignInButtonContainer>
    </StyledSignInForm>
  );
}
