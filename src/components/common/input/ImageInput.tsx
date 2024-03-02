import { useState } from "react";
import { StyledEmptyImageIcon, StyledImageBox, StyledImageInput } from "./Styled/StyledImageInput";

export default function ImageInput() {
  const [imageURL, setImageURL] = useState<string>("");

  return (
    <>
      <label htmlFor="image">
        <StyledImageBox $imageURL={imageURL}>{!imageURL && <StyledEmptyImageIcon />}</StyledImageBox>
      </label>
      <StyledImageInput id="image" type="file" />
    </>
  );
}
