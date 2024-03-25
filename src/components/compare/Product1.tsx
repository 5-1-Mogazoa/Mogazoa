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
import { ProductCheckedNameWrap, ProductCheckedNameItem } from "@/src/components/compare/Styled/StyledItem";

type Product1Props = {
  product1: string;
  setProduct1: React.Dispatch<React.SetStateAction<string>>;
  setProduct1Chip: React.Dispatch<React.SetStateAction<string>>;
  setIsShowChip1: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function Product1({ product1, setProduct1, setProduct1Chip, setIsShowChip1 }: Product1Props) {
  // const [product1, setProduct1] = useState("");
  // const [product1Chip, setProduct1Chip] = useState("");
  const [readOnly, setReadOnly] = useState(false);
  // const [isShowChip1, setIsShowChip1] = useState(false);
  const [isShow, setIsShow] = useState(false);

  const handleProductAChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProduct1(e.target.value);
    setProduct1Chip(e.target.value);
    setReadOnly(false);
    if (e.target.value === "") {
      handleDelete();
    }
  };
  const handleAddProductA = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && product1.trim() !== "") {
      setProduct1Chip(e.target.value);
      setProduct1("");
      setReadOnly(true);
      setIsShowChip1(true);
    }
  };
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
  const { data: similarProducts, isSuccess } = useQuery({
    queryKey: [QUERY_KEY.PRODUCTS, { keyword: product1Chip }],
    queryFn: () => getProducts({ keyword: product1Chip }),
    enabled: !!setProduct1Chip,
  });
  const [productOneData, setProductOneData] = useState<any>();
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
  }, [isSuccess, similarProducts, product1Chip, productOneData]);

  return (
    <>
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
    </>
  );
}
