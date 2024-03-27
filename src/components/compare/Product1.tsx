import {
  BodyContainer,
  InputContainer,
  TagContainer,
  ChipContainer,
} from "@/src/components/compare/Styled/BodyContainer";
import { ProductInput } from "@/src/components/compare/Styled/StyledProductInput";
import { Label } from "@/src/components/compare/Styled/StyledProductInput";
import { useEffect, useState } from "react";
import { CompareChipA } from "@/src/components/common/chip/CompareChip";
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEY } from "@/src/routes";
import { getProductDetail, getProducts } from "@/src/apis/product";
import { ProductCheckedNameWrap, ProductCheckedNameItem } from "@/src/components/compare/Styled/StyledItem";

type Product1Props = {
  handleProductAData: (productName: string) => void;
  handleTableClose: () => void;
};

export default function Product1({ handleProductAData, handleTableClose }: Product1Props) {
  const [product1, setProduct1] = useState("");
  const [product1Chip, setProduct1Chip] = useState("");
  const [productId, setProductId] = useState(0);
  const [readOnly, setReadOnly] = useState(false);
  const [isShowChip1, setIsShowChip1] = useState(false);
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("productAName")) {
      setProduct1(localStorage.getItem("productAName") as string);
      setProduct1Chip(localStorage.getItem("productAName") as string);
      setProductId(Number(localStorage.getItem("productAId")));
      setReadOnly(true);
      setIsShowChip1(true);
      setProduct1("");
    }
  }, []);

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
      const inputElement = e.target as HTMLInputElement;
      setProduct1Chip(inputElement.value);
      setProduct1("");
      setReadOnly(true);
      setIsShowChip1(true);
    }
  };
  const handleDelete = () => {
    setIsShowChip1(false);
    setReadOnly(false);
    handleTableClose();
    handleProductAData("");
    localStorage.removeItem("productAName");
    localStorage.removeItem("productAId");
  };

  const handleClickSearch = (e: React.MouseEvent<HTMLLIElement>) => {
    const productName = e.currentTarget.innerText;
    setProduct1Chip(productName);
    setReadOnly(true);
    setIsShowChip1(true);
    setProduct1("");
  };

  const { data: productA, isSuccess } = useQuery({
    queryKey: [QUERY_KEY.PRODUCTS, { keyword: product1Chip }],
    queryFn: () => getProducts({ keyword: product1Chip }),
    enabled: !!product1Chip,
  });

  const { data: productADetail } = useQuery({
    queryKey: [QUERY_KEY.PRODUCT_DETAIL, productId],
    queryFn: () => getProductDetail(productId),
    // enabled: !!product2Chip,
  });

  useEffect(() => {
    console.log(productADetail);
    handleProductAData(productADetail);
    if (productADetail) {
      //undefined 안뜨게 if로 조건 설정
      localStorage.setItem("productAName", productADetail?.name);
      localStorage.setItem("productAId", String(productADetail?.id));
    }
  }, [productADetail]);

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
  }, [isSuccess, productA, product1Chip, productOneData]);

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
            {productA?.list?.map((product) => (
              <ProductCheckedNameItem
                key={product.id}
                onClick={(e) => {
                  handleClickSearch(e);
                  setProductId(product.id);
                }}>
                {product.name}
              </ProductCheckedNameItem>
            ))}
          </ProductCheckedNameWrap>
        )}
      </InputContainer>
    </>
  );
}
