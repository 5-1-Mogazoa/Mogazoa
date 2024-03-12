import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { OrderType } from "@/pages/products/[productId]";
import useFilterSearch, { filterSearchProps } from "../useFilterSearch";
import SortDropDown from "../../common/button/SortDropdown";
import SearchCardList from "../SearchCardList/SearchCardList";
import SearchTitle from "../SearchTitle/SearchTitle";
import CategoryDropDown from "../CategoryDropDown/CategoryDropDown";
import CategoryList from "../../home/Category/CategoryList";
import { SearchProductsBox, SearchFilterBox } from "./Styled/StyledSearchProduct";
import { useMediaQuery } from "usehooks-ts";

export default function SearchProducts() {
  const [order, setOrder] = useState<OrderType>({ id: "recent", name: "최신순" });
  const filterSearch = useFilterSearch();

  const [dynamicMargin, setDynamicMargin] = useState<boolean>(false);

  const handleSortButtonClick = (orderItem: OrderType) => {
    const orderId = orderItem.id;
    const orderName = orderItem.name;
    setOrder({ id: orderId, name: orderName });
    filterSearch({ sort: orderName });
  };

  const router = useRouter();
  const { searchQuery, category, sortValue } = router.query;

  const [isCategory, setIsCategory] = useState(false);
  const handleOpenCategory = () => {
    setIsCategory(true);
  };

  const handleCloseCategory = () => {
    setIsCategory(false);
  };

  const matches = useMediaQuery("(max-width: 768px)");

  return (
    <SearchProductsBox>
      <SearchTitle searchQuery={searchQuery} category={category} />
      <SearchFilterBox>
        <CategoryDropDown onClick={handleOpenCategory} selectedCategory={category} />
        <SortDropDown type="home" selectedItem={order} handleOrderButtonClick={handleSortButtonClick} />
      </SearchFilterBox>
      <SearchCardList order={order} category={category} searchQuery={searchQuery} />
      {matches && <CategoryList isCategory={isCategory} onClose={handleCloseCategory} />}
    </SearchProductsBox>
  );
}
