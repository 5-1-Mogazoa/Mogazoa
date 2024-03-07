import { ReviewImagesType } from "@/src/apis/product/schema";
import * as S from "./styled";
import Image from "next/image";

type ReviewContentsProps = {
  content: string;
  reviewImages: ReviewImagesType[];
};

function ReviewContents({ content, reviewImages }: ReviewContentsProps) {
  const isReviewImages = reviewImages.length > 0;

  return (
    <S.Container>
      {content}
      {isReviewImages && (
        <S.ImageList>
          {reviewImages.map((image) => (
            <S.Image key={image.id}>
              <Image
                fill
                src={image.source}
                alt={`리뷰 ${image.id}이미지`}
                sizes="(min-width: 1600px) 10rem, (min-width: 744px) 8rem, 6rem"
              />
            </S.Image>
          ))}
        </S.ImageList>
      )}
    </S.Container>
  );
}

export default ReviewContents;
