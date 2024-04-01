import { FieldValues, FormProvider, useForm } from "react-hook-form";
import * as S from "./styled";
import Modal from "../../common/modal/Modal";
import ERROR_MESSAGE from "@/src/constant/ERROR_MESSAGE";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { patchProduct } from "@/src/apis/product";
import { postImage } from "@/src/apis/image";
import { QUERY_KEY } from "@/src/routes";
import { useRouter } from "next/router";
import { PatchProductDataType, ProductDetailResponseType } from "@/src/apis/product/schema";
import { getCategoryList } from "@/src/apis/category";
import FormSelect from "../../common/input/FormSelect";
import FormTextarea from "../../common/input/FormTextarea";
import FormImage from "../../common/input/FormImage";
import FormProductNameInput from "../../common/input/FormProductNameInput";
import axios from "axios";
import { useToggle } from "usehooks-ts";

export interface SelectOptionType {
  readonly value: number;
  readonly label: string;
  readonly isDisabled: boolean;
}

interface newProductDetailType {
  categoryId: number;
  image: string;
  description: string;
  name: string;
}

interface ModalEditProps {
  userId: number;
  productId: number;
  productDetail: ProductDetailResponseType | undefined;
  onClose: () => void;
}

function ModalEdit({ productDetail, onClose }: ModalEditProps) {
  const router = useRouter();
  const queryClient = useQueryClient();

  const [errorModal, errorToggle, setErrorModal] = useToggle();
  const { id, name, image, category, description } = productDetail as ProductDetailResponseType;

  // 카테고리 조회
  const { data: categories } = useQuery({
    queryKey: [QUERY_KEY.CATEGORYS],
    queryFn: () => getCategoryList(),
  });

  const categoryList = categories?.map((category) => ({ value: category.id, label: category.name })) ?? [
    { value: category.id, label: category.name },
  ];

  const defaultValues = {
    name: name,
    categoryId: categoryList.find((list) => list.value === category.id),
    image,
    description,
  };

  const methods = useForm({ mode: "onBlur", defaultValues });

  // 상품 수정 요청
  const patchProductMutation = useMutation<PatchProductDataType, newProductDetailType, PatchProductDataType>({
    mutationFn: (newProductDetail) => patchProduct(id, newProductDetail),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.PRODUCT_DETAIL, id] });
    },
    onError: (error: unknown) => {
      if (!axios.isAxiosError(error)) return;

      const errorDetail = error.response?.data.details;
      if (errorDetail.name.message) {
        setErrorModal(true);
      }
    },
  });

  // 상품편집 저장 버튼 클릭시 발생 이벤트
  const editProductCallback = async (data: FieldValues): Promise<boolean> => {
    const formData = {
      categoryId: data.categoryId.value,
      image: image,
      description: data.description,
      name: data.name,
    };

    if (data.image instanceof File) {
      const newImageUrl = await postImage(data.image);
      formData.image = newImageUrl.url;
    }

    try {
      await patchProductMutation.mutateAsync(formData, {
        onSuccess: () => {
          router.push(`/products/${id}`);
        },
      });
      return true;
    } catch {
      return false;
    }
  };

  return (
    <>
      <FormProvider {...methods}>
        <Modal title="상품편집" modalType="edit" onClose={onClose} callback={editProductCallback} isFormData>
          <S.Container>
            <S.ProductWithCategoryWithImage>
              <S.ProductWithCategory>
                <FormProductNameInput
                  rules={{
                    required: { value: true, message: ERROR_MESSAGE.REQUIRED_PRODUCT_NAME },
                    maxLength: { value: 20, message: ERROR_MESSAGE.PRODUCT_MAX_LENGTH },
                  }}
                  name="name"
                  maxLength={20}
                  defaultValue={name}
                  placeholder="상품명(상품 등록 여부를 확인해 주세요)"
                />
                <FormSelect options={categoryList} name="categoryId" placeholder="카테고리 선택" />
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
      {errorModal && (
        <Modal title="이미 등록된 상품명이에요." modalType="edit_error_name" onClose={() => setErrorModal(false)} />
      )}
    </>
  );
}

export default ModalEdit;
