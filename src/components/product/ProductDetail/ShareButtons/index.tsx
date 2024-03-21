import { StyledButtonContainer } from "./styled";
import Sharekakao from "./KakaoClipboard/Sharekakao";
import SharedClipbaord from "./KakaoClipboard/ShareClipboard";

interface ShareButtonsProps {
  name: string;
  image: string;
  description: string;
}

function ShareButtons({ name, image, description }: ShareButtonsProps) {
  return (
    <StyledButtonContainer>
      <Sharekakao name={name} image={image} description={description} />
      <SharedClipbaord />
    </StyledButtonContainer>
  );
}

export default ShareButtons;
