import styled from "styled-components";
import { fontStyle } from "@/styles/theme";

const StyledPrimaryButton = styled.button`
  display: flex;
  width: 100%;
  height: 50px;
  padding: 24px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;

  border-radius: 8px;
  background: var(--color-main-gradation, linear-gradient(91deg, #5097fa 0%, #5363ff 100%));

  &:disabled {
    background: var(--color-black-35, #353542);
    color: var(--color-gray-6e, #6e6e82);
  }

  color: var(--color-white-f1, #f1f1f5);
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  ${fontStyle({ w: 600, s: 16, l: 18 })};

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    width: 440px;
    height: 55px;
    flex-shrink: 1;
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    width: 640px;
    height: 65px;
    ${fontStyle({ w: 600, s: 18, l: 20 })};
  }
`;

const StyledSecondaryButton = styled(StyledPrimaryButton)`
  border: 1px solid var(--color-main-blue, #5097fa);
  background: unset;
  color: var(--color-main-blue, #5097fa);

  &:disabled {
    border: 1px solid var(--color-black-35, #353542);
    background: unset;
  }
`;

const StyledTertiaryButton = styled(StyledPrimaryButton)`
  border: 1px solid var(--color-gray-9f, #9fa6b2);
  background: unset;
  color: var(--color-gray-9f, #9fa6b2);

  &:disabled {
    border: 1px solid var(--color-black-35, #353542);
    background: unset;
  }
`;

// product 페이지 버튼 추가
type StyledProductButtonProps = {
  $createdByMe: Boolean;
  $buttonType: "compare" | "edit";
};

const StyledProductButton = styled(StyledSecondaryButton)<StyledProductButtonProps>`
  width: 100%;
  ${({ $buttonType }) =>
    $buttonType === "edit"
      ? `border: 1px solid var(--color-gray-9f, #9fa6b2);
  background: unset;
  color: var(--color-gray-9f, #9fa6b2);`
      : ""}

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    width: ${({ $createdByMe }) => ($createdByMe ? "10.7rem" : "12.3rem")};
    flex-shrink: 0;
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    width: ${({ $createdByMe }) => ($createdByMe ? "16rem" : "18rem")};
  }
`;

export { StyledPrimaryButton, StyledSecondaryButton, StyledTertiaryButton, StyledProductButton };
