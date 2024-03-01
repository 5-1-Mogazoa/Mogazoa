import {
  StyledNicknameContainer,
  StyledNicknameDescription,
  StyledNicknameInput,
  StyledNicknameLabel,
} from "./StyledNicknameInput";

export default function NicknameInput() {
  return (
    <StyledNicknameContainer>
      <StyledNicknameLabel>닉네임</StyledNicknameLabel>
      <StyledNicknameInput placeholder="닉네임을 입력해 주세요" />
      <StyledNicknameDescription>최대 10자 가능</StyledNicknameDescription>
    </StyledNicknameContainer>
  );
}
