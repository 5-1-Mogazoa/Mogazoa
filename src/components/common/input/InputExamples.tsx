import { useState } from "react";
import { StyledEmptyImageIcon, StyledImageBox, StyledImageInput } from "./Styled/StyledImageInput";
import { StyledDescription, StyledInput, StyledInputContainer, StyledLabel } from "./Styled/StyledInput";
import { StyledProductNameInput } from "./Styled/StyledProductnameInput";
import { StyledLetterCount, StyledTextBox, StyledTextBoxContainer } from "./Styled/StyledTextBox";

//닉네임 예시입니다.
function NicknameInput() {
  return (
    <StyledInputContainer>
      <StyledLabel htmlFor="">닉네임</StyledLabel>
      <StyledInput id="" placeholder="닉네임을 입력해 주세요" />
      <StyledDescription>최대 10자 가능</StyledDescription>
    </StyledInputContainer>
  );
}

// 상품명
function ProductNameInput() {
  return <StyledProductNameInput placeholder="상품명" />;
}

// 리뷰 또는 프로필 설명
function TextBox() {
  return (
    <StyledTextBoxContainer>
      <StyledTextBox placeholder="" />
      <StyledLetterCount>2 / 300</StyledLetterCount>
    </StyledTextBoxContainer>
  );
}

// 이미지 등록 Input 예시
function ImageInput() {
  const [imageURL, setImageURL] = useState("");

  return (
    <>
      <label htmlFor="image">
        <StyledImageBox $imageURL={imageURL}>{!imageURL && <StyledEmptyImageIcon />}</StyledImageBox>
      </label>
      <StyledImageInput id="image" type="file" />
    </>
  );
}
