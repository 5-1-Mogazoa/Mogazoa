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

type CompareProps = {
  $productName: string;
};

export default function Compare(): CompareProps {
  const [productOneData, setProductOneData] = useState<any>();
  const [similarProducts, setSimilarProducts] = useState<any>(); // similarProducts 상태 추가

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setProductOneData(similarProducts?.list[0]);
  };
  const handleSearchProduct = async (productName: string) => {
    const data = await getProducts({ keyword: productName });
    setSimilarProducts(data);
  };
  return (
    <>
      <BodyContainer>
        <form onSubmit={handleSubmit}>
          <Product1 handleSearchProduct={handleSearchProduct} setSimilarProducts={setSimilarProducts} />

          <Product2 />
          <StyledPrimaryButton type="submit">비교하기</StyledPrimaryButton>
        </form>
      </BodyContainer>
      {/* <Loading /> */}
      {/* <CompareTable productOneData={productOneData} /> */}
    </>
  );
}
