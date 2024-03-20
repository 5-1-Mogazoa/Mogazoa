import ReactNode from "react"; // Import ReactNode directly
import styled from "styled-components";

export default function MyActivity() {
  return (
    <StyledMyActivities>
      {/* Add content for your activity display here */}
    </StyledMyActivities>
  );
}

const StyledMyActivities = styled.div`
  display: flex;
  width: 300px;
  padding: 30px 105px;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background-color: var(--black-black_252530, #252530);
  border-radius: 12px;
  color: white;
`;
