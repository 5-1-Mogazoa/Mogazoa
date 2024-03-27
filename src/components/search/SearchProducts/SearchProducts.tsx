import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { OrderType } from "@/src/components/product/ReviewList";
import useFilterSearch, { filterSearchProps } from "../../../hooks/useFilterSearch";
import SortDropDown from "../../common/button/SortDropdown";
import SearchCardList from "../SearchCardList/SearchCardList";
import SearchTitle from "../SearchTitle/SearchTitle";
import CategoryDropDown from "../CategoryDropDown/CategoryDropDown";
import CategoryList from "../../home/Category/CategoryList";
import { SearchProductsBox, SearchFilterBox } from "./Styled/StyledSearchProduct";
import { useMediaQuery } from "usehooks-ts";
import { getCategoryName } from "../getCategoryName";

export default function SearchProducts() {
  const [order, setOrder] = useState<OrderType>({ id: "recent", name: "최신순" });
  const filterSearch = useFilterSearch();

  const [dynamicMargin, setDynamicMargin] = useState<boolean>(false);

  const handleSortButtonClick = (orderItem: OrderType) => {
    const orderId = orderItem.id;
    const orderName = orderItem.name;
    setOrder({ id: orderId, name: orderName });
    filterSearch({ order: orderId });
  };

  const router = useRouter();
  const { keyword, category } = router.query;

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
      <SearchTitle keyword={keyword} category={getCategoryName(category as string)} />
      <SearchFilterBox>
        <CategoryDropDown onClick={handleOpenCategory} selectedCategory={getCategoryName(category as string)} />
        <SortDropDown type="home" selectedItem={order} handleOrderButtonClick={handleSortButtonClick} />
      </SearchFilterBox>
      <SearchCardList order={order.id} category={Number(category as string)} keyword={keyword as string} />
      {matches && <CategoryList isCategory={isCategory} onClose={handleCloseCategory} />}
    </SearchProductsBox>
  );
}
