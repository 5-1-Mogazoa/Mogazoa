import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import * as S from "./StyledModal";
import Image from "next/image";
import { StyledCategoryChip } from "../chip/Styled/StyledCategoryChip";
import { CategoryType } from "@/src/apis/product/schema";
import MODAL_BUTTON from "../../../constant/MODAL_BUTTON";
import { FieldValues, useFormContext } from "react-hook-form";

interface ModalProps {
  title: string;
  subTitle?: string;
  modalType: "follow" | "compare" | "compare_comfirm" | "review" | "edit" | "profile" | "add" | "login";
  category?: CategoryType | undefined;
  isFormData?: boolean;
  // callback?: (data: FieldValues) => Promise<T>;
  callback?: any;
  onClose: () => void;
  children?: ReactNode;
}

// hasOptionsbutton 대신 modalType으로 review는 헤더부분 다르게 함
function Modal({ title, subTitle, modalType, category, isFormData, callback, onClose, children }: ModalProps) {
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);
  const formContext = useFormContext();

  const isValid = formContext && formContext.formState.isValid;
  const isReview = modalType === "review";
  const isSmall = modalType === "compare_comfirm" || modalType === "login";
  const isConfirmButton = isSmall || modalType === "compare";
  const isFollow = modalType === "follow";

  const stopEventBubbing = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleButtonClick = async (data: FieldValues) => {
    console.log("모달 클릭");

    if (typeof callback === "function") {
      try {
        await callback(data);
        onClose();
      } catch (error) {
        throw error;
      }
    } else {
      onClose();
    }
  };

  useEffect(() => {
    setPortalRoot(document.body);
  }, []);

  return (
    portalRoot &&
    createPortal(
      <S.Background onClick={onClose}>
        <S.Container $isSmall={isSmall} onClick={stopEventBubbing}>
          <S.Header>
            {isReview && (
              <StyledCategoryChip $category={category} $small>
                {category}
              </StyledCategoryChip>
            )}
            <S.Title>
              {title} <p>{subTitle}</p>
            </S.Title>
            <S.CloseButton onClick={onClose}>
              <Image fill src="/icons/closeSvgr.svg" alt="닫기 아이콘 이미지" />
            </S.CloseButton>
          </S.Header>
          {children}
          {isSmall && <S.EmptyGapBox />}
          {!isFollow && isConfirmButton ? (
            <S.ModalButton onClick={handleButtonClick}>{MODAL_BUTTON[modalType]}</S.ModalButton>
          ) : (
            <S.ModalButton onClick={formContext.handleSubmit(handleButtonClick)} disabled={!isValid}>
              {MODAL_BUTTON[modalType]}
            </S.ModalButton>
          )}
        </S.Container>
      </S.Background>,
      document.body,
    )
  );
}

export default Modal;
