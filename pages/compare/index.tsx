import { StyledPrimaryButton } from "@/src/components/common/button/Styled/StyledButton";
import { BodyContainer, InputContainer } from "@/src/components/compare/Styled/BodyContainer";
import { ProductInput } from "@/src/components/compare/Styled/StyledProductInput";
import { Label } from "@/src/components/compare/Styled/StyledProductInput";
import { useState } from "react";
import { CompareChipA, CompareChipB } from "@/src/components/common/chip/CompareChip";

type CompareProps = {
  $productName: string;
};
export default function Compare({ $productName }: CompareProps) {
  const [product1, setProduct1] = useState([]);
  const [product2, setProduct2] = useState([]);
  const [newProduct1, setNewProduct1] = useState("");
  const [newProduct2, setNewProduct2] = useState("");

  const handleProductAChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct1(e.target.value);
  };
  const handleProductBChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct2(e.target.value);
  };

  const handleAddProductA = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "enter" && newProduct1.trim() !== "") {
      setProduct1([...product1, newProduct1]);
      setNewProduct1("");
    }
  };
  const handleAddProductB = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "enter" && newProduct1.trim() !== "") {
      setProduct2([...product2, newProduct2]);
      setNewProduct2("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //compare 로직 수행
  };
  return (
    <div>
      <BodyContainer>
        <InputContainer>
          <Label>상품1</Label>
          <ProductInput onChange={handleProductAChange} onKeyDown={handleAddProductA} />
          <CompareChipA $productName={product1} />
        </InputContainer>
        <InputContainer>
          <Label>상품2</Label>
          <ProductInput value={product2} onChange={handleProductBChange} onKeyDown={handleAddProductB} />
          <CompareChipB $productName={product2} />
        </InputContainer>
        <StyledPrimaryButton type="submit">비교하기</StyledPrimaryButton>
      </BodyContainer>
      <TableContainer>
        <CompareTable />
      </TableContainer>
      {/* <IndexPage /> */}
    </div>
  );
}
