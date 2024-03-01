import { useState } from "react";
import { StyledThumbs, StyledThumbsIcon } from "./Styled/StyledThumbs";

export default function Thumbs() {
  const [isClicked, setIsClicked] = useState(false);
  const [testCount, setTestCount] = useState(100);

  const handleClicked = () => {
    setIsClicked(!isClicked);
    setTestCount(isClicked ? testCount - 1 : testCount + 1);
  };

  return (
    <StyledThumbs onClick={handleClicked} $isClicked={isClicked}>
      <StyledThumbsIcon $isClicked={isClicked} />
      {testCount}
    </StyledThumbs>
  );
}
