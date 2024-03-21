import Image from "next/image";
import { StyledButton } from "../styled";
import { useRouter } from "next/router";
import { BASE_URL } from "@/src/routes";

function SharedClipbaord() {
  const router = useRouter();
  const { productId } = router.query;

  const handleShareClipboard = async () => {
    try {
      const currentUrl = `${BASE_URL}/products/${productId}`;
      await navigator.clipboard.writeText(currentUrl);
    } catch (error) {
      console.error("클립보드 복사 실패", error);
    }
  };

  return (
    <StyledButton onClick={handleShareClipboard}>
      <Image width={14} height={14} src="/icons/share.svg" alt="일반 공유 버튼" />
    </StyledButton>
  );
}

export default SharedClipbaord;
