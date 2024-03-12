import { SearchTitleName } from "./Styled/StyledSearchTitle";
import { useState, useEffect } from "react";

type SearchTitleProps = {
  searchQuery?: string | string[] | undefined;
  category?: string | string[] | undefined;
};

export default function SearchTitle({ searchQuery, category }: SearchTitleProps) {
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const resultJSX = (
    <div>
      {`${category} 카테고리의`} <br />
      {`${searchQuery}로 검색한 상품`}
    </div>
  );

  useEffect(() => {
    if (searchQuery && category) {
      setSearchKeyword(resultJSX);
    } else if (category) {
      setSearchKeyword(`${category}의 모든 상품`);
    } else if (searchQuery) {
      setSearchKeyword(`${searchQuery}로 검색한 상품`);
    }
  }, [searchQuery, category]);

  return (
    <div>
      <SearchTitleName>{searchKeyword}</SearchTitleName>
    </div>
  );
}
