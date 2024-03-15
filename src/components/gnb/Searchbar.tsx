import { fontStyle } from "@/styles/theme";
import { useEffect, useState } from "react";
import styled from "styled-components";
import useFilterSearch, { filterSearchProps } from "../../hooks/useFilterSearch";
import { useRouter } from "next/router";

type SearchInputProps = {
  $isOpen: boolean;
};
type SearchbarProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Container = styled.div`
  position: relative;
  z-index: 10;
  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
  }
`;

const SearchButton = styled.button`
  position: absolute;
  top: 50%;
  left: 25px;
  transform: translateY(-50%);
  width: 2.4rem;
  height: 2.4rem;
  background: url("/icons/search.svg") no-repeat center / cover;
  background-color: transparent;
`;
const SearchInput = styled.input<SearchInputProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 0;
  height: 4.8rem;
  padding: 1.6rem 1.5rem 1.6rem 6rem;
  color: var(--color-white-f1, #f1f1f5);
  border-radius: 2.8rem;
  background: var(--color-black-17, #17171c);
  gap: 1rem;
  transition: 1s;
  transition-property: width;

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    height: 5rem;
    padding: 1.6rem 2rem 1.6rem 6rem;
  }
  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    height: 5.6rem;
    padding: 1.6rem 2rem 1.6rem 6rem;

    ${fontStyle({ w: 400, s: 16, l: 16 })};
  }

  ${({ $isOpen }) =>
    $isOpen &&
    `
    width: 30rem;
    transition: 1s; 
    background: var(--color-black-25, #252530);
    @media (min-width: 1600px) {
      width: 40rem;
    }
    `}
`;

export default function Searchbar({ isOpen, setIsOpen }: SearchbarProps) {
  const filterSearch = useFilterSearch();
  const [search, setSearch] = useState("");

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = (e) => {
    const newValue = e.target.value;
    setSearch(newValue);
    if (e.key === "Enter")
      if (!newValue) {
        filterSearch({ keyword: null });
        return;
      } else {
        filterSearch({ keyword: (e.target as HTMLInputElement).value });
      }
  };

  return (
    <>
      <Container>
        <SearchButton onClick={handleClick} type="submit" />
        <SearchInput
          $isOpen={isOpen}
          type="text"
          placeholder="상품 이름을 검색해 보세요"
          autoFocus
          autoComplete="off"
          // value={search}
          onKeyDown={handleChange}
        />
      </Container>
    </>
  );
}
