import styled from "styled-components";
import { fontStyle } from "@/styles/theme";

const StyledCompareChipA = styled.div`
  display: inline-flex;
  padding: 8px 10px;
  gap: 10px;

  border-radius: 6px;
  background: var(--pink-pink-10, rgba(255, 47, 159, 0.1));

  color: var(--color-pink-ff, #ff2f9f);
  font-family: Pretendard;
  font-style: normal;
  ${fontStyle({ w: 400, s: 14, l: 16 })};

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    ${fontStyle({ w: 400, s: 16, l: 18 })};
  }
`;

const StyledCompareChipB = styled.div`
  display: inline-flex;
  padding: 8px 10px;
  gap: 10px;

  border-radius: 6px;
  background: var(--color-green-10, rgba(5, 213, 139, 0.1));

  color: var(--color-green-ff, #05d58b);
  font-family: Pretendard;
  font-style: normal;
  ${fontStyle({ w: 400, s: 14, l: 16 })};

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    ${fontStyle({ w: 400, s: 16, l: 18 })};
  }
`;

const StyledCompareChipCloser = styled.div`
  cursor: pointer;
  display: flex;
  padding: 2px;
  align-items: flex-start;
  gap: 10px;

  border-radius: 6px;
  background: rgba(0, 0, 0, 0.5);
`;

const StyledCompareChipCloserIcon = styled.div`
  width: 13px;
  height: 13px;
  background: url("/icons/close.svg") no-repeat center / cover;

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    width: 15px;
    height: 15px;
  }
`;

export { StyledCompareChipA, StyledCompareChipB, StyledCompareChipCloser, StyledCompareChipCloserIcon };
