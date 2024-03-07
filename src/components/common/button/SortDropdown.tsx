import { SetStateAction, useState } from "react";
import {
  StyledSortDropdownButton,
  StyledSortDropdownContainer,
  StyledSortDropdownContent,
  StyledSortDropdownIcon,
  StyledSortDropdownItem,
} from "./Styled/StyledSortDropdown";
import { OrderOptionType } from "../../product/ReviewList";

interface SortDropdownProps {
  order: OrderOptionType;
  setOrder: React.Dispatch<SetStateAction<OrderOptionType>>;
}

const SortDropdown = ({ order, setOrder }: SortDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  // const [testValue, setTestValue] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (option: OrderOptionType) => {
    setOrder(option);
    setIsOpen(false);
    console.log(option);
  };

  const orderOptions: OrderOptionType[] = ["recent", "ratingDesc", "ratingAsc", "likeCount"];

  const OrderOptionsTranslation = {
    recent: "최신순",
    ratingDesc: "별점 높은순",
    ratingAsc: "별점 낮은순",
    likeCount: "좋아요순",
  };

  return (
    <StyledSortDropdownContainer>
      <StyledSortDropdownButton $isOpen={isOpen} onClick={toggleDropdown}>
        {OrderOptionsTranslation[order]}
        <StyledSortDropdownIcon $isOpen={isOpen} />
      </StyledSortDropdownButton>
      <StyledSortDropdownContent $isOpen={isOpen}>
        {orderOptions.map((option) => (
          <StyledSortDropdownItem key={option} onClick={() => handleItemClick(option)}>
            {OrderOptionsTranslation[option]}
          </StyledSortDropdownItem>
        ))}
      </StyledSortDropdownContent>
    </StyledSortDropdownContainer>
  );
};

export default SortDropdown;
