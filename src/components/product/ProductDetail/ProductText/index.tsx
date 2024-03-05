import { StyledCategoryChip } from "@/src/components/common/chip/Styled/StyledCategoryChip";
import Image from "next/image";
import * as S from "./styled";
import ShareButtons from "../ShareButtons";
import { CategoryType } from "@/src/apis/product/schema";

type ProductTextProps = {
  name: string;
  category: {
    name: CategoryType;
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
