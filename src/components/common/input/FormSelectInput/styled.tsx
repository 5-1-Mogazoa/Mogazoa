import styled from "styled-components";
import Select from "react-select";
import { fontStyle } from "@/styles/theme";

export const SelectBox = styled(Select).attrs({ classNamePrefix: "react-select" })`
  .react-select__control {
    display: flex;
    align-items: center;
    width: 100%;
    height: 5.5rem;
    padding-left: 2rem;
    padding-right: 2rem;
    border-radius: 0.8rem;
    border: 0.1rem solid var(--color-black-35);
    background-color: var(--color-black-25);
    cursor: pointer;
  }

  .react-select__value-container {
    padding: 0;
  }

  .react-select__single-value {
    ${fontStyle({ w: 400, s: 14, l: 16.7 })};
    color: var(--color-white);
  }

  .react-select__menu {
    width: 100%;
    /* height: 16.3rem; */
    overflow: auto;
    padding: 1rem;
    border-radius: 0.8rem;
    border: 0.1rem solid var(--color-black-35);
    background-color: var(--color-black-25);
    cursor: pointer;
  }

  .react-select__option {
    display: flex;
    gap: 5rem;
    height: 3.2rem;
    border-radius: 0.6rem;
    background-color: transparent;
    ${fontStyle({ w: 400, s: 14, l: 20 })};
    color: var(--color-gray-6e);
  }

  .react-select__option--is-selected {
    background-color: var(--color-black-35);
    color: var(--color-white);
  }

  .react-select__option--is-focused {
    color: var(--color-white); /* hover 상태의 option 텍스트 색상 */
  }

  .react-select__indicator-separator {
    display: none;
  }

  .react-select__indicators {
    svg {
      height: 2rem;
      width: 2rem;
    }
    &:focus {
      transform: scaleX(1);
    }
  }

  .react-select__placeholder {
  }
`;
