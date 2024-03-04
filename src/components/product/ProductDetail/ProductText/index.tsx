import { StyledCategoryChip } from "@/src/components/common/chip/Styled/StyledCategoryChip";
import Image from "next/image";
import * as S from "./styled";
import ShareButtons from "../ShareButtons";

type ProductTextProps = {
  name: string;
  category: {
    name:
      | "음악"
      | "영화/드라마"
      | "강의/책"
      | "호텔"
      | "가구/인테리어"
      | "식당"
      | "전자기기"
      | "화장품"
      | "의류/악세서리"
      | "앱";
  };
  isFavorite: boolean;
  description: string;
};

function ProductText({ name, category, isFavorite, description }: ProductTextProps) {
  const isFavoriteImgSrc = isFavorite ? "/icons/heartfull.svg" : "/icons/heartempty.svg";

  return (
    <S.Container>
      <S.TagWithShare>
        <StyledCategoryChip $category={category.name} $small>
          {category.name}
        </StyledCategoryChip>
        <ShareButtons />
      </S.TagWithShare>
      <S.TitleWithFavorite>
        {name}
        <Image width="24" height="24" src={isFavoriteImgSrc} alt="favorite 버튼 이미지" />
      </S.TitleWithFavorite>
      <S.Description>{description}</S.Description>
    </S.Container>
  );
}

export default ProductText;
