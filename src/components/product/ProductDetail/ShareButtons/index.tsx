import Image from "next/image";
import { StyledButton, StyledButtonContainer } from "./styled";

function ShareButtons() {
  return (
    <StyledButtonContainer>
      <StyledButton>
        <Image width="14" height="14" src="/icons/kakao.svg" alt="카카오 공유 버튼" />
      </StyledButton>
      <StyledButton>
        <Image width="14" height="14" src="/icons/share.svg" alt="일반 공유 버튼" />
      </StyledButton>
    </StyledButtonContainer>
  );
}

export default ShareButtons;
