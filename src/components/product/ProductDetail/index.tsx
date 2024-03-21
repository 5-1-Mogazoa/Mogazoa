import Image from "next/image";
import * as S from "./styled";
import { StyledPrimaryButton, StyledProductButton } from "../../common/button/Styled/StyledButton";
import ProductText from "./ProductText";
import { ProductDetailResponseType } from "@/src/apis/product/schema";
import { getToken } from "@/src/apis/auth";
import { useEffect, useState } from "react";
import CompareModal from "../CompareModal/CompareModal";

type ProductDetailProps = {
  productDetail: ProductDetailResponseType | {};
  userId: number | null;
  reviewToggle: () => void;
  loginToggle: () => void;
  editToggle: () => void;
};

type CompareModalType = "first" | "second" | "duplicate" | "change";

function ProductDetail({ productDetail, userId, reviewToggle, loginToggle, editToggle }: ProductDetailProps) {
  const { id, name, image, description, category, isFavorite, writerId } = productDetail as ProductDetailResponseType;
  const createdByMe = writerId === userId;
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);
  const [compareType, setCompareType] = useState<CompareModalType | null>(null);

  const handleCompareButton = () => {
    const productAId = localStorage.getItem("productAId");
    const productBId = localStorage.getItem("productBId");

    if (String(id) === productAId || String(id) === productBId) {
      setCompareType("duplicate");
    } else if (!productAId) {
      setCompareType("first");
      localStorage.setItem("productAId", String(id));
      localStorage.setItem("productAName", name);
    } else if (!productBId) {
      setCompareType("second");
      localStorage.setItem("productBId", String(id));
      localStorage.setItem("productBName", name);
    } else {
      setCompareType("change");
    }
    setIsCompareModalOpen(true);
  };

  const handleReviewClick = async () => {
    const token = await getToken();

    if (!token) {
      loginToggle();
      return;
    }

    reviewToggle();
  };

  return (
    <S.Container>
      <S.ProductImage>
        <Image
          fill
          src={image}
          alt={name}
          placeholder="blur"
          blurDataURL={"/icons/blurData.svg"}
          style={{ objectFit: "cover" }}
          sizes="(min-width: 1600px) 35.5rem, (min-width: 744px) 28rem, 100vw"
        />
      </S.ProductImage>
      <S.ProductTextWithButtons>
        <ProductText
          id={id}
          name={name}
          category={category}
          isFavorite={isFavorite}
          description={description}
          image={image}
          loginToggle={loginToggle}
        />
        <S.ButtonContainer>
          <StyledPrimaryButton onClick={handleReviewClick}>리뷰 작성하기</StyledPrimaryButton>
          <StyledProductButton onClick={handleCompareButton} $createdByMe={createdByMe} $buttonType="compare">
            비교하기
          </StyledProductButton>
          {createdByMe && (
            <StyledProductButton $createdByMe={createdByMe} $buttonType="edit" onClick={editToggle}>
              편집하기
            </StyledProductButton>
          )}
        </S.ButtonContainer>
      </S.ProductTextWithButtons>
      {isCompareModalOpen && (
        <CompareModal
          compareType={compareType as CompareModalType}
          productId={id}
          productName={name}
          setIsOpen={setIsCompareModalOpen}
        />
      )}
    </S.Container>
  );
}

export default ProductDetail;

{
  /* <S.Buttons>
        <StyledPrimaryButton>리뷰 작성하기</StyledPrimaryButton>
        <StyledProductButton $createdByMe={createdByMe} $buttonType="compare">
          비교하기
        </StyledProductButton>
        {createdByMe && (
          <StyledProductButton $createdByMe={createdByMe} $buttonType="edit">
            편집하기
          </StyledProductButton>
        )}
      </S.Buttons> */
}
