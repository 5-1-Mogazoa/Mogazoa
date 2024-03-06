import styled from "styled-components";
import StarIcon from "../../../../public/icons/star.svg";

export const Container = styled.div`
  display: flex;
  gap: 0.2rem;

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    gap: 0.5rem;
  }
`;

type StarProps = {
  $selected: boolean;
};

export const Star = styled(StarIcon)<StarProps>`
  position: relative;
  width: 2.8rem;
  height: 2.8rem;
  cursor: pointer;
  svg {
    width: 100%;
    height: 100%;
  }
  path {
    fill: ${({ $selected }) => ($selected === true ? "var(--color-yellow)" : "var(--color-gray-9f)")};
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    width: 3.2rem;
    height: 3.2rem;
  }
`;
