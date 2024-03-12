import { StyledCategoryChip } from "@/src/components/common/chip/Styled/StyledCategoryChip";
import Image from "next/image";
import * as S from "./styled";
import ShareButtons from "../ShareButtons";
import { CategoryType } from "@/src/apis/product/schema";
import { useState } from "react";
import { deleteFavorite, postFavorite } from "@/src/apis/product";
import { useQueryClient } from "@tanstack/react-query";
import { QUERY_KEY } from "@/src/routes";

type ProductTextProps = {
  id: number;
  name: string;
  category: {
    name: CategoryType;
  };
  isFavorite: boolean;
  description: string;
};

function ProductText({ id: productId, name, category, isFavorite, description }: ProductTextProps) {
  const [isFavoriteLocal, setIsFavoriteLocal] = useState(isFavorite);
  const isFavoriteImgSrc = isFavoriteLocal ? "/icons/heartfull.svg" : "/icons/heartempty.svg";

  const queryClient = useQueryClient();

  const handleFavoriteClick = async () => {
    try {
      if (!isFavoriteLocal) {
        await postFavorite(productId);
        setIsFavoriteLocal(true);
      } else {
        await deleteFavorite(productId);
        setIsFavoriteLocal(false);
      }
    } catch (error) {
      console.error(`${name} 찜 클릭 이벤트 실패`, error);
    } finally {
      await queryClient.invalidateQueries({ queryKey: [QUERY_KEY.PRODUCT_DETAIL] });
    }
  };

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
        <Image width="24" height="24" src={isFavoriteImgSrc} alt="favorite 버튼 이미지" onClick={handleFavoriteClick} />
      </S.TitleWithFavorite>
      <S.Description>{description}</S.Description>
    </S.Container>
  );
}

export default ProductText;
