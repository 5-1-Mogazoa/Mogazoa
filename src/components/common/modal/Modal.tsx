import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import * as S from "./StyledModal";
import Image from "next/image";
import { StyledCategoryChip } from "../chip/Styled/StyledCategoryChip";
import { CategoryType } from "@/src/apis/product/schema";
import MODAL_BUTTON from "../../../constant/MODAL_BUTTON";

interface ModalProps {
  title: string;
  modalType: "follow" | "compare" | "compare_comfirm" | "review" | "edit" | "profile" | "add";
  category?: CategoryType | undefined;
  callback?: () => void;
  onClose: () => void;
  children?: ReactNode;
}

// hasOptionsbutton 대신 modalType으로 review는 헤더부분 다르게 함
function Modal({ title, modalType, category, callback, onClose, children }: ModalProps) {
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);

  const isReview = modalType === "review";
  const isConpareConfirm = modalType === "compare_comfirm";

  const stopEventBubbing = (e: React.MouseEvent) => {
    // e.preventDefault(); 이걸하면 이미지업로드 input이 클릭안됨.
    e.stopPropagation();
  };

  const handleSubmit = () => {
    if (callback) {
      callback();
    }
    onClose();
  };

  useEffect(() => {
    setPortalRoot(document.body);
  }, []);

  return (
    portalRoot &&
    createPortal(
      <S.Background onClick={onClose}>
        <S.Container onClick={stopEventBubbing}>
          <S.Header>
            {isReview && (
              <StyledCategoryChip $category={category} $small>
                {category}
              </StyledCategoryChip>
            )}
            {title}
            <S.CloseButton onClick={onClose}>
              <Image fill src="/icons/close.svg" alt="닫기 아이콘 이미지" />
            </S.CloseButton>
          </S.Header>
          {children}
          {isConpareConfirm && <S.EmptyGapBox />}
          {!isConpareConfirm && <S.ModalButton onClick={handleSubmit}>{MODAL_BUTTON[modalType]}</S.ModalButton>}
        </S.Container>
      </S.Background>,
      document.body,
    )
  );
}

export default Modal;
