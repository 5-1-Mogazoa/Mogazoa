import { StyledPrimaryButton } from "@/src/components/common/button/Styled/StyledButton";
import { BodyContainer, InputContainer } from "@/src/components/compare/Styled/BodyContainer";
import { ProductInput } from "@/src/components/compare/Styled/StyledProductInput";
import { Label } from "@/src/components/compare/Styled/StyledProductInput";
import { useEffect, useState } from "react";
import { CompareChipA, CompareChipB } from "@/src/components/common/chip/CompareChip";
import { getProducts } from "@/src/apis/product";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "@/src/routes";

type CompareProps = {
  $productName: string;
};
export default function Compare({ $productName }: CompareProps) {
  const [product1, setProduct1] = useState([]);
  const [product2, setProduct2] = useState([]);
  const [isShowChip1, setIsShowChip1] = useState(false);
  const [isShowChip2, setIsShowChip2] = useState(false);
  // const [newProduct1, setNewProduct1] = useState("");
  // const [newProduct2, setNewProduct2] = useState("");

  const handleProductAChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct1(e.target.value);
    if (e.target.value === "") {
      handleDelete();
    }
  };
  const handleProductBChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct2(e.target.value);
  };

  const handleAddProductA = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && product1.trim() !== "") {
      setProduct1(product1);
      setIsShowChip1(true);
    }
  };
  const handleAddProductB = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && product2.trim() !== "") {
      setProduct2(product2);
      setIsShowChip2(true);
    }
  };

  const handleDelete = () => {
    setProduct1("");
    setIsShowChip1(false);
  };

  const [isShow, setIsShow] = useState(false);

  const { data: similarProducts, isSuccess } = useQuery({
    queryKey: [QUERY_KEY.PRODUCTS, { keyword: product1 }],
    queryFn: () => getProducts({ keyword: product1 }),
  });

  console.log(similarProducts);
  // useEffect(() => {
  //   if (isSuccess) {
  //     setIsShow(true);
  //     console.log(similarProducts);
  //     console.log(productName);
  //     if (similarProducts?.list?.length === 0 || productName === "") {
  //       setIsShow(false);
  //     }
  //   }
  // }, [isSuccess, similarProducts]);

  return (
    <BodyContainer>
      <InputContainer>
        <Label>상품1</Label>
        <ProductInput value={product1} onChange={handleProductAChange} onKeyDown={handleAddProductA} />
        {isShowChip1 && (
          <div onClick={handleDelete}>
            <CompareChipA $productName={product1} />
          </div>
        )}
        {isShow && (
          <ul>
            {similarProducts?.list?.map((product) => (
              <li key={product.id} isMatch={productName === product.name}>
                {product.name}
              </li>
            ))}
          </ul>
        )}
      </InputContainer>
      <InputContainer>
        <Label>상품2</Label>
        <ProductInput value={product2} onChange={handleProductBChange} onKeyDown={handleAddProductB} />
        <CompareChipB $productName={product2} />
      </InputContainer>
      <StyledPrimaryButton type="submit">비교하기</StyledPrimaryButton>
    </BodyContainer>
  );
}
