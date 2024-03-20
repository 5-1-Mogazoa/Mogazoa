import Image from "next/image";
import { StyledButton } from "../styled";
import { useRouter } from "next/router";
import { BASE_URL } from "@/src/routes";
import ToastEvent from "@/src/components/common/toast/Toast";
import { useState } from "react";
import Toast from "@/src/components/common/toast/Toast";

function SharedClipbaord() {
  const [toastIsOpen, setToastIsOpen] = useState(false);
  const [toastOption, setToastOption] = useState({ type: "success", message: "클립보드가 복사됐어요!" });
  const router = useRouter();
  const { productId } = router.query;

  const handleShareClipboard = async () => {
    try {
      const currentUrl = `${BASE_URL}/products/${productId}`;
      await navigator.clipboard.writeText(currentUrl);
      setToastOption({ type: "success", message: "클립보드가 복사됐어요!" });
      setToastIsOpen(true);
    } catch (error) {
      setToastOption({ type: "error", message: "클립보드 복사를 못했어요!" });
      setToastIsOpen(true);
      console.error("클립보드 복사 실패", error);
    }
  };

  return (
    <>
      <StyledButton onClick={handleShareClipboard}>
        <Image width={14} height={14} src="/icons/share.svg" alt="일반 공유 버튼" />
      </StyledButton>
      {toastIsOpen && <Toast type={toastOption.type} message={toastOption.message} setToastIsOpen={setToastIsOpen} />}
    </>
  );
}

export default SharedClipbaord;
