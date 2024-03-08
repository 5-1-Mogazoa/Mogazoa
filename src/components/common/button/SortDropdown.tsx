import { useState } from "react";
import * as S from "./Styled/StyledSortDropdown";
import { OrderOptionType, OrderType } from "@/pages/products/[productId]";
import { PRODUCT_ORDER, REVIEW_ORDER } from "@/src/constant/DROPDOWN_BUTTON";

type SortDropProps = {
  type: "home" | "products";
  selectedItem: OrderType;
  handleOrderButtonClick: (selectedOrder: OrderType) => void;
};

export default function SortDropDown({ type, selectedItem, handleOrderButtonClick }: SortDropProps) {
  const [isDropBoxOpen, setIsDropBoxOpen] = useState(false);
  const toggleDropdown = () => setIsDropBoxOpen((prev) => !prev);
  const orderList = type === "home" ? PRODUCT_ORDER : REVIEW_ORDER;

  const handleDropBoxBlur = () => {
    setTimeout(() => {
      setIsDropBoxOpen(false);
    }, 150);
  };

  const handleSelectSort = (orderItem: OrderType) => {
    setIsDropBoxOpen(false);
    handleOrderButtonClick(orderItem);
  };

  return (
    <S.StyledSortDropdownContainer>
      <S.StyledSortDropdownButton $isOpen={isDropBoxOpen} onBlur={handleDropBoxBlur} onClick={toggleDropdown}>
        {selectedItem.name}
        <S.StyledSortDropdownIcon $isOpen={isDropBoxOpen} />
      </S.StyledSortDropdownButton>
      <S.StyledSortDropdownContent $isOpen={isDropBoxOpen}>
        {orderList.map((orderItem) => (
          <S.StyledSortDropdownItemWrap key={orderItem.id}>
            <S.StyledSortDropdownItem
              value={orderItem.id as OrderOptionType}
              onClick={() => handleSelectSort(orderItem as OrderType)}>
              {orderItem.name}
            </S.StyledSortDropdownItem>
          </S.StyledSortDropdownItemWrap>
        ))}
      </S.StyledSortDropdownContent>
    </S.StyledSortDropdownContainer>
  );
}
