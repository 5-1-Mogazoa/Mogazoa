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
`;

export { StyledInputContainer as InputContainer };
