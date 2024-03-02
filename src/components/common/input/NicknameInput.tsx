import {
  StyledNicknameContainer,
  StyledNicknameDescription,
  StyledNicknameInput,
  StyledNicknameLabel,
} from "./Styled/StyledNicknameInput";

export default function NicknameInput() {
  return (
    <StyledNicknameContainer>
      <StyledNicknameLabel htmlFor="nickname">닉네임</StyledNicknameLabel>
      <StyledNicknameInput id="nickname" placeholder="닉네임을 입력해 주세요" />
      <StyledNicknameDescription>최대 10자 가능</StyledNicknameDescription>
    </StyledNicknameContainer>
  );
}
