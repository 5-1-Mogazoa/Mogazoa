// import { FieldValues, FormProvider, useForm } from "react-hook-form";
// import * as S from "./styled";
// import Modal from "../../common/modal/Modal";
// import { useEffect, useState } from "react";
// import FormImageInput from "../../common/input/FormImageInput";
// import FormTextareaInput from "../../common/input/FormTextareaInput";
// import ERROR_MESSAGE from "@/src/constant/ERROR_MESSAGE";
// import FormSelectProduct, { selectedOptionType } from "./FormSelectProduct";
// import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
// import { getProductDetail, patchProduct } from "@/src/apis/product";
// import FormSelectCategory from "../../common/input/FormSelectCategory";
// import { postImage } from "@/src/apis/image";
// import { QUERY_KEY } from "@/src/routes";
// import { useRouter } from "next/router";
// import { PatchProductDataType } from "@/src/apis/product/schema";

// interface selectedProductDetailType {
//   name: string;
//   image: string;
//   category: { id: number; name: string };
//   description: string;
// }

// interface newProductDetailType {
//   categoryId: number;
//   image: string;
//   description: string;
//   name: string;
// }

// interface ModalEditProps {
//   userId: number;
//   productId: number;
//   onClose: () => void;
// }

// function ModalEdit({ userId, productId: id, onClose }: ModalEditProps) {
//   const [selectedProductId, setSelectedProductId] = useState(id);

//   const methods = useForm();
//   const { setValue } = methods;
//   const router = useRouter();

//   const queryClient = useQueryClient();

//   // FormSelectProduct의 옵션에 따라 상품 데이터를 불러올 쿼리
//   const { data: selectedProductDetail } = useQuery({
//     queryKey: ["selectedProductDetail", selectedProductId],
//     queryFn: () => getProductDetail(selectedProductId),
//   });

//   // FormSelectProduct에서 옵션선택 Change 이벤트
//   const handleChangeOption = (selectedOption: selectedOptionType) => {
//     queryClient.invalidateQueries({ queryKey: ["selectedProductDetail", selectedProductId] });

//     setSelectedProductId(selectedOption.value);
//   };

//   const { name, image, category, description } = (selectedProductDetail as selectedProductDetailType) || {
//     name: "",
//     image: "",
//     category: { id: 1, name: "" },
//     description: "",
//   };

//   useEffect(() => {
//     setValue("name", name);
//     setValue("categoryId", category.id);
//   }, [setValue, name, category]);

//   // 상품 수정 요청
//   const patchProductMutation = useMutation<PatchProductDataType, newProductDetailType, PatchProductDataType>({
//     mutationFn: (newProductDetail) => patchProduct(selectedProductId, newProductDetail),
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: [QUERY_KEY.PRODUCT_DETAIL, selectedProductId] });
//     },
//   });

//   // 상품편집 저장 버튼 클릭시 발생 이벤트
//   const editProductCallback = async (data: FieldValues) => {
//     const formData = {
//       categoryId: data.categoryId,
//       image: image,
//       description: data.description,
//       name: data.name,
//     };

//     if (data.image) {
//       const newImageUrl = await postImage(data.image);
//       formData.image = newImageUrl.url;
//     }

//     patchProductMutation.mutate(formData, {
//       onSuccess: () => {
//         router.push(`/products/${selectedProductId}`);
//       },
//     });
//   };

//   return (
//     <FormProvider {...methods}>
//       <Modal title="상품편집" modalType="edit" onClose={onClose} callback={editProductCallback} isFormData>
//         <S.Container>
//           <S.ProductWithCategoryWithImage>
//             <S.ProductWithCategory>
//               <FormSelectProduct
//                 productId={selectedProductId}
//                 productName={name}
//                 name="name"
//                 userId={userId}
//                 handleChangeOption={handleChangeOption}
//               />
//               <FormSelectCategory name="categoryId" defaultValue={category.id} categoryName={category.name} />
//             </S.ProductWithCategory>
//             <S.Image>
//               <FormImageInput name="image" defaultValue={image} />
//             </S.Image>
//           </S.ProductWithCategoryWithImage>
//           <FormTextareaInput
//             name="description"
//             rules={{
//               required: { value: true, message: ERROR_MESSAGE.REQUIRED_DESCRIPTION },
//               minLength: { value: 10, message: ERROR_MESSAGE.DESCRIPTION_MAX_LENGTH },
//               maxLength: { value: 500, message: ERROR_MESSAGE.DESCRIPTION_MAX_LENGTH },
//             }}
//             defaultValue={description}
//             placeholder="상품 설명을 입력해 주세요."
//           />
//         </S.Container>
//       </Modal>
//     </FormProvider>
//   );
// }

// export default ModalEdit;

import { FieldValues, FormProvider, useForm } from "react-hook-form";
import * as S from "./styled";
import Modal from "../../common/modal/Modal";
import { useEffect, useState } from "react";
import ERROR_MESSAGE from "@/src/constant/ERROR_MESSAGE";
import { selectedOptionType } from "./FormSelectProduct";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getProductDetail, patchProduct } from "@/src/apis/product";
import { postImage } from "@/src/apis/image";
import { QUERY_KEY } from "@/src/routes";
import { useRouter } from "next/router";
import { PatchProductDataType, ProductDetailResponseType } from "@/src/apis/product/schema";
import { getCategoryList } from "@/src/apis/category";
import { getUserCreated } from "@/src/apis/user";
import FormSelect from "../../common/input/FormSelect";
import FormTextarea from "../../common/input/FormTextarea";
import Toast from "../../common/toast/Toast";
import FormImage from "../../common/input/FormImage";

interface selectedProductDetailType {
  id: number;
  name: string;
  image: string;
  category: { id: number; name: string };
  description: string;
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

function ModalEdit({ userId, productId, productDetail, onClose }: ModalEditProps) {
  const [selectedProductId, setSelectedProductId] = useState(productId);

  const router = useRouter();
  const queryClient = useQueryClient();

  // FormSelectProduct의 옵션에 따라 상품 데이터를 불러올 쿼리
  const { data: selectedProductDetail } = useQuery({
    queryKey: ["selectedProductDetail", selectedProductId],
    queryFn: () => getProductDetail(selectedProductId),
  });

  const { id, name, image, category, description } = (selectedProductDetail as selectedProductDetailType) || {
    id: productDetail?.id,
    name: productDetail?.name,
    image: productDetail?.image,
    category: { id: productDetail?.category.id, name: productDetail?.category.name },
    description: productDetail?.description,
  };

  // user가 생성한 상품조회
  const { data: createdProducts } = useQuery({
    queryKey: [QUERY_KEY.CREATED_PRODUCTS],
    queryFn: () => getUserCreated(userId),
  });

  const userProductList = createdProducts?.list.map((product) => ({
    value: product.id,
    label: product.name,
  })) ?? [{ value: id, label: name }];

  // 카테고리 조회
  const { data: categories } = useQuery({
    queryKey: [QUERY_KEY.CATEGORYS],
    queryFn: () => getCategoryList(),
  });

  const categoryList = categories?.map((category) => ({ value: category.id, label: category.name })) ?? [
    { value: category.id, label: category.name },
  ];

  const defaultValues = {
    name: userProductList.find((list) => list.value === id),
    categoryId: categoryList.find((list) => list.value === category.id),
    image,
    description,
  };

  const methods = useForm({ mode: "onBlur", defaultValues });
  const {
    setValue,
    formState: { errors },
  } = methods;

  useEffect(() => {
    if (selectedProductDetail) {
      setValue("categoryId", { value: category.id, label: category.name });
      setValue("image", image);
      setValue("description", description);
    }
  }, [selectedProductDetail, category.id, category.name, image, description, setValue]);

  // FormSelectProduct에서 옵션선택 Change 이벤트
  const handleChangeOption = (selectedOption: selectedOptionType) => {
    queryClient.invalidateQueries({ queryKey: ["selectedProductDetail", selectedProductId] });

    setSelectedProductId(selectedOption.value);
  };

  // 상품 수정 요청
  const patchProductMutation = useMutation<PatchProductDataType, newProductDetailType, PatchProductDataType>({
    mutationFn: (newProductDetail) => patchProduct(selectedProductId, newProductDetail),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.PRODUCT_DETAIL, selectedProductId] });
    },
  });

  // 상품편집 저장 버튼 클릭시 발생 이벤트
  const editProductCallback = async (data: FieldValues) => {
    const formData = {
      categoryId: data.categoryId.value,
      image: image,
      description: data.description,
      name: data.name.label,
    };

    if (data.image instanceof File) {
      const newImageUrl = await postImage(data.image);
      formData.image = newImageUrl.url;
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
              <FormSelect
                options={userProductList}
                name="name"
                placeholder="상품명(상품 등록 여부를 확인해 주세요)"
                setSelectedProductId={setSelectedProductId}
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
              minLength: { value: 10, message: ERROR_MESSAGE.DESCRIPTION_MAX_LENGTH },
              maxLength: { value: 300, message: ERROR_MESSAGE.DESCRIPTION_MAX_LENGTH },
            }}
            name="description"
            placeholder="상품 설명을 입력해 주세요."
            maxLength={300}
          />
          {errors.description && <Toast type="error" message={errors?.description.message} />}
        </S.Container>
      </Modal>
    </FormProvider>
  );
}

export default ModalEdit;
