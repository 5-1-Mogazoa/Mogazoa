import styled from "styled-components";
import StarIcon from "../../../../public/icons/ratingStar.svg";
import HalfStarIcon from "../../../../public/icons/star_left.svg";

export const Container = styled.div`
  display: flex;
`;

type StarProps = {
  $type: "modal" | "page";
  $selected: boolean;
  $rightStar: boolean;
};

export const Star = styled(HalfStarIcon)<StarProps>`
  position: relative;
  width: ${({ $type }) => ($type === "modal" ? "1.4rem" : "0.6rem")};
  height: ${({ $type }) => ($type === "modal" ? "2.8rem" : "1.2rem")};
  transform: ${({ $rightStar }) => ($rightStar ? "scaleX(-1)" : "none")};
  margin-right: ${({ $rightStar }) => ($rightStar ? "0.2rem" : "0")};
  cursor: pointer;

  path {
    fill: ${({ $selected }) => ($selected === true ? "var(--color-yellow)" : "var(--color-gray-9f)")};
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    width: ${({ $type }) => ($type === "modal" ? "1.6rem" : "0.6rem")};
    height: ${({ $type }) => ($type === "modal" ? "3.2rem" : "1.2rem")};
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    width: ${({ $type }) => ($type === "modal" ? "1.6rem" : "0.9rem")};
    height: ${({ $type }) => ($type === "modal" ? "3.2rem" : "1.8rem")};
    margin-right: ${({ $rightStar }) => ($rightStar ? "0.5rem" : "0")};
  }
`;
