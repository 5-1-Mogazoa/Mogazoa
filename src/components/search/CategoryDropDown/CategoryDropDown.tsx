import { CategoryFilter, FilterText } from "./Styled/StyledCategoryDropDown";
import Image from "next/image";

export default function CategoryDropDown() {
  return (
    <CategoryFilter>
      <Image src="/icons/filter.svg" alt="필터아이콘" width={18} height={18}></Image>
      <FilterText>카테고리</FilterText>
    </CategoryFilter>
  );
}
