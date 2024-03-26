import ReactNode from "react"; // Import ReactNode directly
import styled from "styled-components";
import { fontStyle } from "@/styles/theme";

const StyledFilter = styled.div`
  margin-top: 60px;
  margin-bottom: 30px;
`;
const StyledFilterButton = styled.button<{ $active?: boolean }>`
  color: ${(props) => (props.$active ? "white" : "#6E6E82")};
  margin-right: 20px;
  font-family: Pretendard;
  ${fontStyle({ w: 600, s: 18, l: 21 })};
  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    ${fontStyle({ w: 600, s: 20, l: 24 })};
  }
`;

export default function FilterProduct({ dataType, setDataType }) {
  return (
    <div>
      <StyledFilter>
        <StyledFilterButton $active={dataType === "REVIEWED"} onClick={() => setDataType("REVIEWED")}>
          리뷰 남긴 상품
        </StyledFilterButton>
        <StyledFilterButton $active={dataType === "CREATED"} onClick={() => setDataType("CREATED")}>
          등록한 상품
        </StyledFilterButton>
        <StyledFilterButton $active={dataType === "FAVORITE"} onClick={() => setDataType("FAVORITE")}>
          찜한 상품
        </StyledFilterButton>
      </StyledFilter>
    </div>
  );
}
