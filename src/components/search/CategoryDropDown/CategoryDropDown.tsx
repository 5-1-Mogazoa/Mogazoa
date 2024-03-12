import { CategoryFilter, FilterText } from "./Styled/StyledCategoryDropDown";
import Image from "next/image";
type CategoryDropDownProps = {
  onClick: () => void;
  selectedCategory?: string | string[] | undefined;
};
export default function CategoryDropDown({ onClick, selectedCategory }: CategoryDropDownProps) {
  const category = selectedCategory === "" || selectedCategory === undefined ? "카테고리" : selectedCategory;
  return (
    <CategoryFilter onClick={onClick}>
      <Image src="/icons/filter.svg" alt="필터아이콘" width={18} height={18}></Image>
      <FilterText>{category}</FilterText>
    </CategoryFilter>
  );
}
