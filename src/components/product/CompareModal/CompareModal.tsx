import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import * as S from "@/src/components/common/modal/StyledModal";
import Image from "next/image";
import styled from "styled-components";
import { fontStyle } from "@/styles/theme";
import { PAGE_ROUTES } from "@/src/routes";
import Link from "next/link";

interface ModalProps {
  setIsOpen: (value: boolean) => void;
  productName: string;
  productId: number;
  compareType: CompareModalType;
  ratingCount: number;
  favoriteCount: number;
  reviewCount: number;
}

type CompareModalType = "first" | "second" | "duplicate" | "change";

export default function CompareModal({
  setIsOpen,
  productId,
  productName,
  compareType,
  ratingCount,
  favoriteCount,
  reviewCount,
}: ModalProps) {
  const [portalRoot, setPortalRoot] = useState<HTMLElement | null>(null);
  const [productAName, setProductAName] = useState("");
  const [productBName, setProductBName] = useState("");
  const [isSelectedA, setIsSelectedA] = useState(false);
  const [isSelectedB, setIsSelectedB] = useState(false);
  const [isChanged, setIsChanged] = useState(false);
  const [text, setText] = useState("");

  const handleSelectItemA = () => {
    setIsSelectedA(true);
    setIsSelectedB(false);
  };
  const handleSelectItemB = () => {
    setIsSelectedA(false);
    setIsSelectedB(true);
  };

  const handleChange = () => {
    if (isSelectedA) {
      localStorage.setItem("productBId", String(productId));
      localStorage.setItem("productBName", productName);
      localStorage.setItem("productBRating", String(ratingCount));
      localStorage.setItem("productBfavorite", String(favoriteCount));
      localStorage.setItem("productBReview", String(reviewCount));
    } else {
      localStorage.setItem("productAId", String(productId));
      localStorage.setItem("productAName", productName);
      localStorage.setItem("productARating", String(ratingCount));
      localStorage.setItem("productAfavorite", String(favoriteCount));
      localStorage.setItem("productAReview", String(reviewCount));
    }
    setIsChanged(true);
  };

  const stopEventBubbing = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  useEffect(() => {
    setPortalRoot(document.body);
    if (localStorage.getItem("productAName")) {
      setProductAName(localStorage.getItem("productAName") as string);
    }
    if (localStorage.getItem("productBName")) {
      setProductBName(localStorage.getItem("productBName") as string);
    }

    switch (compareType) {
      case "first":
      case "second":
        setText(`${productName} 항목이 등록되었습니다.`);
        break;

      case "duplicate":
        setText("이미 등록되었습니다.");
        break;

      case "change":
        setText(`지금 보신 ${productName}`);
        break;
    }
  }, []);

  const handleCloseButton = () => setIsOpen(false);

  return (
    compareType &&
    portalRoot &&
    createPortal(
      <S.Background onClick={handleCloseButton}>
        <S.Container $isSmall={false} onClick={stopEventBubbing}>
          <S.Header>
            <S.Title>
              {!isChanged ? (
                <>
                  {text}
                  {compareType === "change" && (
                    <>
                      <br />
                      {"어떤 상품과 비교할까요?"}
                    </>
                  )}
                </>
              ) : (
                <>
                  {"비교 상품이 교체되었습니다."}
                  <br />
                  {"바로 확인해 보시겠어요?"}
                </>
              )}
            </S.Title>
            <S.CloseButton onClick={handleCloseButton}>
              <Image fill src="/icons/closeSvgr.svg" alt="" />
            </S.CloseButton>
          </S.Header>
          {(compareType === "first" || compareType === "duplicate") && (
            <StyledPrimaryButton onClick={handleCloseButton}>확인</StyledPrimaryButton>
          )}
          {compareType === "second" && (
            <Link href={PAGE_ROUTES.COMPARE}>
              <StyledPrimaryButton onClick={handleCloseButton}>비교하기</StyledPrimaryButton>
            </Link>
          )}
          {compareType === "change" && !isChanged && (
            <>
              <StyledProductButtonContainer>
                <StyledProductButton onClick={handleSelectItemA} $isSelected={isSelectedA}>
                  {productAName}
                </StyledProductButton>
                <StyledProductButton onClick={handleSelectItemB} $isSelected={isSelectedB}>
                  {productBName}
                </StyledProductButton>
              </StyledProductButtonContainer>
              <StyledPrimaryButton disabled={!isSelectedA && !isSelectedB} onClick={handleChange}>
                교체하기
              </StyledPrimaryButton>
            </>
          )}
          {isChanged && (
            <Link href={PAGE_ROUTES.COMPARE}>
              <StyledPrimaryButton>바로가기</StyledPrimaryButton>
            </Link>
          )}
        </S.Container>
      </S.Background>,
      document.body,
    )
  );
}

const StyledPrimaryButton = styled.button`
  margin-top: 30px;
  display: flex;
  width: 100%;
  height: 50px;
  padding: 24px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;

  border-radius: 8px;
  background: var(--color-main-gradation, linear-gradient(91deg, #5097fa 0%, #5363ff 100%));

  color: var(--color-white-f1, #f1f1f5);
  text-align: center;
  font-family: Pretendard;
  font-style: normal;
  ${fontStyle({ w: 600, s: 16, l: 18 })};

  &:disabled {
    background: var(--color-black-35, #353542);
    color: var(--color-gray-6e, #6e6e82);
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    margin-top: 40px;
    height: 55px;
    flex-shrink: 1;
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    height: 65px;
    ${fontStyle({ w: 600, s: 18, l: 20 })};
  }
`;

const StyledProductButtonContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    margin-top: 40px;
    gap: 15px;
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    gap: 20px;
  }
`;

const StyledProductButton = styled(StyledPrimaryButton)<StyledProductButtonProps>`
  margin-top: 0;
  border: 1px solid var(--color-black-35, #353542);
  background: unset;
  color: var(--color-gray-6e, #6e6e82);

  ${({ $isSelected }) =>
    $isSelected &&
    `border: 1px solid var(--color-pink-ff, #ff2f9f);
  background: unset;
  color: var(--color-pink-ff, #ff2f9f);`}
`;

type StyledProductButtonProps = {
  $isSelected: boolean;
};
