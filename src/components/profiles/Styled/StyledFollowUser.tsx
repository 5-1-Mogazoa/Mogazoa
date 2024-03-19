import styled from "styled-components";
import { fontStyle } from "@/styles/theme";

type StyledProfileProps = {
  $image: string | null;
};

const StyledProfileUl = styled.ul`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  height: 456px;
  overflow-y: auto;

  scrollbar-width: thin;
  scrollbar-color: transparent transparent;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 3px;
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    margin-top: 40px;
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    gap: 25px;
    height: 514px;
  }
`;

const StyledProfileContainer = styled.li`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const StyledProfileImage = styled.div<StyledProfileProps>`
  width: 48px;
  height: 48px;
  border-radius: 100px;
  background: url(${({ $image }) => ($image ? $image : `${location.origin}/icons/default_profile.svg`)}) no-repeat
    center / cover;

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    width: 52px;
    height: 52px;
  }
`;
const StyledUserName = styled.div`
  color: var(--color-white-f1, #f1f1f5);
  font-family: Pretendard;
  font-style: normal;
  ${fontStyle({ w: 500, s: 16, l: 18 })};

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    ${fontStyle({ w: 400, s: 18, l: 20 })};
  }
`;

export { StyledProfileContainer, StyledProfileImage, StyledProfileUl, StyledUserName };
