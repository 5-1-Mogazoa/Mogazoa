import styled from "styled-components";
import { fontStyle } from "@/styles/theme";

export const StyledButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    gap: 15px;
  }
  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    gap: 20px;
  }
`;

export const StyledProfileEditButton = styled.button`
  display: flex;
  width: 295px;
  height: 50px;
  padding: 24px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 8px;
  background: var(--color-main-gradation, linear-gradient(91deg, #5097fa 0%, #5363ff 100%));
  color: var(--color-white-f1, #f1f1f5);

  text-align: center;
  font-family: Pretendard;
  font-style: normal;
  ${fontStyle({ w: 600, s: 16, l: 18 })};
  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    width: 450px;
    height: 55px;
    flex-shrink: 1;
  }
  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    width: 300px;
    height: 65px;
    ${fontStyle({ w: 600, s: 18, l: 20 })};
  }
`;

export const StyledLogOutButton = styled(StyledProfileEditButton)`
  border: 1px solid var(--color-gray-9f, #9fa6b2);
  background: unset;
  color: var(--color-gray-9f, #9fa6b2);
`;
