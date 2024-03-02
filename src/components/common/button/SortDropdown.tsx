import { useState } from "react";
import {
  StyledSortDropdownButton,
  StyledSortDropdownContainer,
  StyledSortDropdownContent,
  StyledSortDropdownIcon,
  StyledSortDropdownItem,
} from "./Styled/StyledSortDropdown";

const SortDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [testValue, setTestValue] = useState("");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item: any) => {
    setTestValue(item);
    setIsOpen(false);
  };

  return (
    <StyledSortDropdownContainer>
      <StyledSortDropdownButton $isOpen={isOpen} onClick={toggleDropdown}>
        {testValue ? testValue : "최신순"}
        <StyledSortDropdownIcon $isOpen={isOpen} />
      </StyledSortDropdownButton>
      <StyledSortDropdownContent $isOpen={isOpen}>
        <StyledSortDropdownItem onClick={() => handleItemClick("최신순")}>최신순</StyledSortDropdownItem>
        <StyledSortDropdownItem onClick={() => handleItemClick("별점 높은순")}>별점 높은순</StyledSortDropdownItem>
        <StyledSortDropdownItem onClick={() => handleItemClick("별점 낮은순")}>별점 낮은순</StyledSortDropdownItem>
        <StyledSortDropdownItem onClick={() => handleItemClick("좋아요순")}>좋아요순</StyledSortDropdownItem>
      </StyledSortDropdownContent>
    </StyledSortDropdownContainer>
  );
};

export default SortDropdown;
