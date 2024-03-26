import { FieldValues, FormProvider, useForm, useFormContext } from "react-hook-form";
import * as S from "./Styled/StyledModalProductAdd.tsx";
import Modal from "../../common/modal/Modal";
import ERROR_MESSAGE from "@/src/constant/ERROR_MESSAGE";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postProduct } from "@/src/apis/product";
import FormSelectCategory from "../../common/input/FormSelectCategory";
import { postImage } from "@/src/apis/image";
import { API_ROUTE } from "@/src/routes";
import FormNameInput from "@/src/components/common/input/FormNameInput";
import { copyFileSync } from "fs";
import FormTextarea from "@/src/components/common/input/FormTextarea";
import FormImage from "../../common/input/FormImage";
import { PatchProductDataType } from "@/src/apis/product/schema.js";
interface ModalProductAddProps {
  onClose: () => void;
}

export default function ModalProductAdd({ onClose }: ModalProductAddProps) {
  const methods = useForm();
  const queryClient = useQueryClient();

  const { name, image, category, description } = {
    name: "",
    image: "",
    category: { id: 1, name: "음악" },
    description: "",
  };

  // 상품 생성 요청
  const postProductMutation = useMutation({
    mutationFn: (newProduct: PatchProductDataType) => postProduct(newProduct),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [API_ROUTE.PRODUCTS] });
    },
    onError: (error: any) => {
      const err = error.response.data.details;
      if (err["requestBody.image"]) {
        alert("이미지가 필요합니다.");
      } else if (err.name.message) {
        alert(err.name.message);
      }
    },
  });

  interface PostProductRequestType {
    categoryId: number;
    image: string;
    description: string;
    name: string;
  }

  // 상품 생성 버튼 클릭시 발생 이벤트
  const postProductCallback = async (data: FieldValues) => {
    if (!data.categoryId) {
      data.categoryId = 1;
    } else {
      data.categoryId = data.categoryId.value;
    }

    if (data.image) {
      let newImageUrl = await postImage(data.image);
      data.image = newImageUrl.url;
    }

    postProductMutation.mutate(data as PatchProductDataType, {
      onSuccess: () => {
        console.log("상품이 성공적으로 업로드 되었습니다!");
      },
      onError: (error) => console.error(error),
    });
  };

  return (
    <FormProvider {...methods}>
      <Modal title="상품 추가" modalType="edit" onClose={onClose} callback={postProductCallback} isFormData>
        <S.Container>
          <S.ProductWithCategoryWithImage>
            <S.ProductWithCategory>
              <FormNameInput
                name="name"
                defaultValue={name}
                rules={{
                  required: { value: true, message: ERROR_MESSAGE.PRODUCT_NAME },
                  minLength: { value: 1, message: ERROR_MESSAGE.PRODUCT_MIN_LENGTH },
                  maxLength: { value: 20, message: ERROR_MESSAGE.PRODUCT_MAX_LENGTH },
                }}
              />
              <FormSelectCategory name="categoryId" defaultValue={category.id} categoryName={category.name} />
            </S.ProductWithCategory>
            <S.Image>
              <FormImage name="image" defaultValue={image} />
            </S.Image>
          </S.ProductWithCategoryWithImage>
          <FormTextarea
            rules={{
              required: { value: true, message: ERROR_MESSAGE.REQUIRED_DESCRIPTION },
              minLength: { value: 10, message: ERROR_MESSAGE.DESCRIPTION_MIN_LENGTH },
              maxLength: { value: 300, message: ERROR_MESSAGE.DESCRIPTION_MAX_LENGTH },
            }}
            name="description"
            placeholder="상품 설명을 입력해 주세요."
            maxLength={300}
          />
        </S.Container>
      </Modal>
    </FormProvider>
  );
}
