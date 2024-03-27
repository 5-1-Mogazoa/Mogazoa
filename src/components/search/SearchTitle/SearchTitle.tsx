import { SearchTitleName } from "./Styled/StyledSearchTitle";
import { useState, useEffect } from "react";

type SearchTitleProps = {
  keyword?: string | string[] | undefined;
  category?: string | string[] | undefined;
};

export default function SearchTitle({ keyword, category }: SearchTitleProps) {
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  useEffect(() => {
    if (category) {
      setSearchKeyword(`${category}의 모든 상품`);
    } else if (keyword) {
      setSearchKeyword(`${keyword}로 검색한 상품`);
    }
  }, [keyword, category]);

  return (
    <div>
      <SearchTitleName>
        {keyword && category ? (
          <>
            {`${category} 카테고리의`}
            <br />
            {`${keyword}로 검색한 상품`}
          </>
        ) : (
          <>{searchKeyword}</>
        )}
      </SearchTitleName>
    </div>
  );
}
