import { fontStyle } from "@/styles/theme";
import styled from "styled-components";

const RankingWarp = styled.div`
  padding-left: 20px;
  margin-top: 30px;

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    padding-left: 25px;
    margin-top: 40px;
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    width: 250px;
    padding: 0 30px;
    margin-top: 45px;
  }
`;

const RankingTitle = styled.div`
  color: var(--color-white, #f1f1f5);
  margin-bottom: 20px;
  ${fontStyle({ w: 400, s: 14, l: 17 })};

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    margin-bottom: 30px;
    ${fontStyle({ w: 400, s: 16, l: 19 })};
  }
`;

const RankingScroll = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
  font-size: 0;
  scrollbar-width: none;
  gap: 15px;

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    flex-direction: column;
    gap: 30px;
  }
`;

export { RankingWarp, RankingScroll, RankingTitle };
