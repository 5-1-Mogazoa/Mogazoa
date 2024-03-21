  import styeld from "styled-components";
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
  import styled, { css } from "styled-components";
  import { fontStyle } from "@/styles/theme";
  
  type CompareProps = {
    $productName: string;
  };
  
  
  
  const [product1, setProduct1] = useState("");
  const [product1Chip, setProduct1Chip] = useState("");
  const [readOnly, setReadOnly] = useState(false);
  const [isShowChip1, setIsShowChip1] = useState(false);
  // const [product2, setProduct2] = useState("");
  // const [isShowChip2, setIsShowChip2] = useState(false);
  // const [newProduct1, setNewProduct1] = useState("");
  // const [newProduct2, setNewProduct2] = useState("");
  export default function Compare({ $productName }: CompareProps) {
  const handleProductAChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct1(e.target.value);
    setProduct1Chip(e.target.value);
    setReadOnly(false);
    if (e.target.value === "") {
      handleDelete();
    }
  };
  const handleProductBChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct2(e.target.value);
  };

  const handleAddProductA = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && product1.trim() !== "") {
      setProduct1Chip(e.target.value);
      setProduct1("");
      setReadOnly(true);
      setIsShowChip1(true);
    }
  };
  // const handleAddProductB = (e: React.KeyboardEvent<HTMLInputElement>) => {
  //   if (e.key === "Enter" && product2.trim() !== "") {
  //     setProduct2(product2);
  //     setIsShowChip2(true);
  //   }
  // };

  const handleDelete = () => {
    setIsShowChip1(false);
    setReadOnly(false);
  };
  const handleClickSearch = (e: React.MouseEvent<HTMLInputElement>) => {
    const productName = e.currentTarget.innerText;
    setProduct1Chip(productName);
    setReadOnly(true);
    setIsShowChip1(true);
    setProduct1("");
  };
  const [isShow, setIsShow] = useState(false);

  const { data: similarProducts, isSuccess } = useQuery({
    queryKey: [QUERY_KEY.PRODUCTS, { keyword: product1Chip }],
    queryFn: () => getProducts({ keyword: product1Chip }),
    enabled: !!product1Chip,
  });

  console.log(similarProducts.list.);
  // 변수에 저장하고, 테이블 컴포넌트에 값을 내려줌?
  // 비교까지 다해서, 값만 내려주면? 테이블 컴포넌트에서 

  useEffect(() => {
    setIsShow(false);
    console.log(product1);
    if (isSuccess) {
      if (product1 === "") {
        setIsShow(false);
      } else {
        setIsShow(true);
      }
    }
  }, [isSuccess, similarProducts, product1Chip]);
  return (
    <BodyContainer>
      <InputContainer>
        <Label>상품1</Label>
        <TagContainer>
          <ProductInput
            value={product1}
            onChange={handleProductAChange}
            onKeyDown={handleAddProductA}
            readOnly={readOnly}
          />
          {isShowChip1 && (
            <ChipContainer onClick={handleDelete}>
              <CompareChipA $productName={product1Chip} />
            </ChipContainer>
          )}
        </TagContainer>
        {isShow && (
          <ProductCheckedNameWrap>
            {similarProducts?.list?.map((product) => (
              <ProductCheckedNameItem key={product.id} onClick={handleClickSearch}>
                {product.name}
              </ProductCheckedNameItem>
            ))}
          </ProductCheckedNameWrap>
        )}
      </InputContainer>
      {/* <InputContainer>
        <Label>상품2</Label>
        <ProductInput value={product2} onChange={handleProductBChange} onKeyDown={handleAddProductB} />
        <CompareChipB $productName={product2} />
      </InputContainer> */}
      <StyledPrimaryButton type="submit">비교하기</StyledPrimaryButton>
    </BodyContainer>
  );
}
const ProductCheckedNameWrap = styled.ul`
  display: flex;
  width: 295px;
  padding: 10px;
  flex-direction: column;
  gap: 5px;
  border-radius: 8px;
  border: 1px solid var(--color-black-35, #353542);
  background: var(--color-black-25, #252530);
  position: absolute;
  top: 80px;
  z-index: 1;

  @media (min-width: ${({ theme }) => theme.deviceSizes.tablet}) {
    width: 360px;
  }
`;

// const matchedStyles = css`
//   background: var(--color-black-35, #353542);
//   color: var(--color-white, #f1f1f5);
// `;

const ProductCheckedNameItem = styled.li`
  display: flex;
  padding: 6px 20px;
  gap: 10px;
  border-radius: 6px;
  color: var(--color-gray-6e, #6e6e82);
  ${fontStyle({ w: 400, s: 14, l: 20 })};
  // ${(props) => props.isMatch && matchedStyles}

  &:hover {
    background: var(--color-black-35, #353542);
    color: var(--color-white, #f1f1f5);
  }

  @media (min-width: ${({ theme }) => theme.deviceSizes.desktop}) {
    ${fontStyle({ w: 400, s: 16, l: 22 })};
  }
`;
