import Image from "next/image";
import { StyledButton, StyledButtonContainer } from "./styled";
import Sharekakao from "../../ShareKakao";

interface ShareButtonsProps {
  name: string;
  image: string;
  description: string;
}

function ShareButtons({ name, image, description }: ShareButtonsProps) {
  return (
    <StyledButtonContainer>
      <Sharekakao name={name} image={image} description={description} />
      <StyledButton>
        <Image width="14" height="14" src="/icons/share.svg" alt="일반 공유 버튼" />
      </StyledButton>
    </StyledButtonContainer>
  );
}

export default ShareButtons;
