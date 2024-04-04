import styled from "styled-components";
import { fontStyle } from "@/styles/theme";
import { API_ROUTE } from "./../../../routes";

const StyledResultContainer = styled.div`
  color: var(--white-white_F1F1F5, #f1f1f5);
  text-align: center;
  padding: 60px 0 40px;

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    padding: 100px 0 60px;
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    padding: 80px 0 40px;
  }
`;

const StyledResultWinner = styled.div`
  width: 179px;
  margin: 0 auto;
  color: var(--white-white_F1F1F5, #f1f1f5);
  margin-bottom: 20px;
  ${fontStyle({ w: 600, s: 20, l: 28 })};

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    width: 100%;
    text-align: center;
    ${fontStyle({ w: 600, s: 24, l: 29 })};
  }
`;
const StyledResultProduct1 = styled.span`
  color: var(--green-green_FFC83C, #05d58b);
`;
const StyledResultProduct2 = styled.span`
  color: var(--pink-pink_FF1066, #ff2f9f);
`;

const StyledResultDes = styled.span`
  color: var(--gray-gray_9FA6B2, #9fa6b2);
  text-align: center;

  ${fontStyle({ w: 400, s: 12, l: 10 })}
  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    ${fontStyle({ w: 400, s: 16, l: 19 })}
  }
`;
const StyledFinalResult = styled.span`
  color: var(--color-main-blue, #5097fa);
`;

const StyledTable = styled.table`
  width: 100%;
  height: 31.8rem;
  color: var(--gray-gray_9FA6B2, #9fa6b2);
  text-align: center;
  justify-content: center;
  border-radius: 12px;
  border: 1px solid var(--black-black_353542, #353542);
  background: var(--black-black_252530, #252530);
  border-collapse: collapse;

  ${fontStyle({ w: 400, s: 12, l: 10 })};

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    ${fontStyle({ w: 400, s: 14, l: 17 })};
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    width: 940px;
    margin: 0 auto;
    ${fontStyle({ w: 400, s: 16, l: 19 })};
  }
`;

const StyledTableline = styled.th`
  border-bottom: 1px solid var(--black-black_353542, #353542);
  padding: 15px 0;
  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    padding: 20px 0;
  }
`;

const StyledTableWhite = styled.td`
  color: var(--white-white_F1F1F5, #f1f1f5);
  text-align: center;
`;

const StyledTableWin1 = styled.td`
  color: var(--green-green_FFC83C, #05d58b);
  text-align: center;
`;

const StyledTableWin2 = styled.td`
  color: var(--pink-pink_FF2F9F, #ff2f9f);
  text-align: center;
`;

export {
  StyledResultContainer as ResultContainer,
  StyledResultWinner as ResultWinner,
  StyledResultProduct1 as ResultProduct1,
  StyledResultProduct2 as ResultProduct2,
  StyledResultDes as ResultDes,
  StyledTable as Table,
  StyledTableline as Tableline,
  StyledTableWhite as TableWhite,
  StyledTableWin1 as Win1,
  StyledTableWin2 as Win2,
  StyledFinalResult as FinalResult,
};
