import Image from "next/image";
import { StyledButton } from "../styled";

interface SharekakaoProps {
  name: string;
  image: string;
  description: string;
}

function Sharekakao({ name, image, description }: SharekakaoProps) {
  const realUrl = "http://localhost:3000"; // TODO 추후 배포 링크로 변경하기

  const handleShareKakao = () => {
    const { Kakao } = window;

    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: name,
        description: description,
        imageUrl: image,
        link: {
          mobileWebUrl: realUrl,
          webUrl: realUrl,
        },
      },
      buttons: [
        {
          title: "비교하러 가기",
          link: {
            mobileWebUrl: realUrl,
            webUrl: realUrl,
          },
        },
      ],
    });
  };

  return (
    <StyledButton onClick={handleShareKakao}>
      <Image width={14} height={14} src="/icons/kakao.svg" alt="카카오 공유 버튼" />
    </StyledButton>
  );
}

export default Sharekakao;
