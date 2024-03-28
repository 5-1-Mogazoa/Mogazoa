import * as S from "./Styled/StyledCard";
import Link from "next/link";
import { API_ROUTE } from "@/src/routes";

type CardProps = {
  imageUrl: string;
  imageAlt: string;
  cardProductTitle: string;
  review: number;
  pick: number;
  rateScore: number;
  productId: number;
};

export default function Card({ imageUrl, imageAlt, cardProductTitle, review, pick, rateScore, productId }: CardProps) {
  return (
    <Link href={API_ROUTE.PRODUCT_DETAIL(productId)}>
      <S.StyledCardWarp>
        <S.StyledImageWrap>
          <S.StyedImageWidth>
            <S.StyledImage
              src={imageUrl}
              alt={imageAlt}
              fill
              priority={true}
              sizes="(min-width: 1600px) 10rem, (min-width: 744px) 8rem, 6rem"
            />
          </S.StyedImageWidth>
        </S.StyledImageWrap>

        <S.CardTextBox>
          <S.CardTitle>{cardProductTitle}</S.CardTitle>
          <S.CardUserReaction>
            <S.UserReactionWarp>
              <S.Review>리뷰 {review}</S.Review>
              <S.Pick>찜 {pick}</S.Pick>
            </S.UserReactionWarp>
            <S.Rate>
              <S.RateImage src="/icons/star.svg" alt="별점아이콘" width={12} height={12}></S.RateImage>
              <S.RateScore>{`${Math.round(rateScore * 10) / 10}`}</S.RateScore>
            </S.Rate>
          </S.CardUserReaction>
        </S.CardTextBox>
      </S.StyledCardWarp>
    </Link>
  );
}
