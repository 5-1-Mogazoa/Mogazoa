import { StyledPrimaryButton } from "@/src/components/common/button/Styled/StyledButton";
import { AllContainer, BodyContainer } from "@/src/components/compare/Styled/BodyContainer";
import { useState } from "react";

import { CompareTable } from "@/src/components/compare/Compare";
import Product1 from "@/src/components/compare/Product1";
import Product2 from "@/src/components/compare/Product2";
type CompareProps = {
  productAData: any;
  productBData: any;
  handleProductAData: (productName: string) => void;
  handleTableClose: () => void;
};
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
      <AllContainer>
        <BodyContainer>
          <Product1 handleProductAData={handleProductAData} handleTableClose={handleTableClose} />
          <Product2 handleProductBData={handleProductBData} handleTableClose={handleTableClose} />
          <StyledPrimaryButton disabled={!(productAData && productBData)} onClick={handleIsOpen}>
            비교하기
          </StyledPrimaryButton>
        </BodyContainer>

        {isOpen && <CompareTable productAData={productAData} productBData={productBData} />}
      </AllContainer>
    </>
  );
}
