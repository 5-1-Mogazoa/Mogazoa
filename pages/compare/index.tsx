import { StyledPrimaryButton } from "@/src/components/common/button/Styled/StyledButton";
import {
  BodyContainer,
  InputContainer,
  TagContainer,
  ChipContainer,
} from "@/src/components/compare/Styled/BodyContainer";
import { ProductInput } from "@/src/components/compare/Styled/StyledProductInput";
import { Label } from "@/src/components/compare/Styled/StyledProductInput";
import { useEffect, useState } from "react";
import { CompareChipA, CompareChipB } from "@/src/components/common/chip/CompareChip";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "@/src/routes";
import { getProducts } from "@/src/apis/product";
import { CompareTable } from "@/src/components/compare/Compare";
import Product1 from "@/src/components/compare/Product1";
import Product2 from "@/src/components/compare/Product2";

export default function Compare() {
  const [productAData, setProductAData] = useState<any>();
  const [productBData, setProductBData] = useState<any>();
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => setIsOpen(true);
  const handleTableClose = () => setIsOpen(false);

  const handleProductAData = (data: string) => {
    setProductAData(data);
  };

  const handleProductBData = (data: string) => {
    setProductBData(data);
  };

  return (
    <>
      <BodyContainer>
        <Product1 handleProductAData={handleProductAData} handleTableClose={handleTableClose} />
        <Product2 handleProductBData={handleProductBData} handleTableClose={handleTableClose} />
        <StyledPrimaryButton onClick={handleIsOpen}>비교하기</StyledPrimaryButton>
      </BodyContainer>
      {/* products.data === undefined && 
      <Loading /> : <comparetable /> */}
      {isOpen && <CompareTable productAData={productAData} productBData={productBData} />}
    </>
  );
}
