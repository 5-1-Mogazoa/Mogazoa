import { SearchTitleName } from "./Styled/StyledSearchTitle";
type SearchTitleProps = {
  searchKeyword: string;
};

export default function SearchTitle({ searchKeyword }: SearchTitleProps) {
  return (
    <div>
      <SearchTitleName>{searchKeyword}의 모든 상품</SearchTitleName>
    </div>
  );
}
