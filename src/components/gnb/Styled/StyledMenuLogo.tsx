import styled from "styled-components";
import Image from "next/image";

// const hamburger = ;

const styledMenu = styled.button`
  display: block;
  width: 2.4rem;
  height: 2.4rem;
  background: url("/icons/hambugermenu.svg");
  z-index: 15;
  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    display: none;
  }
  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
  }
`;
export { styledMenu as MenuButton };
