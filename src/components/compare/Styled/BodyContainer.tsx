import styled from "styled-components";

export const AllContainer = styled.div`
  width: 335px;
  text-align: center;
  justify-content: center;
  margin: 0 auto;

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    width: 684px;
  }
  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    width: 940px;
  }
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  margin: 30px auto;
  width: 100%;
  gap: 30px;
  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    flex-direction: row;
  }
`;

const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  position: relative;
`;
const StyledTagContainer = styled.div`
  position: relative;
`;

const StyledChipContainer = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 10px;
`;
export {
  StyledInputContainer as InputContainer,
  StyledTagContainer as TagContainer,
  StyledChipContainer as ChipContainer,
};
