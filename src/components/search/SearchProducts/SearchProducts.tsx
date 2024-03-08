import { useState } from "react";
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

  return (
    <>
      <SearchTitle searchKeyword={"테스트제목"} />
      <SortDropDown type="home" selectedItem={order} handleOrderButtonClick={handleSortButtonClick} />
      <SearchCardList />
    </>
  );
}
