import { FieldValues, FormProvider, useForm } from "react-hook-form";
import * as S from "./styled";
import Modal from "../../common/modal/Modal";
import { useState } from "react";
import FormImageInput from "../../common/input/FormImageInput";
import FormTextareaInput from "../../common/input/FormTextareaInput";
import ERROR_MESSAGE from "@/src/constant/ERROR_MESSAGE";
import FormSelectProduct from "./FormSelectProduct";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getProductDetail, patchProduct } from "@/src/apis/product";
import FormSelectCategory from "../../common/input/FormSelectCategory";
import { postImage } from "@/src/apis/image";
import { QUERY_KEY } from "@/src/routes";
import { useRouter } from "next/router";

interface selectedProductDetailType {
  name: string;
  image: string;
  category: { id: number; name: string };
  description: string;
}

interface ModalEditProps {
  userId: number;
  productId: number;
  onClose: () => void;
}

function ModalEdit({ userId, productId: id, onClose }: ModalEditProps) {
  const [selectedProductId, setSelectedProductId] = useState(id);

  const methods = useForm();
  const router = useRouter();

  const queryClient = useQueryClient();

  // FormSelectProduct의 옵션에 따라 상품 데이터를 불러올 쿼리
  const { data: selectedProductDetail } = useQuery({
    queryKey: ["selectedProductDetail", selectedProductId],
    queryFn: () => getProductDetail(selectedProductId),
  });

  // FormSelectProduct에서 옵션선택 Change 이벤트
  const handleChangeOption = (selectedOption) => {
    queryClient.invalidateQueries({ queryKey: ["selectedProductDetail", selectedProductId] });

    setSelectedProductId(selectedOption.value);
  };

  const { name, image, category, description } = (selectedProductDetail as selectedProductDetailType) || {
    name: "",
    image: "",
    category: { id: 1, name: "" },
    description: "",
  };

  // 상품 수정 요청
  const patchProductMutation = useMutation({
    mutationFn: (newProductDetail) => patchProduct(selectedProductId, newProductDetail),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.PRODUCT_DETAIL, selectedProductId] });
    },
  });

  // 상품편집 저장 버튼 클릭시 발생 이벤트
  const editProductCallback = async (data: FieldValues) => {
    const formData = {
      categoryId: category.id,
      image: image,
      description: description,
      name: name,
    };

    if (data.categoryId) {
      formData.categoryId = data.categoryId.value;
    }

    if (data.description) {
      formData.description = data.description;
    }

    if (data.name) {
      formData.name = data.name;
    }

    if (data.image) {
      let newImageUrl = await postImage(data.image);
      formData.image = newImageUrl;
    }

    patchProductMutation.mutate(formData, {
      onSuccess: () => {
        router.push(`/products/${selectedProductId}`);
      },
    });
  };

  return (
    <FormProvider {...methods}>
      <Modal title="상품편집" modalType="edit" onClose={onClose} callback={editProductCallback} isFormData>
        <S.Container>
          <S.ProductWithCategoryWithImage>
            <S.ProductWithCategory>
              <FormSelectProduct
                productId={selectedProductId}
                name="name"
                userId={userId}
                setProductId={setSelectedProductId}
                handleChangeOption={handleChangeOption}
              />
              <FormSelectCategory name="categoryId" defaultValue={category.id} categoryName={category.name} />
            </S.ProductWithCategory>
            <S.Image>
              <FormImageInput name="image" defaultValue={image} />
            </S.Image>
          </S.ProductWithCategoryWithImage>
          <FormTextareaInput
            name="description"
            rules={{
              required: { value: true, message: ERROR_MESSAGE.REQUIRED_DESCRIPTION },
              minLength: { value: 10, message: ERROR_MESSAGE.DESCRIPTION_MAX_LENGTH },
              maxLength: { value: 500, message: ERROR_MESSAGE.DESCRIPTION_MAX_LENGTH },
            }}
            defaultValue={description}
            placeholder="상품 설명을 입력해 주세요."
          />
        </S.Container>
      </Modal>
    </FormProvider>
  );
}

export default ModalEdit;
