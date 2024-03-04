import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import {
  StyledDescription,
  StyledInput,
  StyledInputContainer,
  StyledLabel,
} from "../../common/input/Styled/StyledInput";
import ERROR_MESSAGE from "@/src/constant/ERROR_MESSAGE";
import REGEX from "@/src/constant/REGEX";

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
  } = useForm<SignUpData>();
  const onSubmit = (data: SignUpData) => console.log(data);
  console.log(errors);

  // TODO : email, nickname 중복시 사용할 에러추가 코드 추가 예정
  // setError("email", { type: "duplicated", message: ERROR_MESSAGE.DUPLICATE_EMAIL });
  // setError("nickname", { type: "duplicated", message: ERROR_MESSAGE.DUPLICATE_NICKNAME });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
            max: {
              value: 30,
              message: ERROR_MESSAGE.NICKNAME_MAX_LENGTH,
            },
          })}
          id="signUpNickname"
        />
        {errors.nickname && <StyledDescription $isError>{errors.nickname.message} </StyledDescription>}
      </StyledInputContainer>

      {/* TODO: 제출 버튼 추가 예정 */}
      {/* <input type="submit" /> */}
    </form>
  );
}
