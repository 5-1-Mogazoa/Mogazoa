import { StyledLetterCount, StyledTextBox, StyledTextBoxContainer } from "./Styled/StyledTextBox";

type TextBoxProps = {
  $placeHolderText: string;
};

export default function TextBox({ $placeHolderText }: TextBoxProps) {
  return (
    <StyledTextBoxContainer>
      <StyledTextBox placeholder={$placeHolderText} />
      <StyledLetterCount>2 / 300</StyledLetterCount>
    </StyledTextBoxContainer>
  );
}
