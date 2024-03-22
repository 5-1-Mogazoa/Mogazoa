import styled from "styled-components";

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px auto;
  width: 335px;
  gap: 30px;
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
