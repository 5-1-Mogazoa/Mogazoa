import Image from "next/image";
import * as S from "./styled";
import { StyledPrimaryButton, StyledProductButton } from "../../common/button/Styled/StyledButton";
import ProductText from "./ProductText";

type ProductDetailProps = {
  productDetail: any; // 추후 수정예정
  createdByMe: boolean;
};

function ProductDetail({ productDetail, createdByMe }: ProductDetailProps) {
  const { id, name, image, description, category, isFavorite } = productDetail;

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
        <ProductText name={name} category={category} isFavorite={isFavorite} description={description} />
        <S.ButtonContainer>
          <StyledPrimaryButton>리뷰 작성하기</StyledPrimaryButton>
          <StyledProductButton $createdByMe={createdByMe} $buttonType="compare">
            비교하기
          </StyledProductButton>
          {createdByMe && (
            <StyledProductButton $createdByMe={createdByMe} $buttonType="edit">
              편집하기
            </StyledProductButton>
          )}
        </S.ButtonContainer>
      </S.ProductTextWithButtons>
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
