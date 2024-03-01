import { fontStyle } from "@/styles/theme";
import Image from "next/image";
import styled from "styled-components";

type StyledImageBoxProps = {
  $imageURL: string;
};

const StyledImageInput = styled.input`
  visibility: hidden;
`;

const StyledImageBox = styled.div<StyledImageBoxProps>`
  width: 140px;
  height: 140px;
  display: inline-flex;
  padding: 58px;
  align-items: flex-start;
  gap: 10px;

  border-radius: 8px;
  border: 1px solid var(--color-black-35, #353542);
  background: ${(props) =>
    props.$imageURL ? `url("${props.$imageURL}") no-repeat center / cover` : `var(--color-black-25, #252530)`};

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    padding: 63px;
    width: 160px;
    height: 160px;
  }
`;

const StyledEmptyImageIcon = styled.div`
  width: 24px;
  height: 24px;
  background: url("/icons/photo.svg") no-repeat center / cover;

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    width: 34px;
    height: 34px;
  }
`;

export { StyledImageBox, StyledEmptyImageIcon, StyledImageInput };
