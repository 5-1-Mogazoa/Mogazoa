import { useState, useEffect } from "react";
import SortDropDown from "../../common/button/SortDropdown";
import SearchCardList from "../SearchCardList/SearchCardList";
import SearchTitle from "../SearchTitle/SearchTitle";
import { useRouter } from "next/router";
import { OrderType } from "@/pages/products/[productId]";
import useFilterSearch, { filterSearchProps } from "../useFilterSearch";

export default function SearchProducts() {
  const [order, setOrder] = useState<OrderType>({ id: "recent", name: "최신순" });
  const filterSearch = useFilterSearch();

  const handleSortButtonClick = (orderItem: OrderType) => {
    const orderId = orderItem.id;
    const orderName = orderItem.name;
    setOrder({ id: orderId, name: orderName });
    filterSearch({ sort: orderName });
  };

  const router = useRouter();
  const { searchQuery, category, sortValue } = router.query;
  const [searchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    if (searchQuery && category) {
      setSearchKeyword(`${category} 카테고리의 ${searchQuery}로 검색한 상품`);
    } else if (category) {
      setSearchKeyword(`${category}의 모든 상품`);
    } else if (searchQuery && category) {
      setSearchKeyword(`${searchQuery}로 검색한 상품`);
    }
  }, [searchQuery, category]);

  return (
    <>
      <SearchTitle searchKeyword={searchKeyword} />
      <SortDropDown type="home" selectedItem={order} handleOrderButtonClick={handleSortButtonClick} />
      <SearchCardList order={order} />
    </>
  );
}
