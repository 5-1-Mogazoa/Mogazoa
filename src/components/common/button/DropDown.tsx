import { useState } from "react";
import {
  StyledDropdownButton,
  StyledDropdownContainer,
  StyledDropdownContent,
  StyledDropdownIcon,
  StyledDropdownItem,
} from "./Styled/StyledDropdownMenu";

const Dropdown = () => {
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
    <StyledDropdownContainer>
      <StyledDropdownButton $isOpen={isOpen} onClick={toggleDropdown}>
        {testValue ? testValue : "카테고리 선택"}
      </StyledDropdownButton>
      <StyledDropdownIcon $isOpen={isOpen} />
      <StyledDropdownContent $isOpen={isOpen}>
        <StyledDropdownItem onClick={() => handleItemClick("Item 1")}>Item 1</StyledDropdownItem>
        <StyledDropdownItem onClick={() => handleItemClick("Item 2")}>Item 2</StyledDropdownItem>
        <StyledDropdownItem onClick={() => handleItemClick("Item 3")}>Item 3</StyledDropdownItem>
      </StyledDropdownContent>
    </StyledDropdownContainer>
  );
};

export default Dropdown;
