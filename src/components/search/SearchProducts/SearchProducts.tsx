import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { OrderType } from "@/pages/products/[productId]";
import useFilterSearch, { filterSearchProps } from "../useFilterSearch";
import SortDropDown from "../../common/button/SortDropdown";
import SearchCardList from "../SearchCardList/SearchCardList";
import SearchTitle from "../SearchTitle/SearchTitle";
import CategoryDropDown from "../CategoryDropDown/CategoryDropDown";
import { SearchProductsBox, SearchFilterBox } from "./Styled/StyledSearchProduct";

export default function SearchProducts() {
  const [order, setOrder] = useState<OrderType>({ id: "recent", name: "최신순" });
  const filterSearch = useFilterSearch();
  const [searchKeyword, setSearchKeyword] = useState<string>("");
  const [dynamicMargin, setDynamicMargin] = useState<boolean>(false);

  const handleSortButtonClick = (orderItem: OrderType) => {
    const orderId = orderItem.id;
    const orderName = orderItem.name;
    setOrder({ id: orderId, name: orderName });
    filterSearch({ sort: orderName });
  };

  const router = useRouter();
  const { searchQuery, category, sortValue } = router.query;

  const resultJSX = (
    <div>
      {`${category} 카테고리의`} <br />
      {`${searchQuery}로 검색한 상품`}
    </div>
  );

  useEffect(() => {
    if (searchQuery && category) {
      setSearchKeyword(resultJSX);
      setDynamicMargin(true);
    } else if (category) {
      setSearchKeyword(`${category}의 모든 상품`);
      setDynamicMargin(false);
    } else if (searchQuery) {
      setSearchKeyword(`${searchQuery}로 검색한 상품`);
      setDynamicMargin(false);
    }
  }, [searchQuery, category]);

  return (
    <SearchProductsBox>
      <SearchTitle searchKeyword={searchKeyword} />
      <SearchFilterBox>
        <CategoryDropDown />
        <SortDropDown type="home" selectedItem={order} handleOrderButtonClick={handleSortButtonClick} />
      </SearchFilterBox>
      <SearchCardList order={order} category={category} searchQuery={searchQuery} />
    </SearchProductsBox>
  );
}
