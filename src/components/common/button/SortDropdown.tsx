import { useState } from "react";
import * as S from "./Styled/StyledSortDropdown";

type Item = {
  id: string;
  name: string;
};

type SortDropProps = {
  list: Item[];
  selectedItem: Item;
  handleSortButtonClick: (e: any) => void;
};

export default function SortDropDown({ list, selectedItem, handleSortButtonClick }: SortDropProps) {
  const [isDropBoxOpen, setIsDropBoxOpen] = useState(false);
  const toggleDropdown = () => setIsDropBoxOpen((prev) => !prev);

  const handleDropBoxBlur = () => {
    setTimeout(() => {
      setIsDropBoxOpen(false);
    }, 150);
  };

  const handleSelectSort = (e) => {
    setIsDropBoxOpen(false);
    handleSortButtonClick(e);
  };

  return (
    <S.StyledSortDropdownContainer>
      <S.StyledSortDropdownButton $isOpen={isDropBoxOpen} onBlur={handleDropBoxBlur} onClick={toggleDropdown}>
        {selectedItem.name}
        <S.StyledSortDropdownIcon $isOpen={isDropBoxOpen} />
      </S.StyledSortDropdownButton>
      <S.StyledSortDropdownContent $isOpen={isDropBoxOpen}>
        {list.map(({ id, name }) => (
          <S.StyledSortDropdownItemWrap key={id}>
            <S.StyledSortDropdownItem value={id} onClick={handleSelectSort}>
              {name}
            </S.StyledSortDropdownItem>
          </S.StyledSortDropdownItemWrap>
        ))}
      </S.StyledSortDropdownContent>
    </S.StyledSortDropdownContainer>
  );
}
