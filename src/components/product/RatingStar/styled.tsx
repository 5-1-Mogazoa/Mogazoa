import styled from "styled-components";
import StarIcon from "../../../../public/icons/ratingStar.svg";

export const Container = styled.div`
  display: flex;
  gap: 0.2rem;

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    gap: 0.5rem;
  }
`;

type StarProps = {
  $type: "modal" | "page";
  $selected: boolean;
};

export const Star = styled(StarIcon)<StarProps>`
  position: relative;
  width: ${({ $type }) => ($type === "modal" ? "2.8rem" : "1.2rem")};
  height: ${({ $type }) => ($type === "modal" ? "2.8rem" : "1.2rem")};
  cursor: pointer;

  path {
    fill: ${({ $selected }) => ($selected === true ? "var(--color-yellow)" : "var(--color-gray-9f)")};
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    width: ${({ $type }) => ($type === "modal" ? "3.2rem" : "1.2rem")};
    height: ${({ $type }) => ($type === "modal" ? "3.2rem" : "1.2rem")};
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    width: ${({ $type }) => ($type === "modal" ? "3.2rem" : "1.8rem")};
    height: ${({ $type }) => ($type === "modal" ? "3.2rem" : "1.8rem")};
  }
`;
