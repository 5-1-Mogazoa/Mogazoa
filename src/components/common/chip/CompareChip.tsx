import {
  StyledCompareChipA,
  StyledCompareChipB,
  StyledCompareChipCloser,
  StyledCompareChipCloserIcon,
} from "./Styled/StyledCompareChip";

type CompareChipProps = {
  $productName: string;
};

function CompareChipA({ $productName }: CompareChipProps) {
  return (
    <>
      <StyledCompareChipA>
        {$productName}
        <StyledCompareChipCloser>
          <StyledCompareChipCloserIcon />
        </StyledCompareChipCloser>
      </StyledCompareChipA>
    </>
  );
}

function CompareChipB({ $productName }: CompareChipProps) {
  return (
    <>
      <StyledCompareChipB>
        {$productName}
        <StyledCompareChipCloser>
          <StyledCompareChipCloserIcon />
        </StyledCompareChipCloser>
      </StyledCompareChipB>
    </>
  );
}

export { CompareChipA, CompareChipB };
